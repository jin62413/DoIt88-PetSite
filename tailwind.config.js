/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        suit: ['SUIT Variable'],
        pre: ['Pretendard'],
      },
      colors: {
        primary: '#5956E9',
        secondary: '#FFDC60',
        tertiary: '#FFBAC7',
        content: '#747474',
        black: '#1E1E1E',
      },
      backgroundImage: {
        prev: 'url("src/assets/icon/arrow_back.svg")',
        next: 'url("src/assets/icon/arrow_forward.svg")',
      },
    },
  },
  plugins: [],
};
