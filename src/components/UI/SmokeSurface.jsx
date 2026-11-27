import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createInkRenderer } from '../../effects/inkRenderer';

const clamp = value => Math.min(1, Math.max(0, value));

export default function SmokeSurface({ enabled, theme, portrait = false }) {
  const ref = useRef(null);
  const renderer = useRef(null);
  useLayoutEffect(() => {
    renderer.current?.setTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!enabled || !window.IntersectionObserver) return;
    const canvas = ref.current;
    const host = canvas.parentElement;
    const coarse = matchMedia('(pointer: coarse)').matches;
    const frameInterval = 1000 / (coarse ? 20 : 24);
    let field, frame = 0, timer = 0, visible = false, painted = 0, elapsed = 0;
    let develop = 0, lastDeposit = -10, ambientIndex = 0;
    let width = 0, height = 0, lastScroll = window.scrollY, scrollDistance = 0;
    let pointer = null, position = null, pulse = false;
    let dirty = true;

    function resize() {
      if (!visible) return;
      if (field && width === host.clientWidth && height === host.clientHeight) return;
      width = host.clientWidth;
      height = host.clientHeight;
      if (!field) {
        field = createInkRenderer(canvas, portrait, coarse);
        renderer.current = field;
      }
      if (!field) return;
      field.resize({ width, height });
      if (!portrait) {
        field.deposit(.08, .74, .25, 1.7);
        field.deposit(.56, .35, .20, 1.4);
        field.deposit(.89, .22, .23, 1.8);
      }
      dirty = true;
      wake();
    }
    function wake(delay = 0) {
      if (frame || timer || !visible || !field || document.hidden) return;
      if (delay > 0) timer = setTimeout(() => { timer = 0; wake(); }, delay);
      else frame = requestAnimationFrame(render);
    }
    function render(now) {
      frame = 0;
      if (!visible || document.hidden || !field) return;
      // Idle pools need fewer frames than a print reveal or a hand stirring the ink.
      const interval = !portrait && !position && elapsed - lastDeposit > .8 ? frameInterval * 1.5 : frameInterval;
      const remaining = interval - (now - painted);
      if (remaining > 1) { wake(remaining); return; }
      const frameSeconds = painted ? (now - painted) / 1000 : frameInterval / 1000;
      const dt = Math.min(.1, frameSeconds);
      painted = now;
      elapsed += dt;
      if (position) {
        const dx = pointer ? (position.x - pointer.x) * 28 : 0;
        const dy = pointer ? (position.y - pointer.y) * 28 : 0;
        field.deposit(position.x, position.y, pulse ? .17 : .105, pulse ? 2.4 : .8, dx, dy);
        pointer = position;
        position = null;
        pulse = false;
        lastDeposit = elapsed;
      }
      if (portrait) {
        // Scrolling accelerates the developing print and lays down a fresh, dissolving wash.
        if (Math.abs(scrollDistance) >= 4) {
          const rect = host.getBoundingClientRect();
          const v = clamp(1 - rect.bottom / (innerHeight + rect.height));
          field.deposit(.48 + Math.sin(v * 9) * .26, .18 + v * .66, .26,
            Math.min(1.15, Math.abs(scrollDistance) / 48), 0, Math.sign(scrollDistance) * .6);
          develop = Math.min(1, develop + Math.abs(scrollDistance) / Math.max(1, height) * .7);
          lastDeposit = elapsed;
        }
        scrollDistance = 0;
        develop = Math.min(1, develop + frameSeconds * .67);
      } else if (elapsed - lastDeposit > 3.2) {
        const angle = ++ambientIndex * 2.4;
        field.deposit(.53 + Math.cos(angle) * .37, .55 + Math.sin(angle) * .32, .23, 1.35);
        lastDeposit = elapsed;
      }
      if (portrait && develop === 1 && elapsed - lastDeposit > 4) {
        if (dirty) field.clear();
        dirty = false;
        painted = 0;
        return;
      }
      dirty = true;
      field.draw(dt * 23, elapsed, develop);
      wake();
    }
    function stir(event) {
      if (!visible || event.target.closest('a,button,summary,video,dialog')) return;
      if (event.type === 'pointermove' && event.pointerType === 'touch') return;
      const rect = host.getBoundingClientRect();
      position = { x: clamp((event.clientX - rect.left) / rect.width), y: clamp((event.clientY - rect.top) / rect.height) };
      pulse ||= event.type === 'pointerdown';
      wake();
    }
    function leave() { pointer = null; }
    function scroll() {
      const y = window.scrollY;
      if (visible) { scrollDistance += y - lastScroll; wake(); }
      lastScroll = y;
    }
    function suspend() {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      frame = timer = 0;
      painted = 0;
      pointer = position = null;
      pulse = false;
      scrollDistance = 0;
    }
    function visibility() { if (document.hidden) suspend(); else wake(); }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) { suspend(); return; }
      develop = 0;
      lastScroll = window.scrollY;
      resize();
      wake();
    });
    observer.observe(host);
    const sizes = window.ResizeObserver ? new ResizeObserver(resize) : null;
    if (sizes) sizes.observe(host);
    else window.addEventListener('resize', resize);
    host.addEventListener('pointermove', stir, { passive: true });
    host.addEventListener('pointerdown', stir, { passive: true });
    host.addEventListener('pointerleave', leave);
    if (portrait) window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    return () => {
      suspend();
      observer.disconnect();
      sizes?.disconnect();
      window.removeEventListener('resize', resize);
      field?.dispose();
      renderer.current = null;
      host.removeEventListener('pointermove', stir);
      host.removeEventListener('pointerdown', stir);
      host.removeEventListener('pointerleave', leave);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('visibilitychange', visibility);
      canvas.width = canvas.height = 1;
    };
  }, [enabled, portrait]);
  return <canvas ref={ref} width="1" height="1" aria-hidden="true" className={portrait ? 'print-wash' : 'smoke-surface'} />;
}
