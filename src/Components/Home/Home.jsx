import React from "react";
import Img from "../../assets/Image.jpeg";
import TextChange from "../textChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight">
          <TextChange />
        </h1>

        <p className="text-sm md:text-xl tracking-tight mt-4">
          I am a Computer Science Engineering student with a passion for web development
          and problem-solving. I specialize in creating responsive and modern web
          applications using React, Node.js, Express.js, MongoDB, and Tailwind CSS.
          I love learning new technologies, building real-world projects, and continuously
          improving my skills to become a successful Full Stack Developer.
        </p>

        <button
          onClick={() =>
            document.getElementById("Footer").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-base
  hover:opacity-85 duration-300 hover:scale-105 font-semibold
  rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>

        <a
          href="https://drive.google.com/file/d/10M8SfMWwmr0N0j3TDAEAb7Hbgg-CVXVM/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 md:mt-10 ml-5 text-white py-2 px-4 text-sm md:text-base
  hover:opacity-85 duration-300 hover:scale-105 font-semibold
  rounded-3xl bg-[#465697]"
        >
          Download Resume
        </a>

      </div>

      <div className="md:w-2/5 flex justify-center mb-10 md:mb-0">
        <img
          className="w-60 md:w-21 h-21 rounded-full"
          src={Img}
          alt="Abhishek"
        />
      </div>
    </div>
  );
};

export default Home;