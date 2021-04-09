const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const isPRD = mode === 'production';

module.exports = {
  plugins: [
    postcssNested,
    tailwindcss,
    autoprefixer,
    isPRD &&
      cssnano({
        preset: 'default'
      })
  ]
};
