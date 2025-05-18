import React from "react";
import { projects } from "../../data/projects";
import { CardProject } from "../../Components/CardProject";

export const ProjectsPage = () => {
  // console.log(projects);
  return (
    <section className="min-h-screen pb-15 mt-10 lg:mt-12 lg:pb-30">
      <h2 className="text-white font-syne font-bold text-center text-[24px] md:text-2xl md:mb-10 lg:text-3xl xl:text-4xl">
        My Projects
      </h2>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(0,300px))] gap-12 justify-center mt-12 place-items-center px-6 fit-2-auto md:[grid-template-columns:repeat(auto-fit,minmax(0,320px))] md:gap-8 lg:mt-20 lg:[grid-template-columns:repeat(auto-fit,minmax(0,340px))] lg:gap-16 xl:[grid-template-columns:repeat(auto-fit,minmax(0,450px))] xl:gap-28">
        {projects.map((i, index) => {
          return (
            <CardProject
              key={index}
              id={i.id}
              title={i.title}
              type={i.type}
              techstack={i.techsStack}
              urlImg={i.thumbnail}
            />
          );
        })}
      </div>
    </section>
  );
};
