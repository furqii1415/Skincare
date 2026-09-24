/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F3',
        nude: '#E9DDD5',
        rose: {
          DEFAULT: '#C9A6A2',
          light: '#DDBEBB',
          dark: '#B08E8A',
        },
        sage: {
          DEFAULT: '#A8B1A0',
          light: '#C2C9BC',
          dark: '#8A9382',
        },
        cocoa: {
          DEFAULT: '#302725',
          light: '#4A3D39',
          dark: '#1F1917',
        },
        champagne: {
          DEFAULT: '#C5A46D',
          light: '#D9BE8E',
          dark: '#A8884F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slide-up': 'slideUp 1.1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'expand-line': 'expandLine 1s ease-out forwards',
        'menu-stagger': 'menuStagger 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        expandLine: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        menuStagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
