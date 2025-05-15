import React from "react";
import powerBi from "../../../assets/powerbi.png";
import gas from "../../../assets/appscript.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNestjs,
  SiMysql,
  SiGoogleappsscript,
} from "react-icons/si";

export const MySkill = () => {
  return (
    <section className="mt-20 py-6 overflow-hidden">
      <h2 className="font-space-grotesk text-center text-white font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        My <span className="text-[#A31D1D]">Skills</span>
      </h2>

      <div className="relative grid max-w-[80%] mx-auto grid-cols-3 px-0 gap-4 my-12 md:mx-auto md:gap-6 md:grid-cols-4 md:px-10 md:my-14 lg:gap-0 lg:my-20 lg:gap-y-12 xl:grid-cols-6 xl:mt-26 2xl:gap-y-24">
        <div className="h-[20px] w-[180px] absolute -right-18 rounded-[100%] shadow-[#E52020] shadow-background bg-[#e520208a] blur-2xl bottom-[200px] -z-10 md:-right-20 md:top-[35%] md:rounded-none md:w-[300px] lg:w-[500px] lg:-right-[280px] 2xl:bottom-0"></div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center lg:p-4">
          <FaHtml5 className="text-[#FF9142] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            HTML
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <FaCss3Alt className="text-[#264de4] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            CSS
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <IoLogoJavascript className="text-[#FFBC04] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            JavaScript
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <FaReact className="text-[#0AB5FF] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            ReactJs
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <RiTailwindCssFill className="text-[#09DAFF] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            Tailwind
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <SiExpress className="text-[#f0db4f] text-[2.1rem] font-bold lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            ExpressJs
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <SiNestjs className="text-[#d9234c] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            NestJs
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <FaGitAlt className="text-[#F34F29] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            Git
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <SiMysql className="text-[#8983FE] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            MySQL
          </h1>
        </div>
        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <img src={powerBi} alt="" className="w-[2.1rem] lg:w-[48px]" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            PowerBI
          </h1>
        </div>

        <div className="w-fit mx-auto aspect-square px-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <SiGoogleappsscript className="text-gray-500 text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-[.7rem] font-semibold text-center mt-1 lg:text-[1rem] lg:mt-2">
            App Script
          </h1>
        </div>

        <div className="w-fit mx-auto aspect-square p-3 bg-[#2E2E2E] rounded-md flex flex-col items-center justify-center">
          <FaBootstrap className="text-[#563D7C] text-[2.1rem] lg:text-5xl" />
          <h1 className="text-white text-xs font-semibold mt-1 lg:text-[1rem] lg:mt-2">
            Bootstrap
          </h1>
        </div>
      </div>
    </section>
  );
};
