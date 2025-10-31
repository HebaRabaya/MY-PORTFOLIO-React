import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ project, onSave, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    cat: project?.cat || '',
    link: project?.link || '',
    description: project?.description || '',
    img: project?.img || ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // إزالة الخطأ عند التعديل
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Project name is required';
    }
    
    if (!formData.cat.trim()) {
      newErrors.cat = 'Project category is required';
    }
    
    if (!formData.link.trim()) {
      newErrors.link = 'Project link is required';
    } else if (!isValidUrl(formData.link)) {
      newErrors.link = 'Invalid URL format';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <div className="project-form-overlay">
      <div className="project-form-container">
        <div className="project-form-header">
          <h3>{isEditing ? 'Edit Project' : 'Add New Project'}</h3>
          <button 
            type="button" 
            className="close-btn"
            onClick={onCancel}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="title">Project Name *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
              placeholder="Enter project name"
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cat">Project Category *</label>
            <select
              id="cat"
              name="cat"
              value={formData.cat}
              onChange={handleChange}
              className={errors.cat ? 'error' : ''}
            >
              <option value="">Select project category</option>
              <option value="HTML & CSS">HTML & CSS</option>
              <option value="JAVA SCRIPT">JAVA SCRIPT</option>
              <option value="REACT">REACT</option>
              <option value="NODE.JS">NODE.JS</option>
              <option value="PYTHON">PYTHON</option>
              <option value="PHP">PHP</option>
              <option value="OTHER">Other</option>
            </select>
            {errors.cat && <span className="error-message">{errors.cat}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="link">Project Link *</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className={errors.link ? 'error' : ''}
              placeholder="https://example.com"
            />
            {errors.link && <span className="error-message">{errors.link}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Project Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? 'error' : ''}
              placeholder="Enter project description"
              rows="3"
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="img">Image URL (Optional)</label>
            <input
              type="url"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            <small>If no image URL is provided, a default image will be used</small>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {isEditing ? 'Save Changes' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

