---
id: bot-text
title: Text message
---

## Introduction

This article explains text element. Text element looks like for visitor

[![](https://livehelperchat.com/var/media/images/text-buttons.png)​](https://livehelperchat.com/var/media/images/text-buttons.png)

In back office it looks like this

![](/img/bot/text-message.png)

## Attributes

### Text message

Text message can have few sending options

* {__default message__t[show from hour, show till hour]} inclusive is first hour. Few examples
    * Default message
    * `{welcome_message__Welcome to our website}`
    * `{good_evening__Good evening__t[17:24]}` - Show this message from 17 until midnight
    * `{good_morning__Good morning__t[0:17]}` - Show this message from midnight until evening
* You can give random answer by separating messages by `|||` or just clicking ![](/img/bot/new-variation.png)

First message part before text message is text identifier and can be used to translating messages to multiple languages.

### Replaceable variables

Text area supports these replaceable variables

 * `{lhc.nick}`
 * `{lhc.email}`
 * `{lhc.department}`
 * `{lhc.add.<field identifier>}` - supports only first level attributes
 * `{lhc.var.<variable key>}` - supports only first level attributes
 * `{args.chat.<any chat attribute>}`
 * `{args.chat.incoming_chat.chat_external_id}` - incoming chat id
 * `{args.chat.incoming_chat.payload_array.*}` - first payload attributes in array format
 * `{args.msg.msg}` - visitor message.
 * `{args.chat.chat_variables_array.debts.0.nit}` - you can go as deep as you want to show chat variable
 * `{args.chat.chat_variables_array.order_id}` - access `order_id` from additionally defined chat variable which is stored as `This variable is invisible for operator and will be stored in chat_variables attribute`
 * `{args.msg_text}` - payload value if button/dropdown value click is unknown.
 * `{args.chat.online_user.previous_chat.<previous chat attribute>}` This is usefull if on chat start you want to update present chat attributes based on [previous one](/img/bot//previous-chat.png.jpg). This action should be executed on chat start trigger. Few examples
   * `{args.chat.online_user.previous_chat.nick}` - access previous chat nick
   * `{args.chat.online_user.previous_chat.chat_variables_array.debts.0.nit}` - access previous chat chat variables
 * `{msg_id}` - present message id.
 * `{args.current_trigger.<id|name>}` - current trigger id. Stores current trigger
 * `{args.first_trigger.<id|name>}` - first trigger id. As during bot trigger execution multiple triggers can be involved this variables stores very first one.

You can also set value from [Rest API](bot/rest-api.md#output-variables-in-triggers) E.g

* `{content_1}` up to `{content_6}` (these will be string values)
* `{content_1_json}` up to `{content_6_json}` (will be already json encoded string). This is usefull in case you set [chat variable](bot/update-current-chat.md#set-chat-variable-not-visible-by-operator)

### Foreach cycle

You can foreach any chat variable. In this scenario we foreach `chat variable`

```
{foreach=args[chat.chat_variables_array.debts]} - {args.item.debt_organisation} for the value of {args.item.debt_value}
{/foreach}
```

### HTML message

Content of this textarea will be rendered as HTML directly. It also supports translations.

Example how to generate trigger button. Trigger in this case is `1355`. Trigger ID you can see always in trigger menu.

```
To return to main menu click <a onclick='lhinst.updateTriggerClicked()' data-id="{msg_id}" data-payload="1355" class="action-image link-trigger-button">here</a>
```

### Save as system message.

Message will be saved a system message and won't be visible by visitor. Might be usefull during Rest API calls integration if you want to store some information just for operators.

### Save as a visitor message.

Sometimes you want to save a message as it was a visitor message.

### Hide on next message.

This message will be auto hidden as soon there is at-least one other message after present one.

### Render buttons as dropdown.

If you have many buttons. E.g countries you provide services. You can check this option and buttons will be rendered as dropdown options.

### Render buttons even if it's not the last message.

This will render buttons even if buttons is not the last message in bot response.

### Hide text area on response.

When this message is send area for a visitor to enter a message will be hidden. Make sure you include buttons in your response.

### Send a message only at chat start

This message will be send only once and only on start chat event. If you have multiple triggers which is calling same text message. Sometimes it's usefull to have this.
 
## Quick reply options

These options defines visible buttons under a message.

![](/img/bot/quick-reply-options.png?v=3)

### Name

Just button name visible in frontend. Button names support [translations by department](bot/multiple-languages.md#translations-groups)

#### How to render button by department without cloning a bot?

Buttons are not rendered if their name is empty. In combination with bot translations you can have buttons to render for one department and empty for another.

**Example of workflow if button should be rendered only for specific department.**

* If you want to render button for specific department put it's name like `{<some_identifier>__}` E.g `{visible_for_a_department__}`. Default value will be empty so button won't be rendered.
* Create a translation with `visible_for_a_department` as identifier [in translation group](bot/multiple-languages.md#translations-groups)
* Modify department and assign translations group.
* Now bot will find button name in translation group and will render a button, but button won't be rendered for any other department.

**Example of workflow if button should be rendered only for specific department.**

* If you want to render button for all departments put it's name like `{<some_identifier>__Default name}` E.g `{visible_for_a_department__Default name}` Default value will be `Default name` so button will be rendered.
* Create a translation with `visible_for_a_department` as identifier [in translation group](bot/multiple-languages.md#translations-groups). Do not enter any value in `Default` tab `Translation` field
* Modify department and assign translations group.
* Now bot will find button name in translation group and will not render a button, but button will be rendered for any other department.

### 'Precheck event' and  'Arguments` 

Sometimes you want to show the button depending on some validation. E.g user is logged/is some third party service available etc. If you set precheck event like `valid_username` Live Helper Chat will dispatch event like

```php
$validationResult = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
    'render' => $quickReply['content']['render_precheck_function'], // `valid_username`
    'render_args' => $quickReply['content']['render_args'],         // `Arguments`
    'chat' => & $chat,
));
```

When in your extension you can listen for this and validate it like this.

In `bootstrap.php` file listen for an event
```php
$dispatcher = erLhcoreClassChatEventDispatcher::getInstance();
$dispatcher->listen('chat.genericbot_handler', array($this,'genericBotHandler'));
```

Function could look like
 
```php
function genericBotHandler($params) {
    if ($params['render'] == 'valid_username') {
        return array(
            'status' => erLhcoreClassChatEventDispatcher::STOP_WORKFLOW,
            'content' => array(
                'valid' => false,
                'hide_button' => true // You can just disable it by replace this line with `'disable_button' => true`
            )
        );
    }
}
```

### Type

Type describes what type of action will be executed/rendered. There is four types of actions in total.

#### URL

When visitor clicks a button we will open defined URL just as a link.

#### Click

This will issue defined payload. It's usefull if you are integrating third party AI bots. As this event can be passed to them.

#### Update Chat

These are quick updates you can do on button click. There are three types of events you can do from quick replies.
  
* `Transfer to operator` - I would personally just use `Execute trigger` and define a trigger where response type is `Update current chat` as then I can define more flexible transferring workflow.
* `Transfer to bot` - Like an above written I prefer that workflow instead.
* `Subscribe to notifications` - this is usefull to define in default auto responder trigger and suggest visitor subscribe while they are waiting for an operator to accept a chat.
* `Execute trigger` - it's my preferred way to set actions as you can choose defined triggers from the list.

### Store name

If you enter `Store name` button click will be recorded within chat in `additional_data` als you will recorded button click within chat itself.

![](/img/bot/additional_data.png)

### Store value

If you enter `Store value` it will be used as value instead of button name.

### Button ID

We will set this dOM element ID as defined in this field.

## Add action on message

These are quick updates what happens on a message. I would suggest just use `Collect custom attribute` response type. See [example](bot/collecting-information.md) how to use it.

## Structure

Syntax for simple buttons looks like. This can be send directly as a meta_msg body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin ](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin)
```json
[
  {
    "_id": "Hkhov7S77",
    "type": "text",
    "content": {
      "text": "Here is sample element",
      "quick_replies": [
        {
          "_id": "HJRmO7HQ7",
          "type": "button",
          "content": {
            "name": "Button",
            "payload": "about_us"
          }
        },
        {
          "_id": "S1TVdXSQm",
          "type": "url",
          "content": {
            "name": "google.com",
            "payload": "https:\/\/google.com"
          }
        }
      ]
    }
  }
]
```