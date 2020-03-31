---
id: multiple-clients
title: Multiple clients
sidebar_label: Multiple clients
---

Since 3.29v you can setup Live Helper Chat in a such way so it could support multiple clients at once. Altough the best way to support multiple clients is just use automated hosting extension.

:::information
I assume you are running at-least 3.29v default setup.
:::

## Creating departments

First we have to create two departments. `Client A` and `Client B`. We do not change anything there.

## Creating users groups

We create two users groups

> System configuration -> Users -> List of groups

We create group `Client A` and then `Client B`

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

> 'lhchat','see_all_online_visitors'

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

## FAQ

### My client want more than one department. Is it supported?

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
 * Proactive invitation
 * Bot
 * Web push notifications subscribers
 * Additional chat columns/variables.
