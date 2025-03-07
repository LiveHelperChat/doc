---
id: incoming-webhooks
title: Incoming webhooks
sidebar_label: Incoming webhooks
---

Incoming webhooks are useful when you want to integrate a third-party API that has a fixed structure. They allow you to define your own structure for the incoming data.

The workflow to integrate a third-party API typically looks like this:

1.  Define an incoming webhook and its attributes.
2.  Provide the created webhook URL to the third-party service.
3.  Define a webhook and create a bot and trigger that will call the REST API.
4.  Define the REST API call itself.

It's not necessary to perform these steps in the exact order shown above. This is just a basic workflow.

## How to find the `chat_id` when sending a webhook request

Just append `?output=json` to your webhook URL.

**Sample request simulating a `Telegram` request:**

```shell
curl -X POST 'https://demo.livehelperchat.com/index.php/webhooks/incoming/xxxxxxxxxxxxxxxxxx?output=json' --header 'accept: application/json' --header 'content-type: application/json' -d '{    "update_id": 532262132,    "message": {        "message_id": 2383,        "from": {            "id": 441347276,            "is_bot": false,            "first_name": "Remigijus",            "last_na,            "language_code": "en"        },        "chat": {            "id": 441347276,            "first_name": "Remigijus",            "last_name": "Kiminas",            "username": "remdex",            "type": "private"        },        "date": 1706693999,        "text": "new chat visitor"    }}'
```

**Response sample:**

```json
{"error":false,"result":{"chat_id":1647601504}}
```

## Fields definition

*   `Name` - This will be visible within the chat, so the operator will know where the chat originated.
*   `Identifier` - This is used as part of the webhook URL. Set it to any random string.
*   `Messages attribute location` - This defines the location where the message data is located (only at the first level).
*   `Nick`, `Phone`, `E-mail` - Defines the location of these attributes within the message itself. It also supports syntax like `chatId||@||0`, which means:
    *   Take the `chatId` attribute, split it by the `@` character, and take the `0` (first) element. To take the last element instead of `0`, write `last`.
*   `Chat ID field location` - The field location within the message itself. We set this attribute as `chat_external_id`.
*   `General conditions for messages being processed (these are first-level attributes)` - This is useful if you want to have some protection against unknown requests. We will check that the first-level attributes match these requirements.
    *   Supported structure: `type=chat,image||fromMe=false`. This expects the `type` to be either `chat` or `image`, and `fromMe` should be `false`.
*   `Text messages`, `Attachments`, `Images` - We support three types of messages. We can define what conditions each message body should meet to be considered one of them.
*   `Chat options` - You can choose the required logic for when a chat from the same visitor arrives, but the previous chat was already closed.

## How to define `Text messages`, `Attachments`, `Images` body message?

You should use the special placeholder `{{msg.<attribute>}}`. You can access any message attribute, no matter how deeply nested it is. You can have more than one placeholder in it.

## How do I send a message back to the third-party API once an incoming chat has been created?

### Set up a webhook

You should set up a `Webhook` and listen to the `chat.web_add_msg_admin` event. In the conditions, you should have:

If your created webhook ID is `1`, the condition should look like this:

`{args.chat.chat_variables_array.iwh_id} = 1`

You can also use a condition like:

`{args.chat.incoming_chat.incoming.scope} = whatsapp`

After that, you should set up a bot and trigger with a REST API call.

[Read more](bot/rest-api.md#replaceable-variables) about possible chat variables under `{args.chat`.

### Set up a REST API call

A REST API call can look like this. We access the external Chat ID so the third-party API knows the chat.

```json
{
    "chatId": {{args.chat.incoming_chat.chat_external_id}},
    "body": {{msg_url}}
}
```

See the [WhatsApp integration](integrating/whatsapp.md) using open https://github.com/open-wa.

## How is the incoming webhook icon/image determined?

For example, in the [fbmessenger](https://github.com/LiveHelperChat/fbmessenger) extension, webhook images are defined like `social/instagram-ico.png`, but the real path is `extension/fbmessenger/design/fbmessengertheme/images/social/instagram-ico.png`. The image prefix is not required!

Live Helper Chat determines those itself. You can also put an icon identifier from [Google Fonts](https://fonts.google.com/icons). For example, [webhook](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:webhook:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=webhook&icon.size=24&icon.color=%23e8eaed).

If an image does not load for you, it means your image path is incorrect in the incoming webhook, and we could not find the full path.

## How to debug if something does not work

1.  [Disable cache](debug.md).
2.  In the incoming webhook configuration, enable `Log request. All requests will be logged`. You will find the problematic request payload in the Audit log.
3.  Modify `modules/lhwebhooks/incoming.php`. At the top, you will find `$dummyPayload = null;`. Replace it with `$dummyPayload = json_decode('{"msg":"data"}',true);` and save the file.
4.  In a browser, type `https://example.com/webhooks/incoming/4654654654?output=json`. You will see the output of the request. Replace the URL with yours.
5.  Now you can just modify `lib/core/lhchat/lhchatwebhookincomming.php` and see the output just by refreshing the page.
6.  If files are not uploaded correctly, make sure you have the `fileinfo` extension installed. It's used to detect file types.
