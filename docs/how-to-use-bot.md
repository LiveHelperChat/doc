---
id: how-to-use-bot
title: How to use bot?
---

Bot was introduced in 2.94 version. Basic features are these

*   Extensions can have custom information collecting functionality. Another tutorial under way
*   Bot can match text or quick reply buttons. This allows to create navigation style workflow.

## How to use?

*   Navigate to 
> System -> Live Helper Configuration -> Bot list
*   Create a bot. Once bot is saved go back to bot list and click bot name.
*   To activate bot you have to edit department and choose a bot in department edit window.
*   Dashboard also has new widget bot chats. Once widget is activate it will show bot chats. You may need in your account -> visible lists to enable bot chats listing.

## What is bot building workflow?

*   Firs thing you ahve to do is to create a triggers group. Trigger is just action on which something will happen. Trigger can listen to multiple events. Like hi, hey, hellow text and button clicks.
*   Middle column represents what actions bot will do if trigger is matched.
*   Right columng will represent what visitor will see.

[![](https://livehelperchat.com/var/media/images/bot-builder.jpg)](https://livehelperchat.com/var/media/images/bot-builder.jpg)

## FAQ

### What is payload?

Then you define an event which should be called on button click. It's a payload.

### Does the bot learn overtime (Like Chatterbot) or this one purely depends on input from admin?

No. But perhaps in the future this part will be extended

### Can you alternate between Bot & human or human interfere at later stage ?

Yes. There is special actions for that. To transfer chat to human and to bot.

### Do I have to add "Pattern or event name" ....can add more than one ...for example if someone say "Hi" , Hello , morning , i bring one(1) response?

Yes you can. Just add more than one event.

### What elements are support by bot?

*   [Text](bot/text.md)
    *   Buttons
        *   URL
        *   General click buttons
        *   Update chat events
        *   Subscribe to notifications
    *   Actions
        *   Collect visitor e-mail
        *   Collect visitor phone
*   [List](bot/list.md)
*   [Button list](bot/button-list.md)
*   Typing indicator
*   Progress
*   [Carrousel](bot/carousel.md)
*   Update current chat
*   Collect information
 
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" height="315" frameborder="0" src="https://www.youtube.com/embed/Ibli7-HadYs" width="560"></iframe>

## Permissions

> 'lhgenericbot','use'