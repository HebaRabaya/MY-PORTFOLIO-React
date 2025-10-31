import React, { useState } from 'react';
import './SkillForm.css';

const SkillForm = ({ skill, onSave, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: skill?.title || '',
    description: skill?.description || '',
    icon: skill?.icon || '',
    color: skill?.color || '#3a6cf4'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Skill name is required';
    if (!formData.description.trim()) newErrors.description = 'Skill description is required';
    if (!formData.icon.trim()) newErrors.icon = 'Skill icon is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSave(formData);
  };

  const availableIcons = [
    { value: 'fa-brands fa-html5', label: 'HTML5', color: '#e34c26' },
    { value: 'fa-brands fa-css3-alt', label: 'CSS3', color: '#1572b6' },
    { value: 'fa-brands fa-js', label: 'JavaScript', color: '#f7df1e' },
    { value: 'fa-brands fa-react', label: 'React', color: '#61dafb' },
    { value: 'fa-brands fa-node-js', label: 'Node.js', color: '#339933' },
    { value: 'fa-brands fa-python', label: 'Python', color: '#3776ab' },
    { value: 'fa-brands fa-php', label: 'PHP', color: '#777bb4' },
    { value: 'fa-brands fa-git-alt', label: 'Git', color: '#f05032' },
    { value: 'fa-brands fa-github', label: 'GitHub', color: '#181717' },
    { value: 'fa-brands fa-figma', label: 'Figma', color: '#f24e1e' },
    { value: 'fa-brands fa-adobe', label: 'Adobe', color: '#ff0000' },
    { value: 'fa-solid fa-database', label: 'Database', color: '#336791' },
    { value: 'fa-solid fa-mobile-alt', label: 'Mobile', color: '#4CAF50' },
    { value: 'fa-solid fa-cloud', label: 'Cloud', color: '#2196F3' },
    { value: 'fa-solid fa-code', label: 'Code', color: '#9C27B0' }
  ];

  return (
    <div className="skill-form-overlay">
      <div className="skill-form-container">
        <div className="skill-form-header">
          <h3>{isEditing ? 'Edit Skill' : 'Add New Skill'}</h3>
          <button type="button" className="close-btn" onClick={onCancel} aria-label="Close">×</button>
        </div>
        <form onSubmit={handleSubmit} className="skill-form">
          <div className="form-group">
            <label htmlFor="title">Skill Name *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={errors.title ? 'error' : ''} placeholder="Enter skill name" />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Skill Description *</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className={errors.description ? 'error' : ''} placeholder="Enter skill description" rows="4" />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="icon">Skill Icon *</label>
            <div className="icon-selector">
              <select id="icon" name="icon" value={formData.icon} onChange={handleChange} className={errors.icon ? 'error' : ''}>
                <option value="">Select skill icon</option>
                {availableIcons.map((icon, index) => (
                  <option key={index} value={icon.value}>{icon.label}</option>
                ))}
              </select>
              {formData.icon && (
                <div className="icon-preview">
                  <i className={formData.icon} style={{ color: formData.color }}></i>
                </div>
              )}
            </div>
            {errors.icon && <span className="error-message">{errors.icon}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="color">Skill Color</label>
            <div className="color-input-group">
              <input type="color" id="color" name="color" value={formData.color} onChange={handleChange} className="color-picker" />
              <input type="text" value={formData.color} onChange={handleChange} name="color" className="color-text" placeholder="#3a6cf4" />
            </div>
            <small>Choose a color that represents the skill</small>
          </div>
          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">{isEditing ? 'Save Changes' : 'Add Skill'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillForm;


