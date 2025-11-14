// components/Sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../UI/SkillBar';

const Skills = () => {
  const skills = [
    { name: 'Front-End Development', percentage: 85, color: 'from-[#CBF3BB] to-[#ABE7B2]' },
    { name: 'Back-End Development', percentage: 80, color: 'from-[#ABE7B2] to-[#93BFC7]' },
    { name: 'Ethical Hacking', percentage: 75, color: 'from-[#93BFC7] to-[#CBF3BB]' },
    { name: 'React.js', percentage: 90, color: 'from-[#CBF3BB] to-[#93BFC7]' },
    { name: 'Node.js', percentage: 85, color: 'from-[#ABE7B2] to-[#CBF3BB]' },
    { name: 'Python', percentage: 80, color: 'from-[#93BFC7] to-[#ABE7B2]' },
    { name: 'AI / ML', percentage: 90, color: 'from-[#93BFC7] to-[#ABE7B2]' },
    { name: 'Backend', percentage: 80, color: 'from-[#93BFC7] to-[#ABE7B2]' },
    { name: 'Web Integration', percentage: 70, color: 'from-[#93BFC7] to-[#ABE7B2]' },
    { name: 'NLP', percentage: 90, color: 'from-[#93BFC7] to-[#ABE7B2]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ECF4E8] mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[#ECF4E8]/70 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>

        {/* Circular Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Web Security', value: 85 },
            { label: 'API Development', value: 90 },
            { label: 'Database Design', value: 80 },
            { label: 'UI/UX Design', value: 75 },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="3"
                  />
                  <motion.path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: item.value / 100 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#CBF3BB" />
                      <stop offset="100%" stopColor="#93BFC7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#ECF4E8] font-bold text-xl">{item.value}%</span>
                </div>
              </div>
              <div className="text-[#ECF4E8]/80 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
