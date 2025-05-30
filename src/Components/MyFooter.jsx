import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const MyFooter = () => {
  return (
    <footer className="bg-[#131313] text-white px-6 py-10 flex flex-col gap-8 md:px-16 lg:px-32 lg:py-8 xl:py-16 xl:px-52">
      <div className="flex justify-between items-center">
        <h5 className="font-extrabold font-syne text-[10px] justify-self-start self-start md:text-sm lg:text-[18px] xl:text-[22px] 2xl:text-[24px]">
          HASYIM<span className="text-[#F72C5B] font-extrabold">DEV</span>
        </h5>
        <div className="flex flex-col gap-3 items-center md:gap-5 2xl:gap-6">
          <h5 className="flex items-center gap-1 text-[12px] font-semibold md:text-sm lg:text-[15px] xl:text-[20px] xl:gap-2 2xl:text-[22px]">
            <FaLocationDot className="text-[12px] lg:text-[15px] xl:text-[20px] 2xl:text-[22px]" />
            Makassar, Indonesia
          </h5>
          <ol className="flex gap-2 lg:gap-3">
            <li>
              <a
                href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/"
                target="__blank"
                className="inline-block p-1 rounded-sm border border-white md:text-lg lg:text-xl xl:text-2xl">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:ibnuhs30@gmail.com"
                target="__blank"
                className="inline-block p-1 rounded-sm border border-white md:text-lg lg:text-xl xl:text-2xl">
                <SiGmail />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IbnuHs"
                target="__blank"
                className="inline-block p-1 rounded-sm border border-white md:text-lg lg:text-xl xl:text-2xl">
                <FaGithub />
              </a>
            </li>
          </ol>
        </div>
      </div>
      <hr className="2xl:mt-5" />
      <h6 className="font-semibold font-syne text-center text-sm xl:text-xl">
        &copy; Copyright 2025
      </h6>
    </footer>
  );
};
