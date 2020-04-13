---
id: unread-chat-notifications
title: Unread chat notifications
sidebar_label: Unread chat notifications
---

Live Helper Chat has two types of notifications to inform a visitor about unread messages from an operator.

* Mail notifications
* Browser notifications

## Mail notifications

### Requirements

* You have to enable notifications in chat configuration.

> System configuration -> Live help configuration -> Chat configuration -> Workflow

Enter 1 in `Inform visitor about unread messages from operator, value in minutes. 0 - disabled`

* Workflow cronjob has to be [setup](../development/cronjob.md#default-cronjob-setup)

### When does an e-mail is send?

During workflow execution we are looking for the chats with these conditions

* From last operator message has to be passed more than 1 minutes
* Chat has to have a flag that it has unread operator messages
* Chat messages has not yet been delivered to the visitor.
* You can see in database for this chat attributes if you do not receive an e-mails.
* Visitor e-mail has to be known.
* Visitor side conditions
    * Visitor has to have closed widget
    * Visitor is not receiving messages.
    * If visitor has minimized widget sync calls are still happening!
* Make sure your server can send e-mails.

```php
array('limit' => 10, 'filterlt' => array('last_op_msg_time' => (time() - (1*60))), 'filter' => array('has_unread_op_messages' => 1, 'unread_op_messages_informed' => 0));
```
### Troubleshoot

* Check before running workflow cronjob that chat has required attribute.
* Check your server mail setting.

## Browser notifications

Pending...
