---
id: transferring-chat
title: Transferring chat to another department/operator
sidebar_label: Transferring chat
---

This article explains how transferring chat to another user/department works and what permissions are involved.

![](/img/chat/chat-transfer.png)

Transfer init icon

![](/img/chat/transfer-icon.jpg)

## Transfer to a user

For operator to be able to transfer chat to another department/operator first he has to have

> 'lhchat', 'allowtransfer'

If you want that operator would be able to transfer to any online operator. Operator has to have this permission. Otherwise, he would see online operators only from departments he is member of.

> 'lhchat', 'allowtransfertoanyuser'

This permission can have limitation like. It defines `user groups`, he can transfer chat to.

```json
{"group":[1,2,3,9,10]}
```

:::tip
We always apply online timeout filter. 
> System configuration > Synchronization and sound settings > How many seconds for a user to be considered as being online
:::

### Notifications for operator whom chat was transferred

If `Automatically accept assigned chats` *is checked* for chat recipient operator

* If operator is on dashboard or chat list where tabs are present chat will load automatically for them.
* If operator is on page where tabs are not available popup will be automatically shown. They have to be sure popups are not blocked. Top right corner indicates that popup was blocked. That way they could miss chat completely.

If `Automatically accept assigned chats` *is NOT checked* for chat recipient operator

* Alert is shown on the dashboard.
* Alert is shown in any other page also.

If operator is in inactive mode, because of inactivity, he won't receive transfer notification, but will receive one as soon he goes online.

## Transfer to a department

For operator to be able to transfer chat to another department/operator first he has to have

> 'lhchat', 'allowtransfer'

Operator sees only his departments and departments groups if he does not have permission

> 'lhdepartment', 'see_all'

This permission can have limitation like. It defines `departments` and `departments groups`

```json
{"group":[1,2,3,9,10],"department":[45,46]}
```

## Changing chat owner

It's also from this modal window possible to change chat owner directly. For that operator has to have this permission.

 > 'lhchat','changeowner'

Operator can see all system operators there. It's not influenced by any restrictions.

## Change department

For operator to be able to change department directly. He has to have this permission.

> 'lhchat','changedepartment'

By default, operator can change department only to departments he is member of `Read Only` and `As Operator`

> 'lhchat','allowtransfertoanydep'

## For operator to be able to see all departments.

There is two ways either you have to give him permission

> 'lhdepartment', 'see_all'

or assign him read only departments.

## Transferring by command

It's also possible to transfer chat directly by issuing command in message area. Transfer chat directly to another operator by operator username or e-mail

```
!transferforce <operator username||operator email>
```

Operator has to have this permission.

> 'lhchat', 'allowtransferdirectly'


## Transfer options by transferring chat to department

There is also few options which can be applied during chat transfer event.

![](/img/chat/transfer-options.jpg)

### Change chat department to transferred department on chat transfer

When chat is transfered to other department we do not change chat original department. If you want that department would be changed to transferred department you can enable this option.

### Make chat status pending on transfer to department

When transfer happens we do not change chat status. It remains active. If you want that it's status would be reset to pending again you can check this option.

### Make chat unassigned. Assigned operator will be unassigned

When transfer happens we keep original user until other operator accepts a chat. In case you want reset and assigned operator you can check this option.

## Permissions

For operator to be able to edit these options he has to have this permission.

> 'system', 'transferconfiguration'

:::tip 
If you do not want to allow operator to do anything with Transferring/changing owners just do not give them `'lhchat', 'allowtransfer'` permission.
:::

## My operator sees only to him assigned departments and only his departments operators?

There was a change recently what departments online operators can see without being assigned directly to them.

For operator to be able to see all departments, not only assigned to him you have two ways

Either you assign him  
 > 'lhdepartment', 'see_all'

Or assign him other departments in `read only` mode.

To be able to see all online operators (from other groups he does not belong to) there is also two options

Either you assign him
> 'lhuser', 'see_all'

Or you modify user group and assign with what user groups user can work with.

Having these two permission will result same behaviour as before.