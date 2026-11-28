import React, { useEffect, useMemo, useRef, useState } from 'react';
import { media, projects } from '../../portfolioData';
import ProjectArtwork from './ProjectArtwork';
import { Arrow, followPointer, resetPointer, RollingLabel } from '../UI/PortfolioMotion';

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
  const [query, setQuery] = useState('');
  const [liveOnly, setLiveOnly] = useState(false);
  const [activeId, setActiveId] = useState(projects[0].id);
  const list = useRef(null);
  const searchField = useRef(null);
  const shown = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter(p => (!liveOnly || !p.demoOffline) &&
      [p.title, p.description, ...p.technologies].join(' ').toLowerCase().includes(term));
  }, [query, liveOnly]);
  const active = Math.max(0, shown.findIndex(p => p.id === activeId));
  const current = shown[active];

  useEffect(() => {
    const entries = Array.from(list.current.children).filter(entry => !entry.hidden);
    if (!entries.length) return;
    let frame = 0;
    function measure() {
      const line = Math.min(window.innerHeight * 0.48, 370);
      let current = 0;
      entries.forEach((entry, index) => { if (entry.getBoundingClientRect().top <= line) current = index; });
      setActiveId(entries[current].dataset.project);
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
  }, [shown]);

  function projectStep(offset) {
    const next = shown[(active + offset + shown.length) % shown.length];
    return <a href={'#project-' + next.id} aria-label={(offset < 0 ? 'Previous project, ' : 'Next project, ') + next.title}><Arrow direction={offset < 0 ? 'left' : 'right'} /></a>;
  }

  return <section className="section work-section" id="projects"><div className="wrap">
    <div className="section-heading" data-reveal><h2>Selected <em>work.</em></h2>
      <span className="small-type" role="status">{shown.length} {shown.length === 1 ? 'project' : 'projects'}</span></div>
    <div className="work-filters">
      <label className="work-search"><span>Find a project</span><input type="search" ref={searchField} value={query}
        placeholder="Name or technology" onChange={e => setQuery(e.target.value)} /></label>
      <label className="live-filter"><input type="checkbox" checked={liveOnly} onChange={e => setLiveOnly(e.target.checked)} /> Live demos only</label>
    </div>
    {!current && <p className="no-projects">No matching projects. <button type="button" onClick={() => {
      setQuery(''); setLiveOnly(false); searchField.current.focus();
    }}>Clear filters</button></p>}
    <div className="work-layout" hidden={!current}>
      {current && <div className="work-stage"><div className="art-frame" onPointerMove={followPointer} onPointerLeave={resetPointer}>
        <ProjectArtwork key={current.id} kind={current.art} />
        <svg className="lens-filter" width="0" height="0" aria-hidden="true" focusable="false"><defs>
          <filter id="water-lens"><feTurbulence type="fractalNoise" baseFrequency=".026 .045" numOctaves="2" result="ripples" />
            <feDisplacementMap in="SourceGraphic" in2="ripples" scale="16" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs></svg>
      </div>
        <div className="work-caption"><span>{String(active + 1).padStart(2, '0')} / {String(shown.length).padStart(2, '0')}</span>
          {shown.length > 1 && <div>{projectStep(-1)}{projectStep(1)}</div>}</div>
      </div>}
      <div className="project-list" ref={list}>{projects.map((project, index) => <article className="project-entry" id={'project-' + project.id}
        key={project.id} hidden={!shown.includes(project)} data-project={project.id} aria-labelledby={'title-' + project.id}>
        <div className="mobile-art"><ProjectArtwork kind={project.art} /></div>
        <div className="project-content" data-reveal>
          <span className="small-type project-number">Project {String(index + 1).padStart(2, '0')}</span>
          <h3 id={'title-' + project.id}>{project.title}</h3><p>{project.description}.</p>
          <ul className="chips">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <div className="links">{project.demoOffline ? <small>Demo offline</small> : <a href={project.liveLink} aria-label={'Live site for ' + project.title}><RollingLabel>Live site <Arrow /></RollingLabel></a>}
            {project.githubLink ? <a href={project.githubLink} aria-label={'GitHub source for ' + project.title}><RollingLabel>GitHub <Arrow /></RollingLabel></a> : <small>Source link pending</small>}
          </div>
        </div>
      </article>)}</div>
    </div><MediaArchive />
  </div></section>;
}
