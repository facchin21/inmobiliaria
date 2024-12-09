/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeLeft: {
          "0%": { opacity: "0", transform: "translatex(-500px)" },
          "100%": { opacity: "1", transform: "translatex(0)" },
        },
        fadeBomb : {
          '0%' : {opacity: '0', scale : '0.8'},
          '100%' : {opacity: '1', scale : '1'},
        }
      },
      animation: {
        fadeLeft: "fadeLeft 1s ease-out forwards",
        fadeBomb: "fadeBomb 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
