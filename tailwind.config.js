module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        machina: ['Neue Machina', 'serif'],
        code: ['Fira Code', 'monospace'],
      },
      colors: {
        darkBlue: "#111F26", // Update to match your Figma design
        yellow: "#FFD700", 
        featureBg : "#0F1E28" ,
        footer: "#051422" // Update to match your Figma design
      },
    },
  },
  plugins: [],
};
