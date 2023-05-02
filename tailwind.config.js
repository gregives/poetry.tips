/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./poems/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(3, start) infinite",
      },
      keyframes: {
        blink: {
          to: {
            visibility: "hidden"
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
