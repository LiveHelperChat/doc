---
id: advanced-permissions
title: Advanced Permissions
---

This document explains how to set up a three-level permission system.

*   Operators
*   Team Leaders
*   Managers
*   Administrators

*   Before reading further, review the [Account Edit Permissions section](users/account-edit.md) for important information regarding which assigned departments operators can view.
*   Before reading further, review [Transfer Permissions](chat/transfering-chat.md) for important information on how to limit the operators an operator can see when transferring a chat.

You can also download and import a [sample database dump with all configurations](/img/user/livehelperchat_install.sql). The administrator username and password is `admin`.

## Requirements

We will create two department groups:

*   Departments US
*   Departments AU

Operators from the `AU Operators` group should not be able to read chats from `Departments AU`, and vice versa.

Team leaders will be able to edit/create new users only from user groups they are members of. They will also be able to set department groups they are members of.

## Departments

| ID  | Name           |
| --- | -------------- |
| 1   | Departments AU |
| 2   | Departments US |

## Department Groups

| Name           | Members          |
| :------------- | :--------------- |
| Departments AU | Departments AU   |
| Departments US | Departments US   |

## Groups

1.  Operators
2.  Team Leader
3.  Managers
4.  AU Managers
5.  US Managers
6.  US Team Leaders
7.  AU Team Leaders
8.  AU Operators
9.  US Operators
10. Administrators

### Operators Group

*   `Required` is checked.
*   Assigned the `Operators` role.

### Team Leader Group

*   `Required` is checked.
*   `Member of this group can work with the following groups` - `Operators`
*   Assigned the `Teamleader` role.

### Managers Group

*   `Required` is checked.
*   Assigned the `Operators`, `Teamleader`, and `Managers` roles.

### US Operators Group

*   Assigned the `Operators US` role.

### AU Operators Group

*   Assigned the `Operators AU` role.

### US Team Leaders Group

*   `Member of this group can work with the following groups` - `US Operators`

### AU Team Leaders Group

*   `Member of this group can work with the following groups` - `AU Operators`

### AU Managers Group

*   `Member of this group can work with the following groups` - `AU Operators`, `AU Teamleaders`

### US Managers Group

*   `Member of this group can work with the following groups` - `US Operators`, `US Teamleaders`

## Roles

1.  Administrators
2.  Operators
3.  Teamleader
4.  Rest API
5.  Operators AU
6.  Operators US
7.  Managers

## Role Structure

### Operators Role

```text
Module                          Function                                                        Limitation
Canned Messages (lhcannedmsg)   Allow operator to see global canned messages (see_global)
Canned Messages (lhcannedmsg)   General permission to use canned messages module (use)
Chat (lhchat)                   Allow operator to block visitors (allowblockusers)
Chat (lhchat)                   Allow operator to use chat rooms functionality (allowchattabs)
Chat (lhchat)                   Allow operator to open other operators chats from same department (allowopenremotechat)
Chat (lhchat)                   Allow operator to redirect user to another page (allowredirect)
Chat (lhchat)                   Allow user to transfer chat to another user (allowtransfer)
Chat (lhchat)                   Allow operator to transfer chat directly to other operator (allowtransferdirectly)
Chat (lhchat)                   Allow operator to use chrome extension (chattabschrome)
Chat (lhchat)                   Allow operator to edit their previous messages (editprevious)
Chat (lhchat)                   Allow operator to explore canned messages. They will see canned messages based on departments they are a member of. (explorecannedmsg)
Chat (lhchat)                   Allow operator to open all chats, not only assigned to them (open_all)
Chat (lhchat)                   Allow operator to see previous chats from a visitor (prev_chats)
Chat (lhchat)                   Operator can see all online visitors, not only their department (sees_all_online_visitors)
Chat (lhchat)                   Allow operator to use single chat window functionality (singlechatwindow)
Chat (lhchat)                   Allow operator to take visitor browser page screenshots (take_screenshot)
Chat (lhchat)                   General permission to use chat module (use)
Chat (lhchat)                   Allow operator to view online visitors (use_onlineusers)
Chat (lhchat)                   Allow operator to write to another operator's chat (writeremotechat)
Chatbox (lhchatbox)             Allow user to manage Chatbox module (manage_chatbox)
CO Browse module (lhcobrowse)   Allow operator to use co-browse functionality (browse)
FAQ (lhfaq)                     Allow user to manage FAQ (manage_faq)
Files module (lhfile)           Allow operators to delete their chat files (file_delete_chat)
Files module (lhfile)           Allow operators to send files to visitors (use_operator)
Frontpage (lhfront)             General frontpage use permission (use)
Generic Bot (lhgenericbot)      Allow operator to change bot notifications settings (use_operator)
Group chats module (lhgroupchat)  Allow operator to use private/public groups (use)
Permissions configuration (lhpermission)  Allow operator to see their permissions (see_permissions)
Questionary/Voting (lhquestionary) Allow user to manage questionary (manage_questionary)
Speech module (lhspeech)        Allow operator to change chat recognition language (change_chat_recognition)
Speech module (lhspeech)        Allow user to change their personal speech recognition language (changedefaultlanguage)
Speech module (lhspeech)        Allow operator to use speech recognition module (use)
Statistic module (lhstatistic)
System configuration (lhsystem)   Allow user to change their languages (changelanguage)
System configuration (lhsystem)   Allow user to see configuration links (use)
Theme (lhtheme)                 Allow operators to have their own personal back office theme (personaltheme)
Theme (lhtheme)                 Allow operator to preview trigger (use_operator)
Translation module (lhtranslation) Allow operator to use automatic translations (use)
Users, groups management (lhuser) Allow user to choose what pending chats they can see, only assigned to them or all. (allowtochoosependingmode)
Users, groups management (lhuser) Allow user to choose what list should be visible by them, pending/active/unread/closed (change_visibility_list)
Users, groups management (lhuser) Allow user to change their online status (changeonlinestatus)
Users, groups management (lhuser) Allow user to have personal canned messages (personalcannedmsg)
Users, groups management (lhuser) Allow user to see all group users they belong to. (see_all_group_users)
Users, groups management (lhuser) Allow user to see department groups assigned to them (see_assigned_departments_groups)
Users, groups management (lhuser) Allow user to edit their own data (selfedit)
Users, groups management (lhuser) Allow user to see logged operators list, only from their department (userlistonline)
Views module (lhviews)            Allow operator to use views (use)
Voice & Video & ScreenShare (lhvoicevideo) Allow operator to use Voice & Video & ScreenShare calls (use)
Live helper Chat XML service (lhxml) All functions (*)
```

