---
id: flowroute
title: Flowroute Integration
---

This document outlines the configuration process for integrating with [Flowroute](https://flowroute.com).

## Incoming Rest API

[Download from here](/img/integration/flowroute/incoming-webhook.json)

You will see there URL which you have to copy and use as callback for URL. `URL to put in third party Rest API service.`

## Creating a REST API Call

* Download and import the REST API call configuration file: [download from here](/img/integration/flowroute/rest-ap.json).
* In `Authorization` Tab set `username` and `password`. You will get those from `Flowroute`

## Create a Bot

Download the bot configuration file: [download from here](/img/integration/flowroute/lhc-bot.json).

Import the bot at `https://example.com/site_admin/genericbot/list`.

While importing choose Your just imported Rest API

## Create webhooks configuration

​![](/img/integration/flowroute/image-1.png)

​![](/img/integration/flowroute/image-2.png)

​![](/img/integration/flowroute/image-3.png)

​![](/img/integration/flowroute/image-4.png)


