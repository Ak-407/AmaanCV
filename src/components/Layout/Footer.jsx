// components/Layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-[#ABE7B2]/10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-[#ECF4E8] mb-4">Portfolio</h3>
            <p className="text-[#ECF4E8]/70 mb-6">
              Full Stack Developer & Cyber Security Enthusiast passionate about creating amazing digital experiences.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#CBF3BB] to-[#ABE7B2] rounded-xl text-gray-900 font-semibold cursor-pointer"
            >
              Let's Work Together
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-[#ECF4E8] mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#ECF4E8]/70 hover:text-[#CBF3BB] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-[#ECF4E8] mb-6">Get In Touch</h4>
            <div className="space-y-3 text-[#ECF4E8]/70">
              <p>amaaniqbal3k@gmail.com</p>
              <p>+91 6006466047</p>
              <p>Kashmir</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          {[
            { name: 'GitHub', url: 'https://github.com/Ak-407', icon: '🐙' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mir-amaan-88b250226/', icon: '💼' },
            { name: 'Instagram', url: 'https://www.instagram.com/amaan_3k/', icon: '📷' },
            { name: 'Email', url: 'mailto:amaaniqbal3k@gmail.com', icon: '📧' },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#ECF4E8]/10 rounded-xl flex items-center justify-center text-[#ECF4E8] text-lg backdrop-blur-sm border border-[#ABE7B2]/10 hover:border-[#CBF3BB]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border-t border-[#ABE7B2]/10 pt-8"
        >
          <p className="text-[#ECF4E8]/60">
            © {new Date().getFullYear()} Made with <span className="text-red-400">♥</span> by Amaan Iqbal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
