---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

There are two events types

 * Hook based event - webhook allows to send a request to third party service once some event happens in Live Helper Chat. E.g chat being closed/started.
 * A continuous event - it's and event executed only if more than one action happens in a row.

There is also video tutorial https://youtu.be/TKO30hV0lqs

## How to active?

First you have to enable them in your `settings.ini.php`

```php
'webhooks' =>
    array(
        'enabled' => true,
        'worker' => 'http', // resque
    ),
```

Location of these settings https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L73-L77

If you are updating from older version than 3.47v you have to add these settings manually.

## Worker options

By default we will execute events in `http` mode. Means if some events happens we will execute event at the same moment. This has disatvantage as it can slow down UI for the visitor or operator. 

If you are using [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extensions I suggest to use `resque` as worker. It will execute all events in the background.

## How to setup hook based event?

I'll give a sample how to setup an event on chat close.

* First you have to find what event you want to listen to from [hooks](../hooks.md). Looking at list we find `chat.close` event and it has two arguments
 * `chat` - Chat instance.
 * `user_data` - User instance.
 * Their model's descriptions we can find in https://api.livehelperchat.com/#/
* You can those variables in rest API with new placeholder like `{{args.chat.id}}` or `{{args.user_data.id}` you can access as deep as you want into these variables.

So our `webhook` configuration can look like this.

![](/img/chat/webhook.png?v=3)

As you can see I have chosen a bot and trigger to execute on that event `Execute if conditions are valid`.

`Execute if conditions are NOT valid` this is usefull in continuous webhooks. E.g

If conditions `A` is met we add an alert icon if conditions is **not** met we remove alert icon.

## How to setup a continuous chat hook event?

General purpose is the same as hooks based events. Execute trigger if conditions are valid. E.g add an [alert icon](bot/alert-icon.md) to the chat.

Conditions are checked **only** for `Active`, `Bot`, `Pending` chats.

First of all there are three conditions you can check before event is executed.

 * `Visitor message contains` - in this checking last chat message has to be a visitor message
 * `Compare attribute` - you can compare any chat attribute for conditions to be matched
 * `Start of OR` - you can have `OR` conditions between conditions groups


Related cronjobs

 * For continuous events to work you have to be running [webhooks cronjob](development/cronjob.md#continuous-webhooks-cronjob) 
 * For department statistic to work you have to be running [statistic cronjobs](development/cronjob.md#statistic-cronjob) 

### Visitor message contains

This allows you to check does visitor message contains specific keywords. Text matching rules can be found [here](bot/triggers.md#custom-text-matching)

![](/img/chat/webhook-visitor-message.png)

### Compare attribute

You can compare any chat attribute using this condition. You also have access to special placeholder `{time}` it's timestamp. You can also use mathematical expressions.

Supported placeholders

 * `{args.chat.<any chat attr>}` you can use for comparison including sub attribute like `{args.chat.department.<any_department_attribute>}`. [Chat object](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php#L196) also see `__get` method for magic attributes like
   * `department` or `user`
     * `{args.chat.user.name_support}` name visible in the widget or 
     * `{args.chat.user.name_official}` name visible in the back office
 * `{time}` - current timestamp
 * `{args.chat.lsync}` - last time visitor was seen online or checked for messages.
 * `{args.chat.status_sub}` - check for chat sub-status
   * ```
     const STATUS_SUB_DEFAULT = 0;
     const STATUS_SUB_OWNER_CHANGED = 1;
     const STATUS_SUB_CONTACT_FORM = 2;
     const STATUS_SUB_USER_CLOSED_CHAT = 3;
     const STATUS_SUB_START_ON_KEY_UP = 4;
     const STATUS_SUB_SURVEY_SHOW = 5;
     const STATUS_SUB_SURVEY_COLLECTED = 6;
     const STATUS_SUB_OFFLINE_REQUEST = 7;
     const STATUS_SUB_ON_HOLD = 8;
     const STATUS_SUB_SURVEY_COMPLETED = 9;
     ```
 * `{args.chat.status}` - check for chat status 
   * ```
     const STATUS_PENDING_CHAT = 0;
     const STATUS_ACTIVE_CHAT = 1;
     const STATUS_CLOSED_CHAT = 2;
     const STATUS_CHATBOX_CHAT = 3;
     const STATUS_OPERATORS_CHAT = 4;
     const STATUS_BOT_CHAT = 5;
     ```
 * `{args.chat.user.id}` - operator object with it's own [attributes](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhuser/erlhcoreclassmodeluser.php#L15)
 * `{args.chat.last_op_msg_time}` - you *cannot* use this attribute in bot chat status because while chatting with bot it remains zero always. Use `{args.chat.last_user_msg_time}` as bot should always respond within few seconds.
 * `{args.chat.id}` [Chat object](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php#L196) also see `__get` method for magic attributes like
    * `department` or `user`
        * `{args.chat.user.name_support}` name visible in the widget or
        * `{args.chat.user.name_official}` name visible in the back office

These are the main classes

* [`args.chat.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php)
* [`args.chat.user.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhuser/erlhcoreclassmodeluser.php)
* [`args.chat.department.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhdepartament/erlhcoreclassmodeldepartament.php)
* [`args.chat.incoming_chat.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincoming.php)
* [`args.chat.incoming_chat.incoming.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincomingwebhook.php)

All classes can be found [here](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/lib/models)

### Examples

#### When a customer writes `hello` or `are you there` or `hi` and there’s no reply from the agent in `25` seconds.

![](/img/chat/webhook-example-one.png)

#### When a customer writes `hello` or `are you there` more than once in a row.

![](/img/chat/webhook-example-2.png)

You can combine these two rules into single continuous webhook using `Start of OR`

![](/img/chat/webhook-example-3.png)

#### When bot does not respond for 60 seconds

Conditions

* First we check that chat is in bot status `{args.chat.status} = 5`
* From visitor last message time passed more than 60 seconds. `{args.chat.last_user_msg_time} < {time}-60` OR `{args.chat.last_msg.time} < {time}-60`
* Widget is not closed `{args.chat.status_sub} != 3`
* Visitor was seen in the last two minutes `{args.chat.lsync} > {time}-120`. *Remove* that rule in third party integrated chats! as this attribute is always zero in that case. WhatsApp etc...
* Last message was a visitor message `{args.chat.last_msg.user_id} = 0`. We do not want to terminate chat if visitor is not replying.

![](/img/bot/bot-not-responding.png)

#### When user is not responding to bot for 60 seconds?

Conditions

* First we check that chat is in bot status `{args.chat.status} = 5`
* From bot last message time passed more than 60 seconds. `{args.chat.last_msg.time} < {time}-60`
* Widget is not closed `{args.chat.status_sub} != 3`
* Last message was a bot message `{args.chat.last_msg.user_id} = -2`. 

![](/img/bot/user-not-replying.png)

#### When an agent chat duration time is > 1.5 department average chat time.

Here we do few tricks.
 * We check that check status has to be active `{args.chat.status} = 1`
 * Chat sub status indicate that visitor has not closed chat explicitly `{args.chat.status_sub} != 3`. You can find possible values in [api documentation](https://api.livehelperchat.com/#/).
 * `{time}-({args.chat.pnd_time}+{args.chat.wait_time}) > 1.5*{args.chat.department.stats.stats_array.avg_chat_duration}`
  * On left side we get how chat chat is going. `Curren time (time when chat become pending  + time how long visitor waited for chat being accepted)`
  * 1.5 multiplied by `department average chat duration`. To has this attribute you have to be running [statistic cronjobs](development/cronjob.md#statistic-cronjob) 

![](/img/chat/webhook-example-4.png)

#### Send an e-mail when customer fills a survey

Idea is to send an e-mail to department e-mail once a survey is filled by a visitor. Same workflow can be used for any other events.

* We listen for `survey.filled`

![](/img/bot/surve-filled.png)

* We execute trigger with `Send mail` trigger.

![](/img/bot/survey-filled-bot.png)


## How to setup a continuous mail hook event?

* All conditions are based on message model attributes. https://api.livehelperchat.com/#/ MailMessage object definition
* Conversation object can be reached with `{args.chat.conversation....}`
* Event is always triggered for newest mail messages.
* As same mail message can be matched multiple times we are tracking which mail messages were matched already so no duplicate events is processed.
* It's important to limit number of result matched. This can be done via `{args.chat.udate}` attribute.

### How to trigger if mail is in active/pending state for 6 hours

* Let's assume our trigger is run every 20 seconds.
* We are limiting result set by collecting only mails if they are older than 6 hours but not more than 7 hours.

> `{args.chat.udate} < {time} - 21600` - older than 6 hours
> `{args.chat.udate} > {time} - 25200` - younger than 6 hours
> `{args.chat.status} != 2 ` - mail message is not responded.


If you are storing custom variables in a conversation object, you can reach those this way.

```
{args.chat.conversation.mail_variables_array.custom.customerClass}
```


## How to setup bot and trigger?

Our close trigger configuration can look like this.

![](/img/chat/webhook-close-trigger.png)

## How to configure Rest API call.

Rest API can be configured same way as it's working with normal bot workflow. Please read [an article](../bot/rest-api.md).

## How to send to Rest API only bot chats?

You can use [Rest API conditions](../bot/rest-api.md#conditions) tab. 