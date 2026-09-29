import React, { useState, useEffect } from "react";
import { projects } from "../../../data/portfolio";
import "./Projects.css";

export default function Projects() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisible((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>

      <div className="content">
        {projects.map((project, index) => (
          <div
            className={`project-card ${
              visible.includes(index) ? "slide-in-up" : ""
            }`}
            key={project.id}
            data-index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />

              <div className="project-overlay">
                <p className="project-description">{project.description}</p>
              </div>
            </div>

            <div className="project-info">
              <p className="project-category">{project.cat}</p>

              <strong className="project-title">
                <span>{project.title}</span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="more-details"
                >
                  More details
                </a>
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
