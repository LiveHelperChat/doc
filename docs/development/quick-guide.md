---
id: quick-guide
title: Quick development guide
sidebar_label: Developing
---

 * After app is installed disable cache and enable debug output. 
   * https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L13-L16
   * Change the following values to
```
   debug_output => true
   templatecache => false
   templatecompile => false
   modulecompile => false
```
 * To compile JS from lhc_web folder execute. This will compile main JS and old widget javascript files.
   * `npm install && gulp`
 * To compile new widget V2
   * There is two apps [wrapper](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/wrapper) and [widget](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/react-app)
   * `cd lhc_web/design/defaulttheme/widget/wrapper && npm install && npm run build`
   * `cd lhc_web/design/defaulttheme/widget/react-app && npm install && npm run build && npm run build-ie`

More usefull links

* It's possible to override any image in web application without [overriding default ones](development/unbrand.md#how-to-change-logo)
* It's possible to override any CSS in web application without [overriding default ones](development/unbrand.md)
* It's possible to override [any template](extending/overriding-templates.md) without overriding default ones
* It's possible to override [any module, class etc.](development/override-class.md)
* If you are not sure which template is used enable [debug output](debug.md)
* If you change templates and nothing changes [disable cache](debug.md#disabling-cache)
* You can write [your own extensions](extending/writing-extension.md)
* We are using bootstrap 4 CSS framework.
