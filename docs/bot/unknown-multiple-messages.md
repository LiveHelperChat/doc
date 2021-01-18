---
id: multiple-unknown-messages
sidebar_label: Multiple unknown messages
title: How to send different messages on consecutive unknown visitor messages?
---

Bot should by the first unknown message the bot answers : 

> Hm...could you please explain me what you exactly need in simpler words?`

By the second unknown message the bot answers :

> May you were a little bit more specific ? I really want to help you.  

By the third unknown message the bot answers

> Sorry, it seems I am not experienced enough to advice you accordingly. But, i suggest you sending an E-mail to ..., so my collegues can answer to you tomorrow. Thank you for effort! Till next time!

## Implementation 

For that we need to track how many times bot has failed to detect visitor intent.

![Triggers](/img/bot/unknown/triggers.png)

We will need for simplest scenario `6` triggers

* `Default` - default trigger
* `Car information` - trigger which is found by default
* `Unknown 1` - trigger with checked flag `Default for unknown message`
* `Unknown 2` - Trigger which is executed second time for unknown message
* `Unknown 3` - Trigger which is executed third time for unknown message

### Default

Just a default trigger

![Default](/img/bot/unknown/default.png)

### Car information

This trigger is executed if user enters `car` as a keyword. This trigger also has send block which sends a trigger which resets our unknown counter.

![Car information](/img/bot/unknown/car-information.png)

### Unknown 1

 * This message is send first time on unknown visitor message.
 * It has checked `Default for unknown message`
 * First part of response is required if it's not a first time visitor sends something unknown. If that happens we execute `Unknown 2` trigger.

![Unknown 1](/img/bot/unknown/unknown-1.png)

### Unknown 2

* This message is send second time on unknown visitor message.
* First part of response is required if it's second time visitor sends something unknown. **Number 3** is **NOT** a typo. If that happens we execute `Unknown 3` trigger.

![Unknown 2](/img/bot/unknown/unknown-2.png)

### Unknown 3

* This message is send third time on unknown visitor message.
* We also send a block to reset repeat counter.

![Unknown 3](/img/bot/unknown/unknown-3.png)

### Reset counter

* It resets our repeat counter so next time we will start from `Unknown 1` again.

![Repeat counter reset](/img/bot/unknown/repeat-counter-reset.png)
