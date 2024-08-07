import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="w-full h-20 float-left">
        <div
          className="h-full w-3/12 text-gray-200 text-[33px] font-[700] text-cambria font-mono text-center 
        leading-[100px] float-left" id="logo">
          AkhilesH
        </div>

        <div
          className="h-full w-1/2 float-left text-white text-lg mt-3 flex justify-center items-center"
          id="menu"
        >
          <ul className="">
            <li className="float-left mr-10 font-mono hover:text-blue-400 duration-200 hover:cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="float-left mr-10 font-mono hover:text-blue-400 duration-200 hover:cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="float-left mr-10 font-mono hover:text-blue-400 duration-200 hover:cursor-pointer">
              <a href="#skill">Skills</a>
            </li>
            <li className="float-left mr-10 font-mono hover:text-blue-400 duration-200 hover:cursor-pointer">
              <a href="#project">Projects</a>
            </li>
            <li className="float-left mr-10 font-mono hover:text-blue-400 duration-200 hover:cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div
          className="h-full w-3/12 float-right flex justify-center items-center mt-3"
          id="contact_btn"
        >
          {/* <button className="text-white bg-blue-800 p-3 w-40 rounded-md hover:bg-blue-900">Contact</button> */}
          <button
            className="px-8 py-3 bg-gradient-to-tl from-purple-600 to-red-600 text-white 
          rounded-md"
          >
            <a href="mailto:akhileshkr1098@gmail.com">Contact</a>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
// bg-gradient-to-t to-violet-800 from-blue-900
