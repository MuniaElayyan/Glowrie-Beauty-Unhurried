/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // عنابي / خمري — خلفية ولمسات الدارك مود
        wine: {
          950: "#200D16",
          900: "#2E1120",
          850: "#3B152A",
          800: "#4A1B34",
          700: "#65253F",
          600: "#913450",
          500: "#A94764",
          400: "#C46A85",
        },

        // بيج — للكروت والخطوط تحت الأسماء في الدارك مود
        sand: {
          100: "#FAF3E7",
          200: "#F2E5CE",
          300: "#E6D2AE",
          400: "#D3B98D",
          500: "#BFA277",
        },

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

        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },

        tiltFloat: {
          "0%, 100%": { transform: "rotate(0deg) translateY(0)" },
          "50%": { transform: "rotate(0.6deg) translateY(-6px)" },
        },

        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },

        popIn: {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },

      animation: {
        riseIn: "riseIn 0.25s ease-out",
        fadeIn: "fadeIn 0.4s ease-out",
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 3s ease-in-out infinite",
        tiltFloat: "tiltFloat 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        popIn: "popIn 0.3s cubic-bezier(.22,1,.36,1)",
      },
    },
  },

  plugins: [],
};
