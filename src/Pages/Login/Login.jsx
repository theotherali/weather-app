import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {


  const navigate = useNavigate();

  const userLogin = (event) => {
    event.preventDefault();
    console.log(event)
    navigate("/")
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="flex-center h-screen bg-lightPrimary-800 dark:bg-darkPrimary-800">
      <section className="flex w-[900px] lg:w-[1000px] h-[560px] rounded-xl overflow-hidden">
        <div className="hidden lg:block relative w-2/5 bg-[#D3E1E7] dark:bg-[#404961] p-10">
          <div className="absolute top-8">
            <img src="/images/svgs/Moon-cloud-mid-rain.png" alt="" />
          </div>
          <div className="absolute top-40 left-10">
            <img src="/images/svgs/Sun-cloud-angled-rain.png" alt="" />
          </div>
          <div className="absolute bottom-8">
            <img src="/images/svgs/Moon-cloud-fast-wind.png" alt="" />
          </div>
        </div>
        <form className="w-full lg:w-3/5 flex-center bg-stoneCard-111 dark:bg-[#292F45]">
          <div className="flex flex-col justify-between w-[360px] h-[360px]">
            <div>
              <h3 className="text-2xl text-darkText-800 dark:text-lightText-800 text-center mb-8">
                Login
              </h3>

              <input
                type="text"
                name=""
                id=""
                className="w-full h-14 bg-transparent border border-gray-500 rounded-md ltr-text p-4 dark:text-lightText-800 outline-none"
                placeholder="Enter Your Name"
              />
            </div>

            <button
              className="h-10 bg-[#2196F3] text-lightText-800 w-full rounded-md"
              href="#"
              onClick={userLogin}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
