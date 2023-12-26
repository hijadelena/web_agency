/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#372c44",
          "200": "#261e35",
        },
        "blue-50": "#e3f2fd",
        "indigo-a400": "#f3aae1",
        "grey-900": "#212121",
        "grey-700": "#616161",
        "grey-100": "#f5f5f5",
        "grey-300": "#e0e0e0",
        darkgray: "#9e9e9e",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        anton: "Anton",
        "header-1": "'League Spartan'",
        "space-grotesk": "'Space Grotesk'",
        hind: "Hind",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "17xl": "36px",
      "71xl": "90px",
      "51xl": "70px",
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
