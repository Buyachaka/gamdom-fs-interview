import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  safelist: [
    "bg-main",
    "bg-background",
    'hover:bg-emerald-400',
    'hover:text-white',
    'hover:bg-red-400',
    'sm:grid-cols-1',
    'md:grid-cols-3',
    'hover:bg-emerald-600',
    'focus:border-emerald-400',
    'hover:border-emerald-400',
    'group-hover:text-white',
    {
      pattern: /./
    }
  ],
  theme: {
    extend: {
      colors: {
        main: "#0C141CE0",
        background: "#0a1119"
      }
    },
  },
  purge: false,
  plugins: [flowbite.plugin()],
};
