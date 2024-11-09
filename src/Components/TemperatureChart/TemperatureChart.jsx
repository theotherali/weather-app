// import React from 'react'

// export default function TemperatureChart() {
//   return (
//     <div className='w-[744px] h-[234px] px-4 pt-4 pb-[25px]'>
//       <div>
//         <h3>Average Monthly Temprature</h3>

//       </div>
//     </div>
//   )
// }
import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 170,
  series: [
    {
      name: "Sales",
      data: [10, 20, 10, 20, 30, 40, 30, 20, 40, 30, 20, 40, 30],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#7947F7"],
    stroke: {
      lineCap: "round",
      curve: "straight",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#AFBCC4",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 10,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function TemperatureChart() {
  return (
    <div className="lg:w-[960px] h-[234px] px-4 pt-4 pb-[25px] ltr-text">
      <h3 className="text-lg text-darkText-800 dark:text-lightText-800">Average Monthly Temprature</h3>
      <Chart {...chartConfig} />
    </div>
  );
}
