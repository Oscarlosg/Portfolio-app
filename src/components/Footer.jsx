import React from "react";
import footerImage from "../assets/footer-image.png";
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="work" className="max-w-[1040px] pt-1 pb-16 m-auto">
      <div className="">
        <div className="">
          <img
            className=" w-[100px] m-auto"
            src={footerImage}
            alt="main logo"
          />
          <h5 className="text-center pt-2 text-[#8a8b8d] text-[15px] ">
            Made by Oscarlos Gomez Rosario
          </h5>
        </div>
        <div className="flex m-auto justify-between pt-3 max-w-[200px] w-full text-[#8a8b8d]">
          <a href="https://www.linkedin.com/in/oscarlosg/" className="">
            <FaLinkedinIn className="cursor-pointer" size={30} />
          </a>
          <a href="https://www.facebook.com/OscarlosG/" className="">
            <FaFacebookSquare className="cursor-pointer" size={30} />
          </a>
          <a href="https://www.instagram.com/oscarlos14/" className="">
            <FaInstagram className="cursor-pointer" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
