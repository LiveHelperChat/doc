---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

There are two types of events:

*   **Hook-based event:** A webhook that sends a request to a third-party service when an event occurs in Live Helper Chat (e.g., a chat is closed or started).
*   **Continuous event:** An event that is executed repeatedly as long as a condition is met.

There is also a video tutorial available: https://youtu.be/TKO30hV0lqs

## How to activate webhooks

First, enable webhooks in your `settings.ini.php` file:

```php
'webhooks' =>
    array(
        'enabled' => true,
        'worker' => 'http', // resque
        'single_event' => false
    ),
```

These settings can be found here: https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L73-L77

If you are updating from a version older than 3.47v, you must add these settings manually.

## Worker options

By default, events are executed in `http` mode. This means that when an event occurs, it is executed immediately. The disadvantage of this approach is that it can slow down the user interface for the visitor or operator.

If you are using the [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extension, it is recommended to use `resque` as the worker. This will execute all events in the background.

## `single_event` setting purpose

This setting is relevant only if worker is `resque`.

* `single_event => false` - This is the default option. It means if during event processing, another event is dispatched, it will be processed as a separate job.
* `single_event => true` - If we are already in background mode and during script execution another event is dispatched, it will be processed instantly. In other words, we will not schedule new jobs if we are already in the background.

I would suggest keeping this value as false. If event execution order is important to you, you can set it to true.

## How to setup hook based event?

I'll provide an example of how to set up an event when a chat closes.

*   First, identify the event you want to listen for from the [hooks](../hooks.md) list. In this case, we'll use the `chat.close` event, which has two arguments:
    *   `chat` - The chat instance.
    *   `user_data` - The user instance.
*   You can find descriptions of their models at https://api.livehelperchat.com/#/
*   You can use these variables in the REST API with placeholders like `{{args.chat.id}}` or `{{args.user_data.id}}`. You can access nested attributes within these variables.

Here's an example of a `webhook` configuration:

![](/img/chat/webhook.png?v=3)

In this example, a bot and trigger are configured to execute when the event occurs, and the conditions are valid (`Execute if conditions are valid`).

The `Execute if conditions are NOT valid` option is useful for continuous webhooks. For example, if condition `A` is met, an alert icon is added; if the condition is not met, the alert icon is removed.

## How to setup a continuous chat hook event?

The general purpose is the same as with hook-based events: to execute a trigger if certain conditions are met (e.g., add an [alert icon](bot/alert-icon.md) to the chat).

Conditions are checked **only** for `Active`, `Bot`, and `Pending` chats.

There are three types of conditions you can check before an event is executed:

*   `Visitor message contains`: Checks if the last chat message from the visitor contains specific keywords.
*   `Compare attribute`: Compares any chat attribute to determine if the conditions are met.
*   `Start of OR`: Allows you to create `OR` conditions between groups of conditions.

Related cron jobs:

*   For continuous events to work, you must run the [webhooks cron job](development/cronjob.md#continuous-webhooks-cronjob).
*   For department statistics to work, you must run the [statistic cron jobs](development/cronjob.md#statistic-cronjob).

### Visitor message contains

This condition allows you to check if a visitor's message contains specific keywords. Text matching rules can be found [here](bot/triggers.md#custom-text-matching).

![](/img/chat/webhook-visitor-message.png)

### Compare attribute

You can compare any chat attribute using this condition. You also have access to the special placeholder `{time}`, which represents the current timestamp. Mathematical expressions are also supported.

Supported placeholders:

*   `{args.chat.<any chat attr>}`: You can use this for comparison, including sub-attributes like `{args.chat.department.<any_department_attribute>}`. See the [Chat object](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php#L196) and the `__get` method for magic attributes like:
    *   `department` or `user`
        *   `{args.chat.user.name_support}`: The name visible in the widget.
        *   `{args.chat.user.name_official}`: The name visible in the back office.
*   `{time}`: The current timestamp.
*   `{args.chat.lsync}`: The last time the visitor was seen online or checked for messages.
*   `{args.chat.status_sub}`: Checks for the chat's sub-status.
    ```
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
*   `{args.chat.status}`: Checks for the chat's status.
    ```
    const STATUS_PENDING_CHAT = 0;
    const STATUS_ACTIVE_CHAT = 1;
    const STATUS_CLOSED_CHAT = 2;
    const STATUS_CHATBOX_CHAT = 3;
    const STATUS_OPERATORS_CHAT = 4;
    const STATUS_BOT_CHAT = 5;
    ```
*   `{args.chat.user.id}`: The operator object with its own [attributes](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhuser/erlhcoreclassmodeluser.php#L15).
*   `{args.chat.last_op_msg_time}`: You *cannot* use this attribute in bot chat status because while chatting with a bot it remains zero always. Use `{args.chat.last_user_msg_time}` as the bot should always respond within a few seconds.
* `{args.chat.id}`: [Chat object](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php#L196) also see `__get` method for magic attributes like
    * `department` or `user`
        * `{args.chat.user.name_support}` name visible in the widget or
        * `{args.chat.user.name_official}` name visible in the back office

These are the main classes:

*   [`args.chat.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php)
*   [`args.chat.user.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhuser/erlhcoreclassmodeluser.php)
*   [`args.chat.department.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhdepartament/erlhcoreclassmodeldepartament.php)
*   [`args.chat.incoming_chat.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincoming.php)
*   [`args.chat.incoming_chat.incoming.<attr>`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincomingwebhook.php)

All classes can be found [here](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/lib/models).

### Examples

#### Example: When a customer writes "hello," "are you there," or "hi," and there is no reply from an agent within 25 seconds.

![](/img/chat/webhook-example-one.png)

#### Example: When a customer writes "hello" or "are you there" more than once in a row.

![](/img/chat/webhook-example-2.png)

You can combine these two rules into a single continuous webhook using `Start of OR`.

![](/img/chat/webhook-example-3.png)

#### Example: When a bot does not respond for 60 seconds.

Conditions:

*   First, check that the chat is in bot status: `{args.chat.status} = 5`
*   More than 60 seconds have passed since the visitor's last message: `{args.chat.last_user_msg_time} < {time}-60` OR `{args.chat.last_msg.time} < {time}-60`
*   The widget is not closed: `{args.chat.status_sub} != 3`
*   The visitor was seen in the last two minutes: `{args.chat.lsync} > {time}-120`. *Remove* this rule in third-party integrated chats, as this attribute is always zero in those cases (e.g., WhatsApp).
*   The last message was a visitor message: `{args.chat.last_msg.user_id} = 0`. We don't want to terminate the chat if the visitor is not replying.

![](/img/bot/bot-not-responding.png)

#### Example: When a user is not responding to a bot for 60 seconds.

Conditions:

*   First, check that the chat is in bot status: `{args.chat.status} = 5`
*   More than 60 seconds have passed since the bot's last message: `{args.chat.last_msg.time} < {time}-60`
*   The widget is not closed: `{args.chat.status_sub} != 3`
*   The last message was a bot message: `{args.chat.last_msg.user_id} = -2`.

![](/img/bot/user-not-replying.png)

#### Example: When an agent's chat duration is greater than 1.5 times the department's average chat time.

Here are a few considerations:

*   Check that the chat status is active: `{args.chat.status} = 1`
*   The chat sub-status indicates that the visitor has not closed the chat explicitly: `{args.chat.status_sub} != 3`. You can find possible values in the [API documentation](https://api.livehelperchat.com/#/).
*   `{time}-({args.chat.pnd_time}+{args.chat.wait_time}) > 1.5*{args.chat.department.stats.stats_array.avg_chat_duration}`
    *   The left side calculates how long the chat has been going on: `Current time - (time when chat became pending + time the visitor waited for the chat to be accepted)`.
    *   This is compared to 1.5 multiplied by the `department's average chat duration`. To use this attribute, you must run the [statistic cron jobs](development/cronjob.md#statistic-cronjob).

![](/img/chat/webhook-example-4.png)

#### Example: Send an email when a customer fills out a survey.

The idea is to send an email to the department's email address when a visitor fills out a survey. The same workflow can be used for other events.

*   Listen for the `survey.filled` event.

![](/img/bot/surve-filled.png)

*   Execute a trigger with the `Send mail` action.

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

### How do I find message id for debug?

* Open any conversation and click three dots on desired mail message and copy `Download (eml)` it should look like `https://demo.livehelperchat.com/site_admin/mailconv/apimaildownload/3000000929266/1467` `3000000929266` will be your message id
* Navigate to Audit Log and click `Debug chat attributes`. Instead of Chat ID enter Message ID

## How to setup bot and trigger?

Our close trigger configuration can look like this.

![](/img/chat/webhook-close-trigger.png)

## How to configure Rest API call.

Rest API can be configured same way as it's working with normal bot workflow. Please read [an article](../bot/rest-api.md).

:::tip
If you are using [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque) you do NOT need to choose in your Rest API trigger.

 * Send Rest API Call in the background always.
 * Send Rest API Call in the background if we are not already in it.

Webhooks already will be processed in the background without blocking UI

:::

## How to send to Rest API only bot chats?

You can use [Rest API conditions](../bot/rest-api.md#conditions) tab. 
