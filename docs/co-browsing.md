---
id: co-browsing
title: Co-browsing
---

This feature is available since version 2.16.

**Features:**

*   See what your user sees in real-time.
*   View the user's mouse cursor.
*   The Co-Browsing window has the same resolution as the user's screen.
*   It works on shared hosting; no special software is needed in your Live Helper Chat instance. A modern web browser is all that's required. In the shared version, only one operator can co-browse with users. With NodeJS, multiple operators can see what the user is doing on the site. Instructions on how to enable NodeJS support will be provided later.
*   The operator's mouse cursor is visible on the user's screen.
*   Operators can highlight elements on the user's screen.
*   Operators can click elements on the user's screen, including links.
*   Operators can fill in plain text, select options, and check/uncheck radio buttons and checkboxes on the user's screen.
*   Operators can see the values users are entering in forms in real-time.
*   Optional JavaScript support is available on the operator's side. It will only work for JavaScript that does not require AJAX calls. AJAX calls will most likely not work. It's generally recommended to keep it disabled because, since the two windows are in sync, the Co-Browsing window might start adding its own `div` elements, which can cause issues. Therefore, it's disabled by default. If you have a simple site, you may want to try enabling it.
*   Precise highlighting is possible using a jQuery selector if it's included on the remote site. If not, it falls back to standard mouse coordinates-based element detection.
*   User scrollbar position tracking is available. You can find this option in the top menu of the operator's co-browsing window.
*   Chatting and co-browsing can occur in the same window.
*   Full support for IE11, Chrome, and Firefox. Partial support for IE10 (Mutation summary not supported, WebSockets supported). Partial support for IE9 (WebSockets and Mutation summary not supported), with fallback to AJAX.

### How to activate Co-browsing?

In the chat window, click the eye icon:

![](https://livehelperchat.com/var/media/images/actions.png)

### How to navigate the Co-Browsing window?

As soon as you click this icon, you will see a window similar to the one shown below. If you have not enabled automatic screen sharing acceptance from the user, you have to click the blue eye icon first.

**Red eye:** If you move your mouse over it, it will tell you the current status of the screen sharing window. If you see the message "click to share a screen," that means the system is waiting for action from the user. As soon as you click the blue eye icon, the user will be prompted to grant permission to share their screen.

**Mouse checkbox:** If you check this option, your mouse position will be shared with the user's mouse position.

**Window checkbox:** If you check this, as soon as you highlight an element by clicking on it on your page, the user's screen will scroll to that element.

**Network icon:** If you click this icon, you can navigate the user precisely to any page you want.

![](https://livehelperchat.com/var/media/images/co-browsing-window-2.png)

As soon as the user agrees, you will see their screen. When the user terminates Co-Browsing, your Co-Browsing window content will be cleared.

### How to disable permission requests for Co-Browsing?

This can be done here:

![](https://livehelperchat.com/var/media/images/co-browsing-options.png)

You have to check "Do not ask permission for users to see their screen" so that as soon as you open the Co-Browsing window and click the blue eye icon, the user's screen will be shared without their explicit permission. The user can always terminate this by clicking the blue box at the top right of their screen.

### I clicked a link while holding CTRL, but I still see the same window. Why?

There is approximately a 5-7 second delay for the round trip. Please be patient.

*   On click, the Screen sharing window detects the link and sends a command for the user's browser to navigate to the specific window.
*   The window reloads on the user's computer.
*   LHC loads and connects to NodeJS or Standard AJAX and sends a post to LHC to store the new initial browsing state.
*   The operator window loads the new initial state and renders the content.
*   If, for some reason, the location does not change, try clicking on the network icon and entering the URL manually.

If you are using NodeJs, the round trip should take about 3-5 seconds. Experiment to see how quickly it navigates on your site.

### What form elements are supported from the operator's side?

The following elements are supported:

*   text input
*   textarea
*   checkbox
*   radio
*   button
*   select

### Will I see what fields the user is filling in the form and what combobox/radio/checkbox values they choose?

Yes, since version 2.18. The operator's Co-Browsing window will represent live form value changes. So, basically:

*   The user will see in real-time what form fields are being chosen for them.
*   The operator will see in real-time what form fields the user is filling.

### Why are mouse-over actions not synced to the user's window?

When you move the mouse over a menu in the operator window, these actions are not synced to the user's computer. The dropped menu will allow you to easily navigate the user to the desired window.

### Does it support iframes on the shared screen?

No. It's a browser security feature, and only the main window is synced. It's technically not possible to sync iframes.

### I moved the mouse over a menu, but the displayed menu is not shown in the operator/visitor window. Why?

[Mutation summary](https://dom.spec.whatwg.org/#mutation-observers) does not track this kind of data. Only DOM changes are synced. Form changes tracking was implemented separately. Mutation summary did not have such capability.

### How does it deal with http/https data?

There is only one tricky part. Browsers forbid downloading insecure content if the site is in HTTP mode and LHC itself is in HTTPS. We deal with this limitation by proxying CSS requests through LHC itself. That way, we support all possible combinations: http -> https, https -> https, http -> http. In any case, it is recommended to use the same protocol for the site and LHC itself.

### How to enable NodeJS support?

The biggest advantage of using NodeJS for Co-Browsing mode is the update speed. In AJAX mode, there is some delay before user screen changes are transmitted to the operator window. With NodeJS, these changes are transmitted instantly. You will be able to see almost live user mouse movements.

The NodeJS server is located at `doc/node_servers/cobrowsing`.

Just read the `readme.txt` file content from there. Also, do not forget to enable it in Live Helper Chat in the chat configuration section.

### Used libraries

*   [https://code.google.com/p/mutation-summary/](https://code.google.com/p/mutation-summary/) (Core library)
*   [https://github.com/abbakym/mutationsummary-cobrowsing-experiment](https://github.com/abbakym/mutationsummary-cobrowsing-experiment) (Just for some ideas)
*   [http://teft.deviantart.com/art/Obsidian-Cursor-set-78972293](http://teft.deviantart.com/art/Obsidian-Cursor-set-78972293) (Co-Browsing mouse cursor icon)
*   The NodeJS server for [Co-Browsing](https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/doc/node_servers/cobrowsing) was written from scratch.

### Video tutorial

<div class="flex-video"><iframe allowfullscreen="" frameborder="0" height="315" src="//www.youtube.com/embed/d0mXQp5NzPw" width="560"></iframe></div>

### Screenshot. You can see the user's mouse cursor on the colors box. Click for a larger picture.

[![](https://livehelperchat.com/var/media/images/screen.png)](https://livehelperchat.com/var/media/images/screen.png)

## Permissions

Required permissions to use Co-Browsing:

> 'lhcobrowse', 'browse'
