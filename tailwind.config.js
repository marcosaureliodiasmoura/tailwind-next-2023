/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
      },

      maxWidth: {
        app: '700px'
      },

      colors: {
        marcos: '#8257e6',
      }
    },
  },
  plugins: [],
}
