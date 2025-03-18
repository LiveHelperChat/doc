---
id: chatgpt-integration
sidebar_label: ChatGPT Integration (Completions, Tool Calls)
title: Integrating ChatGPT into Live Helper Chat with Tool Calls Support (Completions API)
---

This integration uses the Chat Completions API.

* [API Reference](https://platform.openai.com/docs/api-reference/chat)
* [Text Generation Guide](https://platform.openai.com/docs/guides/text-generation)

For the [Assistant API](https://platform.openai.com/docs/assistants/overview), see [this demo](https://github.com/LiveHelperChat/chatGPT?tab=readme-ov-file#demo).

Before you begin, you will need:

* An OpenAI API Key: [Get your API key here](https://platform.openai.com/api-keys)
* A configured REST API in Live Helper Chat
* A configured Bot in LHC

# Streaming Support

For the streaming version, use the following files instead of the links in the instructions. The rest remains the same. In this example, arguments for function calling are passed as a separate stream.

* [REST API](/img/bot/chatgpt/open-ai-rest-api-completions-stream.json)
* [Bot](/img/bot/chatgpt/open-ai-bot-completions-stream.json)

This configuration is designed for OpenAI chat completion. For other providers, you may need to adjust the bot and REST API configurations. Here's an example that works with Gemini using [OpenRouter](https://openrouter.ai):

* [REST API](/img/bot/chatgpt/openrouter-ai-rest-api.json)
* [Bot](/img/bot/chatgpt/openrouter-gemini-bot.json)

In this example, arguments are passed directly within the function call structure. Due to the vast number of potential scenarios, it's impossible to cover them all. If you have specific requirements, custom solutions are available for a fee. Alternatively, you can implement the changes yourself.

# Flow with Tool Call Support

The main difference from the legacy flow is the support for tool calls.

## REST API

* After obtaining your API key, import the [REST API configuration](/img/bot/chatgpt/rest-api-tool.json) and set a `Bearer` token.
* Modify the `system` prompt as shown in the YouTube video.

## Bot

* Import a bot and configure the correct triggers and API calls as shown in the video. Download the bot configuration [here](/img/bot/chatgpt/lhc-bot-tool.json).

### Calling a Trigger Based on a Defined Function in ChatGPT

1. Note the defined function in Gemini, `transfer_operator`.
2. Add an [event](bot/triggers.md) to your trigger with the `Type` set to `Custom text matching`. The `Should include any of these words` value should be `transfer_operator`.

For example:

![transfer_operator](/img/bot/transfer-event.png)

### Limiting the Knowledge Base to Uploaded Documents (Vector Storage)

Here are my `System instructions` for the bot used on the documentation page:

```
You are a helpful Live Helper Chat Bot. You answer questions based on file search. If you don't know the answer, respond with "I can only help with Live Helper Chat related questions." Provide the most relevant answer to the visitor's question, not exceeding 100 words. Include a link for more information about your answer.
```

# Legacy Flow Without Tool Call Support

A video tutorial is available here: https://youtu.be/A0_zTeynmOA

## REST API

* After obtaining your API key, import the [REST API configuration](/img/bot/chatgpt/rest-api.json) and set a `Bearer` token.
* Modify the `system` prompt as shown in the YouTube video.

## Bot

* Import a bot and configure the correct triggers and API calls as shown in the video. Download the bot configuration [here](/img/bot/chatgpt/lhc-bot.json).

You can now edit the department and choose which bot to use.
