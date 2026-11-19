import React from 'react';
import { Arrow, followPointer, resetPointer } from '../UI/PortfolioMotion';

export default function Contact() {
  return <section className="section contact-section" id="contact"><div className="wrap">
    <p className="small-type">Contact</p>
    <div className="contact-head"><h2 data-reveal>Let’s <em>talk.</em></h2>
      <a className="contact-orb" aria-label="Email Amaan Iqbal" href="mailto:amaaniqbal3k@gmail.com"
        onPointerMove={followPointer} onPointerLeave={resetPointer}><span><Arrow /></span></a></div>
    <p className="intro">For freelance projects and new opportunities, get in touch.</p>
    <a className="email" href="mailto:amaaniqbal3k@gmail.com">amaaniqbal3k@gmail.com</a>
    <div className="links"><a href="tel:+916006466047">+91 6006466047</a>
      <a href="https://www.linkedin.com/in/mir-amaan-88b250226/">LinkedIn <Arrow /></a>
      <a href="https://github.com/Ak-407">GitHub <Arrow /></a><a href="https://www.instagram.com/amaan_3k/">Instagram <Arrow /></a>
    </div>
  </div></section>;
}
