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

## Chat attributes extraction

You can extract any attribute using this modal window

![](/img/bot/extract-attribute.png)

## Conditions explanations

These explains are valid everywhere you see conditions checking

### `=` as a number and string comparison

Equal condition. Has to be exact match. It can be a number comparing or string

E.g chat department identifier field is equal to `my_storage`

> `{args.chat.department.identifier} = 'my_storage'`
> `{args.chat.chat_variables_array.pid}` = 'my_pid'`

### `>,>=, <,<=` as a number comparison

E.g Chat duration is more than 5 seconds
> `{args.chat.chat_duration} > 5`

### `Text like` and `Text not like`

Internally it's called `like` and `notlike`

These rules are defined [here](bot/triggers.md#custom-text-matching)

E.g
`{args.chat.department.name}` `Text like` `edas && em [params max_words=2]` 

I expect to find only two words where both of them should be `edas` and `em`

If you want to match any value from list of values just do
> `{args.chat.nick}` `Text like` `remdex,vip_player` nick should be either `remdex` or `vip_player`
> `{args.chat.dep_id}` `Text like` `5,8` Matches if department id is 5 or 8


### `Contains`

Is checking if one part of the string is presented in another string.

## Bot example

Usage in bot example

![](/img/bot/check-condition.png)

#### Permissions

Required permissions

> 'lhgenericbot','manage_conditions'

