import React, { useRef } from 'react';

export default function ThemeSwitch({ theme, onChange, motionEnabled }) {
  const transition = useRef(null);
  const dark = theme === 'dark';

  function changeTheme(event) {
    const next = dark ? 'light' : 'dark';
    const root = document.documentElement;
    function apply() {
      root.dataset.theme = next;
      document.querySelector('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--page').trim();
      try { localStorage.setItem('amaan.portfolio.theme', next); } catch { /* Optional preference. */ }
      onChange(next);
    }
    if (!motionEnabled || !document.startViewTransition) {
      apply();
      return;
    }
    if (transition.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    root.style.setProperty('--spill-origin', x + 'px ' + y + 'px');
    root.style.setProperty('--spill-radius', Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 'px');
    transition.current = document.startViewTransition(apply);
    const finish = () => { transition.current = null; };
    transition.current.finished.then(finish, finish);
  }

  return <button type="button" className="theme-switch" role="switch" aria-checked={dark} aria-label="Dark mode"
    onClick={changeTheme} title={dark ? 'Switch to paper mode' : 'Switch to dark mode'}>
    <span className="theme-track" aria-hidden="true"><i /></span><span className="theme-label">Dark mode</span>
  </button>;
}
