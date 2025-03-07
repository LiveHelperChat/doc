---
id: brand
title: Brand
sidebar_label: Brand
---

## Introduction

The brand concept allows a generic bot to handle multiple brands. For example, imagine you have multiple shops, and each shop has multiple categories. In this concept:

*   Brand (Shop A)
    *   (Support) - brand member with identifier (role) `support`
    *   (Food) - brand member with identifier (role) `food`
    *   (Drinks) - brand member with identifier (role) `drink`
*   Brand (Shop B)
    *   (Support) - brand member with identifier (role) `support`
    *   (Food) - brand member with identifier (role) `food`
    *   (Drinks) - brand member with identifier (role) `drink`

One department should be a member of only *one* brand.

Brands differ from departments in that they operate independently of department groups and the departments themselves. They are used to manage bot department changes and chat priority without duplicating priority rules.

The current chat department role can be accessed in condition checks using `{args.chat.department_role.role}`.

## Sample configuration using chat priority

In this configuration, the chat department will be set to the brand department with the role `food` regardless of which shop the customer started a chat from. We are also checking a [condition](bot/conditions.md). Additionally, we check that a transfer can only happen if the current department role is `support`. For example, the bot has changed the department to something other than `support`.

![](/img/department/brand-chat-priority.png)

## Sample configuration using bot trigger

In this scenario, instead of entering a department ID, we enter a brand role. Live Helper Chat will identify the brand of the current chat and attempt to find a department with the required role (`food` in this scenario).

![](/img/department/brand-bot.png)

## Permissions

The following permission is required for brands:

> 'lhdepartment', 'managebrands'
