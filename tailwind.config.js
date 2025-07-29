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
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          // Joker green accents
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        chaos: {
          // Red/crimson for subtle chaos elements
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        chaos: ['Creepster', 'cursive'], // Adding a playful font option
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
        'glitch': 'glitch 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      backgroundImage: {
        'joker-pattern': "url('/images/joker/joker5.png')",
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