import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover "
        src="src/assets/background-template.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-sky-950/60">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:test-5xl text-4xl font-bold text-gray-400">I'm Oscar</h1>
          <h2 className="flex sm:text3xl text-2xl pt-4 text-gray-400">
            I can
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "code in Javascript",
                2500, // wait 1s before replacing "Mice" with "Hamsters"
                "design logos",
                2500,
                "tell funny jokes ",
                2500,
                "learn from my mistakes",
                2500,
                "not do the nay nay",
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
