---
id: restrict-execution-more-than-defined-times
title: Restrict Execution to a Defined Number of Times
---

## Introduction

This feature allows you to limit the number of times a workflow can be executed.

For a usage example, see [here](bot/unknown-multiple-messages.md).

In the back office, it appears as follows:

![](/img/bot/unknown-counter.png)

## Attributes

*   **How many times to allow this trigger to execute** - Defines the maximum number of times the triggers below can be executed.
*   **Repeat identifier** - A unique string to identify the counter.
*   **This is a reset operation** - If enabled, the counter will be reset.
*   **If the limit is reached, execute this trigger** -  If the execution limit is reached, this trigger will be executed.

## How do I reset a counter?

![](/img/bot/unknown/repeat-counter-reset.png)
