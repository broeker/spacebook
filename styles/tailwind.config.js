const autoprefixer = require('autoprefixer');

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            minWidth: 0, 
            a: {
              color: '#1D4ED8',
              '&:hover': {
                color: '#1E3A8A',
              },
            },
            '.prose a.edit, .tag a': {
              color: '#333',
              'text-decoration': 'none',
            },
            '.prose h1': {
              'margin-bottom': 0,
            },
            '.prose-lg h1': {
              'margin-bottom': 0,
            },
            '.prose-xl h1': {
              'margin-bottom': 0,
            },
            'ul.footer-nav': {
              '::before': {
                display: 'none',

              }
            },
            'ul.contains-task-list': {
              '::before': {
                display: 'none',

              }
            },
           
            
          },
        },
      }
    },
  }, 
  variants: {},
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}

