import React from "react";
import { CardProject } from "../../../Components/CardProject";
import { projects } from "../../../data/projects";
import { FaArrowRightLong } from "react-icons/fa6";

export const MyProjects = () => {
  return (
    <div className="py-10 lg:px-26 xl:py-16">
      <h2 className="text-center">
        <span className="text-white font-syne font-bold inline-block text-2xl relative lg:text-3xl xl:text-5xl">
          My Projects
          <div className="h-[20px] w-[80px] absolute -right-10 rounded-[100%] shadow-[#e0e0e0] shadow-background bg-[#f1f1f18a] blur-2xl -z-10 md:-right-20 md:w-[120px]"></div>
        </span>
      </h2>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(0,300px))] gap-4 justify-center mt-10 place-items-center px-5 fit-2-auto md:[grid-template-columns:repeat(auto-fit,minmax(0,320px))] md:gap-8 lg:mt-20 lg:[grid-template-columns:repeat(auto-fit,minmax(0,340px))] lg:gap-16 xl:[grid-template-columns:repeat(auto-fit,minmax(0,450px))] xl:gap-28">
        {projects.map((i, index) => (
          <CardProject
            key={index}
            title={i.title}
            type={i.type}
            techstack={i.techsStack}
            urlImg={i.urlImg}
          />
        ))}
      </div>

      <div
        className="flex justify-center mt-14 lg:mt-16 xl:mt-20
      ">
        <a
          href=""
          target="blank"
          className="text-white cursor-pointer font-rubik flex items-center justify-center gap-2 border border-[#FF9142] px-4 py-2 rounded-2xl text-sm hover:shadow-center shadow-[#FF9142] transition-all ease-in-out duration-150 lg:px-5 lg:text-[16px] xl:text-lg xl:px-6 xl-py-3">
          <h5>Explore More</h5>
          <FaArrowRightLong className="text-shadow-white" />
        </a>
      </div>
    </div>
  );
};
