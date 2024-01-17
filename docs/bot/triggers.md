---
id: triggers
title: Triggers
---

## Introduction

Triggers act as response holders and are always placed in a [Trigger group](#trigger-groups).

## Trigger groups

Trigger groups are useful for segregating logic based on business needs. For instance, logic related to user password reminders should be placed in one group, while another group can contain the parcel tracking workflow, for example.

Each trigger group can be exported or deleted separately.

![](/img/bot/delete-export.png)

## Trigger

There are three general types of triggers:

![](/img/bot/trigger-type.png?v3)

* `Default` - This trigger is executed as the default trigger as soon as the chat starts.
* `Default for unknown message` - This trigger is executed when the bot does not find a relevant trigger for the user's message.
* `Default for unknown button click` - This trigger is executed when the bot does not find a relevant trigger for a button click.
* `Execute always` - This trigger is executed very first all the time. Most of the time, you don't need to use this trigger.
* `Can be passed as an argument` - This must be checked for the trigger to be used in Widget themes, Proactive Invitation, or with `trigger_id` as an argument.

## Trigger events

A trigger event defines what user message triggers the `Trigger` to be executed. There are three types of trigger events:

* Text
* Click
* Custom text matching

## Trigger attributes

### `Chat start behaviour`

We have 4 options. Most of the time, for building simple triggers, you do not need to change these.

* `Do not check on chat start` - By default, only the default trigger is sent. The next options are used for more complex behavior.
* `Instant execution (Executes and continues workflow)` - Usage example (Pending article...)
* `Instant execution and block (Executes and blocks further trigger execution)` - Usage example (Pending article...)
* `Instant execution and continue if stop is returned from this trigger` - Usage example (Pending article...)
* `Schedule (Schedules further execution triggers)` - Usage example (Pending article...)


### `Priority of start check`

Priority defines which trigger should be executed if more than one trigger event is matched.

Trigger events with higher number will be executed the last one. It's an `pririty asc` order.

### `Available for these departments` and `Disabled for these departments`

If you have one bot for multiple departments and if a specific department does not require functionality for certain triggers, you can skip them by entering the department IDs.

## Text

The Text event is used to match a user's message based on its text.

`Matching text phrase` Matching rule is:

```
parcel* - user message has to start with `parcel` and afterwords any word is expected. 
```

![](/img/bot/text-event.png)

For instance, the trigger defined from the screenshot above would match these user messages:
```
parcel
parcels
```

### Click

The Click event is used when payload-type events are employed in quick response buttons. However, it's recommended to use `Text` or `Custom text matching` event types instead.

### Custom text matching
 
This is the most powerful event trigger.

![](/img/bot/custom-text-matching.png)

In addition to the default attributes, it has a few more.

#### `Should include any of these words` and `But not any of these`

These specify the words that a user message should or should not include, respectively. You can define more than one word separated by commas.

Defining the number of typos per word:

`price{2}` - means word can have two mistakes

Requiring the exact end of the word:

`price$` - word has to end with a letter `e`

Requiring any end of the word. The number of typos in the word still applies:

`cash*`

Requiring any part of the word. The number of typos in the word still applies:

`*cash*`

Requiring any end of the word, but it has to end with the letter `h`:

`cash$*`

You can also define preg_match rules. To specify a comma, use the com keyword for the comma character in your preg_match rules. Remember to enclose the regular expression with '/' on both sides.

E.g 1
`/^[A-Za-z0-9]{3_com_6}$/` would translate to `^[A-Za-z0-9]{3,6}$`

E.g 2

`/^cashba(.*?)/is`

Requiring word combinations:

`car && price`

You can combine all these into something like:

`fish,car && price{2}$`

This would match these messages, regardless of the words' locations:

* fish price
* car price
* car prike `notice a typo`

`fish,car && price [params max_words=3]`

This means it will match:

* fish price please
* car price 
* ~~car price and fish price~~ `but not this because of too many words`

#### `Typos number (include words)` && `Typos number (exclude words)`

If you do not want to define the number of allowable typos per word, you can define them here. They will be applied to all words.

#### `Should include only words from above, not any.`

This means the message has to contain only the defined words. In that case, you should not use the `&&` operator.

`car,price`

This would mean that the visitor's message can only contain these words.
