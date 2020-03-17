---
id: canned
title: How to use canned messages?
sidebar_label: Canned messages
---

Canned messages purpose is to provide prepared answers for standard questions. Canned messages can be found at

> System configuration -> Canned messages

Also in admin windows you will see combobox with defined values. Also you can disabled canned messages adminsitrator by removing permissions access.

Also it's possible for operators to have personal canned messages, to them have to be assigned this permission. (Since 1.91v)

> lhuser -> personalcannedmsg

Canned messages also supports these template variables. (Since 1.91v)
 
*   `{nick}` - visitor name 
*   `{operator}` - operator name
*   `{email}` - visitor e-mail
*   `{phone}` - visitor phone
*   `{<field_identifier>}` - field identifier from custom fields managed in back office

​![](https://livehelperchat.com/var/media/images/canned-msg.png)

*   Message - defined message.
*   Automatically send this message to user then chat is accepted - this message is send to user then operator accepts a chat. If there is few messages the very first one is send. This feature works only for web client.
*   Delay in seconds - this delay gives few time between users sees Operator is typing and message appearance in user chat.
*   Position - order position from lowest to highest. Canned message with lower value always has a priority.
*   Department, to what department message is visible.