---
id: send-mail
title: Send mail
---

## Introduction

This article explains how to use the `Send mail` response type.

## Attributes

You can use all the same attributes in the fields as in the [Send text](bot/text.md) response type.

In addition, the `Mail body` supports [REST API](bot/rest-api.md) variables like `{{msg_all}}`.

## How to send an email if a survey is filled?

This is useful if you want to monitor how your operators are performing.

![](/img/bot/survey-filled-webhook.png)

The bot trigger configuration should look like this:

![](/img/bot/survey-filled-trigger.png)

## How to send an email to a visitor when a chat is closed?

For this, we need two things:

### A webhook to catch the chat close event.

In this event, we listen for the chat close event and execute the trigger only if the chat had an operator. You can add more conditions, such as department, etc.

![](/img/bot/chat-close-email.png)

### A bot trigger to send an email

In this trigger, we simply send an email containing all chat messages.

![](/img/bot/send-mail-trigger.png)

## Structure

The syntax for a simple email configuration looks like this. This can be sent directly as a `meta_msg` body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin):

```json
[
  {
    "_id": "4U08JX0lD",
    "type": "mail",
    "content": {
      "text": "Operator {args.chat.plain_user_name} has responded to your request.\n\nThis is your conversation history:\n{{msg_all}}",
      "mail_options": {
        "subject": "Operator has responded to your request #{args.chat.id}",
        "from_name": "{args.chat.plain_user_name}",
        "from_email": "info@livehelperchat.com",
        "recipient": "{args.chat.email}"
      }
    }
  }
]
```
