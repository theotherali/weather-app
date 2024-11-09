const { default: gradient } = require("@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkText: {
          800: "#003464",
        },
        darkPrimary: {
          800: "#151D32",
        },
        lightText: {
          800: "#F3F4F7",
        },
        lightPrimary: {
          800: "#F3FAFE",
        },
        stoneCard: {
          111: "#E1E9EE",
        },
        gradientCostum: "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, #7E7E7E 48.5%, rgba(54, 54, 54, 0) 100%)"
        
        
      },
      boxShadow: {
        costum: "0px 2px 7px 0px #00000026",
        dark: "0px 4px 10px 0px #A6A5A526"
      },
      borderRadius: {
        "4xl": "2rem",
      },

      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
});
