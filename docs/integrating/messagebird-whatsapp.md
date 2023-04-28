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
    "events": ["message.created",","message.updated"],
    "channelId": "<channel id from MessageBird back office>",
    "url": "https://<lhc install path>/index.php/webhooks/incoming/<identifier> from lhc back office>",
    "settings": {
       "expected_http_code" : "2xx"
    }
  }'
```

Update webhook
```shell
curl -X PATCH "https://conversations.messagebird.com/v1/webhooks/<webhook ID>" \
-H "Authorization: AccessKey <live access key>" \
-H "Content-Type: application/json" \
-d '{
"events": ["message.created","message.updated"]
}'
```

List webhooks
```shell
curl -X GET "https://conversations.messagebird.com/v1/webhooks/" \
-H "Authorization: AccessKey <live access key>"
```

Delete webhook
```shell
curl -X DELETE "https://conversations.messagebird.com/v1/webhooks/<webhook ID>" \
-H "Authorization: AccessKey <live access key>"
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

Sample of webhook this configuration support

```json
{
    "contact": {
        "id": "3637e85836bd49a185c8cabd62a88f8c",
        "href": "",
        "msisdn": 37065272274,
        "displayName": "Remigijus Kiminas",
        "firstName": "",
        "lastName": "",
        "customDetails": [],
        "attributes": [],
        "createdDatetime": "2021-08-07T05:13:01Z",
        "updatedDatetime": "2021-08-07T05:13:01Z"
    },
    "conversation": {
        "id": "2386ce6e75af4286a5617f7900c498dd",
        "contactId": "3637e85836bd49a185c8cabd62a88f8c",
        "status": "active",
        "createdDatetime": "2021-08-07T05:13:01Z",
        "updatedDatetime": "2021-10-28T05:00:01.084071333Z",
        "lastReceivedDatetime": "2021-10-28T05:07:13.735316379Z",
        "lastUsedChannelId": "13e2cb41651e4af5a31bd379145433b5",
        "messages": {
            "totalCount": 0,
            "href": "https://whatsapp-sandbox.messagebird.com//v1/conversations/2386ce6e75af4286a5617f7900c498dd/messages"
        }
    },
    "message": {
        "id": "4587a9c901d7426ba66eb2ec153c68dd",
        "conversationId": "2386ce6e75af4286a5617f7900c498dd",
        "platform": "whatsapp",
        "to": "+447418310508",
        "from": "+37065272274",
        "channelId": "13e2cb41651e4af5a31bd379145433b5",
        "type": "text",
        "content": {
            "text": "Gggg"
        },
        "direction": "received",
        "status": "received",
        "createdDatetime": "2021-10-28T05:07:13Z",
        "updatedDatetime": "2021-10-28T05:07:13.735327939Z"
    },
    "type": "message.created"
}
```

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

