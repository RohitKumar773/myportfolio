import React from "react";
import Card from "../Card/Card";
import project1 from "../../assets/project_1.jpg";
import project2 from "../../assets/project_2.jpg";
import project3 from "../../assets/project_3.jpg";
import project4 from "../../assets/project_4.jpg";
import project5 from "../../assets/project_5.jpg";
import project6 from "../../assets/project_6.jpg";
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
            codeLink={"https://github.com/AkhileshKr1098/EducatorBoxApp"}
          />
          <Card
            image={project1}
            projectName={"Quizard"}
            onBtnClick={"https://quizard-r7lm.vercel.app/"}
            codeLink={"https://github.com/RohitKumar773/quizard-code"}
          />
          <Card
            image={project2}
            projectName={"PreviousAdda"}
            onBtnClick={"https://rohitkumar773.github.io/previousadda/"}
            codeLink={"https://github.com/RohitKumar773/previousaddafrontend"}
          />
          <Card
            image={project3}
            projectName={"Green Soft"}
            onBtnClick={"https://rohitkumar773.github.io/green-soft/"}
            codeLink={"https://github.com/RohitKumar773/green-soft"}
          />
          <Card
            image={project4}
            projectName={"Killn'it"}
            onBtnClick={"https://rohitkumar773.github.io/killnit/"}
            codeLink={"https://github.com/RohitKumar773/killnit"}
          />
          <Card
            image={project5}
            projectName={"InfoZone"}
            onBtnClick={"https://rohitkumar773.github.io/mywikipidia/"}
            codeLink={"https://github.com/RohitKumar773/infoZone-Project"}
          />
          <Card
            image={project6}
            projectName={"Oasis Infobyte"}
            onBtnClick={"https://rohitkumar773.github.io/oibLandingPage/"}
            codeLink={"https://github.com/RohitKumar773/oibLandingPage"}
          />
          <Card
            image={project8}
            projectName={"Ali Skills Centre"}
            onBtnClick={"https://aliskillscentre.com"}
            codeLink={"https://github.com/RohitKumar773/AliSkillCentre"}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
