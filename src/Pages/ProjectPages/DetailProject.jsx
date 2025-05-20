import React from "react";
import { projects } from "../../data/projects";
import { useParams } from "react-router";
import { Carousel } from "./Carousel";
export const DetailProject = () => {
  const { id } = useParams();
  const project = projects.find(i => id === id);
  console.log(project.thumbnail);
  console.log(id);

  return (
    <section className="min-h-[60vh] px-5 py-5 relative -z-10">
      <Carousel project={project} />

      <div className="mt-5">
        <h4 className="font-syne text-white font-bold text-2xl">
          {project.title}
        </h4>
        <table className="font-rubik text-sm">
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
            <td className="text-white pt-3" colSpan={2}>
              {project.detail}
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
