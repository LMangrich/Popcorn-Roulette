/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        'red-dark': '#831616', 
        'red-bright': '#BC242C',
        
        'popcorn': '#F3B61F',

        'background': '#F7F5F2',      // The clean off-white base
        'card': '#FFFFFF',            // Pure white for the main filter card
        'card-muted': '#F1EFE9',      // Subtle secondary background for inputs
        
        'filter-line': '#E5E1DA',     // Very soft separator lines
        'filter-border': '#D1CCC1',   // Soft border for the filter box
        'text-main': '#2B2927',       // Soft charcoal for high readability
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-6px) rotate(10deg)' },
          '66%': { transform: 'translateY(0) rotate(-10deg)' },
        },
      },
    },
  },
  plugins: [],
}

