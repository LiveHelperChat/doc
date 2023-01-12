---
id: account-edit
title: Account Edit
---

## Introduction

This article will explain everything about user account edit permissions

## Assigned departments

​![](/img/user/assigned-departments.png)

If operator clicks checked to the left of the `eye` icon he will get access to read this departments chats but not accept/chat.

### Permissions

To edit groups of other users editing user has to be a member of all groups edited user is.
Example: In order to edit groups of user A, who is a is member of groups B,C I also have to be a member of groups B,C
To overcome this you can add permission:

> 'lhuser', 'editusergroupall'

Required permissions to access assigned departments tab, one of

#### Individual departments related permissions

> `'lhuser','see_user_assigned_departments'`
> `'lhuser','assign_all_department_individual'`
> `'lhuser','assign_to_own_department_individual'`

To see other operators departments in edit window user has to have

> 'lhuser','see_user_assigned_departments'

To allow operator assign any department to another operator he has to have this permission

> 'lhuser','assign_all_department_individual'

To allow operator assign one of his own department to another operator he has to have this permission. He will be able to assign department only if he is has access to it.

> 'lhuser','assign_to_own_department_individual'

#### Departments groups related permissions

> `'lhuser','assign_all_department_group'`
> `'lhuser','see_user_assigned_departments_groups'`
> `'lhuser','assign_to_own_department_group'`

To see other operators departments groups in edit window user has to have

> 'lhuser','see_user_assigned_departments_groups'

To allow operator assign any department group to another operator he has to have this permission

> 'lhuser','assign_all_department_group'

To allow operator assign one of his own department group to another operator he has to have this permission. He will be able to assign department group only if he is has access to it.

> 'lhuser','assign_to_own_department_group'




