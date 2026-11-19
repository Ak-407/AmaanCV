import React, { useState } from 'react';
import { media, projects } from '../../portfolioData';

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
       file.endsWith('.gif') ? <a href={url}>Open original animation ↗</a> :
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
  return <section className="section" id="projects"><h2>Selected projects</h2>
    <div className="project-grid">{projects.map(project => <article className="project" key={project.title}>
      <h3>{project.title}</h3><p>{project.description}.</p>
      <ul className="chips">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="links"><a href={project.liveLink}>Live site ↗</a>
        {project.githubLink ? <a href={project.githubLink}>GitHub ↗</a> : <small>Source link pending</small>}
      </div>
    </article>)}</div><MediaArchive/>
  </section>;
}
