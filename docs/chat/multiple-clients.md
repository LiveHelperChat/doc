---
id: multiple-clients
title: Multiple clients
sidebar_label: Multiple clients
---

Since version 3.29, Live Helper Chat can be configured to support multiple clients simultaneously. However, the recommended approach for supporting multiple clients is to use the automated hosting extension.

:::important
This guide assumes you are using at least version 3.29 with the default setup.
:::

## Creating Departments

First, create two departments named "Client A" and "Client B". Leave the default settings unchanged.

## Creating User Groups

Create two user groups:

> System configuration -> Users -> List of groups

Create a group named "Client A" and another named "Client B". This step is necessary only if you plan to have more than one operator per client. If each client will have only one operator, you can skip this step and instead remove permissions to view users from the same group.

After creating the groups, assign the `Operators` role to each group.

​![](/img/multi-clients/assign-role.png)

## Creating Users

Create a user named "clienta" and assign them to the "Client A" group.

​![](/img/multi-clients/user-groups.png)

Assign the user to the "Client A" department.

​![](/img/multi-clients/assign-department.png)

Repeat these steps for the "clientb" user.

## Adjusting Operator Role Permissions

### Removing Permissions

Remove the permission to view assigned departments so that operators cannot see other clients' departments.

> 'lhuser', 'see_assigned_departments'

By default, operators can see all online visitors. To remove this permission, edit the `Operators` role and remove the following permission:

> 'lhchat', 'sees_all_online_visitors'

By default, an operator can see all operators from the group they belong to. You can remove this permission by deleting it. After doing so, the operator will see only themselves in the operators list, and not other members of their group.

> 'lhuser', 'see_all_group_users'

If you do not want an operator to be able to see logged-in operators from their department, remove this permission:

> 'lhuser', 'userlistonline'

If you do not want to allow an operator to see online visitors in general, remove this permission:

> 'lhchat','use_onlineusers'

Remove permissions for other modules:

```
'lhquestionary', 'manage_questionary'
'lhfaq','manage_faq'
'lhchatbox', 'manage_chatbox'
'lhbrowseoffer', 'manage_bo'
```

### Adding Permissions

Grant permission to view statistics. Assign the following permissions to the `Operators` role:

```
'lhstatistic','exportxls'
'lhstatistic','viewstatistic'
```

Grant permission to edit their own department. Assign the following permissions to the `Operators` role:

```
'lhdepartment','list'
'lhdepartment','edit'
'lhdepartment','actworkflow'
'lhdepartment','actautoassignment'
```

Grant permission to upload files:

```
'lhfile','file_list'
'lhfile','upload_new_file'
```

Grant permission to use auto-responders:

```
'lhchat','administrateresponder'
'lhuser','personalautoresponder'
```

Grant permission to generate embed code:

```
'lhsystem','generate_js_tab'
'lhsystem','generatejs'
```

Grant permissions to work with subjects:

```
'lhchat', 'setsubject'
'lhchat', 'administratesubject'
```

Grant permissions to work with Proactive Invitations:
```
'lhchat', 'administrateinvitations'
```

The following items are not supported, and you should not grant permissions to work with them:

* Proactive chat variables
* Proactive chat events
* Proactive chat campaigns

## FAQ

### My client wants more than one department. Is this supported?

Yes.

### Can clients use multiple domains?

Yes.

### My client wants to have custom start chat form fields?

You can use [Start chat form fields](chat/start-chat-form-settings.md).

### How do I match their site design?

You can use [themes](theme/theme.md). When generating the embed code for them, you can choose the theme to use.

### I want to give them permission to "X Function," but it does not support multiple clients.

Contact me, and I may be able to help you.

### Unsupported Features in a Multiple Client Environment

 * ~~Survey~~ See [Multiple clients support in survey](chat/survey.md#multiple-clients-support)
 * Themes. However, you can create a theme and provide them with its ID.
 * Product
 * Bot
 * Web push notifications subscribers
 * Additional chat columns/variables.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t2mzEE3sTss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
