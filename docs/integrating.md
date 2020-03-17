---
id: integrating
title: Integrating live helper chat HTML into site
sidebar_label: Integration
---

Integrating is fairly simple. Just go to "configuration" and then in "HTML code" part you will see the following options

*   On a mouse click show the page widget
*   Hide status when offline
*   Language options
*   Position option
*   Automatically check for messages from the operator/invitation messages 
*   Disable pro active invitations, useful if you want disable them on your site.
*   Show a leave a message form when there are no online operators
*   Department

## "On a mouse click show the page widget"

By default when user clicks live chat link the Page Widget Opens. The User (visitor) can chat in this Page Widget. The Page Widget remains opened until the User (visitor) closes it or opens the Widget in a new window (popup). To open in a new window, the User clicks the icon beside the Close Page Widget icon.

You can test widget on our [demo page.](https://livehelperchat.com/demo-12c.html)

[![](https://livehelperchat.com/docimages/html/thumbnails/page-popup.png)](https://livehelperchat.com/docimages/html/page-popup.png)

## "Hide status then offline"

Let say you do not want to show Live Chat/Help link or Status Widget at the bottom of your screen. So you can check this.

## "Department"

For which department this code should be rendered. Choose “Any” for all departments, or choose the specific department for this code.

## "Language options"

Choose a language. Depending on combobox value javascript code below, it will be rendered in that language. If you have more than one language, then choose the language and you will get the code for that language. Once this code is embedded into your website and depending on the language chosen, the User/Visitor Widget interfaces will be in that language.

## "Automatically check for messages from the operator/invitation messages"

If this checkbox is checked, the User (Visitor) does not have to make a page refresh to initiate the Invitation Logic (check for messages from operator/or check for the  Proactive Chat Invitation message). Please note that checking this checkbox activates messages checking for Users (Visitors) every 15 seconds and it increases server load.

*   If you have the Proactive Invitation popup when Users (Visitors) spends 20 seconds on the site, you will not have to refresh the “Online Visitors” page to check this.
*   If it is enough if the Invitation Logic runs whenever Users (Visitors) makes a pageview, do not check this checkbox.

![](https://livehelperchat.com/var/media/images/invitation.png)

## Disable pro active invitations, usefull if you want disable them from site part.

This disables the Proactive Invitations. This is useful if you want to disable them on your site.

Note: This disables online visitors tracking even if it's turned on in your back office (Administrator section of your site).  It is recommended to not touch this field unless you know what you are doing :)

## Position options

This is a new feature.  This is the position where the Status Widget is published on your website.  These are your options.

*   Native placement
*   Bottom right corner
*   Bottom left
*   Middle right
*   Middle left

The main difference is that if you choose the Native Placement you have to place the HTML tag where you want the Status Widget to appear on your website. If you choose the Bottom Right Corner you won't have to do anything just paste javascript in page header, or at the page footer. Javascript is loaded asynchronous so it does not block the User  (Visitor) interface.

![Bottom widget](https://livehelperchat.com/docimages/html/bottom-widget.png)

The HTML code will be generated automatically as you change the configurations on this page.  You can then embed it into your site.  You will be able to see how it would look like and function on your site.

### How to make automatic status change for frontend visitors?

Usually then you go offline or online visitors has to refresh page to see new widget status. Since 2.08v it's possible to make status changes visible without required pageview.

You just have to go to 

 > Configuration => Live Help configuration => Chat configuration => Misc => Interval between chat status checks in seconds, 0 disabled.

I suggest to set there value 300 it will be status check every 5 minits. Usually if you have not changed default configuration it's foreseen that operator status changes if his last activity was 5 minits ago.

In any case if you want to be more realtime you can reduce this time. But have in mind that every time status check is performaned there is involvment of request to server.

### I'm offline/online but my site shows that i'm online/offline?

Few possible cases

### You are offline but page shows that you are online

*   You have setup department online hours, and chat just shows status based on that.
*   There is 5 minits timeout before chat status change to offline. It's time before last time operator was seen. This can be changed in chat configuraiton. I suggest do not keep it shorter than 30 seconds.
*   By default to see new operator status it's required page view. If you do not want that you can enable automatic status change.

### You are online but web page shows that you are offline

*   You have checked in chat configuration "Ignore users online statuses and use department online hours", but you forgot to active online hours in department.

### How it is decided to show online/offline user?

*   Visitor can be assigned to Individual department, Department or Department Group
*   By checking is someone online we first check was department provided or not
*   If department id **is or not** provided we decide to show widget or not based on this workflow
    *   We check is someone online from directly assigned operators or someone with all departments assigned
    *   If we did not found any, we check is department online hours provided.
    *   We also check is department overloaded or not
    *   We check that is online and have write access to specific department or atleast one
*   Operators themself can have two statuses
    *   Online/Offline - is operator online or not
    *   Visible/Invisible - if operator opens pending chat being in invisbile mode. Chat is not assigned to him and chat does not change status