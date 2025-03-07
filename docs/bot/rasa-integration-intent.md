---
id: rasa-integration-intent
sidebar_label: Rasa Integration (Intent)
title: Integrating Rasa into Live Helper Chat (Intent)
---

Rasa is an AI bot that handles the core AI processing. Integrating it into Live Helper Chat is straightforward once you have Rasa set up and running.

You will need the following:

*   A running Rasa service. See the [Rasa installation guide](https://rasa.com/docs/rasa/installation) for details.
*   A configured REST API in Live Helper Chat.
*   A configured bot in LHC.

## Installation Instructions for Docker Version

```shell
git clone https://github.com/LiveHelperChat/intent-rasa.git && cd intent-rasa
```

You can now edit `data/nlu.yml` to define your model data.

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

# Send a demo request:
curl localhost:5005/model/parse -d '{"text":"who are you"}'

# Example response (intent is bot_challenge):
{"text":"who are you","intent":{"id":234572354186811386,"name":"bot_challenge","confidence":0.9868453741073608},"entities":[],"intent_ranking":[{"id":234572354186811386,"name":"bot_challenge","confidence":0.9868453741073608},{"id":6404620717205297070,"name":"goodbye","confidence":0.005530951544642448},{"id":-411671348428771358,"name":"affirm","confidence":0.0027931963559240103},{"id":-6453914516151693962,"name":"mood_great","confidence":0.002673292765393853},{"id":3246239079246662505,"name":"deny","confidence":0.0013442487688735127},{"id":-2677704442101564553,"name":"greet","confidence":0.00047634306247346103},{"id":3489442963776345962,"name":"mood_unhappy","confidence":0.00033664595684967935}],"response_selector":{"all_retrieval_intents":[],"default":{"response":{"id":null,"response_templates":null,"confidence":0.0,"intent_response_key":null,"template_name":"utter_None"},"ranking":[]}}}
```

## Installation Instructions for Non-Docker Version

This tutorial is partly based on:

For more information about intent configuration, please read:

[A Beginner's Guide to Rasa NLU for Intent Classification and Named Entity Recognition](https://towardsdatascience.com/a-beginners-guide-to-rasa-nlu-for-intent-classification-and-named-entity-recognition-a4f0f76b2a96)

Here's a quick guide to running Rasa:

```shell script
mkdir rasa
cd rasa

# Adapt to your Python version
python3.6m -m venv ./venv
source ./venv/bin/activate
pip3 install -U pip
pip3 install rasa

# Optional: If you encounter errors, try this:
pip3 --use-feature=2020-resolver install rasa

mkdir intent
cd ./intent

# Choose 'yes' to train the initial model
rasa init --no-prompt

# You can now edit data/nlu.yml to define your model data.

# After making changes, train your Rasa model:
rasa train nlu

# To test your model, run (replace nlu-20190515-144445.tar.gz with your trained model):
rasa shell -m models/nlu-20190515-144445.tar.gz

# Run it as an API server:
rasa run --enable-api -m models/nlu-20190515-144445.tar.gz
```

With Rasa configured, you now have everything you need.

## Configuring the REST API in Live Helper Chat

Create a new REST API by navigating to:

> System Configuration > Live Help Configuration > REST API Calls

Create a new entry. The configuration should look like this:

Set the body request as JSON and configure the content.

![](/img/bot/rasa-intent-1.png)

Configure the "Output parsing":

![](/img/bot/rasa-intent-2.png)

Set the confidence threshold to be greater than 85% (0.85). For output parsing, you can also use conditions to check if the intent is a greeting. This allows you to have separate response types based on the detected intent.

## Configuring the Bot in Live Helper Chat

For bot configuration, you need the following triggers:

*   `Default`: This trigger should have "Default" and "Default for unknown message" checked.
*   `Intent parser`: This trigger searches for a message based on the returned response.
*   `To low confidence`: This trigger is sent if the response has a low confidence value.
*   `nlu_fallback`: This is Rasa's internal response when no intent is found.
*   `greet`: This is a response to a greeting intent.

`Default` Configuration:

![](/img/bot/rasa-intent-default.png)

`Intent parser` Configuration:

![](/img/bot/intent-parser.png)

`To low confidence` Configuration:

![](/img/bot/rasa-intent-to-low-confidence.png)

`nlu_fallback` Configuration:

![](/img/bot/rasa-nlu_fallback.png)

`greet` Configuration:

You can define other intents in the same way. For example: `hi, who are you?`

![](/img/bot/rasa-greet.png)

Conversation Example:

![](/img/bot/rasa-intent-detection-conv.png)

**Do not forget to set your bot as the default department bot.**
