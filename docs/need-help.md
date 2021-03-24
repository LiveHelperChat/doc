---
id: need-help
title: Need help tool-tip configuration
sidebar_label: Need Help tooltip
---

By default tooltip is enabled. You can disable it at

Configuration -> Chat configuration -> Online Tracking -> "Show need help tooltip?"

# New widget

New widget look and feel can by changed in themes.

![Need help tool tip](/img/chat/need-help.png)

# Old widget

![](https://livehelperchat.com/var/media/images/need-help.png)

You can also set timeout after how many hours this tooltip should be shown for the same user again. This tooltip is highly configurable and with embed options you can change photo, main title and subtitle

## You can style how this widget looks like from back office by [creating theme](https://livehelperchat.com/how-to-use-themes-330a.html).

Bellow mentioned option are for advanced users who needs custom solutions.

## Let say you do not want photo
```js
LHCChatOptions.opt = {widget_width:320,nh_image:false};
```
## Let say you want another photo
```js
LHCChatOptions.opt = {widget_width:320,nh_image:'url to image'};
```
## Let say you want to remove sub title
```js
LHCChatOptions.opt = {widget_width:320,nh_sub_title_text:''};
```
### Let say you want to change title and subtitle
```js
LHCChatOptions.opt = {widget_width:320,nh_title_text:'My main title',nh_sub_title_text:'My subtitle'};
```
All these options can be combined together.

## How do I change background color of tooltip?

Just in your site css add

#lhc_need_help_container{background:red !important;}

## I do not see any tooltip?

 * Try to open window in incognito mode.
 * Once chat is started it won't show invitation for the next 24h.
 * Make sure you have enabled [need help tooltip](chat/configuration.md#show-need-help-tooltip)
 * Make sure tooltip [timeout value](chat/configuration.md#need-help-tooltip-timeout-after-how-many-hours-show-again-tooltip) is bigger than 0 
 * If you are using themes, make sure you have not disabled it accidentally
 * With [fresh: true javascript option](javascript-arguments.md#javascript-options) cookies are not saved so need help tooltip does not work 

## How do I change general tooltip style?

*   Either override using important flag.
*   Either override tooltip template [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php)


