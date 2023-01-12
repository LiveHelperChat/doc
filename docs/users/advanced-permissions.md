---
id: advanced-permissions
title: Advanced permissions
---

This is sample how to set up three levels permissions

* Operators
* Team leaders
* Managers
* Admins

* Before reading further read [Eccount edit permissions section](users/account-edit.md). Importing regarding what assigned departments operators can see.
* Before reading further read [Transfer permissions](chat/transfering-chat.md). Important information how to limit what operators operator can see whom he wants to transfer a chat.

You can also just download DB dump and import [Sample database dump with all configuration](/img/user/livehelperchat_install.sql). Admin username and password is `admin`

## Requirements

There will be two departments groups

* Departments US
* Departments AU

Operators from `AU Operators` group should not read chats from `Departments AU` and vice versa

Team leaders will be able to edit/create new only users from user groups he is member of. He also will be able to set departments groups he is member of.

## Departments

| ID       |      Name      |
|----------|:--------------:|
| 1        | Departments AU |
| 2        | Departments US |

## Departments groups

|      Name      | Members |
|:--------------:|---------|
| Departments AU | Departments AU |
| Departments US | Departments US |

## Groups

1. Operators
2. Teamleader
3. Managers
4. AU Managers
6. US Managers
7. US Teamleaders
8. AU Teamleaders
9. AU Operators
10. US Operators
11. Administrators

### Operators group

* Checked `Required`
* Assigned `Operators` role

### Teamleader group

* Checked `Required`
* `Member of this group can work with the following groups` - `Operators`
* Assigned `Teamleader` role

### Managers

* Checked `Required`
* Assigned `Operators`, `Teamleader`, `Managers` roles

### US Operators

* Assigned `Operators US` role

### AU Operators

* Assigned `Operators AU` role

### US Teamleaders

* `Member of this group can work with the following groups` - `US Operators`

### AU Teamleaders

* `Member of this group can work with the following groups` - `AU Operators`

### AU Managers

* `Member of this group can work with the following groups` - `AU Operators`, `AU Teamleaders`

### US Managers

* `Member of this group can work with the following groups` - `US Operators`, `AS Teamleaders`

## Roles

1. Administrators
2. Operators
3. Teamleader
4. Rest API
5. Operators AU
6. Operators US
7. Managers

## Roles structure

### Operators role

```text
Module	Function	Limitation	 
Canned Messages (lhcannedmsg)	Allow operator to see global canned messages (see_global)		
Canned Messages (lhcannedmsg)	General permission to use canned messages module (use)		
Chat (lhchat)	Allow operator to block visitors (allowblockusers)		
Chat (lhchat)	Allow operator to user chat rooms functionality (allowchattabs)		
Chat (lhchat)	Allow operator to open other operators chats from same department (allowopenremotechat)		
Chat (lhchat)	Allow operator to redirect user to another page (allowredirect)		
Chat (lhchat)	Allow user to transfer chat to another user (allowtransfer)		
Chat (lhchat)	Allow operator to transfer chat directly to other operator (allowtransferdirectly)		
Chat (lhchat)	Allow operator to use chrome extension (chattabschrome)		
Chat (lhchat)	Allow operator to edit his previous messages (editprevious)		
Chat (lhchat)	Allow operator to explore canned messages. He will see canned messages based on departments he is member of. (explorecannedmsg)		
Chat (lhchat)	Allow operator to open all chats, not only assigned to him (open_all)		
Chat (lhchat)	Allow operator to see previous chats from visitor (prev_chats)		
Chat (lhchat)	Operator can see all online visitors, not only his department (sees_all_online_visitors)		
Chat (lhchat)	Allow operator to use single chat window functionality (singlechatwindow)		
Chat (lhchat)	Allow operator to take visitor browser page screenshots (take_screenshot)		
Chat (lhchat)	General permission to use chat module (use)		
Chat (lhchat)	Allow operator to view online visitors (use_onlineusers)		
Chat (lhchat)	Allow operator to write to another operator chat (writeremotechat)		
Chatbox (lhchatbox)	Allow user to manage Chatbox module (manage_chatbox)		
CO Browse module (lhcobrowse)	Allow operator to use co-browse functionality (browse)		
FAQ (lhfaq)	Allow user to manage FAQ (manage_faq)		
Files module (lhfile)	Allow operators to delete his chat files (file_delete_chat)		
Files module (lhfile)	Allow operators to send files to visitor (use_operator)		
Frontpage (lhfront)	General frontpage use permission (use)		
Generic Bot (lhgenericbot)	Allow operator to change bot notifications settings (use_operator)		
Group chats module (lhgroupchat)	Allow operator to use private/public groups (use)		
Permissions configuration (lhpermission)	Allow operator to see his permissions (see_permissions)		
Questionary/Voting (lhquestionary)	Allow user to manage questionary (manage_questionary)		
Speech module (lhspeech)	Allow operator to change chat recognition language (change_chat_recognition)		
Speech module (lhspeech)	Allow user to change his personal speech recognition language (changedefaultlanguage)		
Speech module (lhspeech)	Allow operator to use speech recognition module (use)		
Statistic module (lhstatistic)	 (use)		
System configuration (lhsystem)	Allow user to change his languages (changelanguage)		
System configuration (lhsystem)	Allow user to see configuration links (use)		
Theme (lhtheme)	Allow operators have their own personal back office theme (personaltheme)		
Theme (lhtheme)	Allow operator to preview trigger (use_operator)		
Translation module (lhtranslation)	Allow operator to use automatic translations (use)		
Users, groups management (lhuser)	Allow user to choose what pending chats he can see, only assigned to him or all. (allowtochoosependingmode)		
Users, groups management (lhuser)	Allow user to choose what list should be visible by him, pending/active/unread/closed (change_visibility_list)		
Users, groups management (lhuser)	Allow user to change his online status (changeonlinestatus)		
Users, groups management (lhuser)	Allow user to have personal canned messages (personalcannedmsg)		
Users, groups management (lhuser)	Allow user see all group users he belongs to. (see_all_group_users)		
Users, groups management (lhuser)	Allow user to see departments groups assigned to him (see_assigned_departments_groups)		
Users, groups management (lhuser)	Allow user to edit his own data (selfedit)		
Users, groups management (lhuser)	Allow user to see logged operators list, only from his department (userlistonline)		
Views module (lhviews)	Allow operator to use views (use)		
Voice & Video & ScreenShare (lhvoicevideo)	Allow operator to use Voice &amp; Video &amp; ScreenShare calls (use)		
Live helper Chat XML service (lhxml)	All functions (*)		
```

