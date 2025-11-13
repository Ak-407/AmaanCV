// components/Sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../UI/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A modern weather application with real-time data and beautiful UI',
      technologies: ['React', 'API', 'TailwindCSS'],
      image: '/path-to-weather-app-image.jpg',
      liveLink: 'https://weather-phi-five.vercel.app/',
      githubLink: 'https://github.com/your-username/weather-app'
    },
    {
      title: 'Voice Text Converter',
      description: 'Convert speech to text and text to speech with advanced features',
      technologies: ['JavaScript', 'Web Speech API', 'CSS3'],
      image: '/path-to-voice-app-image.jpg',
      liveLink: 'https://ak-407.github.io/Voice-Text-Converter-/',
      githubLink: 'https://github.com/your-username/voice-converter'
    },
    {
      title: 'Chat GPT Clone',
      description: 'AI-powered chat application with modern interface',
      technologies: ['React', 'OpenAI API', 'Node.js'],
      image: '/path-to-chatgpt-image.jpg',
      liveLink: 'https://ak-407.github.io/Chat-GPT/',
      githubLink: 'https://github.com/your-username/chatgpt-clone'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website with smooth animations',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      image: '/path-to-portfolio-image.jpg',
      liveLink: 'https://syedamaan.vercel.app/',
      githubLink: 'https://github.com/your-username/portfolio'
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blog application with user authentication',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/path-to-blog-image.jpg',
      liveLink: 'https://blogpost-1b1k.onrender.com/',
      githubLink: 'https://github.com/your-username/blog-platform'
    },
    {
      title: 'Contact Manager',
      description: 'Advanced contact management system with CRUD operations',
      technologies: ['React', 'Redux', 'Firebase'],
      image: '/path-to-contact-image.jpg',
      liveLink: 'https://ak-407.github.io/Contact-Me/',
      githubLink: 'https://github.com/your-username/contact-manager'
    }
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-400">Projects</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in web development and design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;