import React from "react";
import ProjectItem from "./ProjectItem";
import projectImageTemplate from "../assets/project-template.jpg";

const Projects = () => {
  return (
    // write down code for separate listings for jobs. one section for coding jobs and another for regular jobs. Makes for better organization. 
    //maybe just make a extra check to show a box that says "proggraming". its simple stuff
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-400">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={projectImageTemplate} title="template" />
        <ProjectItem img={projectImageTemplate} title="template" />
        <ProjectItem img={projectImageTemplate} title="template" />
        <ProjectItem img={projectImageTemplate} title="template" />
      </div>
    </div>
  );
};

export default Projects;
