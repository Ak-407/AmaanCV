// components/SEO/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Amaan - Full Stack Developer & Artificial Intelligence and Machine learning Expert",
  description = "Professional portfolio of Amaan, Full Stack Developer, Cyber Security Enthusiast, and founder of JKStream startup. Expert in React, Node.js, ethical hacking, and web security.",
  keywords = "amaan hacker, jkstream startup, full stack developer, cyber security, ethical hacking, react developer, node.js, web security, portfolio",
  author = "Amaan",
  url = "https://miramaan.vercel.app/",
  image = "https://miramaan.vercel.app/imeges/amaan.jpeg",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Amaan Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@amaan_3k" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#CBF3BB" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Amaan",
          "url": "https://miramaan.vercel.app/",
          "description": "Full Stack Developer & Cyber Security Expert",
          "jobTitle": "Full Stack Developer",
          "knowsAbout": [
            "Web Development",
            "Cyber Security", 
            "Ethical Hacking",
            "React.js",
            "Node.js",
            "Python"
          ],
          "sameAs": [
            "https://github.com/Ak-407",
            "https://www.linkedin.com/in/syed-amaan-88b250226/",
            "https://www.instagram.com/amaan_3k/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
