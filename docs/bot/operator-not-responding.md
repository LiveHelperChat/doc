---
id: operator-not-responding
sidebar_label: Transfer to pending if operator left
title: How to transfer chat to pending state if operator left a chat
---

For this scenario to work these conditions has to be met

* Visitor still has to be on `chat`
* Auto responder has to be setup for the department
* Bot has to be setup

If you set text message directly in bot response it won't be send. Text message are saved only on child triggers, as in this scenario on success transfer.

## Setup bot

In bot we will have two triggers

* `Operator gone` - this will be our main trigger to choose in auto responder.
* `Chat transfered to pending` - this will save system message within chat so operator will know that, chat was set to pending state.

### Operator gone

![](/img/bot/operator-gone.png)

### Chat transferred to pending

![](/img/bot/transferred-to-pending.png)

## Setup auto responder

* Message field is a **must**. If you leave empty message field it won't work.

![](/img/bot/auto-responder-operator-gone.png)

## Testing

Admin UI would look like

![](/img/bot/operator-gone-admin.png)

Widget UI would look like

![](/img/bot/widget-ui-operator-gone.png)