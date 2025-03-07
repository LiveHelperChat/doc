---
id: collecting-information-two-tries
title: Collecting customers attributes and limit how many times he can try
sidebar_label: Collecting information with tries limiter
---

This tutorial explains how to create a bot that collects customer attributes, limiting the number of attempts a visitor has to enter valid information.

This example is similar to the [multiple unknown messages sample](bot/unknown-multiple-messages.md).

## Download

You can download and import the bot: [download](/img/bot/bots/multiple-tries.json) (right-click and "save link as").

## Triggers

These triggers are required:

*   **Default:** Executed when the chat starts.
*   **Collect order name:** Collects the order number.
*   **Order number collected:** Informs the visitor that the order number has been collected.
*   **Validation failure:** Informs about the first validation failure.
*   **Multiple validation failure:** Informs about the second validation failure and terminates the information collection process.

![](/img/bot/multiple-tries/triggers.png)

### Default

This trigger writes a welcome message and displays quick reply buttons.

![](/img/bot/multiple-tries/default.png)

### Collect order name

This is the main process where information is collected. It expects a number format and has triggers set for both success and validation failure.

![](/img/bot/multiple-tries/collect-order-number.png)

### Order number collected

This trigger informs the visitor that the order number has been collected and displays the number.

![](/img/bot/multiple-tries/order-number-collected.png)

### Validation failure

This trigger uses a few techniques:

*   It uses `Restrict execution more than defined times`, allowing the process to proceed only once.
*   The text message is sent on the first validation error.

![](/img/bot/multiple-tries/validation-failure.png)

### Multiple validation failure

*   This trigger sends a text message indicating that it was the second attempt to submit information.
*   It removes "any previous process," which terminates the information collection.

![](/img/bot/multiple-tries/multiple-validation-failure.png)

