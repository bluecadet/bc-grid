---
title: BC Grid Overview
order: 1
label: 'BC Grid Overview'
---

# BC Grid

A css-grid framework.

## Installation
- Copy `.css/*` to project
- Import the `grid.css` file, or import individual files from `css/grid` as needed.
  - At a minimum, you will need to import the following in order:
    - Variables file: `css/grid/vars.css` (setups up variables, which you can change as needed)
    - Grid layout file(s): `css/grid/[grid-basic/grid-bleed/grid-sidebar as needed]`
    - Column classes: `css/grid/column-classes.css` (setups up variables)


## Required POSTCSS Packages:
- [postcss-easy-import](https://www.npmjs.com/package/postcss-easy-import)
- [postcss-advanced-variables](https://www.npmjs.com/package/postcss-advanced-variables)
- [postcss-math](https://www.npmjs.com/package/postcss-math)
- [postcss-nested](https://www.npmjs.com/package/postcss-nested)


Minimal Bldr postcss config:

```js
module.exports = (ctx) => ({
  plugins: [
    'postcss-easy-import': {
      prefix: false,
      skipDuplicates: false,
      warnOnEmpty: false,
    },
    'postcss-advanced-variables': {},
    'postcss-math': {},
    'postcss-nested': {},
  ]
});

```