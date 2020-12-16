---
id: rasa-intent-entities
sidebar_label: Rasa entities extraction
title: Rasa intent server with entities extraction
---

Rasa is just AI bot which does all the hard work. Integration once you have Rasa running is very simple.

With this workflow by extending your training data you could do a 

* A bot which you can ask for a stock price
* A bot which you ask for a next match for the games

We will need few things

* Running Rasa service. https://rasa.com/docs/rasa/installation
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

For more information please read

* https://medium.com/better-programming/chatbots-and-whats-new-in-rasa-2-0-a51c61ca3c33
* https://github.com/RasaHQ their main github repository where you can find also few more sample bots
* https://towardsdatascience.com/a-beginners-guide-to-rasa-nlu-for-intent-classification-and-named-entity-recognition-a4f0f76b2a96

## Install instructions for docker version

```shell
git clone https://github.com/LiveHelperChat/rasa-intent-entities.git && cd rasa-intent-entities
```

Now you can edit `data/nlu.yml` and write your model data in this file. As example this file contains few examples about user requesting specific stock price

Build docker image

```shell
docker-compose build
```

Run one time
```shell
docker-compose up
```

Run as a service

```shell
docker-compose up -d
```

You can try out Rasa rest API using `curl` commands

```shell script
curl -i http://localhost:5005

# Send demo request
curl localhost:5005/model/parse -d '{"text":"how much does the apple cost?"}'
```

Example of JSON response.

```json
{
  "text": "how much does the apple cost?",
  "intent": {
    "id": -5100266420140976000,
    "name": "stock_price",
    "confidence": 0.9999998807907104
  },
  "entities": [
    {
      "entity": "stock",
      "start": 18,
      "end": 23,
      "confidence_entity": 0.999945878982544,
      "value": "apple",
      "extractor": "DIETClassifier"
    }
  ],
  "intent_ranking": [
    {
      "id": -5100266420140976000,
      "name": "stock_price",
      "confidence": 0.9999998807907104
    },
    {
      "id": -3041718864255617000,
      "name": "faq",
      "confidence": 1.3706980439565086e-7
    }
  ],
  "response_selector": {
    "all_retrieval_intents": [],
    "out_of_scope": {
      "response": {
        "id": null,
        "response_templates": null,
        "confidence": 0,
        "intent_response_key": null,
        "template_name": "utter_None"
      },
      "ranking": []
    },
    "faq": {
      "response": {
        "id": -2384809603512026000,
        "response_templates": [
          {
            "text": "faq/ask_location"
          }
        ],
        "confidence": 0.9957873821258545,
        "intent_response_key": "faq/ask_location",
        "template_name": "utter_faq/ask_location"
      },
      "ranking": [
        {
          "id": -2384809603512026000,
          "confidence": 0.9957873821258545,
          "intent_response_key": "faq/ask_location"
        },
        {
          "id": -7675572599941173000,
          "confidence": 0.004212635103613138,
          "intent_response_key": "faq/ask_gender"
        }
      ]
    },
    "chitchat": {
      "response": {
        "id": null,
        "response_templates": null,
        "confidence": 0,
        "intent_response_key": null,
        "template_name": "utter_None"
      },
      "ranking": []
    }
  }
}
```

As you see we have intent `stock_price` and extracted entity `stock`. Now the fun part to implement that in Rest API configuration.

## Configuring Rest API in Live Helper Chat

Create a new `Rest API` by navigating to

> System configuration > Live help configuration > Rest API Calls

Just create a `new`. Configuration looks like this

We set body request as JSON and set content.

![](/img/bot/rasa-intent-1.png)

We also set `Outpout parsing`

![](/img/bot/rasa-intent-extraction.png)

Now just save. 

## Bot configuration in Live Helper Chat

For bot configuration we only need four triggers

* `Default` it has checked `Default`, `Default for unknown message`
* `Inten parser` searches for a messages with intent
* `nlu_fallback` - this message we will send if `Rasa` did not returned anything or returned not what we expected.
* `stock_price` - this trigger will be executed once extracted entity was found.

`Default` trigger configuration

![](/img/bot/rasa-intent-extraction-default.png)

`Inten parser` - searches our bot for an action

It's possible just to execute directly response what you want to do with stock price. So there is many ways you can do same way. Our way has advantage if you define let say goodbye intent in Rasa you just need define keyword to search for goodbye.

![](/img/bot/rasa-intent-parser.png)

`nlu_fallback` - if no correct response was returned we execute fallback event.

![](/img/bot/rasa-nlu_fallback-entity.png)

`stock_price`

![](/img/bot/stock-price-entity.png)

Conversation example

![](/img/bot/chat-sample-intent-extraction.png)

**Don't forget to set your bot as default department bot.**