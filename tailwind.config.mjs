/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slide: "slide 100s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "25%": {
            transform: "translate(80px, -80px)",
          },
          "50%": {
            transform: "translate(0px, -160px)",
          },
          "75%": {
            transform: "translate(-80px, -80px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
