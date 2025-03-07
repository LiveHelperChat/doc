---
id: rasa-integration
sidebar_label: Rasa integration (chatbot)
title: Integrating Rasa into Live Helper Chat (chatbot)
---

Rasa is an AI bot that handles the core AI processing. Integrating Rasa is straightforward once you have it running.

You will need the following:

*   A running Rasa service. See the [Rasa installation guide](https://rasa.com/docs/rasa/installation).
*   A configured REST API in Live Helper Chat.
*   A bot configured in LHC.

## Running Rasa

This guide assumes you have some familiarity with Rasa. Refer to the [Rasa documentation](https://rasa.com/docs/rasa/installation/) for comprehensive instructions.

Here's a quickstart to get Rasa running:

```shell script
mkdir rasa
cd rasa

# Adapt to your Python version
python3.6m -m venv ./venv
source ./venv/bin/activate
pip3 install -U pip
pip3 install rasa

# (Optional) Try this if you encounter errors
pip3 --use-feature=2020-resolver install rasa

mkdir bot
cd ./bot

# Select 'yes' to train the initial model
rasa init

# Test the bot
rasa shell

# Start the Rasa REST API service
rasa run
```

You can test the Rasa REST API using `curl` commands:

```shell script
curl -i http://localhost:5005

curl --request POST   --url http://localhost:5005/webhooks/rest/webhook   --header 'content-type: application/json'   --data '{
  "message": "Hello"
}'

# Expected response:
[{"recipient_id":"default","text":"Hey! How are you?"}]
```

## Configuring the REST API in Live Helper Chat

To create a new REST API, navigate to:

> System configuration > Live help configuration > Rest API Calls

Create a new entry. The configuration should resemble the following, ensuring the request body is set to JSON with the appropriate content.

![](/img/bot/rasa-1.png)

Configure the `Output parsing` as shown below.

![](/img/bot/rasa-2.png)

Save the configuration.

## Bot Configuration in Live Helper Chat

For the bot configuration, you'll need three triggers:

*   `Default`: This trigger should have both `Default` and `Default for unknown message` checked.
*   `Message received`: This trigger's message text should contain `{content_1}`.
*   `Unknown`: This trigger will send a message if Rasa doesn't return anything.

Here's the `Default` trigger configuration:

![](/img/bot/rasa-bot-1.png)

Here's the `Message received` configuration:

![](/img/bot/rasa-message-received.png)

Here's the `Unknown` message configuration:

![](/img/bot/rasa-unknown.png)

Conversation example:

![](/img/bot/rasa-conv.png)

**Important: Remember to set your bot as the default bot for the desired department.**
