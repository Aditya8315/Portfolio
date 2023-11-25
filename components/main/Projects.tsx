import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="h-full w-full flex flex-col  md:flex-row gap-10 px-10">
        <ProjectCard
          src="/student.png"
          title="Student Master Database"
          description="A Database for every student to easy access, verification procees for all official documents"
          url="https://github.com/Aditya8315/Student-Life-Cycle-Mnmg.-"
        />
        <ProjectCard
          src="/ecommerce.png"
          title="E-commerce Website"
          description="Personal project to understand all functionalities and aspects related to an e-commerce website."
          url="https://github.com/Aditya8315/fashion.com"
        />
         <ProjectCard
          src="/APPetite.png"
          title="APPetite"
          description="Food Delivery App developed using React Native & Sanity.io"
          url="https://github.com/Aditya8315/APPetite"
        />
        </div>
      </div>
  );
};

export default Projects;
