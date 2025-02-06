---
id: auto-responder
title: Auto responder
sidebar_label: Auto responder
---

1. Auto responder in proactive chat invitations.
2. Independent responder. Without choosing department.
3. Auto responder for specific department.

Important

* Bot responses will work only if there is also main message in responder text area. Text message above bot choosing option has to be filled.
* Text messages from first level bot responses are not saved, only from child. See example [how to transfer chat to pending state if operator is not responding](bot/operator-not-responding.md).
* Text messages supports translations syntax `{identifier_text__My message here}`
* Auto responder works only for active/pending status chats
* Auto responder in third party integrations supports
  * WhatsApp - https://github.com/LiveHelperChat/fbmessenger
  * GoogleBusinessMessage - https://github.com/LiveHelperChat/GoogleBusinessMessage
  * MessageBird - https://github.com/LiveHelperChat/messagebird
* If you are using auto responder with any of third party services make sure you are using [workflow cronjob every 5 seconds](development/cronjob.md#default-cronjob-setup).

For auto responder to work with third party integrations make sure you have this webhook setup. `chat.before_auto_responder_msg_saved`

## Auto responder apply order
1. First we check does chat department has department specific auto responder. If it does we apply it.
2. If not we search for default auto responder. (Without chosen department)

## Random not replying messages

Some attributes support directly random messages syntax. 

```
Message first|||
Message second
```

Supported attributes

* `Operator not replying messaging`
* `Close messaging`
* `Offline message`

For attributes which does not support direct random messages you can

* You can use bot response with text message and bot response text messages support random messages

## Auto responder main attributes

![](/img/auto-responder/auto-responder-main.jpg)

## Attributes

Here you will find all auto responder attributes and explanation what each of them does.

### Language

For what language this message should be shown, usefull if you would like to have difference response messages for different languages. Also you can use just translations.

If you want to setup just one auto responder and have custom message per department/language you can
 * Add language and choose department to which one it applies
 * You will have to add as many languages department combinations as you need.

You can also just add a single language and use `{timeout_message__Default text}` and use [bot individualization](bot/multiple-languages.md) in that scenario each department will have to have it's own individualization.

### Position

Messages with lower values will be send the very first. If there is few auto response messages matching criteria the message with lower position will be send the very first.

### Department

To what department auto responder should be applied.

### Wait message.

This message is shown instantly as soon user fills form start fields. If empty no message is send to user.

### Offline message. 

If department is offline and visitor starts a chat this message will be send instaed of default welcome message. If this message is empty - welcome message will be send.

### Operator. 

Visitor will see this operator nick.

### Auto responder reset

#### Minimum time in second how long sync has to be stopped before allowing reset auto responder

Sometimes happens on mobile devices that visitors leave a page. So sync process and auto responder stops working because no calls are executed. So if user returns after 70 or more seconds reset auto responder to state where it left.

#### Maximum time in seconds how long sync has to be stopped before we do not reset auto responder

But if user was offline more than this limit we won't reset as user were to long just offline. So he might be redirect to survey etc.

### Disable reset auto responder if visitor was redirected to survey

If user was redirected to survey we disabled reset auto responder. This means if visitor is redirected to survey we won't touch auto responder anymore. 

### This auto responder applies only to proactive invitations.

This auto responder won't be assigned to any department because it's used explicitly in proactive chat invitations. This option is usefull if you wan to have custom auto responder just for proactive chat invitations started chats.

## Messaging attributes

![](/img/auto-responder/auto-responder-messages.jpg?v=2)

These sections should be self explanatory. You can have different type of messages based on chat state.

### Pending chat messaging

These messages will be send when chat is in pending mode
 
### Visitor not replying messaging

When operators writes message and visitor is not replying this type of messages will be send.

### Operator not replying messaging

When visitor writes a message and operator not replying this type of messages will be send.

### On-hold chat messaging

When operator makes chat on hold these type of messages will be send. Usefull while opeartor is looking for some information.

### Close messaging

This message will be send when operator closes a chat.

### Survey

You can redirect to survey visitor if chat remains for long period of time in pending state.

### Multi-language chat

If chat was accepted by the same language speaking operator you can send visitor a custom message on chat accept event. If you leave empty - message we will be send only if translated message is found. Operator has to check what languages he speaks in his account `Speech` tab.

### Add translation

You can add custom translations based on user language. Language is detected from user browser headers.

## Permissions

To manage all auto responders

> 'lhchat', 'administrateresponder'

To have personal auto responder

> 'lhuser','personalautoresponder'
>

# FAQ

## Bot mode auto responders setup

Auto responders do not have messaging options for bot chats. But you can make workaround using continuous webhooks. See few samples below. Same can be applied for automatic chat closing.

* Webhook/Auto-responder setup if bot is not replying for [60 seconds](development/webhooks.md#when-bot-does-not-respond-for-60-seconds)
* Webhook/Auto-responder setup if a visitor is not replying for [60 seconds](development/webhooks.md#when-user-is-not-responding-to-bot-for-60-seconds)

## How to send a visitor a message before closing an active chat?

For that you can just use `Visitor not replying messaging` and `Operator not replying messaging` messaging. For all other chats, you can set up [automatic chat closing](automatic-closing-purging.md).

Setup should look something like this.
```
Timeout 10 [10 seconds]
Message for timeout 
```

```
Timeout 20 [20 seconds]
Message for timeout 
```

```
Timeout 30 [30 seconds]
Message for timeout. There you can just enter nothing and choose bot trigger which would close a chat.
```

Chat you can close with bot trigger which would use `Close chat` action in `Update current chat` [response type](bot/update-current-chat.md#close-chat)

