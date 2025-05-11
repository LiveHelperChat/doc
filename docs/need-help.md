---
id: need-help
title: Need Help Tooltip Configuration
sidebar_label: Need Help Tooltip
---

By default, the "Need Help" tooltip is enabled. You can disable it in:

`Configuration -> Chat configuration -> Online Tracking -> "Show need help tooltip?"`

# New Widget

The appearance of the new widget can be customized using themes.

![Need help tooltip](/img/chat/need-help.png)

# Old Widget

![](https://livehelperchat.com/var/media/images/need-help.png)

You can also set a timeout to control how often the tooltip is shown to the same user. This tooltip is highly configurable, and you can change the photo, main title, and subtitle using embed options.

## Styling the Widget from the Back Office

You can style the widget's appearance from the back office by [creating a theme](https://livehelperchat.com/how-to-use-themes-330a.html).

The options below are for advanced users who require custom solutions.

## Removing the Photo

```js
LHCChatOptions.opt = {widget_width:320, nh_image: false};
```

## Using a Different Photo

```js
LHCChatOptions.opt = {widget_width:320, nh_image: 'url to image'};
```

## Removing the Subtitle

```js
LHCChatOptions.opt = {widget_width:320, nh_sub_title_text: ''};
```

## Changing the Title and Subtitle

```js
LHCChatOptions.opt = {widget_width:320, nh_title_text: 'My main title', nh_sub_title_text: 'My subtitle'};
```

All these options can be combined.

## Changing the Background Color of the Tooltip

Add the following CSS to your site's stylesheet:

```css
#lhc_need_help_container {
  background: red !important;
}
```

## Hide widget via Javascript

```js
window.$_LHC.eventListener.emitEvent('nhClose');
```

## Troubleshooting: Tooltip Not Visible

*   Try opening the window in incognito mode to rule out caching issues.
*   The invitation won't appear for 24 hours after a chat has started.
*   Ensure that you have enabled the [Need Help tooltip](chat/configuration.md#show-need-help-tooltip).
*   Verify that the [timeout value](chat/configuration.md#need-help-tooltip-timeout-after-how-many-hours-show-again-tooltip) is greater than 0.
*   If you are using themes, ensure that you have not disabled the tooltip accidentally.
*   If you are using the `fresh: true` [JavaScript option](javascript-arguments.md#javascript-options), cookies are not saved, so the "Need Help" tooltip will not function.

## Changing the General Tooltip Style

*   Override the styles using the `!important` flag in your CSS.
*   Alternatively, override the tooltip template: [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/tpl/lhchat/getstatus/we_here.tpl.php)


