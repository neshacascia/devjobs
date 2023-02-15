/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#19202d',
        purple: ' #5964E0',
        gray: '#6E8098',
        body: '#f2f2f2',
        bodyDark: '#121721',
        button: '#abb0e754',
        buttonHover: 'hsl(234, 56%, 72%)',
        buttonDark: '#373d49',
        buttonDarkHover: 'rgb(83, 88, 96)',
        grayDark: '#9DAEC2',
        lightGray: '#e8e6e6',
        modal: 'rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        nav: 'url(/assets/bg-pattern-header.svg)',
      },
      backgroundPosition: {
        nav: '40% 100%',
      },
      width: {
        toggler: '48px',
        searchInput: '327px',
        card: '330px',
        logo: '50px',
        checkbox: '24px',
        logoTablet: '140px',
        desktop: '730px',
      },
      height: {
        toggler: '24px',
        card: '228px',
        logo: '50px',
        footer: '96px',
        checkbox: '24px',
        banner: '140px',
      },
      fontFamily: {
        display: ['Kumbh Sans'],
      },
      spacing: {
        searchbar: '13%',
      },
      borderWidth: {
        line: '1px',
      },
      borderRadius: {
        logo: '0px 0px 0px 6px',
      },
      padding: {
        card: '49px 9px 32px 32px',
        button: '16px 20px',
        desktop: '0px 355px',
      },
    },
  },
  plugins: [],
};
