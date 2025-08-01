import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects'; // Ensure src/data/projects.js exists
import './ProjectsSection.css'; // For section styling

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;