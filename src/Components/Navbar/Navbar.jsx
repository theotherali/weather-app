import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Collapse, Card } from "@material-tailwind/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightModeHandler = () => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };


  return (
    <>
      <header className="relative flex justify-between h-[73px] bg-lightPrimary-800 dark:bg-darkPrimary-800 shadow-md dark:shadow-dark px-6">
        <div className="flex-center gap-x-5">
          <div
            className="flex-center h-10 w-10 border border-gray-500 rounded-lg cursor-pointer"
            onClick={toggleOpen}
          >
            <IoSettingsOutline className="text-xl text-gray-500" />
          </div>
          <div className="h-10 sm:w-[295px] flex items-center justify-between border border-gray-500 rounded-[4px]">
            <span className="w-6 h-6 flex-center mr-3">
              <FaCaretDown className="text-gray-600" />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full bg-transparent px-2 dark:text-lightText-800 ltr-text outline-none"
              placeholder="Search Your Location"
            />
          </div>
        </div>

        <div className="flex-center gap-x-2">
          <span className="text-[11.5px] text-darkText-800 dark:text-lightText-800 tracking-tight">
            Weather Dashboard
          </span>
          <div className="hidden sm:block w-14 h-14 rounded-full overflow-hidden">
            <img src="/images/image1.jpg" alt="" />
          </div>
        </div>
      </header>
      <Collapse className="w-[220px] mr-[25px] -mt-3 absolute z-10" open={open}>
        <Card
          className="h-60 px-4 py-3 divide-y dark:bg-black"
          dir="ltr"
        >
          <div className="mb-3">
            <span className="dark:text-lightText-800">Mode</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] child:text-[13px] child:tracking-wider overflow-hidden">
              <span
                className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText-800 dark:font-bold cursor-pointer"
                onClick={() => lightModeHandler()}
              >
                <IoSunnyOutline />
                Light
              </span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span
              className="flex-center gap-x-2 w-full dark:text-darkText-800 dark:bg-lightPrimary-800 dark:font-bold cursor-pointer"
                onClick={() => darkModeHandler()}
              >
                <IoMoonOutline />
                Dark
              </span>
            </div>
          </div>
          <div className="pt-4 mb-3">
            <span className="dark:text-lightText-800">Language</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] child:text-[13px] child:tracking-wider">
              <span className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText-800 dark:font-bold cursor-pointer">En</span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span className="flex-center gap-x-2 w-full text-blue-600 dark:text-lightText-800 dark:font-bold cursor-pointer">Fa</span>
            </div>
          </div>
          <Link to={"/Login"} className="flex items-center pl-[2px] pt-3.5 gap-x-2 h-full child:dark:text-lightText-800 child:dark:font-bold">
            <RxExit className="text-lg" />
            <span>Exit</span>
          </Link>
        </Card>
      </Collapse>
    </>
  );
}
