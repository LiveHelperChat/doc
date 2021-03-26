---
id: collect-custom-attribute
title: Collect custom attribute
---

## Introduction

Purpose of this response type is to collect custom attributes. See an [example](collecting-information.md).

There is an example how to use this attribute from [extension](https://github.com/LiveHelperChat/lhccollectcustombot).

## Attributes

Description of all attributes and their purposes.

### Attribute identifier

This is attribute identifier but it's value we decide where collected value will be stored.

Few examples:

* `lhc.email` - set user provided data as chat e-mail
* `lhc.nick` - set user provided data as visitor username
* `lhc.phone` - set user provided data as visitor phone
* `order_number` - non internal attribute. Can be anything.
* `[file]` - this attributes expects that visitor would upload a file. Preg match rule can look like `(gif|jpg|png)`

### Attribute name

Attribute name is used ony if it's not an internal attribute. It will be visible in chat additional information row.

### Preg match rule.

You can have custom validation preg match rule. Few examples

* **^.{5,}+$** string with minimum 5 characters
* **foo** The string “foo”
* **^foo** “foo” at the start of a string
* **foo$** “foo” at the end of a string
* **^foo$** “foo” when it is alone on a string
* **[abc]** a, b, or c
* **[a-z]** Any lowercase letter
* **[^A-Z]** Any character that is not a uppercase letter
* **(gif|jpg)** Matches either `gif` or `jpg`. This can be used to match file extension.
* **[a-z]+** One or more lowercase letters
* **[0-9.-]** Any number, dot, or minus sign
* **^[a-zA-Z0-9_]{1,}$** Any word of at least one letter, number or _
* **([wx])([yz])** wy, wz, xy, or xz
* **[^A-Za-z0-9]** Any symbol (not a number or a letter)
* **([A-Z]{3}|[0-9]{4})** Matches three letters or four numbers
* **([A-Z]{3}[0-9]{4})** Matches three letters followed by four numbers

Internally validation looks like this

```php
if (!preg_match('/' . $eventData['content']['preg_match'] . '/',$payload)) {
    // Further Live helper chat logic...
}
```

### Custom event to validate

If you define event we will try first to dispatch event 

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_event_handler', array(
    'render' => $eventData['content']['event'], // event you have put.
    'render_args' => (isset($eventData['content']['event_args']) ? $eventData['content']['event_args'] : array()),
    'chat' => & $chat,
    'event' => & $chatEvent,
    'event_data' => $eventData,
    'payload' => & $payload,
));
```

How listen this even in extension see an [example](https://github.com/LiveHelperChat/lhccollectcustombot) on github.

### Cancel button enabled on failed validation

You can show a visitor `Cancel` button with your defined text. If you are using extension you will have to throw exception with this option.

### Intro message

This message is shown before user enters any required information.

### Execute trigger on validation failure

You can choose to execute custom trigger on validation error. See [sample](bot/collecting-information-two-tries.md) how to allow a visitor to enter information two times before terminating a process.

### Validation error message

If validation fails. This message is send to the visitor.

### Success message

If validation passed this message is send to the visitor.

### Execute trigger on success

This trigger is executed once validation is passed and information is collected.

### Execute trigger on cancelation, overrides message on cancelation

This trigger is executed once visitor cancels information collecting workflow.

### Message on cancelation

If you do not define trigger for cancelation this message is send.

### Soft event

In case you see `Please complete previous process` you can avoid this error by checking `Soft event`.

You can also avoid this error manually executing `Update Current chat` response type and choosing `Remove any previous process`

### File expecting trigger example

Scenario if files uploads are disabled by default and enabled by bot automatically and after a successful upload disabled again.

* Files upload for the visitor is disabled. 
* In files configuration section you have enabled `Allow visitor to choose only one file for the upload`
* Very first trigger in bot response is `Send Text` with content `!files no` this will enable files upload for the visitor without sending any message.
* Next response within trigger is the file collecting workflow itself

Files upload trigger configuration example

![](/img/bot/collect-file.png?v=1)

* On success of file upload we disable files upload by sending `Send Text` with content `!stopfiles we have received your file!`

![](/img/bot/file-received.png?v=1)
