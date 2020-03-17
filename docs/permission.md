---
id: permission
title: Permission system explanation
sidebar_label: Permissions
---

Permission system consists of three items.

1.  Users
2.  Groups
3.  Roles

Users can belong to n groups. Groups can belong to n Roles. Roles can have assigned custom module functions. These combination's gives very flexible permission system.

### Users module

Users module is responsible for managing all data associated with user. It consist of these functions.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhuser - Users, groups management</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>groupassignuser</td>

<td>Allow logged user to assing user to group</td>

<td>-</td>

</tr>

<tr>

<td>editgroup</td>

<td>Allow logged user to edit group</td>

<td>-</td>

</tr>

<tr>

<td>creategroup</td>

<td>Allow logged user to create group</td>

<td>-</td>

</tr>

<tr>

<td>deletegroup</td>

<td>Allow logged user to delete group</td>

<td>-</td>

</tr>

<tr>

<td>createuser</td>

<td>Allow logged user to create another user</td>

<td>-</td>

</tr>

<tr>

<td>deleteuser</td>

<td>Allow logged user to delete another user</td>

<td>-</td>

</tr>

<tr>

<td>edituser</td>

<td>Allow logged user to edit another user</td>

<td>-</td>

</tr>

<tr>

<td>grouplist</td>

<td>Allow logged user to list group</td>

<td>-</td>

</tr>

<tr>

<td>userlist</td>

<td>Allow logged user to list users</td>

<td>-</td>

</tr>

<tr>

<td>selfedit</td>

<td>Allow logged user to edit his own data</td>

<td>Without this permission user will not be able to access his account data.</td>

</tr>

<tr>

<td>editdepartaments</td>

<td>Allow logged user to edit his responsible departaments</td>

<td>Without this permission user will not be able to edit hist responsible departaments. Assign himself to departament or remove from departament.</td>

</tr>

</tbody>

</table>

### System module

This module is responsible for html code, expire cache, and configuration links managing.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhsystem - System configuration</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>use</td>

<td>Allow user to see configuration links.</td>

<td>-</td>

</tr>

<tr>

<td>expirecache</td>

<td>Allow user to clear cache</td>

<td>-</td>

</tr>

<tr>

<td>generatejs</td>

<td>Allow user access HTML generation</td>

<td>-</td>

</tr>

</tbody>

</table>

### Permissions configuration

This module is responsible permissions system.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhpermission - Permissions configuration</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>edit</td>

<td>Access to edit role</td>

<td>-</td>

</tr>

<tr>

<td>delete</td>

<td>Access to delete role</td>

<td>-</td>

</tr>

<tr>

<td>list</td>

<td>Access to list roles</td>

<td>-</td>

</tr>

<tr>

<td>new</td>

<td>Access to create new role</td>

<td>-</td>

</tr>

</tbody>

</table>

### Install module

This module is responsible for installing the Live Helper Chat.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhinstall - Live helper chat installer</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td colspan="3">It has no defined functions.</td>

</tr>

</tbody>

</table>

### Frontpage module

This module is responsible for displaying frontpage, just after user logins.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhfront - Live helper chat installer</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>user</td>

<td>General frontpage use permission</td>

<td>Then creating member role you should always grant this permissions.</td>

</tr>

</tbody>

</table>

### Departments module

This module is responsible for departmetns.

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhdepartament - Departments configuration</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>alldepartaments</td>

<td>Access to all departments chats</td>

<td>If you want that user would be able to access all departments, you can grant this permission to role instead of marking all departments witch can access.</td>

</tr>

<tr>

<td>list</td>

<td>Access to list departments</td>

<td>-</td>

</tr>

<tr>

<td>create</td>

<td>Create new department</td>

<td>-</td>

</tr>

<tr>

<td>edit</td>

<td>Edit department</td>

<td>-</td>

</tr>

<tr>

<td>delete</td>

<td>Allow to delete department</td>

<td>-</td>

</tr>

<tr>

<td>selfedit</td>

<td>Allow user to choose his departments</td>

<td>User with granted this permission will be able to choose what departments he wants to belong.</td>

</tr>

</tbody>

</table>

### Chat module

This is core module of chat. It's responsible for managing Live helper chat's

<table cellpadding="0" cellspacing="0" class="lentele" width="100%">

<thead>

<tr>

<th colspan="3" scope="col">lhchat - Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Module function</td>

<td>Short explain</td>

<td>Notices</td>

</tr>

<tr>

<td>allowcloseremote</td>

<td>Allow user to close another user chat</td>

<td>Usualy then another user closes another user chat, chat does not get into state closed. Unles chat closed person is owner of the chat or user has this permission.</td>

</tr>

<tr>

<td>allowtransfer</td>

<td>Allow user to transfer chat to another user</td>

<td>-</td>

</tr>

<tr>

<td>deleteglobalchat</td>

<td>Allow to delete all chats</td>

<td>Usualy only owner with "deletechat" or users with "deleteglobalchat" can delete chat. Otherwise nothing happens.</td>

</tr>

<tr>

<td>deletechat</td>

<td>Allow user to delete his own chats</td>

<td>This permission have to be granted if you want that users should be able to delete his own chats.</td>

</tr>

<tr>

<td>allowchattabs</td>

<td>Allow user to user chat rooms functionality</td>

<td>-</td>

</tr>

<tr>

<td>singlechatwindow</td>

<td>Allow user to use single chat window functionality</td>

<td>-</td>

</tr>

<tr>

<td>use</td>

<td>General chat usage permission</td>

<td>-</td>

</tr>

</tbody>

</table>