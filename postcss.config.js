function buildPluginArray(ctx) {

  const plugins = {
    'postcss-easy-import': {
      prefix: false,
      skipDuplicates: false,
      warnOnEmpty: false,
    },
    'postcss-advanced-variables': {},
    // 'postcss-preset-env': {
    //   // features: {
    //   //   "nesting-rules": false,
    //   // },
    // },
    'postcss-math': {},
    'postcss-nested': {},
    // 'postcss-assets': {},
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
