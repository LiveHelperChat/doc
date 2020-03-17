---
id: need-help
title: Need help tool-tip configuration
sidebar_label: Need Help tooltip
---

By default tooltip is enabled. You can disable it at

Configuration -> Chat configuration -> Online Tracking -> "Show need help tooltip?"

![](https://livehelperchat.com/var/media/images/need-help.png)

You can also set timeout after how many hours this tooltip should be shown for the same user again. This tooltip is highly configurable and with embed options you can change photo, main title and subtitle

### You can style how this widget looks like from back office by [creating theme](https://livehelperchat.com/how-to-use-themes-330a.html).

Bellow mentioned option are for advanced users who needs custom solutions.

### Let say you do not want photo
```js
LHCChatOptions.opt = {widget_width:320,nh_image:false};
```
### Let say you want another photo
```js
LHCChatOptions.opt = {widget_width:320,nh_image:'url to image'};
```
### Let say you want to remove sub title
```js
LHCChatOptions.opt = {widget_width:320,nh_sub_title_text:''};
```
### Let say you want to change title and subtitle
```js
LHCChatOptions.opt = {widget_width:320,nh_title_text:'My main title',nh_sub_title_text:'My subtitle'};
```
All these options can be combined together.

### How do I change background color of tooltip?

Just in your site css add

#lhc_need_help_container{background:red !important;}

### How do i change general tooltip style?

*   Either override using important flag.
*   Either override tooltip template [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php)