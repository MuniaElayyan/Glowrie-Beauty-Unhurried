/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF8F4",
          100: "#FDEFE9",
          200: "#F9DCE6",
          300: "#F3C0D6",
          400: "#EFA8C8",
          500: "#E385B0",
          600: "#C6407A",
          700: "#9E3164",
        },

        lilac: {
          100: "#F1EAFB",
          200: "#E2D4F6",
          300: "#C9AEEC",
          400: "#AD8ADD",
          500: "#8F63C9",
        },

        butter: {
          100: "#FFF6DE",
          200: "#FCE9AE",
          300: "#FBDE87",
        },

        plum: {
          50: "#FBF5F8",
          400: "#8A6E82",
          600: "#5B4152",
          900: "#341F30",
        },
      },

      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Urbanist", "sans-serif"],
      },

      keyframes: {
        riseIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        riseIn: "riseIn 0.25s ease-out",
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },

  plugins: [],
};
