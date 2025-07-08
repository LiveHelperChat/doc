---
id: offline-scenarios
sidebar_label: Offline scenarios
title: Offline scenarios and how to set them up
---

# How to skip the bot completely when the department is online

You have two options to configure this behavior:

* **Department Configuration**: In the department's `Bot Configuration` section, check the option `Transfer to bot only if department is offline`
* **Bot Trigger Configuration**: In your default bot trigger, add a [Check conditions](bot/check-conditions.md) trigger as the very first step to verify if any operators are online

# How to serve different bots when the department is offline

To serve a different bot when no operators are available:

* Set up your default trigger to check for online conditions first
* After checking for online operators, [transfer to a different bot](bot/transfer-bot-to-bot.md) if needed

# How to hide buttons when no operators are online

You can conditionally show or hide buttons based on operator availability. This feature is only supported in the `Send Text` response type.

To configure conditional buttons:

1. Click the `Show advanced options` button under your button configuration
2. Enter your condition `Identifier` in the `Bot conditions` field under button advanced options
3. First, define your condition in [Bot Conditions](bot/conditions.md)
4. Conditions are checked only once on the first time bot message send action !!!. Make sure you trigger the same message again while testing.

**Example condition configuration:**

| Condition Name | Condition | Value |
|---------------|-----------|--------|
| online_op_department | =         | 1      |

