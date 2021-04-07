---
id: survey
title: Survey
sidebar_label: Survey
---

## Introduction

Surveys allow you to gather information how well customer was served.

![Survey list](/img/chat/survey-list.jpg)

There you can do few options

* Clicking on survey title will show you survey window where you can see all collected information over the time.
* Clicking on edit button will show you survey edit interface.

## Survey collection information

In survey statistic page you can filter by various options and export report.

![Survey stats](/img/chat/survey-stats.jpg)

In chart window for stars you will see chart.

![Survey chart](/img/chat/survey-chart.jpg)

## Survey edit window

![Survey window](/img/chat/survey-window.jpg)

:::tip
You can have custom values for survey options by defining survey option like
`[value=15] 15 value`
:::

## Chat and survey

What survey should be shown to visitor can be set few ways

* Either you set it in department edit window survey tab.
* Either you redirect visitor manually from chat.
* Either you pass `survey` [argument](javascript-arguments.md).

To redirect visitor to survey you have to click this icon in chat window

![Survey icon](/img/chat/survey-icon.jpg)

## How to redirect visitor to survey from bot?

You can have this defined as button click or just as trigger to execute on auto responder.

> `Update current chat` -> `Update main chat attribute` -> and in `Chat attribute name` enter `status_sub` and value enter `5`

Internally it just means `const STATUS_SUB_SURVEY_SHOW = 5;`

## Tips

* [Disable/Enable a survey from bot?](https://doc.livehelperchat.com/docs/bot/survey-control-from-bot/)

## I close a chat, but I don't see any survey

There is a few conditions has to be satisfied for a survey to be shown. On chat close event **one** these of these conditions has to be satisfied

* Chat has to be in bot mode
* Chat has to be accepted by operator

If chat is closed by a visitor and chat is in pending state. Survey won't be shown.

## Permissions

In order operator to be able redirect visitor to custom survey they have to have this permission.

> 'lhsurvey', 'redirect_to_survey'

In order to configure surveys. Create a new one/delete and old one. Operator has to have this permission.

> 'lhsurvey', 'manage_survey'
