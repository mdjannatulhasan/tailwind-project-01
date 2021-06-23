module.exports = {
  purge: [
    './public/**/*.html',
     './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '24px'
    },
    extend: {
      colors: {
        primary: '#FF6600',
        body: '#4A557C',
        heading: '#000B33'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
