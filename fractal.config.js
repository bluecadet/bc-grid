'use strict';

// Require statements
const path            = require('path');
const argVals         = process.argv.slice(2);
const fractalEnv      = argVals && argVals.includes('build') ? 'production': 'dev';
const twigDocsAdapter = require('@frctl/twig');
const twigAdapter     = require('@wondrousllc/fractal-twig-drupal-adapter')({
  handlePrefix: '@fractal/',
});


// Init Fractal
const fractal = module.exports = require('@frctl/fractal').create();


// Setup Twig
// fractal.components.engine(frctlTwig);
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');
fractal.docs.engine(twigDocsAdapter);


// Metadata
fractal.set('project.title', 'BC Grid');
fractal.set('project.version', 'v1.0');


// Components/Docs Settings
fractal.components.set('path', path.join('./fractal', 'patterns'));
fractal.components.set('default.preview', '@preview');
fractal.docs.set('path', path.join('./fractal', 'docs'));


// Static Asssets Path
fractal.web.set('static.path', path.join('./assets', 'dist'));

// if ( fractalEnv === 'production' ) {
//   console.log('its production');
//   fractal.web.set('static.mount', path.join('brand', 'style-guide'));
// }


// Set Build Directory
fractal.web.set('builder.dest', path.join('.', 'docs'));


// Custom Fractal Theme
const mandelbrot = require('@frctl/mandelbrot');
// const theme = require('@bluecadet/cadetfrctl')(mandelbrot, {
//   favicon: '/images/fractal_favicon.png',
//   styles: ['default', '/css/fractal.css'],
//   panels: [
//     'html',
//     'view',
//     'context',
//     'resources',
//     'notes',
//     'a11y'
//   ],
// });

const theme = mandelbrot({
  favicon: '/dependencies/fractal/fractal_favicon.ico',
  styles: ['default', '/css/fractal-theme.css'],
  nav: ['docs', 'components'],
  panels: [
    'html',
    'view',
    'context',
    'resources',
    'notes',
  ],
});

fractal.web.theme(theme);

const root = process.cwd();
const ignoredCssFiles = [
  path.join(root, './assets/src/**/*.css'),
  path.join(root, './fractal/**/*.css'),
];

fractal.web.set('server.sync', true);
fractal.web.set('server.port', 3006);

fractal.web.set('server.syncOptions', {
  // open: true,
  watchOptions: {
    ignored: ignoredCssFiles,
  },
});



// Default Context
fractal.components.set('default.context', {
  'isFractal': true,
  'env': fractalEnv,
});



// Statues
fractal.components.set('statuses', {
  proto: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#CB2D17',
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress, subject to changes.',
    color: '#FF8F61',
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#1A901C',
  },
});

fractal.components.set('default.status', 'wip');
