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

## How to setup a continuous hook event?

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

 * `{args.chat.<any chat attr>}` you can use for comparison including sub attribute like `{args.chat.department.<any_department_attribute>}`
 * `{time}`

### Examples

#### When a customer writes `hello` or `are you there` or `hi` and there’s no reply from the agent in `25` seconds.

![](/img/chat/webhook-example-one.png)

#### When a customer writes `hello` or `are you there` more than once in a row.

![](/img/chat/webhook-example-2.png)

You can combine these two rules into single continuous webhook using `Start of OR`

![](/img/chat/webhook-example-3.png)

#### When an agent chat duration time is > 1.5 department average chat time.

Here we do few tricks.
 * We check that check status has to be active `{args.chat.status} = 1`
 * Chat sub status indicate that visitor has not closed chat explicitly `{args.chat.status_sub} != 3`. You can find possible values in [api documentation](https://api.livehelperchat.com/#/).
 * `{time}-({args.chat.pnd_time}+{args.chat.wait_time}) > 1.5*{args.chat.department.stats.stats_array.avg_chat_duration}`
  * On left side we get how chat chat is going. `Curren time (time when chat become pending  + time how long visitor waited for chat being accepted)`
  * 1.5 multiplied by `department average chat duration`. To has this attribute you have to be running [statistic cronjobs](development/cronjob.md#statistic-cronjob) 

![](/img/chat/webhook-example-4.png)

## How to setup bot and trigger?

Our close trigger configuration can look like this.

![](/img/chat/webhook-close-trigger.png)

## How to configure Rest API call.

Rest API can be configured same way as it's working with normal bot workflow. Please read [an article](../bot/rest-api.md).

## How to send to Rest API only bot chats?

You can use [Rest API conditions](../bot/rest-api.md#conditions) tab. 