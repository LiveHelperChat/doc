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