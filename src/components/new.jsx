import React, { useState, useEffect } from 'react';

const PageReloader = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, []);

  return (
    <div className="Reload">
      {loading ? (
        <div className="loader-container loaderr">
      	  <div className="">
    <div className="loadeer">

          <svg >
  <defs>
    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="blue"/>
      <stop offset="75%" stop-color="red"/>
    </linearGradient>
    <pattern id="wave" x="0" y="0" width="20" height="15" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="0.4s"
            type="translate"
            from="0,0"
            to="40,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text text-anchor="middle" x="50%" y="70%" className='LF'  fill="url(#wave)"  fill-opacity="1">Syed Amaan</text>
  <text text-anchor="middle" x="50%" y="70%" className='LF'  fill="url(#gradient)" fill-opacity="0.1">Syed Amaan</text>
</svg>

          <h1>Welcome...</h1>
          <img src='https://media2.giphy.com/media/3AMRa6DRUhMli/200w.webp?cid=ecf05e4742vojp4b3a51j21uw92tz2x2oxbuerldj8189iiu&rid=200w.webp&ct=g'></img>
          </div>
    
    </div>
        </div>
      ) : (
        <div className="main-content">
        </div>
      )}
    </div>
  );
};


export default PageReloader;


