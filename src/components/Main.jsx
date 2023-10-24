import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import backgroundImage from "../assets/background.jpg"



const main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover "
        src={backgroundImage}
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-sky-950/90 to-sky-950/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
        <h1 className="sm:text3xl text-2xl pb-4 text-gray-400">Hi! My name is</h1>
            <div className="flex md:align-middle md:flex-row flex-col ">
          <h1 className="sm:test-5xl text-4xl font-bold text-gray-400">Oscarlos </h1>
          <h1 className="sm:test-5xl pl-3 text-4xl font-bold text-gray-400">Gomez</h1>
          <h1 className="sm:test-5xl pl-3 text-4xl font-bold text-gray-400">Rosario</h1>
          </div>
          <h2 className="flex sm:text3xl text-2xl pt-4 text-gray-400">
            and I 
            <TypeAnimation
              sequence={[
                "am a full-stack dev",
                2500,
                "am a graphic designer",
                2500, 
                "code in Javascript & Python",
                2500, 
                "design logos",
                2500,
                "love learning and creating art",
                2500,
                "can cook a mean meal",
                2500,
                "learn from my mistakes",
                2500,
                "cannot do the nay nay",
                2500,
                "love tech",
                2500,
                "can create your website",
                2500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-400">
            <FaLinkedinIn className="cursor-pointer" size={30} />
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
