---
id: transferring-chat
title: Transferring chat to another department/operator
sidebar_label: Transferring chat
---

This article explains how transferring chat to another user/department works and what permissions are involved.

![](/img/chat/chat-transfer.jpg)

Transfer init icon

![](/img/chat/transfer-icon.jpg)

## Permissions

For operator to be able to transfer chat to another department/operator first he has to have

> 'lhchat', 'allowtransfer'

If you want that operator would be able to transfer to any online operator. Operator has to have this permission. Otherwise he would see online operators only from his department.

> 'lhchat', 'allowtransfertoanyuser'

## Changing chat owner

It's also from this modal window possible to change chat owner directly. For that operator has to have this permission.

 > 'lhchat','changeowner'

## Transferring by command

It's also possible to transfer chat directly by issuing command in message area. Transfer chat directly to another operator by operator username or e-mail

```
!transferforce <operator username||operator email>
```

Operator has to have this permission.

> 'lhchat', 'allowtransferdirectly'

:::tip 
If you do not want to allow operator to do anything with Transferring/changing owners just do not give them `'lhchat', 'allowtransfer'` permission.
:::