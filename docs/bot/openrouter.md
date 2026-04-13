---
id: openrouter-integration
sidebar_label: OpenRouter integration (Responses API, Tool Calls)
title: Integrating OpenRouter into Live Helper Chat with Responses API and Tool Calls support
---

[OpenRouter](https://openrouter.ai) is a unified API gateway that gives you access to hundreds of AI models — including OpenAI, Anthropic Claude, Google Gemini, Meta Llama, and many others — through a single OpenAI-compatible endpoint.

Before you begin, you will need:

* An API Key from [https://openrouter.ai/keys](https://openrouter.ai/keys)
* A configured REST API in Live Helper Chat
* A configured Bot in LHC

:::tip
OpenRouter uses an OpenAI-compatible Responses API (`/api/v1/responses`). The LHC configuration files below are nearly identical to the [ChatGPT Responses API](bot/chatgpt-responses.md) integration — the only differences are the host (`https://openrouter.ai`) and the model name.
:::

# Streaming vs Non-Streaming

Choose the variant that fits your infrastructure:

| Variant | Requires |
|---|---|
| **Non-Streaming** | PHP only |
| **Streaming** | PHP + NodeJS + PHP-Resque extensions |

# Flow with Tool Call Support

The examples below include two sample tool-call functions (`password_reminder` and `support_price`) to demonstrate how function calling works end-to-end.

## REST API

* Import one of the REST API configurations:
  * [Non-Streaming REST API](/img/bot/openrouter/rest-api-no-stream.json)
  * [Streaming REST API](/img/bot/openrouter/rest-api-stream.json)
* Set the `Bearer` token value to your OpenRouter API key (`YOUR_API_KEY`).
* Change the `model` field in the request body to the model you want to use, for example `openai/gpt-4o`, `anthropic/claude-3.5-sonnet`, `google/gemini-2.0-flash` etc. See the full list at [https://openrouter.ai/models](https://openrouter.ai/models).
* Adjust the `system` message `content` to match your use case.
* Optionally replace `YOUR_VECTOR_STORAGE_ID` with your OpenAI vector store ID if you want file search. Remove the `file_search` tool entry if you don't need it.
* After testing you may want to uncheck `Log all request and their responses as system messages.`
* If responses take a long time, increase `Maximum execution time`.

### Request body overview

The request body sent to OpenRouter looks like this (simplified):

```json
{
    "model": "openai/gpt-4o",
    "stream": false,
    "parallel_tool_calls": false,
    "input": [
      {
        "role": "system",
        "content": "You are a helpful assistant..."
      }
    ],
    "tools": [
        {
            "type": "file_search",
            "vector_store_ids": ["<YOUR_VECTOR_STORAGE_ID>"]
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
}
```

Set `"stream": true` when using the streaming REST API import.

## Bot

* Import one of the bot configurations:
  * [Non-Streaming Bot](/img/bot/openrouter/response-no-stream.json)
  * [Streaming Bot](/img/bot/openrouter/response-stream-bot.json)
* During the import wizard, select the REST API you just imported.

### Calling a trigger based on a defined function

This is how you would wire up the `transfer_operator` scenario (the same pattern applies to any tool call).

1. Define the function in the REST API request body:

```json
{
  "type": "function",
  "name": "transfer_operator",
  "description": "Transfers to a human agent if the user explicitly asks for one or the bot cannot resolve the issue.",
  "parameters": {
    "type": "object",
    "properties": {},
    "required": []
  }
}
```

You can also add a hint to your system prompt:

> Always call transfer_operator function if (and only if) you are explicitly asked for a human (or agent) OR if you cannot help the user with a specific task.

2. Add an [event](bot/triggers.md) to the relevant trigger in your bot:
   * **Type**: `Custom text matching`
   * **Should include any of these words**: `transfer_operator`

![transfer_operator](/img/bot/transfer-event.png)

### Limiting the knowledge base to uploaded documents (Vector Storage)

Here are example system instructions for a documentation bot:

```
You are a helpful Live Helper Chat Bot. You answer questions based on file search. If you don't know the answer, respond with "I can only help with Live Helper Chat related questions." Provide the most relevant answer to the visitor's question, not exceeding 100 words. Include a link for more information about your answer.
```

# Choosing a model

OpenRouter supports a large number of models. Change the `model` field in the REST API request body to switch models without any other changes. Some popular options:

| Provider | Model identifier |
|---|---|
| OpenAI | `openai/gpt-4o` |
| OpenAI | `openai/gpt-4.1` |
| Anthropic | `anthropic/claude-3.5-sonnet` |
| Anthropic | `anthropic/claude-3.7-sonnet` |
| Google | `google/gemini-2.0-flash` |
| Meta | `meta-llama/llama-3.3-70b-instruct` |
| DeepSeek | `deepseek/deepseek-chat` |

See the full model list at [https://openrouter.ai/models](https://openrouter.ai/models).

# Debugging

For debug purposes, edit the REST API in the back office and check `Log all request and their responses as system messages.` This will display the raw API request and response as system messages in the chat, which makes it easy to diagnose unexpected outputs or failed tool calls.
