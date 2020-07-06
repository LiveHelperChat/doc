---
id: modifying-widget
title: Best way to change widget style
sidebar_label: Modifying widget
---

## Introduction

In this tutorial I'll try to explain how to modify new widget. For old widget you can refer to [this article](../debug.md#chrome)

Recommended way to change the look is directly from [themes](../theme/theme.md#custom-css) custom css section. You can change there independently widget content style and status icon style.

New widget CSS files are located at

> design/defaulttheme/css/widgetv2

There is special CSS files dedicated to CSS overriding.

* `design/defaulttheme/css/widgetv2/embed_override.css` if widget is embeded in page use this file to override it's style.
* `design/defaulttheme/css/widgetv2/status_override.css` use this file to override status widget content style.
* `design/defaulttheme/css/widgetv2/widget_override.css` use this file to override main widget content
* `design/defaulttheme/css/widgetv2/widget_override_rtl.css` use this file to override RTL widget style.
* `design/defaulttheme/css/widgetv2/widget_mobile_override.css` use this file to override widget while chat is happening on mobile device. `widget_override.css` this file still will be used.
* `css/widgetv2/widget_popup_override.css` use this file to override popup layout
* `css/widgetv2/widget_mobile_popup_override.css` use this style to override popup mobile layout

## How to use CSS file dedicated to override?

See this sample extension.

https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridecss

Put it as 

> extension/overridecss

Activate in `settings/settings.ini.php` file 

```php
'extensions' => array ('overridecss'),
```

## Where is source code for a new widget?

There is two apps [wrapper](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/wrapper) and [widget](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/react-app)

Wrapper is responsible for rendering sourceless iframes in page itself.

To compile wrapper

```shell script
cd lhc_web/design/defaulttheme/widget/wrapper && npm install && npm run build
```

Widget is responsible for the chat logic itself.

To compile widget itself

```shell script
cd lhc_web/design/defaulttheme/widget/react-app && npm install && npm run build && npm run build-ie
```

## How to make status icon smaller based on user resolution?

You can use this approach also to edit placement of the status icon. In this particular case will make chat status icon smaller on small resolution devices.

In theme `Custom CSS` tab `Status widget additional CSS, takes effect after save paste` section paste this

```css
/* This adjust icon size itself. If you want just to adjust position of the icon. You can ignore these rules. */
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

In theme `Custom page CSS (new widget only)` section paste. This adjusts size of the icon itself.

```css
@media only screen and (max-device-width: 1366px) {
    #lhc_container_v2 #lhc_status_widget_v2{ 
        bottom:0px!important;   /* Adjust position from bottom */ 
        right:0px!important;    /* Adjust position from right */
        
        /* Adjust dimensions themself to make smaller container to match new icon size */
        min-height: 65px!important;
        min-width: 65px!important;
        max-height: 65px!important;
        max-width: 65px!important;
        width: 65px!important;
        height: 65px!important;
    }
}
```

## How two write extension for a new widget?

This approach does not toucing kernel at all. Very good sample is just to take a look at https://github.com/LiveHelperChat/cbscheduler extension. 

Main things to look at are

* How you trigger modal window to show.
* You register a script to load https://github.com/LiveHelperChat/cbscheduler/blob/master/bootstrap/bootstrap.php#L56
* You write a script https://github.com/LiveHelperChat/cbscheduler/blob/master/design/cbschedulertheme/js/cbscheduler.widget.js

That's it.
