const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        standard: '#676778',
        footnotes: '#CCCCCC',
      },
      spacing: {
        28: '7rem',
        '256': '64rem',
        '288': '72rem'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '2xl': '26px',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
