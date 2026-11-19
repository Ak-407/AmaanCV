import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero, { RoleMarquee } from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import { firstVisit, OpeningSequence, rememberIntro, useMotionSettings } from './components/UI/PortfolioMotion';

export default function App() {
  const motion = useMotionSettings();
  const [intro, setIntro] = useState(() => motion.enabled && firstVisit());
  const finishIntro = useCallback(() => {
    rememberIntro();
    setIntro(false);
  }, []);

  useEffect(() => {
    if (!motion.enabled && intro) finishIntro();
  }, [motion.enabled, intro, finishIntro]);

  useEffect(() => {
    // The initial HTML has no section anchors until React mounts.
    const hash = window.location.hash;
    const section = document.getElementById(hash.slice(1));
    if (!section) return;
    let pending = true;
    function align() {
      if (pending && window.location.hash === hash) section.scrollIntoView({ behavior: 'instant' });
    }
    align();
    document.fonts?.ready.then(align);
    return () => { pending = false; };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || !motion.enabled) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('in-view');
          observer.unobserve(target);
        }
      });
    }, { rootMargin: '0px 0px -4% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [motion.enabled]);

  return <div className="portfolio" data-intro={intro ? 'opening' : 'complete'}>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar motion={motion} />
    <main id="main">
      <Hero /><RoleMarquee />
      <Projects /><About motionEnabled={motion.enabled} /><Skills /><Experience /><Contact />
    </main>
    <Footer replay={motion.enabled ? () => setIntro(true) : null} />
    {intro && motion.enabled && <OpeningSequence onFinish={finishIntro} />}
  </div>;
}
