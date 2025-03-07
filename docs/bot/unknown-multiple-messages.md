---
id: multiple-unknown-messages
sidebar_label: Multiple unknown messages
title: Sending Different Messages for Consecutive Unknown Visitor Messages
---

This document explains how to configure a bot to send different responses based on the number of consecutive unknown messages it receives from a visitor.

The bot will respond as follows:

*   **First unknown message:** "Could you please explain what you need in simpler terms?"
*   **Second unknown message:** "Could you be a little more specific? I really want to help you."
*   **Third unknown message:** "Sorry, I don't have enough information to assist you. Please send an email to ... and my colleagues will respond tomorrow. Thank you for your effort! Goodbye!"

## Implementation

To implement this, we need to track the number of times the bot fails to understand the visitor's intent.

![Triggers](/img/bot/unknown/triggers.png)

For this basic scenario, we'll need six triggers:

*   `Default`: The default trigger.
*   `Car information`: A trigger activated by the keyword "car".
*   `Unknown 1`: Triggered by the first unknown message; marked as "Default for unknown message".
*   `Unknown 2`: Triggered by the second unknown message.
*   `Unknown 3`: Triggered by the third unknown message.
*   `Reset counter`: Resets the unknown message counter.

### Default

This is simply the default trigger.

![Default](/img/bot/unknown/default.png)

### Car information

This trigger is activated when the user enters "car". It also includes a "send block" that executes the "Reset counter" trigger.

![Car information](/img/bot/unknown/car-information.png)

### Unknown 1

*   This message is sent in response to the first unknown visitor message.
*   It is marked as "Default for unknown message".
*   The first part of the response is required to prevent an infinite loop if the visitor continues sending unknown messages. If another unknown message is received, the `Unknown 2` trigger is executed.

![Unknown 1](/img/bot/unknown/unknown-1.png)

### Unknown 2

*   This message is sent in response to the second unknown visitor message.
*   The first part of the response is required to prevent an infinite loop if the visitor continues sending unknown messages. If another unknown message is received, the `Unknown 3` trigger is executed.

![Unknown 2](/img/bot/unknown/unknown-2.png)

### Unknown 3

*   This message is sent in response to the third unknown visitor message.
*   It also includes a "send block" to execute the "Reset counter" trigger.

![Unknown 3](/img/bot/unknown/unknown-3.png)

### Reset counter

*   This trigger resets the "unknown message" counter, so the next time the bot encounters an unknown message, it will start from `Unknown 1` again.

![Repeat counter reset](/img/bot/unknown/repeat-counter-reset.png)
