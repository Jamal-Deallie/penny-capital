import localFont from 'next/font/local';

export const Sunday_Afternoon = localFont({
  src: './SundayAfternoon.woff',
  variable: '--heading-font',
  fallback: ['serif'],
  display: 'swap',
});

export const Einer_Grotesk = localFont({
    src: './EinerGroteskBook.woff',
    variable: '--body-font',
    fallback: ['sans-serif'],
    display: 'swap',
  });
  