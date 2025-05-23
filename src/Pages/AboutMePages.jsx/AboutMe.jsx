import React from "react";
import { AboutSection } from "./About";
import me from "../../../src/assets/me1.png";
import { CardExperience } from "./CardExperience";
import { experience } from "../../data/experience";

export const AboutMe = () => {
  return (
    <section className="min-h-[80vh] -z-10 px-12 mt-10 mb-15 lg:mt-20 xl:px-36 relative">
      <div className="flex flex-col gap-10 relative md:grid md:grid-cols-2 lg:items-center xl:gap-14">
        <div className="h-[50px] w-[150px] absolute -left-10 rounded-[100%] shadow-[#E52020] shadow-background bg-[#e520208a] blur-2xl top-[40%] z-10 md:h-[30px] md:w-[120px] md:-left-0  md:rounded-none lg:w-[500px] lg:-left-[280px] "></div>
        <img src={me} alt="" className="w-full" />
        <AboutSection />
      </div>
      <div className="">
        {experience.map(i => {
          return <CardExperience experience={experience} />;
        })}
      </div>
    </section>
  );
};
