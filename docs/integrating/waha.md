id: waga
title: WhatsApp WAHA integration
---

This tutorial described how you can add WhatsApp support using https://waha.devlike.pro/. This tutorial won't teach you how to setup `WAHA` product. Only how to integrate it

Usefull information regarding wa

* https://waha.devlike.pro/
* https://waha.devlike.pro/docs/overview/quick-start/

## Incoming webhook definition

First you have to create an incoming webhook. You can import configuration download it [here](https://github.com/mysubcult/doc/files/14537055/incoming-webhook-9.json)


You will need to do few bits now

* Change `Identifier` to any random string.
* Click `Show integration information.`
* In `Attributes` change `http://server:8002` to your server address.
* Choose a department

Save changes.

## Rest API calls setup

**One time configuration**

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/open-wa-restapi.json)

Import configuration. 

Change host `http://server:8002` to your server address.

## Bot setup

**One time configuration**

We need to set a bot which trigger will be executed upon webhook event.

You can import configuration download it [here](/img/integration/open-wa-bot.json)

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

Attribute : {args.chat.incoming_chat.incoming.scope}
Condition : =
Value     : whatsapp


* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![](/img/integration/whatsapp-webhook.png)

If you did everything correct you should have it all working. Without coding a single line.
