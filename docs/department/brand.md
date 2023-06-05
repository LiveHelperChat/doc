---
id: brand
title: Brand
sidebar_label: Brand
---

## Introduction

Brand concept is used to have generic bot to be able to handle multiple brands. E.g

Imagine you have multiple shop. Each shop can have multiple categories. In that concept

* Brand (Shop A)
  * (Support) - brand member with identifier (role) `support`
  * (Food) - brand member with identifier (role) `food`
  * (Drinks) - brand member with identifier (role) `drink`
* Brand (Shop B)
  * (Support) - brand member with identifier (role) `support`
  * (Food) - brand member with identifier (role) `food`
  * (Drinks) - brand member with identifier (role) `drink`

One department should be member of only *one* brand

Different from department is that they work independently of department groups and departments themselves. They are used just to manage Bot department changes Chat priority, without having to duplicate priority rules.

Current chat department role can be accessed in conditions checks using `{args.chat.department_role.role}`

## Sample configuration using chat priority

In this configuration chat department will be set to brand department with role `food` independently in which shop customer started a chat. We are also checking [condition](bot/conditions.md). We also check that transfer can happen only if present department role is `support`. E.g. bot has changed department to some other than `support`

![](/img/department/brand-chat-priority.png)

## Sample configuration using bot trigger

In this scenario instead of entering department id we enter brand role. Live Helper Chat will pickup of what brand present chat is and try to find department with required role `food` in this scenario.

![](/img/department/brand-bot.png)


## Permissions

Required permission to brands.

> 'lhdepartment', 'managebrands'