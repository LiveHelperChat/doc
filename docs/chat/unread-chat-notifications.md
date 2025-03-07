---
id: unread-chat-notifications
title: Unread chat notifications
sidebar_label: Unread chat notifications
---

Live Helper Chat offers two types of notifications to inform visitors about unread messages from an operator:

*   Email notifications
*   Browser notifications

## Email Notifications

### Requirements

*   Enable notifications in the chat configuration:

    > System configuration -> Live help configuration -> Chat configuration -> Workflow

    Enter `1` in `Inform visitor about unread messages from operator, value in minutes. 0 - disabled`.
*   The workflow cron job must be [set up](../development/cronjob.md#default-cronjob-setup).

### When is an Email Sent?

During workflow execution, the system identifies chats that meet the following criteria:

*   More than 1 minute has passed since the last operator message.
*   The chat has a flag indicating unread operator messages.
*   The chat messages have not yet been delivered to the visitor.
*   You can check the database for specific chat attributes if emails are not being received.
*   The visitor's email address is known.
*   Visitor-side conditions:
    *   The visitor has closed the widget.
    *   The visitor is not actively receiving messages.
    *   If the visitor has minimized the widget, synchronization calls are still in progress!
*   Ensure your server is configured to send emails.

```php
array('limit' => 10, 'filterlt' => array('last_op_msg_time' => (time() - (1*60))), 'filter' => array('has_unread_op_messages' => 1, 'unread_op_messages_informed' => 0));
```

### Troubleshooting

*   Before running the workflow cron job, verify that the chat has the required attributes.
*   Check your server's mail settings.

## Browser Notifications

Pending...
