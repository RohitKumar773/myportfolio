import React from "react";
import portfrolioimg from "../../assets/portfolio.png";
import Resume from "../../assets/myresume.pdf";
import "./Home.css";

function Home() {
  return (
    <div className="w-full h-auto float-left" data-aos="fade-up"
    data-aos-duration="1000">
      <div className="w-full h-80 float-left flex justify-center items-center mt-20 flex-col">
        <img src={portfrolioimg} alt="" className="h-full mt-48"/>
        <h1 className="text-3xl font-bold text-center float-left bg-gradient-to-tr
         from-red-700 to-white text-transparent bg-clip-text">
          👋 I'm Akhilesh , <br className="hidden" id="br"/>full stack developer
          <br /> based in India.
        </h1>
        <button className="text-white bg-gradient-to-tl from-purple-600 to-red-600 float-left mt-9 p-4 rounded-lg 
        hover:scale-105 duration-300">
          <a href={Resume}>Download My CV &rarr;</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
