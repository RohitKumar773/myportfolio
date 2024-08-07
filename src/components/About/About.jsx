import React from "react";
import "./About.css"; 

function About() {
  return (
    <>
      <div className="w-full h-auto float-left mt-[250px]" id="about" data-aos="fade-up">
        <h1 className="text-white text-center text-lg float-left w-full font-semibold">
          About me
        </h1>
        <p className="text-gray-300 p-10 leading-10 text-justify" id="about">
          Hello 👋 , Welcome to my portfolio! I am Akhilesh dedicated Web and App developer
          with a rich background in React, Angular and Ionic, accumulating two years of
          valuable experience in the field. My journey has been marked by a
          commitment to delivering high-quality, innovative solutions through a
          range of projects that highlights my technical powerness and creative
          problem-solving. Throughout my career, I have honed my skills in
          Angular, React development, focusing on creating web applications that
          not only meet but exceed user expectations. My passion lies in
          crafting seamless and responsive experiences that bring ideas to life.
          Within this portfolio, you will find a curated collection of projects
          that not only showcase my dedication to staying abreast of industry
          trends. Each project is a testament to my ability to translate
          concepts into tangible, user-friendly applications. As I continue to
          grow and evolve in the dynamic landscape of web development, I am
          excited about the prospect of taking on new challenges and
          contributing to the ever-changing digital realm. Explore my portfolio
          to gain insights into my skills, experties, and the exciting journey
          I've embarked upon in the world of Angular and React development.
        </p>
      </div>
    </>
  );
}

export default About;
