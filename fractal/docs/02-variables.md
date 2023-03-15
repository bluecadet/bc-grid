---
title: Variables
order: 4
label: 'Variables'
---

# Variable Configuration

- [Breakpoint Variables](#breakpoint-variables)
- [Container Max Width](#container-max-width)
- [Grid Columns](#grid-columns)
- [Gutter](#gutter)
- [Grid Margins](#grid-margins)
- [Grid Breakpoint](#grid-breakpoint)
- [Column Breakpoints](#column-breakpoints)
- [Sidebar Grid Variables](#sidebar-grid-variables)
  - [Gutter and Gap implementation](#gutter-and-gap-implementation)
  - [Breakpoint](#breakpoint)
  - [Wrapper Sizes](#wrapper-sizes)
  - [Aside Left or Right](#aside-left-or-right)
- [DO NOT ALTER](#do-not-alter)
- [All Variables](#all-variables)


## Breakpoint Variables

```scss
$xs:    480px  !default;
$sm:    750px  !default;
$md:    1080px !default;
$lg:    1280px !default;
```
These variables are used to define breakpoints for demo purposes. You do not have to use these names, though you will need to replace their values in other variables below.


## Container Max Width
```scss
$content-max-width: 1600px !default; // Pixel value
```
Used to define the max width of the interior (content) section of the grid.


## Grid Columns
```scss
$grid-columns: 12 !default; // Integer
```
Defines the number of columns to use


## Gutter
```scss
$grid-mobile-gutter: 15px !default; // Pixel value
$grid-gutter:        20px !default; // Pixel value
```
Defines the gap between columns. `$grid-mobile-gutter` will be used until the viewport is wider than the value of `$grid-breakpoint-standard`, when `$grid-gutter` will be used.


## Grid Margins
```scss
$grid-mobile-margin: 15px !default; // Pixel value
$grid-margin:        30px !default; // Pixel value
```
Defines the space between the edge of the viewport and edge of the grid. Despite naming, `margin` is not used, but rather padding or columns depending on the type of grid.

`$grid-mobile-margin` will be used until the viewport is wider than the value of `$grid-breakpoint-standard`, when `$grid-margin` will be used.

**Important note: This value cannot be smaller that the corresponding gutter values** i.e. `$grid-mobile-margin` cannot be smaller than `$grid-mobile-gutter`.


## Grid Breakpoint
```scss
$grid-breakpoint-standard: $sm !default; // Pixel value
```
Defines the breakpoint between `-mobile` sizings and non-mobile.


## Column Breakpoints
```scss
$column_breakpoints: (
  xs: $xs, // Pixel Value
  sm: $sm,
  md: $md,
  lg: $lg
) !default;
```
SASS Map containing key/value pairs that equate to responsive column names at a given breakpoint. In the default example, th `xs` key will create columns with classname `o-col-xs-[1...12]`, and their styles will be implemented at a min screen width of `$xs`.


## Sidebar Grid Variables

### Gutter and Gap implementation
```scss
$grid-sidebar-gutter:  $grid-gutter !default; // Pixel value
$grid-sidebar-use-gap: 'true'       !default; // String - 'true' or 'false'
```
Define the gap between primary and aside columns. If `$grid-sidebar-use-gap` is set as `true`, native grid `gap` will be used, if `false` or anything else, padding will be altered on child `o-grid` elements within the primary and aside wrappers.

### Breakpoint
```scss
$grid-sidebar-breakpoint-standard: $sm !default; // Pixel value
```
Min width breakpoint at which the sidebar grid styles are applied


### Wrapper Sizes
```scss
$grid-sidebar-primary-columns: 8 !default;
$grid-sidebar-aside-columns:   4 !default;
```
How many columns each wrapper should take up. Sizes relvant to base `$grid-columns` value


### Aside Left or Right
```scss
$grid-sidebar-aside-first:     'false' !default;
```
Set to `true` to have the left wrapper be the `$grid-sidebar-aside-columns` size and the right wrapper be the `$grid-sidebar-primary-columns` size (making the 'sidebar' appear first on the left). Set to `false` for the opposite (making the 'sidebar' appear second on the right).


## DO NOT ALTER
```scss
$grid-breakpoint-max:       resolve($content-max-width + ($grid-gutter * 2));
$grid-breakpoint-bleed-max: resolve($content-max-width + ($grid-gutter * 2) + (($grid-margin - $grid-gutter) * 2));
```
These are calculated values for the grid and should not be changed, but are the reason why `postcss-math` is required to compile css with postcss



## All Variables

```scss
/* =============================================
                 $ Breakpoints
============================================= */
$xs:    480px  !default;
$sm:    750px  !default;
$md:    1080px !default;
$lg:    1280px !default;


/* =============================================
                  $ Variables
============================================= */

/* Container Settings */
$content-max-width: 1600px  !default;

/* Grid Layout */
$grid-columns:         12   !default;
$grid-mobile-gutter:   15px !default;
$grid-gutter:          20px !default;
$grid-mobile-margin:   15px !default;
$grid-margin:          30px !default;

/* Grid Breakpoints */
$grid-breakpoint-standard:  $sm !default;
$grid-breakpoint-max:       resolve($content-max-width + ($grid-gutter * 2));
$grid-breakpoint-bleed-max: resolve($content-max-width + ($grid-gutter * 2) + (($grid-margin - $grid-gutter) * 2));

$column_breakpoints: (
  xs: $xs,
  sm: $sm,
  md: $md,
  lg: $lg
) !default;

/* Sidebar Parent Grid */
$grid-sidebar-gutter:              40px     !default;
$grid-sidebar-use-gap:             'false'  !default;
$grid-sidebar-breakpoint-standard:  $sm     !default;
$grid-sidebar-primary-columns:      8       !default;
$grid-sidebar-aside-columns:        4       !default;
$grid-sidebar-aside-first:          'false' !default;


/* =============================================
                  CSS Variables
============================================= */

:root {
  /* Grid */
  --bc-grid-content-max-width: $content-max-width;
  --bc-grid-max-width-padding: calc((100vw - (var(--bc-grid-content-max-width)) ) / 2);
}
```