---
id: collecting-information-two-tries
title: Collecting customers attributes and limit how many times he can try
sidebar_label: Collecting information with tries limiter
---

In this tutorial I'll show how to create a simple bot which would collect customers attributes and limit how many times visitor can try to enter valid information.

This sample by its basics are similar to [multiple unknown messages sample](bot/unknown-multiple-messages.md)

## Download

You can download and import bot.
[download](/img/bot/bots/multiple-tries.json). Just right click and "save link as"

## Triggers

We will need these triggers

* Default - will be executed once chat starts
* Collect order name - collects order number
* Order number collected - Informs a visitor that order number was collected
* Validation failure - Informs about validation failure
* Multiple validation failure - Informs about second attempt validation failure and terminates information collecting process.

![](/img/bot/multiple-tries/triggers.png)

### Default

Just writes welcome message and displays quick reply buttons.

![](/img/bot/multiple-tries/default.png)

### Collect order name

Main process where all information collecting happens. Here we expect number format. It also has selected triggers on success and validation failure.

![](/img/bot/multiple-tries/collect-order-number.png)

### Order number collected

Informs that order number was collected and writes a number.

![](/img/bot/multiple-tries/order-number-collected.png)

### Validation failure

Here we do few tricks.

* Here we use `Restrict execution more than defined times` and we allow one time to proceed further. 
* Text message is the message send on very first validation error.

![](/img/bot/multiple-tries/validation-failure.png)

### Multiple validation failure

* We send a text message that it was second attempt to submit information.
* We remove `any previous process` means information collecting process is terminated.

![](/img/bot/multiple-tries/multiple-validation-failure.png)

