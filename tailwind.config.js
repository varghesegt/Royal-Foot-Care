/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0e0e0e',
        light: '#ffffff',
        primary: '#14b8a6', // teal-500
        secondary: '#0d9488', // teal-600
        accent: '#a855f7', // purple-500
        muted: '#9ca3af',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        textGlow: {
          '0%': { textShadow: '0 0 4px #0ff, 0 0 10px #0ff' },
          '100%': { textShadow: '0 0 15px #0ff, 0 0 30px #0ff' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
