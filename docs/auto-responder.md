---
id: auto-responder
title: Auto responder
sidebar_label: Auto responder
---

1.  Auto responder in proactive chat invitations.
2.  Independent responder.

This allows you to have the following workflow.

1.  Then users starts chat. He receives preconfigured message. E.g. "one moment please..."
2.  If the agent doesn’t accept within a time period (e.g. 1 minute) to user is send message. "we are currenty busy with another client right now, can you leave your name and email and we will follow up"

Auto responder in general have three options.

![](https://livehelperchat.com/var/media/images/auto-responder.png)

*   Language - for what language this message should be shown, usefull if you would like to have difference response messages for different langueges
*   Position - messages with lower values will be send the very first. If there is few auto response messages matching criteria the message with lower position will be send the very first.
*   Wait message. This message is shown instantly as soon user fills form start fields. If empty no message is send to user.
*   Wait timeout - how many seconds have to pass before timeout message is shown to user. The last one fields.
*   Messages after no one received a message. This combined with user redirect if chat was not accepted for some time can lead to very fancy behaviour like writing that he will be redirected to contact form in a second.

These options can be independed from proactive chat. There is new link in "Chat related" configuration section. "Auto responder" it has the same fields.