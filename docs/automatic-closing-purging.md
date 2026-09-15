---
id: auto-close-delete
title: How to set up automatic chat closing/purging
sidebar_label: Automatic closing/deleting
---

To configure automatic chat closing/purging, you need to set it up in the chat configuration settings.

![](https://livehelperchat.com/var/media/images/closing.png)

To execute the closing/purging process, you have two options:

*   **Manual Execution:** Navigate to "System configuration" => "Live help configuration" => "Maintenance" in the back office. From there, you can manually close and delete chats.
*   **Automated Execution via Cronjob:** If you prefer to automate the process, you can set up a [cron job](development/cronjob.md).

**What chats are closed by the "Automatic chats closing" setting (`autoclose_timeout`, 0 - disabled, n > 0 time in minutes before chat is automatically closed)?**

1.  Chats that are active, where the visitor has sent more than one message, and the specified amount of time has passed since their last message.
2.  Chats that are pending or active, where the only message was the visitor's first message.

**What chats are closed by the "Automatically close active chat if from last visitor/operator message passed" setting (`autoclose_activity_timeout`, 0 - disabled, n > 0 time in minutes)?**

1.  Active chats where the most recent message (visitor or operator) is older than the set time.
2.  Active chats where no message has been sent and the chat was started more than the set time ago.

Optionally, a second argument can be passed to close the chat only when the last message was sent by a specific side. In this case the "no message sent" rule above does not apply:

*   `,1` - closes the chat only when the visitor sent the last message and that message is older than the set time.
*   `,2` - closes the chat only when the operator sent the last message and that message is older than the set time.

For example:

*   `4,1` closes the active chat if the visitor sent the last message and 4 minutes have passed since that message.
*   `4,2` closes the active chat if the operator sent the last message and 4 minutes have passed since that message.

**What chats are closed by the "Automatic pending chats closing" setting (`autoclose_timeout_pending`, 0 - disabled, n > 0 time in minutes before chat is automatically closed)?**

1.  Chats that are pending and the specified amount of time has passed since the chat started. This means the chat was not accepted within this period.

**What chats are closed by the "Automatic active chats closing" setting (`autoclose_timeout_active`, 0 - disabled, n > 0 time in minutes before chat is automatically closed)?**

1.  Chats that are active and the specified amount of time has passed since the chat started.

**What chats are closed by the "Automatic bot chats closing" setting (`autoclose_timeout_bot`, 0 - disabled, n > 0 time in minutes before chat is automatically closed)?**

1.  Chats that are bot chats, the specified amount of time has passed since the chat started, and the only message was the user's first message.
2.  Chats that are bot chats and the specified amount of time has passed since the last visitor message.

**What chats are deleted by the "Automatic chats purging" setting (`autopurge_timeout`, 0 - disabled, n > 0 time in minutes before chat is automatically deleted)?**

1.  Chats that are closed and the specified amount of time has passed since the user's last message.

**What chats are closed by the "Automatically close pending chats where visitor has left a chat" setting (`autoclose_abandon_pending`, timeout in minutes, last activity by visitor `desktop timeout`,`mobile timeout`,`status chat`)?**

1.  Chats where the visitor:
    *   Has been redirected to a survey form
    *   Has been redirected to an offline form
    *   Has explicitly closed the chat

**OR**

2.  Visitors were seen online based on defined timeout values:
    *   `desktop timeout` - applies to desktop devices
    *   `mobile timeout` - applies to mobile and tablet devices
    *   `status chat` - determines which chats are included based on visitor status:
        *   0 or absent: include only pending chats
        *   1: include only active chats
        *   2: include pending and active chats
        *   3: include pending and bot chats
        *   4: include only bot chats
        *   5: include pending and active chats and bot chats

*   For example, `1,3` would mean that pending chats where `desktop timeout` is 1 minute and `mobile timeout` is 3 minutes will be closed automatically.
*   For example, `1,3,1` would mean that active chats where `desktop timeout` is 1 minute and `mobile timeout` is 3 minutes will be closed automatically.
*   For example, `1,3,2` would mean that active/pending chats where `desktop timeout` is 1 minute and `mobile timeout` is 3 minutes will be closed automatically.
*   For example, `20,30,3` would mean that pending/bot chats where `desktop timeout` is 20 minutes and `mobile timeout` is 30 minutes will be closed automatically.
