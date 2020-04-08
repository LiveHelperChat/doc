---
id: auto-assignment
title: How to setup round robin/automatic chats assignment workflow?
sidebar_label: Auto assignment
---

## Introduction
In department you can find auto assignment settings.

![](/img/department/auto-assignment.jpg)

## Attributes definition

### Maximum number of active chats user can have at a time, 0 - unlimited

You can set how many actives chats user can have at a time. 

If this variable **is not set** we would assign chat to user if

* Either operator does not have max chats limit **OR** and his active chats is less than 

If this variable **is set** we would assign chat to user if

* Either operator does not have max chats limit set **AND** active chats ir less than defined maximum number of chats in department.
* **OR**
* Either he has limit set and number of chats is less than number of active chats he has now

### Maximum number of department active chats, 0 - unlimited

Auto assignment workflow would be executed only if department is having less active chats than defined amount. If this limit is reached, new chats will not be assigned to any operator.

### Automatically assign chat to another operator if operator did not accepted chat in seconds, 0 - disabled

If you set 10 means operator would have 10 seconds to accept a chat before chat is assigned to another operator.

### Minimum delay between chat assignment to operator

Then we assign chat to one operator we can give some delay before another chat can be assigned to the same operator.

### Exclude inactive chats

Pending and active chats which visitors has closed chats explicitly or visitors being redirected to survey will be excluded

### Try to assign chats first to the same language speaking operators

Operator in their accounts can choose what languages they are speaking. So it's possible to try first to assign chats to same language speaking operators.

### Check for presence of variable && Resume auto assign if chat remains pending for n seconds

* `additional_data.<variable>`
* `chat_variable.<variable>`

Using this functionality we can allow to participate in auto assignment chats which have custom variables only. By defining time we do these checks only if chat is not older than defined amount of time.

:::tip
This functionality should be used only by advanced users which want to do some fancy things :smile:
:::

## Workflow cronjob influence

If you want auto assignment workflow to work independently of what visitor does (still on site or not) you have to be running [workflow cronjob](development/cronjob.md#default-cronjob-setup). I suggest in that scenario run cronjob every 5 seconds.

## Disable live auto assignment

Usually auto assignment happens when visitor is waiting untill someone accepts a chat. If you are running workflow cronjob it makes sense uncheck this as cronjob will do this part. This also will make visitor UI feel faster.

`Disable live auto assign` option can be found here 

> System configuration -> Live help configuration -> Chat configuration -> Misc

## How to deny the operator to open all pending chats?

By default operator can open all pending chats. Not only assigned to him. If you are using auto assignment workflow and do not want to allow operator to open all pending chats just remove this permission.

> 'chat','open_all'

## How to deny the operator to open all chats?

If you remove this permission operator will be able to open chats only where he is an owner.

> 'lhchat','allowopenremotechat'

## How automatically open assigned chat for an operator?

* You have to in [user account](users/account.md#automatically-accept-assigned-chats) check `Automatically accept assigned chats`
* Operator has to have enabled `Pending chats list enabled` or `My pending and active chats list enabled`

## Sample

To user explicitly has to be assigned department. It's not enough just check all departments. Within each department have to be checked department.

### Department adjustment

You have in department "Auto assignment" secion enable automatic chats transfer.

* Also optionally you can setup how many active chats user can have at a time.
* How long chat should be assigned to user before it will be transfered to another user, if first user did not accepted it.
* In most cases it's enough just enable enable it. I also recommend to read round robin implementation for chat's [https://docs.google.com/file/d/0B5uaj1QNYoNTVjRnd1ozdmJDYlkwMEl0T0p6NnZLeThXeEww/edit](https://docs.google.com/file/d/0B5uaj1QNYoNTVjRnd1ozdmJDYlkwMEl0T0p6NnZLeThXeEww/edit)

### Users adjustment

By default users sees all pending department chats. To disable that and show only to him assigned pending chats you have to

*   Edit user and in "Pending chats" tab, uncheck "User can see all pending chats, not only assigned to him"
*   By default operators do not have permission to choose what pending chats they can see. You can grant permission to choose them personally what list he want's to see. Assigned to operators role permission
*   "lhuser" => "allowtochoosependingmode" | "Users, groups management" => "Allow user to choose what pending chats he can see, only assigned to him or all."
*   User has to be online for chat being assigned to him
*   If you want that assigned chat would be opened automatically for user. User in his account has have checked "Chats" => "Automatically accept assigned chats"
    *   If user does not see Chats tab in his account you have to give operators role this permission Module - (lhuser) Function - (allowtochoosependingmode)
*   Also in "Visible lists" worh checking "My pending and active chats list enabled" so user would see new widget where only to him assigned active and pending chats would be presented. For user to be able to change what he sees he has to have this permission
    *   Module - ('lhuser'), Function - ('change_visibility_list')

<iframe width="560" height="315" src="https://www.youtube.com/embed/4PTkaAs452A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>