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

Google offers a grounding feature that can act as your data source if the content is publicly available. For more details, visit [Google's grounding documentation](https://ai.google.dev/gemini-api/docs/grounding?lang=rest#configure-search).

Below is an example of a RAW curl request:

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "system_instruction": {
      "parts": {
        "text": "You are a helpful assistant. When answering questions, you MUST use information found on the https://doc.livehelperchat.com and https://github.com/LiveHelperChat websites NOT on any other. If a question can be answered using information from this specific website, you should do so. If the answer cannot be found on https://doc.livehelperchat.com OR https://github.com/LiveHelperChat, please state that you could not find the answer within the allowed source. General knowledge is not allowed to be used. Please include link to website where you have found your answer."
      }
    },
    "contents": [
      {
        "parts": [
          {"text": "What php version is supported?"}
        ]
      }
    ],
    "tools": [
      {
        "google_search": {}
      }
    ]
  }'
```
In Gemini, you cannot use `google_search` and `functionDeclarations` simultaneously. For reference, see [this discussion](https://discuss.ai.google.dev/t/google-search-tool-and-custom-function-declaration/60671).

If you need to use both `functionDeclarations` and `google_search`, you can set up two bots. The first bot can handle requests that do not involve function calls and forward other requests to the second bot, which has the `google_search` tool enabled.

Here is an example of what the request body defined in LHC might look like:

```json
{
"system_instruction": {
      "parts": {
        "text": "You are a helpful assistant. When answering questions, you MUST use information found on the https://doc.livehelperchat.com/* and https://github.com/LiveHelperChat/* websites NOT on any other. If a question can be answered using information from this specific website, you should do so. If the answer cannot be found on https://doc.livehelperchat.com/* OR https://github.com/LiveHelperChat/*, please state that you could not find the answer within the allowed source. General knowledge is not allowed to be used. Please include link to exact web page where you have found your answer. Response can not exceed 100 words."
      }
    },
    "contents": [
 
{if_previous_visitor_messages_list}
{previous_visitor_messages_list_url__10__0}
{separator},{/separator}{
"role": "{assistant}model{/assistant}{user}user{/user}", 
"parts":[{
           "text": {not_item_empty__args.item.msg}{{args.item.msg}}{/not_item_empty} }]
}
{/previous_visitor_messages_list_url}
{/if_previous_visitor_messages_list}

    ],
"generationConfig": {
                    "maxOutputTokens": 2000,
                },
               "tools": [
{
        "google_search": {}
      }]

  }
```

Installation

* Import [Rest API Not streaming](/img/bot/gemini/rest-api.json) or [Rest API Streaming](/img/bot/gemini/rest-api-streaming.json)
* Import [Bot Not Streaming](/img/bot/gemini/bot.json) or [Bot streaming](/img/bot/gemini/bot-stream.json) and choose just imported Rest API in import window 
* Replace in newly imported `Rest API` call `YOUR_API_KEY` with your [API KEY](https://ai.google.dev/gemini-api/docs/api-key)
* Adjust `Rest API` call system prompts.

Important

* For debug you can just edit Rest API in back office and check `Log all request and their responses as system messages.`

### How to call a trigger based on defined function in Gemini?

1. Notice defined function in Gemini `transfer_operator`
2. Add [event](bot/triggers.md) to your trigger with `Type` of `Custom text matching` where `Should include any of these words` value should be `transfer_operator`

E.g

![transfer_operator](/img/bot/transfer-event.png)