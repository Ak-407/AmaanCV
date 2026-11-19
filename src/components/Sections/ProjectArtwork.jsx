import React from 'react';

// Abstract covers identify each project without claiming to be screenshots of a live app.
export default function ProjectArtwork({ kind }) {
  let contents;
  switch (kind) {
    case 'forecast':
      contents = <><div className="weather-orbits"><i /><i /><i /></div><div className="weather-sun" /><div className="weather-horizon" /></>;
      break;
    case 'voice':
      contents = <div className="voice-wave">{[18, 30, 48, 32, 65, 88, 52, 37, 72, 100, 68, 45, 84, 62, 34, 53, 70, 43, 25, 15].map((height, i) =>
        <i key={i} style={{ height: height + '%', '--beat': i % 7 }} />)}</div>;
      break;
    case 'chat':
      contents = <div className="chat-art"><div className="chat-back"><i /><i /><i /></div><div className="chat-front"><i /><i /><i /></div></div>;
      break;
    case 'folio':
      contents = <div className="folio-preview"><span>Aa</span><img alt="" loading="lazy" width="480" height="611" src={process.env.PUBLIC_URL + '/assets/amaan-480.webp'} /></div>;
      break;
    case 'journal':
      contents = <div className="journal-print"><b>Aa.</b><i /><i /><div /></div>;
      break;
    default:
      contents = <div className="contact-deck"><i /><i /><div><b /><span /><span /></div></div>;
  }
  return <div className={'project-art art-' + kind} aria-hidden="true">{contents}</div>;
}
