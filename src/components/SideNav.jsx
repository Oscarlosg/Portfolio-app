import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import resume from "../assets/Oscarlos-G-Resume.pdf"

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
        style={!nav ? { color: "white" } : null}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/70 bg-blur-lg flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shado-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shado-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shado-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href={resume}
            download="Oscarlos-G-Resume.pdf"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shado-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shado-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : null}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <div className="flex flex-row group">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100  m-2 p-4 ml-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
            <p className="text-1xl font-bold pt-[22px] text-gray-400 hidden group-hover:block drop-shadow-xl shadow-white">
              Home
            </p>
          </div>
          <div className="flex flex-row group">
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-100  m-2 p-4 ml-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={20} />
            </a>
            <p className="text-1xl font-bold pt-[22px] text-gray-400 hidden group-hover:block drop-shadow-xl shadow-white">
              Work History
            </p>
          </div>
          <div className="flex flex-row group">
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100  m-2 p-4 ml-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={20} />
            </a>
            <p className="text-1xl font-bold pt-[22px] text-gray-400 hidden group-hover:block drop-shadow-xl shadow-white">
              Projects
            </p>
          </div>
          <div className="flex flex-row group">
            <a
            href={resume}
            download="Oscarlos-G-Resume.pdf"
              className="rounded-full shadow-lg bg-gray-100  m-2 p-4 ml-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={20} />
            </a>
            <p className="text-1xl font-bold pt-[22px] text-gray-400 hidden group-hover:block drop-shadow-xl shadow-white">
              Resume
            </p>
          </div>
          <div className="flex flex-row group">
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 m-2 p-4 ml-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={20} />
            </a>
            <p className="text-1xl font-bold pt-[22px] text-gray-400 hidden group-hover:block drop-shadow-xl shadow-white">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
