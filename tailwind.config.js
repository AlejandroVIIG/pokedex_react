/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        normal: "#8F8F8F",
        fighting: "#e69138",
        fire: "#CC0000",
        water: "#0b5394",
        flying: "#6fa8dc",
        grass: "#6aa84f",
        poison: "#6750a4",
        electric: "#ffd966",
        ground: "#783f04",
        psychic: "#d456ba",
        rock: "#94923d",
        ice: "#97d7e9",
        bug: "#2e6019",
        dragon: "#6170dd",
        ghost: "#794cc6",
        dark: "#3b3b3b",
        steel: "#5e9199",
        fairy: "#d6b1da",
      }
    },
  },
  plugins: [],
};
