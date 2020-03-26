---
id: co-browsing
title: Co-browsing
---

This feature is available since 2.16v

Features

*   See live what your user sees
*   See user mouse cursor
*   Co-Browsing window has same resolution as user does
*   Works on shared hosting, no need special software to have it in your Live Helper Chat intance. Just modern web browser is required. On shared version only one operator can Co-Browser with users. With NodeJS multiple operators can see what user is doing on site. I will tell later how to enable NodeJS support.
*   Operator mouse cursor on user screen
*   Option to highligh elements in user screen by operator
*   Option to click element in user screen including links
*   Option to fill plain text/select/checkbox/radio buttons fields on user screen
*   Operator will see live what fields user are filling on site
*   Optional javascript support on operator side. For operator will work all javascript which does not require AJAX calls. Ajax calls most likely won't work. Personally I suggest to keep it off all the time. Because two windows are in sync and then Co-Browsing window starts adding it's own div, bad things can happen. So it's disable by default. If you have simple site you may want to try to keep it on.
*   Precise highligh using jQuery selector if it's included in remote site. If not fallback to standard mouse coordinates based elements detection.
*   User scrollbar position tracking. There is option in top menu of operator co-browsing window
*   Chatting and co-browsing at the same window
*   Full IE11, Chrome, Firefox support. Partial IE10 (Mutation summary not supported, WebSockets supported). Partial IE9 support (WebSockets and Mutation summary not supported), fallback to AJAX.

### How to activate?

In chat window click eye icon

![](https://livehelperchat.com/var/media/images/actions.png)

### How to navigate in Co-Browsing window?

As soon you click this icon you will see window similar to this one. If you have not enabled automatic screen sharing acceptance from user you have to click blue eye first.

Red eye - if you move your mouse over it will tell at what status screen sharing window is. If you do not see message click to share a screen, that means we are pending actions from user. As soon you click blue eye user will be promted to grant permission to see his screen.

Mouse checkbox - if you check this options. Your mouse position will be shared with user mouse position

Window checkbox - if you check this as soon you highligh some element by clicking on element on page user screen will be scorel to that element

Network icon - if you click this icon you can navigate user precisely to any page you want

![](https://livehelperchat.com/var/media/images/co-browsing-window-2.png)

As soon user agrees to do that you will see user screen. Then user terminates Co-Browsing your Co-Browsing window content will be cleared.

### How to disable permision asking for Co-Browsing?

This can be done at

![](https://livehelperchat.com/var/media/images/co-browsing-options.png)

You have to check "Do not ask permission for users to see their screen" so as soon you open Co-Browsing window and click blue eye user screen will be shared without his permission. In any case user will be able to terminate this by clicking blue box at the top right of the screen.

### I clicked link holding CTRL but I still see the same window?

There is around 5-7 seconds delay untill roundtrip. So just have to be patient

*   On click Screen sharing window detects link and sends command for user browser to navigate to specific window
*   Window reloads at user computer
*   LHC loads and connects to NodeJS or Standard AJAX and sends post to LHC to store new initial browsing state
*   Operator window loads new initial state and renders content
*   If for some reason it does not change a location try click on network and enter URL manually

If you are using NodeJs roundtrip should take about 3-5 seconds. Just play around yourself so you will see how fast it navigates in your site.

### What form elements are supported from operator side?

Supported

*   text input
*   textarea
*   checkbox
*   radio
*   button
*   select

### Will i see what fields user are filling in form and what combobox/radio/checkbox values he chooses?

Yes since 2.18v. Operator Co-Browsing window will represent live form values changes. So basically

*   User will see live what form fields are are choosing for him
*   Operator will see live what forms fields user are filling

### Why mouse over actions are not synced to user window?

Then you move mouse over menu in operator window, these actions are not synced to user computer. Dropped menu will allow you easily navigate user to desirable window.

### Do you support iframes on shared screen?

No. It's browse security stuff and only main window is synced, it's just technically not possible. Prove me wrong! :)

### I moved mouse over menu, but showed menu are not shown in operator/visitor window?

[Mutation summary](https://dom.spec.whatwg.org/#mutation-observers) does not track these kinda data. Only DOM changes are synced. Forms changes tracking was done by me. Mutation summary also did not had sutch capability.

### How do you deal with http/http s data?

There is the only one tricky part. Browser forbids downloading insecure content if site is in http mode and lhc itself in https. We deal with this limitation by proxying CSS request through LHC itself. That way we support all possible cobinations http -> https, https -> https, http -> http. In any case i recommend to use same protocol for site and lhc itself.

### How to enable NodeJs support?

The biggest advantage for using NodeJs for Co-Browsing mode is the updates speed. In ajax mode there is some delay before user screen changes is transmited to operator window. With NodeJs these changes are transmitted instantly. You will be able to see almoust live user mouse movements.

NodeJs server is located at doc/node_servers/cobrowsing

Just read readme.txt file content from there also do not forget to enable it in livehelper chat in chat configuration section.

### Used libraries

*   [https://code.google.com/p/mutation-summary/](https://code.google.com/p/mutation-summary/) (Core library)
*   [https://github.com/abbakym/mutationsummary-cobrowsing-experiment](https://github.com/abbakym/mutationsummary-cobrowsing-experiment) (Just for some ideas)
*   [http://teft.deviantart.com/art/Obsidian-Cursor-set-78972293](http://teft.deviantart.com/art/Obsidian-Cursor-set-78972293) (Co-Browsing mouse cursor icon)
*   NodeJs server for [Co-Browsing](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/doc/node_servers/cobrowsing) was written by me from zero.

### Video tutorial

<div class="flex-video"><iframe allowfullscreen="" frameborder="0" height="315" src="//www.youtube.com/embed/d0mXQp5NzPw" width="560"></iframe></div>

### Screenshot. You can see user mouse cursor on colors box. Click for large picture

[![](https://livehelperchat.com/var/media/images/screen.png)](https://livehelperchat.com/var/media/images/screen.png)

## Permissions

Required permission to use Co-Browsing

> 'lhcobrowse', 'browse'