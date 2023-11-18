/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        'moveinleft': {
          '0%': {
            opacity: '0',
            transform: 'translatex(-100px)'
          },
          '80%': {
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }
        },
        'moveinright': {
          '0%': {
            opacity: '0',
            transform: 'translatex(100px)'
          },
          '80%': {
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }

        },
        'moveinbottom': {
          '0%': {
            opacity: '0',
            transform: 'translatey(30px)'
          },

          '100%': {
            opacity: '1',
            transform: 'translate(0)'
          }

        },
        'moveinopacity': {
          '0%': {
            opacity: '0',

          },

          '100%': {
            opacity: '1',

          }

        },

      },
      animation: {
        'moveinleft': 'moveinleft 2s ease-in ',
        'moveinright': 'moveinright 2s ease-in ',
        'moveinbottom': 'moveinbottom 1s ease-in ',
        'moveinopacity': 'moveinopacity 5s ease-in ',
      },
      fontFamily: {
        cinzel: ['"cinzel"'],
        AoboshiOne: ['"Aoboshi One"'],
        Prompt: ['"Prompt"']
      }

    },
    plugins: [],
  }
}