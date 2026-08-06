/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde047',
          300: '#f5d77f',
          400: '#e0a943',
          500: '#d59838',
          600: '#b37b22',
          700: '#8f5c09',
          800: '#6d4305',
          900: '#4a2c02',
        },
        egypt: {
          bg: '#0c0d10',
          card: '#16181e',
          cardHover: '#1f222a',
          border: '#3a3124',
          borderGold: '#8f5c09',
          slate: '#2E2F34',
          darkSlate: '#18191d',
          sand: '#ccbfa7',
          papyrus: '#e6dfd3',
          lapis: '#123962',
          teal: '#0baeca'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5d77f 0%, #d59838 50%, #8f5c09 100%)',
        'gold-metallic': 'linear-gradient(45deg, #8f5c09, #d59838, #f5d77f, #d59838, #8f5c09)',
        'dark-gradient': 'linear-gradient(180deg, #18191d 0%, #0c0d10 100%)',
        'egypt-pattern': 'radial-gradient(circle at 50% 50%, rgba(213, 152, 56, 0.08) 0%, transparent 60%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(213, 152, 56, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(213, 152, 56, 0.4)',
        'egypt-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(213, 152, 56, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
