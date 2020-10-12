---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

Webhooks allows to send request to third party service once some event happens in Live Helper Chat. E.g chat being closed/started.

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

## How to setup an event?

I'll give a sample how to setup an event on chat close.

* First you have to find what event you want to listen to from [hooks](../hooks.md). Looking at list we find `chat.close` event and it has two arguments
 * `chat` - Chat instance.
 * `user_data` - User instance.
 * Their model's descriptions we can find in https://api.livehelperchat.com/#/
* You can those variables in rest API with new placeholder like `{{args.chat.id}}` or `{{args.user_data.id}` you can access as deep as you want into these variables.

So our `webhook` configuraiton can look like this.

![](/img/chat/webhook.png)

As you can see I have chosen a bot and trigger to execute on that event.

## How to setup bot and trigger?

Our close trigger configuration can look like this.

![](/img/chat/webhook-close-trigger.png)

## How to configure Rest API call.

Rest API can be configured same way as it's working with normal bot workflow. Please read [an article](../bot/rest-api.md).

## How to send to Rest API only bot chats?

You can use [Rest API conditions](../bot/rest-api.md#conditions) tab. 