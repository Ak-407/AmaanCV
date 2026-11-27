import { createInkField } from './inkField';

// Keep one outstanding bitmap per visible surface. Input coalesces if a device
// draws slowly, and a failed or unsupported worker uses a smaller local grid.
export function createInkRenderer(canvas, portrait, coarse) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const style = getComputedStyle(canvas);
  function color(name) {
    const hex = style.getPropertyValue(name).trim().slice(1);
    return [0, 2, 4].map(offset => parseInt(hex.slice(offset, offset + 2), 16));
  }
  const palettes = {
    dark: [color('--smoke-dark-low'), color('--smoke-dark-high'), color('--navy')],
    light: [color('--smoke-light-low'), color('--smoke-light-high'), color('--cream')]
  };
  let theme = document.documentElement.dataset.theme || 'dark';
  let worker = null, field = null, busy = false, revision = 0;
  let lastFrame = null, localCanvas = null;
  let drops = [], box = null;

  function releaseFrame() {
    lastFrame?.close?.();
    lastFrame = null;
  }
  function present() {
    if (!lastFrame) return;
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(lastFrame, 0, theme === 'light' ? height : 0, width, height, 0, 0, width, height);
  }
  function resize(bounds) {
    box = bounds;
    const workerSize = portrait ? 168 : 244;
    const longSide = worker ? Math.round(workerSize * (coarse ? .72 : 1)) : (portrait ? 94 : 124);
    const scale = Math.min(1, longSide / Math.max(1, bounds.width, bounds.height));
    const width = Math.max(8, Math.round(bounds.width * scale));
    const height = Math.max(8, Math.round(bounds.height * scale));
    revision++;
    drops = [];
    releaseFrame();
    canvas.width = width;
    canvas.height = height;
    const setup = { type: 'setup', width, height, portrait, palettes };
    if (worker) worker.postMessage(setup);
    else {
      localCanvas ||= document.createElement('canvas');
      field = createInkField(localCanvas, setup);
    }
  }
  function localFallback() {
    worker?.terminate();
    worker = null;
    busy = false;
    if (box) resize(box);
  }
  if (window.Worker && window.OffscreenCanvas && OffscreenCanvas.prototype.transferToImageBitmap) {
    try {
      worker = new Worker(new URL('./ink.worker.js', import.meta.url));
      worker.onmessage = ({ data }) => {
        busy = false;
        if (revision === data.revision) {
          releaseFrame();
          lastFrame = data.bitmap;
          present();
        } else data.bitmap.close();
      };
      worker.onerror = event => {
        event.preventDefault();
        localFallback();
      };
    } catch { localFallback(); }
  }
  return {
    resize,
    setTheme(next) {
      theme = next;
      present();
    },
    deposit(...drop) { if (drops.length < 8) drops.push(drop); },
    draw(step, elapsed, development) {
      if (worker) {
        if (busy) return;
        busy = true;
        worker.postMessage({ type: 'frame', revision, drops, step, elapsed, development });
      } else if (field) {
        for (const drop of drops) field.deposit(...drop);
        field.draw(step, elapsed, development);
        lastFrame = localCanvas;
        present();
      }
      drops = [];
    },
    clear() {
      revision++;
      drops = [];
      releaseFrame();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    dispose() {
      revision++;
      if (worker) {
        worker.onerror = null;
        worker.terminate();
      }
      releaseFrame();
    }
  };
}
