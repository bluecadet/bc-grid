---
title: Grid Classes
order: 3
label: 'Grid Classes'
---

# Grid Classes

## Grid Wrapper Classes

| Class Name  | Description |
| ----------- | ----------- |
| `o-grid` | implements columns for Basic Grid |
| `o-bleed-grid` | implements columns for Bleed Grid |
| `o-sidebar-grid` | implements columns for Sidebar Grid |
| `o-sidebar-grid__main` | implements `o-grid` alterations for main section of Sidebar Grid |
| `o-sidebar-grid__aside` | implements `o-grid` alterations for aside section of Sidebar Grid |

## Grid Wrapper Modifiers

| Class Name  | Description |
| ----------- | ----------- |
| `o-grid--no-gap` | removes the `gap` value for the basic grid so columns can go edge to edge |


## Column Classes

| Class Name  | Variable | Description |
| ----------- | -------- | ----------- |
| `o-col-[columnWidth]`              | number (1 - `$grid-columns`) | creates a column whose width takes up `[columnWidth]` number of columns |
| `o-col-[breakpoint]-[columnWidth]` | string, number               | creates a column whose width takes up `[columnWidth]` number of columns at `[breakpoint]`, whose value is equal to a key in the `$column_breakpoints` map |
| `o-col-start-[column]`             | number (1 - `$grid-columns`) | offset a column `[column]` amount of columns. Thats a sentence. |
| `o-col-reset-[breakpoint]`         | string                       | resets columns offset at `[breakpoint]` |