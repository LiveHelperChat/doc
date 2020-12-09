---
id: rasa-integration-intent
sidebar_label: Rasa integration (intent)
title: Integrating Rasa into Live Helper Chat (intent)
---

Rasa is just AI bot which does all the hard work. Integration once you have rasa is dead simple. Once you have `Rasa` running.

We will need few things

* Running Rasa service. https://rasa.com/docs/rasa/installation
* Rest API configuration in Live Helper Chat
* Bot configuration in LHC

## Install instructions for docker version

```shell
git clone https://github.com/LiveHelperChat/intent-rasa.git && cd intent-rasa
```

Now you can edit `data/nlu.yml` and write your model data in this file.

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
curl localhost:5005/model/parse -d '{"text":"who are you"}'

# Response. In this case intent is bot_challange
{"text":"who are you","intent":{"id":234572354186811386,"name":"bot_challenge","confidence":0.9868453741073608},"entities":[],"intent_ranking":[{"id":234572354186811386,"name":"bot_challenge","confidence":0.9868453741073608},{"id":6404620717205297070,"name":"goodbye","confidence":0.005530951544642448},{"id":-411671348428771358,"name":"affirm","confidence":0.0027931963559240103},{"id":-6453914516151693962,"name":"mood_great","confidence":0.002673292765393853},{"id":3246239079246662505,"name":"deny","confidence":0.0013442487688735127},{"id":-2677704442101564553,"name":"greet","confidence":0.00047634306247346103},{"id":3489442963776345962,"name":"mood_unhappy","confidence":0.00033664595684967935}],"response_selector":{"all_retrieval_intents":[],"default":{"response":{"id":null,"response_templates":null,"confidence":0.0,"intent_response_key":null,"template_name":"utter_None"},"ranking":[]}}}
```

## Install instructions for non docker version

This tutorial is partly based on 

If you want to find out more about intent and how to configure it please read.

https://towardsdatascience.com/a-beginners-guide-to-rasa-nlu-for-intent-classification-and-named-entity-recognition-a4f0f76b2a96

Here is a quick version how to run Rasa

```shell script
mkdir rasa
cd rasa

# Change to your python version
python3.6m -m venv ./venv
source ./venv/bin/activate
pip3 install -U pip
pip3 install rasa

# Optional, if you get some errors you can try this
pip3 --use-feature=2020-resolver install rasa

mkdir intent
cd ./intent

# Choose yes to train initial model
rasa init --no-prompt

# Now you can edit 
# data/nlu.yml and write your model data in this file.

# After you did above changes you can train your Rasa
rasa train nlu

# To try out your model run. [Replace nlu-20190515-144445.tar.gz with your trained model.]
rasa shell -m models/nlu-20190515-144445.tar.gz

# Run it as API server
rasa run --enable-api -m models/nlu-20190515-144445.tar.gz

```

With `Rasa` we have now everything we need now.

## Configuring Rest API in Live Helper Chat

Create a new `Rest API` by navigating to

> System configuration > Live help configuration > Rest API Calls

Just create a `new`. Configuration looks like this

We set body request as JSON and set content.

![](/img/bot/rasa-intent-1.png)

We also set `Outpout parsing`

![](/img/bot/rasa-intent-2.png)

We set that confidence would be greater than 85% (0.85). As for output parsing you can also in condition to use check that intent is greeting. So in bot you would have separate response type by intent.

## Configuration bot in Live Helper Chat

For bot configuration we only need three triggers

* `Default` it has checked `Default`, `Default for unknown message`
* `Intent parser` We search for a message by returned response.
* `To low confidence` - this will be send if response has to low confidence value.
* `nlu_fallback` - it's Rasa internal return response when no intent was found.
* `greet` - just greeting intent response

`Default` configuration

![](/img/bot/rasa-intent-default.png)

`Intent parser` configuration

![](/img/bot/intent-parser.png)

`To low confidence` configuration

![](/img/bot/rasa-intent-to-low-confidence.png)

`nlu_fallback` configuration

![](/img/bot/rasa-nlu_fallback.png)

`greet` configuration

Same way you can define other intents. E.g `hi, who are you?`

![](/img/bot/rasa-greet.png)

Conversation example

![](/img/bot/rasa-intent-detection-conv.png)

**Don't forget to set your bot as default department bot.**