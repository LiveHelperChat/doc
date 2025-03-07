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

### General permission

The general permission required to access the mail list is:
> 'lhmailconv','use_admin'
