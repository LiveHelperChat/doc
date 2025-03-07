---
id: username-based-workflow
title: Username and location based workflow
sidebar_label: Username/Location based workflow
---

## Introduction

This workflow demonstrates how to transfer a visitor based on whether their username is known. Depending on whether the visitor chooses "General inquiry" or "Connect to Expert," we transfer them to the appropriate department based on their city.

![](/img/bot/workflow-username.png)

If a chat is pending for more than 5 minutes, transferring it to a department is implemented using the [department transfer](department-transfer.md) workflow.

## Download

You can download and import the bot configuration.
[download](/img/bot/bots/workflow.json). Just right-click and select "Save link as."

## Triggers

Here is how our triggers look:

![](/img/bot/bot-expert.png)

Default trigger content

![](/img/bot/default-workflow-triggers.png)

Here is how the welcome message looks:

![](/img/bot/workflow-welcome-message.png)

It has two buttons.

* General inquiry
* Connect to Expert

### Default

This trigger is executed as soon as a chat starts. The first thing it does is check if we know the visitor's username. By default, if the username is not known, it is set to "Visitor."

The second message is simply a welcome message in case the username is not known.

### Transfer to operator with message

This trigger is executed when we want to transfer a visitor to an operator, but first, we want to send a message.

### Transfer to operator without message

This trigger is executed in the "Default" trigger if we know the username. So, we do not have to write any message to the visitor and can just transfer them to an operator instantly.

This means that the visitor won't even know that the chat was initially handled by a bot. This is a very useful trick to use sometimes. For example, you can transfer a chat to a pending state instantly if the user's location matches certain criteria.

### Transfer to department by city

It uses the same "Check for conditions to proceed" trigger to change the user's department based on their location. If the location is unknown, we simply transfer the chat to a pending department.

![](/img/bot/transfer-by-city.png)

### Transfer to London and Transfer to Paris

These triggers change the chat department and transfer the chat to a pending state.
