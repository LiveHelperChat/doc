---
id: chatgpt-integration
sidebar_label: ChatGPT integration (Completions, Tool calls)
title: Integrating ChatGPT into Live Helper Chat with tool calls support
---

This integration flow uses Chat Completions flow.

* https://platform.openai.com/docs/api-reference/chat
* https://platform.openai.com/docs/guides/text-generation

Before that you will need few things

* API Key https://platform.openai.com/api-keys
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

# Flow with tool call support

The Difference from legacy is that we now support tool calls.

## Rest API

* After you have got your API key just import [Rest-API](/img/bot/chatgpt/rest-api-tool.json) and set a `Bearer` token.
* Also modify `system` prompt as per Youtube video.

## Bot

* Import a bot and choose correct triggers and API calls as per video. Download bot [here](/img/bot/chatgpt/lhc-bot-tool.json)

# Legacy flow without tool call support

Video tutorial you can find here - https://youtu.be/A0_zTeynmOA

## Rest API

* After you have got your API key just import [Rest-API](/img/bot/chatgpt/rest-api.json) and set a `Bearer` token.
* Also modify `system` prompt as per Youtube video.

## Bot

* Import a bot and choose correct triggers and API calls as per video. Download bot [here](/img/bot/chatgpt/lhc-bot.json)

Now you can edit the department and choose which bot to use.