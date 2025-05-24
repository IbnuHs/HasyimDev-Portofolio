import React from "react";
import { AboutSection } from "./About";
import me from "../../../src/assets/me1.png";
import { CardExperience } from "./CardExperience";
import { experience } from "../../data/experience";

export const AboutMe = () => {
  return (
    <section className="min-h-[90vh] -z-10 px-12 mt-10 mb-20 lg:mt-20 xl:px-36 relative xl:mb-28 2xl:mb-32">
      <div className="flex flex-col gap-10 relative md:grid md:grid-cols-2 lg:items-center xl:gap-14">
        <div className="h-[50px] w-[150px] absolute -left-10 rounded-[100%] shadow-[#E52020] shadow-background bg-[#e520208a] blur-2xl top-[40%] z-10 md:h-[30px] md:w-[120px] md:-left-0  md:rounded-none lg:w-[500px] lg:-left-[280px] "></div>
        <img src={me} alt="" className="w-full" />
        <AboutSection />
      </div>
      <div className="mt-18 lg:mt-20 lg:px-14 xl:mt-28 xl:px-0">
        <h3 className="text-center font-syne text-white text-2xl font-normal md:text-3xl md:font-semibold lg:text-[40px] 2xl:text-5xl">
          My Experience
        </h3>
        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:items-start md:place-content-center md:grid md:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:mt-28 2xl:gap-20">
          {experience.map(i => {
            return <CardExperience experience={i} />;
          })}
        </div>
      </div>
    </section>
  );
};
