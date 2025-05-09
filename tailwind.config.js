/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px",
        "3xl": "2000px",
        "4xl": "3000px",
      },
      colors: {
        lightBlue: "rgb(14,165,233)",
        lightGreen: "rgb(34,197,94)",
        darkBlue: "rgb(2,139,229)",
        lightGray: "rgb(100,116,139)",
        superLightGray: "rgb(100,116,139)",
        lightOrange: "rgb(245,158,11)",
        white: "rgb(255,255,255)",
        black: "rgb(0,0,0)",
        cardDark: "rgb(36,42,56)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: "true",
      padding: "1rem",
      // xs:max-w-[360px] sm:max-w-[540px] md:max-w-[668px] lg:max-w-[924px] xl:max-w-[1180px] 2xl:max-w-[1436px] 3xl:max-w-[1900px]
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-container-break-out"),
  ],
};
