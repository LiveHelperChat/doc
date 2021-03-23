---
id: show-offline-form-if-no-online-operators
sidebar_label: Show offline form if there is no online operators
title: Show offline form if there is no online operators
---

Goal of this bot is

* Transfer chat to pending state as soon as chat starts if there are online operators
* Suggest user to fill offline form if there is no online operators

## Bot configuration

Our triggers

![](/img/bot/triggers-offline.png)

* `Default` - as soon chat starts it check are there any online operators
* `No operators online` - suggests a visitor to leave a message
* `Close chat` - closes a chat
* `Redirect to contact form` - redirects visitor to contact form

### Default

![](/img/bot/redirect-contact/check-is-online.png)

### No operators online

![](/img/bot/redirect-contact/suggest-leave-a-message.png)

### Close chat

![](/img/bot/redirect-contact/close-chat.png)

### Redirect to contact form

![](/img/bot/redirect-contact/redirect-contact.png)

## Department configuration

* In department, you have to choose your newly created bot.
* You have to set department online hours

