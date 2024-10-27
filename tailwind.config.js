/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'BebasNeueStatic': ['Babas Neue'],
        'roboto': ['Roboto'],
        
      
      },
      
        animation: {
          'one-spin': 'one-spin 0.5s ease-out', // Customize duration and timing
        },
        keyframes: {
          'one-spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
  
  plugins: [],
}

