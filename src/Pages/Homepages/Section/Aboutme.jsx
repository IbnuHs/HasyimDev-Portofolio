import React from "react";
import backquote from "../../../assets/backtip.svg";

export const Aboutme = () => {
  return (
    <div className="px-8 text-white py-10 relative md:px-14 md:py-28 lg:py-36 lg:px-32 xl:px-52 xl:py-44 2xl:py-52">
      <h2 className="font-syne text-2xl font-bold md:text-3xl lg:text-5xl">
        About Me
      </h2>
      <p className="text-[#949494] mt-5 text-sm lg:max-w-[90%] xl:text-lg xl:mt-12 xl:max-w-[82%] 2xl:max-w-[80%]">
        Hello, I'm Ibnu Hasyim Surianto, a web developer with a Bachelor's
        degree in Informatics Engineering from Universitas Muslim Indonesia. I
        have a strong passion for web development, encompassing both front-end
        and back-end aspects. I'm experienced in building websites from the
        ground up, and I also have skills in data processing and data
        visualization. My technical expertise includes modern web technologies
        like HTML, CSS, JavaScript, React, Node.js, and SQL databases. I possess
        strong problem-solving abilities and thrive in collaborative team
        environments. I'm a quick learner, adaptable, and always eager to expand
        my knowledge. My career goal is to become a proficient full-stack web
        developer, and I'm enthusiastic about contributing to innovative
        projects.
      </p>
      <img
        src={backquote}
        alt=""
        className="font-extrabold absolute top-3 right-5 w-[80px] md:right-8 md:top-16 md:w-[100px] lg:right-25 lg:w-[150px] xl:w-[180px] xl:right-32 2xl:top-32"
      />
      <div className="h-[40px] w-[120px] absolute left-0 top-[50%] rounded-[100%] shadow-[#e0e0e0] shadow-background bg-[#f1f1f18a] blur-2xl -z-10  md:w-[120px] lg:-left-20 lg:w-[150px]"></div>
    </div>
  );
};
