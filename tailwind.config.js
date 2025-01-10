/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"], // Wrap in quotes
      },
      colors: {
        primary: {
          brightBlue: "#635FC7",
          current: "#22C55E",
          doing: "#EF4444",
          done: "#3B82F6",
          btnHover: "#A8A4FF",
        },
        neutral: {
          // Light theme colors
          light: {
            mainText: "black",
            ContentText: "#6b7280",
            veryLightSideNavCards: "hsl(0, 0%, 100%)",
            veryLightMain: "#F4F7FD",
            lightNewColumn: "#E9EFFA",
            darkGrayishBlue: "hsl(236, 9%, 61%)",
            veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
          },
          //dark theme color
          dark: {
            veryDarkBlueSideNavCards: "#2B2C37",
            veryDarkMain: "#20212C",
            lightText: "hsl(0, 0%, 98%)",
            darkCardText: "#6B7780",
            backgroundSideNav: "#635fc7",
            backgroundSideNavHover: "#f4f5f7",
          },
        },
      },
    },
  },
  plugins: [],
};
