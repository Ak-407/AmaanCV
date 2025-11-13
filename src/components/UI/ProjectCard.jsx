// components/UI/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group bg-[#ECF4E8]/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/50 transition-all duration-500"
    >
      {/* Project Image */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="h-48 overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#CBF3BB]/20 to-[#93BFC7]/20 flex items-center justify-center">
          <span className="text-[#ECF4E8]/50 text-lg">Project Image</span>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#ECF4E8] mb-3 group-hover:text-[#CBF3BB] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[#ECF4E8]/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              className="px-3 py-1 bg-[#ECF4E8]/10 rounded-full text-[#ECF4E8]/80 text-sm border border-[#ABE7B2]/10"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-[#CBF3BB] to-[#ABE7B2] text-gray-900 text-center py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#ABE7B2]/25"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-[#ECF4E8]/10 text-[#ECF4E8] text-center py-2 rounded-lg font-semibold border border-[#ABE7B2]/20 transition-all duration-300 hover:bg-[#ECF4E8]/20"
          >
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;