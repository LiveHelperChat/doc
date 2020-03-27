---
id: duration
title: Chat duration
sidebar_label: Chat duration
---

When chat is closed we calculate chat duration. Chat duration is calculated using these two options

> How long operator can wait for message from visitor before time between messages are ignored. Values in minutes.

and

> How long visitor can wait for message from operator before time between messages are ignored. Values in minutes.

(Code location)[https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhchat/lhchat.php#L2032]


These two options can be found at

> System configuration -> Live help configuration -> Chat configuration -> Misc
