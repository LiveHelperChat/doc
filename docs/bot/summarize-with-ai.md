---
id: summarize-with-ai
sidebar_label: Summarize With AI
title: Summarize with AI
---

Here's a quick way to automatically generate a chat summary after a conversation concludes. The summarization will occur only if the following conditions are met:

*   Only visitor and operator messages are included.
*   The chat must have been assigned to an operator.
*   At least one visitor message must be present after the chat was accepted.

To set this up, you'll need to:

*   Listen for the `chat.close` event.
*   Define a REST API call.
*   Create a bot with a trigger that invokes the REST API.
*   Once you're satisfied with the results, you can disable the `Log all request and their responses as system messages` option.

In this example, we'll use ChatGPT, but any chat completion API should work.

## Define the REST API Call

*   Download and import the REST API configuration from [here](/img/bot/ai/summarize-rest-api.json).
*   Enter your API key in the `REST API => Authorization` section.
*   The configuration currently uses the `{{msg_all_since_transfer_content_date_nick}}` variable. If you're using an older version, you can use `{{msg_all_since_transfer_content}}` instead.
*   You can also adjust the system message in the `Body` section.

## Bot Setup

* Import the bot from [here](/img/bot/ai/summarize-with-ai-bot.json) and select the REST API you just imported.

## Webhook Setup

A webhook will define that this trigger will execute when a chat closes. Configure it as shown in the screenshot below.

![Summarize With AI](/img/bot/summarize-with-ai.png)

If configured correctly, you should see a summary as a system message after the chat ends.

## Sample with Responses API

This Rest API uses `Responses API` and JSON output to get chat summary and sentiment with a single call.

Rest API configuration file sample download [here](/img/bot/chatgpt/chatgpt-summary-sentiment.json)
