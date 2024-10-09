---
id: dashboard
title: Dashboard
---

## Introduction

All work by default are happening in dashboard. Operators during work session does not have to use any other window. Operator here is able to

* Drag & Drop widgets
* Chat with customers
* See departments/operators statistic

## Required permissions for chat listing

In short grant `'lhchat','list_all_chats'`(required) **or** `'lhchat','list_my_chats'`(required) `'lhchat','list_pending_chats'`(optional)

[More information](chat/list.md)

## Required permissions for mail listing

In short grant `'lhmailconv','list_all_mails'`(required) **or** `'lhmailconv','list_my_mails'`(required) `'lhmailconv','list_pending_mails'`(optional)

[More information](mail/list.md)

## Dashboard widgets

Default dashboard widgets. It's default look you should get once you login to back office first time.

​![](/img/dashboard/dashboard.png)

### Online operators

![](/img/dashboard/operators-online.png?v=2)

#### Required configuration

Operator can see only operator from the departments he is assigned to **OR** he has `All departments` checked.

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

In order to enable messaging other operators ![](/img/dashboard/start-chat-operator.png) through the Online operators following module has to be enabled:

>'lhgroupchat', 'use'

This is part of the `Group chats` functionality.

#### Offline indicators

If the operator recently went offline, there is icons which shows that

