---
id: conditions
title: Conditions
---

## Introduction

Conditions allows you to have predefined conditions which can be used in multiple places

* `Check for conditions to proceed` bot response type
* `Chat priority` as one of the conditions

For conditions being checked they have special syntax

`{condition.<condition_identifier>}` E.g `{condition.is_vip}`

Value after check can be either `valid` or `not_valid`

While defining conditions it can check other conditions. E.g

![](/img/bot/condition.png)

Usage in bot example

![](/img/bot/check-condition.png)

#### Permissions

Required permissions

> 'lhgenericbot','manage_conditions'

