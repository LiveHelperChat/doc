---
id: theme
title: Theme
---

## Introduction

If you want to see how themes can look like check our [free themes category](https://livehelperchat.com/free-themes-22c.html).

As with every open source project everyone wan't to change something. We have option to style pretty much everything directly from back office. We can do following things

* Change widget style
* Change back office style
* Have personal themes

## Theming window

Widget themes has few sections. I'll try in short term describe what you can do in each of them.

![](/img/design/theme.png)

## Status widget style

Here you can change main widget attributes. Like logo etc.

:::tip
Some of these attributes are quite old and not used anymore. They will be removed in old version.
:::

## Widget container

Here you can change general outlook of widget. Like borders padding etc.

### Widget header background color

Sets background color for widget header

### Widget border color

Border color for the widget

### Widget border width (px)

Border width for the widget

### Header height (px)

If you want higher header you can set it's height here.

### Header padding (px)

Set custom padding for widget header

### Widget width (px)

Override widget width directly from a theme

### Widget height (px)

Override widget height directly from a theme

### Minimize image | Only for a legacy widget

Image used to minimize the widget

### Restore image | Only for a legacy widget

### Close image | Only for a legacy widget

### Popup image | Only for a legacy widget

### Widget response layout width trigger (px) | Only for a legacy widget

### Hide widget close button

You can hide close button in header by checking this.

### Hide popup option

Hides popup option from header dropdown menu.

### Try to detect language from browser headers

Widget will try to detect language by visitor browser and show language in his native langauge.

See youtube video how to setup it.

https://www.youtube.com/watch?v=iGGTKGrO9Ek&feature=youtu.be

Things to check if it does not work.

* Make sure you checked this checkbox
* Make sure your browser sends correct language headers while testing.
* Take a look at System configuration -> Speech -> Languages. Make sure Siteaccess column has a proper value.

### Show go to survey button on chat close

Usually when chat is closed visitor is automatically redirected to survey. Instead of that you can show him Go to survey button just.

### Before closing chat ask user does he really want to to close chat

Visitor will be asked for confirmation does he really want's to close a widget.

### Close chat if page is refreshed. Usefull if you have embed code in popup.

If you have embeded Live Helper Chat script in popup it makes sense on popup close also close the chat.

### Show start chat form instantly after operator closes a chat.

Instead of writing message chat was closed we will show start chat form for the visitor instantly.

### Show previous chat messages in chat widget.

In case you want to allow visitor to see previous chat message you can check this. Previous messages are shown only if we find previous chats by same online visitor.

### Show operator profile in a new row

Usefull for UI combinations.

### After how many user messages show switch to human button. empty - never, 0 - always

If you want to give easy way for a visitor to be transferred to operator you can enable this option.

This option is always shown and does not pay attention is there any operator at the moment in back office. So most logical way is just to use bot workflow itself as it can check is there any operators online.

## Messages style

Here you can change how message style looks like for visitor.

## Need help widget

You can change how need help widget looks like.

## Chat widget

Here you can change default text in widget itself. Few more complex ones I have explained here.

### How to show average wait time instead of a number in the queue?

* You have to be running department [statistic cronbjob](development/cronjob.md#statistic-cronjob)
* `Text when user starts a chat and is waiting for operator to join a chat. Only if queue is 1 or if less than a minute wait time.` set value like **Less than a minute**
* `Text when user starts a chat and is waiting for operator to join a chat. Only if queue is > 1. {number}, {avg_wait_time}, {avg_wait_time_live}, {avg_wait_time_live__string if more than one minute live wait time}, {avg_wait_time__string if more than one minute wait time}` 
    * Department average wait time - **Your average waiting time for attention is {avg_wait_time} minute{avg_wait_time__s}**
    * Live wait time (`departament wait time` - `how long visitor is waiting`) E.g **Estimated wait time {avg_wait_time_live} minute{avg_wait_time_live__s}**
    * If `departament wait time` - `how long visitor is waiting` < 0 we assume less than a minute is left. First text is used in that case.

Average wait time will be calculated for all closed chat from last 3 days. You can change that in `Live help configuration (tab) -> Chat (section) -> Statistic -> Configuration (tab)`. You can set shorter period of time. In that case you should set also this cronjob to run more frequently.

## Custom content

You can write custom HTML in these fields to be appended in various chat widget places. You can also use [start chat form settings](../chat/start-chat-form-settings.md#pre-chat) to write HTML above all fields.

### Custom html before start chat form fields, popup

React attribute path 

```js
{'k': ['chat_ui','custom_html_widget'], 'v' : 'Custom html before start chat form fields, popup'}
```

This HTML is shown if chat will be started with an operator and not a bot in popup window.

![](/img/theme/custom-html-popup.png)

### Custom html before start chat form fields, widget

React attribute path

```js
{'k': ['chat_ui','custom_html_widget'], 'v' : 'Custom html before start chat form fields, popup'}
```

This HTML is shown if chat will be started with an operator and not a bot.

![](/img/theme/widget-operator.png)

### Custom html before start chat form fields, popup (bot mode)

React attribute path

```js
{'k': ['chat_ui','custom_html_widget'], 'v' : 'Custom html before start chat form fields, popup (bot mode)'}
```

This HTML is shown only if chat will be started with a bot in a popup.

![Only bot online](/img/theme/custom-html-popup-bot.png)

### Custom html before start chat form fields, widget (bot mode)

React attribute path

```js
{'k': ['chat_ui','custom_html_widget'], 'v' : 'Custom html before start chat form fields, widget (bot mode)'}
```

This HTML is shown only if chat will be started with a bot.

![Only bot online](/img/theme/only-bot-online.png)

### Custom html before standard widget header

React attribute path

```js
{'k': ['chat_ui','custom_html_header'], 'v' : 'Custom html before start chat form fields, popup'}
```

HTML is rendered before widget header

![Inside widget header](/img/theme/before-header.png)

### Custom html inside standard widget header

React attribute path

```js
{'k': ['chat_ui','custom_html_header_body'], 'v' : 'inside header'}
```

HTML content is shown above standard widget header.

![Inside widget header](/img/theme/inside-header.png)

### Custom html above status/profile body in online mode

React attribute path

```js
{'k': ['chat_ui','pre_chat_html'], 'v' : '<b>Intro</b> pre chat HTML'}
```

This field location is identical to Start chat form settings. `Pre-chat HTML` field location.

![Pre-chat HTML](/img/theme/before-profile.png)

### Custom html above status/profile body in offline mode

React attribute path

```js
{'k': ['chat_ui','pre_chat_html'], 'v' : '<b>Intro</b> pre chat HTML'}
```

This field location is identical to Start chat form settings. `Offline Pre-chat HTML` field location.

![Offline Pre-chat HTML](/img/theme/offline-pre-chat-html.png)

### Intro messages

#### Operator intro message. You can wrap custom HTML with [html][/html] bbcode`

React attribute path

```js
{'k': ['chat_ui','intro_message'], 'v' : '[html]<b>Intro</b> message with custom html[/html]'}
```

```html
[html]<b>Intro</b> message with custom html[/html]
```

#### Operator intro message in HTML

React attribute path

```js
{'k': ['chat_ui','intro_message_html'], 'v' : 'Custom html before start chat form fields, popup'}
```

```html
<b>Intro</b> message with custom html
```

Results in

![Intro messages](/img/theme/intro-messages.png)

### Custom html before standard widget status header

This field is not used in a new widget.

### Inject HTML on widget open

This field is not used in a new widget.

### Header HTML here you can paste custom header html you want that widget should have.

This file content will be appended to widget `head` content. You can use this field to add custom JS or any other HTML you want.

## Custom CSS

If you want to style form directly using CSS you can use this section.

### Status widget additional CSS, takes effect after save

This place styles iframe of status widget itself.

CSS

```css
body {
    background-color: red!important;
}
```

Will result

![](/img/theme/status-widget.png)

See [example](../development/modifying-widget.md#how-to-make-status-icon-smaller-based-on-user-resolution) how to change status widget dimensions using this field.

### Widget container additional CSS, takes effect after save

This field has to contain direct CSS rules.

```css
box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px!important;border-radius: 12px!important;
```

Will result in a widget with a shadow. It set's style directly to an iframe itself.

![](/img/theme/shadow-widget.png)

### Widget body additional CSS, takes effect after save

```css
.message-send-area{
    background-color: red!important;
}
```

Will result in

![](/img/theme/message-area-red.png)

### Custom CSS only for popup

```css
#messagesBlock{
    background-color:red;
}
```

Will result

![](/img/theme/popup-css.png)

This will be applied only to a popup.

### Custom page CSS (new widget only)

This will move widget. Same way you can change dimensions of a status widget.

```css
#lhc_container_v2 #lhc_status_widget_v2{ 
        bottom:80px!important;   /* Adjust position from bottom */ 
        right:20px!important;    /* Adjust position from right */
}
```

Changed position from bottom. If you want to change size see this [example](../development/modifying-widget.md#how-to-make-status-icon-smaller-based-on-user-resolution)

![](/img/theme/position-change.png)

## Custom bot style

You can change default bot buttons style.

## Notification

If you are using notifications functionality you should set logo and notification details here.

## FAQ

### How do I make status icon smaller?

In `Custom CSS` tab do the following changes.

In `Status widget additional CSS, takes effect after save` enter
 
```css
#lhc_status_container{ 
    bottom:3px!important;
    right:3px!important;
    padding-left:3px!important;
    padding-top:3px!important;
}

#lhc_status_container #status-icon{
    box-shadow:none!important;
    padding:5px!important;
}
```

In `Custom page CSS (new widget only)` enter

```css
#lhc_container_v2 #lhc_status_widget_v2{ 
    min-height: 65px!important;
    min-width: 65px!important;
    max-height: 65px!important;
    max-width: 65px!important;
    width: 65px!important;
    height: 65px!important;
}
```

### How do I place new widget at the bottom left corner using custom CSS section?

Create a new theme and make it default or just choose it while generating an embed code

In `Custom CSS` tab do the following changes.

In `Widget container additional CSS, takes effect after save` enter 

```
  left:30px;
```

In `Widget body additional CSS, takes effect after save` enter

```css
.proactive-need-help{
  border-radius:10px!important;
  border-bottom-left-radius:0px!important;
}
```

In `Custom page CSS (new widget only)` enter
    
```css
#lhc_container_v2 #lhc_status_widget_v2{ 
        left:20px!important;
}

#lhc_container_v2 #lhc_widget_v2{
    left:50px!important;;
}

#lhc_container_v2 #lhc_needhelp_widget_v2{
    left:45px!important;
}
```

That's it.

### I have created a theme, how can I share it with community?

Community Themes will be published in github.

https://github.com/LiveHelperChat/themes


### How do I apply a theme?

You can either set default theme in back office or you can choose theme in embed code generation window.

### How do I import a theme?

Navigation to 
> "System configuration" -> "Live help configuration" -> "Import new theme" 

In this window just upload a new theme.

### How do I apply imported theme, set the default one?

*   You can set default theme in 
> Configuration -> Live Chat configuration -> Default theme
*   Also you can apply themes individually to embed code by selecting combobox in widget generation window. So you can just choose which theme widget should use.

### How do I pass theme to start chat window?

Theme argument is /(theme)/<theme_id> so you can just manually write what theme should use. E.g index.php/chat/start/(theme)/2

### I have created a theme and want to share with community where should I send a theme file?

Just send it to me. remdex@gmail.com

<div class="flex-video"><iframe allowfullscreen="" frameborder="0" height="315" src="//www.youtube.com/embed/hNLuLxOq7E0" width="560"></iframe></div>

## Permissions

In order operator to be able edit themes, set default theme he has to have this permission

> 'lhtheme', 'administratethemes'
