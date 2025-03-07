---
id: match-action
title: Matching Actions Based on User Message
---

This trigger allows you to search for a keyword in the user's first message to determine which action to take.

A bot configuration for this might look like this.

For a minimal scenario, we need three triggers:

*   `Default` - This will be our default trigger.
*   `Cars` - This trigger will be used if the user enters the keyword "cars."
*   `No response found` - This trigger will be used if no matching trigger is found.

![](/img/bot/match-triggers.png)

## Default

This trigger is set as the default trigger.

![](/img/bot/default-search-actions.png)

## Cars

Content of the "Cars" trigger:

![](/img/bot/match-actions-cars.png)

This trigger also has an event defined for the keyword `cars`.

![](/img/bot/cars-event.png)

## No response found

![](/img/bot/no-response-found.png)

## Samples

Now, if a visitor starts a chat by writing the word "cars," the "Cars" trigger will be executed. For more information on abstract matching of words, refer to the [Triggers documentation](bot/triggers.md).

If no trigger is found that matches the user's text, the alternative "No response found" trigger will be executed.
