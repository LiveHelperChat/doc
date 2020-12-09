---
id: deeppavlov-faq
sidebar_label: DeepPavlov (FAQ)
title: DeepPavlov as FAQ server
---

We will need few things. https://github.com/LiveHelperChat/faq-deeppavlov

* DeepPavlov running API
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

## Running DeepPavlov

Here is a quick version how to run Rasa

```shell script
git clone https://github.com/LiveHelperChat/faq-deeppavlov.git
cd faq-deeppavlov
# Now you can just edit `Dockerfiles/deep/train/file.csv` and put your data there
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
```

Run as service

```shell script
docker-compose -f docker-compose.yml up -d
```

You can try out DeepPavlov API using `curl` commands

```shell script
curl -i http://localhost:5005

curl -X POST "http://localhost:5000/model" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"q\":[\"how old are you?\"]}"

# Response
[[["very young?."],[0.0023965203802132793,0.0011658039174728067,0.0008657494625574156,0.0005414606203846541,0.0007059206448602602,0.0008255833104981557,0.0005902784679946099,0.0027601158497330015,0.0007642232438947259,0.0004863716305588563,0.0003268471415419398,0.0014544600835888503,0.0004896593450576205,0.9866270059016439],[13]]]
```

## Configuring DeepPavlov API in Live Helper Chat

Create a new `Rest API` by navigating to

> System configuration > Live help configuration > Rest API Calls

Just create a `new`. Configuration looks like this

We set body request as JSON and set content.

![](/img/bot/deep-pavlov-faq.png)

We also set `Outpout parsing`

![](/img/bot/deep-pavlov-answer.png)

Now just save.

## Configuration bot in Live Helper Chat

For bot configuration we only need three triggers

* `Default` it has checked `Default`, `Default for unknown message`
* `Message received` just message text with content `{content_1}`
* `Unknown` - this message we will send if `Rasa` did not returned anything.

`Default` trigger configuration

![](/img/bot/deep-pavlov-faq-default.png)

Message received configuration

![](/img/bot/rasa-message-received.png)

Unknown message configuration

![](/img/bot/rasa-unknown.png)

Conversation example

![](/img/bot/deep-pavlov-conv-faq.png)

**Don't forget to set your bot as default department bot.**