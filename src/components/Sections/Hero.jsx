import React, { useRef } from 'react';
import { Arrow, followPointer, resetPointer, RollingLabel } from '../UI/PortfolioMotion';

const base = process.env.PUBLIC_URL;
const roles = ['Full stack development', 'Machine learning', 'Web security', 'Founder of JKStream'];

function Portrait() {
  const film = useRef(null);
  const video = useRef(null);

  function playFilm() {
    film.current.showModal();
    video.current.currentTime = 0;
    video.current.play().catch(() => { /* Native playback controls remain available. */ });
  }

  return <div className="portrait-stage" onPointerMove={followPointer} onPointerLeave={resetPointer}>
    <div className="orbit-map" aria-hidden="true"><i /><i /><i /><b className="spark" /></div>
    <figure className="photo-print">
      <div className="photo-crop"><picture>
        <source type="image/avif" srcSet={base + '/assets/amaan-cover.avif'} />
        <img className="portrait-photo" alt="Amaan Iqbal beside the window in a sunlit corridor"
        src={base + '/assets/amaan-800.webp'} width="800" height="1019" fetchpriority="high"
        srcSet={base + '/assets/amaan-480.webp 480w, ' + base + '/assets/amaan-800.webp 800w'}
        sizes="(max-width: 700px) 72vw, (max-width: 1000px) 36vw, 360px" /></picture></div>
      <figcaption><span>Amaan Iqbal</span><span>Portrait</span></figcaption>
    </figure>
    <button className="film-trigger" type="button" onClick={playFilm} aria-haspopup="dialog">
      <span className="play-icon" aria-hidden="true" /><span>Play film<small>00:05</small></span>
    </button>
    <dialog className="film-dialog" ref={film} aria-label="Amaan Iqbal’s portfolio film"
      onClose={() => video.current.pause()} onClick={event => { if (event.target === film.current) film.current.close(); }}>
      <div className="film-panel"><div className="film-bar"><span>Portfolio film</span>
        <button type="button" onClick={() => film.current.close()} aria-label="Close film">Close ×</button></div>
        <video ref={video} controls playsInline preload="none" aria-label="Five-second portrait montage of Amaan Iqbal" src={base + '/imeges/amaan.mp4'} />
      </div>
    </dialog>
  </div>;
}

export default function Hero() {
  return <section id="home" className="hero" aria-labelledby="cover-title">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <p className="byline"><span className="byline-rule" /> Amaan Iqbal <span className="byline-slash">/</span> Kashmir, India</p>
        <h1 id="cover-title"><span className="sr-only">Amaan Iqbal, </span>
          <span className="type-mask"><span>Full stack</span></span>{' '}
          <span className="type-mask"><em>developer.</em></span>
        </h1>
        <p className="lede">I build secure web applications and AI tools. At <strong>JKStream</strong>, I bring verified job updates to people in Kashmir.</p>
        <div className="actions"><a className="button primary" download href={base + '/assets/Amaan-Iqbal-CV.pdf'}><RollingLabel>Download CV</RollingLabel><Arrow direction="down" /></a>
          <a className="button button-line" href="#contact"><RollingLabel>Contact me</RollingLabel><Arrow /></a></div>
      </div>
      <Portrait />
    </div>
    <div className="wrap cover-foot"><a href="#projects"><span className="scroll-glyph" aria-hidden="true">↓</span> Explore my work</a>
      <div><a href="https://github.com/Ak-407">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/mir-amaan-88b250226/">LinkedIn <Arrow /></a></div></div>
  </section>;
}

export function RoleMarquee() {
  return <div className="role-strip" aria-label="Areas of work">
    <div className="marquee-track">{[0, 1].map(copy => <ul key={copy} className="role-list" aria-hidden={copy === 1 ? true : undefined}>
      {roles.map(role => <li key={role}>{role}<span aria-hidden="true" className="spark" /></li>)}
    </ul>)}</div>
  </div>;
}
