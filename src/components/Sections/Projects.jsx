import React, { useEffect, useRef, useState } from 'react';
import { media, projects } from '../../portfolioData';
import ProjectArtwork from './ProjectArtwork';
import { Arrow, RollingLabel } from '../UI/PortfolioMotion';

function MediaArchive() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const file = media[index];
  const url = process.env.PUBLIC_URL + '/' + file;
  const label = file.startsWith('ss/') ? 'Project screenshot ' + file.slice(3, -4) : file.split('/').pop();
  return <details onToggle={e => setOpen(e.currentTarget.open)}>
    <summary>Portfolio media archive</summary>
    {open && <div className="archive">
      {file.endsWith('.mp4') ? <video controls preload="metadata" aria-label={label} src={url}/> :
       file.endsWith('.gif') ? <a href={url}>Open original animation <Arrow /></a> :
       <img key={url} loading="lazy" src={url} alt={label}/>}
      <div className="archive-controls">
        <button aria-label="Previous asset" onClick={() => setIndex((index + media.length - 1) % media.length)}>←</button>
        <span aria-live="polite">{label} · {index + 1}/{media.length}</span>
        <button aria-label="Next asset" onClick={() => setIndex((index + 1) % media.length)}>→</button>
      </div>
    </div>}
  </details>;
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const list = useRef(null);

  useEffect(() => {
    const entries = Array.from(list.current.children);
    let frame = 0;
    function measure() {
      const line = Math.min(window.innerHeight * 0.48, 370);
      let current = 0;
      entries.forEach((entry, index) => { if (entry.getBoundingClientRect().top <= line) current = index; });
      setActive(current);
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

  function projectStep(offset) {
    const next = projects[(active + offset + projects.length) % projects.length];
    return <a href={'#project-' + next.id} aria-label={(offset < 0 ? 'Previous project, ' : 'Next project, ') + next.title}><Arrow direction={offset < 0 ? 'left' : 'right'} /></a>;
  }

  return <section className="section work-section" id="projects"><div className="wrap">
    <div className="section-heading" data-reveal><h2>Selected <em>work.</em></h2><span className="small-type">{projects.length} projects</span></div>
    <div className="work-layout">
      <div className="work-stage"><div className="art-frame"><ProjectArtwork key={active} kind={projects[active].art} /></div>
        <div className="work-caption"><span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <div>{projectStep(-1)}{projectStep(1)}</div></div>
      </div>
      <div className="project-list" ref={list}>{projects.map((project, index) => <article className="project-entry" id={'project-' + project.id}
        key={project.id} aria-labelledby={'title-' + project.id}>
        <div className="mobile-art"><ProjectArtwork kind={project.art} /></div>
        <div className="project-content" data-reveal>
          <span className="small-type project-number">Project {String(index + 1).padStart(2, '0')}</span>
          <h3 id={'title-' + project.id}>{project.title}</h3><p>{project.description}.</p>
          <ul className="chips">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <div className="links">{project.demoOffline ? <small>Demo offline</small> : <a href={project.liveLink}><RollingLabel>Live site <Arrow /></RollingLabel></a>}
            {project.githubLink ? <a href={project.githubLink}><RollingLabel>GitHub <Arrow /></RollingLabel></a> : <small>Source link pending</small>}
          </div>
        </div>
      </article>)}</div>
    </div><MediaArchive />
  </div></section>;
}
