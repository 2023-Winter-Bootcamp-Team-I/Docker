/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
        dongle: ['Dongle', 'sans-serif'],
        // kcc: ['KCC', 'sans-serif'],
      },
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(-1855px)',
          },
        },
        sliderEnd: {
          '100%': {
            transform: 'translateX(0px)',
          },
          '0%': {
            transform: 'translateX(-1855px)',
          },
        },
      },
      animation: {
        slider: 'slider 10s linear infinite both',
        sliderEnd: 'slider 5s linear infinite',
      },
    },
    colors: {
      mainColor: '#AED1FF', // 메인 백그라운드 컬러
      white: '#FFFFFF',
      shadowGray: '#849EC0', // 버튼 보더/그림자 컬러
      mainBlue: '#3CA5FF',
      bookCoverBack: '#4C83C4',
      bookCoverFront: '#72B2FF',
      bookCoverLine: '#97D1F2',
      bookCoverTextBox: '#C1DDFF',
      bookCoverTextBoxBorder: '#AAB6DD',
      moveButtonColor: 'rgba(51, 160, 244, 0.79);',
      titleColor: '#001062',
      signupButtonBlue: '#1D92FF',
      loginBlue: '#6EB0FF',
    },
    backgroundImage: {
      'linear-gradient-about': 'linear-gradient(0deg, #AED1FF 46.5%, #DAEAFF 100%)',
      'radial-gradient':
        'radial-gradient(50% 50% at 50% 50%, rgba(244, 244, 244, 0.59) 0%, rgba(119, 165, 255, 0.00) 100%)',
      'linear-gradient': 'linear-gradient(180deg, #AED1FF 46.5%, #DAEAFF 100%)',
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
};
