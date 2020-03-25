---
id: canned
title: How to use canned messages?
sidebar_label: Canned messages
---

## Introduction

Canned messages purpose is to provide prepared answers for standard questions. Canned messages can be found at

> System configuration -> Canned messages

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

:::tip
You can navigate quickly through dropdown using up/down right/left arrows.
:::

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

## Canned messages in chat interface

Canned messages are visible in chat interface at the bottom.

![Canned messages in chat interface](/img/chat/canned-chat.jpg)

## Permission

For operator to be able edit all canned message he has to have

> 'chat', 'administratecannedmsg'

For operators to have personal canned messages, to them have to be assigned this permission.

> 'lhuser','personalcannedmsg'
