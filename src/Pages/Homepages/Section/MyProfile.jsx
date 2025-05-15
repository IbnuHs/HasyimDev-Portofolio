import React from "react";
import mypict from "../../../assets/me1.png";

export const MyProfile = () => {
  return (
    <section className="mt-[16px] px-10 flex flex-col gap-4 md:flex-row-reverse md:items-center md:px-14 md:min-h-[45vh] md:gap-12 lg:justify-between lg:min-h-[55vh] lg:px-28 xl:min-h-[75vh] xl:px-36 xl:gap-28 2xl:px-40">
      <img
        src={mypict}
        alt="Ibnu Hasyim Picture"
        className="min-w-[80%] m-auto md:min-w-auto md:max-w-[40%] lg:w-full lg:max-w-[43%] xl:max-w-[500px] 2xl:max-w-[600px]"
      />
      {/* <div className="h-[9px] w-[100px] absolute -right-18 rounded-[100%] shadow-[#E52020] shadow-background bg-[#e520208a] blur-2xl top-[80px] -z-10 md:-right-0 md:top-[42%] md:rounded-none md:w-[200px] lg:w-[500px] lg:-right-[0px] 2xl:top-[28%]"></div> */}

      <div className="flex flex-col gap-2 relative xl:gap-6 2xl:gap-8">
        <div className="h-[20px] w-[250px] absolute -left-18 rounded-[100%] shadow-[#E52020] shadow-background bg-[#e520208a] blur-2xl top-[80px] -z-10 md:-left-0 md:top-[35%] md:rounded-none md:w-[300px] lg:w-[500px] lg:-left-[280px] 2xl:top-[28%]"></div>
        <h1 className="text-white font-syne text-[30px] font-bold leading-10 md:text-[32px] lg:text-4xl xl:leading-14 xl:text-6xl 2xl:leading-[4rem]">
          Let’s get know about me closer
        </h1>
        <p className="text-[#A8A8A8] leading-5 md:text-[12px] lg:text-[14px] xl:text-[17px] 2xl:leading-6">
          I am a fresh graduate who is highly dedicated to web development. With
          my love for technology and creativity, I have explored various areas
          in web development, from interface design to backend development. With
          the experience and knowledge I have gained during my studies, I have
          managed to create a variety of interesting web projects.
        </p>
      </div>
    </section>
  );
};
