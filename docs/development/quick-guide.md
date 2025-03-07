---
id: quick-guide
title: Quick development guide
sidebar_label: Developing
---

After the app is installed, disable the cache and enable debug output.

*   [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L13-L16](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L13-L16)
*   Change the following values:

```
debug_output => true
templatecache => false
templatecompile => false
modulecompile => false
```

## Compressing JS Files

Each time you modify any JS file, run this command to compress the JS files.

To compile JS from the `lhc_web` folder, execute the following. This will compile the main JS and old widget JavaScript files.

*   `npm install && gulp`

## New Frontend Widget

To compile the new widget V2 (frontend):

*   There are two apps: [wrapper](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/wrapper) and [widget](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/design/defaulttheme/widget/react-app).
*   `cd lhc_web/design/defaulttheme/widget/wrapper && npm install && npm run build`
*   `cd lhc_web/design/defaulttheme/widget/react-app && npm install && npm run build`

## Back Office Application

The back office consists of multiple mini parts:

*   Dashboard Left toolbar (`DashboardChatTabs.js`), Group Chat (`GroupChat.js`), Canned Messages (`CannedMessages.js`), Mail application (`MailChat.js`)
    *   `cd lhc_web/design/defaulttheme/js/admin && npm run build`
*   Bot builder application (ReactJS)
    *   `cd lhc_web/design/defaulttheme/js/react && npm run build`
*   Dashboard widgets (Svelte)
    *   `cd lhc_web/design/defaulttheme/js/svelte && npm run build`

## Preparing Production Build

This should be run with all extensions installed. It generates unique hash files including active extensions.

*   Recompile static JS/CSS files. This is required if you change core JS files. It also avoids missing CSS/JS files if more than one server is used.
    *   `php cron.php -s site_admin -c cron/util/generate_css -p 1 && gulp js-static`

## One Command to Rule Them All

I usually run the following command from the `lhc_web` folder before releasing the next version. It will recompile everything.

```shell
cd lhc_web/ && ./deploy.sh
```

During the development process, make sure you disable the network cache (`Network -> Disable cache`) in the Chrome developer toolbar.

## How to Change the Back Office Style

*   Override styles.
*   Compile them with steps from `Preparing production build`.

## How to Find Which Files Are Responsible for a Particular URL?

Follow the instructions on [how to override any URL](extending/override-module.md). The same flow applies to figuring out which files are responsible for a particular URL.

Using that flow, you can find which file is responsible for AJAX-based actions.

## How to Find Where the Template Is Located?

Follow the instructions on [how to override any template](extending/overriding-templates.md). The same flow applies to figuring out where a template is located.

## Other Useful Development Links

More useful links:

*   It's possible to override any image in the web application without [overriding default ones](development/unbrand.md#how-to-change-logo).
*   It's possible to override any CSS in the web application without [overriding default ones](development/unbrand.md).
*   It's possible to override [any template](extending/overriding-templates.md) without overriding default ones.
*   It's possible to override [any class](development/override-class.md).
*   It's possible to override [any module, or just a single URL](extending/override-module.md).
*   It's possible to override [translations](language.md#how-to-override-default-translations).
*   If you are not sure which template is used, enable [debug output](debug.md).
*   If you change templates and nothing changes, [disable the cache](debug.md#disabling-cache).
*   You can write [your own extensions](extending/writing-extension.md).
*   We are using the Bootstrap 4 CSS framework.
