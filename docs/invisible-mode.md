---
id: invisible-mode
title: Invisible/Offline mode
sidebar_label: Invisible/Offline mode
---

## Invisible mode purpose

The Most common question is how to open a chat and type in it without accepting a chat?

With that mode you can solve that. You will be able to open any pending chat without becoming an owner of it.

So just click `Account` and check `Invisible mode`. This is mode most of the time used for managers while working and monitoring ongoing chats.

## Online mode purpose

Operators who work can usually change only that mode. Changing visibility is disabled most of the time. It means 

* If you open any `Pending` chat you will become an owner instantly.
* If you open `Bot` chat you will become an owner on your first message.  
* In all cases you should not be in invisible mode.

## Online && Visible

This is the default operator mode meaning they would participate in the auto assignment workflow process and would also automatically accept chats if this was enabled.

## Offline && Visible

The operator would not participate in the auto assignment process, however if they opened a pending chat chat it would be assigned them. This option makes sense if operators are taking chats manually.

## Offline && Invisible

The operator would not participate in the auto assignment process & should they open a pending chat chat it would not be assigned to them. This option is best suited for supervisors who are monitoring chats.

## Online && Invisible

Usually this status is not used as the auto assignment process will assign chat requests to the operator. However, if they were to open a chat the chat status would not change to active. Usually it's a misconfiguration being in that combination.

## Online conditions
You can be online based on few options. 

### Based on activity

Means even if you have checked that you are online and you logout you will be see as being offline. Usefull if you only use web interface.

### Always online

Means if you logged out being online you still will be seen as being online. Usefull in case you are using telegram extension and still want to be visible as being online. So widget will be shown as being online also auto assignment will continue to work and include you in workflow.

## How can they change their visibility?

They can change it either from top menu or directly in their account edit window

![](/img/user/visibility-offline.jpg?v=2)

 * Visible/Invisible
    * Based on activity/Always online
 * Offline/Online

:::tip Tip

For operators I suggest do not allow to have possibility to change their visibility status, because most of the time it just confuses them.
:::

They should **not** have this function

> 'lhuser','changevisibility'

Required permission to change online/offline status

> 'lhuser','changeonlinestatus'

Required permission for operator to change his online conditions

> 'lhuser','changealwaysonline'