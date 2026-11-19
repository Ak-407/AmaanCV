import React, { useEffect, useState } from 'react';

const sections = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = sections.map(name => document.getElementById(name.toLowerCase()));
    let frame = 0;
    function measure() {
      const current = nodes.filter(node => node.getBoundingClientRect().top <= 110).pop();
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3;
      setActive(atEnd ? 'contact' : current?.id || 'home');
      frame = 0;
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

  return <header onKeyDown={e => {
    if (open && e.key === 'Escape') {
      setOpen(false);
      e.currentTarget.querySelector('button').focus();
    }
  }}>
    <div className="wrap navrow">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <img src={process.env.PUBLIC_URL + '/imeges/logo.png'} width="36" height="36" alt="" /> Amaan Iqbal
      </a>
      <button className="menu" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button>
      <nav id="navigation" aria-label="Main" className={open ? 'open' : ''}>
        {sections.map(name => <a key={name} href={'#'+name.toLowerCase()} aria-current={active === name.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{name}</a>)}
      </nav>
    </div>
  </header>;
}
