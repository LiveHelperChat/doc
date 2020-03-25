---
id: invisible-mode
title: Invisible/Offline mode
sidebar_label: Invisible/Offline mode
---

## Online && Visible
This is the default operator mode meaning they would participate in the auto assignment workflow process and would also automatically accept chats if this was enabled.

## Offline && Visible
The operator would not participate in the auto assignment process, however if they opened a pending chat chat it would be assigned them. This option makes sense if operators are taking chats manually.

## Offline && Invisible
The operator would not participate in the auto assignment process & should they open a pending chat chat it would not be assigned to them. This option is best suited for supervisors who are monitoring chats.

## Online && Invisible
Usually this status is not used as the auto assignment process will assign chat requests to the operator. However, if they were to open a chat the chat status would not change to active.

## How can they change their visibility?

They can change it either from top menu or directly in their account edit window

![](/img/user/visibility-offline.jpg)

 * Visible/Invisible
 * Offline/Online


:::tip Tip

For operators I suggest do not allow to have possibility to change their visibility status, because most of the time it just confuses them.
:::

They should not have this function
> 'lhuser','changevisibility'