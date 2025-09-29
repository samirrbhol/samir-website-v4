/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ibmBlue: "#0f62fe",
        ibmBlack: "#161616",
        ibmGray100: "#f4f4f4",
        ibmGray90: "#262626",
      },
      fontFamily: { display: ['Inter','ui-sans-serif','system-ui','sans-serif'] }
    },
  },
  plugins: [],
};
