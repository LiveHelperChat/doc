---
id: how-to-use-bot
title: How to use bot?
---

Basic features are

*   Extensions can have custom information [collecting functionality](bot/collecting-information.md).
*   Bot can match text or quick reply buttons. This allows to create navigation style workflow.

## How to use?

Navigate to 

> System -> Live Helper Configuration -> Bot list

Create a bot. Once bot is saved go back to bot list and click bot name.

To activate bot you have to edit department and choose a bot in department edit window.

Dashboard also has new widget bot chats. Once widget is activate it will show bot chats. You may need in your account -> visible lists to enable bot chats listing.

## How bot building workflow looks like?

* Firs thing you have to do is to create a triggers group. Trigger is just action on which something will happen. Trigger can listen to multiple events. Like hi, hey, hellow text and button clicks.
* Middle column represents what actions bot will do if trigger is matched.
* Right column will represent what visitor will see.

![](/img/bot/bot-building-workflow.png)

## Bot reply types

* Basic
    * [Send text](bot/text.md) 
    * [Collect custom attribute](bot/collecting-information.md)
    * [Button list](bot/button-list.md)
    * [Send list](bot/list.md)
    * Send predefined block
    * Send Typing
    * Send Video
    * [Send Carrousel](bot/carousel.md)
    * Update Current chat
    * Intent detection
    * Check for pending intentions
    * Check for conditions to proceed
    * Search for default actions on message
    * Restrict execution more than defined times
* Advanced
    * Collect information
    * Progress
    * Trigger to execute by response
    * Execute Javascript
    * Execute action
    * [Rest API](bot/rest-api.md)
    
    
## FAQ

### What is payload?

Then you define an event which should be called on button click. It's a payload.

### Does the bot learn overtime (Like Chatterbot) or this one purely depends on input from admin?

No. But perhaps in the future this part will be extended

### Can you alternate between Bot & human or human interfere at later stage ?

Yes. There is special actions for that. To transfer chat to human and to bot.

### Do I have to add "Pattern or event name" ....can add more than one ...for example if someone say "Hi" , Hello , morning , i bring one(1) response?

Yes you can. Just add more than one event.
 
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" height="315" frameborder="0" src="https://www.youtube.com/embed/Ibli7-HadYs" width="560"></iframe>

## Permissions

> 'lhgenericbot','use'

## How looks every Basic replies ?

#### Examples:
![](/img/bot/specials.gif)

#### Screenshot Send message 
![](/img/bot/send-message.png)

#### Screnshot Button List
![](/img/bot/button-list.png)

#### Screenshot Send List
![](/img/bot/send-list.png)

#### Screenshot Carrousel
![](/img/bot/carousel.png)
