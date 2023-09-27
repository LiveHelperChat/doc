---
id: triggers
title: Triggers
---

## Introduction

Triggers are response holders. Triggers are always placed in a [Trigger group](#trigger-groups).

## Trigger groups

Trigger groups are useful to separate logic by business logic. Your logic related to users password remind workflow should be placed in one group and in another group, you can put the parcel tracking workflow, for example.

Each trigger group can be exported and deleted separately.

![](/img/bot/delete-export.png)

## Trigger

There can be three general types of triggers.

![](/img/bot/trigger-type.png?v3)

* `Default` - This trigger is executed as default trigger as soon chat starts.
* `Default for unknown message` - When bot does not find relevant trigger to user message this trigger is executed.
* `Default for unknown button click` - When bot does not find relevant trigger to button click this trigger is executed.
* `Execute always` - This trigger is executed very first all the time. Most of the time you don't need to use this trigger.
* `Can be passed as argument` - This has to be checked for trigger to be used in Widget themes, Proactive Invitation or `trigger_id` as argument.

## Trigger events

Trigger event defines what user message triggers `Trigger` to be execute.
There is a three types of trigger events.

* Text
* Click
* Custom text matching

## Trigger attributes

### `Chat start behaviour`

We have 4 options. There. Most of the time for building simple triggers you do not need to change those.

* `Do not check on chat start` - By default only default trigger is send. Next options are used for a more tricky behaviour.
* `Instant execution (Executes and continues workflow)` - usage example (Pending article...)
* `Instant execution and block (executes and blocks further triggers execution)` - usage example (Pending article...)
* `Instant execution and continue if stop is returned from this trigger` - usage example (Pending article...)
* `Schedule (schedules for further execution trigger)` - usage example (Pending article...)

### `Priority of start check`

Priority defines if more than one trigger even it matched which trigger should be executed.

Trigger events with higher number will be executed the last one. It's an `pririty asc` order.

### `Available for these departments` and `Disabled for these departments`

If you have one bot for many departments and if one of your department does not have functionality for some triggers you can skip them by entering departments id's.

## Text

Text even is used to match user message based on user message text. 

`Matching text phrase` Matching rule is 

```
parcel* - user message has to start with `parcel` and afterwords any word is expected. 
```

![](/img/bot/text-event.png)

E.g as from screenshot above defined trigger would match. These user messages
```
parcel
parcels
```

### Click

Click event is used if you use payload type of events in quick response buttons. Personally I do not recommend to use them and just use `Text` or `Custom text matching` event types.

### Custom text matching
 
This is the most powerfull event trigger.

![](/img/bot/custom-text-matching.png)

In addition to default attribute it has few more.

#### `Should include any of these words` and `But not any of these`

What words user message should include. You can define more than one word separated by a comma.

Defining number of typos per word

`price{2}` - means word can have two mistakes

Requiring exact end of the word

`price$` - word has to end with a letter `e`

Requiring any end of the word. Number of typos in the word still applies.

`cash*`

Requiring any part of the word. Number of typos in the word still applies.

`*cash*`

Requiring any end of the word by it has to end `h` letter.

`cash$*`

You can also define preg match rules. There is known limitation that preg match rule can't have `,` because we use this word to separate words. This will be addressed in next updates.

`/^cashba(.*?)/is`

Requiring words combinations

`car && price`

You can combine all these into something like

`fish,car && price{2}$`

So it would match these messages. Location of words are not important.

* fish price
* car price
* car prike `notice a typo`

`fish,car && price [params max_words=3]`

Means it will match

* fish price please
* car price 
* ~~car price and fish price~~ `but not this because of too many words`

#### `Typos number (include words)` && `Typos number (exclude words)`

If you do not want to define the number of allowable typos per word, you can define them here. They will be applied to all words.

#### `Should include only words from above, not any.`

Means message has to contain only the defined words. In that case you should not be using `&&` operator.

`car,price`

Would mean that visitor message can contain only these words.
