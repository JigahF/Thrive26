/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'background': '#D4DDCC',
        'navbar': '#4D732A',
        'button': '#295700',
        'error': '#E60E1B',
        'card': '#DCAE96',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        headers: ['Crimson', 'sans-serif'],
        body_text: ['Montserrat']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '8xl': '8rem',
        '6xl': '6rem',
      }
    }
  },
  plugins: [],
};
