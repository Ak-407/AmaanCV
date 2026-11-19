import React from 'react';
export default function Footer({ replay }) {
  return <footer className="site-footer"><div className="wrap footer-row">
    <span>© {new Date().getFullYear()} Amaan Iqbal</span>
    <div>{replay && <button type="button" onClick={replay}>Replay intro ↻</button>}<a href="#home">Back to top ↑</a></div>
  </div></footer>;
}
