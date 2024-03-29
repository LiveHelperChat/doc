---
id: canned
title: How to use canned messages?
sidebar_label: Canned messages
---

## Introduction

Canned messages purpose is to provide prepared answers for standard questions. Canned messages can be found at

> System configuration -> Live help configuration -> Canned messages

## Exploring canned messages list

For operator to access canned messages list he has to have this permission

> 'lhchat', 'explorecannedmsg'

To see all canned messages, not only from departments he is member of he has to have this permission

> 'lhchat', 'explorecannedmsg_all'

To have possibility create/edit canned message's operator has to have this permission

> 'lhchat', 'administratecannedmsg'

## Usage

![Canned messages](/img/chat/canned-messages.jpg)

Canned messages also supports these template variables.


* `{nick}` - visitor name 
* `{operator}` - operator name
* `{email}` - visitor e-mail
* `{phone}` - visitor phone
* `{<field_identifier>}` - field identifier from custom fields managed in back office

## Definition

### Title
Visible in back office

### Tag's
Tag's allow to do quick search for canned message directly in message send area by typing `#<tag>` keyword or just `#`

![Tag attribute](/img/chat/tag.jpg)

There can be multiple tags in one canned messages if they are separated by a comma. E.g apple, fruit.

:::tip
You can navigate quickly through dropdown using up/down right/left arrows.
:::

## Canned messages in chat interface

Canned messages are visible in chat interface at the bottom.

![Canned messages in chat interface](/img/chat/canned-chat.jpg)

Search is performed in these fields

 * Title
 * Message text

### Explain

Just for personal reasons to know for what purposes is this canned message.

### Automatically send this message to user then chat is accepted

This message is send to user then operator accepts a chat. If there is few messages the very first one is send. This feature works only for web client.

### Delay in seconds

This delay gives few time between users sees Operator is typing and message appearance in user chat.

### Department

To what department message is visible. If you do not choose department message will be visible for all chats.

### Message

Default canned message.

### Fallback message

If not all variables were placed in default message we send this message instead.

### HTML Snippet

If you enter html in this field it will be send as html code to visitor. E.g perhaps you want to execute some javascript on his browser. Like redirect to custom page.

## Permission

For operator to be able edit canned message he has to have this permission

> 'lhchat', 'administratecannedmsg'

For operator to be able to see global ones he has to have in addition this permission

> 'lhcannedmsg', 'see_global'

For operators to have personal canned messages, to them have to be assigned this permission

> 'lhuser', 'personalcannedmsg'

For operators to be able to use canned messages module in chat window this permission is required

> 'lhcannedmsg', 'use'

