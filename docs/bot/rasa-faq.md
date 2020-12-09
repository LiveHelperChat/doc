---
id: rasa-faq
sidebar_label: Rasa integration (FAQ)
title: Integrating Rasa as FAQ server
---

This is FAQ bot build on top of [Rasa AI](https://rasa.com). This workflow is similar to [intent detection using Rasa](bot/rasa-integration-intent.md)

To have it running we will need

* Rasa running API
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

## Install instructions for docker version

```shell
git clone https://github.com/LiveHelperChat/faq-rasa.git && cd faq-rasa
```

Now to have your FAQ data you have to edit two files

* `Dockerfiles/faq/faq/data/nlu.yml`

This is sample how question intent should be defined with multiple alternative questions

```yaml
- intent: chitchat/ask_weather
  examples: |
    - What's the weather like today?
    - Does it look sunny outside today?
    - Oh, do you mind checking the weather for me please?
    - I like sunny days in Berlin.
```

Answers you have to define in

* `Dockerfiles/faq/faq/domain.yml`

This is sample where we define answers. In this case we defined two combinations bot will be answering us.

```yaml
  utter_chitchat/ask_weather:
  - text: "Oh, it does look sunny right now in Berlin."
  - text: "I am not sure of the whole week but I can see the sun is out today."
```

Now we can build our image

```shell
docker-compose build
```

Run for debug one time
```
docker-compose up
```

Run as a service

```
docker-compose up -d
```

To test
```shell
curl --request POST   --url http://localhost:5005/webhooks/rest/webhook   --header 'content-type: application/json'   --data '{
  "message": "weather berlin"
}'
```

Expected output

```json
[{"recipient_id":"default","text":"Oh, it does look sunny right now in Berlin."}]
```

## Install instructions for non docker version

```shell
python3.6m -m venv ./venv
source ./venv/bin/activate
pip3 install -U pip
pip3 install rasa

# Optional, if you get some errors you can try this
pip3 --use-feature=2020-resolver install rasa

git clone https://github.com/LiveHelperChat/faq-rasa.git && cd faq-rasa
```

Now to have your FAQ data you have to edit two files

* `Dockerfiles/faq/faq/data/nlu.yml`

This is sample how question intent should be defined with multiple alternative questions

```yaml
- intent: chitchat/ask_weather
  examples: |
    - What's the weather like today?
    - Does it look sunny outside today?
    - Oh, do you mind checking the weather for me please?
    - I like sunny days in Berlin.
```

Answers you have to define in

* `Dockerfiles/faq/faq/domain.yml`

This is sample where we define answers. In this case we defined two combinations bot will be answering us.

```yaml
  utter_chitchat/ask_weather:
  - text: "Oh, it does look sunny right now in Berlin."
  - text: "I am not sure of the whole week but I can see the sun is out today."
```

After your modification you can train your bot and run it as Rest API server

```shell
cd rasa-faq/faq/Dockerfiles/faq/faq && rasa train

# Run as API server
cd rasa-faq/faq/Dockerfiles/faq/faq && rasa run -p 5005
```

## Live Helper Chat configuration

Create a new `Rest API` by navigating to

> System configuration > Live help configuration > Rest API Calls

Just create a `new`. Configuration looks like this

We set body request as JSON and set content.

![](/img/bot/rasa-faq.png)

We also set `Outpout parsing`

![](/img/bot/rasa-faq-outputparsing.png)

Now just save.

### Configuration bot in Live Helper Chat

For bot configuration we only need three triggers

* `Default` it has checked `Default`, `Default for unknown message`
* `Message received` just message text with content `{content_1}`
* `Unknown` - this message we will send if `Rasa` did not returned anything.

`Default` trigger configuration

![](/img/bot/rasa-faq-default.png)

Message received configuration

![](/img/bot/rasa-message-received.png)

Unknown message configuration

![](/img/bot/rasa-unknown.png)

Conversation example

![](/img/bot/rasa-faq-example.png)

## What if I want to define custom answers in Live Helper Chat directly?

Simples solution would be just as answer define keywords which afterwards ou can use in lhc bot.

We define just one answer

```yaml
  utter_chitchat/ask_weather:
  - text: "rasa_weather"
```

Bot setup should be similar to this [example](bot/rasa-integration-intent.md#configuration-bot-in-live-helper-chat)

**Don't forget to set your bot as default department bot.**