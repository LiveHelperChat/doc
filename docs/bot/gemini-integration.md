---
id: gemini-integration
sidebar_label: Gemini integration (interactive chat, Tool calls)
title: Integrating Gemini into Live Helper Chat with tool calls support
---

A good place to start your journey with Gemini is to read the [official documentation](https://ai.google.dev/gemini-api/docs/models/gemini).

Notes

* Gemini does not have UI like OpenAI where you can upload your docs. You can see their samples how to use a large context window and attach to running bot your docs.
  * https://ai.google.dev/gemini-api/docs/long-context
  * https://ai.google.dev/gemini-api/docs/document-processing?lang=rest

Installation

* Import [Rest API](/img/bot/gemini/rest-api.json)
* Import [Bot](/img/bot/gemini/bot.json) and choose just imported Rest API in import window.
* Replace in newly imported `Rest API` call `YOUR_API_KEY` with your [API KEY](https://ai.google.dev/gemini-api/docs/api-key)
* Adjust `Rest API` call system prompts.

Important

* For debug you can just edit Rest API in back office and check `Log all request and their responses as system messages.`

### How to call a trigger based on defined function in Gemini?

1. Notice defined function in Gemini `transfer_operator`
2. Add [event](bot/triggers.md) to your trigger with `Type` of `Custom text matching` where `Should include any of these words` value should be `transfer_operator`

E.g

![transfer_operator](/img/bot/transfer-event.png)