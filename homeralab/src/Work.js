import React from "react";

function WorkCard(props) {
    return (
      <div className="work-card">
        <h3>{props.name}</h3>
        {props.image && <img src={props.image} alt={props.name} />}
        <h2>{props.description}</h2>
        <ul>
          {props.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  

function Work(props) {
  const work_exp = [
    {
      name: "LL Bean",
      description:
        "Web Development Intern",
      skills: ["Utilized agile development methodologies to drive QA automation processes that support continuous delivery for the L.L.Bean website", 
                "Resolved e-commerce bugs, optimized data fixtures, and wrote automated tests using Cypress and JavaScript for use cases to improve website functionality",
                "Collaborated with fellow interns in the IS department to deliver a presentation to 300+ employees across the company on current AI technologies",
            ],
      image: "/llbean.png"
    },
    {
      name: "Bowdoin College",
      description: "CS Department Learning Assistant",
      skills: ["Guided students through their programming projects with hands-on assistance during help sessions",
                "Explained core programming and logic concepts to students who were new to computer science",
        	    "Graded problem sets and developed point allocation rubrics to assess the quality of student work",
            ],
      image: "/bowdoin.png"
      
    },
    {
      name: "Meetinghouse Arts Freeport",
      description: "IT, Marketing & Publicity Intern",
      skills: ["Redesigned the two organizational websites and collaborated with a design team to create a new website",
                "Coordinated multiple social media campaigns and produced graphics to advertise for events",
                "Photographed summer events to increase assets for publicity and grant writing",
            ],
      image: "/mha.png"
    },
  ];

  return (
    <div className="work">
      <h1>Work Experience</h1>
      <div className="work-list">
        {work_exp.map((work) => (
          <WorkCard
            key={work.name}
            name={work.name}
            description={work.description}
            skills={work.skills}
            image={work.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
