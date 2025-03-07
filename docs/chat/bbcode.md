---
id: bbcode
title: Text formatting syntax in Live Helper Chat - BBCode tags
sidebar_label: BBCode
---

These are the possible BBCode combinations you can use in Live Helper Chat. You can use these tags anywhere a message is sent to a visitor.

**Bold Text**

> `[b]Bold[/b]`

OR

> `**Bold**`

**Italic and Bold Text**

> `___bold and italic___`

**Headers**

> `##` through `######`

**Italic Text**

> `[i]Italic[/i]`

**Underline**

> `[u]Italic[/u]`

**Quote**

> `[quote]Quote[/quote]`

**Code**

> `[quote]code your here[/quote]` or ``` or `for inline code`

**Strikethrough**

> `[s]Strike-through[/s]`

**HTML Code**

This tag is supported only by operators!

> `[html]your custom HTML goes here[/html]`

By default, clicks on elements are ignored for the visitor. To enable click processing, add the class `process-click` to an element.

Operators require the `lhchat` and `htmlbbcodeenabled` permissions to use this BBCode.

This tag also supports plain JavaScript code, which can lead to security concerns, as operators can execute JS directly on the visitor's side. That's why it requires special permission to use.

**Change Font Size**

Font size can be any value.

> `[fs12]Font size 12[/fs]`

**Mark Text**

> `[mark]mark text syntax[/mark]` => `<mark>mark text syntax</mark>`

**PayPal Donate Button**

> `[paypal]remdex@gmail.com[/paypal]`

**Change Color**

> `[color=FF0000]Custom color text[/color]`

**Location (Google Maps)**

> `[loc]55.9314582,23.2975904[/loc]`

**File or Image**

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4]`

**Link to File with Custom Title**

> `[url=[baseurl]file/downloadfile/639/f2f84b4d09a2e5bb492efa189b8ebad4[/baseurl]] Click to download an invoice [/url]`

**Image with Link**

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4_img link=http://google.com]`

**Embedded Image with Link to Image**

This is a quick way to allow a visitor to download an image.

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4_img link]`

**External Image**

> `[img]https://livehelperchat.com/design/frontendnew/images/lhc.png[/img]`

**Link**

> `[url=http://google.com]Live Helper Chat[/url]`

**Markdown Link**

> `[example](https://example.com)`

**YouTube Video**

> `[youtube]https://www.youtube.com/watch?v=TFJAW5bepLM&feature=youtu.be[/youtube]`

**Upload File Link**

File uploads must be enabled. This code is useful with the `!files` command.

> `[fupload]Upload a file[/fupload]`

**Base URL**

This renders the URL as an internal URL.

> `[baseurl]user/login[/baseurl]`

**Survey Results Link**

Renders a link for the admin to view survey results.

> `[survey="?(.*?)"?\]`

**Button Action**

Renders a button. The chat should have an assigned bot.

> `[button_action="?(.*?)"?\](.*?)\[/button_action]`

**Plain Text**

This prevents the content from being parsed for BBCode tags.

> `[plain]info@exmaple.com[/plain]` prevents the text from being rendered as a link.

**Date Format**

> `[dateformat=Y.m.d H:i:s]{args.chat.time}[/dateformat]` Prints the chat creation date in your preferred format.
> `[dateformat=m/d/Y]{lhc.var.remind_dob}[/dateformat]` Prints the chat variable in date format, assuming a Unix timestamp is stored.
> `[dateformat=Y/m/d, H:i:s]{current_time_ts}[/dateformat]` If the `{current_time_ts}` variable is not printed, it means it's not supported in that context.

**Ordered List**

```
[list]
[*] First
[*] Second
[/list]
```

**Numbered List**

The number indicates the starting point.

```
[list=1]
[*] First
[*] Second
[/list]
```

**Text with CSS Class**

> `[level=bg-warning]css class[/level]`

**Generate Button Clicks**

```
To return to the main menu, click [link_trigger=1355]here[/link_trigger]
```

You can read how to hide the BBCode button in the visitor widget [here](theme/chat-window.md#face-icon).

You can also control which BBCode tags are supported at `System configuration -> Live help configuration -> BBCode configuration`.
