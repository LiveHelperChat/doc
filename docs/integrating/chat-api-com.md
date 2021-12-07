---
id: chat-api-com
title: chat-api.com integration
---

This tutorial described how you can add WhatsApp support using https://chat-api.com/en/?lang=EN product.

## Incoming webhook definition

First you have to create an incoming webhook. You can import configuration download it [here](/img/integration/chat-api.json)

You will need to do few bits now

* Change `Identifier` to any random string.
* Choose a department
* Click `Show integration information.`
    * In `Attributes` set your `token` from chat-api.com back office
    * In `Attributes` set your `host` from chat-api.com back office
* Set scope to `whatsapp` if it's missing.

Save changes.

Sample of webhook this configuration support


```json
{
    "messages": [
        {
            "id": "false_<chat_id>@c.us_AF3E2B1636F9EDB87F80D90CF6A76413",
            "body": "Buenas",
            "fromMe": false,
            "self": 0,
            "isForwarded": 0,
            "author": "<chat_id>@c.us",
            "time": 1638829630,
            "chatId": "<chat_id>@c.us",
            "messageNumber": 108929,
            "type": "chat",
            "senderName": "Remigijus Kiminas",
            "caption": null,
            "quotedMsgBody": null,
            "quotedMsgId": null,
            "quotedMsgType": null,
            "metadata": null,
            "ack": null,
            "chatName": "+<phone_number>"
        }
    ],
    "instanceId": "<instance_id>"
}
```

Message sample if it contains an image

```json
{
    "messages": [
        {
            "id": "false_<chat_id>@c.us_A0EED4D0BCBBAB9E57010D7EC3301BB0",
            "body": "https://s3.eu-central-1.wasabisys.com/incoming-chat-api/<path>/<to>/<image>.jpeg",
            "fromMe": false,
            "self": 0,
            "isForwarded": 0,
            "author": "<chat_id>@c.us",
            "time": 1638833014,
            "chatId": "<chat_id>@c.us",
            "messageNumber": 108991,
            "type": "image",
            "senderName": "Edwar",
            "caption": null,
            "quotedMsgBody": null,
            "quotedMsgId": null,
            "quotedMsgType": null,
            "metadata": null,
            "ack": null,
            "chatName": "+<phone_number>"
        }
    ],
    "instanceId": "<instance_id>"
}
```

## Rest API calls setup

**One time configuration**

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/chat-api-restapi.json)

Import configuration. You do not need to change anything once imported.

## Bot setup

**One time configuration**

We need to set a bot which trigger will be executed upon webhook event.

You can import configuration download it [here](/img/integration/chat-api-bot.json)

* Set correct Rest API which you imported previously and method to call.

Configuration should look like

![](/img/integration/chat-api-bot.png)

## Webhook configuration

**One time configuration**

Identical webhooks should be setup for these events

* chat.web_add_msg_admin
* chat.workflow.canned_message_before_save

Webhook configuration is needed for an admin messages being send back to visitor.

* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![](/img/integration/chat-api-webhook.png)

If you did everything correct you should have it all working. Without coding a single line.

