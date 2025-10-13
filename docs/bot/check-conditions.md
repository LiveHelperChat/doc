---
id: check-conditions
title: Check for conditions to proceed
---

This trigger allows to have custom conditions to be checked before rest of the triggers can be processed.

One of the few possible scenarios can be

* Collecting multiple fields before next trigger can be executed
* Comparing user message with internal chat variable. E.g you set [chat variable](bot/update-current-chat.md#set-chat-variable-not-visible-by-operator) and later you want that visitor entered correct text.
* https://www.youtube.com/watch?v=6pYWAqDrqts how to use this element in a start chat form.
* https://youtu.be/AL7RVRcvOas how to use this element and show custom content if there is no operators available.


![](/img/bot/check-conditions.png?v=2)

## Attribute supported placeholders

`Attribute` supports these placeholders

* `lhc.<main chat attribute>` E.g `lhc.email`, `lhc.nick`, `lhc.phone` etc. See [swagger](https://api.livehelperchat.com) for all attributes.
* `<identifier>` - this can be either custom attribute `Field identifier` or just array key from `chat_variables`
* `<chat_variable>` - identical to `{args.chat.chat_variables_array.<variable_key>}` It can be set using `Update current chat response` [response type](bot/update-current-chat.md#set-chat-variable-not-visible-by-operator)  
 So if you set variable `bot_touched` in attribute field you can use either `bot_touched` or `{args.chat.chat_variables_array.bot_touched}`
* `{args.chat.<main chat attr>}` or `{args.msg.msg}` you can use text matching for visitor message. 
* `online_department` use as attribute to check is department online (**respects** department online hours and operators online statuses). In value field 1 means online, 0 - means offline
  * `online_department__<dep_id_1>,<dep_id_2>` - You can check other department online status by following example. E.g `online_department__5` it would check department with id 5 online status.
* `online_op_department` use as attribute to check is department online (**ignores** department online hours) and checks only for operators. In value field 1 means online, 0 - means offline
  * `online_op_department__<dep_id_1>,<dep_id_2>` - You can check other department online status by following example. E.g `online_op_department__5` it would check department with id 5 online status.
* `online_department_hours` use as attribute to check is department online by online hours settings (**ignores** ignores operators statuses). In value field 1 means online, 0 - means offline
  * `online_department_hours__<dep_id_1>,<dep_id_2>` - You can check other department online status by following example. E.g `online_department_hours__5` it would check department with id 5 online status.
* `siteaccess` you can use this attribute to check what `siteaccess` visitor is on and execute appropriate trigger. E.g if you want different response by language. `eng`,`lit` [list of default siteacess](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L34-L66)
* `chat_files` check does chat has files 
  * `chat_files` `>` `0` - chat has files
  * `chat_files` `contains` `pdf,jpg` - chat has pdf or jpg
* `operator_files` same checks as `chat_files` except only for operator files
* `user_files` same checks as `chat_files` except only for visitor files
* `{validation_event__<event_name>}` E.g `{validation_event__my_event_validator}` event with `my_event_validator` will be dispatched and result afterwards compared with expected output. `my_event_validator` `=` `1`
* `{{args.chat.online_user.previous_chat.id}} > 0` and use that condition to check did visitor had chat before with you.
* `{args.msg.msg}` OR `{args.chat.last_message}` check against last visitor message.
* `media_type` you can check this way was uploaded file or not. In right part just enter extensions `jpg,png,jpeg,gif` and as a comparison variable choose `In list, items separated by ||` 
* `custom_schedule` E.g `2,12:30-13:00;1,12:30-14:00` it will be valid on Monday and Tuesday within specific time ranges. You can use with `=` and `!=` comparable operators. E.g `custom_schedule = 1` (Schedule matches) or `custom_schedule != 1` (Schedule does not match). More examples:

```
1-5,11:00-20:00 - Monday to Friday, 11:00 to 20:00
6-7,11:00-19:00 - Saturday to Sunday, 11:00 to 19:00
1,10:00-18:00 - Monday only, 10:00 to 18:00
7,09:00-17:00 - Sunday only, 09:00 to 17:00
```

If you do not enter `Value` means it's empty.

E.g

 * so `lhc.email != <empty>` as in screenshot. Means I'm checking that e-mail would not be an empty string.
 * `{args.msg.msg}` I'm expecting message to contain one of the words `dispute, chargeback, refund{2}, money back, contact bank`. `Refund` word can have two typos.

## How to validate `{validation_event__<event_name>}`

```php
class erLhcoreClassExtensionValidateevent
{

    public $configData = false;

    public function __construct()
    {
        
    }

    public function run()
    {
        $dispatcher = erLhcoreClassChatEventDispatcher::getInstance();
        $dispatcher->listen('chat.genericbot_event_handler', 'erLhcoreClassExtensionValidateevent::genericEventHandler');
    }
    
    public static function genericEventHandler($params)
    {
        if ($params['render'] == 'my_event_validator') {
            return array(
                'status' => erLhcoreClassChatEventDispatcher::STOP_WORKFLOW,
                'validation_result' => 1
            );
        }
    }
}
```

## Value supported placeholders

Value supports only `{args.` type placeholders. E.g `{args.msg.msg}` or `{args.chat.chat_variables_array.<variable>}`

## How do I check visitor message with internally stored chat variable?  

Example condition can look like

![](/img/bot/check-internal-conditions.png)

## How do I execute triggers based on visitor priority

Let say we want to transfer players with player class VIP to operator and others keep with a bot.

We have defined custom chat variables

```JS
if (typeof lhc_var === 'undefined') { // This variable has to be defined before Live Helper Chat embed script.
    window.lhc_var = {}; // Window is required to define variable in global scope
};

lhc_var.playerClass = 'VIP';
```

Next we have `default` trigger with this check

![](/img/bot/vip-player.png)

It means if player is `VIP` class trigger `VIP` will be executed, if not `NonVIP` trigger will be executed.

## Collect all information and write information was collected.

Main trigger can look like this.

![](/img/bot/request-appointment.png)

And each collecting information step can look like this

![](/img/bot/collect-nick.png)

## Allow to execute rest of the triggers only if e-mail is not empty

In this example we forward to e-mail collecting workflow if visitor e-mail is empty.

![](/img/bot/condition-example-2.png)

## How to add custom icon if visitor writes some message containing specific text?

For that we will need

* [Webhooks](development/webhooks.md)
* Trigger setup

Trigger setup can look like

![](/img/bot/check-conditions-icon.png)

Webhook setup can look like

![](/img/bot/webhook-event.png)

## How to execute bottom triggers if conditions is matched

There is two scenarios

### If you are using `If conditions are met execute this trigger`

* `{args.chat.dep_id} = 31` We want to execute only if department id is `31`.
* check `If conditions are matched continue executing responses.` This is required if you are using `If conditions are met execute this trigger`

![](/img/bot/bot-conditions-trigger.png)

### If you are not using `If conditions are met execute this trigger`

* Condition changes to `{args.chat.dep_id} != 31` We want to execute only if department id is `31`. This time it's reverse

![](/img/bot/bot-conditions-trigger-reverse.png)

## How do I check if I had a chat with this user and skip bot in that scenario?

We will have three triggers

 * `Default`
 * `Remember VIP` will be triggered on `remember` keyword
 * `Welcome back VIP` will send a message if we had a chat with this visitor before.

[Download bot](/img/bot/bots/remember.json)

### `Default` trigger content

Conditions content

`{args.chat.online_user.previous_chat.chat_variables_array.vip} = 1`

![image](https://github.com/user-attachments/assets/de98e325-f6d6-4681-9beb-ccc0aa124b4f)

### `Remember VIP` trigger content

Trigger is triggered on `remember` keyword

![image](https://github.com/user-attachments/assets/efedc807-8ab8-4ed5-8106-3562cd09fa0d)

### `Welcome back VIP` trigger content

![image](https://github.com/user-attachments/assets/68756188-cb5f-474e-90c5-a73a32dda394)

