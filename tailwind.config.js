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
          'c_gray_b': '#A0A099',
          'c_green' :'#1E6F5D',
          'c_green_b' :'#004334',
          'c_lightgreen': '#29BB89',
          'c_yellow':'#DDD53F',
          'c_background':'#BFBFBD'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
