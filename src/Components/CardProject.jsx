import React from "react";
import { Link } from "react-router";
import projectspict from "../assets/projectbasepict.svg";

export const CardProject = props => {
  return (
    <article className="flex w-full flex-col overflow-hidden text-white">
      <div
        className={`aspect-[1/3] w-full max-h-[350px] overflow-hidden rounded-md lg:max-h-[420px] xl:max-h-[500px] ${
          props.urlImg ? "bb-none" : "bg-gray-400"
        } `}>
        <img
          src={props.urlImg || projectspict}
          alt={`image of ${props.title}`}
          className={`w-full h-full ${
            props.urlImg ? "object-cover" : "objec-fill border rounded-xl"
          } ${
            props.type === "Data Visualitation" && props.urlImg
              ? "object-scale-down bg-gray-400"
              : "object-contain"
          }`}
        />
      </div>
      <div className="mt-6">
        <Link to={`/projects/${props.id}`} className="underline">
          <h3 className="font-syne text-2xl lg:text-3xl">{props.title}</h3>
        </Link>
        <table className="lg:mt-4">
          <tbody className="lg:text-xl">
            <tr>
              <td>
                <h4 className="font-rubik text-[#606060] font-normal">Type</h4>
              </td>
              <td className="px-3">
                <span className="text-white"> : {props.type}</span>
              </td>
            </tr>

            <tr>
              <td className="flex">
                <h4 className="font-rubik m-0 text-[#606060] font-normal text-nowrap">
                  Tech Stack
                </h4>
              </td>
              <td className="px-3 text-wrap">
                <span className="text-white"> : {props.techstack}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
