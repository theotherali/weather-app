import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
// background: linear-gradient(90deg, #F3FAFE 0%, rgba(204, 221, 221, 0.619608) 51%, #F3FAFE 100%);

export default function Footer() {
  return (
    <div className="absolute bottom-0 flex px-6 items-center justify-between w-full h-[108px] bg-gradient-to-r dark:from-[#292F45] dark:via-[#3F4861] dark:to-[#151D32] from-[#F3FAFE] via-gray-400 to-[#F3FAFE] text-darkText-800 dark:text-lightText-800">
      <div className="flex gap-x-10">
        <div className="flex-center gap-x-1">
          <span className="ltr-text text-sm">12:25 . Monday 23 December 2023</span>
          <FaRegCalendarAlt />
        </div>
        <div className="flex-center gap-x-1">
          <span className="ltr-text hidden xl:block text-sm">contact us : info@nadin.ir</span>
          <MdOutlineMailOutline className="hidden xl:block" />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <span className="ltr-text text-sm hidden lg:block">
          All rights of this site are reserved for Nadin Sadr Aria Engineering
          Company.
        </span>
        <img src="/images/svgs/icon-copy-1.png" alt="" />
      </div>
    </div>
  );
}
