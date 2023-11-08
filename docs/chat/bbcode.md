---
id: bbcode
title: Text formatting syntax in Live Helper Chat - BBCode tags
sidebar_label: BBCode
---

These are all possible combinations you can use in Live Helper Chat BBCode. You can these tags everywhere where message is send to a visitor.

Bold the text

> `[b]Bold[/b]`

Italic text

> `[i]Italic[/i]`

Underline

> `[u]Italic[/u]`

Quote

> `[quote]Quote[/quote]`

HTML Code. This tag is supported only by operators!

> `[html]your custom html goes here[/html]`

Operators require this permission to use this bbcode

`lhchat`,`htmlbbcodeenabled`

This tag also supports plain *JS* code. This can lead so some security concerns. As operator can execute JS directly on visitor side. That's why it requires special permission to use.

Change font size. Font size can be to whatever value you want, actually.

> `[fs12]Font size 12[/fs]`

Change color

> `[color=FF0000]Custom color text[/color]`

File or Image

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4]`

Link to file with your own link title

> `[url=[baseurl]file/downloadfile/639/f2f84b4d09a2e5bb492efa189b8ebad4[/baseurl]] Click to download an invoice [/url]`

Image with a link to some URL

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4_img link=http://google.com]`

Embedded image with a link to an image. Quick way to download image for a visitor.

> `[file=639_f2f84b4d09a2e5bb492efa189b8ebad4_img link]`

External image

> `[img]https://livehelperchat.com/design/frontendnew/images/lhc.png[/img]`

Link

> `[url=http://google.com]Live Helper Chat[/url]`

Youtube video

> `[youtube]https://www.youtube.com/watch?v=TFJAW5bepLM&feature=youtu.be[/youtube]`

Upload a file link. Files upload has to be enabled. This code is usefull with !files command.

> `[fupload]Upload a file[/fupload]`
 
Base URL. This will render URL as internal URL.

> `[baseurl]user/login[/baseurl]`

Renders link to view survey results for the admin

> `[survey="?(.*?)"?\]`

Renders button. Chat should have assigned bot

> `[button_action="?(.*?)"?\](.*?)\[/button_action\]`
 
Ordered list

```
[list]
[*] First
[*] Second
[/list]
```

Numbered list. Number indicates starting point.

```
[list=1]
[*] First
[*] Second
[/list]
```

Generate button clicks

```
To return to main menu click [link_trigger=1355]here[/link_trigger]
```

How you hide BB Code button in the visitor widget you can read [here](theme/chat-window.md#face-icon)