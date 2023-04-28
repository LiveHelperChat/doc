---
id: replaceable-variables
title: Replaceable variables
sidebar_label: Replaceable variables
---

## Introduction

Replaceable variables can be used in canned messages bot messages. Etc.

> System configuration -> Replaceable variables

## Conditions

By applying conditions you can have variable only for specific chat.

```
{args.chat.referrer} `contains`. Page where chat started
{args.chat.session_referrer} `contains`. Referer from where visitor come to site.
{args.chat.chat_variables_array.<variables>} = New
{args.chat.dep_id} = Department ID
```

## Permission

For operator to be able to edit variables he has to have this permission

> 'lhcannedmsg', 'use_replace'


