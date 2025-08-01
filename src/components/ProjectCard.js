import React from 'react';
import './ProjectCard.css'; // For card styling

function ProjectCard({ project }) {
  const { title, description, technologies, link, github, image } = project;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View Live</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;