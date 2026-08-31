/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141922",
        "ink-2": "#1b212c",
        surface: "#1f2631",
        "surface-2": "#262e3a",
        paper: "#e9e2d0",
        brass: "#c98a3b",
        "brass-bright": "#e0a758",
        "accent-green": "#6f9b7f",
        stamp: "#a6543a",
        text: "#e9e6dd",
        "text-dim": "#a8afbc",
        "text-faint": "#707886",
        line: "rgba(233,230,221,0.10)",
        "line-strong": "rgba(233,230,221,0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        softpulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(111,155,127,.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(111,155,127,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(111,155,127,0)" },
        },
        stampfloat: {
          "0%, 100%": { transform: "rotate(-14deg) translateY(0)" },
          "50%": { transform: "rotate(-11deg) translateY(-4px)" },
        },
      },
      animation: {
        softpulse: "softpulse 2.2s infinite",
        stampfloat: "stampfloat 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
