---
id: rasa-faq
sidebar_label: Rasa integration (FAQ)
title: Integrating Rasa as FAQ server
---

This FAQ bot is built on top of [Rasa AI](https://rasa.com). This workflow is similar to [intent detection using Rasa](bot/rasa-integration-intent.md).

To run it, you will need:

*   A running Rasa API
*   A REST API configuration in Live Helper Chat
*   A bot configuration in LHC

## Installation Instructions for Docker Version

```shell
```shell
git clone https://github.com/LiveHelperChat/faq-rasa.git && cd faq-rasa
```

To customize your FAQ data, you need to edit two files:

*   `Dockerfiles/faq/faq/data/nlu.yml`

    This file provides a sample of how a question intent should be defined with multiple alternative questions:

    ```yaml
    - intent: chitchat/ask_weather
      examples: |
        - What's the weather like today?
        - Does it look sunny outside today?
        - Oh, do you mind checking the weather for me please?
        - I like sunny days in Berlin.
    ```

*   `Dockerfiles/faq/faq/domain.yml`

    This file is where you define the answers. The example below shows two possible responses the bot can provide:

    ```yaml
      utter_chitchat/ask_weather:
      - text: "Oh, it does look sunny right now in Berlin."
      - text: "I am not sure of the whole week but I can see the sun is out today."
    ```

Now you can build the image:

```shell
docker-compose build
```

Run it once for debugging:

```shell
docker-compose up
```

Run it as a service:

```shell
docker-compose up -d
```

To test the API:

```shell
curl --request POST   --url http://localhost:5005/webhooks/rest/webhook   --header 'content-type: application/json'   --data '{
  "message": "weather berlin"
}'
```

Expected output:

```json
[{"recipient_id":"default","text":"Oh, it does look sunny right now in Berlin."}]
```

## Installation Instructions for Non-Docker Version

```shell
python3.6m -m venv ./venv
source ./venv/bin/activate
pip3 install -U pip
pip3 install rasa

# Optional, if you get some errors you can try this
pip3 --use-feature=2020-resolver install rasa

```shell
git clone https://github.com/LiveHelperChat/faq-rasa.git && cd faq-rasa
```

To customize your FAQ data, you need to edit two files:

*   `Dockerfiles/faq/faq/data/nlu.yml`

    This is a sample of how a question intent should be defined with multiple alternative questions:

    ```yaml
    - intent: chitchat/ask_weather
      examples: |
        - What's the weather like today?
        - Does it look sunny outside today?
        - Oh, do you mind checking the weather for me please?
        - I like sunny days in Berlin.
    ```

*   `Dockerfiles/faq/faq/domain.yml`

    This is a sample of how to define answers. In this case, we've defined two possible responses the bot will provide:

    ```yaml
      utter_chitchat/ask_weather:
      - text: "Oh, it does look sunny right now in Berlin."
      - text: "I am not sure of the whole week but I can see the sun is out today."
    ```

After modifying the files, you can train your bot and run it as a REST API server:

```shell
cd rasa-faq/faq/Dockerfiles/faq/faq && rasa train

# Run as API server
cd rasa-faq/faq/Dockerfiles/faq/faq && rasa run -p 5005
```

## Live Helper Chat Configuration

Create a new `REST API` by navigating to:

> System configuration > Live help configuration > REST API Calls

Create a new entry. The configuration should look like this:

We set the body request as JSON and set the content.

![](/img/bot/rasa-faq.png)

We also configure `Output parsing`:

![](/img/bot/rasa-faq-outputparsing.png)

Now save the configuration.

### Bot Configuration in Live Helper Chat

For the bot configuration, you need three triggers:

*   `Default`: This trigger should have `Default` and `Default for unknown message` checked.
*   `Message received`: This trigger should contain the message text with the content `{content_1}`.
*   `Unknown`: This trigger sends a message if `Rasa` doesn't return anything.

`Default` trigger configuration:

![](/img/bot/rasa-faq-default.png)

`Message received` configuration:

![](/img/bot/rasa-message-received.png)

`Unknown message` configuration:

![](/img/bot/rasa-unknown.png)

Conversation example:

![](/img/bot/rasa-faq-example.png)

## What if I Want to Define Custom Answers Directly in Live Helper Chat?

A simple solution would be to define keywords as answers, which you can then use in the LHC bot.

Define just one answer:

```yaml
  utter_chitchat/ask_weather:
  - text: "rasa_weather"
```

The bot setup should be similar to this [example](bot/rasa-integration-intent.md#configuration-bot-in-live-helper-chat).

**Don't forget to set your bot as the default department bot.**
