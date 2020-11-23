---
id: check-conditions
title: Check for conditions to proceed
---

This triggers allows to have custom conditions to be checked before rest of the triggers to be processed.

![](/img/bot/check-conditions.png?v=2)

Supported attributes for conditions to check

* `lhc.<main chat attribute>` E.g `lhc.email`, `lhc.nick`, `lhc.phone` etc. See [swagger](https://api.livehelperchat.com) for all attributes.
* `<identifier>` - this can be either custom attribute `Field identifier` or just array key from `chat_variables`
* `{args.chat.<main chat attr>}` or  `{args.msg.msg}` you can use text matching for visitor message. 

If you do not enter `Value` means it's empty.

E.g

 * so `lhc.email != <empty>` as in screenshot. Means I'm checking that e-mail would not be an empty string.
 * `{args.msg.msg}` I'm expecting message to contain one of the words `dispute, chargeback, refund{2}, money back, contact bank`. `Refund` word can have two typos.

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
