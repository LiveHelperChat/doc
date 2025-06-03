---
id: chat
title: Chat window
sidebar_label: Chat window
---

## Introduction

This is the main chat window. This document explains the function of each item within the window and how it can be used.

​![](/img/chat/chat-window-v2.png)

## Chat Tab

​![](/img/chat/chat-tab.jpg)

The chat tab displays the following information:

*   Whether the last message was seen by the visitor. If the send icon is green ![](/img/chat/send-status-icon.jpg), the visitor has seen the last message.
*   If the operator clicks the `x` button, the chat tab closes, but the chat status remains unchanged.
*   If the visitor icon is red ![](/img/chat/visitor-status-chat-tab.jpg), the visitor is no longer connected.
*   The shortened visitor nickname.

## Message Area

This area displays visitor messages. If there are previous visitor messages, a button to load them will appear.
​![](/img/chat/message-area.jpg)

You can right-click a message to see a context menu with related options.

To allow an operator to see the actual author of a message (instead of an alias), they must have the appropriate permission.

`lhchat,see_operator_name`

### Message Edit Actions

![](/img/chat/chat-message-popover.png)

*   `Quote` - Appends the message area with the quoted message text.
    *   Requires the general `lhchat,use` permission.
    *   The chat must not be closed.
*   `Edit` - Visible if:
    *   The chat is not closed.
    *   The selected message is not the last operator message, and the operator has the `lhchat,editpreviousall` permission.
    *   The selected message is a visitor message, and the operator has the `lhchat,editpreviouvis` permission.
    *   The selected message is the last operator message, and the operator has the `lhchat,editprevious` permission.
    *   Edit history will be saved if the operator does not have the permission `'lhchat','no_edit_history'` or is not editing their own message.
    *   Two events will be dispatched upon successful message edit:
        *   `chat.message_updated` - General message updated event.
        *   `chat.message_updated_admin` - Event indicating that an operator has manually updated a message. This should be listened to if, for example, you want to add a subject to the chat to indicate that it has a message modified by an operator.

```php
// General message updated event
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msg, 'chat' => & $Chat));

// Event indicates that admin has manually updated a message
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated_admin', array('user' => $currentUser->getUserData(true), 'msg' => & $msg, 'chat' => & $Chat));
```

*   `Remove` - Permanently removes messages from the database.
    *   To remove a `Visitor` message, the `lhchat,removemsgvi` permission is required.
    *   To remove an `Operator` or `Bot` message, the `lhchat,removemsgop` permission is required. This allows removing messages regardless of who wrote them.
*   `Ask for help` - Works if:
    *   The chat is not closed.
    *   The operator has the `lhgroupchat,use` permission.
*   `Copy (Ctrl+C)` - Copies the content of a single message.
*   `Copy all` - Copies the entire conversation section.
*   `Translate` - Translates a message if a chat translation service is set up.

### Message delivery status indication

1. ![](/img/chat/scehduled-for-sent.png) - was was scheduled for sent. This status is used if you are using third party integration and message itself is send via webhooks workflow.
2. ![](/img/chat/msg-sent.png) - message was sent. In case it's standard widget chat it means lhc has stored message internally.
3. ![](/img/chat/msg-delivered.png) - message was delivered to client device, but is un-read. This status is used for messagebird or fbmessenger exensions.
4. ![](/img/chat/msg-was-read.png) - this is how default message looks like was it was read, either in the widget or via remote integrations.
5. ![](/img/chat/delivery-failed-msg.png) - message delivery has failed. This icon is used in combination with third party extensions like messagebird or fbmessenger. In case of the widget scenario you will never see this icon.

