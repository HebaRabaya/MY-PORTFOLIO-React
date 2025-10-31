import React, { useState, useEffect } from "react";
import { useData } from "../../../contexts/DataContext";
import SkillForm from "../../forms/SkillForm";
import "./Skills.css";

export default function Skills() {
  const { skills, addSkill, updateSkill, deleteSkill, isAdmin } = useData();
  const [visible, setVisible] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

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

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [skills]);

  const handleAddSkill = () => {
    setEditingSkill(null);
    setShowForm(true);
  };

  const handleEditSkill = (skill) => {
    setEditingSkill(skill);
    setShowForm(true);
  };

  const handleSaveSkill = (skillData) => {
    if (editingSkill) {
      updateSkill({ ...skillData, id: editingSkill.id });
    } else {
      addSkill(skillData);
    }
    setShowForm(false);
    setEditingSkill(null);
  };

  const handleDeleteSkill = (skillId) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      deleteSkill(skillId);
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingSkill(null);
  };

  return (
    <section className="cards" id="skills">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 className="title slide-in-up">Skills</h2>
        {isAdmin && (
          <button 
            className="main-btn"
            onClick={handleAddSkill}
            style={{ 
              background: 'linear-gradient(45deg, #3a6cf4, #4e9eff)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.9em',
              margin: 0
            }}
          >
            <i className="fa-solid fa-plus" style={{ marginRight: '8px' }}></i>
            Add Skill
          </button>
        )}
      </div>
      <div className="contant">
        {skills.map((skill, index) => (
          <div 
            key={skill.id}
            className={`card skill-card ${visible.includes(index) ? 'slide-in-up' : ''}`}
            data-index={index}
            style={{ 
              animationDelay: `${index * 0.2}s`,
              borderTop: `4px solid ${skill.color}`,
              position: 'relative'
            }}
          >
            <div className="icon rotate" style={{ color: skill.color }}>
              <i className={skill.icon}></i>
            </div>
            <div className="info">
              <h3>{skill.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>
                {skill.description}
              </p>
            </div>
            {isAdmin && (
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              display: 'flex', 
              gap: '5px',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0'}
            >
              <button 
                onClick={() => handleEditSkill(skill)}
                style={{
                  background: 'rgba(40, 167, 69, 0.8)',
                  border: 'none',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '0.8em'
                }}
                title="Edit Skill"
              >
                <i className="fa-solid fa-edit"></i>
              </button>
              <button 
                onClick={() => handleDeleteSkill(skill.id)}
                style={{
                  background: 'rgba(220, 53, 69, 0.8)',
                  border: 'none',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '0.8em'
                }}
                title="Delete Skill"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            )}
          </div>
        ))}
      </div>

      {showForm && (
        <SkillForm
          skill={editingSkill}
          onSave={handleSaveSkill}
          onCancel={handleCancelForm}
          isEditing={!!editingSkill}
        />
      )}
    </section>
  );
}


