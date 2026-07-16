import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaFigma,
  FaAmazon,
} from "react-icons/fa";
import { SiMongodb, SiRedis } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import cbse from "../../assets/cbse.jpg"
import IBM from "../../assets/IBM.png"
import Upbte from "../../assets/Upbte.webp"
import jss from "../../assets/Jss.jpg"




const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-10">
        Experience & Education
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side - Skills */}
        <div className="md:w-2/5 flex flex-wrap gap-8 justify-center">
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaCss3Alt color="#1572B6" size={50} />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>

          <span className="p-4 bg-zinc-950 rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>

        </div>

        {/* Right Side - Experience Cards */}
        <div className="md:w-3/5 flex flex-col gap-6">

          {/* IBM */}
          <div className="flex items-center gap-8 bg-slate-900 rounded-xl p-6">
            <img
              src={IBM}
              alt="IBM"
              className="w-16 h-16 object-contain rounded-lg"
            />

            <div className="text-white">
              <h2 className="text-2xl font-semibold">IBM SkillsBuild Academic Internship</h2>
              <p className="text-gray-400">June 2024 - Present</p>

              <ul className="list-disc pl-5 mt-2">
                <li>Big Data & Business Management Intern</li>
              </ul>
            </div>
          </div>

          {/* JSS */}
          <div className="flex items-center gap-8 bg-slate-900 rounded-xl p-6">
            <img
              src={jss}
              alt="JSS"
              className="w-16 h-16 object-contain rounded-lg"
            />

            <div className="text-white">
              <h2 className="text-2xl font-semibold">Btech in Computer Science & Engineering</h2>
              <p className="text-gray-400">Sept 2024 - Present</p>

              <ul className="list-disc pl-5 mt-2">
                <li> JSS Academy of Technical Education, Noida</li>
          
              </ul>
            </div>
          </div>

          {/* UPBTE */}
          <div className="flex items-center gap-8 bg-slate-900 rounded-xl p-6">
            <img
              src={Upbte}
              alt="UPBTE"
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div className="text-white">
              <h2 className="text-2xl font-semibold">Diploma in Computer Science & Engineering</h2>
              <p className="text-gray-400">2020 - 2023</p>

              <ul className="list-disc pl-5 mt-2">
                <li>Government Polytechnic Rajgarh Mirzapur</li>
              </ul>
            </div>
          </div>

          {/* CBSE */}
          <div className="flex items-center gap-8 bg-slate-900 rounded-xl p-6">
            <img
              src={cbse}
              alt="CBSE"
              className="w-16 h-16 object-contain rounded-lg"
            />

            <div className="text-white">
              <h2 className="text-2xl font-semibold">10th Standard</h2>
              <p className="text-gray-400">2019 - 2020</p>

              <ul className="list-disc pl-5 mt-2">
                <li>Green Lawns School</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;