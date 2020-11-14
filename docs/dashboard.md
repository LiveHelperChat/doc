---
id: dashboard
title: Dashboard
---

## Introduction

All work by default are happening in dashboard. Operators during work session does not have to use any other window. Operator here is able to

* Drag & Drop widgets
* Chat with customers
* See departments/operators statistic

## Dashboard widgets

Default dashboard widgets. It's default look you should get once you login to back office first time.

​![](/img/dashboard/dashboard.png)

### Online operators

![](/img/dashboard/operators-online.png)

#### Required configuration

In order to see online operators following conditions has to be satisfied

You have to activate `List online operators.` in
> Configuration -> Live Help Configuration -> Chat configuration -> Misc

Operator has to have one of these permissions. Operator will see only operators from his departments. Don't forget to assign department to operator...

> 'lhuser', 'userlistonline'

OR

Operator will see all online operators not only from his departments

> 'lhuser', 'userlistonlineall'

Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `Online operators`

If operator has permission 

>'lhuser', 'setopstatus'

He will be able to click on ![](/img/dashboard/online-icon.png) and change other operator status directly.

### Departments stats

You can see present department's statistic.

![](/img/dashboard/departments-stats.png)

#### Required configuration

In order for operators to see his own department statistic he has to have this permission

> 'lhuser','canseedepartmentstats'

To see all departments statistic, not only assigned to him - this permission is also required.

> 'lhuser','canseealldepartmentstats'

In order to see download stats icon this permission is required.

> 'lhstatistic', 'exportxls'

### Online visitors

In this widget you will see your site visitors.

​![](/img/dashboard/online-visitors.png)

#### Required configuration

Required permission for operators

> 'lhchat', 'use_onlineusers'

By default operator sees only visitors from departments assigned to him. If you want to allow him to see all online visitors from various departments he has to have this permission

> 'lhchat','sees_all_online_visitors'

### My active and pending chats

This widget shows only chats assigned to logged operator. Chat can be either in pending or active state, but it has to be assigned to logged operator.

![](/img/dashboard/my-chats.png)

#### Required configuration

* In `Account -> Visible` lists page he has to active `My pending and active chats list enabled`
* Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `My active and pending chats`

### Pending chats

This widget shows all departments pending chats to which operator has access to.

![](/img/dashboard/pending-chats.png)

 * [How to deny the operator to open all pending chats?](auto-assignment.mdx#how-to-deny-the-operator-to-open-all-pending-chats). 
 * [How to show only to operator assigned pending chats?](users/account.md#i-can-see-all-pending-chats-not-only-assigned-to-me)

#### Required configuration

* In `Account -> Visible` lists page he has to active `Pending chats list enabled`

### Transferred chats

Transferred chats to him directly or one of his departments will be shown here.

![](/img/dashboard/transfered-chats.png)

### Active chats

Shows presently ongoing chats. Shows only chats from his departments.

![](/img/dashboard/active-chats.png)

 * [How to deny the operator to open all chats?](auto-assignment.mdx#how-to-deny-the-operator-to-open-all-chats). 

#### Required configuration

* In `Account -> Visible` lists page he has to active `Active chats list enabled`

### Bot chats

Shows all chats which one bot is handling. 

![](/img/dashboard/bot-chats.png)

* [How to deny to operator open bot chats?](users/account.md#visible-lists)

#### Required configuration

* In `Account -> Visible` lists page he has to active `Bot chats list enabled`

### Group chats

In group chats operators sees 1 on 1 chats and public group chats.

​![](/img/dashboard/group-chats.png)

* Unread chats has this `Fire` icon in front of the name.
* `House` icon indicates that you are an owner of the group chat.
* `Shield` icon indicates it's a private chat.
* `Word` icon indicates it's a public chat.

#### Required configuration

For operator to see this widget he has to have

> 'lhgroupchat','use' 

If you want private chats can open automatically for you. Navigate to `Account -> Chats -> Auto join private chats`

If operator has permission to

> 'lhgroupchat','public_chat'

He will be able also to create a public groups.

If operator has permission

> 'lhgroupchat','manage'

He will see also group chats settings in `System configuration`

## Chat tabs options

You can choose few quick options how chat tabs are displayed

​![](/img/dashboard/dashboard-tabs-settings.jpg)

If you choose to hide nick for offline chats. You will get similar look to this. Chat where visitor is gone will be without nick.

​![](/img/dashboard/hide-nick-for-offline.jpg)

## Information icon

If you click information icon ​![](/img/dashboard/information-icon.jpg) you will be see chat preview modal window.

​![](/img/dashboard/chat-preview.jpg)

## Accepting chat

You have two ways to accept chat

* Either you click popup icon ​![](/img/dashboard/popup-icon.jpg)
* Either you click just nick and new tab will be loaded.
* If you are using [auto assignment](auto-assignment.mdx) workflow for you tabs might [open automatically](users/account.md#chats).

## FAQ

### How to change dashboard tab order

Go to

> Configuration -> Live Help Configuration -> Chat configuration -> Misc

* Link on demo E.g http://demo.livehelperchat.com/site_admin/chat/listchatconfig
* Find "Home page tabs order" and at very begining add "dashboard" in demo it looks like

Default after new install: 
> dashboard,online_users,online_map

All possible options: 

> dashboard, online_users, pending_chats, online_map, active_chats, unread_chats, closed_chats, online_operators

That's all after save you will see new dashboard tabs

### Why I can't see bot chats?

* In `Account -> Visible` lists page he has to active `Bot chats list enabled`
* Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `Bot chats`



### How to change default dashboard widgets position?

Go to

> Configuration -> Live Help Configuration -> Chat configuration -> Misc

* Find "Home page dashboard widgets order"
* Dashboard possible widgets. 

> widgets: online_operators, departments_stats, pending_chats, unread_chats, transfered_chats, active_chats, closed_chats, bot_chats, my_chats

### My operators does not see a departments statistic widget?

You have to assign to your operators new permission.  

> 'lhuser','canseedepartmentstats'

If you want that operator would be able to see all departments statistic this permission has to be assigned

> 'lhuser','canseealldepartmentstats'

Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `Departments stats`

### How can I remove right column in dashboard?

In dashboard right column duplicates what you see in dashboard itself so makes sense just hide right column.

You have to activate `Hide right column in frontpage.` in
> Configuration -> Live Help Configuration -> Chat configuration -> Misc

## Permissions

For operator to be able to use dashboard in general he has to have. It's a must permission because to this page user is redirected once he logins to the system.

> front -> default