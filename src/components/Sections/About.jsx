import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!seen || reduced) return;
    let frame;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / 650, 1);
      setDisplay(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, reduced, value]);
  return <div ref={ref}><dt>{label}</dt><dd><span className="sr-only">{value.toLocaleString()}{suffix}</span><span aria-hidden="true">{display.toLocaleString()}{suffix}</span></dd></div>;
}

export default function About() {
  return <section id="about" className="section">
    <h2>About me</h2>
    <div className="about-grid"><div>
      <p className="intro">My first Windows laptop sparked my curiosity. A friend introduced me to Kali Linux, and that curiosity became a career in computer engineering.</p>
      <p>I’m a full stack developer, data scientist, and certified ethical hacker. My work spans university research management systems, job search automation, heart disease prediction, and platforms that connect shopkeepers with customers.</p>
      <p>I also work on video-based education platforms, image detection and segmentation, and AI-driven analytics.</p>
    </div><dl className="stats">
      <Stat value={38} suffix="+" label="Projects completed"/><Stat value={4000} suffix="+" label="Hours coding"/>
      <Stat value={50} suffix="+" label="Security projects"/><Stat value={100} suffix="%" label="AI / ML expertise"/>
    </dl></div>
  </section>;
}
