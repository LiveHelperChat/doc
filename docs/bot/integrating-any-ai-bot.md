---
id: integrating-any-ai-bot
title: Integrating AI with Coding
sidebar_label: Integrating AI (with Coding)
---

## Introduction

This tutorial explains how to use a boilerplate template to integrate any AI into Live Helper Chat.

:::tip
This integration requires programming skills. New versions of the bot have a [Rest API](rest-api.md) response type, which allows you to integrate any third-party AI solution into Live Helper Chat [without coding](integrate-any-ai-without-coding.md).
:::

The extension can be found at https://github.com/LiveHelperChat/lhcaibot.

## Installation

* Activate in settings file settings.ini.php add in extension list lhcaibot
* Import bot doc/bot.json
* Rename extension/lhcaibot/settings/settinigs.ini.default.php to extension/lhcaibot/settings/settinigs.ini.php
* Edit extension/lhcaibot/bootstrap/bootstrap.php and adopt to your needs.
* Edit department bot settings.
* After success import you should see something like this once you go to bot.

![](/img/bot/lhcaibot.png)

## How it works?

Basic principle is simple. Every single message is send to AI engine. Visitor message can be processed either sync or async way. Async way requires [background worker](https://github.com/LiveHelperChat/lhc-php-resque) extension.

In [bootstrap.php](https://github.com/LiveHelperChat/lhcaibot/blob/master/bootstrap/bootstrap.php) file you will see two main functions

* `genericHandlerEvent` handles user event
* `getClick` handles button click.

As for integration there can be also way when AI sends message directly to Live Helper Chat using it's Rest API.

## Defined triggers purposes

* `Default trigger` - this trigger is executed once chat starts or visitor sends any other message we don't know what to do. It has two options checked `Default` and `Default for unknown`
* `Response found` - this trigger is executed if our AI finds something and want's to print this information to visitor.
* `Response not found` - this trigger is executed if our AI does not finds anything relevant.
* `About US` - just simple message when visitor clicks `About US` button
* `Transfer to operator` - this trigger is executed once we don't find anything and user clicks transfer to operator.
* `No operators available` - if there are no online operators this message is send.
* `Button response click` - this trigger is send from [bootstrap.php](https://github.com/LiveHelperChat/lhcaibot/blob/master/bootstrap/bootstrap.php#L85) file.
