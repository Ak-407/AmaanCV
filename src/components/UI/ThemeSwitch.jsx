import React, { useRef } from 'react';
import { flushSync } from 'react-dom';

export default function ThemeSwitch({ theme, onChange, motionEnabled }) {
  const transition = useRef(null);
  const requestedTheme = useRef(theme);
  const dark = theme === 'dark';

  function changeTheme(event) {
    const next = requestedTheme.current === 'dark' ? 'light' : 'dark';
    requestedTheme.current = next;
    if (transition.current) {
      transition.current.ready.catch(() => {}); // A skipped transition rejects its ready promise.
      transition.current.skipTransition();
    }
    const root = document.documentElement;
    function apply() {
      if (requestedTheme.current !== next) return;
      root.dataset.theme = next;
      document.querySelector('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--page').trim();
      try { localStorage.setItem('amaan.portfolio.theme', next); } catch { /* Optional preference. */ }
      // Repaint the existing smoke frame before the browser captures the new theme.
      flushSync(() => onChange(next));
    }
    if (!motionEnabled || !document.startViewTransition) {
      apply();
      return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    root.style.setProperty('--spill-origin', x + 'px ' + y + 'px');
    root.style.setProperty('--spill-radius', Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 'px');
    const current = document.startViewTransition(apply);
    transition.current = current;
    const finish = () => { if (transition.current === current) transition.current = null; };
    current.finished.then(finish, finish);
  }

  return <button type="button" className="theme-switch" role="switch" aria-checked={dark} aria-label="Dark mode"
    onClick={changeTheme} title={dark ? 'Switch to paper mode' : 'Switch to dark mode'}>
    <span className="theme-track" aria-hidden="true"><i /></span><span className="theme-label">Dark mode</span>
  </button>;
}
