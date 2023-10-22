---
id: debug
title: Debuging application
---

## Enabling debug output

In order to see what templates what used in page render you have to enable debug output in settings/settings.ini.php file

```
'debug_output' => true,
```

## Disabling cache

Do not forget that to see all used template you have to disable cache also. 

```
'templatecache' => true,
'templatecompile' => true,
'modulecompile' => true,
```

Web application folders structure 

* `cache` (Stores cache)
* `design` (Design categorys)
    * <used_design>
* `doc` (Release documentation)
* `extension` (All extensions goes here)
* `ezcomponents`
* `lib` (core of the framework)
    * `autoloads`
        * `lhcore_autoload.php` (Main application autoload file)
* `core` (Folder holds application logic modules files)
* `models` (Folder contains application models clases)
* `modules` (There goes application modules.)
* `pos` (Represents eZ Components pos, persistent object talbles definitions)
* `settings` (holds application settings files.)
* `translations` (holds application translations)

## How to log javascript errors?

Go to `System configuration > Audit (Configuration)` and enable `Log javascript errors` after that. If there is any JS error it will be logged to `System configuration > Audit (Audit Logs)`. 

You can search for javascript errors by these search attributes.

 * Category - `js`
 * Source - `lhc`

Using javascript log. Most of the time compiled js file has map file E.g 

If error as an example happened in

`https://demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js`

there will be also source map file 

`https://demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js.map`

Afterwards you can just use https://jimbly.github.io/stackwalker/index.html to find exact error.

## How to use debug output

After you have enabled debug output you will see in popup window something like

![](https://livehelperchat.com/var/media/images/used-templates.png)

Regarding widget debuging, you will not see debug output so easily. These instructions applies also to embed widgets and site widgets.

## Understanding debug output

![](https://livehelperchat.com/var/media/images/css-override.png)

As in above example you see that widget styles can be overrided editing `customtheme/css/widget_override.css` file. Debug shows all searched files during page load. If you want to edit [invitation to chat green block](https://livehelperchat.com/need-help-tool-tip-configuration-280a.html) the easiest way to do that is just override styles using !important flag. These styles should be in your site CSS not widget_override.css file.


## Debugging old widget

### Chrome

![](https://livehelperchat.com/var/media/images/debug-widget.png)

After you do that. New window will open on chrome, so just delete "view-source:" and you will see full list.

### Firefox

![](https://livehelperchat.com/var/media/images/ff.png)

## During some action app returns white screen, what to do?

* [Disable cache](#disabling-cache)
* Enable [debug output](#enabling-debug-output)
* See `cache/default.log` for an error message.
* See chrome console for an error. `CTRL+SHIFT+J`
* Read [My widget does not load](install.md#my-widget-does-not-load)
