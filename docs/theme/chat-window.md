---
id: chat-window
title: Chat window
---

This document describes where you can change main UI elements of the widget.

![](/img/theme/chat-window.png)

* Most of the widget translations can be translated directly in the [widget theme](theme/theme.md). You can also set there custom content.
* [Translations, multilanguage setup](chat/multiple-languages.md)
* If you want to prefill nick read about [prefilling custom variables](custom-fields-and-prefill.md)
* [Read how to override default translations](language.md#how-to-override-default-translations)

## Header

You can change header icons location by creating a new widget theme and setting a [custom header icons](theme/theme.md)

![](/img/theme/chat-window-header.png)

## Chat window toolbar

Toolbar with enabled all options looks like

![](/img/theme/chat-window-toolbar.png)

### Sound icon

By default, sound are enabled for the visitor you can tur it off by default in

> System configuration -> Synchronisation and sound settings -> Play a sound on a new message for a front end user

Sound icon itself can't be hidden for the visitor

![](/img/theme/chat-window-sound-icon.png)

### Print icon

Print option for the visitor can be enabled in the [chat settings](chat/configuration.md#disable-chat-print)

![](/img/theme/chat-window-print.png)

### File icon

Files upload option can be enabled/disable in [file settings](chat/files.md) 

![](/img/theme/chat-window-file.png)

### Face icon

* If you are not using widget theme Face button can be disabled in [chat configuration](chat/configuration.md#show-bb-code-button)
* If you are using widget theme Face button should be disabled directly in widget theme [Hide BB Code button](theme/theme.md#hide-bb-code-button) 

![](/img/theme/chat-window-bbcode.png)

### Mail icon

Mail button can be disabled in [chat settings](chat/configuration.md#disable-chat-transcript-send)

![](/img/theme/chat-window-mail.png)

### Close icon

Close icon in dropdown also can be hidden in [chat settings](chat/configuration.md#hide-close-button-in-dropdown)

![](/img/theme/chat-window-close.png)

### Font size icon

Font size change icon can be enabled in [widget themes](theme/theme.md#allow-visitor-to-change-font-size)

![](/img/theme/font-size-icon.png)

### Voice call

Voice call icon is visible only if operator accepts a chat. [More about voice calls](voice-video-screenshare.md)

![](/img/theme/voice-call.png)

### Voice message

Read more about [voice messages](voice_messages.md)

![](/img/theme/chat-window-voice-message.png)

### Change language

Icon for the visitor to change widget language.

![](/img/bot/language.png)

Read more about this option [chat settings](chat/configuration.md#show-users-option-to-switch-language-at-widget)

### Download as txt

Download option can be disabled at global level using chat configuration  [chat settings](chat/configuration.md#disable-chat-download) 

![](/img/theme/download-as-txt-v2.png)

## I don't like one of the text and it's not changeable in widget theme?

Use simple [extension](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridetranslation/translations) to translate english text directly there

Read more [about languages](language.md#how-to-override-default-translations)