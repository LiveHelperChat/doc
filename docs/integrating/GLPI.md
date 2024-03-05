---
id: GLPI
title: GLPI integration
---

## What is GLPI?

As they write `The most complete open source service management software` https://glpi-project.org/

## Integration flow

We integrate GLPI ticket generation using. One of these

* Bot command `!glpi`
* Or it can be automatic on chat close

No extension is needed.

## Rest API setup

You can import configuration - download it [here](/img/integration/glpi-restapi.json)

After import make sure you change

* `Host` from `https://tickets.livehelperchat.com/` to yours
* In `CreateSession` call `Params` tab login and password `<LOGIN>`, `<PASSWORD>`
* In `CreateSession` call `Headers` Field with name `App-Token` set yours `<APP_TOKEN>`
* In `CreateTicket` call `Headers` Field with name `App-Token` set yours `<APP_TOKEN>`

## Bot setup

You can import configuration - download it [here](/img/integration/glpi-bot.json)

* Edit `CreateSession` trigger and make it look like screenshot below.

![](/img/integration/glpi/CreateSession.png)

* Edit `CreateTicket` trigger and make it look like screenshot below.

![](/img/integration/glpi/CreateTicket.png)

## Bot command setup

Now we just need to setup bot command operators will use to create a ticket in GLPI.

![](/img/integration/glpi/BotCommand.png)

After that you can just type `!glpi` in the chat messages area.

## Webhook setup

If you prefer to create a ticket for all chats you can just setup a webhook on chat close.

![](/img/integration/glpi/webhook.png)