---
id: conditions
title: Conditions
---

## Introduction

Conditions allow you to define predefined criteria that can be used in multiple places, such as:

*   The `Check for conditions to proceed` bot response type.
*   Chat priority settings.

Conditions are checked using a specific syntax:

`{condition.<condition_identifier>}` (e.g., `{condition.is_vip}`).

The result of a condition check will be either `valid` or `not_valid`.

Conditions can also check other conditions during their evaluation. For example:

![](/img/bot/condition.png)

## Chat Attribute Extraction

You can extract any chat attribute using this modal window:

![](/img/bot/extract-attribute.png)

## Condition Explanations

The following explanations apply to all condition checks.

### `=` or `!=` for Number and String Comparison

These operators perform equality checks. They require an exact match and can be used to compare numbers or strings.

For example, to check if a chat department's identifier is equal to `my_storage`:

> `{args.chat.department.identifier} = 'my_storage'`

To check if a chat variable `pid` is equal to `my_pid`:

> `{args.chat.chat_variables_array.pid} = 'my_pid'`

To check the response of a REST API call:

> `{content_1} != 1`

### `>, >=, <, <=` for Number Comparison

These operators perform numerical comparisons.

For example, to check if a chat's duration is more than 5 seconds:

> `{args.chat.chat_duration} > 5`

### `Text like` and `Text not like`

These operators, internally referred to as `like` and `notlike`, perform pattern matching on text.

The rules for these operators are defined [here](bot/triggers.md#custom-text-matching).

For example:

`{args.chat.department.name}` `Text like` `edas && em [params max_words=2]`

This condition checks if the department name contains exactly two words, `edas` and `em`.

To match any value from a list of values, use:

> `{args.chat.nick}` `Text like` `remdex,vip_player` (checks if the chat nick is either `remdex` or `vip_player`).

> `{args.chat.dep_id}` `Text like` `5,8` (matches if the department ID is 5 or 8).

### `Contains`

This operator checks if a string contains another string as a substring.

## Bot Example

Example usage in a bot:

![](/img/bot/check-condition.png)

## Bot Example with Buttons Using Conditions

This example demonstrates a quick reply button with a condition. The button is displayed only if the `bot_not_answered` condition is met.

![](/img/bot/conditions-button.png)

The condition is defined as follows:

![](/img/bot/condition-rest-api.png)

#### Permissions

The following permissions are required:

> `lhgenericbot`, `manage_conditions`

