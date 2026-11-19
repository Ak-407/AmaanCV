import React from 'react';

const groups = [
  ['Web development', ['Front-End Development · 85%', 'React.js · 90%', 'UI/UX Design · 75%', 'React Native', 'Expo', 'Tailwind CSS']],
  ['Backend & integration', ['Back-End Development · 80%', 'Node.js · 85%', 'Web Integration · 70%', 'API Development · 90%', 'Database Design · 80%', 'Flask', 'FastAPI', 'Django', 'SQL', 'PostgreSQL', 'MongoDB']],
  ['AI & data science', ['Python · 80%', 'AI / ML · 90%', 'NLP · 90%', 'Deep Learning', 'Data Preprocessing', 'Logistic Regression', 'Gradient Descent']],
  ['Cyber security', ['Ethical Hacking · 75%', 'Web Security · 85%', 'Penetration Testing', 'Web Application Security', 'Vulnerability Assessment', 'Network Security', 'Security Auditing', 'Incident Response', 'Security Training', 'Authentication', 'JWT', 'Bearer Tokens']]
];

export default function Skills() {
  return <section id="skills" className="section"><div className="wrap skill-layout">
    <h2 data-reveal>Technical <em>skills.</em></h2>
    <div className="skill-list">{groups.map(([title, skills], index) => <details key={title} open={index === 0} className="skill-group" data-reveal>
      <summary><h3>{title}</h3><span aria-hidden="true" className="plus-mark" /></summary>
      <ul className="skill-items">{skills.map(skill => {
        const [name, percent] = skill.split(' · ');
        return <li key={name}>{name}{percent && <><span className="skill-percent">{percent}</span>
          <span aria-hidden="true" className="skill-meter"><i style={{ width: percent }} /></span></>}</li>;
      })}</ul>
    </details>)}</div>
  </div></section>;
}
