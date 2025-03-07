---
id: operator-not-responding
sidebar_label: Transfer to pending if operator left
title: Transfer Chat to Pending State When Operator Leaves
---

For this scenario to work, the following conditions must be met:

*   The visitor must still be in the chat.
*   An auto-responder must be set up for the department.
*   A bot must be configured.

## Set up the bot

The bot will have two triggers:

*   `Operator gone` - This will be our main trigger to select in the auto-responder.
*   `Chat transferred to pending` - This will save a system message within the chat so that the operator knows the chat was set to the pending state.

### Operator gone

![](/img/bot/operator-gone.png)

### Chat transferred to pending

![](/img/bot/transferred-to-pending.png)

## Set up auto responder

*   You can set up either text either bot response trigger. It will send one or another or both.

![](/img/bot/auto-responder-operator-gone.png)

## Testing

Admin UI would look like

![](/img/bot/operator-gone-admin.png)

Widget UI would look like

![](/img/bot/widget-ui-operator-gone.png)
