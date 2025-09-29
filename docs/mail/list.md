---
id: list
title: Mail list
sidebar_label: Mail list
---

## Introduction

The mail list can be accessed from the left menu.

​![](/img/mail/mail-list.png)

To allow an operator to list all emails by department, grant them the permission `'lhmailconv','list_all_mails'`.

To limit an operator to only listing their own emails, grant them `'lhmailconv','list_my_mails'`. You can additionally grant `'lhmailconv','list_pending_mails'` to allow them to list pending emails.

**Summary:**

Grant `'lhmailconv','list_all_mails'` (required) **or** `'lhmailconv','list_my_mails'` (required).  `'lhmailconv','list_pending_mails'` is optional.

## Permissions

To grant an operator the ability to list all emails, regardless of the email's owner, grant them the following permission:

`Allow operator to list all mails independently of operator and status.`
> 'lhmailconv','list_all_mails'

### OR

To allow an operator to list only the emails they own, grant them the following permission:

`Allow operator to list mails he is owner`
> 'lhmailconv','list_my_mails'

Additionally, to allow an operator to list pending emails without an assigned owner, grant them the following permission:

`Allow operator to list mails without an owner and in status pending.`
> 'lhmailconv','list_pending_mails'


## Mail export related permissions

To allow an operator to export mails, grant them the following permission:

> `lhmailconv`,`export_mails`

To include the `phone` field in the exported file, the operator needs these permissions:

> `lhmailconv`,`phone_see_unhidden`

> `lhmailconv`,`phone_export`

To include the `email` field in the exported file, the operator needs these permissions:

> `lhmailconv`,`mail_see_unhidden_email`

> `lhmailconv`,`mail_export`

To include `chat_variables` column content in exported file

> `lhmailconv`,`export_variables`

### General permission

The general permission required to access the mail list is:
> 'lhmailconv','use_admin'

### Bulk delete related permissions

With this permission, the operator can delete all conversations regardless of ticket ownership.

This permission is also required to use archive functions.

This button is not available if an operator does not have the permission, even if they have permission to delete their own tickets.

> 'lhmailconv','delete_conversation'

### Bulk closing conversations

With this permission, the operator can close all conversations regardless of ticket ownership.

This button is not available if an operator does not have the permission, even if they have permission to close their own tickets.

> 'lhmailconv','close_all_conversation'

### Quick actions

The quick actions button enables operators to efficiently change the owner of multiple tickets simultaneously.

> 'lhmailconv','quick_actions'