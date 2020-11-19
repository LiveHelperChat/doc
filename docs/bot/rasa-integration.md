---
id: rasa-integration
sidebar_label: Rasa integration
title: Integrating Rasa into Live Helper Chat
---

Rasa is just AI bot which does all the hard work. Integration once you have rasa is dead simple. Once you have `Rasa` running. 

We will need few things

* Running Rasa service. https://rasa.com/docs/rasa/installation/
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

## Running Rasa

I assume you know how to run Rasa. Refer https://rasa.com/docs/rasa/installation/ documentation.

## Configuring Rest API in Live Helper Chat

Create a new `Rest API` by navigating to

> System configuration > Live help configuration > Rest API Calls

Just create a `new`. Configuration looks like this

We set body request as JSON and set content.

![](/img/bot/rasa-1.png)

We also set `Outpout parsing`

![](/img/bot/rasa-2.png)

Now just save. 

## Configuration bot in Live Helper Chat

For bot configuration we only need three triggers

* `Default` it has checked `Default`, `Default for unknown message`
* `Message received` just message text with content `{content_1}`
* `Unknown` - this message we will send if `Rasa` did not returned anything.

`Default` trigger configuration

![](/img/bot/rasa-bot-1.png)

Message received configuration

![](/img/bot/rasa-message-received.png)

Unknown message configuration

![](/img/bot/rasa-unknown.png)

Conversation example

![](/img/bot/rasa-conv.png)

**Don't forget to set your bot as default department bot.**