These status messages are supported also by [NodeJS-Helper](https://github.com/LiveHelperChat/NodeJS-Helper).

Internal messages status for reference

```
const STATUS_PENDING = 0;   
const STATUS_SENT = 1;      
const STATUS_DELIVERED = 2; 
const STATUS_READ = 3;      
const STATUS_REJECTED = 4;
```

### Load previous chat button.

​![](/img/chat/previous-button.jpg)

Operator has to have this permission to view previous visitor chats.

> 'lhchat', 'prev_chats'

### Other operator is chat owner

If you are not chat owner you will see placeholder with a message

​![](/img/chat/not-owner.jpg)

### Writing message area

If an operator has only read-only permission, the area will not be editable by him.

​![](/img/chat/writing-message-area.jpg)

An operator will also see the read-only area if he is not the chat owner and does not have the necessary permission.

> 'lhchat', 'writeremotechat'

If an operator opens another operator's chat and has the permissions `'lhchat', 'impersonate'`, he will be presented with the option to join the chat as either `Chat Owner` or `Me`. Joining as the chat owner will allow him to send messages in the name of the original chat owner.

He can choose again to join as by clicking

​![](/img/chat/impersonate.png)

> 'lhchat', 'impersonate'

To write in whisper mode, an operator must have this permission:

> 'lhchat', 'whispermode'

Support shortcuts for a new editor

 * `Ctrl+i` - make text `italic` or indicate next letters will be `italic`.
 * `Ctrl+b` - make text `bold` or indicate next letters will be `bold`.
 * `Ctrl+u` - make text `underline` or indicate next letters will be `underline`.
 * `Ctrl+Space`- jump cursor to the end of input area and terminate all present styles. Next letter will be without any style. Useful in case you are writing something in style and want nest phrase to start to write without any style.

### Typing indicator

In order for operators to see full text what visitor is typing - not only indicator. They must have this permission

> 'lhchat','see_sensitive_information'

In user account Chat tab there is also option to enable/disable sentences [Auto uppercase sentences](users/account.md#auto-uppercase-sentences)

## Toolbar actions

### Files

Attaching file can be done using this toolbar icon. Required permissions are defined in [files section](chat/files.md).

​![](/img/chat/attatch-file-toolbar.jpg)

### Emoji
To insert emoji or link/img can be done using smiley icon.

​![](/img/chat/smiley-icon.jpg)

### Preview

Before sending message to visitor you can preview how it would look like with preview icon.

​![](/img/chat/preview-icon.jpg)

### Speech

This allows to use speech to text functionality.

​![](/img/chat/speech-to-text.jpg)

Required permission to use speech functionality

> 'lhspeech','use'

### Voice messages

This will activate voice messages and will allow operator to send voice message to visitor. For required permissions refer to voice [voice messages](voice_messages.md) article.

![](/img/chat/voice-messages-icon.jpg)

### Auto translate

This will translate operator message to visitor language directly in message area.

![](/img/chat/auto-translate-icon.jpg)

For more information refer to [Automatic translations article](automatic-translations.md)

### Hold chat

This will change chat status to hold. Also if chat is using auto responder [hold messages](auto-responder.md#on-hold-chat-messaging) will be activated. Hold means that operator is looking for requested information.

​![](/img/chat/hold-chat-icon.jpg)

Required permission

> 'lhchat'','holduse'

### Sending message

Message to vistor can be send either pressing `Enter` or clicking this icon. If in message are you want new line just press `Shift+Enter`

​![](/img/chat/send-message-icon.jpg)

## Canned messages area

For more information how to use canned messages see [canned messages](canned.md) article.

​![](/img/chat/canned-messages-area.jpg)

## Right column

In right column you will see main chat attributes.

​![](/img/chat/right-column-chat.jpg)

### Bot command

Allows executing bot command directly from UI

![](/img/chat/bot-command.png)

Required permissions

> 'lhchatcommand', 'use'

### Phone number

For operator to see full phone number he has to have this permission.

> 'lhchat','use_unhidden_phone'

### E-mail

For operator to see e-mail details he has to have

> 'lhchat','chat_see_email'

For operator to see full e-mail address he has to have

> 'lhchat','chat_see_unhidden_email'

### Edit chat

Editing chat main information be done by clicking this icon. This icon will be visible only if operator has permission to edit current chat.

​![](/img/chat/edit-icon.jpg)

Modal window content.

​![](/img/chat/modify-chat-core.jpg)

Required permission to modify `User attributes`

> 'lhchat','modifychat'

To be able edit `Chat attributes` operator has to have

> 'lhchat','modifychatcore'

### Copy to clipboard

Copying messages to clipboard can be done by clicking this icon

​![](/img/chat/copy-clipboard-messages.jpg)

Modal window content

​![](/img/chat/copy-messages-modal.jpg)

### Bot

If in the chat was involed bot we show bot icon. Tooltip will show bot ID

![](/img/chat/bot.png)

If operator has permission `'lhgenericbot','see_actions'` he can click an icon and if there we any [Log actions](bot/log-action.md) he will see a modal window like this

![](/img/chat/log-action.png)

### Redirect to survey

User can be redirected to survey using this icon. More information about [surveys](chat/survey.md).

​![](/img/chat/redirect-survey-icon.jpg)

Required permission

> 'lhsurvey','redirect_to_survey'

### Close chat

This will change present chat status to closed.

​![](/img/chat/close-chat-icon.jpg)

This icon is presented if visitor is a chat owner or has permission to

> 'lhchat','allowcloseremote'

### Delete chat

This will delete chat permanently. You will have no way to restore it.

​![](/img/chat/delete-chat-permanently.jpg)

For operator to be able delete chat he has either has permission to
>  'lhchat','deleteglobalchat'

OR be chat owner and have permission to
> 'lhchat','deletechat'

### Chat transfer

This will activate chat transfer functionality. Information about [required permission](chat/transfering-chat.md).

​![](/img/chat/chat-transfer-icon.jpg)

### Block user

This will block visitor permanently from starting any other chat. Information about [blocking](blocking.md#block-users-directly-from-chat).

​![](/img/chat/block-user.jpg)

### Redirect to offline/contact form

You can also redirect visitor to contact form. More information about [required permissions](chat/offline.md#redirecting-user-manually-from-chat-to-contact-form).

​![](/img/chat/redirect-contact-form.jpg)

### Print chat

Operator also can print chat content directly from chat by clicking this icon.

​![](/img/chat/print-chat-icon.jpg)

### Attach file

Requires same permissions as toolbar icon. Required permissions are defined in [files section](chat/files.md).

​![](/img/chat/attatch-file-icon-action.jpg)

You can also upload file from tab

​![](/img/chat/files-chat.jpg)

### Redirect to url

You can redirect vistior to custom page while he's having a chat. Usefull if you want to show him some page of your website.

​![](/img/chat/redirect-to-url.jpg)

Required permissions

> 'lhchat','allowredirect'

### Set chat language

If you are using speech to text and google incorrectly detected language you can change it here.

​![](/img/chat/langauge-detect.jpg)

Required permissions

> 'lhspeech','change_chat_recognition'

### Screen share/Co-browsing

Activates co-browsing session. [More information](co-browsing.md)

​![](/img/chat/screen-sharing.jpg)

### Send mail to visitor

Shows mail sending to visitor modal window. ​![](/img/chat/send-mail.png)

​![](/img/chat/send-mail-visitor.png)

This option can be seen if 

 * Operator has permission to `'lhmailconv','use_admin'` and there is a mailbox defined with same mail as in the department.

OR

 * Operator has permission `'lhchat','sendmail'` and `Hide send e-mail button for operators in chat window` is not checked in [department settings](department/department.md#miscellaneous).
   * We will use mail module if that option is activated in `Mail general options` in mail module. 
   * If above that option is not activated, we will use the default send mail a modal window.

### Changing chat status

Chat status is shown in

​![](/img/chat/chat-status.png)

By clicking info icon you can change chat status to different.

​![](/img/chat/chat-status-modal.png)

* If chat status is set to pending we reset assigned operator.
* If chat status is set to active we assign it to operator who did that, but only if chat did not had any assigned operator previously.

Required permissions

> 'chat', 'canchangechatstatus'

## Remarks

You can set chat remarks for future reference.

​![](/img/chat/remarks.jpg)

## Take screenshot

Operator also can see exactly what customer sees by taking screenshot of his screen. It only works for page where widget is embedded.

​![](/img/chat/screenshot-take.jpg)

:::tip
If you are working with sensitive information this permision should **not** be granted to operators.
:::



Required permissions

> 'lhchat','take_screenshot'

## Visitor footprint

Footprint is shown if we can detect user footpring and online tracking is activated. Pending article...

​![](/img/chat/footprint.jpg)

## Visitor location

If system detects visitor location you will see visitor location map here. You also have set correct google maps api key in [geo configuration](chat/geo-configuration.md).

General conditions have to be met for map to be shown

* Visitor location has to be detected
* Google maps api key has to be set.

​![](/img/chat/visitor-location.jpg)

## Online visitor

You will see this tab if visitors tracking is enabled. We also have to have information about online visitor related to this chat.

​![](/img/chat/online-visitor-tab.jpg)

## Previous chats

Also if we detect we can show previous visitor chats.

​![](/img/chat/previous-chats.jpg)

## Permissions influencing chat opening permissions

If you see error like `You do not have permission to access the current or chat was merged/deleted!` it means that one the following conditions were not met.

​![](/img/chat/permission-error.png)

Operator can open a chat or write a message if

* For operator to be able to open **closed chat** he has to have `lhchat`,`allowopenclosedchats` at first place.
* He is assigned to a chat.
* (Chat is pending **AND** (chat is assigned to him **OR** operator has permission `lhchat`,`open_all`)) **AND** operator is a member of chat department.
* (Chat is pending **AND** chat is unassigned, and operator has permission `lhchat`,`open_unassigned_chat`) **AND** operator is a member of chat department.
* Chat is assigned to other operator **AND** operator has permission `lhchat`,`allowopenremotechat` so he can open other's operators chats **AND** operator is a member of chat department.
* Operator can write a message if operator has write permission to department **AND** (he has `'lhchat','writeremotechat'` permission **OR** chat is not assigned yet to anyone **OR** he is a chat owner)

## Permissions

Main chat permission is

> 'lhchat','use'
