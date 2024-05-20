---
id: waha
title: WhatsApp WAHA integration
---

This tutorial described how you can add WhatsApp support using https://waha.devlike.pro/. This tutorial won't teach you how to setup `WAHA` product. Only how to integrate it

Usefull information regarding wa

* https://waha.devlike.pro/
* https://waha.devlike.pro/docs/overview/quick-start/

## Incoming webhook definition

First you have to create an incoming webhook. You can import configuration download it [here](/img/integration/waha/incoming-webhook.json)

You will need to do few bits now

* Change `Identifier` to any random string.
* Click `Show integration information.`
* In `Attributes` change `http://server:8002` to your server address.
* Choose a department

Save changes.

## WAHA Starting settings

After receiving the link in the `incoming webhook` section, we now proceed to our server where WAHA is already running to initiate a new session. To do this, we click on `Try it out`, replace the link with our link from LHC, and then click on `Execute`.
![browser_xDmCkYB8Jm](https://github.com/LiveHelperChat/doc/assets/10582537/5eecab5d-73a5-456d-8ff7-311a2512af8f)
![71RdrDJ9EQ](https://github.com/LiveHelperChat/doc/assets/10582537/14b99870-e8df-40a0-8ea0-5869a697ccec)

Afterward, we scroll down to the `/api/screenshot` section, and similarly click on `Try it out`, followed by `Execute`, to view the screenshot, which helps us perform the login to the WhatsApp system.


## Rest API calls setup

**One time configuration**

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/waha/rest-api.json)


Import configuration. 

Change host `http://server:8002` to your server address.

## Bot setup

**One time configuration**

We need to set a bot which trigger will be executed upon webhook event.

You can import configuration download it [here](/img/integration/waha/bot.json)


* Set correct Rest API whcih you imported previously and method to call.

Configuration should look like

![](/img/integration/whatsapp-bot.png).

## Webhook configuration

**One time configuration**

Identical webhooks should be setup for these events

* chat.web_add_msg_admin
* chat.workflow.canned_message_before_save
* chat.before_auto_responder_msg_saved
* chat.desktop_client_admin_msg

Webhook configuration is needed for an admin messages being send back to visitor.

Condition : Compare attribute (then click Add)

1. Attribute : `{args.chat.incoming_chat.incoming.scope}`
Condition : =
Value     : whatsapp

2. Attribute : `{args.chat.last_message.meta_msg_array.content.whisper}`
Condition : !=
Value     : 1

3. Attribute : `{args.chat.last_message.user_id}`
Condition : !=
Value     : -1


* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![image](https://github.com/LiveHelperChat/doc/assets/10582537/89806d7f-0d17-4674-97f3-518469e216b1)


If you did everything correct you should have it all working. Without coding a single line.
