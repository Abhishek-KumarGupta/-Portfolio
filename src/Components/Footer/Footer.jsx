import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around items-center bg-[#465697] text-white p-10 md:p-12"
    >
      <div>
        <h1 className="text-3xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mt-2">
          Feel Free To Reach Out
        </h3>
      </div>

      <ul className="text-sm md:text-xl mt-6 md:mt-0 space-y-4">

        {/* Email */}
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ag6557168@gmail.com&su=Portfolio%20Contact&body=Hello%20Abhishek,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <MdOutlineEmail size={22} />
            <span>ag6557168@gmail.com</span>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-gupta-633556253?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <CiLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/Abhishek-KumarGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Footer;