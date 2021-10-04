module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: ['20px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          400: '#4097c2'
        },
        body: "#3f3f3f",
      },
    },
    backgroundColor: theme => ({
      'body': '#3f3f3f',
      'blue-background': '#466c9e',
      'background-card': '#1f1f1f',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    textColor: {
      'body': '#3f3f3f',
      'white': '#ffffff',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
