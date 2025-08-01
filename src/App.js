import React from 'react';
import ImageCarousel from './components/ImageCarousel'; // New component
import ProjectsSection from './components/ProjectsSection';
//import Footer from './components/Footer'; // Optional: ensure this file exists or remove the import/usage
import './App.css'; // Global styles for App container
//import './shared.css'; // New: for general elements like headings

function App() {
  return (
    <div className="app-container">
      <header className="hero-header">
        <h1>Yen Lai</h1>
        <p className="tagline">
          A passionate Computer Science Student with a strong foundation in software development , data structures , and object-oriented programming.
        </p>
        <p className="contact-info">
          <a href="mailto:yenlai6413@gmail.com">yenlai6413@gmail.com</a> | 571-999-2243 | <a href="https://linkedin.com/in/yen-lai-0254a2281" target="_blank" rel="noopener noreferrer">LinkedIn</a> | Fairfax, VA
        </p>
      </header>

      <section className="images-section">
        <h2>A Glimpse of Me</h2>
        <ImageCarousel />
      </section>

      <section className="projects-section-wrapper">
        <ProjectsSection />
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default App;