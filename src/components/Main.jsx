import React from "react";
import { TypeAnimation } from "react-type-animation";

const main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover "
        src="src/assets/background-template.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-sky-950/60">
        <h1 className="">I'm Oscar</h1>
        <h2 className="">I can  
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'code in Javascript',
        2500, // wait 1s before replacing "Mice" with "Hamsters"
        'design logos',
        2500,
        'tell funny jokes ',
        2500,
        'learn from my mistakes',
        2500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft:"5px" }}
      repeat={Infinity}
    />
        </h2>
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default main;
