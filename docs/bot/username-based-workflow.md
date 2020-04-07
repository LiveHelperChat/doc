---
id: username-based-workflow
title: Username and location based workflow
sidebar_label: Username/Location based workflow
---

## Introduction

This workflow demonstrates how to transfer visitor depending we know it'susername or not. Depending what visitor chooses `General inquiry` or `Connect to Expert` we transfer him to required city.

![](/img/bot/workflow-username.png)

If chat is pending for more than 5 minutes transfer it to department is implemented using [department transfer](department-transfer.md) workflow.

## Download

You can download and import bot.
[download](/img/bot/bots/workflow.json). Just right click and "save link as"

## Triggers

Here is how our triggers looks like

![](/img/bot/bot-expert.png)

Default trigger content

![](/img/bot/default-workflow-triggers.png)

Here is how welcome message looks like.

![](/img/bot/workflow-welcome-message.png)

It has two buttons.

* General inquiry
* Connect to Expert

### Default

This trigger is executed as soon chat starts. First thing it does it checks do we know visitor `Username`. By default if username is now know it's always set to `Visitor`

Second message is just welcome message in case username is not known.

### Transfer to operator with message

This trigger is executed when we want to transfer visitor to an operator but before that write a message.

### Transfer to operator without message

This trigger is executed in `Default` trigger if we know username. So we do not have to write any message to visitor and just transfer it to operator instantly.

This means that visitor even won't know that chat was handled with a bot first. This is very usefull trick to do sometimes. E.g

You can transfer chat to pending state instantly if user location is met etc etc...

### Transfer to department by city

It uses same `Check for conditions to proceed` trigger to change user department based on user location. If location is unknown. We just transfer chat to pending department.

![](/img/bot/transfer-by-city.png)

### Transfer to London and Transfer to Paris

What these does they change chat department and transfers chat to pending state.