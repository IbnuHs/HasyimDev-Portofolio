import React from "react";
import backquote from "../../assets/backtip.svg";

export const AboutSection = () => {
  return (
    <section id="aboutme" className="text-white relative">
      <h2 className="font-syne text-2xl font-bold md:text-2xl lg:text-5xl">
        About Me
      </h2>
      <p className="text-[#949494] mt-5 text-sm md:text-[10px] lg:text-sm xl:text-lg">
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
        className="font-extrabold absolute top-0 right-0 w-[80px] lg:w-[100px] xl:-right-10 xl:w-[120px]"
      />
    </section>
  );
};
