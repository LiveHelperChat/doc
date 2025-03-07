---
id: deeppavlov-faq
sidebar_label: DeepPavlov (FAQ)
title: DeepPavlov as FAQ Server
---

To integrate DeepPavlov with Live Helper Chat, you'll need the following:

*   A running DeepPavlov API.
*   A configured REST API in Live Helper Chat.
*   A configured bot in LHC.

## Running DeepPavlov

Here's a quick guide on how to run DeepPavlov:

```shell script
git clone https://github.com/LiveHelperChat/faq-deeppavlov.git
cd faq-deeppavlov
# You can edit `Dockerfiles/deep/train/file.csv` and add your data.
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
```

To run DeepPavlov as a service:

```shell script
docker-compose -f docker-compose.yml up -d
```

You can test the DeepPavlov API using `curl` commands:

```shell script
curl -i http://localhost:5005

curl -X POST "http://localhost:5000/model" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"q\":[\"how old are you?\"]}"

# Response
[[["very young?."],[0.0023965203802132793,0.0011658039174728067,0.0008657494625574156,0.0005414606203846541,0.0007059206448602602,0.0008255833104981557,0.0005902784679946099,0.0027601158497330015,0.0007642232438947259,0.0004863716305588563,0.0003268471415419398,0.0014544600835888503,0.0004896593450576205,0.9866270059016439],[13]]]
```

## Configuring the DeepPavlov API in Live Helper Chat

Create a new `Rest API` by navigating to:

> System configuration > Live help configuration > Rest API Calls

Create a new REST API with the following configuration:

Set the body request as JSON and configure the content.

![](/img/bot/deep-pavlov-faq.png)

Configure the `Output parsing`:

![](/img/bot/deep-pavlov-answer.png)

Save the configuration.

## Configuring a Bot in Live Helper Chat

For bot configuration, you need three triggers:

*   `Default`: This trigger should have the `Default` and `Default for unknown message` options checked.
*   `Message received`: This trigger should contain the message text with the content `{content_1}`.
*   `Unknown`: This trigger will send a message if `Rasa` (should be DeepPavlov) doesn't return anything.

`Default` trigger configuration:

![](/img/bot/deep-pavlov-faq-default.png)

`Message received` configuration:

![](/img/bot/rasa-message-received.png)

`Unknown` message configuration:

![](/img/bot/rasa-unknown.png)

Conversation example:

![](/img/bot/deep-pavlov-conv-faq.png)

**Important: Remember to set your bot as the default department bot.**
