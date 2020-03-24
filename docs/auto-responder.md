---
id: auto-responder
title: Auto responder
sidebar_label: Auto responder
---

1. Auto responder in proactive chat invitations.
2. Independent responder. Without choosing department.
3. Auto responder for specific department.

## Auto responder apply order
1. First we check does chat department has department specific auto responder. If it does we apply it.
2. If not we search for default auto responder. (Without chosen department)

## Auto responder main attributes

![](/img/auto-responder/auto-responder-main.jpg)

## Attributes

Here you will find all auto responder attributes and explanation what each of them does.

### Language

For what language this message should be shown, usefull if you would like to have difference response messages for different languages. Also you can use just translations.

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

![](/img/auto-responder/auto-responder-messages.jpg)

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

### Add translation

You can add custom translations based on user language. Language is detected from user browser headers.