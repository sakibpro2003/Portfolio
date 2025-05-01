import React from "react";
import "./styles/ProjectCard.css";
import ProjectCard from "./projectCard";
// import "./App.css";

function myProjects() {
  return (
    <div className="app">
      <h1>My Projects</h1>
      <div className="projects-container">
        <ProjectCard
          image="https://via.placeholder.com/300"
          title="Project 1"
          description="This is a short description of project 1."
          githubLink="https://github.com/your-username/project1"
          detailsLink="https://yourwebsite.com/project1"
        />
        <ProjectCard
          image="https://via.placeholder.com/300"
          title="Project 2"
          description="This is a short description of project 2."
          githubLink="https://github.com/your-username/project2"
          detailsLink="https://yourwebsite.com/project2"
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
}

export default myProjects;