### Team Leaders Role

```text
Module                          Function                                                        Limitation
Canned Messages (lhcannedmsg)   Allow operator to see global canned messages (see_global)
Canned Messages (lhcannedmsg)   General permission to use canned messages module (use)
Chat (lhchat)                   Allow operator to change canned messages (administratecannedmsg)
Chat (lhchat)                   Allow operator to block visitors (allowblockusers)
Chat (lhchat)                   Allow operator to close another operator's chat (allowcloseremote)
Chat (lhchat)                   Allow operator to open other operators' chats from the same department (allowopenremotechat)
Chat (lhchat)                   Allow operator to redirect user to another page (allowredirect)
Chat (lhchat)                   Allow user to transfer chat to another user (allowtransfer)
Chat (lhchat)                   Allow operator to transfer chat directly to another operator (allowtransferdirectly)
Chat (lhchat)                   Allow operator to use chrome extension (chattabschrome)
Chat (lhchat)                   Allow operator to explore canned messages. They will see canned messages based on departments they are a member of. (explorecannedmsg)
Chat (lhchat)                   Allow operator to explore canned messages. They will see all departments' canned messages. (explorecannedmsg_all)
Chat (lhchat)                   Allow operator to export filtered chats (export_chats)
Chat (lhchat)                   Allow operator to open all chats, not only assigned to them (open_all)
Chat (lhchat)                   Allow operator to see previous chats from a visitor (prev_chats)
Chat (lhchat)                   Operator can see all online visitors, not only their department (sees_all_online_visitors)
Chat (lhchat)                   Allow operator to send e-mail to a visitor from the chat window (sendmail)
Chat (lhchat)                   Allow operator to use single chat window functionality (singlechatwindow)
Chat (lhchat)                   Allow operator to take visitor browser page screenshots (take_screenshot)
Chat (lhchat)                   General permission to use chat module (use)
Chat (lhchat)                   Allow operator to view online visitors (use_onlineusers)
Chat (lhchat)                   Allow operator to write to another operator's chat (writeremotechat)
CO Browse module (lhcobrowse)   Allow operator to use co-browse functionality (browse)
Files module (lhfile)           Allow operators to send files to visitors (use_operator)
Frontpage (lhfront)             Allow operator to switch between new/old dashboards (switch_dashboard)
Frontpage (lhfront)             General frontpage use permission (use)
Group chats module (lhgroupchat)  Allow operator to use private/public groups (use)
Permissions configuration (lhpermission)  Allow operator to see their permissions (see_permissions)
Speech module (lhspeech)        Allow operator to change chat recognition language (change_chat_recognition)
Speech module (lhspeech)        Allow user to change their personal speech recognition language (changedefaultlanguage)
Speech module (lhspeech)        Allow operator to use speech recognition module (use)
Statistic module (lhstatistic)  All functions (*)
System configuration (lhsystem)   Allow user to change their languages (changelanguage)
System configuration (lhsystem)   Allow user to access HTML generation (generatejs)
System configuration (lhsystem)   Allow user to see configuration links (use)
Theme (lhtheme)                 Allow operators to have their own personal back office theme (personaltheme)
Translation module (lhtranslation) Allow operator to use automatic translations (use)
Users, groups management (lhuser) Allow user to choose what pending chats they can see, only assigned to them or all. (allowtochoosependingmode)
Users, groups management (lhuser) Allow user to change other users' department groups (only if the operator belongs to them) (assign_to_own_department_group)
Users, groups management (lhuser) Allow user to see department statistics (canseedepartmentstats)
Users, groups management (lhuser) Allow user to choose what list should be visible by them, pending/active/unread/closed (change_visibility_list)
Users, groups management (lhuser) Allow user to change their online status (changeonlinestatus)
Users, groups management (lhuser) Allow user to change their visibility mode (changevisibility)
Users, groups management (lhuser) Allow user to create another user (createuser)
Users, groups management (lhuser) Allow user to edit their own responsible departments/department groups (editdepartaments)
Users, groups management (lhuser) Allow user to edit another user (edituser)
Users, groups management (lhuser) Allow user to have personal canned messages (personalcannedmsg)
Users, groups management (lhuser) Allow user to see all group users they belong to. (see_all_group_users)
Users, groups management (lhuser) Allow user to see department groups assigned to them (see_assigned_departments_groups)
Users, groups management (lhuser) Allow user to see other users' assigned department groups (see_user_assigned_departments_groups)
Users, groups management (lhuser) Allow user to edit their own data (selfedit)
Users, groups management (lhuser) Allow user to change another user's online status from the online operators widget (setopstatus)
Users, groups management (lhuser) Allow user to list users (userlist)
Users, groups management (lhuser) Allow user to see logged operators list, only from their department (userlistonline)
Views module (lhviews)            Allow operator to use views (use)
Voice & Video & ScreenShare (lhvoicevideo) Allow operator to use Voice & Video & ScreenShare calls (use)
Live helper Chat XML service (lhxml) All functions (*)
```

