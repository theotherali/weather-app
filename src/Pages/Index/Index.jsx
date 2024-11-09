import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TemperatureChart from "../../Components/TemperatureChart/TemperatureChart";
import TemperatureInfo from "../../Components/TemperatureInfo/TemperatureInfo";
import WeatherDatails from "../../Components/WeatherDetails/WeatherDatails";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // toggleThemeBtns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     if (localStorage.theme === "dark") {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.theme = "light";
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     }
  //   });
  // });

  return (
    <>
      <Navbar />
      <div className="px-6 flex flex-col lg:flex-row-reverse justify-between gap-x-10 mt-7 child:bg-stoneCard-111 dark:child:bg-[#292F45] child:rounded-3xl">
        <TemperatureInfo />
        <TemperatureChart />
      </div>
      <WeatherDatails />
      <Footer />
    </>
  );
}
