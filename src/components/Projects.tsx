import "./Projects.scss";
import { Tilt } from "react-tilt";
import { ProjectsList, Project } from "../constants/projects";
import github from "../assets/github.png";
import skills from "../constants/skills";
import React from "react";
interface projProps {
  project: Project;
}

const ProjectCard = ({ project }: projProps) => {
  const { name, description, tags, image, source } = project;

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="ProjectCard bg-tertiary sm:w-[360px]"
    >
      <div className="projectImage">
        <img src={image} alt="project_image" />

        <div className="projectSourceIcon card-img_hover">
          <div onClick={() => window.open(source, "_blank")}>
            <img src={github} alt="source code" />
          </div>
        </div>
      </div>
      <div className="techStacks">
        {tags.map((each) => {
          const skill = skills.find((skill) => skill.name === each)!;
          return (
            <div className="icon">
              {React.createElement(skill.icon, { color: skill.color })}
            </div>
          );
        })}
      </div>
      <div className="projectDetails">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Tilt>
  );
};

function Projects() {
  return (
    <div className="Projects" id="Projects">
      <h2>Projects</h2>
      <br />
      <p>Things I have created</p>
      <div className="projectsInfo">
        {ProjectsList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
