---
id: show-offline-form-if-no-online-operators
sidebar_label: Show offline form if there are no online operators
title: Show offline form if there are no online operators
---

The goal of this bot is to:

*   Transfer the chat to a pending state as soon as the chat starts if there are online operators.
*   Suggest that the user fill out the offline form if there are no online operators.

## Bot configuration

The bot uses the following triggers:

![](/img/bot/triggers-offline.png)

*   `Default` - This trigger checks if there are any online operators as soon as the chat starts.
*   `No operators online` - This trigger suggests that the visitor leave a message.
*   `Close chat` - This trigger closes the chat.
*   `Redirect to contact form` - This trigger redirects the visitor to the contact form.

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

