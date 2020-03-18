---
id: speech-to-text
title: Speech to text tutorial
sidebar_label: Speech to text
---

### Requirements

*   Google chrome browser.
*   Microphone
*   Internet connection
*   Live helper chat since 2.20 version

### How to use it

By default application listens for english language. You can change default language in "Configuration" -> "Speech" -> "Speech language"

Also operators can change their default listening language in their profile. To them has to be assigned "Speech module" -> "Allow user to change his personal speech recognition language" so operators in their profile will see an option to change default recognition language.

Also it's possible to change Recognition language ant chat level. Just click microphone and settings button. To be able operators to do this to operators role has to be assigned "Speech module" -> "Allow operator to change chat recognition language"

![](https://livehelperchat.com/var/media/images/mic-settings.png)

Also then you click plain microphone button Chrome will ask you permission to access your microphone. For operators be able to use this feature in general to them has to be assigned "Speech module" -> "Allow operator to use speech recognition module"

While speaking chat window will look like

![](https://livehelperchat.com/var/media/images/speak.png)

### FAQ

### Why does chrome each time asks for permission to access my microphone?

This is chrome policy once message is send I stop listening and start listening again to avoid same message continous translation. This can be avoided if chat is using HTTPS just like our demo site.

### What languages are recognized?

Bahasa Indonesia, Bahasa Melayu, Català, Čeština, Deutsch, English, Español, Euskara, Français, Galego, Hrvatski, IsiZulu, Íslenska, Italiano, Magyar, Nederlands, Norsk bokmål, Polski , Português, Română, Slovenčina, Suomi, Svenska, Türkçe, български, Pусский, Српски, 한국어, 中文, 日本語, Lingua latīna

### Technical reference

*   [https://www.google.com/intl/en/chrome/demos/speech.html](https://www.google.com/intl/en/chrome/demos/speech.html)
*   [http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API](http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)
*   [https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-abort](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-abort)