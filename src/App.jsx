import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

export default function App() {
  useEffect(() => {
    // Reveal on entry. Content stays visible when observation or motion is unavailable.
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('entered');
          observer.unobserve(target);
        }
      });
    });
    document.querySelectorAll('.section, .timeline li, .project, .skill-grid article').forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <><a className="skip" href="#main">Skip to content</a><Navbar/>
    <main id="main" className="wrap"><Hero/><About/><Skills/><Experience/><Projects/><Contact/></main>
    <Footer/></>;
}
