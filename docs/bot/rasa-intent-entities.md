---
id: rasa-intent-entities
sidebar_label: Rasa entities extraction
title: Rasa Intent Server with Entities Extraction
---

Rasa is an AI bot that handles the core processing. Integrating it is straightforward once Rasa is running.

By extending your training data with this workflow, you can create:

*   A bot that can provide stock prices.
*   A bot that can provide the next match for a sports game.

You will need the following:

*   A running Rasa service. See: https://rasa.com/docs/rasa/installation
*   A configured REST API in Live Helper Chat.
*   A configured bot in LHC.

For more information, please refer to:

*   https://medium.com/better-programming/chatbots-and-whats-new-in-rasa-2-0-a51c61ca3c33
*   https://github.com/RasaHQ - The main GitHub repository where you can find sample bots.
*   https://towardsdatascience.com/a-beginners-guide-to-rasa-nlu-for-intent-classification-and-named-entity-recognition-a4f0f76b2a96

## Installation Instructions for Docker Version

```shell
git clone https://github.com/LiveHelperChat/rasa-intent-entities.git && cd rasa-intent-entities
```

You can now edit `data/nlu.yml` and add your model data. This file contains examples of users requesting a specific stock price.

Build the Docker image:

```shell
docker-compose build
```

Run it once:

```shell
docker-compose up
```

Run it as a service:

```shell
docker-compose up -d
```

You can test the Rasa REST API using `curl` commands:

```shell script
curl -i http://localhost:5005

# Send demo request
curl localhost:5005/model/parse -d '{"text":"how much does the apple cost?"}'
```

Example JSON response:

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

As you can see, we have the intent `stock_price` and the extracted entity `stock`. Now, let's implement this in the REST API configuration.

## Configuring the REST API in Live Helper Chat

Create a new `REST API` by navigating to:

> System configuration > Live help configuration > REST API Calls

Create a new entry. The configuration should look like this:

Set the body request as JSON and configure the content.

![](/img/bot/rasa-intent-1.png)

Also, configure the `Output parsing`:

![](/img/bot/rasa-intent-extraction.png)

Save the configuration.

## Bot Configuration in Live Helper Chat

For the bot configuration, you need four triggers:

*   `Default`: This trigger should have `Default` and `Default for unknown message` checked.
*   `Intent parser`: This trigger searches for messages with a specific intent.
*   `nlu_fallback`: This trigger sends a message if Rasa doesn't return anything or returns an unexpected result.
*   `stock_price`: This trigger executes when the `stock` entity is extracted.

`Default` trigger configuration:

![](/img/bot/rasa-intent-extraction-default.png)

`Intent parser` - searches our bot for an action

You could directly execute the response for the stock price request. There are multiple ways to achieve the same result. Our approach has the advantage that if you define, for example, a goodbye intent in Rasa, you only need to define a keyword to search for "goodbye."

![](/img/bot/rasa-intent-parser.png)

`nlu_fallback` - If no correct response is returned, we execute a fallback event.

![](/img/bot/rasa-nlu_fallback-entity.png)

`stock_price`

![](/img/bot/stock-price-entity.png)

Conversation example:

![](/img/bot/chat-sample-intent-extraction.png)

**Remember to set your bot as the default department bot.**
