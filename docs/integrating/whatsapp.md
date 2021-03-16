---
id: whatsapp
title: WhatsApp integration
---

This tutorial described how you can add WhatsApp support using https://github.com/open-wa product. This tutorial won't teach you how to setup `open-wa` product. Only how to integrate it

Usefull information regarding wa

* https://github.com/open-wa
* https://docs.openwa.dev/pages/Getting%20Started/quick-run.html
* https://github.com/open-wa/wa-automate-docker

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

## Rest API calls setup

This will be required for an admin messages being send back to visitor (WhatsApp).

You can import configuration download it [here](/img/integration/open-wa-restapi.json)

Import configuration. You do not need to change anything once imported.

## Bot setup

We need to setup bot which trigger will be executed upon webhook event.

You can import configuration download it [here](/img/integration/open-wa-bot.json)

* Set correct Rest API whcih you imported previously and method to call.

Configuration should look like

![](/img/integration/whatsapp-bot.png).

## Webhook configuration

Webhook configuration is needed for an admin messages being send back to visitor.

* Make sure you put correct value for `whatsapp` it's a scope from `Incoming webhook` - `scope` attribute

![](/img/integration/whatsapp-webhook.png)

If you did everything correct you should have it all working. Without coding a single line.

## How do I add another phone number?

As you have all configured you will need just export your `Incoming webhook` and re-import and change `Identifier`. All the rest should work out of the box.