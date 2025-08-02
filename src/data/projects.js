// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "Odysseus Advisor",
    description: "Developed a college course advisory interface served to over 2,000 unique users. Designed an instructor data display page using Prisma database calls and improved load time through efficient component structuring and Vite's optimized build process. Containerized the application with Docker for consistent development and streamlined deployment.",
    technologies: ["React", "Docker", "Node.js", "HTML", "JavaScript", "Prisma"],
    link: "https://odyadvisor.com",
    github: "https://github.com/Odysseus-Academic/advisor",
  },
  {
    id: 2,
    title: "NBA Player Dashboard",
    description: "Developed a full-stack web application for Browse and analyzing NBA player statistics. Features include dynamic client-side sorting, debounced search, and filtering by season and team. Built with a React frontend and a Node.js/Express backend that interacts with a PostgreSQL database.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Python"],
    github: "https://github.com/yen6413/nba-player-dashboard"
  },
  {
    id: 3,
    title: "HIY Task Manager",
    description: "Implemented a Unix-based task manager in C that supports process management, task scheduling, file redirection, piping, and signal handling.",
    technologies: ["C", "Unix", "Makefile", "Processes", "Signals"],
    github: "https://github.com/yen6413/HIY-Task-Manager",
  },
  {
    id: 4,
    title: "Zombie Apocalypse Route Planner",
    description: "An interactive web app that helps you plan the safest and most resourceful route through a zombie-infested city using real OpenStreetMap data. Features include map generation, resource-aware Dijkstra pathfinding, and algorithm visualization.",
    technologies: ["Python", "Flask", "JavaScript", "Leaflet", "OpenStreetMap", "HTML", "CSS"],
    github: "https://github.com/yen6413/zombie-apocalypse-route-planner"
  },
  {
    id: 5,
    title: "Smart Calculator",
    description: "Created an advanced calculator application supporting basic and scientific operations, expression parsing, and error handling. Integrated voice recognition for hands-free calculations and developed a clean, user-friendly GUI with Java Swing.",
    technologies: ["Java", "Swing", "Object-Oriented Programming", "Voice Recognition"],
    link: "https://smartpixelcalculator.netlify.app/",
    github: "https://github.com/yen6413/smart-calculator-project"
  },
  {
    id: 6,
    title: "Immigration Petition Review",
    description: "Collaborated with a team of 3 to design and implement a proof-of-concept immigration processing system. Contributed to the full software development lifecycle, including requirements gathering, design, implementation, testing, and deployment using JavaFX for the UI and MySQL for database management. Automated build and deployment pipelines with Docker and GitHub Actions, and created UML diagrams (Use Case, Class, Component) to document system architecture while following Agile Scrum methodologies.",
    technologies: ["JavaFX", "Java", "MySQL", "Docker", "GitHub Actions", "Agile", "UML"],
    github: "https://github.com/jdemchak/newworker"
}

  // Add more projects as needed
];

export default projects;