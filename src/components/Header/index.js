import React, { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.body.setAttribute("data-theme", newTheme ? "dark" : "light");
  };

  return (
    <header>
      <a href="#home" className="logo">
        HEBA
      </a>
      <nav className="navigation">
        <a href="#skills"> Skills</a>
        <a href="#projects"> Projects</a>
        <a href="#contact"> Contact</a>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle Dark Mode"
        >
          <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}></i>
        </button>
      </nav>
    </header>
  );
}


