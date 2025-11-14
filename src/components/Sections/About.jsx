// components/Sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ECF4E8] mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-[#ECF4E8]/80 text-lg mb-6 leading-relaxed">
              As a young individual, I was introduced to the world of technology through my first Windows laptop. 
              However, I found that I was not particularly interested in the typical activities such as gaming that 
              many of my peers were engaged in.
            </p>
            <p className="text-[#ECF4E8]/80 text-lg mb-8 leading-relaxed">
              It was not until I was introduced to the powerful operating system, Kali Linux, by a friend who is now 
              a full stack web developer, that I truly discovered my passion for technology. Through utilizing Kali Linux, 
              I was able to gain a deeper understanding of the inner workings of technology and the potential it holds.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-[#ECF4E8]/5 rounded-2xl backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#CBF3BB] mb-2">38+</div>
                <div className="text-[#ECF4E8]/70">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-[#ECF4E8]/5 rounded-2xl backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#CBF3BB] mb-2">4000+</div>
                <div className="text-[#ECF4E8]/70">Hours Coding</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="hidden sm:block bg-gradient-to-br from-[#CBF3BB]/20 to-[#93BFC7]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#ABE7B2]/10">
              <div className="grid grid-cols-2 gap-4">
                {['AI / ML', 'Django', 'Python', 'Authentication'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-[#ECF4E8]/5 rounded-xl p-4 text-center border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-[#ECF4E8] font-semibold">{tech}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#CBF3BB] rounded-full blur-sm opacity-50"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#93BFC7] rounded-full blur-sm opacity-50"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#CBF3BB] to-[#ABE7B2] rounded-2xl rotate-12 opacity-20"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#93BFC7] to-[#CBF3BB] rounded-3xl -rotate-12 opacity-20"
            />
          </motion.div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-[#ECF4E8] mb-8 text-center">
            My <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Web Development', icon: '💻' },
              { name: 'Cyber Security', icon: '🛡️' },
              { name: 'UI/UX Design', icon: '🎨' },
              { name: 'API Development', icon: '🔌' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-[#ECF4E8]/5 rounded-2xl backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <div className="text-[#ECF4E8] font-semibold">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
