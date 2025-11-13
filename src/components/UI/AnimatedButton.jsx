// components/UI/AnimatedButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ text, onClick, primary = false, className = '', type = 'button' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
        }
      }}
      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border ${
        primary
          ? 'bg-gradient-to-r from-[#CBF3BB] to-[#ABE7B2] text-gray-900 border-transparent shadow-lg shadow-[#ABE7B2]/25 hover:shadow-[#ABE7B2]/40'
          : 'bg-[#ECF4E8]/10 text-[#ECF4E8] border-[#ABE7B2]/20 hover:bg-[#ECF4E8]/20 hover:border-[#ABE7B2]/30'
      } ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;