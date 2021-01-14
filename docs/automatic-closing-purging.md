---
id: auto-close-delete
title: How to setup automatic chat's closing/purging?
sidebar_label: Automatic closing/deleting
---

For it you have to setup in chat configuration

![](https://livehelperchat.com/var/media/images/closing.png)

To execute process itself there is two options

 * Execute automatic chats closing/purging in back office by navigating to "System configuration" => "Live help configuration" => "Maintenence" and there you will be able to close, delete chats
 * If you do not want manually maintain these things you can just setup [cronjob](development/cronjob.md)

What chat's closes **"Automatic chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"?**

1. Where chat is active and visitor has send more than one message and from his last message passed defined amount of time
2. Where chat is pending or active and the only message was visitor first message

What chat's closes **"Automatically close active chat if from last visitor/operator message passed. 0 - disabled, n > 0 time in minutes"?**

1. We close all active chats if from last chat activity passed defined amount of time. Activity happens on
    1. Operator accepts a chat
    2. Visitor writes a message
    3. Operator writes a message

What chat's closes **"Automatic pending chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"?**

1. Where chat is pending and from chat start passed defined amount of time. Means chat was not accepted for this period of time.

What chat's closes **"Automatic active chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"**?

1. Where chat is active and from chat start passed defined amount of time.

What chat's closes **"Automatic bot chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"**?

1. Where chat is bot chat and from chat start passed defined amount of time, and the only message was user first message.
2. Where chat is bot chat and from last visitor message passed defined amount of time.

What chat's deletes **"Automatic chats purging. 0 - disabled, n > 0 time in minutes before chat is automatically deleted"**?

1. Chat is closed and from user last message passed defined amount of time. 

What chat's closes **"Automatically close pending chats where visitor has left a chat. Timeout in minutes, last activity by visitor `desktop timeout`,`mobile timeout`."**?

1. Chats where visitor
    1. Has been redirected to survey form
    2. Has been redirected to offline form
    3. Has closed chat explicitly
2. Visitor was seen online based on defined timeout values
    1. `desktop timout` - applies to desktop devices
    2. `mobile timeout` - applies to mobile and tablet devices.

E.g `1,3` would mean that pending chats where `desktop timeout` is 1 minutes and `mobile timeout` is 3 minutes will be closed automatically. 