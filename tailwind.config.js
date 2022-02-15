const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'c_gray': '#343432',
          'c_green' :'#1E6F5D',
          'c_lightgreen': '#29BB89',
          'c_yellow':'#F6ED46'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
