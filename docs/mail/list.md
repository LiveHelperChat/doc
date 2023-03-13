---
id: list
title: Mail list
sidebar_label: Mail list
---

## Introduction

Mail list can be accessed from left menu

​![](/img/mail/mail-list.png)

If you want to allow operator to list all mails by department grant him `'lhmailconv','list_all_mails'`

if you want to limit that grant him only `'lhmailconv','list_my_mails'` also you can additionally grant `'lhmailconv','list_pending_mails'`

Summary:

Grant `'lhmailconv','list_all_mails'`(required) **or** `'lhmailconv','list_my_mails'`(required) `'lhmailconv','list_pending_mails'`(optional)

## Permissions

If you want to grant operator to list all mails independently of mail owner status

`Allow operator to list all mails independently of operator and status.`
> 'lhmailconv','list_all_mails'

### OR

If you want to allow operator to list only mails he is owner

`Allow operator to list mails he is owner`
> 'lhmailconv','list_my_mails'

Also if you want to allow hom to list pending mails without a mail owner grant him

`Allow operator to list mails without an owner and in status pending.`
> 'lhmailconv','list_pending_mails'

### General permission

General permission
> 'lhmailconv','use_admin'