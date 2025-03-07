---
id: invisible-mode
title: Invisible/Offline mode
sidebar_label: Invisible/Offline mode
---

## Purpose of Invisible Mode

The most common question is: "How can I open a chat and type in it without accepting the chat?"

Invisible mode allows you to do this. You will be able to open any pending chat without becoming its owner.

To use this mode, click `Account` and check `Invisible mode`. This mode is most often used by managers while working and monitoring ongoing chats.

## Purpose of Online Mode

Operators who are actively working usually use this mode. Changing visibility is often disabled for them. This means:

*   If you open any `Pending` chat, you will instantly become its owner.
*   If you open a `Bot` chat, you will become its owner upon sending your first message.
*   In all cases, you should not be in invisible mode.

## Online & Visible

This is the default operator mode, meaning they will participate in the auto-assignment workflow process and automatically accept chats if that feature is enabled.

## Offline & Visible

In this mode, the operator does not participate in the auto-assignment process. However, if they open a pending chat, it will be assigned to them. This option is useful if operators are taking chats manually.

## Offline & Invisible

In this mode, the operator does not participate in the auto-assignment process, and if they open a pending chat, it will not be assigned to them. This option is best suited for supervisors who are monitoring chats.

## Online & Invisible

This status is generally not used, as the auto-assignment process will assign chat requests to the operator. However, if they were to open a chat, the chat status would not change to active. Usually, this combination indicates a misconfiguration.

## Online Conditions

Your online status can be determined based on a few options:

### Based on Activity

This means that even if you have set your status to online, logging out will change your status to offline. This is useful if you primarily use the web interface.

### Always Online

This means that if you log out while online, you will still be seen as online. This is useful if you are using a Telegram extension and want to remain visible as online. The widget will also be shown as online, and auto-assignment will continue to include you in the workflow.

## How Can Operators Change Their Visibility?

Operators can change their visibility either from the top menu or directly in their account edit window.

![](/img/user/visibility-offline.jpg?v=2)

*   Visible / Invisible
    *   Based on activity / Always online
*   Offline / Online

:::tip Tip

It is generally recommended to prevent operators from changing their visibility status, as it often leads to confusion.
:::

Operators should **not** have this function:

> 'lhuser','changevisibility'

The following permission is required to change online/offline status:

> 'lhuser','changeonlinestatus'

The following permission is required for an operator to change their online conditions:

> 'lhuser','changealwaysonline'
