import React from 'react';

const groups = [
  ['Web development', ['Front-End Development · 85%', 'React.js · 90%', 'UI/UX Design · 75%', 'React Native', 'Expo', 'Tailwind CSS']],
  ['Backend & integration', ['Back-End Development · 80%', 'Node.js · 85%', 'Web Integration · 70%', 'API Development · 90%', 'Database Design · 80%', 'Flask', 'FastAPI', 'Django', 'SQL', 'PostgreSQL', 'MongoDB']],
  ['AI & data science', ['Python · 80%', 'AI / ML · 90%', 'NLP · 90%', 'Deep Learning', 'Data Preprocessing', 'Logistic Regression', 'Gradient Descent']],
  ['Cyber security', ['Ethical Hacking · 75%', 'Web Security · 85%', 'Penetration Testing', 'Web Application Security', 'Vulnerability Assessment', 'Network Security', 'Security Auditing', 'Incident Response', 'Security Training', 'Authentication', 'JWT', 'Bearer Tokens']]
];

export default function Skills() {
  return <section id="skills" className="section"><h2>Skills</h2>
    <div className="skill-grid">{groups.map(([title, skills]) => <article key={title}><h3>{title}</h3>
      <ul className="chips">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </article>)}</div>
  </section>;
}
