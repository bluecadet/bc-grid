---
title: Grid Overview
order: 2
label: 'Grid Overview'
---

# Grid Classes

## Basic Grid

Basic grid (`o-grid`) will probably be the most-used grid structure on the site. It uses padding, allowing edge-to-edge container contact. It works similar to the old flexbox and bootstrap grids.

To use the basic grid, use the class `o-grid` on the wrapping element:

```html
<div class="o-grid some-other-class">
  <!-- column markup -->
</div>
```

You can then use the `o-col` classes detailed below inside.

Its important to note that the `o-grid` class adds `padding-left` and `padding-right` values to the element, so you should not apply a general `padding` selector to that same element somewhere else in your css, but you can use `padding-top` and `padding-bottom` as you wish.


## Bleed Grid

Bleed Grid (`o-bleed-grid`) has a pretty specific use case. It should be used when column content needs to go right to the edge of the container.

Columns follow the same sizing as the Basic Grid, but the Bleed Grid class adds **two additional columns** to the amount defined in `$grid-columns`. These are sized the same as the padding in the `o-grid` class, but allow content to flow into them. As such, `o-col` classes may require `o-col-start` values to place them properly.

To use the bleed grid, use the class `o-bleed-grid` on the wrapping element:

```html
<div class="o-bleed-grid some-other-class">
  <!-- column markup -->
</div>
```

You can then use the `o-col` classes detailed below inside.


## Sidebar Grid

Sidebar Grid (`o-grid-sidebar`) can be used to create a sidebar layout, where the 'aside' can be set to left or right (see **Aside Left or Right** in *Variables*)

To use the sidebar grid, use the class `o-grid-sidebar` on a wrapping element:

```html
<div class="o-grid-sidebar some-other-class">
  <!-- Inner Wrapper Markup -->
</div>
```

Then add inner elements for the main and aside wrappers. If `$grid-sidebar-aside-first` is set to `true` (aside will be rendered on the right):

```html
<div class="o-grid-sidebar some-other-class">
  <aside class="o-grid-sidebar__aside">
    <!-- Aside content -->
  </aside>
  <main class="o-grid-sidebar__main">
    <!-- Main content -->
  </main>
</div>
```

If `$grid-sidebar-aside-first` is set to `false` (aside will be rendered on the left):

```html
<div class="o-grid-sidebar some-other-class">
  <main class="o-grid-sidebar__main">
    <!-- Main content -->
  </main>
  <aside class="o-grid-sidebar__aside">
    <!-- Aside content -->
  </aside>
</div>
```

You can then use `o-grid` classes within the wrappers:

```html
<div class="o-grid-sidebar some-other-class">
  <main class="o-grid-sidebar__main">
    <div class="o-grid">
      <div class="o-col-4"></div>
      <div class="o-col-4"></div>
      <div class="o-col-4"></div>
    </div>
  </main>
  <aside class="o-grid-sidebar__aside">
    <div class="o-grid">
      <div class="o-col-12"></div>
    </div>
  </aside>
</div>
```

The `o-grid` containers will have adjust padding to account for the sidebar settings, however they will have the same number of columns as normal, meaning, they are not subgrids with unique column counts. As such, you many need to adjust markup or css for column classes within `o-grid-sidebar__main` and `o-grid-sidebar__aside`, but thats up to you to do on an as-needed basis :)




