---
id: transferring-chat
title: Transferring a Chat
sidebar_label: Transferring chat
---

This article explains how to transfer a chat to another user or department, and the permissions required.

![](/img/chat/chat-transfer.png)

Transfer init icon

![](/img/chat/transfer-icon.jpg)

## Transferring to a User

To transfer a chat to another operator, the operator must first have the following permission:

> 'lhchat', 'allowtransfer'

To allow an operator to transfer a chat to *any* online operator, they must have this permission. Otherwise, they will only see online operators from the departments they are a member of.

> 'lhchat', 'allowtransfertoanyuser'

This permission can be limited to specific user groups, defined as follows:

```json
{"group":[1,2,3,9,10]}
```

:::tip
The system always applies an online timeout filter, which can be configured in:
> System configuration > Synchronization and sound settings > How many seconds for a user to be considered as being online
:::

### Notifications for operator whom chat was transferred

If `Automatically accept assigned chats` is enabled for the receiving operator:

*   If the operator is on the dashboard or chat list where tabs are present, the chat will load automatically.
*   If the operator is on a page where tabs are not available, a popup will be shown. The operator must ensure that popups are not blocked, as indicated in the top right corner. Otherwise, they might miss the chat.

If `Automatically accept assigned chats` is disabled for the receiving operator:

*   An alert is shown on the dashboard.
*   An alert is shown on any other page as well.

If the operator is in inactive mode due to inactivity, they will not receive the transfer notification until they go back online.

## Transferring to a Department

To transfer a chat to another department, the operator must first have the following permission:

> 'lhchat', 'allowtransfer'

An operator will only see their own departments and department groups unless they have the following permission:

> 'lhdepartment', 'see_all'

This permission can be limited to specific departments and department groups, defined as follows:

```json
{"group":[1,2,3,9,10],"department":[45,46]}
```

## Changing Chat Owner

It is also possible to change the chat owner directly from this modal window. To do so, the operator must have the following permission:

> 'lhchat','changeowner'

The operator can see all system operators without any restrictions.

## Changing Department

To change the department directly, the operator must have this permission:

> 'lhchat','changedepartment'

By default, an operator can only change the department to departments they are a member of with either `Read Only` or `As Operator` permissions.

> 'lhchat','allowtransfertoanydep'

## Allowing an operator to see all departments

There are two ways to achieve this: either grant the operator the following permission:

> 'lhdepartment', 'see_all'

or assign them to read-only departments.

## Transferring by Command

It is also possible to transfer a chat directly using a command in the message area. To transfer a chat directly to another operator by username or email, use the following command:

```
!transferforce <operator username||operator email>
```

The operator must have the following permission:

> 'lhchat', 'allowtransferdirectly'


## Transfer options by transferring chat to department

There are also a few options that can be applied during a chat transfer event.

![](/img/chat/transfer-options.jpg)

### Change chat department to the transferred department upon chat transfer

When a chat is transferred to another department, the original chat department is not changed by default. To change the department to the transferred department, enable this option.

### Make chat status pending upon transfer to department

When a transfer occurs, the chat status remains active by default. To reset the status to pending, enable this option.

### Make chat unassigned; the assigned operator will be unassigned

When a transfer occurs, the original user remains assigned until another operator accepts the chat. To reset and unassign the operator, enable this option.

## Permissions

To edit these options, the operator must have the following permission:

> 'system', 'transferconfiguration'

:::tip
To prevent an operator from transferring or changing chat owners, do not grant them the `'lhchat', 'allowtransfer'` permission.
:::

## My operator only sees the departments and operators assigned to them. Why?

A recent change affects which departments online operators can see without being directly assigned to them.

To allow an operator to see all departments, not just those assigned to them, you can either:

Grant them the following permission:
> 'lhdepartment', 'see_all'

Or assign them to other departments in `read only` mode.

To allow an operator to see all online operators (from other groups they do not belong to), there are also two options:

Grant them the following permission:
> 'lhuser', 'see_all'

Or modify the user group and assign the user groups the user can work with.

Having these two permissions will result in the same behavior as before.
