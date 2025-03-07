---
id: chat-window
title: Chat window
---

This document describes how to customize the main UI elements of the chat widget.

![](/img/theme/chat-window.png)

*   Most of the widget's text can be translated directly within the [widget theme](theme/theme.md). You can also set custom content there.
*   [Translations and multilanguage setup](chat/multiple-languages.md)
*   To prefill the visitor's nickname, read about [prefilling custom variables](custom-fields-and-prefill.md).
*   [Read how to override default translations](language.md#how-to-override-default-translations)

## Header

You can change the location of the header icons by creating a new widget theme and setting [custom header icons](theme/theme.md).

![](/img/theme/chat-window-header.png)

## Operator profile

Different operator profiles can be displayed depending on the chat's status.

### Start chat operator profile

The start chat operator profile can be enabled in the following location:

> System configuration -> Live help configuration -> Start chat form settings -> Default settings -> Additional form settings -> Show operator profile above input fields

*   To customize the appearance of the profile, use a widget theme.
*   `Widget theme -> Custom content -> Use bot profile in the widget instead of default.`

### Ongoing chat operator profile

The ongoing chat operator profile can display either a bot profile or an operator profile, depending on the chat's status.

![](/img/theme/operator-profile.png)

## Chat window toolbar

The toolbar with all options enabled looks like this:

![](/img/theme/chat-window-toolbar.png)

### Sound icon

By default, sounds are enabled for the visitor. You can disable them by default in:

> System configuration -> Synchronization and sound settings -> Play a sound on a new message for a front-end user

The sound icon itself cannot be hidden from the visitor.

![](/img/theme/chat-window-sound-icon.png)

### Print icon

The print option for the visitor can be enabled in the [chat settings](chat/configuration.md#disable-chat-print).

![](/img/theme/chat-window-print.png)

### File icon

The file upload option can be enabled or disabled in the [file settings](chat/files.md).

![](/img/theme/chat-window-file.png)

### Face icon

*   If you are not using a widget theme, the Face button can be disabled in the [chat configuration](chat/configuration.md#show-bb-code-button).
*   If you are using a widget theme, the Face button should be disabled directly in the widget theme under [Hide BB Code button](theme/theme.md#hide-bb-code-button).

![](/img/theme/chat-window-bbcode.png)

### Mail icon

The mail button can be disabled in the [chat settings](chat/configuration.md#disable-chat-transcript-send).

![](/img/theme/chat-window-mail.png)

### Close icon

The close icon in the dropdown can also be hidden in the [chat settings](chat/configuration.md#hide-close-button-in-dropdown).

![](/img/theme/chat-window-close.png)

### Font size icon

The font size change icon can be enabled in [widget themes](theme/theme.md#allow-visitor-to-change-font-size).

![](/img/theme/font-size-icon.png)

### Voice call

The voice call icon is visible only if an operator accepts the chat. [More about voice calls](voice-video-screenshare.md)

![](/img/theme/voice-call.png)

### Voice message

Read more about [voice messages](voice_messages.md).

![](/img/theme/chat-window-voice-message.png)

### Change language

This icon allows the visitor to change the widget's language.

![](/img/bot/language.png)

Read more about this option in the [chat settings](chat/configuration.md#show-users-option-to-switch-language-at-widget).

### Download as txt

The download option can be disabled globally using the chat configuration [chat settings](chat/configuration.md#disable-chat-download).

![](/img/theme/download-as-txt-v2.png)

## I don't like some of the text, and it's not changeable in the widget theme?

Use a simple [extension](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridetranslation/translations) to translate the English text directly there.

Read more [about languages](language.md#how-to-override-default-translations).
