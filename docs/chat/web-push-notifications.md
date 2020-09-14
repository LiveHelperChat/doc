---
id: web-push-notifications
title: Web push notifications
sidebar_label: Web push notifications
---

In this tutorial I'll explain how to setup Web Pus notifications. Web push notifications does not work on iOS mobile devices, but they do work on google chrome, firefox, android phones and most of desktop PC.

## Requirements

 * Site has to be using HTTPS.
 * Install composer dependencies. Web Push notifications requires composer to be executed after Live Helper Chat is installed. 7.x PHP version is required.

> ./composer.phar update

## Configuration

* Then you have to generate your private and public keys. https://web-push-codelab.glitch.me
* Enter this information in notifications settings window.
* Also fill other required fields in notifications settings window.
* If you are using themes, notifications can be enabled/disabled per theme. By default it's disabled.
* Next you have to download Service Worker file and place it in your domain root folder. `https://example.com/sw.lhc.js`
* If you have done all correctly you should see now bell icon next to upvote/downvote icons.

​![](https://livehelperchat.com/var/media/images/notifications(1).png) 

* Next after you started chat and visitor clicks notifications icon. You should see a record in back office. This workflow works only if chat is embeded in widget or page embed mode, but not popup. (Will be done in the future)

## How to test?

Go to notifications subscribers list and click `Edit`. There you will find `Test notification` tab - click on it and enter chat id against which you want to test.

## When message is send to visitor?

For messages about unread messages from operator to visitor is send using cronjob. Which command is like this

> php cron.php -s site_admin -c cron/notifications

We inform visitors about unread messages only if

 * Last operator message is written within last hour
 * From last operator message has passed 5 minutes.
 * Operator message was unread
 * We have not send this message to visitor yet.
 * You can always test message service by editing subscription and using "Test notification" tab