---
id: how-to-use-bot
title: How to use a bot
---

Key features include:

*   Extensions with custom information collection capabilities ([collecting information](bot/collecting-information.md)).
*   Bots that can match text or quick reply buttons, enabling navigation-style workflows.
*   AI Integrations: Integrate any third-party API.
*   [Rasa integration (chatbot)](bot/rasa-integration.md)
*   [Rasa integration (FAQ)](bot/rasa-faq.md)
*   [Rasa integration (intent)](bot/rasa-integration-intent.md)
*   [DeepPavlov (Sentiment analysis)](bot/sentiment-analysis.md)
*   [DeepPavlov (Sentiment analysis per message)](bot/sentiment-analysis-per-message.md)
*   [DeepPavlov (FAQ)](bot/deeppavlov-faq.md)
*   [Insult detection](https://github.com/LiveHelperChat/lhcinsult)

## How to use

1.  Navigate to:

    > System -> Live Helper Configuration -> Bot list
2.  Create a bot. After saving the bot, return to the bot list and click the bot's name.
3.  To activate the bot, edit a department and choose the bot in the department edit window.

The dashboard also has a "Bot chats" widget. Activating this widget will display bot chats. You may need to go to your account -> visible lists to enable bot chats listing.

## Understanding the Bot-Building Workflow

*   The first step is to create a triggers group. A trigger is an action that initiates a response. Triggers can listen for multiple events, such as specific text inputs (e.g., "Hi," "Hey," "Hello") and button clicks.
*   The middle column defines the actions the bot will take when a trigger is matched.
*   The right column displays what the visitor will see.

![](/img/bot/bot-building-workflow.png)

## Types of Bot Replies

*   Basic
    *   [Send text](bot/text.md)
    *   [Collect custom attribute](bot/collecting-information.md)
    *   [Button list](bot/button-list.md)
    *   [Send list](bot/list.md)
    *   Send predefined block
    *   Send Typing
    *   [Send Video](bot/video.md)
    *   [Send Carrousel](bot/carousel.md)
    *   [Update Current chat](bot/update-current-chat.md)
    *   Intent detection
    *   Check for pending intentions
    *   [Check for conditions to proceed](bot/check-conditions.md)
    *   [Search for default actions on message](bot/match-action.md)
    *   [Restrict execution more than defined times](bot/restrict-execution-more-than-defined-times.md)
    *   [Alert icon](bot/alert-icon.md)
    *   [Send mail](bot/send-mail.md)
*   Advanced
    *   Collect information
    *   Progress
    *   Trigger to execute by response
    *   [Log action](bot/log-action.md)
    *   [Execute Javascript](bot/execute-javascript.md)
    *   Execute action
    *   [Execute trigger body](bot/trigger-body.md)
    *   [Rest API](bot/rest-api.md)
    *   [Sourceless Iframe](bot/iframe.md)

## FAQ

### Why am I seeing the offline form instead of a bot?

I have configured a bot and it's working perfectly. However, I noticed that when there are no operators online and visitors initiate a chat, an offline form appears.

This usually happens because the chat system doesn't automatically know which department the embed code is generated for, especially if you have multiple departments. As a result, it defaults to offline mode.

To resolve this, you can:

*   Set the department's online hours to 24/7.
*   Ensure that you choose the specific department when generating the embed code.
*   Note: Older versions (3.42v) displayed the offline form if the pending chats limit was reached.

### What is a payload?

A payload defines the event that should be triggered when a button is clicked.

### Does the bot learn over time (like Chatterbot), or does it purely depend on input from an administrator?

No, it doesn't learn over time. However, this functionality may be added in the future.

### Can I alternate between a bot and a human operator, or have a human interfere at a later stage?

Yes. There are specific actions available for transferring a chat to a human or to a bot.

### Do I have to add a "Pattern or event name"? Can I add more than one? For example, if someone says "Hi," "Hello," or "Morning," can I trigger the same response?

Yes, you can add multiple events to trigger the same response.

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" height="315" frameborder="0" src="https://www.youtube.com/embed/Ibli7-HadYs" width="560"></iframe>

## Permissions

> 'lhgenericbot','use'

## What do basic replies look like?

#### Examples:

![](/img/bot/specials.gif)

#### Screenshot Send message

![](/img/bot/send-message.png)

#### Screenshot Button List

![](/img/bot/button-list.png)

#### Screenshot Send List

![](/img/bot/send-list.png)

#### Screenshot Carrousel

![](/img/bot/carousel.png)
