import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${show ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}


