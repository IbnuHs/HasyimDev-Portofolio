import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { useParams } from "react-router";
import { Carousel } from "./Carousel";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
export const DetailProject = () => {
  const { id } = useParams();
  const project = projects.find(i => i.id === Number(id));
  return (
    <section className="min-h-[60vh] px-8 py-5 relative -z-10 md:grid md:grid-cols-2 md:gap-8 lg:grid-rows-2 xl:px-16">
      <div className="w-full lg:row-span-2">
        <Carousel project={project} />
      </div>

      <div className="mt-5">
        <h4 className="font-syne text-white font-bold text-2xl lg:text-3xl">
          {project.title}
        </h4>
        <table className="font-rubik text-sm lg:mt-2">
          <tr>
            <td className="text-[#606060]">Type</td>
            <td className="text-white">{project.type}</td>
          </tr>
          <tr>
            <td className="text-[#606060] flex">Tech Stack</td>
            <td className="text-white">{project.techsStack}</td>
          </tr>
          <tr>
            <td className="text-[#606060] text-nowrap">About Project</td>
          </tr>
          <tr>
            <td
              className="text-white pt-3 md:text-[13px] lg:text-sm"
              colSpan={2}>
              {project.detail}
            </td>
          </tr>
        </table>
        {/* <div className="md:grid md:grid-cols-2 md:gap-8"></div> */}
      </div>
      <div className="mt-10 md:max-w-[60%] mb-10 md:mt-5 md:col-span-2 lg:col-start-2 lg:mt-0">
        <div className="flex">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className={`border-[#FFEA00] text-white font-rubik px-4 py-1 border-2 text-[12px]  rounded-lg flex gap-2 items-center justify-center cursor-pointer`}>
              VISIT <FaArrowUpRightFromSquare />
            </a>
          ) : (
            <button
              disabled
              className={`border-gray-400 text-gray-500 font-rubik px-4 py-1 border-2 text-[12px]  rounded-lg flex gap-2 items-center justify-center cursor-pointer`}>
              VISIT <FaArrowUpRightFromSquare />
            </button>
          )}
        </div>
        <div className="text-[#F86363] font-rubik mt-10 md:mt-5">
          <h6 className="font-semibold">Attention!!!</h6>
          <p className="mt-3 text-[14px]">{project.alert}</p>
        </div>
      </div>
    </section>
  );
};
