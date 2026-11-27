import React, { useEffect, useRef } from 'react';

const diameter = 144;
const center = diameter / 2;
const radii = [6, 5.2, 4.6, 3.7, 2.6, 1.6];
const controls = 'a[href], button, summary, label, [role="button"], [role="switch"]';
const native = 'dialog[open], video, select, input, textarea, [contenteditable="true"]';

export default function InkCursor({ enabled }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const media = matchMedia('(any-hover: hover) and (any-pointer: fine) and (forced-colors: none)');
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.height = diameter * ratio;
    ctx.scale(ratio, ratio);
    ctx.fillStyle = ctx.strokeStyle = getComputedStyle(canvas).color;
    ctx.lineCap = 'round';
    const root = document.documentElement;
    const drops = radii.map(() => ({ x: 0, y: 0 }));
    let x = 0, y = 0, size = radii[0], target = size;
    let frame = 0, previous = 0, splash = -Infinity, visible = false;

    function hide() {
      root.classList.remove('ink-pointing');
      visible = false;
      cancelAnimationFrame(frame);
      frame = 0;
      splash = -Infinity;
    }
    function circle(px, py, r) {
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }
    function draw(now) {
      frame = 0;
      const dt = Math.max(1, Math.min(48, now - previous));
      previous = now;
      const follow = 1 - Math.exp(-dt / 26);
      size += (target - size) * (1 - Math.exp(-dt / 60));
      ctx.clearRect(0, 0, diameter, diameter);
      let moving = Math.abs(target - size) > .08;
      drops[0].x = x;
      drops[0].y = y;
      for (let i = 1; i < drops.length; i++) {
        const drop = drops[i], lead = drops[i - 1];
        drop.x += (lead.x - drop.x) * follow;
        drop.y += (lead.y - drop.y) * follow;
        const drift = Math.hypot(drop.x - x, drop.y - y);
        if (drift > 52) {
          drop.x = x + (drop.x - x) * 52 / drift;
          drop.y = y + (drop.y - y) * 52 / drift;
        }
        moving ||= drift > .2;
        ctx.beginPath();
        ctx.lineWidth = radii[i] * 2;
        ctx.moveTo(center + lead.x - x, center + lead.y - y);
        ctx.lineTo(center + drop.x - x, center + drop.y - y);
        ctx.stroke();
      }
      const t = (now - splash) / 360;
      circle(center, center, size + (t < 1 ? 3 * (1 - t) : 0));
      if (t < 1) {
        const distance = size + 5 + 22 * t;
        for (let i = 0; i < 7; i++) {
          const a = i * Math.PI * 2 / 7 + .3;
          circle(center + Math.cos(a) * distance, center + Math.sin(a) * distance, (1 - t) * (i % 2 + 1.7));
        }
      }
      if (moving || t < 1) frame = requestAnimationFrame(draw);
    }
    function track(event) {
      const hit = event.target;
      if (!media.matches || event.pointerType !== 'mouse' || !(hit instanceof Element) || hit.closest(native) || document.querySelector('dialog[open]')) {
        hide();
        return;
      }
      x = event.clientX;
      y = event.clientY;
      target = hit.closest(controls) ? 17 : hit.closest('.photo-crop, .art-frame') ? 4 : radii[0];
      if (!visible) {
        visible = true;
        size = target;
        for (const drop of drops) { drop.x = x; drop.y = y; }
        root.classList.add('ink-pointing');
      }
      if (event.type === 'pointerdown') splash = performance.now();
      canvas.style.transform = 'translate3d(' + (x - center) + 'px,' + (y - center) + 'px,0)';
      if (!frame) {
        previous = performance.now() - 16;
        frame = requestAnimationFrame(draw);
      }
    }
    function leave(event) { if (event.relatedTarget == null) hide(); }
    document.addEventListener('pointermove', track, { passive: true });
    document.addEventListener('pointerover', track, { passive: true });
    document.addEventListener('pointerdown', track, { passive: true });
    document.addEventListener('pointerout', leave);
    document.addEventListener('keydown', hide);
    document.addEventListener('visibilitychange', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      hide();
      document.removeEventListener('pointermove', track);
      document.removeEventListener('pointerover', track);
      document.removeEventListener('pointerdown', track);
      document.removeEventListener('pointerout', leave);
      document.removeEventListener('keydown', hide);
      document.removeEventListener('visibilitychange', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, [enabled]);
  return <canvas ref={ref} className="ink-cursor" aria-hidden="true" />;
}
