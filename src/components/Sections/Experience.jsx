import React from 'react';

const milestones = [
  ['Education', 'B.Tech in Computer Science & Engineering', 'IUST', 'The idea for JKStream began during my undergraduate studies.'],
  ['Experience', 'Full stack development & data science', 'Internships', 'I completed internships in both fields during my B.Tech.'],
  ['Experience', 'Founder & Tech Lead', 'JKStream', 'I build the scraping systems, AI pipelines, apps, and interfaces behind JKStream. The platform collects, filters, and summarizes government and private-sector job updates for students and working professionals. I apply my ethical hacking background to platform security and data integrity.']
];

export default function Experience() {
  return <section className="section experience-section" id="experience"><div className="wrap experience-layout">
    <h2 data-reveal>Education &amp; <em>experience.</em></h2>
    <ol className="timeline">{milestones.map(([type, title, org, summary]) => <li key={title} data-reveal>
      <span className="small-type">{type} / {org}</span><h3>{title}</h3><p>{summary}</p>
    </li>)}</ol>
  </div></section>;
}
