---
id: mobile
title: Mobile app setup
sidebar_label: Mobile
---

In order for mobile app to function properly you have to be using min 3.40v.

## Android

Mobile app for android while we are waiting for google store review. Can be found at Codemagic

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

In order to enable mobile app notifications

> Configuration -> System -> Mobile (Settings)

If you are not receiving notification check those things.

 * You have proper permissions as operator
 * You see your device registered in `System configuration -> Mobile (Sessions)` in edit window you can try to send notification.
 * You are online as an operator.
 * You have enabled notifications in `Configuration -> System -> Mobile (Settings)`
 * You have permission to access department where chat started.
 * App is using few notifications channels where each channel can have different settings. Make sure app notifications settings are correct.
 * If for some reason sessions status is `thumbs down`. You can delete a session and re-login from the app and try again to test notifications.
 * If still does not work try to reinstall an app.
 
:::tip 
At the moment clicking notifications does not open chat window. It just opens an app. This will be changed in next releases.
:::

## How to test?

Login to demo live helper chat.
 
 * https://demo.livehelperchat.com
 * Login: admin
 * Password: demo
 * Un check "Append index.php to address"

## How to compile?

Refer to flutter documentation. Few quick tips.

 > Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L18-L20
 > Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L39-L46
 > Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L39-L46
 > Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L53
 > Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/master/android/app/build.gradle#L72

## Demo images

![Mobile screenshot](/img/mobile/screen-1.chat.jpg)
![Mobile screenshot](/img/mobile/screen-2.chat.jpg)
![Mobile screenshot](/img/mobile/screen-3.chat.jpg)
![Mobile screenshot](/img/mobile/screen-4.chat.jpg)
![Mobile screenshot](/img/mobile/screen-5.chat.jpg)
![Mobile screenshot](/img/mobile/screen-6.chat.jpg)
![Mobile screenshot](/img/mobile/screen-7.chat.jpg)
