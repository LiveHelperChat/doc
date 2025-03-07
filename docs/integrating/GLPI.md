---
id: GLPI
title: GLPI Integration
---

## What is GLPI?

GLPI is described as "The most complete open source service management software" on their website: https://glpi-project.org/

## Integration Flow

GLPI ticket generation can be integrated using one of the following methods:

*   A bot command `!glpi`
*   Automatically on chat close

No extension is required.

## REST API Setup

You can import the configuration file, which can be downloaded [here](/img/integration/glpi-restapi.json).

After importing, ensure you modify the following settings:

*   **Host:** Change the host from `https://tickets.livehelperchat.com/` to your GLPI instance URL.
*   **CreateSession Call:** In the `Params` tab, set the login and password to `<LOGIN>` and `<PASSWORD>`, respectively.
*   **CreateSession Call:** In the `Headers`, set the `App-Token` field to your `<APP_TOKEN>`.
*   **CreateTicket Call:** In the `Headers`, set the `App-Token` field to your `<APP_TOKEN>`.

## Bot Setup

You can import the bot configuration file, which can be downloaded [here](/img/integration/glpi-bot.json).

*   Edit the `CreateSession` trigger to match the screenshot below.

![](/img/integration/glpi/CreateSession.png)

*   Edit the `CreateTicket` trigger to match the screenshot below.

![](/img/integration/glpi/CreateTicket.png)

## Bot Command Setup

Now, set up the bot command that operators will use to create tickets in GLPI.

![](/img/integration/glpi/BotCommand.png)

After this setup, operators can simply type `!glpi` in the chat message area to create a ticket.

## Webhook Setup

If you prefer to automatically create a ticket for every chat, you can set up a webhook to trigger on chat close.

![](/img/integration/glpi/webhook.png)
