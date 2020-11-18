---
id: match-action
title: Search for default actions on message
---

This trigger allows to search for a keyword on first user message.

Bot configuration can look like this

We will need 3 trigger for a minimal scenario.

* `Default` - this will be our default trigger
* `Cars` - this will be trigger used for a `cars` keywords
* `No response found` - this will be a trigger if we did not found any matching trigger.

![](/img/bot/match-triggers.png)

## Default

This trigger is checked as default trigger.

![](/img/bot/default-search-actions.png)

## Cars

Content of a trigger

![](/img/bot/match-actions-cars.png)

This trigger has also defined event for a keyword `cars`

![](/img/bot/cars-event.png)

## No response found

![](/img/bot/no-response-found.png)

## Samples

Now if visitor stars chat by writing `cars` word `Cars` trigger will be executed. [Read documentation](bot/triggers.md) how you can have more abstract matching of words.

If we do not find trigger for user text alternative trigger `No response found` will be executed.