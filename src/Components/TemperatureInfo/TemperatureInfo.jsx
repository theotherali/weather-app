import React from 'react'
import { IoLocation } from "react-icons/io5";

export default function TemperatureInfo() {
  return (
    <div className='flex justify-between w-[607px] h-[234px] px-6 py-5 shadow-costum'>
      <div className='flex flex-col max-w-48 mr-2.5 mt-1.5 text-darkText-800'>
        <img src="./public/images/svgs/image7.svg" alt="img" />
        <span className='text-[33px] tracking-wide -mr-1 mt-1'>Cloudy</span>
        <span className='mr-1 tracking-wide'>Feels Like 26</span>
      </div>
      <div>
        <span className='flex items-center justify-between tracking-wide text-blue-gray-800 bg-[#CDD9E0] rounded-4xl w-[173px] h-10 pr-[25px]'>
          San Francisco
        <IoLocation className='text-2xl ml-2' />
          </span>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}
