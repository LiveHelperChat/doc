---
id: whatsapp
title: WhatsApp integration
---

:::tip
If you want to integrate business Whatsapp please use official integration https://github.com/LiveHelperChat/fbmessenger which supports
* Facebook messenger
* Whatsapp
* Instagram
:::

This tutorial described how you can add WhatsApp support using https://github.com/open-wa product. This tutorial won't teach you how to setup `open-wa` product. Only how to integrate it

Usefull information regarding wa

* https://github.com/open-wa
* https://docs.openwa.dev/pages/Getting%20Started/quick-run.html
* https://github.com/open-wa/wa-automate-docker

## Tips for open-wa integration

Start one time manually by executing. Once logged from mobile app `session.data.json` file will be generated.

> npx @open-wa/wa-automate -w 'https://webhook.site/7a00ac21-60f2-411e-a571-515b37b2025a'

Clone `https://github.com/open-wa/wa-automate-docker` repository

To cloned repository copy `session.data.json` file.

Modify 

`package.json` file and set webhook which you will see during `Incoming webhook definition` configuration step. `-w` - argument

> "start": "npx @open-wa/wa-automate --in-docker -p 8002 --npm-options=--ignore-scripts -w 'https://webhook.site/7a00ac21-60f2-411e-a571-515b37b2025a'",

Run

> docker-compose up --build

Run as a service

> docker-compose up -d


## Incoming webhook definition

First you have to create an incoming webhook. You can import configuration download it [here](/img/integration/open-wa.json)

You will need to do few bits now

* Change `Identifier` to any random string.
* Click `Show integration information.`
* In `Attachements` change `URL To make request to get content` change `server:8002` to your running server address
* In `Images` change `URL To make request to get content` change `server:8002` to your running server address
* In `Attributes` change `http://server:8002` to your server address.
* Choose a department

Save changes.

### How do I add another phone number?

After you have completed all configurations you can just 

* export your working `Incoming webhook` 
* re-import and change `Identifier`.
* Set webhook in open-wa

All the rest should work out of the box.

## Rest API calls setup

**One time configuration**

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/open-wa-restapi.json)

Import configuration. You do not need to change anything once imported.

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

Webhook configuration is needed for an admin messages being send back to visitor.

Condition : Compare attribute (then click Add)

Attribute : {args.chat.incoming_chat.incoming.scope}
Condition : =
Value     : whatsapp


* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![](/img/integration/whatsapp-webhook.png)

If you did everything correct you should have it all working. Without coding a single line.

