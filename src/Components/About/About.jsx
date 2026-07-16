import React from "react";
import AboutImg from "../../assets/download.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center justify-center bg-black bg-opacity-30 shadow-xl rounded-lg p-8 md:p-12 md:mx-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <img
            className="w-64 md:w-80 rounded-lg"
            src={AboutImg}
            alt="About"
          />

          {/* Content */}
          <ul className="space-y-6">
            <li className="flex gap-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />

              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Frontend Development
                </h3>

                <p className="text-sm md:text-base leading-relaxed mt-2">
                  I build responsive and user-friendly websites using HTML, CSS,
                  JavaScript, React.js, and Tailwind CSS.
                  I enjoy creating clean and attractive user interfaces.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />

              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Backend Development
                </h3>

                <p className="text-sm md:text-base leading-relaxed mt-2">
                  I develop server-side applications using Node.js and Express.js.
                  I create REST APIs and handle authentication and application logic.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />

              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Database Management
                </h3>

                <p className="text-sm md:text-base leading-relaxed mt-2">
                  I work with MongoDB and Mongoose to store and manage application data efficiently.
                  I design simple and reliable database structures.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;