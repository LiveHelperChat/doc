---
id: waha
title: WAHA - WhatsApp HTTP API Integration
---

This tutorial describes how to integrate WhatsApp support using [WAHA](https://waha.devlike.pro/). It does not cover the setup of the WAHA product itself, but focuses solely on its integration with Live Helper Chat.

For more information about WAHA, refer to:

*   [WAHA Official Website](https://waha.devlike.pro/)
*   [WAHA Quick Start Guide](https://waha.devlike.pro/docs/overview/quick-start/)

## Incoming Webhook Configuration

First, create an incoming webhook. You can import a pre-configured setup from [here](/img/integration/waha/incoming-webhook.json).

You will need to adjust the following settings:

*   **Identifier:** Change this to a unique, random string.
*   Click **Show integration information**.
*   In the **Attributes** section, update `http://server:8002` to your server's address.
*   Choose the appropriate department for handling WhatsApp chats.

Save the changes.

## Initial WAHA Setup

After obtaining the link from the `incoming webhook` section, navigate to your server where WAHA is running to initiate a new session. Click on **Try it out**, replace the placeholder link with the link from Live Helper Chat, and then click **Execute**.

![WAHA Initiate Session](https://github.com/LiveHelperChat/doc/assets/10582537/5eecab5d-73a5-456d-8ff7-311a2512af8f)
![WAHA Execute](https://github.com/LiveHelperChat/doc/assets/10582537/14b99870-e8df-40a0-8ea0-5869a697ccec)

Next, scroll down to the `/api/screenshot` section. Similarly, click on **Try it out**, followed by **Execute**, to view the screenshot. This screenshot is used to log in to the WhatsApp system.

## REST API Call Configuration

**One-time configuration**

This configuration is required for sending messages from an administrator back to the visitor on WhatsApp.

You can import a pre-configured setup from [here](/img/integration/waha/rest-api.json).

Import the configuration and change the host from `http://server:8002` to your server's address.

## Bot Configuration

**One-time configuration**

You need to set up a bot whose trigger will be executed upon a webhook event.

You can import a pre-configured setup from [here](/img/integration/waha/bot.json).

*   Ensure you set the correct REST API (imported previously) and the method to call.

The configuration should resemble the following:

![](/img/integration/whatsapp-bot.png)

## Webhook Configuration

**One-time configuration**

Identical webhooks should be configured for the following events:

*   `chat.web_add_msg_admin`
*   `chat.workflow.canned_message_before_save`
*   `chat.before_auto_responder_msg_saved`
*   `chat.desktop_client_admin_msg`

Webhook configuration is necessary for sending messages from an administrator back to the visitor.

**Condition**: Compare attribute (then click Add)

1.  **Attribute**: `{args.chat.incoming_chat.incoming.scope}`
    **Condition**: `=`
    **Value**: `whatsapp`
2.  **Attribute**: `{args.chat.last_message.meta_msg_array.content.whisper}`
    **Condition**: `!=`
    **Value**: `1`
3.  **Attribute**: `{args.chat.last_message.user_id}`
    **Condition**: `!=`
    **Value**: `-1`

*   Ensure that you use the correct value for `whatsapp`. This value corresponds to the `scope` attribute from the `Incoming webhook` settings.

![Webhook Example](https://github.com/LiveHelperChat/doc/assets/10582537/89806d7f-0d17-4674-97f3-518469e216b1)

If you have configured everything correctly, the integration should be working without requiring any custom code.
