/**
 * Bldr Config
 *
 */

module.exports = {
  css: [
    {
      src: `./css/*.css`,
      dest: `./assets/dist/css/`,
      watch: [
        `./css/**/*.css`
      ],
    },
    {
      src: `./assets/src/fractal-assets/*.css`,
      dest: `./assets/dist/css/`,
      watch: [
        `./assets/src/fractal-assets/**/*.css`
      ],
    },
  ],
  js: [
    {
      src: `./assets/src/fractal-assets/*.js`,
      dest: `./assets/dist/js/`,
      watch: [
        `./assets/src/fractal-assets/**/*.js`
      ],
    },
    {
      src: `./assets/src/js/*.js`,
      dest: `./assets/dist/js/`,
      watch: [
        `./assets/src/js/**/*.js`
      ],
    },
  ],
  watchReload: [
    `**/*.html`,
    `**/*.twig`,
  ],
  rollup: {
    outputOptions: {
      format: 'iife'
    }
  },
  browsersync: {
    disable: true,
  },
};
