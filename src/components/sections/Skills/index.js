import React, { useState, useEffect, useRef } from "react";
import { skills } from "../../../data/portfolio";
import "./Skills.css";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <h2 className="title">Skills</h2>
      <p className="skills-subtitle">Technologies &amp; tools I work with</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-badge ${visible ? "appear" : ""}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <i className={`skill-badge__icon ${skill.icon}`}></i>
            <span className="skill-badge__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
