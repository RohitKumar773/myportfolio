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
import mssql from "../../assets/mssql.png";
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
          <Techs techTitle={"Android Studio"} image={android} />
          <Techs techTitle={"IOS App"} image={skill7} />
          <Techs techTitle={"TypeScript"} image={skill8} />
          <Techs techTitle={"Node Js"} image={skill10} />
          <Techs techTitle={"PHP"} image={skill9} />
          <Techs techTitle={"MS SQL"} image={mssql} />
          <Techs techTitle={"My SQL"} image={skill11} />
          <Techs techTitle={"Python"} image={skill12} />
        </div>
      </div>

      <div className="w-full h-auto float-left mt-16" id="contact">

        <div className="w-full h-auto float-left flex justify-center items-center">
          <div className="w-[80%] h-auto">
            <h1 className="w-full h-10 text-teal-50 font-semibold text-xl text-center">Experience</h1>
            
            <div className="w-full h-auto float-left flex-col border-t-2 border-b-2">
              <h1 className="text-white font-semibold mt-4 text-lg">👉🏻 Macreel Infosoft Private Limited (Noida).</h1>
              <p className="text-white mt-3">Position : Software Developer (Angular)</p>
              <p className="text-white mt-3">Duration : 07/2023 - Present</p>


              <h1 className="text-white font-semibold mt-4 text-lg">👉🏻 Green Soft (Hajipur Bihar).</h1>
              <p className="text-white mt-3">Position : Angular Developer Intern</p>
              <p className="text-white mt-3">Duration : 12/2022 - 06/2023</p>


              <h1 className="text-white font-semibold mt-4 text-lg">👉🏻 Shree Ram IT Solutions (Hajipur Bihar).</h1>
              <p className="text-white mt-3">Position : Web Designer Intern</p>
              <p className="text-white mt-3 pb-4">Duration : 05/2022 - 10/2022</p>

            </div>

          </div>
        </div>

        <div className="w-full h-12 float-left flex justify-center items-center mt-8">
          <p className="w-9 h-9 ml-4">
            <a
              href="https://www.linkedin.com/in/akhileshkr1098/"
              target="_blank">
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
              target="_blank">
              <img src={insta} alt="" />
            </a>
          </p>
        </div>

      </div>

    </>
  );
}

export default Skills;
