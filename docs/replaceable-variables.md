---
id: replaceable-variables
title: Replaceable variables
sidebar_label: Replaceable variables
---

## Introduction

Replaceable variables can be used in canned messages, bot messages, bot translations, and more.

> System configuration -> Replaceable variables

* [Bot Translations items](bot/multiple-languages.md) can be used inside value definition

## Conditions

By applying conditions, you can restrict a variable to a specific chat.

```
{args.chat.referrer} `contains`. Page where chat started
{args.chat.session_referrer} `contains`. Referrer from where the visitor came to the site.
{args.chat.chat_variables_array.<variables>} = New
{args.chat.dep_id} = Department ID
```

## How to define a replaceable variable by department

Here is a sample configuration. This will make a `{brand}` variable available across the app.

![](/img/chat/replaceable-variable.png)

## Permission

For an operator to be able to edit variables, they must have this permission:

> 'lhcannedmsg', 'use_replace'


