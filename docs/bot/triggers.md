---
id: triggers
title: Triggers
---

## Introduction

Triggers hold predefined responses and are always organized within a [Trigger group](#trigger-groups).

## Trigger groups

Trigger groups help organize triggers based on business needs. For example, you might place triggers related to user password reminders in one group and triggers for a parcel tracking workflow in another.

Each trigger group can be exported or deleted independently.

![](/img/bot/delete-export.png)

## Trigger

There are several types of triggers:

![](/img/bot/trigger-type.png?v3)

*   `Default` - This trigger is executed automatically when a chat starts.
*   `Default for unknown message` - This trigger is executed when the bot cannot find a suitable trigger for the user's message.
*   `Default for unknown button click` - This trigger is executed when the bot cannot find a suitable trigger for a button click.
*   `Execute always` - This trigger is always executed first. In most cases, you won't need this trigger type.
*   `Can be passed as an argument` - Select this option to use the trigger in Widget themes or Proactive Invitations, or to call it using `trigger_id`.

## Trigger Events

A trigger event specifies the user input that will cause the `Trigger` to be executed. There are three types of trigger events:

*   Text
*   Click
*   Custom text matching

## Trigger attributes

### `Chat start behavior`

There are several options that control how the trigger behaves when a chat starts. In most cases, you don't need to adjust these settings for simple triggers.

*   `Do not check on chat start` - The default trigger is executed only. The following options are for more advanced scenarios.
*   `Instant execution (Executes and continues workflow)` - (Usage example pending)
*   `Instant execution and block (Executes and blocks further trigger execution)` - (Usage example pending)
*   `Instant execution and continue if stop is returned from this trigger` - (Usage example pending)
*   `Schedule (Schedules further execution triggers)` - (Usage example pending)

### `Priority of start check`

This setting determines which trigger is executed when multiple trigger events match the user's input.

Triggers with a higher priority number are executed later. The order is ascending (`priority asc`).

### `Available for these departments` and `Disabled for these departments`

### `Available for these departments` and `Disabled for these departments`

If you use a single bot across multiple departments, you can use these settings to enable or disable specific triggers for certain departments by entering their IDs. This allows you to customize the bot's behavior for each department.

## Text

The Text event matches a user's message based on its text content.

`Matching text phrase` Matching rule:

```
parcel* - The user's message must start with "parcel," followed by any word.
```

![](/img/bot/text-event.png)

For example, the trigger defined in the screenshot above would match these user messages:

```
parcel
parcels
```

### Click

The Click event is used with payload-type events in quick response buttons. However, using the `Text` or `Custom text matching` event types is generally recommended.

### Custom text matching

This is the most flexible event trigger.

![](/img/bot/custom-text-matching.png)

In addition to the default attributes, it has a few more.

#### `Should include any of these words` and `But not any of these`

These fields specify which words a user's message should include or exclude, respectively. Separate multiple words with commas.

You can define the maximum number of typos allowed per word:

*   `price{2}` - The word "price" can have up to two typos.

You can require an exact ending for a word:

*   `price$` - The word must end with the letter "e".

You can match any ending of a word, with the specified number of typos still applying:

*   `cash*` - Matches "cash," "cashes," etc.

You can match any part of a word, with the specified number of typos still applying:

*   `*cash*` - Matches "cash," "cashes," "incash," etc.

You can require a specific ending for a word while also allowing any other ending:

*   `cash$*` - The word must end with "h" but can have any other ending.

You can also use regular expressions (preg_match rules). To specify a comma within the expression, use `_com_`. Enclose the regular expression with forward slashes `/`.

*   Example 1: `/^[A-Za-z0-9]{3_com_6}$/` translates to `^[A-Za-z0-9]{3,6}$`
*   Example 2: `/^cashba(.*?)/is`

You can require combinations of words:

*   `car && price` - The message must contain both "car" and "price".

You can combine these rules:

*   `fish,car && price{2}$` - The message must contain either "fish" or "car," and it must also contain "price" (with up to two typos) ending with any character.

This would match these messages, regardless of the words' order:

*   fish price
*   car price
*   car prike `(notice a typo)`

You can limit the number of words in the message:

*   `fish,car && price [params max_words=3]`

This will match:

*   fish price please
*   car price
*   ~~car price and fish price~~ `(but not this because it has too many words)`

#### `Typos number (include words)` and `Typos number (exclude words)`

If you prefer not to define the number of typos per word directly in the `Should include` or `Should not include` fields, you can specify a global typo allowance here. This allowance will apply to all words.

#### `Should include only words from above, not any.`

If selected, the message must contain only the words defined in the `Should include` field. Do not use the `&&` operator in this case.

For example:

`car,price`

The visitor's message can only contain the words "car" and "price".
