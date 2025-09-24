---
id: send-typing
title: Send typing
---

This article explains the `Send Typing` response type.

This response typing is useful to show that we are preparing answer for the visitor. E.g. while AI generates answer.

In the below example we

* First look for internally defined keywords via `Search for default action on message` response type
* We show typing after 2 seconds the visitor has sent a message
* We disable visitor to send any other message until bot replies with something.

![](/img/bot/send-typing.png)
