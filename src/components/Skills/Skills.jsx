import React from "react";
import Techs from "../Techs/Techs";
import skill1 from "../../assets/skill01.png";
import skill2 from "../../assets/skill02.png";
import skill3 from "../../assets/skill03.png";
import skill4 from "../../assets/skill04.png";
import skill5 from "../../assets/skill05.png";
import skill6 from "../../assets/skill06.png";
import skill7 from "../../assets/skill07.png";
import skill8 from "../../assets/skill08.png";
import skill9 from "../../assets/skill09.png";
import skill10 from "../../assets/skill10.png";
import skill11 from "../../assets/skill12.png";
import skill12 from "../../assets/skill13.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import ionic from "../../assets/ionic.png";
import capacitor from "../../assets/capacitor.png";
import android from "../../assets/android.png";
import "./Skill.css";

function Skills() {
  return (
    <>
      <div className="w-full h-auto float-left mt-10" id="skill">
        <h1 className="w-full h-10 text-center text-white text-lg font-semibold">
          My Skills
        </h1>

        <div className="w-[86%] h-auto ml-[7%]" id="skill_area">
          <Techs techTitle={"HTML"} image={skill1} />
          <Techs techTitle={"CSS"} image={skill2} />
          <Techs techTitle={"JavaScript"} image={skill3} />
          <Techs techTitle={"BootStrap"} image={skill4} />
          <Techs techTitle={"React Js"} image={skill5} />
          <Techs techTitle={"Angular"} image={skill6} />
          <Techs techTitle={"Ionic"} image={ionic} />
          <Techs techTitle={"Capacitor"} image={capacitor} />
          <Techs techTitle={"Android Studio"} image={android} />
          <Techs techTitle={"Tailwind CSS"} image={skill7} />
          <Techs techTitle={"TypeScript"} image={skill8} />
          <Techs techTitle={"Node Js"} image={skill10} />
          <Techs techTitle={"Mongo DB"} image={skill9} />
          <Techs techTitle={"My SQL"} image={skill11} />
          <Techs techTitle={"Python"} image={skill12} />
        </div>

        <div className="w-full h-36 float-left mt-16" id="contact">
          <div className="w-1/2 h-full float-left border-r-2" id="section">
            <div className="w-full h-10 text-white font-bold text-xl text-center">
              Experience
            </div>
            <p className="w-full h-10 text-gray-200 font-medium text-center">
              2 years +
            </p>
            <p className="w-full h-10 text-gray-200 font-medium text-center">
              Professional Experiance in Full Stack Development
            </p>
          </div>

          <div className="w-1/2 h-full float-left" id="section">
            <div className="w-full h-10 text-white font-bold text-xl text-center">
              Contact me
            </div>
            <p className="w-full h-10 text-gray-200 font-medium text-center">
            akhileshkr1098@gmail.com
            </p>

            <div className="w-full h-12 float-left flex justify-center items-center">
              <p className="w-9 h-9 ml-4">
                <a href="https://www.linkedin.com/in/akhileshkr1098/" target="_blank">
                  <img src={linkedin} alt="" />
                </a>
              </p>
              <p className="w-10 h-10 ml-4">
                <a href="https://twitter.com/Kumar_Akhilesh0" target="_blank">
                  <img src={twitter} alt="" />
                </a>
              </p>
              <p className="w-10 h-10 ml-4">
                <a href="https://github.com/akhileshkr1098" target="_blank">
                  <img src={github} alt="" />
                </a>
              </p>
              <p className="w-9 h-9 ml-4">
                <a
                  href="https://www.instagram.com/_r_o_h_i_tkumar_"
                  target="_blank"
                >
                  <img src={insta} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
