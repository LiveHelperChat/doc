---
id: summarize-with-ai
sidebar_label: Summarize With AI
title: Summarize With AI
---

Here is a quick way you can have a chat summary after the chat has ended. It will summarize only if the following conditions were met

* We should pass visitors and operators messages only.
* Only chats with operators assigned.
* There should be at-least one visitor message after a chat was accepted.

We will need few things

* Listen on `chat.close` event
* Define Rest API call
* Create a bot with and trigger which will call `Rest API`
* After you are happy how it works you can uncheck `Log all request and their responses as system messages.`

In this scenario, we will use ChatGPT as a sample. But any Chat completion api would work.

## Define Rest API call

* Download and import Rest API from [here](/img/bot/ai/summarize-rest-api.json)
* Enter your API in `Rest API => Authorization` section. 
* At the moment it uses `{{msg_all_since_transfer_content_date_nick}}` variable if you have an older version you can use just `{{msg_all_since_transfer_content}}`
* You can also adjus system message in `Body` section.

## Bot setup

* Import bot from [here](/img/bot/ai/summarize-with-ai-bot.json) and choose just imported Rest API.

## Webhook setup

Webhook will define that on chat close we will execute this trigger. Just setup as in screnshot below.

![Summarize With AI](/img/bot/summarize-with-ai.png)

If you did everything correctly, you should see a summary after the chat has ended as a system message.







