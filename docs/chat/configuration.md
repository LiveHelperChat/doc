---
id: configuration
title: Chat configuration
sidebar_label: Chat configuration
---

## Introduction

This is main window where all the tricky :smile: things can be configured.

You can these settings in

> System configuration -> Chat configuration

​![](/img/chat-configuration/chat-configuration.png)

## Notifications about new chats

This is the same settings operator can change from his [account page](users/account.md#notifications).

## Copyright settings

### Application name

Here you can change basic copyright settings globally.

​![](/img/chat-configuration/copyright-settings.png)

### Site settings

Here you can change.
 * Copyright text visible in the bottom right corner
 * Terms of service URL visible as link within checkbox during start chat workflow.

​![](/img/chat/site-settings.png)

## Online tracking

In this section can be found all the settings related to online tracking.

​![](/img/chat-configuration/online-tracking.png)

### Which ip should be ignored in online users list, separate by comma

[More information](blocking.md#how-to-block-users-from-appearing-on-online-users-list)

### Which ip should not be allowed to chat

[More information](blocking.md#how-to-block-users-from-starting-a-chat)

### Enable online site visitors tracking

If you disable this option online visitor won't be tracked. This will also disable following items.

 * Proactive invitations
 * Online visitors list
 * Previous chats detection

### Track online visitors even if there is no online operators

It only effects old widget. If you are using new widget it can be ignored as it does nothing.

### Show need help tooltip?

This one tells should we show [need help](need-help.md) tooltip or not.

### Need help tooltip timeout, after how many hours show again tooltip?

Once visitor closes need help tooltip after how long we should show it again to him?

### Play sound on invitation to chat.

Should we play sound for a visitor when invitation it shown to him.

:::tip
New widget does not support this yet.
:::

### Is pro active chat invitation active. Online users tracking also has to be enabled.

Enables/Disables proactive invitations in general.

### Should invitation logic be executed if there is no online operators

It effects only old widget. In a new widget invitations are shown only if there is online operators.

:::tip
This feature will be added to a new widget over time.
:::

### Proactive message timeout in hours. 

After how many hours proactive chat mesasge should be shown again.

### Pro active chats invitations limitation based on pending chats. 

We will show invitation if only pending chats number satisfies required conditions.

(-1) do not limit, (0,1,n+1) number of pending chats can be for invitation to be shown.

### Track users footprint. 

For this also online visitors tracking should be enabled.

### Footprint updates should be processed in the background. 

When chat starts we have to assign pageviews to a specific chat. As footprint table can get quite bit this operation takes time. So it makes sense just to delegate this task to background.

Make sure you are running [workflow cronjob](development/cronjob.md#default-cronjob-setup).

### Cleanup should be done only using cronjob.

Time from time then new visitor comes we use this event to clean up online visitors tables. If record is older then defined `How many days keep records of online users.` setting. As this table can get quite big to avoid UI delay makes sense just to have this work happening in the background.

Make sure you are running [workflow cronjob](development/cronjob.md#default-cronjob-setup).

### How many days keep records of online users.

Defines how long we should keep online users record from his last activity.

### How many days keep records of users footprint.

Older records than defined amount will be deleted.

### How long department availability statistic should be kept? (days)

If you are using [department availability chart](chat/statistic.md#departments) you can define how long we should store this data.

Make sure you are running [workflow cronjob](development/cronjob.md#default-cronjob-setup).

### How long keep operators online sessions data? (days)

This data is used to generate [agents performance statistic](chat/statistic.mdx#agents-statistic), but over time this table can get quite big so makes sense just have limited days this data should be stored.

Make sure you are running [workflow cronjob](development/cronjob.md#default-cronjob-setup).

## Misc

In this section can be found all the :smile: tricky settings. Most of the time you do not need to touch anything unless you want to play around.

### Set your domain to enable user tracking across different domain subdomains.

This overrides javascript options and set's cookie always under defined domain. If you want more security and you will use chat only for one domain makes sense to enter this site domain. It has to be plain value like `example.com`

### Domains where script can be embedded. E.g example.com, google.com

If you want to add more security and allow Live Helper Chat script to be embeded just on specific domain(s). You can set your domain here.
Domain's has to be separated by a comma. E.g

> livehelperchat.com, google.com

### Please enter explicit http mode. Either http: or https:, do not forget : at the end.

If you want to be more explicit how data is going http or https you can set this to `https:` or `http:`. Usually there is no need to touch this parameter.

### Cookie should be valid only for domain where Javascript is embedded (excludes subdomains)

Usually then you define domain in embed code 'example.com' cookie is valid also for subdomains. So chat can work within same domain and subdomains. If you want chat to be working only within exact domain you can check this option.

:::tip
New widget does not support this and if domain is defined it set's cookie for subdomains also. If you do not define domain in new widget it will work only within domain scope. So in general you can control how all works in a new widget based what you pass as domain.
 * No domain - works only within domain
 * You define domain - works also within subdomains. 
:::

### Use secure cookie, check this if you want to force SSL all the time

If you are using https connection all the time makes sense to check this as this will make chat cookie available only in secure `https://` mode.

### List online operators.

Please refer to [online operators](dashboard.md#why-i-cant-see-online-operators) article.

### List closed chats

There can be thousands of closed chats and to render only 10 of takes really put's stress on server. So this list is disable by default. See [performance](performance.md) article.

### Disable live auto assign

More information about [auto assignment](auto-assignment.mdx)

### List unread chats

Unread chats list just like closed chats can become very big and slow down dashboard UI so this option is disabled by default also.

### Preload widget. It will avoid loading delay after clicking widget

This option influences only old widget. Preloads widget content for old widget so it makes UI feel faster.

### Disable option in widget to open new window. Restore icon will be hidden

This option enables/disables for visitor return to widget window from popup window.

:::tip
Not supporter in a new widget yet.
:::

### Show BB Code button

Not used anymore and will be removed over time.

### Reopen chat functionality enabled

Only active for older widget. Means visitor can reopen closed chats.

### Reopen closed chat as new? Otherwise it will be reopened as active.

Does what it tells :smile:.

### Automatically reopen chat on widget open

Does what it tells :smile:.

### Allow user to reopen closed chats?

Does what it tells :smile:.

(automatic chat's closing/purging)[auto-close-delete.md]

### How many seconds customer has to open already closed chat.

This value controls how long visitor can access chat which was closed by the operator, this applies only after page refresh.

### Make default pending chats order from old to new

You can change here default order of pending chats.

### Minimum phone number length

This is requirement for phone number user has to enter before starting a chat.

### Chats export secret hash

This has is used for exporting chats using `export` module. Please use Rest API just instead of this module.

### Which ip should be allowed to update DB by executing http request, separate by a comma?

We have option to update database without loggin to database by executing request to

> system/autodbupdate

It does not require any permissions just valid IP which can be set in this field.

### How many seconds chat accept link is valid. Set 0 to force login all the time manually.

When we send chat acceptance link we can define how long this link is valid. This link is generated when unanswered chat event accours.

### How long operator should go offline automatically because of inactivity. Value in minutes

[More information](offline-online-automation.md)

### Track all logged operators activity and ignore their individual settings.

[More information](offline-online-automation.md)

### Disable chat print

Hides print option from a visitor chat widget.

### Disable chat transcript send

Hides option for a visitor to print a chat.

### Maximum message length in characters

Visitor won't be able to send longer message than define value.

### Messages box height

Sets default messages are height for a visitor. It influences only old widget.

### Messages box height for operator

You can set default height for the messages area for the operators.

### Default number of online operators to show

Tells how many online operators show by default. Untill operator chooses his own value.

### Hide disabled department widget

If we find that passed department is disabled we should not show a widget otherwise these departments are excluded.

### Home page tabs order 

[More information](dashboard.md)

### Hide right column in frontpage

[More information](dashboard.md)

### Suggest user to leave a message then user chooses offline department

When visitor chooses offline department should we suggest him to leave a message instead, because most likely chat won't be accepted just.

:::tip
Not supporter in a new widget yet.
:::

### How many days voting widget should not be expanded after last show

Related to voting widget functionality. Pending article...

### Ignore users online statuses and use departments online hours

[Read article](online-hours.md)

### Is visitor e-mail required for FAQ

Related to FAQ module. Pending article...

### Show users option to switch language at widget

In old widget user can choose language before starting a chat. This option will not be supported in new widget because we can use just language detection options.

### Between what languages user should be able to switch

Related to above item.

### Chat closing options

[Read article](automatic-closing-purging.md)

### Hide close button in dropdown

By default visitor can close chat either from top right in widget or from settings dropdown menu. This option leaves the only option to close chat from widget top menu.

### On chat close exit chat

When visitor minimizes chat we should close chat. Influence only old widget.

### Chat duration

[Read article](chat/duration.md)

## Visitor activity

### Interval between chat status checks in seconds, 0 disabled.

This determines should status widget change it's status once operator logins. Recommended value 290.

[More information](integrating.md#how-to-make-automatic-status-change-for-frontend-visitors)

### Track is user still on site, chat status checks also has to be enabled

### Track users activity on site?

We will track is user on website based on his activity on website instead of last messages sync time.

### Should mouse movement be tracked as activity measure, if not checked only basic events would be tracked

As mouse movements takes more resources we can active or deactive it.

## Workflow

In this section you can set some basic workflow parameters related to

* Unanswered messages.
* [Department transfer](department-transfer.md) workflow.
* Informing visitor about unread messages from operator.

## Screen sharing

Settings related to screen sharing.

## Data protection

[More information.](anonymize.md)

## Permissions

Required permission to access this page in general.

> 'lhchat','administrateconfig'