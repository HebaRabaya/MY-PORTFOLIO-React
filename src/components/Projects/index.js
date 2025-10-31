import React, { useState, useEffect } from "react";
import { useData } from "../../contexts/DataContext";
import ProjectForm from "../forms/ProjectForm";
import "./Projects.css";
import bookStore from "../../assets/book-store.png";
import todoList from "../../assets/todo-list.jpg";
import myProfile from "../../assets/my-profile.png";

export default function Projects() {
  const { projects } = useData();
  const [visible, setVisible] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisible(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, [projects]);

  const handleAddProject = () => {};
  const handleEditProject = (project) => {};
  const handleSaveProject = (projectData) => {};
  const handleDeleteProject = (projectId) => {};
  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  const resolveImage = (img) => {
    if (img) return img;
    return bookStore;
  };

  return (
    <section className="projects" id="projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 className="title slide-in-up">Projects</h2>
        {/* زر الإضافة معطل */}
      </div>
      <div className="content">
        {projects.map((project, index) => (
          <div 
            className={`project-card ${visible.includes(index) ? 'slide-in-up' : ''}`} 
            key={project.id}
            data-index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <img 
                src={resolveImage(project.img)} 
                alt={project.title} 
              />
              <div className="project-overlay">
                <p className="project-description">{project.description}</p>
                {/* أزرار التعديل/الحذف معطلة */}
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

      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={handleCancelForm}
          isEditing={!!editingProject}
        />
      )}
    </section>
  );
}


