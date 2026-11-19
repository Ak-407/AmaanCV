import React from 'react';

const base = process.env.PUBLIC_URL;
export default function Hero() {
  return <section id="home" aria-labelledby="name" className="hero">
    <div className="hero-copy">
      <p className="eyebrow"><span className="rule" /> Full stack developer</p>
      <h1 id="name">Amaan<br/><em>Iqbal.</em></h1>
      <p className="lede">I build secure web applications and AI tools. As the founder of <strong>JKStream</strong>, I bring verified job updates to people in Kashmir.</p>
      <div className="actions">
        <a className="button primary" href={base+'/assets/Amaan-Iqbal-CV.pdf'} download>Download CV <span aria-hidden="true">↓</span></a>
        <a className="button" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <figure className="portrait">
      <div className="portrait-frame"><img src={base+'/assets/amaan-800.webp'} srcSet={base+'/assets/amaan-480.webp 480w, '+base+'/assets/amaan-800.webp 800w'} sizes="(max-width: 700px) 87vw, 380px" width="380" height="440" alt="Amaan Iqbal standing beside a window" fetchpriority="high" /></div>
      <figcaption><span>AMAAN IQBAL</span><span>KASHMIR, INDIA</span></figcaption>
    </figure>
  </section>;
}
