---
id: start-chat-form-settings
title: Start chat form settings
sidebar_label: Start chat settings
---

These settings allow to have custom interface for starting chat. Also allows to have custom fields defined directly in back office without any scripting.

Start chat settings has two options

 * Either you use default settings for all departments.
 * Either you defined start chat settings by department. For start chat settings take effect you have to pass department explicitly.


:::tip 
It's possible to develop that once you change department start chat settings fields would be updated. Anyone wishes to sponsor it :smile: ?
:::

This is the main window of start chat form settings page.

![Start chat form settings](/img/chat/start-chat-form-settings.jpg)

## Attributes definition

### Enable leave a message functionality automatically if there are no online operators

Please refer to [offline messaging](offline.md#default-behaviour)
 
### Open popup on mobile devices using mobile layout.

You can force mobile devices to open popup instead of same page widget.

### Auto start chat if there is no required fields. Usefull in case bot handles chat.

Usefull if you want to start chat as soon visitor opens a widget. You should not have any of required fields just.
 
### Do not process internal pages and use redirects.
 
Not used in new widget anymore. Effects only old widget.
 
## Define custom fields for online mode

You can have custom fields then department is online.

## Offline form settings

Define fields visible then department is offline.

## Additional form settings

![Additional chat settings](/img/chat/additional-chat-settings.jpg)

### Show operator profile above input fields

User will see something like this.

![Operator Profile](/img/chat/operator-profile.jpg)

:::tip 
If you define theme you can change logo and message text of this operator profile. Because chat has not started yet don't have operator profile to show.
:::

### Remove space after operator profile

Used only in old widget.

### Hide message label

Usually there is Question label above user message area. With this option we can hide it.

With message label

![Not hidden message label](/img/chat/operator-profile-hide-message-label.jpg)

Without message label

![Hide message label](/img/chat/operator-profile-hide-message-label-without.jpg)

### Show messages box above input fields, usefull for UX combinations.

If you have only message label required and have checked this you should see UI like

![Minimal UI](/img/chat/chat-minimal-ui.jpg)

### Initial user message height in pixels

Used only in old widget.

### Department settings

Sometimes there is requirement once department is prefilled user should not be able easily change this. So this section can help with that.

## Custom fields

You can define custom fields directly from back office. See video https://youtu.be/huUlx55velk?t=88

## URL Arguments

Here you can define if you pass get arguments directly in chat start page we can read them and store them. 

:::important
This feature is not supported yet in new widget. I would suggest just use custom variables.
:::

## Pre chat

You can have custom HTML to show before start chat fields. Usefull for UI variations. Similar thing can be done with themes although.