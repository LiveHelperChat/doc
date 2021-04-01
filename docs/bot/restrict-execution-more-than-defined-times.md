---
id: restrict-execution-more-than-defined-times
title: Restrict execution more than defined times
---

## Introduction

This response allows you to limit execution workflows for limited times.

You can find usage sample [here](bot/unknown-multiple-messages.md)

In back office it looks like this

![](/img/bot/unknown-counter.png)

## Attributes

* `How many times allow to execute this trigger` - defines how many times we can execute triggers from bellow
* `Repeat identifier` - this should be just a string name for your counter
* `This is reset operation.` - this will force counter to be reset
* `If limit is reached execute this trigger` - if limit is reached we will execute this trigger.

## How do I reset a counter?

![](/img/bot/unknown/repeat-counter-reset.png)