function buildPluginArray(ctx) {

  const plugins = {
    'postcss-easy-import': {
      prefix: false,
      skipDuplicates: false,
      warnOnEmpty: false,
    }, // Globbing
    'postcss-advanced-variables': {}, // Sass-style dollar sign vars
    'postcss-custom-media': {},
    'postcss-preset-env': {
      features: {
        "nesting-rules": false,
      },
    }, // https://preset-env.cssdb.org/
    'postcss-math': {},
    'postcss-nested': {},
    'postcss-class-apply/dist/index': {},
    'postcss-hexrgba': {},
    'postcss-assets': {},
    // 'postcss-map-get': {},
    // 'postcss-pxtorem': {
    //   rootValue: 16,
    //   propList: [
    //     'gap',
    //     'font',
    //     'font-size',
    //     'line-height',
    //     'letter-spacing',
    //     'border*',
    //     'min-*',
    //     'max-*',
    //     'width',
    //     'padding',
    //     'height',
    //     'top',
    //     'bottom',
    //     'left',
    //     'right',
    //     'padding-*',
    //     'margin-*',
    //   ],
    //   replace: true,
    //   mediaQuery: true,
    // },
    'postcss-discard-comments': {}
  };

  if (ctx.bldrEnv === 'build') {
    plugins.cssnano = {};
    plugins.autoprefixer = {};
  }

  return plugins
}

module.exports = (ctx) => ({
  plugins: buildPluginArray(ctx)
});