### Managers Role

```text
Module                          Function                Limitation
Abstract module (lhabstract)    Allow to use abstract module (use)
Audit (lhaudit)                 All functions (*)
Canned Messages (lhcannedmsg)   All functions (*)
Chat (lhchat)                   All functions (*)
Chat archive module (lhchatarchive) All functions (*)
Chat settings (lhchatsettings)    All functions (*)
Departments configuration (lhdepartment) Allow user to change auto assignment (actautoassignment)
Departments configuration (lhdepartment) Allow user to change transfer workflow (actworkflow)
Departments configuration (lhdepartment) Permission to create a new department (create)
Departments configuration (lhdepartment) Permission to delete department (delete)
Departments configuration (lhdepartment) Permission to edit department (edit)
Departments configuration (lhdepartment) Access to list departments (list)
Departments configuration (lhdepartment) Allow operator to change department alias (managealias)
Departments configuration (lhdepartment) Allow user to manage all department groups, not only assigned to them (managegroups)
Departments configuration (lhdepartment) Allow operator to change department surveys (managesurvey)
Files module (lhfile)           All functions (*)
Group chats module (lhgroupchat)  All functions (*)
Survey (lhsurvey)               All functions (*)
Theme (lhtheme)                 All functions (*)
Translation module (lhtranslation) All functions (*)
Users, groups management (lhuser) All functions (*)
```

### Operators US Role

This role has a limitation set in the `see_all` permission that they can see department groups with ID `2` only.

```
Departments configuration (lhdepartment) Allow user to see all departments, even if they do not have permission to see chats. (see_all)  {"group":[2]}
```

### Operators AU Role

This role has a limitation set in the `see_all` permission that they can see department groups with ID `1` only.

```
Departments configuration (lhdepartment) Allow user to see all departments, even if they do not have permission to see chats. (see_all)  {"group":[1]}
```

## Creating an `Operator US` Operator

*   `User group` - `US Operators`
*   `Required groups, choose one or more*` - `Operator`
*   Assigned `Departments groups` - `Departments US`

## Creating a `Teamleader US` Team Leader

*   `User group` - `US Teamleaders`
*   `Required groups, choose one or more*` - `Teamleader`
*   Assigned `Departments groups` - `Departments US`

