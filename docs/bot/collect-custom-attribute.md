---
id: collect-custom-attribute
title: Collect custom attribute
---

## Introduction

Purpose of this response type is to collect custom attributes. See an [example](collecting-information.md).

## Attributes

Description of all attributes and their purposes.

### Attribute identifier

This is attribute identifier but it's value we decide where collected value will be stored.

Few examples:

* `lhc.email` - set user provided data as chat e-mail
* `lhc.nick` - set user provided data as visitor username
* `lhc.phone` - set user provided data as visitor phone
* `order_number` - non internal attribute. Can be anything.

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
* **(gif|jpg)** Matches either “gif” or “jpg”
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

### Confirmation message

If validation passed this message is send to the visitor.

### Validation error message

If validation fails. This message is send to the visitor.

### Execute trigger on success

This trigger is executed once validation is passed and information is collected.

### Execute trigger on cancelation, overrides message on cancelation

This trigger is executed once visitor cancels information collecting workflow.

### Message on cancelation

If you do not define trigger for cancelation this message is send.