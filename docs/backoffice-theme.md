---
id: back-office-theme
title: Back office theming
---

## Change back office look directly in back office

Navigate to `Settings > Live help configuration > Back office theming` and change back office theme look directly.

## Coding way of changing back office theme

Since 2.23v back office is bootstrap 3 powered, the easiest way to change back office theme is

1.  Download/generate bootstrap css file. Few url's where you can do that
    1.  [http://bootswatch.com/](http://bootswatch.com/)
    2.  [http://getbootstrap.com/customize/](http://getbootstrap.com/customize/)
2.  In `design/backendtheme/vendor/bootstrap/css` you will find few css files. These are demo files which will be looked for if default word from these files will be removed.
3.  So just after you downloaded let say bootstrap.default.css put it in css folder and clear cache from back office. That's all new theme should be applied.

If you want to change front office theme you can, use style widget's using internal [themes](theme.md) or if you want to change front office widgets content you can do the same steps just for **design/customtheme/vendor/bootstrap/css **this folder. Also you can change themes using extension.

If you have created some cool theme share it with us!