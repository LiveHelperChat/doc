---
id: web-push-notifications
title: Web push notifications
sidebar_label: Web push notifications
---

This tutorial explains how to set up Web Push notifications. Web push notifications do not work on iOS mobile devices, but they do work on Google Chrome, Firefox, Android phones, and most desktop PCs.

## Requirements

*   Your site must use HTTPS.
*   Install Composer dependencies. Web Push notifications require Composer to be executed after Live Helper Chat is installed. PHP version 7.x or higher is required.

    ```bash
    ./composer.phar update
    ```

## Configuration

*   Generate your private and public keys. You can use this tool: [https://web-push-codelab.glitch.me](https://web-push-codelab.glitch.me)
*   Enter this information in the notification settings window.
*   Fill in the other required fields in the notification settings window.
*   If you are using themes, notifications can be enabled or disabled per theme. By default, they are disabled.
*   Download the Service Worker file and place it in your domain's root folder. For example: `https://example.com/sw.lhc.js`
*   If you have done everything correctly, you should now see a bell icon next to the upvote/downvote icons.

    ​![](https://livehelperchat.com/var/media/images/notifications(1).png)

*   After you start a chat and a visitor clicks the notifications icon, you should see a record in the back office. This workflow only works if the chat is embedded in widget or page embed mode, not in popup mode. (Popup mode support will be added in the future.)

## How to test?

Go to the notifications subscribers list and click `Edit`. There, you will find a `Test notification` tab. Click on it and enter the chat ID you want to use for testing.

## When are messages sent to visitors?

Messages about unread messages from an operator to a visitor are sent using a cron job. The command for this is:

```bash
php cron.php -s site_admin -c cron/notifications
```

Visitors are informed about unread messages only if:

*   The last operator message was written within the last hour.
*   At least 5 minutes have passed since the last operator message.
*   The operator message was unread.
*   The message has not been sent to the visitor yet.
*   You can always test the message service by editing a subscription and using the "Test notification" tab.
