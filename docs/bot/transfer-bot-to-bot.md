# How to transfer a bot to other bot.

Lets imagine that you want to have several bots and one for each subject.

For example:

 - [ ]  BotA - Is your first bot where you gives welcomme and common questions.
 - [ ] BotB - is for tech support
 - [ ] BotC - is for Customer Care
 - [ ] BotD - is for Billing 

You can not transfer directly from **one bot to another bot**,  just like you transfer to an operator.
But one bot can include the context that you made in another.
 
## How to do it

You have to edit the BotB using _These bot logic applies also_: selecting the parent Bot logic what you want to include.

**In this example** BotB include all the logic that you make in BotA so:
- When one visitors uses  BotA only BotA logic is available
- When one visitors uses BotB , is available all logic you that you made in BotB and also BotA (so browsing BotB you can *EXECUTE TRIGGER *  using a BotA trigger.


- 
![enter image description here](https://i.paste.pics/b9bb74fea0f389d373d9ab6cec629c6c.png)
> Remember that when you edit in one Bot logic (no mather where it was made) , your are editing the same logic for every bot it is included, **they are just included-linked not copied**
