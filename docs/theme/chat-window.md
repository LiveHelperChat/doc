---
id: chat-window
title: Chat window
---

This document explains how to customize the main UI elements of the chat widget.

![](/img/theme/chat-window.png)

**Quick Reference:**
*   Customize widget text in [widget themes](theme/theme.md)
*   Set up [translations and multiple languages](chat/multiple-languages.md)
*   [Prefill visitor information](custom-fields-and-prefill.md)
*   [Override default translations](language.md#how-to-override-default-translations)

## Header

Customize header icon placement by creating a new widget theme with [custom header icons](theme/theme.md).

![](/img/theme/chat-window-header.png)

## Operator Profile

Display different operator profiles based on chat status.

### Start Chat Profile

Enable the start chat operator profile:

**Path:** System configuration → Live help configuration → Start chat form settings → Default settings → Additional form settings → Show operator profile above input fields

**Customization:** Widget theme → Custom content → Use bot profile in the widget instead of default

### Ongoing Chat Profile

Shows either bot or operator profile depending on chat status.

![](/img/theme/operator-profile.png)

## Chat Window Toolbar

Complete toolbar with all options enabled:

![](/img/theme/chat-window-toolbar.png)

### Sound Icon

**Default:** Sounds are enabled for visitors
**Disable:** System configuration → Synchronization and sound settings → Play a sound on a new message for a front-end user
**Note:** The sound icon cannot be hidden from visitors

![](/img/theme/chat-window-sound-icon.png)

### Print Icon

**Enable:** Configure in [chat settings](chat/configuration.md#disable-chat-print)

![](/img/theme/chat-window-print.png)

### File Icon

**Configure:** Enable/disable in [file settings](chat/files.md)

![](/img/theme/chat-window-file.png)

### Face Icon (BB Code)

**Without widget theme:** Disable in [chat configuration](chat/configuration.md#show-bb-code-button)
**With widget theme:** Disable in [widget theme settings](theme/theme.md#hide-bb-code-button)

![](/img/theme/chat-window-bbcode.png)

### Mail Icon

**Disable:** Configure in [chat settings](chat/configuration.md#disable-chat-transcript-send)

![](/img/theme/chat-window-mail.png)

### Close Icon

**Hide:** Configure in [chat settings](chat/configuration.md#hide-close-button-in-dropdown)

![](/img/theme/chat-window-close.png)

### Font Size Icon

**Enable:** Configure in [widget themes](theme/theme.md#allow-visitor-to-change-font-size)

![](/img/theme/font-size-icon.png)

### Voice Call

**Availability:** Only visible when operator accepts chat
**Learn more:** [Voice calls documentation](voice-video-screenshare.md)

![](/img/theme/voice-call.png)

### Voice Message

**Learn more:** [Voice messages documentation](voice_messages.md)

![](/img/theme/chat-window-voice-message.png)

### Change Language

Allows visitors to switch widget language.

![](/img/bot/language.png)

**Configure:** [Chat settings](chat/configuration.md#show-users-option-to-switch-language-at-widget)

### Download as TXT

**Disable:** Configure in [chat settings](chat/configuration.md#disable-chat-download)

![](/img/theme/download-as-txt-v2.png)

## Customizing Non-Theme Text

For text that cannot be changed in widget themes, use the [translation extension](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridetranslation/translations).

**Learn more:** [Language override documentation](language.md#how-to-override-default-translations)

## Troubleshooting: Chat Start Errors

If visitors see this error message:

> Your request was not processed as expected - but don't worry it was not your fault. Please re-submit your request. If you experience the same issue you will need to contact us via other means.

By default, captcha is valid for 30 minutes. After that period on submit it's refreshed.

**Check these solutions:**

1. **Proxy setup:** Ensure Live Helper Chat [detects IP correctly](blocking.md#ip-detection-issues)
2. **Session captcha:** Uncheck "Use session captcha" in Chat configuration (required for same domain/subdomain)
3. **Debug captcha flow:**
    - Look for `/captcha/captchastring/fake/1753085773` requests (timestamp varies)
    - Verify response: `{"result":"d560e431361af7765bc44871a4e55799e683ec17"}`
    - Check `widgetrestapi/submitonline` request includes captcha data E.g `"captcha_d560e431361af7765bc44871a4e55799e683ec17":1753085773,"tscaptcha":1753085773`
4. **Still not working:** Environment-specific debugging required
