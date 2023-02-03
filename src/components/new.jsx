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
      	  <div className=""></div>
        </div>
      ) : (
        <div className="main-content">
        </div>
      )}
    </div>
  );
};


export default PageReloader;


