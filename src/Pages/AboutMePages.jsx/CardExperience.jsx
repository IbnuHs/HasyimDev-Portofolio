import React from "react";

export const CardExperience = ({ experience }) => {
  console.log(experience[0]);
  return (
    <article className="max-w-[350px] md:max-w-[280px] mx-auto lg:max-w-[350px] xl:w-full xl:max-w-none">
      <div className="bg-[#EFEEEA] rounded-lg aspect-square overflow-hidden flex items-center justify-center">
        <img src={experience.thumbnail} alt="" className="m-auto" />
      </div>
      <div className="mt-4 text-white flex flex-col gap-4 xl:gap-2">
        <h4 className=" font-syne font-semibold text-[20px] md:text-[22px] min-h-[66px] 2xl:text-2xl">
          {experience.title}
        </h4>
        <div className="flex flex-col 2xl:gap-2">
          <h5 className="font-semibold font-syne md:text-lg 2xl:text-[20px]">
            {experience.company}
          </h5>
          <h5 className="font-semibold font-syne md:text-lg">
            {experience.time}
          </h5>
          <p className="text-[#949494] 2xl:text-lg">{experience.detail}</p>
        </div>
      </div>
    </article>
  );
};
