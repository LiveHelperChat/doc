---
id: incoming-webhooks
title: Incoming webhooks
sidebar_label: Incoming webhooks
---

Incoming webhooks is usefull in case you want to integrate third party API and that api has fixed structure. So here you define your own.

Workflow to integrate any third party api should look like

1. You define Incoming webhook, and it's attributes.
2. Provide created Webhook URL to third party service.
2. You define Webhook and create a bot and trigger which will call Rest API.
4. You define Rest API call itself.

It's not necessary to do steps in exact order as above. It's just a basic workflow.

## Fields definition

* `Name` - will be visible within chat. So operator will know from where come this chat.
* `Identifier` - is used as part of webhook URL. Set it to any random string.
* `Messages attribute location` - it defines location where message data is located. Only at first level.
* `Nick`, `Phone`, `E-mail` - Defines location of these attributes within message itself. It also supports syntax like `chatId||@||0` which reads like
    * Take `chatId` attribute explode by it by `@` character and take `0` (first) element. To take last element instead of 0 write `last`
* `Chat ID field location` - field location within message itself. We set this attribute as `chat_external_id`
* `General conditions for messages being processed. These are first level attributes` - this is usefull in case you want to have some protection against unknown requests. We will check that first level attributes would match these requirements.
    * Supported structure `type=chat,image||fromMe=false` we expect type to be one of the `chat` or `image` and `fromMe` should be false
* `Text messages`, `Attachements`, `Images` - we support three type of messages. We can define what conditions each message body should meet to be considered one of them.
* `Chat options` - You can choose required logic once chat from same visitor comes but, previous chat was already closed.

## How to define `Text messages`, `Attachements`, `Images` body message?

You should use special placeholder `{{msg.<attribute>}}` you can access any message attribute and does not matter how deep it is. It can have more than one placeholder in it.

## How do I send message back to third party API once incoming chat was created?

### Setup a webhook

You should setup a `Webhook` and listen to `chat.web_add_msg_admin` events. In conditions you should have

If your created webhook id is 1 so condition should look like this

`{args.chat.chat_variables_array.iwh_id} = 1`

You can also use condition like. 

`{args.chat.incoming_chat.incoming.scope} = whatsapp` 

After that you should setup bot and trigger with Rest API call.

### Setup Rest API call.

Rest API can look like this. We acceess external Chat ID so third party API knows the chat.

```json
{
    "chatId": {{args.chat.incoming_chat.chat_external_id}},
    "body": {{msg_url}}
}
```

See [WhatsApp integration](integration/whatsapp.md) using open https://github.com/open-wa