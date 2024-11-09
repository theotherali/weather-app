import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WeatherDatails() {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 11,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[381px] mx-6 mt-7 pl-7 pt-6 bg-stoneCard-111 dark:bg-[#292F45] rounded-3xl text-darkText-800 dark:text-lightText-800 ltr-text">
      <h3 className="text-2xl mb-[30px]">2 weeks Forecast</h3>

      <div>
        <Slider {...settings}>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>
          <div>
            <div className="flex items-center flex-col h-[266px] w-[104px] py-[45px] bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
            <h2 className="text-sm mb-6 border-b-2 border-b-[#7E7E7E] pb-[14px] px-2">Today</h2>
            <img src="/images/svgs/image8.svg" alt="" />
            <span className="text-lg mt-6">28°C</span>
            </div>
          </div>



          
        </Slider>
      </div>
    </div>
  );
}
