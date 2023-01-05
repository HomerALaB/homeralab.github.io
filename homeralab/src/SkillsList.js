import React from "react";

function SkillCard(props) {
  return (
    <div className="skill-card">
      <h3>{props.name}</h3>
      {props.image && <img src={props.image} alt={props.name} />}
      <p>{props.description}</p>
    </div>
  );
}

function SkillsList(props) {
  const skills = [
    {
      name: "JavaScript",
      description:
        "Proficient in modern JS syntax and concepts such as closures and asynchronous programming.",
      image: "/js.png",
    },
    {
      name: "HTML",
      description: "Experienced in writing semantic and accessible HTML.",
      image: "/html.png",
    },
    {
      name: "CSS",
      description:
        "Skilled in using CSS to style and layout websites, including responsive design techniques.",
      image: "/css.png",
    },
    {
      name: "React",
      description:
        "Experienced in building web apps with React, including use of hooks and state management libraries like Redux.",
      image: "/react.png",
    },
    {
      name: "Java",
      description:
        "Proficient in Java use in backend software design.",
      image: "/java.png",
    },
    {
      name: "Python",
      description:
        "Experienced in creating simple data structures with Python.",
      image: "/python.png",
    },
  ];

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            image={skill.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
