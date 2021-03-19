---
id: survey-control-from-bot
title: Disable/Enable a survey from bot?
---

Since 3.68v it's possible to control Survey directly from bot.

Supported scenario

* Bot disables survey
* Bot enables default/custom survey

## Disable a survey from a bot

Steps

* Text message. This is optional.
* `Update Current chat` and `Set chat variable [not visible by operator]` set attribute to `{"lhc_ds":0}` `lhc_ds` is like a magic attribute by which Live Helper Chat knows what it has to do with a survey on page refresh. 
* `Update Current chat` and `Set widget live attribute` This will take care our widget live state. 
  * set `Live attribute path` to `["chat_ui","survey_id"]` 
  * check `Remove attribute if it exists`

![](/img/bot/disable-survey.png)

## Enable a survey from bot

### Setting custom survey id from bot

Steps

* Text message. This is optional.
* `Update Current chat` and `Set chat variable [not visible by operator]` set attribute to `{"lhc_ds":2}` This will set our survey id to `2` on page refresh.
* Update Current chat` and `Set widget live attribute` This will take care our widget live state.
  * set `Live attribute path` to `["chat_ui","survey_id"]`
  * set `Live attribute value in JSON format.` value to `2`

![](/img/bot/enable-survey.png)

### Setting default survey from a bot.

This can happen if you have already set survey from a bot, but now you want to reset it to default department configuration.

* Either department had survey
* Either department did hot had a survey

![](/img/bot/enable-default-survey.png)
  
