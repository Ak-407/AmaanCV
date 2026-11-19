import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function Stat({ value, suffix, label, motionEnabled }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!seen || !motionEnabled) return;
    let frame;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / 650, 1);
      setDisplay(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, motionEnabled, value]);
  return <div ref={ref}><dt>{label}</dt><dd><span className="sr-only">{value.toLocaleString()}{suffix}</span><span aria-hidden="true">{(motionEnabled ? display : value).toLocaleString()}<small>{suffix}</small></span></dd></div>;
}

export default function About({ motionEnabled }) {
  return <section id="about" className="section paper"><div className="wrap">
    <div className="about-grid"><div className="about-heading" data-reveal><h2>About <em>me.</em></h2>
      <div className="about-monogram" aria-hidden="true">Ai<span className="spark" /></div></div><div data-reveal>
      <p className="intro">My first Windows laptop sparked my curiosity. A friend introduced me to Kali Linux, and that curiosity became a career in computer engineering.</p>
      <p>I’m a full stack developer, data scientist, and certified ethical hacker. My work spans university research management systems, job search automation, heart disease prediction, and platforms that connect shopkeepers with customers.</p>
      <p>I also work on video-based education platforms, image detection and segmentation, and AI-driven analytics.</p>
    </div></div><dl className="stats">
      <Stat motionEnabled={motionEnabled} value={38} suffix="+" label="Projects completed"/><Stat motionEnabled={motionEnabled} value={4000} suffix="+" label="Hours coding"/>
      <Stat motionEnabled={motionEnabled} value={50} suffix="+" label="Security projects"/><Stat motionEnabled={motionEnabled} value={100} suffix="%" label="AI / ML expertise"/>
    </dl>
  </div></section>;
}
