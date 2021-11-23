---
id: log-action
title: Log action
---

This trigger logs custom content into separate table `lh_chat_action`.

Bot configuration can look like this

![](/img/bot/log-action.png)

In above scenario we log very first trigger information which was executed and the last one. As this trigger is used as target for `Send predefined block` first trigger will be the trigger where all action started.

About `first_trigger` and `current_trigger` variables you can read in [Text messages](bot/text.md)
