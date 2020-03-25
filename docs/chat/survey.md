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

To redirect visitor to survey you have to click this icon in chat window

![Survey icon](/img/chat/survey-icon.jpg)

## Permissions

In order operator to be able redirect visitor to custom survey they have to have this permission.

> 'lhsurvey', 'redirect_to_survey'

In order to configure surveys. Create a new one/delete and old one. Operator has to have this permission.

> 'lhsurvey', 'manage_survey'
