/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        of: "0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        darkblue: "hsl(var(--darkblue))",
        grey: "hsl(var(--grey))",
        lightgrey: "hsl(var(--lightgrey))",
        blue: "hsl(var(--blue))",
        red: "hsl(var(--red))",
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        slideDown: {
          // radix collapsible
          "0%": {
            height: "0",
            opacity: 0,
          },
          "50%": {
            opacity: 0.2,
          },
          "100%": {
            height: "var(--radix-collapsible-content-height)",
            opacity: 1,
          },
        },
        slideUp: {
          "0%": {
            height: "var(--radix-collapsible-content-height)",
            opacity: 1,
          },
          "50%": {
            opacity: 0.2,
          },
          "100%": {
            height: "0",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
}
