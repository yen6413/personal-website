import React from 'react';
import ImageCollage from './ImageCollage';
import ProjectsSection from './ProjectsSection';
import './HeroSection.css'; // For layout styling

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <ImageCollage />
      </div>
      <div className="hero-right">
        {/* You can add a short intro here if desired */}
        <h1>Hello, I'm Yen Lai</h1>
        <p className="tagline">
          A passionate [Your Profession, e.g., Software Engineer, Data Scientist, UX Designer]
          with a keen eye for [your unique skill/passion].
        </p>
        <ProjectsSection />
      </div>
    </section>
  );
}

export default HeroSection;