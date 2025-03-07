---
id: account
title: Account
---

## Introduction

This article explains user account and permission options.

## Account

Operators can access their accounts by clicking the menu icon in the top right corner.

![](/img/user/account-dropdown.jpg)

Once logged in, the account will appear as follows:

![](/img/user/account.png)

### Permissions

The following permission is required to access the account page:

> 'lhuser','selfedit'

### Attributes

*   `Chat nickname`: This is the operator name that visitors will see during a chat.
*   `Job title`: The job title is visible in the operator profile section of the chat widget.
*   `I receive other operators permissions request`: This setting ensures that the operator receives an email when another operator requests permissions.
*   `Skype`: If an operator enters their Skype ID, a Skype icon will be displayed.

## Assigned departments

​![](/img/user/assigned-departments.png)

If an operator selects the checkbox to the left of the `eye` icon, they will have read access to the department's chats but will not be able to accept or participate in chats.

### Permissions

The following permissions are required to access the assigned departments tab and view assigned departments:

> 'lhuser','see_assigned_departments'

The following permissions are required to access the assigned departments tab and view assigned departments groups:

> 'lhuser','see_assigned_departments_groups'

The following permission is required to edit assigned departments/departments groups. Without this permission, the list will be rendered without the possibility for the operator to edit assigned departments. This permission allows choosing departments and department groups.

> 'lhuser','editdepartaments'

The following permission is required to choose all departments in account edit:

> 'lhuser','self_all_departments'

If an operator has `'lhuser','editdepartaments'` but does not have either `'lhuser','see_assigned_departments'` or `'lhuser','see_assigned_departments_groups'`, they will still not be able to edit their own departments.

## Visible lists

Users can choose which lists they can see.

![](/img/user/visible-lists.png)

### How to disable bot chats for an operator?

You can disable this window for an operator and remove the option to see bot chats, so the operator will not see bot chats.

### Permissions

The following permission is required to change lists:

> 'lhuser','change_visibility_list'

## Personal canned messages

Users can also have personal canned messages that are visible only to them. [Required permissions](canned.md#permission).

​![](/img/user/personal-canned-messages.png)

## Personal auto responder

Users can also have a personal auto-responder. Personal response messages will override default auto-responder messages. [Required permissions](auto-responder.md#permission).

​![](/img/user/personal-auto-responder.png)

:::important
An auto-responder for the department must also be set up.
:::

## Chats

Users can change a few general settings related to the chat workflow.

​![](/img/user/account-chats.png)

### I can see all pending chats, not only those assigned to me

By default, the dashboard's `Pending widget` shows all pending chats. You can force the pending widget to show only chats assigned to you by checking this option.

You can disable this option for an operator by removing the following permission:

> 'lhuser','allowtochoosependingmode'

### Automatically accept assigned chats

The system will automatically open the assigned chat tab while you are on the dashboard page.

### Exclude me from auto-assign workflow

Suppose you are a Supervisor and want to accept chats but do not want to participate in the auto-assignment workflow. This option is for you.

### Auto-preload previous visitor chat messages

The chat will automatically preload previous chat messages if the visitor has had any chats before.

### Auto-uppercase sentences

The system will automatically uppercase operator sentences.

### Maximum active chats

You can set the maximum number of active chats you can have. This will prevent any new chats from being assigned to you if this number is reached. More information about [auto assignment](auto-assignment.mdx).

### Remove my closed chats from the opened chat list on page refresh

Chats will be removed from open chat tabs if:

*   The chat is closed.
*   You are the chat owner.
*   The chat was closed at least 5 minutes ago.

### Permissions

The following permission is required to view this tab:

> 'lhuser','allowtochoosependingmode'

## Speech

In the speech section, you can set up default speech settings. If you choose languages you speak, the auto-assign workflow will try to assign these chats to you first.

​![](/img/user/speech-language.png)

### Permissions

Required permissions:

> 'lhspeech','changedefaultlanguage'

## Permissions

This section allows you to quickly see which modules/functions you have access to. Users can also request permission to access a specific module using the `Request permission` button. An email is sent to the user who has checked `I receive other operators permissions request`.

To grant the permission itself, you have to edit the `Role` and manually assign the requested permission.

​![](/img/user/permissions.png)

### Permissions

Required permissions:

> 'lhpermission','see_permissions'

## Notifications

In this section, operators can configure settings related to new chat notifications and enable activity tracking so that operators go offline/online automatically. Related information: [how to automate online offline status](../offline-online-automation.md)

In this window, operators can also:

*   Turn on/off sound notifications for a pending chat.
*   Turn on/off sound notifications for new messages.
*   Show or not show an alert for a new chat.
*   Hide/Show quick notifications at the top left corner of the app.
*   Subscribe to browser notifications for new chats.
*   Choose to hide notifications for pending chats if they are not the owner.
*   Subscribe to browser notifications.

# FAQ

### My operators do not hear a sound when a new chat comes in. What could be the issue?

Make sure they have turned on sound notifications in `Account > Notifications`. There are two sound notification icons: one for new chats and the other for new messages. Also ensure that:

*   The operator can see the pending chat in their dashboard.
*   The operator has interacted with a back-office page. Click anywhere in the dashboard. Recommended.
*   The chat should be in a pending state or pending and assigned to the operator.
*   The operator should use `Request notification permission` for maximum alert for new chats.
*   The operator will not hear a sound after refreshing the back office, only for new incoming chats.

​![](/img/user/notifications.png)
