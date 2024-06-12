/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightTheme: {
          primary: '#03011D', // Color de contraste
          background: '#ffffff', // Blanco
          text: '#3182ce', // Azulito
          gray: '#4a5568', // Gris oscursa
          hover: '#9AD7EE',
        },
        darkTheme: {
          primary: '#ffffff', // Blanco
          background: '#212121', // Color de contraste
          text: '#ffffff', // Blanco
          gray: '#cbd5e0', // Grisito más claro
          formulario: '#171717',
        },
        yellow: {
          '500': '#f59e0b',
        },
        blue: {
          '100': '#ebf8ff',
          '900': '#1a365d',
        },
      },
    },
  },
  plugins: [],
};
