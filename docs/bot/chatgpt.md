---
id: chatgpt-integration
sidebar_label: ChatGPT integration (Completions, Tool calls)
title: Integrating ChatGPT into Live Helper Chat with tool calls support
---

This integration flow uses Chat Completions flow.

* https://platform.openai.com/docs/api-reference/chat
* https://platform.openai.com/docs/guides/text-generation

For [Assistant api](https://platform.openai.com/docs/assistants/overview) take a look [here](https://github.com/LiveHelperChat/chatGPT?tab=readme-ov-file#demo)

Before that you will need a few things

* API Key https://platform.openai.com/api-keys
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

# Streaming support

For streaming version instead of using links in instructions, use those files instead. Everything else is the same. In this sample arguments for function calling is passed as separate stream.

 * [Rest API](/img/bot/chatgpt/open-ai-rest-api-completions-stream.json)
 * [Bot](/img/bot/chatgpt/open-ai-bot-completions-stream.json)

This configuration works only with OpenAI chat completion. For any other provider you will need to make few changes to bot and Rest API. Here is another sample which works E.g with Gemini using https://openrouter.ai

* [Rest API](/img/bot/chatgpt/openrouter-ai-rest-api.json)
* [Bot](/img/bot/chatgpt/openrouter-gemini-bot.json)

In this sample arguments are passed directly within the function call structure. For me it's impossible to cover all scenarios. So if you have some requirements, it can be done for a small fee :). Or better you can do it yourself :)


# Flow with tool call support

The Difference from legacy is that we now support tool calls.

## Rest API

* After you have got your API key just import [Rest-API](/img/bot/chatgpt/rest-api-tool.json) and set a `Bearer` token.
* Also modify `system` prompt as per Youtube video.

## Bot

* Import a bot and choose correct triggers and API calls as per video. Download bot [here](/img/bot/chatgpt/lhc-bot-tool.json)

### How to call a trigger based on defined function in ChatGPT?

1. Notice defined function in Gemini `transfer_operator`
2. Add [event](bot/triggers.md) to your trigger with `Type` of `Custom text matching` where `Should include any of these words` value should be `transfer_operator`

E.g

![transfer_operator](/img/bot/transfer-event.png)

### How to limit knowledge base to my uploaded documents aka. Vector storage?

This is my `System instructions` for the bot you see on documentation page

```
You are helpfull Live Helper Chat Bot. You answer questions just file search. If you don't know an answer you answer "I can help only with Live Helper Chat related questions.". You will asswer with one most related answer to visitor question. Your answer should not exceed 100 words. You should include link for more information about your answer.
```

# Legacy flow without tool call support

Video tutorial you can find here - https://youtu.be/A0_zTeynmOA

## Rest API

* After you have got your API key just import [Rest-API](/img/bot/chatgpt/rest-api.json) and set a `Bearer` token.
* Also modify `system` prompt as per Youtube video.

## Bot

* Import a bot and choose correct triggers and API calls as per video. Download bot [here](/img/bot/chatgpt/lhc-bot.json)

Now you can edit the department and choose which bot to use.