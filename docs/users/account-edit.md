---
id: account-edit
title: Account Edit
---

## Introduction

This article explains user account editing permissions.

## Assigned Departments

​![](/img/user/assigned-departments.png)

If an operator selects the checkbox to the left of the "eye" icon, they will gain access to read chats from that department, but will not be able to accept or participate in the chats.

## Operator alias

You can set operator alias nick, avatar, photo or job title by assigning operator to individual department or department group.

### Permissions

To edit the groups of other users, the editing user must be a member of all the groups that the user being edited is a member of.
For example: To edit the groups of user A, who is a member of groups B and C, you must also be a member of groups B and C.
To bypass this requirement, you can add the following permission:

> 'lhuser', 'editusergroupall'

The following permissions are required to access the assigned departments tab:

#### Individual Department Permissions

> `'lhuser','see_user_assigned_departments'`
> `'lhuser','assign_all_department_individual'`
> `'lhuser','assign_to_own_department_individual'`

To see other operators' departments in the edit window, the user must have:

> 'lhuser','see_user_assigned_departments'

To allow an operator to assign any department to another operator, they must have this permission:

> 'lhuser','assign_all_department_individual'

To allow an operator to assign one of their own departments to another operator, they must have this permission. They will only be able to assign a department if they have access to it.

> 'lhuser','assign_to_own_department_individual'

#### Department Group Permissions

> `'lhuser','assign_all_department_group'`
> `'lhuser','see_user_assigned_departments_groups'`
> `'lhuser','assign_to_own_department_group'`

To see other operators' department groups in the edit window, the user must have:

> 'lhuser','see_user_assigned_departments_groups'

To allow an operator to assign any department group to another operator, they must have this permission:

> 'lhuser','assign_all_department_group'

To allow an operator to assign one of their own department groups to another operator, they must have this permission. They will only be able to assign a department group if they have access to it.

> 'lhuser','assign_to_own_department_group'