* Time offline < 60 seconds color will be ![#90EF90](https://placehold.co/15x15/90EF90/90EF90.png)
* Time offline > 60 [1m.] AND Time offline <= 120 [2m.] seconds color will be ![#B0F5AB](https://placehold.co/15x15/B0F5AB/B0F5AB.png)
* Time offline > 120 [2m. 1s.] AND Time offline <= 360 [6m.] seconds color will be ![#CDFFCC](https://placehold.co/15x15/CDFFCC/CDFFCC.png)
* Time offline > 360 [6m. 1s.] AND Time offline <= 600 [10m.] seconds color will be ![#FFCCCB](https://placehold.co/15x15/FFCCCB/FFCCCB.png)
* Time offline > 600 [10m. 1s.] AND Time offline <= 900 [15m.] seconds color will be ![#FC94A1](https://placehold.co/15x15/FC94A1/FC94A1.png)
* Time offline > 900 [15m. 1s.] AND Time offline <= 3600 [1h.] seconds color will be ![#FC6C85](https://placehold.co/15x15/FC6C85/FFC6C85.png)

After one-hour icon disappears.

### Ongoing trigger alerts!

This widget shows only chats with specific triggers selected. It's usefull for monitoring purposes to see only chats with specific subjects.

* It also plays sound independently on sound settings of operator.
* Notification is shown based on operator settings.
* Sound played - `design/defaulttheme/sound/subject_chat.mp3`
* By default, once enabled, we show all chats which has at-least one subject set

![](/img/dashboard/ongoing-trigger-alerts.png?v=2)

For managers, I recommend having something like that in their account

* They will see subject notifications and chats only if it's assigned to them.

![](/img/dashboard/trigger-alerts-manager.png)


#### Required configuration

To see subjects widget

> 'lhchat','subject_chats'

To be able to set subjects filter for that widget and set mobile notifications for specific chat subjects.

> 'lhchat','subject_chats_options'

### Departments stats

You can see present department's statistic.

![](/img/dashboard/departments-stats.png?v=2)

Columns and their meanings

* `Pending chats` - number of pending chats department/department group has
* `Active chats` - number of actives chats department/department group has
* `Bot chats` - number of active bot chats
* `Load columns` - current status of department load based on max chats operators can have.
    * It's value is calculated  by `hard limit - active chats (soft limit - active chats)`
    * `Hard limit` - is the sum of max chats value of **logged** operators OR the operators who were online in last 10 minutes
    * `Active chats` - number of active chats in department or department group
    * `Soft limit` - is the sum of max chats of operators who were **active** during last **10** minutes.

Operator also can click on `Load column` and see detailed load statistic.

![](/img/dashboard/load-modal.png)

> Statistics will be update when first event happen after change on settings (es. user chat limits)

#### Required configuration

In order for operators to see his own department statistic he has to have this permission

> 'lhuser','canseedepartmentstats'

To see all departments statistic, not only assigned to him - this permission is also required.

> 'lhuser','canseealldepartmentstats'

In order to see download stats icon this permission is required.

> 'lhstatistic', 'exportxls'

To see department detailed load statistic by clicking on `Load column` operator has to have this permission

> 'lhstatistic','statisticdep'

### Online visitors

In this widget you will see your site visitors.

![](/img/dashboard/online-visitors.png?v=2)

Background colors and their meanings

* blue background - page view happened in the last 15 seconds
* green background - is visitor still connected check happened less than `Chat configuration < Visitor activity < Interval between chat status checks in seconds, 0 disabled.`
* grey - visitor check for online was missed

Text colors and their meanings

* green text - is visitor still connected check happened less than `Chat configuration < Visitor activity < Interval between chat status checks in seconds, 0 disabled.`
* yellow text - check was received `Chat configuration < Visitor activity < Interval between chat status checks in seconds, 0 disabled.` + 300 seconds *OR* if activity tracking is enabled and check is received + 10 seconds
* grey text - visitor is offline

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

By default operator does not have permission to set custom filters for that widget. This is default because if auto assignment is setup and operator set's filter he might miss a chat from other departments.

> 'lhchat','my_chats_filter'

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

### Closed chats

Shows recently closed chats. Up to 50 last closed chats. Limit is because of performance. We take last 50 chats and return only closed ones.

![](/img/dashboard/closed-chats.png)

Permissions for chat opening is explained [here](chat/chat.md#permissions-influencing-chat-opening-permissions)

#### Required configuration

* `Chat configuration -> Misc -> List closed chats, disabled for high performance` check and save
* In dashboard configuration choose `Closed chats`
* In `Account -> Visible` lists page he has to active `Closed chats list enabled`

### Unread chats

Shows chats where there is indication about an unread message. Up to 50 unread chats. Limit is because of performance. We take last 50 chats and return only chats with unread messages. Usually there is no requirement to have this list because active chat list has indication about an unread message in any case.

![](/img/dashboard/urnead-chats.png)

#### Required configuration

* `Chat configuration -> Misc -> List unread chats, disabled for high performance` check and save
* In dashboard configuration choose `Unread chats`
* In `Account -> Visible` lists page he has to active `Unread chats list enabled`

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

For the operator to see this widget he has to have

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

​![](/img/dashboard/dashboard-tabs-settings.png)


### Open my active chats

Clicking this button will load your active chats. Limit of 10 chats applies.

### Keep my active chats

We will automatically load your active chats in chat window. Limit of 10 chats applies. If you want to see your open chats even if you opened some in other windows makes sense to have this checked.

### hide nick for offline chats

If you choose to `hide nicknames for offline chats`. You will get similar look to this. Chat where visitor is gone will be without nick.

​![](/img/dashboard/hide-nick-for-offline.jpg)

### Reset widget filters

Sometimes operators applies so many filters and get lost why he seems/or does not see all chats. This will reset all applied operator custom filters and will leave default only.

### Old dashboard

You can switch to old dashboard without left column. This option will be removed over time.

### In static/dynamic chats order mode

Dynamic mode - default
* If chat is clicked it's position always will be at the top of chats
* If customer replies his chat will move to the top of chat list.

Static mode
* Opened chats will be placed from lowest to highest ID (by chat start time).
* Visitor message won't move chat to the top of chat list

### Hide/Show chat tabs

If you are using new dashboard and don't want to see tab of opened chat you can disable that.

### Tabs/List in left column

You can switch left column to tab mode or have it as a list.

## Icons and their meanings

### Main icons in the widgets

* ![](/img/dashboard/icons/send-received.png) - last message we send was received by visitor
* ![](/img/dashboard/icons/send-received-not.png) - last message we send was **not** received by visitor
* ![](/img/dashboard/icons/visitor-online.png) - visitor is connected
* ![](/img/dashboard/icons/visitor-online-not.png) - visitor is **not** connected anymore
* ![](/img/dashboard/icons/we-send-last-message.png) - we have sent the last message
* ![](/img/dashboard/icons/we-received-last-message.png) - we have received the last message
* ![](/img/dashboard/icons/timer-wait.png?v=1) - visitor is waiting reply from us longer than defined amount of time in `(Chat configuration -> Misc -> How long we should wait before we inform operator about unanswered chat.)` and chat is not closed. `($chat->status != erLhcoreClassModelChat::STATUS_CLOSED_CHAT && $chat->last_user_msg_time > ($chat->last_op_msg_time > 0 ? $chat->last_op_msg_time : $chat->pnd_time) && (time() - $chat->last_user_msg_time > (int)erLhcoreClassModelChatConfig::fetchCache('vwait_to_long')->current_value) ? erLhcoreClassChat::formatSeconds(time() - $chat->last_user_msg_time) : null));`
* ![](/img/dashboard/icons/red-background.png) - red background is for the same reason as above

### Information icon

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

> widgets: online_operators, departments_stats, pending_chats, unread_chats, transfered_chats, active_chats, closed_chats, bot_chats, my_chats

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
