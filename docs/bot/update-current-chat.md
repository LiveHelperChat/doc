---
id: bot-update-current-chat
title: Update Current chat
---

With this trigger you can perform these actions

## Stop chat and transfer to human

By using this trigger chat can exist bot mode and can execute triggers depending on outcome.  YouTube demo https://youtu.be/AL7RVRcvOas

## Transfer chat to bot

By using this trigger you can transfer chat back to bot.

## Close chat

This trigger will close a chat. Usefull if visitor is not authentificated or any other reason you can think of. 

## Set chat variable [not visible by operator]

This trigger is usefull to set any internal chat attribute which should not be visible by operator, only by system.

```json
{"bot_touched":true}
```

If you set value like below. Attribute will be removed.

```json
{"bot_touched":null}
```

You can also store an object returned from Rest API

```json
{"debts":{content_5_json}}
```

After that you can just access any internal attribute or just [cycle through items](text.md#foreach-cycle).

These variables later on can be used by [Rest API](rest-api.md#replaceable-variables) as replaceable variables. `{{lhc.var.<variable_name>}}`

## Set chat additional attribute [visible by operator]

These variables will be visible by operator.

```json
[{"value":"Attribute value or {content_1}","identifier":"attribute_name","key":"Attribute Name"}]
```

### How to delete custom collected attribute?

This way you can reset from bot any collected attribute from custom fields. You have to fill both key and identifier with same field identifier and set value as `null`

![](/img/chat/reset-custom-variables-from-bot.png)

## Set widget live attribute

This is usefull while the widget is live. 

* `Live attribute path` defines path of attribute of React APP state
* `Live attribute value in JSON format.`

See how bot uses it to [control survey](bot/survey-control-from-bot.md)

## Dispatch Event

If you are building some fancy workflow, and you need to listen to custom even defined by you, you can use this trigger.

Event dispatch looks like this
```php
    erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_dispatch_event', array(
        'action' => $action,
        'chat' => & $chat,
        'replace_array' => (isset($params['replace_array']) ? $params['replace_array'] : [])
    ));
```

To listen to this event in your extension `bootstrap.php` file you would need something like this

```php
public function run() {
    $dispatcher = erLhcoreClassChatEventDispatcher::getInstance();
    $dispatcher->listen('chat.genericbot_chat_command_dispatch_event', array($this, 'listenEvent'));
}

public function listenEvent($params) {
     if ($params['action']['content']['payload'] == '<Event Name>') {
        // $params['action']['content']['payload_arg'] - <Event argument>
    }
};
```

## Update main chat attribute

With this action you can update any chat attribute. You can find all main chat attributes definition in [https://api.livehelperchat.com/](https://api.livehelperchat.com/) at the bottom there will be `Models` section and see `Chat` model definition

 * In command choose `Update main chat attribute`
 * `Chat attribute name` enter your attribute you want to change.
 * `Chat attribute value` enter a value

For value field you can use also replaceable variables like defined [here](text.md#replaceable-variables) you can also use placeholder from [Rest API](bot/rest-api.md#output-variables-in-triggers) E.g

* `{content_1}` up to `{content_6}`

If you want to set vistor `nick`, `email`, `phone` or any other attribute from `Rest API`

* set `Chat attribute name` to `nick`
* set `Chat attribute value` to `{content_1}`

### How to set product attribute?

You can also set product directly from bot.

* To do that you will need a `product_id`  [more information](../department/product.md)
* In command choose `Update main chat attribute`
* `Chat attribute name` enter `product_id`
* `Chat attribute value` enter your `product_id` from product list. `/site_admin/abstract/list/Product` or just click edit and in URL the last number will be a `product_id`.

## Change department

Department you can change also with `Update main chat attribute`, since 3.42v was done improvement and now it's more clear how to change department. 

In order to change department you just have to `Enter department ID` ID you can find in department list.

## Set subject

You can add a subject to the chat automatically by entering subject id.

For value field you can use also replaceable variables like defined [here](text.md#replaceable-variables) you can also use placeholder from [Rest API](bot/rest-api.md#output-variables-in-triggers) E.g

* `{content_1}` up to `{content_6}`

## Remove any previous process

In case you allow visitor to start another information collection process in the middle of one. You can encounter an error message like `Please complete previous process`.

If you want to clean any previous process you can use this response type before executing `Collect custom attribute` response type.

Another way to avoid this error just check mark `Soft event` in `Collect custom attribute` response type. We will automatically terminate it if user starts another one.

## Set meta_msg attribute

This updates visitor message `meta_msg` attribute.

E.g from [sentiment per message trigger](sentiment-analysis-per-message.md#messages-aggregation)

```json
{"sentiment":"{content_1}","sentiment_value":{content_2}}
```

## Messages aggregation

This response type iterates through all chat messages and calculates desired aggregation values.

Fields description

Chat fields

* `Chat variable as Group field` - main variable to store of grouped field
* `Calculated value from group method` - score value of the grouped result

Message fields by which we should do grouping

* `Group field (sentiment)` - stores initial grouping field E.g `sentiment`
* `Group value field. Eg (score field of the sentiment)` - stores score of the sentiment `sentiment_value`

Aggregated messages sample

![](/img/bot/sentiment-per-message/messages-sample.png)


### AVG

Groups messages by `Group field (sentiment)` and calculates average of `Group value field. Eg (score field of the sentiment)` the highest average is stored within chat 
as `Chat variable as Group field` (E.g `sentiment_visitor` and average itself as `sentiment_visitor_value` )

E.g ![](/img/bot/sentiment-per-message/sentiment-visitor-aggr.png)

### SUM

Instead of average we compare by the sum of the grouped fields.

### SUM as comparator and AVG as value

Similar to `AVG` just aggregation value is chosen by sum of the `Group value field. Eg (score field of the sentiment)` but value itself is as AVG

### MAX

Finds the MAX from grouped fields and stores it as aggregated field and it's value.

From sample it would be	`{"sentiment":"positive","sentiment_value":0.9620355963707}`

### MIN

Finds the MIN from grouped fields and stores it as aggregated field and it's value.

From sample it would be	`{"sentiment":"neutral","sentiment_value":0.56032991409302}`

### COUNT MAX (maximum number of grouped record)

Chooses the most frequent value of the grouped field. In case it's same score very first one would be stored.

### COUNT (total number of messages)

Stores only count of the selected messages type

### COUNT FILTER (filtered by group value field)

Stores only count of the selected messages type plus applies filtering by message meta_attr

### RATIO in comparison with all messages

Stores ratio compared to the all/filtered messages.

In this sample we store ratio of positive messages compared to negative messages

E.g ![](/img/bot/sentiment-per-message/ratio.png)