import React from "react";

export const CardProject = props => {
  console.log(props);
  return (
    <article className="flex w-full flex-col overflow-hidden text-white">
      <div className="aspect-[1/3] w-full max-h-[350px] overflow-hidden rounded-md lg:max-h-[420px] xl:max-h-[500px]">
        <img
          src={props.urlImg}
          alt={`image of ${props.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-6">
        <a href="" className="underline">
          <h3 className="font-syne text-2xl lg:text-3xl">{props.title}</h3>
        </a>
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
              <td>
                <h4 className="font-rubik text-[#606060] font-normal">
                  Tech Stack
                </h4>
              </td>
              <td className="px-3">
                <span className="text-white"> : {props.techstack}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
