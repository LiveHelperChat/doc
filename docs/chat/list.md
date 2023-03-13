---
id: list
title: Chat list
sidebar_label: Chat list
---

## Introduction

Chat list can be accessed from left menu

​![](/img/chat/chat-list.png)

It can also be reached by clicking on dashboard widget titles.

​![](/img/chat/widget-title.png)

If you want to allow operator to list all chats by department grant him `'lhchat','list_all_chats'`

if you want to limit that grant him only `'lhchat','list_my_chats'` also you can additionally grant `'lhchat','list_pending_chats'`

Summary:

Grant `'lhchat','list_all_chats'`(required) **or** `'lhchat','list_my_chats'`(required) `'lhchat','list_pending_chats'`(optional)

## Permissions

If you want to grant operator to list all chats independently of chat owner status

`Allow operator to list all chats independently of operator and status.`
> 'lhchat','list_all_chats'

### OR

If you want to allow operator to list only chats he is owner

`Allow operator to list chats he is owner`
> 'lhchat','list_my_chats'

Also if you want to allow hom to list pending chats without a chat owner grant him

`Allow operator to list chats without an owner and in status pending.`
> 'lhchat','list_pending_chats'


### General permission

General permission
> 'lhchat','use'