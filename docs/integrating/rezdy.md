---
id: rezdy
title: Rezdy Integration
---

This document outlines the configuration process for integrating with [Rezdy](https://rezdy.com).

We will interact with the Rezdy service using the `!rezdy` command.

## Creating a REST API Call

*   Download and import the REST API call configuration file: [download from here](/img/integration/rezdy/rest-api.json).
*   Remember to replace `your_api_key` with your actual API key in the REST API configuration.

Import the configuration at `https://example.com/site_admin/genericbot/listrestapi`. Remember to replace `https://example.com` with your actual domain.

![](/img/integration/rezdy/rest-api.png)

## Create a Bot

Download the bot configuration file: [download from here](/img/integration/rezdy/bot.json).

Import the bot at `https://example.com/site_admin/genericbot/list`.

After importing the bot, ensure the `Send` button configuration matches the following:

![](/img/integration/rezdy/bot.png)

## Create a Command

Create the command at `https://example.com/site_admin/genericbot/commands`.

![](/img/integration/rezdy/command.png)
