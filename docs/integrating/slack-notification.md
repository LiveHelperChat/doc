---
id: slack-notification
title: Slack Notifications
---

## What does it do?

This guide explains how to send a Slack notification when a visitor sends a message containing a specific keyword. This method can also be adapted to send notifications for other events, such as new chats.

## How does it work?

*   Set up a webhook in `Home > System configuration > Webhooks` for the `chat.addmsguser` event.
*   Create a bot and define the keyword to listen for.
*   Configure the bot to execute a REST API call to send the Slack notification.

### REST API Setup

To use this feature, you need to create a Slack app and obtain a `Webhook URL` and a `xoxb-xxx` token. Save the JSON configuration below and import it into your Live Helper Chat instance, Rest API section `Bot -> Rest API Calls`.

[Rest API](/img/bot/slack/rest-api.json)

*   After importing, you will need to adjust the `Sub URL`. The default value after import will be `/services/XXXXX/XXXXXXXXXX/XXXXXXXXXXXXXXXX`.
*   Set the correct value for the Bearer token in the `Authorization` field: `xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXX`.
*   Edit the `Body` section and set the correct URL for your Live Helper Chat installation.

### Bot Setup

The following screenshots illustrate the trigger configuration for the webhook event (`chat.addmsguser`).

![](/img/integration/slack-trigger.png)

`Notify` trigger configuration:

![](/img/integration/slack-notify.png?v=1)

`Debug` trigger configuration:

```
{http_code}
{http_error}
{content_raw}
{http_data}
```

![](/img/integration/slack-debug.png)

### Webhook Configuration

![](/img/integration/slack-webhook.png)

## Outcome

![](/img/integration/slack-notification.png)
