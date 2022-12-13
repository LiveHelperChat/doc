---
id: execute-bot-of-transferred-department
sidebar_label: Execute bot after chat was transferred to other department.
title: Execute bot after chat was transferred to other department, because chat stayed to long in pending state of original department.
---

Our goal here is

* To have `Bot A` in `Department A`
* Bot A has trigger which sets chat to pending state
* `Department A` has configured that if chat is not accepted in 30 seconds transfer chat to `Department B`
* `Department B` has `Bot B`
* After transfer, we should put chat back to bot status and execute `Bot B` trigger

Requirements

* Minimum 4.16v
* [Cronjob setup described here](department-transfer.md#what-happens-then-user-closes-the-chat)
  * It will allow to execute transfer between departments even if visitor left a chat.
  * This is required also with third party integrations

How it works

* Transfer between departments happens only if chat is in pending state
* After transfer happens we have to listen to `chat.data_changed_assigned_department` and adjust chat attributes accordingly
  * Change chat `bot_id` attribute
  * Set chat status to bot chat
* It also makes sense to check in incoming webhook configuration -> `Chat should be reset to default department. Bot also will be set to default.` so if chat was closed it will start in original `Department A` with original bot.

![Transfer event](/img/bot/transfer/transfer-dep.png)

Trigger configuration

![Transfer happened](/img/bot/transfer/transfer-happened.png)

`Department A` configuration to transfer chat to `Department B`

![Transfer happened](/img/bot/transfer/transfer-dep-options.png)


