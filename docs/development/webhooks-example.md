---
id: webhooks-examples
title: Webhook examples
sidebar_label: Webhook examples
---

This page contains numerous webhook examples.

### Close the chat if the passed variable has changed

* Type - Single event
* Event - `chat.chat_variables_changed`

Conditions

> * `{args.vars.pid.new}` `!=` `{args.vars.pid.old}`
> * `{args.vars.pid.new}` `Not empty`
> * `{args.vars.pid.old}` `Not empty`