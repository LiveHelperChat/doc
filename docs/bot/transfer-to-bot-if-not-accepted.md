---
id: transfer-to-bot-if-not-accepted
sidebar_label: Transfer chat back to bot if chat not accepted
title: Transfer chat back to bot if chat not accepted
---

There are two ways to transfer a chat back to a bot if it is not accepted by an operator:

*   **Via auto responder** (This method does not currently support third-party integrations such as Facebook Messenger).
*   **Via continuous webhooks.** This method works in all scenarios.

This document covers how to accomplish this using continuous webhooks.

**Requirements:**

*   Minimum version: 4.16v
*   [Continuous webhooks cronjob](development/cronjob.md#continuous-webhooks-cronjob)

**How it works:**

*   A continuous webhook checks if any chat has been in pending status for more than 30 seconds. If so, it executes a trigger.
*   The trigger sets the chat status back to bot.
*   You can extend these rules to include:
    *   `{args.chat.incoming_chat.incoming.scope} = facebookwhatsappscope` to apply the rule only to incoming webhooks with a defined scope.
    *   `{args.chat.dep_id} = 4` to apply the rule to department 4 only.

**Sample of continuous webhook configuration:**

![Continuous Webhook Configuration](/img/bot/bots/continous-webhook.png)

**Trigger configuration sample:**

![Trigger Sample Transfer](/img/bot/bots/trigger-sample-transfer.png)
