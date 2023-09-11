---
id: send-mail
title: Send mail
---

## Introduction

This article explains how to use `Send mail` response type.

## Attributes

You can use all attributes in the fields same as in [Send text](bot/text.md) response type.

In addition to that `Mail body` supports [rest api](bot/rest-api.md) variables like `{{msg_all}}`.

## How to send an e-mail on chat close to visitor?

For that we need two things. 

### Webhook to catch chat close event.

In this even we listen for chat close event and execute this only if this chat had an operator. You can add more conditions like department etc...

![](/img/bot/chat-close-email.png)

### Bot trigger to send an e-mail

In this trigger we just send an email with all chat messages.

![](/img/bot/send-mail-trigger.png)

## Structure

Syntax for simple buttons looks like. This can be send directly as a meta_msg body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin ](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin)
```json
[
  {
    "_id": "4U08JX0lD",
    "type": "mail",
    "content": {
      "text": "Operator {args.chat.plain_user_name} has responded to your request.\n\nThis is your conversation history\n{{msg_all}}",
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