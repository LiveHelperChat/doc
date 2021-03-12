---
id: transfer-bot-to-bot
sidebar_label: Transfer between bots
title: How to transfer a bot to other bot
---

Let's imagine that you want to have several bots and one for each subject.

For example:

 - BotA - Is your first bot where you give welcome and common questions.
 - BotB - is for tech support
 - BotC - is for Customer Care
 - BotD - is for Billing 

Bot can transfer to:
 - an operator
 - another bot **indireclty**
 - another bot **direclty**

## Indirectly
Indirectly means that one bot can include the context that you made in another.

### How to do it

You have to edit the BotB using _These bot logic applies also_: selecting the parent Bot logic what you want to include.

**In this example** BotB include all the logic that you make in BotA so:
- When one visitor uses  BotA only BotA logic is available
- When one visitor uses BotB, is available all logic that you made in BotB and also BotA (so browsing BotB you can *EXECUTE TRIGGER *  using a BotA trigger).

![Including other bot](/img/bot/including-other-bot.png)

:::tip
Remember that when you edit one Bot logic (no matter where it was made), you are editing the same logic for every bot it is included, **they are just included-linked not copied**
:::

:::warning
If in BotB you edit BotA and choose a trigger from BotB and later go to edit directly BotA you won't see chosen trigger in BotA. You should construct bot in a such way that you would not need to choose triggers directly in BotA.
:::

:::warning
If BotA includes many other bots (BotB, BotC, BotD, ... BotN), BotA have all the logic of children Bots so you can easily have situations in which BotB trigger B listen on same event of BotN trigger N and this can be confusing and make you lose control of what happens. You have to know what you are doing!
:::

## Direclty
Directly means that one bot can transfer to another bot in same way that bot transfer to human.
In this stage this is not supported but there is a way to accomplish it. 

### How to do it

Let's imagine BotA have to transfer chat to BotB.

BotA trigger performing the transfer to BotB must have these responses:

![BotA transfer configuration](/img/bot/bot-transfer-bot.png)

BotB must "listen" on that event:

![BotB event listen configuration](/img/bot/bot-transfer-event.png)

**In this example** BotA does not include the logic that you make in BotB, BotA transfer to BotB so that visitor keep chatting with BotB.
