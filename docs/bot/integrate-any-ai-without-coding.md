---
id: integrating-any-ai-bot-without-coding
title: Integrating any AI without coding
sidebar_label: Integrating AI (without coding)
---

## Introduction

In this tutorial I'll give and explain how to integrate any AI without coding into Live Helper Chat

## How it works?

Workflow is as simple as

* We define AI Rest API calls.
* We define bot which uses them.
* Upon conversation start it set's `uuid` and it act's as present conversation handler for third party AI.

Rest API has only one request defined.

![](/img/bot/ai/body.jpg)

In user param we define additional argument `task_key` which is set directly in the bot and request body.

![](/img/bot/ai/user_param.png)

In output parsing we have defined 3 possible combinations

* Standard message
* Indication that chat should be transferred to an operator
* Indication to end a conversation

![](/img/bot/ai/output-parsing.png)

Bot itself needs only 4 triggers

![](/img/bot/ai/bot-triggers.png)

## Chat started
This trigger is always executed if visitor sends a message or clicks a button replied by bot `meta_msg` msg field.

![](/img/bot/ai/chat-started-options.png)

Trigger structure. It defines what method we should execute if visitor sends a message and what trigger to execute based on bot response. Response types we have defined in Rest API itself.

![](/img/bot/ai/chat-started-trigger.png)

## Bot message send

It's a standard message we received from bot. Additionally we set additional chat variable based on response. Which we later reuse in Rest API call itself. IT's required for AI to know about what present conversation is going on.

![](/img/bot/ai/bot-message-send.png)

## Transfer to Operator

Just transfers chat to an operator.

![](/img/bot/ai/transfer-to-operator.png)

## Default response

Default response in this case act's just as conversation ending trigger and shows bot message.

![](/img/bot/ai/default-response.png)
