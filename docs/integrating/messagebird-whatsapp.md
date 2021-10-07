---
id: messagebird-whatsapp
title: MessageBird WhatsApp/Facebook Messenger
---

This tutorial described how you can add WhatsApp support using https://messagebird.com/en/ product.

Usefull information regarding integration

* During integration we will be using `https://whatsapp-sandbox.messagebird.com/v1/conversations/` sandbox address. 
* After you go live you have to switch to production `https://conversations.messagebird.com/v1/conversations/`

## Setting webhook address for production

To set webhook listener execute this curl command after replacing these variables

* `<live access key>` - your live api/access key
* `<channel id from MessageBird back office>` - channel id from MessageBird back office
* `<identifier>` - your identifier
* `<lhc install path>` - install path of Live Helper Chat

```shell
curl -X POST "https://conversations.messagebird.com/v1/webhooks/" \
  -H "Authorization: AccessKey <live access key>" \
  -H "Content-Type: application/json" \
  -d '{
    "events": ["message.created"],
    "channelId": "<channel id from MessageBird back office>",
    "url": "https://<lhc install path>/index.php/webhooks/incoming/<identifier> from lhc back office>",
    "settings": {
       "expected_http_code" : "2xx"
    }
  }'
```

## Incoming webhook definition

First you have to create an incoming webhook. You can import configuration download it [here](/img/integration/messagebird-iwh.json?v=4)

You will need to do few bits now

* Change `Identifier` to any random string.
* Choose a department
* Click `Show integration information.`
  * In `Attributes` set your `access_key`
  * After you go live change `https://whatsapp-sandbox.messagebird.com/v1/conversations/` to `https://conversations.messagebird.com/v1/conversations/`
* Set scope to `messagebird` if it's missing.

Save changes.

### How do I add another phone number?

After you have completed all configurations you can just

* export your working `Incoming webhook`
* re-import and change `Identifier`.
* Set webhook in another phone number

All the rest should work out of the box.

## Rest API calls setup

**One time configuration**

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/messagebird-restapi.json?v=3)

Import configuration. You do not need to change anything once imported.

## Bot setup

**One time configuration**

We need to set a bot which trigger will be executed upon webhook event.

You can import configuration download it [here](/img/integration/messagebird-bot.json?v=4)

* Set correct Rest API which you imported previously and method to call.

Configuration should look like

![](/img/integration/messagbebird-bot.png)

## Webhook configuration

**One time configuration**

Identical webhooks should be setup for these events

* chat.web_add_msg_admin
* chat.workflow.canned_message_before_save

Webhook configuration is needed for an admin messages being send back to visitor.

* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![](/img/integration/messagebird-webhook.png)

If you did everything correct you should have it all working. Without coding a single line.

