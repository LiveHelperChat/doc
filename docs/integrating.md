---
id: integrating
title: Integrating live helper chat HTML into site
sidebar_label: Integration
---

## Integration

Integrating is fairly simple. Just go to 

> System configuration -> Embed code -> Live help embed code

You can test widget on our [demo page.](https://livehelperchat.com/demo-12c.html)

Choose `Widget embed code`

![Embed code](/img/integration/embed-code.png)

## On each refresh start a new chat. Usefull in embed mode.

Let say you are auto starting new chat every time visitor opens a widget, and he sees bot messages. So widget can act like a form survey and it makes sense just start a fresh chat each time.

## Show a ‘leave a message form’ when there are no online operators

If you do not activate this option status widget will not be shown if there is no online operators. [More information](chat/offline.md)

## Widget embed/click mode

There is a three options

* `widget` - when visitor clicks status icon we will show him widget.
* `embed` - we will render chat content directly in the page.
* `popup` - when visitor clicks status icon we will open popup.

## Widget position

* `Default` - widget will be rendered in the bottom right corner.
* `api` - we will not render status widget. You can activate widget by calling [javascript api functions](javascript-arguments.md#public-methods)

## Department

For which department this code should be rendered. Choose “Any” for all departments, or choose the specific department for this code.

You can choose more than one department at a time. If you choose one department Live Helper Chat will use this department [start chat form settings](chat/start-chat-form-settings.md) or fallback to default settings if none is found.

## Choose a language

Choose a language. Depending on combobox value javascript code below, it will be rendered in that language. If you have more than one language, then choose the language and you will get the code for that language. Once this code is embedded into your website and depending on the language chosen, the User/Visitor Widget interfaces will be in that language.

:::tip
You can enable `Try to detect language automatically` try to detect visitor langauge, but you have configure siteacess to match content language. I would suggest just use [themes](theme/widget-theme.md) and activate in `Widget container` section `Try to detect language from browser headers` option.
:::

## Check for operator invitation messages

If this checkbox is checked, the User (Visitor) does not have to make a page refresh to initiate the Invitation Logic (check for messages from operator/or check for the  Proactive Chat Invitation message). Please note that checking this checkbox activates messages checking for Users (Visitors) every 15 seconds and it increases server load.

* If you have the Proactive Invitation popup when Users (Visitors) spends 20 seconds on the site, you will not have to refresh the “Online Visitors” page to check this.
* If it is enough if the Invitation Logic runs whenever Users (Visitors) makes a pageview, do not check this checkbox.

![](/img/integration/invitation.png)

## Disable pro active invitations

This disables the Proactive Invitations. This is useful if you want to disable them on your site.

### How to make automatic status change for frontend visitors?

Usually then you go offline or online visitors has to refresh page to see new widget status. It's possible to make status changes visible without required pageview also.

You just have to go to 

 > Configuration -> Live Help configuration -> Chat configuration -> Misc -> Interval between chat status checks in seconds, 0 disabled.

I suggest to set there value 300 it will be status check every 5 minits. Usually if you have not changed default configuration it's foreseen that operator status changes if his last activity was 5 minits ago.

In any case if you want to be more realtime you can reduce this time. Have in mind that every time status check is performaned there is involvment of request to server.

### I'm offline/online but my site shows that I'm online/offline?

Few possible cases

### You are offline but page shows that you are online

* You have setup department online hours, and chat just shows status based on that.
* There is 5 minits timeout before chat status change to offline. It's time before last time operator was seen. This can be changed in chat configuraiton. I suggest do not keep it shorter than 30 seconds.
* By default to see new operator status it's required page view. If you do not want that you can enable automatic status change.

### You are online but web page shows that you are offline

* You have checked in chat configuration "Ignore users online statuses and use department online hours", but you forgot to active online hours in department.

### How it is decided to show online/offline user?

* Visitor can be assigned to Individual department, Department or Department Group
* By checking is someone online we first check was department provided or not
* If department id **is or not** provided we decide to show widget or not based on this workflow
  * We check is someone online from directly assigned operators or someone with all departments assigned
  * If we did not found any, we check is department online hours provided.
  * We also check is department overloaded or not
  * We check that is online and have write access to specific department or atleast one
* Operators themself can have two statuses
  * Online/Offline - is operator online or not
  * Visible/Invisible - if operator opens pending chat being in invisbile mode. Chat is not assigned to him and chat does not change status