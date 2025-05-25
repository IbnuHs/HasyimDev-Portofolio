import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export const Modal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box py-10 bg-[#222222] max-w-[400px] xl:py-16">
        <div className="aspect-square max-w-[80px] m-auto border-2 bg-gray-300 border-gray-300 rounded-full p-3">
          <BsFillPersonFill className="w-full h-full text-[#222]" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-center mt-4">
            <h3 className="font-bold font-syne text-lg">
              Ibnu Hasyim Surianto
            </h3>
            <p className="text-sm mt-4 font-rubik capitalize">
              just a regular web developer who uses his time to explore web
              development and other tech worlds.
            </p>
          </div>
          <div className="flex items-center justify-center mt-5 gap-5">
            <a
              href=""
              className="flex items-center gap-2 text-[18px] underline">
              <FaLinkedin className="text-[28px]" />
            </a>
            <a
              href=""
              className="flex items-center border rounded-md p-[3px] box-content gap-2 text-[18px] underline">
              <BiLogoGmail className="text-[22px]" />
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[18px] underline">
              <FaGithubSquare className="text-[30px]" />
            </a>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
