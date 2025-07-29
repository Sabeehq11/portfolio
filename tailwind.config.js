/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#ffebe8',
          200: '#ffd6d0',
          300: '#ffb5a7',
          400: '#ff8a75',
          500: '#ff6b54',
          600: '#e85640',
          700: '#c24531',
          800: '#9a3829',
          900: '#7d3024',
          950: '#441610',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      letterSpacing: {
        tighter: '-.02em',
        tight: '-.01em',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
} 