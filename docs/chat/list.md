---
id: list
title: Chat list
sidebar_label: Chat list
---

## Introduction

The chat list can be accessed from the left menu:

​![](/img/chat/chat-list.png)

It can also be accessed by clicking on the titles of dashboard widgets.

​![](/img/chat/widget-title.png)

To allow an operator to list all chats within a department, grant them the `'lhchat','list_all_chats'` permission.

To limit an operator to only listing their own chats, grant them `'lhchat','list_my_chats'`. You can additionally grant `'lhchat','list_pending_chats'` to allow them to list pending chats.

**Summary:**

Grant `'lhchat','list_all_chats'` (required) **or** `'lhchat','list_my_chats'` (required).  `'lhchat','list_pending_chats'` is optional.

## Permissions

To grant an operator the ability to list all chats, regardless of the chat owner's status, use the following permission:

`Allow operator to list all chats independently of operator and status.`
> 'lhchat','list_all_chats'

### OR

To allow an operator to list only the chats they own, use the following permission:

`Allow operator to list chats he is owner`
> 'lhchat','list_my_chats'

To allow an operator to list pending chats without a chat owner, grant them the following permission:

`Allow operator to list chats without an owner and in status pending.`
> 'lhchat','list_pending_chats'

### General permission

The general permission required to access the chat list is:
> 'lhchat','use'

Permissions for opening chats are explained [here](chat/chat.md#permissions-influencing-chat-opening-permissions).

