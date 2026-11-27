import React, { useEffect, useRef, useState } from 'react';
import { Arrow, RollingLabel } from '../UI/PortfolioMotion';
import ThemeSwitch from '../UI/ThemeSwitch';

const sections = [
  ['projects', 'Work'], ['about', 'About'], ['skills', 'Skills'],
  ['experience', 'Experience'], ['contact', 'Contact']
];

export default function Navbar({ motion, theme, onThemeChange }) {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const progress = useRef(null);

  useEffect(() => {
    const nodes = sections.map(([id]) => document.getElementById(id));
    let frame = 0;
    function measure() {
      frame = 0;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const fraction = Math.min(1, Math.max(0, window.scrollY / range));
      progress.current.style.transform = 'scaleX(' + fraction + ')';
      const visible = nodes.filter(node => node.getBoundingClientRect().top <= 140).pop();
      setActive(fraction >= 0.998 ? 'contact' : visible?.id || 'home');
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(measure); }
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 801px)');
    const closeOnResize = () => { if (wide.matches && menu.current.open) menu.current.close(); };
    wide.addEventListener('change', closeOnResize);
    return () => wide.removeEventListener('change', closeOnResize);
  }, []);

  function links(inMenu) {
    return sections.map(([id, label]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}
      onClick={inMenu ? () => menu.current.close() : undefined}>
      <RollingLabel>{label}</RollingLabel>{inMenu && <Arrow />}
    </a>);
  }

  return <header className="site-header"><div className="wrap navrow">
    <a className="brand" href="#home" aria-current={active === 'home' ? 'location' : undefined}>
      <img src={process.env.PUBLIC_URL + '/imeges/logo.png'} width="36" height="36" alt="" /><span>Amaan Iqbal</span>
    </a>
    <nav className="desktop-nav" aria-label="Main">{links(false)}</nav>
    <div className="nav-tools">
      <ThemeSwitch theme={theme} onChange={onThemeChange} motionEnabled={motion.enabled} />
      {!motion.reduced && <button type="button" className="motion-switch" onClick={motion.toggle}
        aria-label="Pause animations" aria-pressed={!motion.enabled} title={motion.enabled ? 'Pause animations' : 'Resume animations'}>
        <span aria-hidden="true" className={motion.enabled ? 'pause-mark' : 'resume-mark'} />
      </button>}
      <button type="button" className="menu-trigger" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded={open}
        onClick={() => { menu.current.showModal(); setOpen(true); }}>Menu <span aria-hidden="true">☰</span></button>
    </div>
  </div><div className="reading-progress" ref={progress} aria-hidden="true" />
  <dialog id="mobile-menu" className="menu-drawer" ref={menu} aria-label="Navigation" onClose={() => setOpen(false)}>
    <div className="drawer-inner"><div className="drawer-top"><span>Amaan Iqbal</span>
      <button type="button" onClick={() => menu.current.close()}>Close ×</button></div>
      <nav aria-label="Mobile navigation">{links(true)}</nav>
      <a className="drawer-email" href="mailto:amaaniqbal3k@gmail.com">amaaniqbal3k@gmail.com <Arrow /></a>
    </div>
  </dialog></header>;
}
