---
id: execute-bot-of-transferred-department
sidebar_label: Execute bot after chat transfer
title: Execute bot after chat transfer to another department
---

The goal is to:

*   Have `Bot A` in `Department A`.
*   Bot A has a trigger that sets the chat to a pending state.
*   `Department A` is configured to transfer the chat to `Department B` if the chat is not accepted within 30 seconds.
*   `Department B` has `Bot B`.
*   After the transfer, the chat should revert to bot status, and `Bot B`'s trigger should execute.

Requirements:

*   Minimum version 4.16v.
*   [Cron job setup as described here](department-transfer.md#what-happens-then-user-closes-the-chat).
    *   This setup allows the transfer between departments even if the visitor has left the chat.
    *   This is also required for third-party integrations.

How it works:

*   Transfer between departments occurs only if the chat is in a pending state.
*   After the transfer, listen to `chat.data_changed_assigned_department` and adjust chat attributes accordingly:
    *   Change the chat's `bot_id` attribute.
    *   Set the chat status to bot chat.
*   It is also advisable to check the incoming webhook configuration -> `Chat should be reset to default department. Bot also will be set to default.` so that if the chat was closed, it will start in the original `Department A` with the original bot.

![Department Transfer Configuration](/img/bot/transfer/transfer-dep.png)

Trigger Configuration:

![Transfer Trigger Configuration](/img/bot/transfer/transfer-happened.png)

`Department A` configuration to transfer chat to `Department B`:

![Department Transfer Options](/img/bot/transfer/transfer-dep-options.png)


