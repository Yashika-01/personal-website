import React, { useState } from 'react';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import './projectcard.css';

const ProjectCard = ({ title, skills, githubLink, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card animate__animated animate__fadeInUp">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github size={24} className="github-link" />
        </a>
      </div>
      
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>

      <div className="description-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        <span>Description</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      <div className={`description ${isExpanded ? 'expanded' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
