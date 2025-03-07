---
id: chat-api-com
title: chat-api.com integration
---

This tutorial describes how to integrate WhatsApp support using the chat-api.com service.

## Incoming webhook definition

First, create an incoming webhook. You can download and import the configuration file [here](/img/integration/chat-api.json).

You will need to configure the following settings:

*   Change the `Identifier` to a random string.
*   Choose a department.
*   Click `Show integration information`.
    *   In the `Attributes` section, set your `token` from the chat-api.com back office.
    *   In the `Attributes` section, set your `host` from the chat-api.com back office.
*   Set the scope to `whatsapp` if it is missing.

Save the changes.

The following is a sample webhook payload that this configuration supports:


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

The following is a message sample if it contains an image:

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

**One-time configuration**

This configuration is required for sending admin messages back to the visitor (WhatsApp).

You can download and import the configuration file [here](/img/integration/chat-api-restapi.json).

Import the configuration. You do not need to change anything after importing.

## Bot setup

**One-time configuration**

We need to configure a bot whose trigger will be executed upon a webhook event.

You can download and import the configuration file [here](/img/integration/chat-api-bot.json).

*   Set the correct Rest API endpoint that you imported previously and the method to call.

The configuration should look like this:

![](/img/integration/chat-api-bot.png)

## Webhook configuration

**One-time configuration**

Identical webhooks should be set up for these events:

*   `chat.web_add_msg_admin`
*   `chat.workflow.canned_message_before_save`

Webhook configuration is needed for sending admin messages back to the visitor.

*   Make sure you put the correct value for `whatsapp`. It's the scope from the `Incoming webhook`'s `scope` attribute.

![](/img/integration/chat-api-webhook.png)

If you have configured everything correctly, it should all work without coding a single line.

