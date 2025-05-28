import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuref = useRef();
  const onShow = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  const location = useLocation();
  useEffect(() => {
    setShow(false);
  }, [location]);
  useEffect(() => {
    const handleClickOutside = e => {
      if (show && menuref.current && !menuref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);
  return (
    <nav className="py-3 px-6 z-auto flex flex-row justify-between md:py-4 box-border lg:px-20 xl:px-28">
      <h1 className="font-bold font-syne text-white lg:text-[18px] px-0 mx-0 xl:text-[24px]">
        HASYIM
        <span className="font-extrabold px-0 mx-0 text-[#F72C5B]">DEV</span>
      </h1>
      <ol
        ref={menuref}
        className={`absolute top-13 text-[14px] left-0 z-20 right-0 flex flex-col justify-center items-center gap-4 font-semibold ease-in-out transition-all duration-75 font-rubik bg-[#1A1A1A] backdrop-filter backdrop-blur-lg  ${
          show ? "h-auto py-5 pb-8" : "h-0 overflow-hidden"
        } md:bg-transparent md:static md:flex md:h-auto md:flex-row md:text-[13px] md:overflow-visible lg:text-[15px] xl:text-[16px] xl:gap-12`}>
        <li className="listNav text-[#ffffff91] hover:text-white transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="listNav text-[#ffffff91] hover:text-white transition-all">
          <Link to="/projects">My Projects</Link>
        </li>
        <li className="listNav text-[#ffffff91] hover:text-white transition-all">
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className="text-[#FFFFFF] hover:text-white transition-all">
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="border border-[#BF3131] cursor-pointer bg-[#222222] hover:shadow-button hover:shadow-[#BF3131] px-5 py-1 rounded-2xl md:px-4 md:py-1 xl:py-2 xl:px-6">
            Contacts
          </button>
        </li>
      </ol>
      <div className="md:hidden">
        <button
          type="button"
          onClick={onShow}
          className={`${show ? "hidden" : "inline-block"}`}>
          <IoMenu className="text-white text-[24px]" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className={`${show ? "inline-block" : "hidden"}`}>
          <IoClose className="text-white text-[24px]" />
        </button>
      </div>
    </nav>
  );
};
