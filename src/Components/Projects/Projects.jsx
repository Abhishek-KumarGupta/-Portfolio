import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
                Projects
            </h1>

            <div className="py-12 flex flex-wrap justify-center gap-8">

                <ProjectCard
                    title="Virtual Assistant"
                    main="AI-powered virtual assistant built with React, Express.js, MongoDB, and Gemini API. Supports voice commands and real-time responses."
                    githubLink="https://github.com/Abhishek-KumarGupta/virtual-assistant"
                />

                <ProjectCard
                    title="WanderLust – Travel Listing Platform"
                    main="Full-stack travel listing web application built with Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary, and Mapbox. Supports authentication, image upload, reviews, and CRUD operations."
                    githubLink="https://github.com/Abhishek-KumarGupta/WanderLust"
                />

                <ProjectCard
                    title="Spotify Clone"
                    main="Responsive Spotify homepage clone built using HTML5 and CSS3."
                    githubLink="https://github.com/Abhishek-KumarGupta/spotify-clone"
                />

                <ProjectCard
                    title="Simon Game"
                    main="Interactive Simon memory game built using HTML, CSS, JavaScript, and jQuery."
                    githubLink="https://github.com/Abhishek-KumarGupta/Simon-Game"
                />

                <ProjectCard
                    title="Weather Widget"
                    main="React-based weather application that displays real-time weather information using a weather API."
                    githubLink="https://github.com/Abhishek-KumarGupta/weather-widget/tree/main/mini-project-react"
                />

                <ProjectCard
                    title="Lottery Game"
                    main="React application that generates random lottery numbers and checks winning conditions."
                    githubLink="https://github.com/Abhishek-KumarGupta/Lottery-Game"
                />


            </div>
        </div>
    );
};

export default Projects;