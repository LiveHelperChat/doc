---
id: transfer-to-bot-if-not-accepted
sidebar_label: Transfer chat back to bot if chat not accepted
title: Transfer chat back to bot if chat not accepted
---

There is two ways how you can do that.

* Via auto responder (at the moment this flow does not support third party integrations. E.g fb messenger)
* Via continuous webhooks. Works in all scenarios.

We will cover sample how to do that via continuous webhooks. 

Requirement
* Min 4.16v version
* [Continous webhooks cronjob](development/cronjob.md#continuous-webhooks-cronjob)


How it works
* Continuous webhook checks is there any chat in pending status for more than 30 seconds, if so execute trigger.
* Trigger set's chat status back to bot
* If you wish these rules can be extended and include
  * `{args.chat.incoming_chat.incoming.scope} = facebookwhatsappscope` would apply only to incoming webhook with defined scope
  * `{args.chat.dep_id} = 4` would apply to department 4 only

Sample of continous webhook configuration

![Including other bot](/img/bot/bots/continous-webhook.png)

Trigger configuration sample

![Including other bot](/img/bot/bots/trigger-sample-transfer.png)