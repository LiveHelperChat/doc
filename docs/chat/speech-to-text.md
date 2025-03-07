---
id: speech-to-text
title: Speech-to-Text Tutorial
sidebar_label: Speech to text
---

### Requirements

*   Google Chrome browser
*   Microphone
*   Internet connection
*   Live Helper Chat version 2.20 or later

### How to Use It

By default, the application listens for the English language. You can change the default language in **Configuration** -> **Speech** -> **Speech language**.

Operators can also change their default listening language in their profile. To allow this, the role assigned to the operator must have the **Speech module** -> **Allow user to change his personal speech recognition language** permission. This will allow operators to see an option in their profile to change the default recognition language.

It is also possible to change the recognition language at the chat level. To do this, click the microphone and settings button. For operators to be able to do this, their role must have the **Speech module** -> **Allow operator to change chat recognition language** permission.

![](https://livehelperchat.com/var/media/images/mic-settings.png)

When you click the microphone button, Chrome will ask for permission to access your microphone. For operators to use this feature, their role must have the **Speech module** -> **Allow operator to use speech recognition module** permission.

While speaking, the chat window will look like this:

![](https://livehelperchat.com/var/media/images/speak.png)

### FAQ

#### Why does Chrome ask for permission to access my microphone each time?

This is a Chrome security policy. To avoid continuous translation of the same message, the application stops listening after a message is sent and restarts listening again. This behavior can be avoided if the chat is using HTTPS, as our demo site does.

#### What languages are recognized?

Bahasa Indonesia, Bahasa Melayu, Català, Čeština, Deutsch, English, Español, Euskara, Français, Galego, Hrvatski, IsiZulu, Íslenska, Italiano, Magyar, Nederlands, Norsk bokmål, Polski, Português, Română, Slovenčina, Suomi, Svenska, Türkçe, български, Pусский, Српски, 한국어, 中文, 日本語, Lingua latīna

### Technical Reference

*   [https://www.google.com/intl/en/chrome/demos/speech.html](https://www.google.com/intl/en/chrome/demos/speech.html)
*   [http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API](http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)
*   [https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-abort](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-abort)
