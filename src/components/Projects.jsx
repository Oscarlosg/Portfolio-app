import React from "react";
import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList.json";
import decoderImage from "../assets/decoder-ring.png";
import flashcardImage from "../assets/flashcard-o-matic.png";
import eatFastImage from "../assets/EatFast.png";
import localLibraryImage from "../assets/local-library.png";
import recipeCrudImage from "../assets/recipe-crud.png";
import restaurantAppImage from "../assets/restaurant-managing-system.png";
import weLoveMoviesImgae from "../assets/WE-love-movies.png";

const imageList = [
  weLoveMoviesImgae,
  decoderImage,
  flashcardImage,
  eatFastImage,
  localLibraryImage,
  recipeCrudImage,
  restaurantAppImage,
];

const Projects = () => {
  return (
    // write down code for separate listings for jobs. one section for coding jobs and another for regular jobs. Makes for better organization.
    //maybe just make a extra check to show a box that says "proggraming". its simple stuff
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-400">Projects</h1>
      <p className="text-center py-8">
        Most of these were created while at school. Although some of them may be
        around the edges, I had a ton of fun learning and working on them
        regardless. I am working on updating some of these older projects and
        creating new ones so keep an eye out!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projectList.map((item, idx) => (
          <ProjectItem
            key={idx}
            img={imageList[idx]}
            title={item.title}
            technology={item.technology}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
