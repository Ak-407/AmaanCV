// App.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO/SEO';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import JKStreamSection from './components/SEO/JKStreamSection';
import SecurityExpertSection from './components/SEO/SecurityExpertSection';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1a1f2e] to-slate-900">
        {/* Global SEO */}
        <SEO />
        
        {/* Page-specific SEO for homepage */}
        <SEO 
          title="Amaan - JKStream Startup Founder & Cyber Security Expert | Full Stack Developer"
          description="Amaan is the founder of JKStream startup and a renowned cyber security expert. Professional full stack developer specializing in React, Node.js, ethical hacking, and web application security."
          keywords="amaan hacker, jkstream startup, ethical hacking, cyber security expert, full stack developer, react developer, web security, penetration testing"
        />

        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-15">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#ABE7B2] rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#93BFC7] rounded-full mix-blend-soft-light filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#CBF3BB] rounded-full mix-blend-soft-light filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <Navbar />
        
        <AnimatePresence>
          <main className="relative z-10">
            <Hero />
            <About />
            <JKStreamSection />
            <SecurityExpertSection />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;