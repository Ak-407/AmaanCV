// components/UI/SkillBar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1
          }
        }
      }}
      className="bg-[#ECF4E8]/5 rounded-2xl p-6 backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#ABE7B2]/20 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-[#ECF4E8] font-semibold text-lg">{skill.name}</span>
        <span className="text-[#CBF3BB] font-bold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-[#ECF4E8]/10 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;