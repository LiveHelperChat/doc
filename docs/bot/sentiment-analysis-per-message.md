---
id: sentiment-analysis-per-message
title: DeepPavlov (Sentiment analysis per message)
---

In this article I'll show you how to setup sentiment analysis using https://deeppavlov.ai/ and my prepared [docker image](https://github.com/LiveHelperChat/sentiment-per-message)

Required 3.99v Live Helper Chat version.

## Installing DeepPavlov

```shell
git clone https://github.com/LiveHelperChat/sentiment-per-message && cd sentiment-per-message
docker-compose -f docker-compose.yml pull
wget https://livehelperchat.com/var/deep_sentence.tgz
tar zxfv deep_sentence.tgz
rm -f deep_sentence.tgz
```

Run one time

```
docker-compose -f docker-compose.yml up
```

Run as a service

```
docker-compose -f docker-compose.yml up -d
```

Testing

```
curl -X 'POST' \
  'http://127.0.0.1:5058/model' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "sentences": [
    "I'\''m sad"
  ]
}'
```

If you did everything right you should see output like this

```shell
[[["negative",0.8363235592842102]]]
```

You can also point your browser to 

> http://127.0.0.1:5058/docs

## Configuring Live Helper Chat

Our requirements are

* We should send set sentiment on chat close event
* We should see visitor sentiment while chat is going on
* Support ElasticSearch for sentiment analysis.

For that we will be using [webhooks](development/webhooks.md).

### Configuring Rest API call

In this scenario Rest API will be sending individual message to get a sentiment. 

[Download configuration](/img/bot/sentiment-per-message/rest-api-v2.json)

After import make sure you change host if you are not running it on local machine.

### Configuring bot

[Download configuration](/img/bot/sentiment-per-message/bot.json) you will need to set appropriate Rest API calls.

In the bot for simplicity we will have

* `Sentiment User Message` - this trigger is executed once we receive a message from visitor/operator (`chat.web_add_msg_admin`,`chat.chat_started`,`chat.addmsguser`) events
* `Evaluate Sentiment Message` - this trigger works with response from Rest API call
* `Sentiment Chat` - this trigger does all the aggregation and set's main chat sentiment attributes (`chat.close` event)

In this configuration we set following sentiment attributes

* Set sentiment for the operator and visitor.
* Update visitor sentiment within each message.
* Update visitor sentiment per chat

#### Main configuration for the Rest API Call

I strongly suggest to use [php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extensions and offload all Rest API calls...

If you webhooks worker is already `resque` type you can un-check. `Send Rest API Call in the background.` as  process already will be running in the background.

![](/img/bot/sentiment-per-message/rest-api.png)

#### Evaluate Sentiment Message

This trigger stores sentiment withing chat message and recalculates sentiment for the chat as a whole.

![](/img/bot/sentiment-per-message/sentiment-outcome.png)

More information about [Messages aggregation](bot/update-current-chat.md#messages-aggregation)

#### Sentiment Chat

Calculates visitor messages sentiment using `SUM as comparator and AVG as value`

![](/img/bot/sentiment-per-message/sentiment-visitor-sample-1.png)

Calculates operator messages sentiment using `SUM as comparator and AVG as value`

![](/img/bot/sentiment-per-message/sentiment-visitor-sample-2.png)

Calculates ratio of positive messages in comparison to negative and positive messages.

![](/img/bot/sentiment-per-message/sentiment-visitor-sample-3.png)

### Configuring webhook

In webhook we define what event we want to listen.

Presently we are interested in for events

* `chat.web_add_msg_admin` - listen for operator message and set sentiment
* `chat.chat_started` - listen for very first visitor message
* `chat.addmsguser` - listen for visitor message
* `chat.close` - make summary of sentiment based on chat messages

![](/img/bot/sentiment-per-message/webhooks.png)

## Bonus

Using this configuration you can also show custom icon based on chat sentiment.

![](/img/bot/sentiment-per-message/sentiment-icon-chat.png)