import React from "react";
import Card from "../Card/Card";
import project1 from "../../assets/project_1.jpg";
import project2 from "../../assets/project_2.jpg";
import project3 from "../../assets/project_3.jpg";
import project4 from "../../assets/project_4.jpg";
import project5 from "../../assets/project_5.jpg";
import project7 from "../../assets/project_7.jpg";
import project8 from "../../assets/project_8.jpg";
import "./Project.css";

function Projects() {
  return (
    <>
      <div className="w-full h-auto float-left" id="project">
        <h1 className="text-white w-full h-12 text-lg font-semibold text-center">
          My Projects
        </h1>
        <div className="w-full h-auto mt-8 float-left flex justify-center items-center flex-col">
          <Card
            image={project7}
            projectName={"EducatorBox"}
            onBtnClick={"https://educatorbox.com"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project1}
            projectName={"Heera"}
            onBtnClick={"https://play.google.com/store/apps/details?id=com.heerafacility.app&hl=en_IN"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project4}
            projectName={"Turning Brain"}
            onBtnClick={"https://play.google.com/store/apps/details?id=tbrain.in.medical.eduapp&hl=en_IN"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project2}
            projectName={"Sankalp Foundation"}
            onBtnClick={"http://sankalpfoundations.org/"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project3}
            projectName={"AddBox"}
            onBtnClick={"https://addbox.in/"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project5}
            projectName={"Sankalp Education"}
            onBtnClick={"https://www.sankalpcomputer.com/"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
          <Card
            image={project8}
            projectName={"Ali Skills Centre"}
            onBtnClick={"https://aliskillscentre.com"}
            codeLink={"https://github.com/akhileshkr1098"}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
