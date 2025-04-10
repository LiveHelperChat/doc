---
id: operators-notifications
title: Operators notifications
---

## Introduction

This allows receiving Web push notifications even if the back office is closed. It requires only a browser running on pc.

In the future, I might add an option to send operator notification directly from bot. E.g if a specific subject is added, send a manager notification.

## Requirements

* In `Operators settings` you have to `Enable notifications` and at the bottom put your `Public key*` and `Private key*` which you can get from https://web-push-codelab.glitch.me/
* At he moment, I have tested only with Chrome.
* Notifications have to be enabled in the browser
* Installation has to be running with HTTPS

Notification will be sent if those conditions are satisfied

* Notifications are sent only for
  * New chat
  * Chat was assigned or transferred to you
* Operator in his account have **NOT** chosen `Do not show persistent notifications for chat actions`
* Operator has not checked himself as offline or has chosen `Show notifications if I am offline`
* Operator has selected `New chats` option enabled.
* Operator is assigned to chat or he has NOT chosen `Show notification only if I am an owner pending chat`

# Troubleshooting

* After you click `Subscribe` in your account new record should appear with a `Test` button at the end.
* If for some reason `Subscribe` action fails. Try to remove `Service Worker` as per screenshot and click again subscribe. Remove previous subscription.

![](img/user/service-worker.png)

## Permissions

The following permissions are required for operators:

`lhnotifications`, `use_operator`
