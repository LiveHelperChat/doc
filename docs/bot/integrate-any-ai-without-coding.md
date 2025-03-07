---
id: integrating-any-ai-bot-without-coding
title: Integrating any AI without coding
sidebar_label: Integrating AI (without coding)
---

## Introduction

In this tutorial, I will explain how to integrate any AI into Live Helper Chat without coding.

## How it works

The workflow is simple:

*   Define AI REST API calls.
*   Define a bot that uses them.
*   Upon starting a conversation, set a `uuid` which acts as the current conversation handler for the third-party AI.

The REST API has only one request defined.

![](/img/bot/ai/body.jpg)

In the user parameters, we define an additional argument `task_key`, which is set directly in the bot and the request body.

![](/img/bot/ai/user_param.png)

In the output parsing, we have defined three possible combinations:

*   Standard message
*   Indication that the chat should be transferred to an operator
*   Indication to end the conversation

![](/img/bot/ai/output-parsing.png)

The bot itself needs only four triggers.

![](/img/bot/ai/bot-triggers.png)

## Chat started

This trigger is always executed if a visitor sends a message or clicks a button replied to by the bot (the `meta_msg` message field).

![](/img/bot/ai/chat-started-options.png)

The trigger structure defines which method to execute when a visitor sends a message and which trigger to execute based on the bot's response. The response types are defined in the REST API itself.

![](/img/bot/ai/chat-started-trigger.png)

## Bot message send

This is a standard message received from the bot. Additionally, we set an additional chat variable based on the response, which we later reuse in the REST API call itself. This is required for the AI to know what the current conversation is about.

![](/img/bot/ai/bot-message-send.png)

## Transfer to Operator

This simply transfers the chat to an operator.

![](/img/bot/ai/transfer-to-operator.png)

## Default response

In this case, the default response acts as a conversation-ending trigger and displays a bot message.

![](/img/bot/ai/default-response.png)
