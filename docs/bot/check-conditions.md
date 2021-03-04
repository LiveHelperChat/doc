---
id: check-conditions
title: Check for conditions to proceed
---

This trigger allows to have custom conditions to be checked before rest of the triggers can be processed.

One of the few possible scenarios can be

* Collecting multiple fields before next trigger can be executed
* Comparing user message with internal chat variable. E.g you set [chat variable](bot/update-current-chat.md/#set-chat-variable-not-visible-by-operator) and later you want that visitor entered correct text.

![](/img/bot/check-conditions.png?v=2)

## Attribute supported placeholders

`Attribute` supports these placeholders

* `lhc.<main chat attribute>` E.g `lhc.email`, `lhc.nick`, `lhc.phone` etc. See [swagger](https://api.livehelperchat.com) for all attributes.
* `<identifier>` - this can be either custom attribute `Field identifier` or just array key from `chat_variables`
* `<chat_variable>` - identical to `{args.chat.chat_variables_array.<variable_key>}` It can be set using `Update current chat response` [response type](bot/update-current-chat.md/#set-chat-variable-not-visible-by-operator)  
 So if you set variable `bot_touched` in attribute field you can use either `bot_touched` or `{args.chat.chat_variables_array.bot_touched}`
* `{args.chat.<main chat attr>}` or `{args.msg.msg}` you can use text matching for visitor message. 
* `online_department` use as attribute to check is department online (***espects** department online hours). In value field 1 means online, 0 - means offline
* `online_op_department` use as attribute to check is department online (**ignores** department online hours). In value field 1 means online, 0 - means offline

If you do not enter `Value` means it's empty.

E.g

 * so `lhc.email != <empty>` as in screenshot. Means I'm checking that e-mail would not be an empty string.
 * `{args.msg.msg}` I'm expecting message to contain one of the words `dispute, chargeback, refund{2}, money back, contact bank`. `Refund` word can have two typos.

## Value supported placeholders

Value supports only `{args.` type placeholders. E.g `{args.msg.msg}` or `{args.chat.chat_variables_array.<variable>}`

## How do I check visitor message with internally stored chat variable?  

Example condition can look like

![](/img/bot/check-internal-conditions.png)

## Collect all information and write information was collected.

Main trigger can look like this.

![](/img/bot/request-appointment.png)

And each collecting information step can look like this

![](/img/bot/collect-nick.png)

## Allow to execute rest of the triggers only if e-mail is not empty

In this example we forward to e-mail collecting workflow if visitor e-mail is empty.

![](/img/bot/condition-example-2.png)

## How to add custom icon if visitor writes some message containing specific text?

For that we will need

* [Webhooks](development/webhooks.md)
* Trigger setup

Trigger setup can look like

![](/img/bot/check-conditions-icon.png)

Webhook setup can look like

![](/img/bot/webhook-event.png)
