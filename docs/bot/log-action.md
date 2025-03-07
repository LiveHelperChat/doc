---
id: log-action
title: Log Action
---

This trigger logs custom content into a separate table, `lh_chat_action`.

A bot configuration might look like this:

![](/img/bot/log-action.png?v=2)

In the scenario above, we log:

*   The current trigger's data.
*   The first trigger that was executed when the bot workflow started.
*   The trigger data that executes the Log Action trigger, using the `Send predefined block` response type.

You can read about the `first_trigger` and `current_trigger` variables in [Text messages](bot/text.md).

`predefined_trigger` is a special variable that is available only if the `Log action` trigger is called from `Send predefined block`.

```json
{
    "current_trigger_id": {args.current_trigger.id},
    "current_trigger_name": {args.current_trigger.name},
    "first_trigger_id": {args.first_trigger.id},
    "first_trigger_name": {args.first_trigger.name},
    "predefined_trigger_id": {args.predefined_trigger.id},
    "predefined_trigger_name": {args.predefined_trigger.name}
}
```

The log itself can be fetched using the Rest API and the `chat_actions` prefill variable in the https://api.livehelperchat.com/#/chat/get_restapi_chats call.
