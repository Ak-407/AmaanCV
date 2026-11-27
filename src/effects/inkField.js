const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const smokeOpacity = .75;
const tintSteps = 64;

// Mix each palette once. Both color versions then share the same dye and movement.
function makeTints([base, edge, paper], portrait) {
  const washes = portrait ? tintSteps : 1;
  const colors = new Uint8ClampedArray(washes * tintSteps * 4);
  for (let w = 0; w < washes; w++) {
    for (let shade = 0; shade < tintSteps; shade++) {
      const offset = (w * tintSteps + shade) * 4;
      for (let c = 0; c < 3; c++) {
        const ink = base[c] + (edge[c] - base[c]) * shade / (tintSteps - 1);
        colors[offset + c] = ink + (paper[c] - ink) * w / (tintSteps - 1);
      }
    }
  }
  return new Uint32Array(colors.buffer);
}

// Carry a small grid of dye through a curl field. Drawing the transparent grid over
// the real DOM keeps the photograph sharp and leaves links and selection accessible.
export function createInkField(canvas, { width, height, portrait, palettes }) {
  const context = canvas.getContext('2d');
  if (!context) return null;
  canvas.width = width;
  canvas.height = height * 2;
  const count = width * height;
  let dye = new Float32Array(count), next = new Float32Array(count);
  const flowX = new Float32Array(count), flowY = new Float32Array(count);
  const impulseX = new Float32Array(count), impulseY = new Float32Array(count);
  const arrival = portrait ? new Float32Array(count) : null;
  // Stack dark and light versions in one small frame so a switch can use it immediately.
  const pixels = context.createImageData(width, height * 2);
  const packed = new Uint32Array(pixels.data.buffer);
  const darkTints = makeTints(palettes.dark, portrait);
  const lightTints = makeTints(palettes.light, portrait);
  const motes = !portrait ? Array.from({ length: 100 }, (_, n) => ({
    x: ((n * .61803 + .27) % 1) * (width - 3) + 1,
    y: ((n * .41421 + .19) % 1) * (height - 3) + 1,
    phase: n * 2.7
  })) : [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x, u = x / width, v = y / height;
      const a = x * .047 + y * .032, b = x * .064 - y * .061;
      flowX[i] = .45 * Math.cos(a) - .68 * Math.sin(b) + .28 * Math.cos(y * .14);
      flowY[i] = -.67 * Math.cos(a) - .71 * Math.sin(b) - .33 * Math.sin(x * .12);
      if (portrait) {
        const spread = Math.min(Math.hypot(u - .28, v - .61), Math.hypot(u - .65, v - .31) + .095);
        const grain = .042 * Math.sin(a * 2.7 + Math.cos(b * 2)) + .023 * Math.sin(b * 5 + Math.sin(a));
        arrival[i] = clamp(.11 + spread * 1.15 + grain, .055, .88);
      }
    }
  }

  function deposit(u, v, radius, amount, dx = 0, dy = 0) {
    const cx = u * (width - 1), cy = v * (height - 1);
    const r = Math.max(2, Math.min(width, height) * radius);
    const phase = u * 16 + v * 11, turn = Math.sin(phase) >= 0 ? 1 : -1;
    const x0 = Math.max(1, Math.floor(cx - r)), x1 = Math.min(width - 2, Math.ceil(cx + r));
    const y0 = Math.max(1, Math.floor(cy - r)), y1 = Math.min(height - 2, Math.ceil(cy + r));
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const rx = (x - cx) / r, ry = (y - cy) / r;
        const distance = rx * rx + ry * ry;
        if (distance >= 1) continue;
        const i = y * width + x, falloff = (1 - distance) ** 2;
        const folds = .34 + .66 * (.5 + .5 * Math.sin(rx * 8 + Math.sin(ry * 6 + phase) * 2)) ** 2;
        dye[i] = Math.min(2, dye[i] + amount * folds * falloff);
        impulseX[i] = clamp(impulseX[i] + (dx - turn * ry * 4) * falloff, -3.8, 3.8);
        impulseY[i] = clamp(impulseY[i] + (dy + turn * rx * 4) * falloff, -3.8, 3.8);
      }
    }
  }

  function draw(step, seconds, development = 1) {
    const breeze = .24 * Math.sin(seconds * .48);
    const drift = .24 * Math.cos(seconds * .34);
    const decay = Math.pow(portrait ? .953 : .984, step);
    const friction = Math.pow(.94, step);
    const rgba = pixels.data;
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = y * width + x;
        const sx = clamp(x - step * (flowX[i] + breeze + impulseX[i]), 0, width - 1.01);
        const sy = clamp(y - step * (flowY[i] + drift + impulseY[i] - .25), 0, height - 1.01);
        const left = Math.floor(sx), top = Math.floor(sy);
        const fx = sx - left, fy = sy - top, j = top * width + left;
        const upper = dye[j] + fx * (dye[j + 1] - dye[j]);
        const lower = dye[j + width] + fx * (dye[j + width + 1] - dye[j + width]);
        const density = next[i] = (upper + fy * (lower - upper)) * decay;
        impulseX[i] *= friction;
        impulseY[i] *= friction;
        const wash = portrait ? clamp((arrival[i] - development) * 9 + .5, 0, 1) : 0;
        const ridge = Math.abs(dye[i - 1] - dye[i + 1]) + Math.abs(dye[i - width] - dye[i + width]);
        const rim = ridge / (.16 + ridge);
        const light = clamp(rim * .92 + density * .11, 0, 1);
        const alpha = portrait ? Math.min(.8, density * .58 + .23 * rim) : .39 * density / (.52 + density) + .22 * rim;
        const tint = Math.round(wash * (tintSteps - 1)) * tintSteps + Math.round(light * (tintSteps - 1));
        packed[i] = darkTints[tint];
        packed[count + i] = lightTints[tint];
        const opacity = 255 * (wash + (1 - wash) * smokeOpacity * alpha);
        rgba[i * 4 + 3] = opacity;
        rgba[(count + i) * 4 + 3] = opacity;
      }
    }
    if (portrait) {
      // Extend the wash through its border; the photograph should first appear inside the print.
      for (const offset of [0, count]) {
        for (let y = 1; y < height - 1; y++) {
          const row = offset + y * width;
          packed[row] = packed[row + 1];
          packed[row + width - 1] = packed[row + width - 2];
        }
        packed.copyWithin(offset, offset + width, offset + 2 * width);
        packed.copyWithin(offset + count - width, offset + count - 2 * width, offset + count - width);
      }
    }
    [dye, next] = [next, dye];
    context.putImageData(pixels, 0, 0);
    if (motes.length) {
      context.fillStyle = 'rgb(' + palettes.dark[1].join(',') + ')';
      for (const mote of motes) {
        const x = mote.x + .8 * Math.sin(seconds + mote.phase);
        const y = mote.y + .8 * Math.cos(seconds * .7 + mote.phase);
        const amount = dye[Math.floor(y) * width + Math.floor(x)];
        if (amount < .18) continue;
        context.globalAlpha = smokeOpacity * Math.min(.75, amount * .6) * (.62 + .38 * Math.sin(seconds * 1.6 + mote.phase));
        context.fillRect(x, y, .52, .52);
      }
      context.globalAlpha = 1;
    }
  }
  return { deposit, draw };
}
