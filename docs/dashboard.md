---
id: dashboard
title: Dashboard
---

## Introduction

All work by default are happening in dashboard. Operators during work session does not have to use any other window. Operator here is able to

* Drag & Drop widgets
* Chat with customers
* See departments/operators statistic

### Chat tabs options

You can choose few quick options how chat tabs are displayed

​![](/img/dashboard/dashboard-tabs-settings.jpg)

If you choose to hide nick for offline chats. You will get similar look to this. Chat where visitor is gone will be without nick.

​![](/img/dashboard/hide-nick-for-offline.jpg)

### Information icon

If you click information icon ​![](/img/dashboard/information-icon.jpg) you will be see chat preview modal window.

​![](/img/dashboard/chat-preview.jpg)

### Accepting chat

You have two ways to accept chat

* Either you click popup icon ​![](/img/dashboard/popup-icon.jpg)
* Either you click just nick and new tab will be loaded.
* If you are using [auto assignment](auto-assignment.md) workflow for you tabs might open automatically.

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

### Why I can't see my active/pending chats?

​![](/img/dashboard/my-active-pending-chats.jpg)

For operator be able to see only to him assigned and his active chats he has to satisfy following conditions

* In `Account -> Visible` lists page he has to active `My pending and active chats list enabled`
* Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `My active and pending chats`

### Why I can't see online operators?

​![](/img/dashboard/online-operators.jpg)

In order to see online operators following conditions has to be satisfied

You have to activate `List online operators.` in
> Configuration -> Live Help Configuration -> Chat configuration -> Misc

Operator has to have one of these permissions

> Operator will see only operators from his departments 
>'lhuser', 'userlistonline'

OR

> Opeartor will see all online operators not only from his departments
> 'lhuser', 'userlistonlineall'

Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `Online operators`

### How to change dashboard widgets position?

Go to

> Configuration -> Live Help Configuration -> Chat configuration -> Misc

* Find "Home page dashboard widgets order"
* | - means column. You can rarrange as you want.
* Dashboard possible widgets. This order is default once visitor logins.

> widgets: online_operators, departments_stats, pending_chats, unread_chats, transfered_chats, active_chats, closed_chats

### My operators does not see a departments statistic widget?

You have to assign to your operators new permission.  

> 'lhuser','canseedepartmentstats'

If you want that operator would be able to see all departments statistic this permission has to be assigned

> 'lhuser','canseealldepartmentstats'

Operator in dashboard widget settings ​![](/img/dashboard/dashboard-icon.jpg) has to choose `Departments stats`

## Permissions

For operator to be able to use dashboard in general he has to have. It's a must permission because to this page user is redirected once he logins to the system.

> front -> default