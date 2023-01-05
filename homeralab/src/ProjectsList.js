import React from "react";

function ProjectCard(props) {
    return (
      <div className="project-card">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <ul>
          {props.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  

function ProjectsList(props) {
  const projects = [
    {
      name: "CoffeeMaker",
      description:
        "Final project for software engineering class at Bowdoin, developed full stack software for a fictional coffee shop. Stores an ingredient inventory using a SQL database and uses REST API calls to allow editing of ingredients and recipes.",
      skills: ["Java", "HTML", "CSS", "Javascript", "Angular", "SQL"],
    },
    {
      name: "Personal Website",
      description: "Created a React app that displays my technical experience and interests.",
      skills: ["React", "HTML", "CSS", "Javascript"],
    },

    {
        name: "Song of the Day *WIP*",
        description: "Currently working on a React app that can retrieve user Spotify listening data using the Spotify Web API, in order to improve my React skills.",
        skills: ["React", "HTML", "CSS", "Javascript"],
      },
  ];

  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
