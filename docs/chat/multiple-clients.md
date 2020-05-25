---
id: multiple-clients
title: Multiple clients
sidebar_label: Multiple clients
---

Since 3.29v you can setup Live Helper Chat in a such way so it could support multiple clients at once. Altough the best way to support multiple clients is just use automated hosting extension.

:::important
I assume you are running at-least 3.29v default setup.
:::

## Creating departments

First we have to create two departments. `Client A` and `Client B`. We do not change anything there.

## Creating users groups

We create two users groups

> System configuration -> Users -> List of groups

We create group `Client A` and then `Client B`. This is required only if you are planning to have more than one operator per company. If it will be only one operator per company, you can skip this step and just remove permissions to see users from same group.

After that to each group we assign `Operators` role.

​![](/img/multi-clients/assign-role.png)

## Creating users

We create user `clienta` and choose his group as `Client A`

​![](/img/multi-clients/user-groups.png)

We assign him `Client A` department.

​![](/img/multi-clients/assign-department.png)

We do same steps with `clientb` user.

## Adjusting operators role permissions

### Removing permissions

Remove permission to see assigned departments so operator won't see other clients departments.

> 'lhuser', 'see_assigned_departments'

By default operators can see all online visitors we want to remove this permission. We do this by editing `Operators` role and removing.

> 'lhchat', 'sees_all_online_visitors'

By default operator sees all operators from group he belongs to. Now is possible to remove this permission by deleting. After you do that operator will see only himself in operators list and not a members of the group he belongs to.

> 'lhuser', 'see_all_group_users'

If you do not want operator to be able to see logged operators from his department remove this permission.

> 'lhuser', 'userlistonline'

If you do not want to allow an operator to see in general online visitors remove this permission.

> 'lhchat','use_onlineusers'

Remove permission for other modules

```
'lhquestionary', 'manage_questionary'
'lhfaq','manage_faq'
'lhchatbox', 'manage_chatbox'
'lhbrowseoffer', 'manage_bo'
```

### Adding permissions

Giving permission to view statistic. We grant `Operators` role these permissions.

```
'lhstatistic','exportxls'
'lhstatistic','viewstatistic'
```

Giving permission to edit his own department. We grant `Operators` role these permissions.

```
'lhdepartment','list'
'lhdepartment','edit'
'lhdepartment','actworkflow'
'lhdepartment','actautoassignment'
```

Giving permission to upload files.

```
'lhfile','file_list'
'lhfile','upload_new_file'
```

Giving permission to auto-responder

```
'lhchat','administrateresponder'
'lhuser','personalautoresponder'
```

Giving permission to generate embed code

```
'lhsystem,'generate_js_tab'
'lhsystem','generatejs'
```

Giving permissions to work with subjects

```
'lhchat', 'setsubject'
'lhchat', 'administratesubject'
```

Giving permissions to work with Proactive Invitations
```
'lhchat', 'administrateinvitations'
```

These items are not supported and you should not give them permissions to work with these

* Pro active chat variables
* Pro active chat events
* Pro active chat campaigns

## FAQ

### My client want more than one department. Is it supported?

Yes.

### Can clients user multiple domains?

Yes.

### My client want to have custom start chat form fields?

You can just use [Start chat form fields](chat/start-chat-form-settings.md)

### How do I match their site design?

You can use [themes](theme/theme.md) and while generating embed code for them you can choose theme to use.

### I want to give them permission to `X Function` but it does not support multiple clients?

Just contact me and maybe I can help you.

### Unsupported features in multiple clients environment

 * Survey
 * Themes. Although you can make a theme and just give them it's number.
 * Product
 * Bot
 * Web push notifications subscribers
 * Additional chat columns/variables.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t2mzEE3sTss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>