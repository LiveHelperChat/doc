---
id: voice_messages
title: Voice Messages
---

To enable voice messages for visitors, ensure the following:

*   You are running version 3.29 or higher.
*   You are using the new widget embed code.
*   Your [nginx](nginx-configuration-tips.md) or [apache](https://blog.addpipe.com/recording-mp3-audio-in-html5-using-vmsg-a-webassembly-library-based-on-lame/) configuration allows access to WASM file types and sends the correct headers.
*   In the file configuration section at [https://demo.livehelperchat.com/site_admin/file/configuration](https://demo.livehelperchat.com/site_admin/file/configuration), verify that:
    *   "Allowed files types for operators" includes "mp3" as a supported extension.
    *   "Allowed files types for users" includes "mp3" as a supported extension.
    *   In the "Voice messages" section, voice messages are enabled for operators or visitors, and the maximum voice message length is set. The length setting applies only to visitor messages.
*   If an operator does not see the voice messages button ![](https://livehelperchat.com/var/media/files/voice.jpg), ensure they have the "lhchat" and "voicemessages" permissions ("Chat, Allow operator to send voice messages").
*   Your site and Live Helper Chat are running on **HTTPS**.

[![Youtube Tutorial](https://img.youtube.com/vi/yTGwGdkBCyk/0.jpg)](https://youtu.be/yTGwGdkBCyk?t=92)

## Apache .htaccess Example

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|map|ogg|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

## Permissions

Required permissions:

> 'lhchat', 'voicemessages'

Operators also need permission to [upload files](chat/files.md#permissions).
