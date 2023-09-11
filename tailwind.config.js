/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        // suit: ['SUIT Variable'],
        pre: ['Pretendard'],
      },
      colors: {
        primary: '#5956E9',
        primaryContainer: '#E2DFFF',
        secondary: '#FFDC60',
        tertiary: '#FFBAC7',
        content: '#747474',
        black: '#1E1E1E',
        error: '#FF483D',
      },
      backgroundImage: {
        prev: "url('/src/assets/icon/arrow_back.svg')",
        next: "url('/src/assets/icon/arrow_forward.svg')",
        bookmark: "url('/src/assets/icon/bookmark.svg')",
        bookmarkCheck: "url('/src/assets/icon/bookmark_check.svg')",
        like: "url('/src/assets/icon/like.svg')",
        likeCheck: "url('/src/assets/icon/like_check.svg')",
        comment: "url('/src/assets/icon/comment.svg')",
        share: "url('/src/assets/icon/share.svg')",
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [],
};
