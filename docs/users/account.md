---
id: account
title: Account
---

## Introduction

This article will explain everything about user account and permission options.

## Account

Operator can access his account by clicking top right menu icon. 

![](/img/user/account-dropdown.jpg)

Once he logs in he will see his account like this

![](/img/user/account.png)

### Permissions

Required permission to access account page

> 'lhuser','selfedit'

### Attributes

* `Chat nickname` - visitor will see this as operator name he is chatting with.
* `Job title` - job title is visible in chat widget in operator profile block.
* `I receive other operators permissions request` - means then other operator request some permissions this operator will get e-mail.
* `Skype` - if operator enters his skype - icon will be shown.

## Assigned departments

​![](/img/user/assigned-departments.png)

If operator clicks checked to the left of the `eye` icon he will get access to read this departments chats but not accept/chat.

### Permissions

Required permissions to access assigned departments tab and see assigned departments

> 'lhuser','see_assigned_departments'

Required permissions to access assigned departments tab and see assigned departments groups

> 'lhuser','see_assigned_departments_groups'

Required permission to be able to edit assigned departments/departments groups. Without this list will be just rendered without possibility for operator edit assigned departments. This gives permission to choose departments groups and departments.

> 'lhuser','editdepartaments'

Required permission to choose all departments in account edit

> 'lhuser','self_all_departments'

If operator will have `'lhuser','editdepartaments'`, but won't have any of `'lhuser','see_assigned_departments'`, `'lhuser','see_assigned_departments_groups'` he still won't be able to edit his own departments.

## Visible lists

Use can choose what lists he can see.

![](/img/user/visible-lists.png)

### How to disable bot chats for an operator to see ?

You can disable this window for an operator and remove option to see bot chats. So operator would not see a bot chats.

### Permissions

Required permission to change lists.

> 'lhuser','change_visibility_list'

## Personal canned messages

User can have personal canned messages also which will be visible only to him. [Required permissions](canned.md#permission).

​![](/img/user/personal-canned-messages.png)

## Personal auto responder

User can have also personal auto responder. Personal response messages will override default auto responder messages. [Required permissions](auto-responder.md#permission).

​![](/img/user/personal-auto-responder.png)

:::important
Auto responder for department also has to be setup.
:::

## Chats

User can change few general settings related to chats workflow.

​![](/img/user/account-chats.png)

### I can see all pending chats, not only assigned to me

By default, dashboard `Pending widget` shows all pending chats. You force pending widget to show chats only assigned to you by checking this options.

You can disable this option for operator by removing this permission.

> 'lhuser','allowtochoosependingmode'

### Automatically accept assigned chats

System will automatically open assigned chat tab while you are on dashboard page.

### Exclude me from auto assign workflow

Let say you are Supervisor and want to accept chats also, bot do not want to participate in auto assignment workflow. This is the option for you.

### Auto preload previous visitor chat messages

Chat will automatically preload previous chat message if we find that visitor had any chats before.

### Auto uppercase sentences

We will uppercase automatically operator sentences.

### Maximum active chats

You can set how many active chats you can have. This will not assign any new chats to you if this number is reached. More information about [auto assignment](auto-assignment.md)

### Permissions

Required permissions to see this tab.

> 'lhuser','allowtochoosependingmode'

## Speech

In speech section you can setup default speech settings. If you choose languages you speak auto assign workflow will try assign these chats to you first.

​![](/img/user/speech-language.png)

### Permissions

Required permissions

> 'lhspeech','changedefaultlanguage'

## Permissions

This section allows you quickly see to what module/functions you have access to. User also can ask for permission to specific module. Using `Request permission` button. Mail is send to User who have checked `I receive other operators permissions request`. 

To grant permission itself you have to edit `Role` and just assign requested permission manually.

​![](/img/user/permissions.png)

### Permissions

Required permissions

> 'lhpermission','see_permissions'

## Notifications

In this section operator can configure settings related to new chats notifications aldo enable activity tracking so operator would go offline/online automatically. Related information [how to automate online offline status](../offline-online-automation.md)

​![](/img/user/notifications.png)