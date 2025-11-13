// components/SEO/SecurityExpertSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SecurityExpertSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1f2e] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#ECF4E8] mb-6">
            <span className="gradient-text">Cyber Security</span>
          </h2>
          <p className="text-[#ECF4E8]/80 text-lg mb-8 max-w-3xl mx-auto">
            With extensive experience in ethical hacking and cyber security, I specialize in 
            identifying vulnerabilities, securing web applications, and implementing robust 
            security measures for businesses and startups.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              "Ethical Hacking",
              "Penetration Testing", 
              "Web Application Security",
              "Vulnerability Assessment",
              "Network Security",
              "Security Auditing",
              "Incident Response",
              "Security Training"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-[#ECF4E8]/5 p-4 rounded-xl border border-[#ABE7B2]/10 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[#CBF3BB] font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityExpertSection;