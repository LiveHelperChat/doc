---
id: start-chat-form-settings
title: Start chat form settings
sidebar_label: Start chat settings
---

These settings allow to have custom interface for starting chat. Also allows to have custom fields defined directly in back office without any scripting.

Start chat settings has two options

 * Either you use default settings for all departments.
 * Either you defined start chat settings by department. For start chat settings take effect you have to pass department explicitly.

I also recommend to a see few youtube videos regarding possible options

* https://www.youtube.com/watch?v=TFJAW5bepLM [Part 1]
* https://www.youtube.com/watch?v=jj4Tu_zoYaE [Part 2]

:::tip 
It's possible to develop that once you change department start chat settings fields would be updated. Anyone wishes to sponsor it :smile: ?
:::

This is the main window of start chat form settings page.

![Start chat form settings](/img/chat/start-chat-form-settings.png?v=1)

## Attributes definition

### Enable leave a message functionality automatically if there are no online operators

Please refer to [offline messaging](offline.md#default-behaviour)
 
### Open popup on mobile devices using mobile layout.

You can force mobile devices to open popup instead of same page widget.

### Auto start chat if there is no required fields. Usefull in case bot handles chat.

Usefull if you want to start chat as soon visitor opens a widget. You should not have any of required fields just.
 
### Do not process internal pages and use redirects.
 
Not used in new widget anymore. Effects only old widget.
 
### Disable start chat URL

If you do not want to allow visitors start chat directly by typing `lhc_web/index.php` url you can check this checkbox. It will disable this form.

Another way to disable this is just edit `settings.ini.php` file and change

```php
'default_url' => 
    array (
      'module' => 'chat', // change to 'user'
      'view' => 'start', // change to 'login'
    ),
```  
 
## Define custom fields for online mode

You can have custom fields then department is online.

## Offline form settings

Define fields visible then department is offline.

## Additional form settings

![Additional chat settings](/img/chat/additional-chat-settings.png)

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

### Hide start chat button. Usefull if in the theme you choose bot and trigger with a buttons.

If your start chat form does not require any fields by default you will see only one bottom `Start a chat with us!`. You can hide this button also by checking this option.

### Lazy load widget content. Widget content will be loaded only if visitor clicks a status icon.

By default we load widget content before visitor even clicks a status icon. This way we avoid any delay before showing any widget content, but it also increases payload for the website. You can minimize payload for the website and accept a small delay before widget content is shown by checking this option.

### Initial user message height in pixels

Used only in old widget.

### Department settings

Sometimes there is requirement once department is prefilled user should not be able easily change this. So this section can help with that.

If you check `User can not change passed department.` and you use popup window you have to check in embed code generation `Hash arguments. Visitor will not be able to change passed arguments.` If user will try to change department ID he will get an error.

## Custom fields

You can define custom fields directly from back office. See video https://youtu.be/huUlx55velk?t=88

You can [prefill](../custom-fields-and-prefill.md) custom fields also.

## URL Arguments

Here you can define if you pass get arguments directly in chat start page we can read them and store them. 

:::important
This feature is not supported yet in new widget. I would suggest just use custom variables.
:::

## Pre chat

You can have custom HTML to show before start chat fields. Usefull for UI variations. Similar thing can be done with themes although.

![](/img/chat/pre-chat-html.png)

## Permissions

Required permission to manage start chat form settings

> 'lhchatsettings', 'administrate'

## Video

See youtube video for more combinations

https://youtu.be/TFJAW5bepLM