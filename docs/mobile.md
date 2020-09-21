---
id: mobile
title: Mobile app setup
sidebar_label: Mobile
---

In order for mobile app to function properly you have to be using min 3.42v.

## Mobile apps

[![Apple store](https://livehelperchat.com/design/defaulttheme/images/apps/apple.svg)](https://apps.apple.com/us/app/id1530399116)

[![Google Play](https://livehelperchat.com/design/defaulttheme/images/apps/google-play.png)](https://play.google.com/store/apps/details?id=com.livehelperchat.chat)

The most recent build can be found here.

[![Codemagic build status](https://api.codemagic.io/apps/5f50c50be2db272d7690ae45/5f50c50be2db272d7690ae44/status_badge.svg)](https://codemagic.io/apps/5f50c50be2db272d7690ae45/5f50c50be2db272d7690ae44/latest_build)

## How to keep online status?

As we all know once app is closed background sync processe is stopped so Live Helper Chat can't know is it online or not. To retain your online status you can do following things.

 * Setup department online hours
 * Change your online status to "Always online" from "Based on activity"
 * Once you finished your work shift don't forget to go offline.

## Permissions

In order for mobile app to work correctly operator has to have permission to

> 'lhrestapi','use_direct_logins'

## Notifications

In order to enable mobile app notifications you have to enable mobile notifications there.

> Configuration -> System -> Mobile (Settings)

### Testing

The Easiest way to test is just to login to Live Helper Chat back office and go to `System configuration -> Mobile (Sessions)` and edit session record. In edit window just click `Send test notification`.

If you are not receiving notification check those things.

 * You have enabled notifications in `Configuration -> System -> Mobile (Settings)`

Most of the time if app is installed on iPhone for some reason it does not receive notifications. If this is happening to you do the following

 * Uninstall the app
 * Delete related session record `Configuration -> System -> Mobile (Sessions)`
 * Install an app
 * Now notifications should work.

### Live notifications testing

If you do not receive notification once chat is started, but you receive notification with `Send test notification` check those things.

 * You have proper permissions as operator
 * You are online as an operator.
 * You have enabled notifications in `Configuration -> System -> Mobile (Settings)`
 * You have permission to access department where chat started.
 * App is using few notifications channels where each channel can have different settings. Make sure app notifications settings are correct.
 * If for some reason sessions status is `thumbs down`. You can delete a session and re-login from the app and try again to test notifications.
 
:::tip 
At the moment clicking notifications does not open chat window. It just opens an app. This will be changed in next releases.
:::

## How to login?

Login to demo of live helper chat details: 
 
 * https://demo.livehelperchat.com
 * Login: admin
 * Password: demo
 * Un check "Append index.php to address"

## What to enter if I'm running Live Helper Chat in subfolder/subdomain?

 * If subdomain host in that case would be `https://<subdomain>.example.org`
 * If sub-folder host would be `https://example.org/support`  

## How to compile?

Refer to flutter documentation. Few quick tips.

 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L18-L20
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L39-L46
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L39-L46
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L53
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L72

## My visitors can't see while I'm typing

Most likely it's a problem of apache because it removes `Authorization` header. Please see this [article](development/remove-index-php.md) for a possible fix.

## Demo images

![Mobile screenshot](/img/mobile/screen-1.chat.jpg)
![Mobile screenshot](/img/mobile/screen-2.chat.jpg)
![Mobile screenshot](/img/mobile/screen-4.chat.jpg)
![Mobile screenshot](/img/mobile/screen-6.chat.jpg)
![Mobile screenshot](/img/mobile/screen-7.chat.jpg)
![Mobile screenshot](/img/mobile/screenshot-8.png)
![Mobile screenshot](/img/mobile/screenshot-9.png)

