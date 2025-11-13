// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'primary': '#ECF4E8',
        'secondary': '#CBF3BB',
        'accent': '#ABE7B2',
        'teal': '#93BFC7',
        'glass': 'rgba(236, 244, 232, 0.1)',
        'dark': '#1a1f2e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-gradient': 'linear-gradient(135deg, #ECF4E8 0%, #CBF3BB 25%, #ABE7B2 50%, #93BFC7 100%)',
        'button-gradient': 'linear-gradient(135deg, #CBF3BB 0%, #ABE7B2 100%)',
        'card-gradient': 'linear-gradient(135deg, #ECF4E8 0%, #CBF3BB 100%)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}