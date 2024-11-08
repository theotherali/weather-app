import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Collapse, Card } from "@material-tailwind/react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <header className="relative flex justify-between h-20 bg-lightPrimary-800 dark:bg-darkPrimary-800 shadow-md px-6">
        <div className="flex-center gap-x-5">
          <div
            className="flex-center h-10 w-10 border border-gray-400 rounded-lg"
            onClick={toggleOpen}
          >
            <IoSettingsOutline className="text-xl text-gray-400" />
          </div>
          <div className="h-10 w-[295px] flex items-center justify-between border border-gray-400 rounded-[4px]">
            <span className="w-6 h-6 flex-center mr-3">
              <FaCaretDown className="text-gray-600" />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full bg-transparent px-2 dark:text-lightText-800 ltr-text"
              placeholder="Search Your Location"
            />
          </div>
        </div>

        <div className="flex-center gap-x-2">
          <span className="text-[11.5px] text-darkText-800 dark:text-lightText-800 tracking-tight">
            Weather Dashboard
          </span>
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src="./public/images/image1.jpg" alt="" />
          </div>
        </div>
      </header>
      <Collapse className="w-[220px] mr-[25px] -mt-3" open={open}>
        <Card className="h-60 px-4 py-3 divide-y" dir="ltr">
          <div className="mb-3">
            <span>Mode</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] child:text-[13px] child:tracking-wider">
              <span className="flex-center gap-x-2 w-full">
                <IoSunnyOutline />
                Light
              </span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span className="flex-center gap-x-2 w-full text-xs">
                <IoMoonOutline />
                Dark
              </span>
            </div>
          </div>
          <div className="pt-4 mb-3">
            <span>Language</span>
            <div className="flex w-full border border-gray-400 h-[33px] mt-1.5 rounded-[4px] child:text-[13px] child:tracking-wider">
              <span className="flex-center w-full">En</span>
              <span className="w-[2px] max-h-full bg-blue-gray-300"></span>
              <span className="flex-center w-full">Fa</span>
            </div>
          </div>
          <div className="flex items-center pl-[2px] pt-3.5 gap-x-2 h-full">
            <RxExit className="text-lg" />
            <span>Exit</span>
          </div>
        </Card>
      </Collapse>
    </>
  );
}
