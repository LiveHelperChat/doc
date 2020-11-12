---
id: bot-update-current-chat
title: Update Current chat
---

With this trigger you can perform these actions

## Stop chat and transfer to human

By using this trigger chat can exist bot mode and can execute triggers depending on outcome.

## Transfer chat to bot

By using this trigger you can transfer chat back to bot.

## Close chat

This trigger will close a chat. Usefull if visitor is not authentificated or any other reason you can think of. 

## Set chat variable [not visible by operator]

This trigger is usefull to set any internal chat attribute which should not be visible by operator, only by system.

```json
{"bot_touched":true}
```

These variables later on can be used by [Rest API](rest-api.md#replaceable-variables) as replaceable variables. `{{lhc.var.<variable_name>}}`

## Set chat additional attribute [visible by operator]

These variables will be visible by operator.

```json
[{"value":"Attribute value or {content_1}","identifier":"attribute_name","key":"Attribute Name"}]
```

### How to delete custom collected attribute?

This way you can reset from bot any collected attribute from custom fields. You have to fill both key and identifier with same field identifier and set value as `null`

![](/img/chat/reset-custom-variables-from-bot.png)

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

## Remove any previous process

In case you allow visitor to start another information collection process in the middle of one. You can encounter an error message like `Please complete previous process`.

If you want to clean any previous process you can use this response type before executing `Collect custom attribute` response type.

Another way to avoid this error just check mark `Soft event` in `Collect custom attribute` response type. We will automatically terminate it if user starts another one.


