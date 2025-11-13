// components/Sections/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../UI/AnimatedButton";
import SEO from "../SEO/SEO";

// --------------------
// TYPEWRITER EFFECT
// --------------------
const Typewriter = ({ texts, speed = 100, deleteSpeed = 60, delay = 1000 }) => {
  const [index, setIndex] = useState(0); // Current text index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    // If finished typing a word
    if (!deleting && subIndex === texts[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    // If finished deleting the word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, deleteSpeed, delay]);

  return (
    <span className="text-[#ECF4E8]/90">
      {texts[index].substring(0, subIndex)}
      <span className="border-r-2 border-[#ABE7B2] animate-pulse ml-1"></span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Hero-specific SEO with target keywords */}
      <SEO 
        title="Amaan - JKStream Startup Founder & Cyber Security Expert | Ethical Hacker"
        description="Amaan - Founder of JKStream startup, Certified Ethical Hacker, and Full Stack Developer. Expert in cyber security, web development, and innovative streaming solutions."
        keywords="amaan hacker, jkstream startup, ethical hacking, cyber security expert, full stack developer, react developer, web security, penetration testing, certified ethical hacker"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 md:mt-0">
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    mt-[68px] flex items-center flex-col-reverse flex-nowrap
    md:mt-0 md:flex-row md:items-center md:justify-between
    relative z-10 gap-16 md:gap-32
  "
>
          {/* ---------------- LEFT TEXT SIDE ---------------- */}
          <div className="text-center md:text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-[#ECF4E8] leading-tight"
            >
              Hi, <br />
              I'm <span className="gradient-text">Amaan</span> <br />
            </motion.h1>

            {/* SEO-rich subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl text-[#CBF3BB] font-semibold">
                Founder of <span className="text-[#ABE7B2]">JKStream Startup</span>
              </h2>
              <p className="text-lg text-[#ECF4E8]/80 mt-2">
                Building the future of streaming technology
              </p>
            </motion.div>

            {/* Animated Typewriter Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-[#ECF4E8] mt-4 mb-6 h-10"
            >
              <Typewriter
                texts={[
                  "Full Stack Developer",
                  "Cyber Security Expert", 
                  "Certified Ethical Hacker",
                  "JKStream Founder"
                ]}
              />
            </motion.p>

            {/* SEO-rich description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-[#ECF4E8]/80 text-lg leading-relaxed">
                Specializing in <strong className="text-[#CBF3BB]">Machine learning, ethical hacking</strong>, 
                {" "}<strong className="text-[#CBF3BB]">web application & integration</strong>.<br></br> <strong className="text-[#ABE7B2]">Building JKStream</strong> an AI-powered platform for government, private, and job updates.. 
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
            >
              <AnimatedButton
                text="Lets Talk 🎙️"
                primary
                onClick={() =>
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              />
              <AnimatedButton
                text="View Projects"
                secondary
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              />
            </motion.div>

            {/* Quick Stats with Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#ABE7B2]/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CBF3BB]">50+</div>
                <div className="text-sm text-[#ECF4E8]/70">Security Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CBF3BB]">JKStream</div>
                <div className="text-sm text-[#ECF4E8]/70">Startup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CBF3BB]">100%</div>
                <div className="text-sm text-[#ECF4E8]/70">AI / ML Expert</div>
              </div>
            </motion.div>
          </div>

          {/* ---------------- RIGHT IMAGE SIDE ---------------- */}
          <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
>
  {/* Blob Shape (same color you want, only shape changed) */}
  <div className="absolute inset-0 bg-[#93BFC7] rounded-[60%_40%_55%_45%/60%_50%_40%_50%]"></div>
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
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[#CBF3BB] to-[#ABE7B2] text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-20 shadow-lg"
            >
              🤖 Artificial Intelligence Expert
            </motion.div>

            {/* JKStream Badge */}
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#ABE7B2] to-[#93BFC7] text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-20 shadow-lg"
            >
              🚀 JKStream Founder
            </motion.div>

  {/* Main Image */}
  <motion.img
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, duration: 0.8 }}
    src="/imeges/amaan.jpeg"
    alt="Amaan - JKStream Startup Founder & Cyber Security Expert"
    title="Amaan - Ethical Hacker & JKStream Founder"
    className="relative z-10 w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-2xl"
  />

  {/* Soft Glow Effect (same color as before, shape auto-follows blob) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#CBF3BB]/20 to-[#93BFC7]/20 rounded-[60%_40%_55%_45%/60%_50%_40%_50%] blur-2xl z-0"></div>
</motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#ABE7B2]/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#ABE7B2]/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>

        {/* Background SEO Keywords (hidden but crawlable) */}
        <div className="hidden">
          <h1>Amaan Hacker - Cyber Security Specialist</h1>
          <h2>JKStream Startup - Innovative Streaming Solutions</h2>
          <p>
            Amaan ethical hacker services, JKStream startup founder Amaan, 
            web security expert, penetration testing specialist, 
            certified ethical hacker portfolio, JKStream streaming technology, Specializing in Machine learning,Specializing in Model Training,Artificial Intelligence Expert
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
