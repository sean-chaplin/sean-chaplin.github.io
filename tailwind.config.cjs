module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#1A1A1A',
          med: '#303030',
          light: '#A0A0A0',
        },
        superblue: '#00AAFF'
      }
    }
  },
  plugins: []
};
