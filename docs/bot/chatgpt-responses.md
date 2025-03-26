---
id: chatgpt-responses
sidebar_label: ChatGPT Integration (Responses, Tool Calls, File Search)
title: Integrating ChatGPT into Live Helper Chat with Responses API, Tool Calls, File Search Support
---

This integration uses the Chat Responses API.

* https://platform.openai.com/docs/guides/tools-file-search
* https://platform.openai.com/docs/quickstart?api-mode=responses
* https://youtu.be/Z-DzsIygsX0 video how to setup.
* https://youtu.be/F0ou70cu7x0 video how to use with third party Rest API

Before you begin, you will need:

* An OpenAI API Key: [Get your API key here](https://platform.openai.com/api-keys)
* A configured REST API in Live Helper Chat
* A configured Bot in LHC

# Streaming Support

Import the version you want `Streaming` OR `Non Streaming`. Streaming version requires NodeJS and PHP-Resque extensions.

# Flow with Tool Call Support

## Rest API

* After getting your API key, import the [Non streaming Rest API configuration](/img/bot/chatgpt/chatgpt-response.json) OR [Streaming Rest API configuration V1](/img/bot/chatgpt/chatgpt-response-stream-api.json) OR [Streaming Rest API configuration V2](/img/bot/chatgpt/chatgpt-response-stream-api-v2.json) and set a `Bearer` token.
* Modify the `system` message `content`
* Make sure you change `YOUR_VECTOR_STORAGE_ID` and `API_KEY`
* After testing you might want to uncheck `Log all request and their responses as system messages.`
* If response takes long time you might want also increase `Maximum execution time`

### What are the differences between V1 and V2 streaming API?

After some testing, I found few edge scenarios that V1 could fail. So V2 fixes those. You do not need to make any changes to bot itself.

### Provide your own vector storage ID (optional)

```json
{
    "type": "file_search",
    "vector_store_ids": ["<storage_id>"]
}
```

Here is example how full `tools` section might look like. If you do not want to use vector storage you can remove that section just.

```json
[
    {
        "type": "file_search",
        "vector_store_ids": ["<storage_id>"]
    },
    {
        "type": "function",
        "name": "password_reminder",
        "description": "Sends a password reset link to the provided email address.",
        "parameters": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string",
                    "description": "The email address associated with the account."
                }
            },
            "required": ["email"]
        }
    },
    {
        "type": "function",
        "name": "support_price",
        "description": "Returns paid support price",
        "parameters": {
            "type": "object",
            "properties": {},
            "required": []
        }
    }
]
```

## Bot

* Import a bot and configure the correct triggers and API calls as shown in the video. Download the bot configuration [Non streamin](/img/bot/chatgpt/chatgpt-response-bot.json) OR [Streaming](/img/bot/chatgpt/chatgpt-response-bot-stream.json).

### Calling a Trigger Based on a Defined Function in ChatGPT

1. Note the defined function in Rest API, `transfer_operator`.
2. Add an [event](bot/triggers.md) to your trigger with the `Type` set to `Custom text matching`. The `Should include any of these words` value should be `transfer_operator`.

For example:

![transfer_operator](/img/bot/transfer-event.png)

### Limiting the Knowledge Base to Uploaded Documents (Vector Storage)

Here are my `System instructions` for the bot used on the documentation page:

```
You are a helpful Live Helper Chat Bot. You answer questions based on file search. If you don't know the answer, respond with "I can only help with Live Helper Chat related questions." Provide the most relevant answer to the visitor's question, not exceeding 100 words. Include a link for more information about your answer.
```
