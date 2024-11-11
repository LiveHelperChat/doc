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

## Compressing JS files

 * Each time you modify any js file you should run this command. It compresses JS files.
 * To compile JS from lhc_web folder execute. This will compile main JS and old widget javascript files.
   * `npm install && gulp`

## New frontend widget

 * To compile new widget V2 (frontend)
   * There is two apps [wrapper](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/wrapper) and [widget](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/react-app)
   * `cd lhc_web/design/defaulttheme/widget/wrapper && npm install && npm run build`
   * `cd lhc_web/design/defaulttheme/widget/react-app && npm install && npm run build`

## Back office application

Back office consists of multiple mini parts

 * Dashboard Left toolbar (`DashboardChatTabs.js`), Group Chat (`GroupChat.js`), Canned Messages (`CannedMessages.js`), Mail application (`MailChat.js`))
   * `cd lhc_web/design/defaulttheme/js/admin && npm run build`
* Bot builder application (ReactJS)
  * `cd lhc_web/design/defaulttheme/js/react && npm run build`
* Dashboard widgets (Svelte)
 *  `cd lhc_web/design/defaulttheme/js/svelte && npm run build`

## Preparing production build

This should be run with all extensions installed. It generates unique hash files including active extensions.

 * Recompile static JS/CSS files. This is required if you change core JS files. It also avoids missing CSS/JS files if more than one server is used.
   * `php cron.php -s site_admin -c cron/util/generate_css -p 1 && gulp js-static`

## One command to rule them all

I usually before releasing next version I just run
from `lhc_web` folder. It will recompile everything.

```shell
cd lhc_web/ && ./deploy.sh
```

During development process make sure you disable network cache `Network -> Disable cache` in Chrome developer toolbar.

## How to change back office style

* Override styles
* Compile them with steps from `Preparing production build`


## Other usefull development links

More usefull links

* It's possible to override any image in web application without [overriding default ones](development/unbrand.md#how-to-change-logo)
* It's possible to override any CSS in web application without [overriding default ones](development/unbrand.md)
* It's possible to override [any template](extending/overriding-templates.md) without overriding default ones
* It's possible to override [any class](development/override-class.md)
* It's possible to override [any module, or just a single url](extending/override-module.md)
* It's possible to override [translations](language.md#how-to-override-default-translations)
* If you are not sure which template is used enable [debug output](debug.md)
* If you change templates and nothing changes [disable cache](debug.md#disabling-cache)
* You can write [your own extensions](extending/writing-extension.md)
* We are using bootstrap 4 CSS framework.