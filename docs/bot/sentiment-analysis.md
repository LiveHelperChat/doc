---
id: sentiment-analysis
title: DeepPavlov (Sentiment analysis)
---

In this article I'll show you how to setup sentiment analysis using https://deeppavlov.ai/ and my prepared [docker image](https://github.com/LiveHelperChat/sentiment)

## Installing DeepPavlov

```shell
git clone https://github.com/LiveHelperChat/sentiment && cd sentiment
docker-compose -f docker-compose.yml pull
wget https://livehelperchat.com/var/deep.tgz
tar zxfv deep.tgz
rm -f deep.tgz
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
curl -X POST "http://localhost:5000/model" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"x\":[\"all went no so good, but could have been better\"]}"
```

If you did everything right you should see output like this

```shell
[["neutral"]]
```

## Configuring Live Helper Chat

Our requirements are

* We should send set sentiment on chat close event
* Only for chats where operator participated
* Set relevant chat subject

For that we will be using [webhooks](development/webhooks.md).

### Configuring Rest API call

In this case we are sending to bot only messages (operator and visitor) which happened after chat become pending. For that there is placeholder `{{msg_all_since_transfer_content}}`. You can also use [other](bot/rest-api.md#replaceable-variables) if you want.

![](/img/bot/rest-api-sentiment-1.png)

In output combination we expect `200` header and very first element should contain our evaluation.

![](/img/bot/sentiment-output-parsing.png)

### Configuring bot

In the bot for simplicity we will have

* `chat.close` This trigger will be the one who get's executed on chat close event.
* `Set sentiment` This trigger will be executed if Rest API returns sentiment.
* `very_positive`,`neutral` just trigger which set's a subject.

`chat.close` trigger screenshot

![](/img/bot/sentiment-chat-close.png)

`Set sentiment` trigger sceenshot

In this trigger at the moment only two evaluations are defined `very_positive`,`neutral` same way you can add the missing ones.

![](/img/bot/sentiment-set-sentiment.png)

`very_positive`,`neutral` trigger screenshot

First text message is just for debug purposes. Second one response we just set a subject with ID 1.

![](/img/bot/sentiment-very-positive.png)

### Configuring webhook

In webhook we define what event we want to listen. Also we want to listen to chats which had an operator.

![](/img/bot/webhook-close.png)

That's it :)