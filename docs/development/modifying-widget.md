---
id: modifying-widget
title: Modifying Widget Style
sidebar_label: Modifying widget
---

## Introduction

This tutorial explains how to modify the new widget. For the old widget, refer to [this article](../debug.md#chrome).

The recommended way to change the appearance is directly through the custom CSS section in [themes](../theme/theme.md#custom-css). There, you can independently modify the widget's content style and the status icon style.

The new widget's CSS files are located in:

> design/defaulttheme/css/widgetv2

There are specific CSS files for overriding styles:

*   `design/defaulttheme/css/widgetv2/embed_override.css`: Use this file to override the style of the widget when it is embedded in a page.
*   `design/defaulttheme/css/widgetv2/status_override.css`: Use this file to override the style of the status widget content.
*   `design/defaulttheme/css/widgetv2/widget_override.css`: Use this file to override the main widget content style.
*   `design/defaulttheme/css/widgetv2/widget_override_rtl.css`: Use this file to override the style of the widget for right-to-left (RTL) languages.
*   `design/defaulttheme/css/widgetv2/widget_mobile_override.css`: Use this file to override the widget's style when the chat is happening on a mobile device. The `widget_override.css` file will still be applied.
*   `css/widgetv2/widget_popup_override.css`: Use this file to override the popup layout style.
*   `css/widgetv2/widget_mobile_popup_override.css`: Use this file to override the popup layout style on mobile devices.

## How to Use CSS Files for Overriding

Refer to this sample extension:

https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridecss

Place it in the following directory:

> extension/overridecss

Activate it in the `settings/settings.ini.php` file:

```php
'extensions' => array ('overridecss'),
```

## Where is the Source Code for the New Widget?

There are two applications: a [wrapper](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/wrapper) and a [widget](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/react-app).

The wrapper is responsible for rendering sourceless iframes within the page.

To compile the wrapper, run:

```shell script
cd lhc_web/design/defaulttheme/widget/wrapper && npm install && npm run build
```

The widget is responsible for the chat logic.

To compile the widget, run:

```shell script
cd lhc_web/design/defaulttheme/widget/react-app && npm install && npm run build && npm run build-ie
```

## How to Make the Status Icon Smaller Based on User Resolution

You can also use this approach to adjust the placement of the status icon. In this specific case, we will make the chat status icon smaller on devices with small resolutions.

In the theme, under the `Custom CSS` tab, in the `Status widget additional CSS, takes effect after save paste` section, paste the following:

```css
/* This adjusts the icon size itself. If you only want to adjust the position of the icon, you can ignore these rules. */
@media only screen and (max-device-width: 1366px){
    #lhc_status_container {
        bottom:3px!important;
        right:3px!important;
        padding-left:3px!important;
        padding-top:3px!important;
    }
    #lhc_status_container #status-icon{
        box-shadow:none!important;
        padding:5px!important;
    }
}
```

In the theme, under the `Custom page CSS (new widget only)` section, paste the following. This adjusts the size of the icon itself.

```css
@media only screen and (max-device-width: 1366px) {
    #lhc_container_v2 #lhc_status_widget_v2{
        bottom:0px!important;   /* Adjust position from bottom */
        right:0px!important;    /* Adjust position from right */

        /* Adjust dimensions themselves to make a smaller container to match the new icon size */
        min-height: 65px!important;
        min-width: 65px!important;
        max-height: 65px!important;
        max-width: 65px!important;
        width: 65px!important;
        height: 65px!important;
    }
}
```

## How to Write an Extension for the New Widget

This approach does not involve touching the kernel at all. A very good example is the https://github.com/LiveHelperChat/cbscheduler extension.

The main things to consider are:

*   How you trigger the modal window to appear.
*   You register a script to load: https://github.com/LiveHelperChat/cbscheduler/blob/master/bootstrap/bootstrap.php#L56
*   You write a script: https://github.com/LiveHelperChat/cbscheduler/blob/master/design/cbschedulertheme/js/cbscheduler.widget.js

That's it.
