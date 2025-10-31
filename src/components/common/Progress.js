import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setPercent(percent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="progress-bar"
      style={{ width: `${percent}%` }}
    />
  );
}


