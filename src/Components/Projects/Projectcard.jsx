import React from "react";

const ProjectCard = ({ title, main, githubLink }) => {
  return (
    <div className="w-80 h-80 bg-[#0c0e19] rounded-2xl shadow-xl p-6 flex flex-col hover:scale-105 transition duration-300">

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-300 mt-4 flex-grow">
        {main}
      </p>

      {/* GitHub Button */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit bg-[#465697] text-white px-5 py-2 rounded-full font-semibold hover:opacity-85 transition"
      >
        Git Repo
      </a>

    </div>
  );
};

export default ProjectCard;