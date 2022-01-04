---
id: log-action
title: Log action
---

This trigger logs custom content into separate table `lh_chat_action`.

Bot configuration can look like this

![](/img/bot/log-action.png?v=2)

In above scenario we log 

* Current trigger data
* First trigger which was executed as soon bot workflow started
* Trigger data which execute Log action trigger from using `Send predefined block` response type

About `first_trigger`, `current_trigger` variables you can read in [Text messages](bot/text.md)

`predefined_trigger` - is a special variable is available only if `Log action` trigger is called from `Send predefined block`

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

Log itself can be fetched using Rest API and `chat_actions` prefill variable in https://api.livehelperchat.com/#/chat/get_restapi_chats call.