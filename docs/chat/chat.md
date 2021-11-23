---
id: chat
title: Chat window
sidebar_label: Chat window
---

## Introduction

This is our main chat window. I'll explain what each of the item does there and how can it be used.

​![](/img/chat/chat-window-v2.png)

## Chat tab

​![](/img/chat/chat-tab.jpg)

Chat tab shows this information

* Was last message seen by vistior. If send icon is green ![](/img/chat/send-status-icon.jpg) he saw last message.
* If operator clicks `x` button he closes chat tab, but chat status is **not** changed in any way.
* If visitor icon is red means visitor is not connected anymore. ![](/img/chat/visitor-status-chat-tab.jpg) 
* And it shows shorten visitor nick.

## Message area

In this area you will see visitor messages. Also if there are previous visitor messages you will see load a previous messages button.
​![](/img/chat/message-area.jpg)

You can also click right mouse button and see context menu related to a message.

### Load previous chat button.

​![](/img/chat/previous-button.jpg)

### Other operator is chat owner

If you are not chat owner you will see placeholder with a message

​![](/img/chat/not-owner.jpg)

### Writing message area

If operator has only read only permission area would not be editable by him.

​![](/img/chat/writing-message-area.jpg)

Operator also would see read only area if he's not a chat owner and he does not have this permission.

> 'lhchat', 'writeremotechat' 

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

Required permissions

> 'lhchat','sendmail'

:::tip
This option can be [disabled by department](department/department.md#miscellaneous).
:::

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

Operator also can see exactly what customer sees by taking screenshot of his screen.

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

* He is assigned to a chat.
* (Chat is pending AND (chat is assigned to him **OR** operator has permission `lhchat`,`open_all`)) **AND** operator is a member of chat department.
* Chat is assigned to other operator **AND** operator has permission `lhchat`,`allowopenremotechat` so he can open other's operators chats **AND** operator is a member of chat department.
* Operator can write a message if operator has write permission to department **AND** (he has `'lhchat','writeremotechat'` permission **OR** chat is not assigned yet to anyone **OR** he is a chat owner)

## Permissions

Main chat permission is 

> 'lhchat','use'