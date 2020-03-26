---
id: voice_messages
title: Voice Messages
---

In order to enable voice messages to visitors you have to do the following things.

*   Make sure you are running 3.29v
*   Make sure you are using new widget embed code.
*   Your [nginx](nginx-configuration-tips.md) or [apache](https://blog.addpipe.com/recording-mp3-audio-in-html5-using-vmsg-a-webassembly-library-based-on-lame/) allows to access wasm file types and sends proper headers.
*   In file configuration section [https://demo.livehelperchat.com/site_admin/file/configuration](https://demo.livehelperchat.com/site_admin/file/configuration) you set
    *   "Allowed files types for operators" contains "mp3" as supported extension
    *   "Allowed files types for users" contains "mp3" as supported extension
    *   In "Voice messages" messages section you have enabled it for operators or visitors also set max voice message length. Length applies only to visitor messages.
*   If your operator does not see voice messages button ![](https://livehelperchat.com/var/media/files/voice.jpg) make sure they have "lhchat", "voicemessages" (Chat, Allow operator to send voice messages) permission.

[![Youtube Tutorial](https://img.youtube.com/vi/yTGwGdkBCyk/0.jpg)](https://youtu.be/yTGwGdkBCyk?t=92)

## Permissions

Required permissions

> 'lhchat','voicemessages'

Operator also have to have permission to [upload files](chat/files.md#permissions).