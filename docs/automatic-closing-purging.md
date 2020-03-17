---
id: auto-close-delete
title: How to setup automatic chat's closing/purging?
sidebar_label: Automatic closing/deleting
---

For it you have to setup in chat configuration

![](https://livehelperchat.com/var/media/images/closing.png)

To execute process itself there is two options

*   Execute automatic chats closing/purging in back office by navigating to "System configuration" => "Live help configuration" => "Maintenence" and there you will be able to close, delete chats
*   If you do not want manually maintain these things you can just setup [cronjob](https://livehelperchat.com/how-to-setup-lhc-cronjob-340a.html)

What chat's closes **"Automatic chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"?**

1.  Where chat is active and visitor has send more than one message and from hist last message passed defined amount of time
2.  Where chat is pending or active and the only message was visitor first message

What chat's closes **"Automatic pending chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"?**

1.  Where chat is pending and from chat start passed defined amount of time. Means chat was not accepted for this period of time.

What chat's closes **"Automatic active chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"**?

1.  Where chat is active and from chat start passed defined amount of time.

What chat's closes **"Automatic bot chats closing. 0 - disabled, n > 0 time in minutes before chat is automatically closed"**?

1.  Where chat is bot chat and from chat start passed defined amount of time.

What chat's deletes **"Automatic chats purging. 0 - disabled, n > 0 time in minutes before chat is automatically deleted"**?

1.  Chat s ckised and from user last message passed defined amount of time