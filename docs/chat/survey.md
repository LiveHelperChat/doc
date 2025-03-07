---
id: survey
title: Survey
sidebar_label: Survey
---

## Introduction

Surveys allow you to gather information about the quality of customer service.

![Survey list](/img/chat/survey-list.jpg)

You have the following options:

*   Clicking on a survey title displays a window with all the collected information over time.
*   Clicking the edit button displays the survey edit interface.

## Survey Statistics

On the survey statistics page, you can filter by various options and export a report.

![Survey stats](/img/chat/survey-stats.jpg)

The chart window displays a chart for star ratings.

![Survey chart](/img/chat/survey-chart.jpg)

## Survey Edit Window

![Survey window](/img/chat/survey-window.jpg)

:::tip
You can define custom values for survey options using the following format:
`[value=15] 15 value`
:::

### Feedback Text

This attribute supports `Canned replaceable variables` and the `{args.chat.<attribute>}` syntax.

## Multilingual Support

Each question supports bot individualization, which you can set per department. For questions and answers, use the following format:

```
{main_question__Main question here}
```

Then, translate the text in [Bot individualisation](bot/multiple-languages.md).

## Chat and Survey

You can configure which survey is shown to a visitor in a few ways:

*   Set it in the department edit window's survey tab.
*   Redirect the visitor manually from the chat.
*   Pass a `survey` [argument](javascript-arguments.md).

To redirect a visitor to a survey, click this icon in the chat window:

![Survey icon](/img/chat/survey-icon.jpg)

## How to Redirect a Visitor to a Survey from a Bot

You can define this as a button click or as a trigger to execute in an auto-responder.

> `Update current chat` -> `Update main chat attribute` -> and in `Chat attribute name` enter `status_sub` and value enter `5`

Internally, this means `const STATUS_SUB_SURVEY_SHOW = 5;`

## Tips

*   [Disable/Enable a survey from bot?](bot/survey-control-from-bot.md)

## I Closed a Chat, but I Don't See a Survey

A few conditions must be met for a survey to be shown. On chat close, **one** of these conditions must be satisfied:

*   The chat must be in bot mode.
*   The chat must have been accepted by an operator.

If a visitor closes a chat while it is in a pending state, the survey will not be shown.

## Multiple Clients Support

If an operator does not have permission to access all departments to which a survey is assigned, they will not be able to view or edit the survey details.

*   The operator must be assigned to all departments to which the survey is assigned.
*   For basic permission to view survey statistics, the `'lhsurvey', 'list_survey'` permission should be assigned.

## Permissions

For an operator to be able to redirect a visitor to a custom survey, they must have this permission:

> 'lhsurvey', 'redirect_to_survey'

To configure surveys (create a new one or edit an existing one), an operator must have this permission:

> 'lhsurvey', 'manage_survey'

To list surveys and view their statistics, an operator must have this permission:

> 'lhsurvey', 'list_survey'

To delete surveys, an operator must have this permission:

> 'lhsurvey', 'delete_survey'
