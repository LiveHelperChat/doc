---
id: modifying-widget
title: Best way to change widget style
sidebar_label: Modifying widget
---

## Introduction

In this tutorial I'll try to explain how to modify new widget. For old widget you can refer to [this article](../debug.md#chrome)

New widget CSS files are located at

> design/defaulttheme/css/widgetv2

There is special CSS files dedicated to CSS overriding.

* `design/defaulttheme/css/widgetv2/embed_override.css` if widget is embeded in page use this file to override it's style.
* `design/defaulttheme/css/widgetv2/status_override.css` use this file to override status widget content style.
* `design/defaulttheme/css/widgetv2/widget_override.css` use this file to override main widget content
* `design/defaulttheme/css/widgetv2/widget_override_rtl.css` use this file to override RTL widget style.
* `design/defaulttheme/css/widgetv2/widget_mobile_override.css` use this file to override widget while chat is happening on mobile device. `widget_override.css` this file still will be used.

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