### Teamleaders role

```text
Canned Messages (lhcannedmsg)	Allow operator to see global canned messages (see_global)		
Canned Messages (lhcannedmsg)	General permission to use canned messages module (use)		
Chat (lhchat)	Allow operator change canned messages (administratecannedmsg)		
Chat (lhchat)	Allow operator to block visitors (allowblockusers)		
Chat (lhchat)	Allow operator to close another operator chat (allowcloseremote)		
Chat (lhchat)	Allow operator to open other operators chats from same department (allowopenremotechat)		
Chat (lhchat)	Allow operator to redirect user to another page (allowredirect)		
Chat (lhchat)	Allow user to transfer chat to another user (allowtransfer)		
Chat (lhchat)	Allow operator to transfer chat directly to other operator (allowtransferdirectly)		
Chat (lhchat)	Allow operator to use chrome extension (chattabschrome)		
Chat (lhchat)	Allow operator to explore canned messages. He will see canned messages based on departments he is member of. (explorecannedmsg)		
Chat (lhchat)	Allow operator to explore canned messages. He will see all departments canned messages. (explorecannedmsg_all)		
Chat (lhchat)	Allow operator to export filtered chats (export_chats)		
Chat (lhchat)	Allow operator to open all chats, not only assigned to him (open_all)		
Chat (lhchat)	Allow operator to see previous chats from visitor (prev_chats)		
Chat (lhchat)	Operator can see all online visitors, not only his department (sees_all_online_visitors)		
Chat (lhchat)	Allow operator to send e-mail to visitor from chat window (sendmail)		
Chat (lhchat)	Allow operator to use single chat window functionality (singlechatwindow)		
Chat (lhchat)	Allow operator to take visitor browser page screenshots (take_screenshot)		
Chat (lhchat)	General permission to use chat module (use)		
Chat (lhchat)	Allow operator to view online visitors (use_onlineusers)		
Chat (lhchat)	Allow operator to write to another operator chat (writeremotechat)		
CO Browse module (lhcobrowse)	Allow operator to use co-browse functionality (browse)		
Files module (lhfile)	Allow operators to send files to visitor (use_operator)		
Frontpage (lhfront)	Allow operator to switch between new/old dashboards (switch_dashboard)		
Frontpage (lhfront)	General frontpage use permission (use)		
Group chats module (lhgroupchat)	Allow operator to use private/public groups (use)		
Permissions configuration (lhpermission)	Allow operator to see his permissions (see_permissions)		
Speech module (lhspeech)	Allow operator to change chat recognition language (change_chat_recognition)		
Speech module (lhspeech)	Allow user to change his personal speech recognition language (changedefaultlanguage)		
Speech module (lhspeech)	Allow operator to use speech recognition module (use)		
Statistic module (lhstatistic)	All functions (*)		
System configuration (lhsystem)	Allow user to change his languages (changelanguage)		
System configuration (lhsystem)	Allow user to access HTML generation (generatejs)		
System configuration (lhsystem)	Allow user to see configuration links (use)		
Theme (lhtheme)	Allow operators have their own personal back office theme (personaltheme)		
Translation module (lhtranslation)	Allow operator to use automatic translations (use)		
Users, groups management (lhuser)	Allow user to choose what pending chats he can see, only assigned to him or all. (allowtochoosependingmode)		
Users, groups management (lhuser)	Allow user to change other users departments groups (only if operator belong to them) (assign_to_own_department_group)		
Users, groups management (lhuser)	Allow user to see departments statistic (canseedepartmentstats)		
Users, groups management (lhuser)	Allow user to choose what list should be visible by him, pending/active/unread/closed (change_visibility_list)		
Users, groups management (lhuser)	Allow user to change his online status (changeonlinestatus)		
Users, groups management (lhuser)	Allow user to change his visibility mode (changevisibility)		
Users, groups management (lhuser)	Allow user to create another user (createuser)		
Users, groups management (lhuser)	Allow user to edit his own responsible departments/departments groups (editdepartaments)		
Users, groups management (lhuser)	Allow user to edit another user (edituser)		
Users, groups management (lhuser)	Allow user to have personal canned messages (personalcannedmsg)		
Users, groups management (lhuser)	Allow user see all group users he belongs to. (see_all_group_users)		
Users, groups management (lhuser)	Allow user to see departments groups assigned to him (see_assigned_departments_groups)		
Users, groups management (lhuser)	Allow user to see to other user assigned departments groups (see_user_assigned_departments_groups)		
Users, groups management (lhuser)	Allow user to edit his own data (selfedit)		
Users, groups management (lhuser)	Allow user to change other user online status from online operators widget (setopstatus)		
Users, groups management (lhuser)	Allow user to list users (userlist)		
Users, groups management (lhuser)	Allow user to see logged operators list, only from his department (userlistonline)		
Views module (lhviews)	Allow operator to use views (use)		
Voice & Video & ScreenShare (lhvoicevideo)	Allow operator to use Voice &amp; Video &amp; ScreenShare calls (use)		
Live helper Chat XML service (lhxml)	All functions (*)		
```

