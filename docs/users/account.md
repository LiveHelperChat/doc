---
id: account
title: Account
---

## Introduction

This article will explain everything about user account and permission options.

## Account

Operator can access his account by clicking top right menu icon. 

​![](/img/user/account-dropdown.jpg)

Once he logs in he will see his account like this

​![](/img/user/account.png)

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
Required permissions to access assigned departments tab

> 'lhuser','see_assigned_departments'

Required permission to be able edit assigned departments. Without this list will be just rendered without possibility for operator edit assigned departments.

> 'lhuser','editdepartaments'

## Visible lists

Use can choose what lists he can see.

​![](/img/user/visible-lists.png)
 
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

### Permissions

Required permissions

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

In this section operator can configure settings related to new chats notifications aldo enable activity tracking so he would go offline/online automatically.

​![](/img/user/notifications.png)