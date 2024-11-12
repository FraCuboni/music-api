// tailwind.config.js

// configurazione di tailwind
module.exports = {
  content: [
    "./index.html",
    // passaggio di tutti i file 
    "./src/**/*.{js,ts,jsx,tsx,vue,scss}", // Assicurati che .scss sia incluso
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