### Managers role

```text
Abstract module (lhabstract)	Allow to use abstract module (use)		
Audit (lhaudit)	All functions (*)		
Canned Messages (lhcannedmsg)	All functions (*)		
Chat (lhchat)	All functions (*)		
Chat archive module (lhchatarchive)	All functions (*)		
Chat settings (lhchatsettings)	All functions (*)		
Departments configuration (lhdepartment)	Allow user to change auto assignment (actautoassignment)		
Departments configuration (lhdepartment)	Allow user to change transfer workflow (actworkflow)		
Departments configuration (lhdepartment)	Permission to create a new department (create)		
Departments configuration (lhdepartment)	Permission to delete department (delete)		
Departments configuration (lhdepartment)	Permission to edit department (edit)		
Departments configuration (lhdepartment)	Access to list departments (list)		
Departments configuration (lhdepartment)	Allow operator to change department alias (managealias)		
Departments configuration (lhdepartment)	Allow user to manage all department groups, not only assigned to him (managegroups)		
Departments configuration (lhdepartment)	Allow operator to change department surveys (managesurvey)		
Files module (lhfile)	All functions (*)		
Group chats module (lhgroupchat)	All functions (*)		
Survey (lhsurvey)	All functions (*)		
Theme (lhtheme)	All functions (*)		
Translation module (lhtranslation)	All functions (*)		
Users, groups management (lhuser)	All functions (*)
```

### Operators US role

This role has limitation set in `see_all` permission that they can see departments group with id `2` only.

```
Departments configuration (lhdepartment)	Allow user to see all departments. Even if he does not have permission to see chats. (see_all)	{"group":[2]}
```

### Operators AU role

This role has limitation set in `see_all` permission that they can see departments group with id `1` only.

```
Departments configuration (lhdepartment)	Allow user to see all departments. Even if he does not have permission to see chats. (see_all)	{"group":[1]}
```

## Creating `Operator US` operator

* `User group` - `US Operators`
* `Required groups, choose one or more*` - `Operator`
* Assigned `Departments groups` - `Departments US`

## Creating `Teamleader US` teamleader

* `User group` - `US Teamleaders`
* `Required groups, choose one or more*` - `Teamleader`
* Assigned `Departments groups` - `Departments US`

