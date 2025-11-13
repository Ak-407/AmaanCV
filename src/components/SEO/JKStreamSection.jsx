import React from 'react';
import { motion } from 'framer-motion';

const JKStreamSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#ECF4E8]/10 to-[#93BFC7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#ECF4E8] mb-6">
            JKStream <span className="gradient-text">Startup</span>
          </h2>

          <p className="text-[#ECF4E8]/80 text-lg mb-8 max-w-3xl mx-auto">
            JKStream is my startup built to provide <span class="font-semibold">AI‑integrated updates</span>
            for Government jobs, private sector jobs, and important daily updates. As a
            <span class="font-semibold"> Data Scientist, Web Developer, and Certified Ethical Hacker</span>, I built
            JKStream to help students, job seekers, and working professionals get verified information
            instantly in one place.
          </p>

          <p className="text-[#ECF4E8]/70 text-base mb-8 max-w-3xl mx-auto">
            JKStream started as a small idea during my B.Tech (CSE) at IUST — where I also completed
            internships in full‑stack development and data science. Today, JKStream uses web scraping,
            automation, AI summarization, and noise‑free data filtering to give the most accurate updates.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "AI‑Integrated Updates",
                description:
                  "Smart AI system that collects, filters, and delivers Government + Private job updates instantly.",
                icon: "🤖",
              },
              {
                title: "Ethical & Secure Platform",
                description:
                  "Built with security principles from my Ethical Hacking background to ensure data accuracy & safety.",
                icon: "🛡️",
              },
              {
                title: "Founder & Tech Lead",
                description:
                  "I handle scraping systems, AI pipelines, app development, and UI/UX for the full JKStream ecosystem.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className="bg-[#ECF4E8]/5 p-6 rounded-2xl border border-[#ABE7B2]/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#CBF3BB] mb-2">{item.title}</h3>
                <p className="text-[#ECF4E8]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[#ECF4E8]/60 text-sm mt-12 max-w-2xl mx-auto italic">
            "My goal is simple — use AI + automation to make JKStream the most trusted platform for
            authentic updates in J&K and across India."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JKStreamSection;
