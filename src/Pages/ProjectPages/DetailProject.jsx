import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { useParams } from "react-router";
import { Carousel } from "./Carousel";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
export const DetailProject = () => {
  const { id } = useParams();
  const project = projects.find(i => i.id === Number(id));
  return (
    <section className="min-h-[60vh] px-8 py-12 pb-20 relative md:px-28  lg:grid lg:grid-cols-2 lg:gap-16 lg:px-14 xl:flex-col xl:px-18 xl:gap-x-12 xl:py-20 2xl:px-24 2xl:gap-20">
      <div className="w-full lg:mt-10">
        <Carousel project={project} />
      </div>
      <div className="mt-5 w-full md:mt-8 md:mb-16">
        <h4 className="font-syne text-white font-bold text-2xl lg:text-3xl xl:text-5xl">
          {project.title}
        </h4>
        <table className="font-rubik text-sm xl:text-lg lg:mt-2">
          <tbody>
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
                className="text-white pt-3 md:text-[13px] lg:text-sm xl:text-lg"
                colSpan={2}>
                {project.detail}
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className={` mt-8 mb-10 ${
            project.type === "Data Visualization" ? "hidden" : "flex"
          }`}>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className={`border-[#FFEA00] text-white font-rubik px-4 py-1 border-2 text-[12px] hover:shadow-button hover:shadow-[#FFEA00] transition-all duration-150 rounded-lg flex gap-2 items-center justify-center cursor-pointer xl:text-[16px] xl:px-6`}>
              VISIT <FaArrowUpRightFromSquare />
            </a>
          ) : (
            <button
              disabled
              className={`border-gray-400 text-gray-500 font-rubik px-4 py-1 border-2 text-[12px]  rounded-lg flex gap-2 items-center justify-center cursor-not-allowed xl:text-[16px] xl:px-6`}>
              VISIT <FaArrowUpRightFromSquare />
            </button>
          )}
        </div>
        {project.alert ? (
          <div className="text-[#F86363] font-rubik mt-10 md:mt-5 md:max-w-[80%]">
            <h6 className="font-semibold xl:text-lg">Attention!!!</h6>
            <p className="mt-3 text-[14px] xl:text-lg">{project.alert}</p>
          </div>
        ) : (
          ""
        )}
        {/* <div className="md:grid md:grid-cols-2 md:gap-8"></div> */}
      </div>
      {/* <div className="mt-10 md:max-w-[60%] mb-10 md:mt-0 md:col-span-2 lg:col-start-2 lg:mt-5 xl:max-w-[80%] xl:mt-14">
        <div className="flex">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className={`border-[#FFEA00] text-white font-rubik px-4 py-1 border-2 text-[12px]  rounded-lg flex gap-2 items-center justify-center cursor-pointer xl:text-[16px] xl:px-6`}>
              VISIT <FaArrowUpRightFromSquare />
            </a>
          ) : (
            <button
              disabled
              className={`border-gray-400 text-gray-500 font-rubik px-4 py-1 border-2 text-[12px]  rounded-lg flex gap-2 items-center justify-center cursor-pointer xl:text-[16px] xl:px-6`}>
              VISIT <FaArrowUpRightFromSquare />
            </button>
          )}
        </div>
        <div className="text-[#F86363] font-rubik mt-10 md:mt-5">
          <h6 className="font-semibold xl:text-lg">Attention!!!</h6>
          <p className="mt-3 text-[14px] xl:text-lg">{project.alert}</p>
        </div>
      </div> */}
    </section>
  );
};
