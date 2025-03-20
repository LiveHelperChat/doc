---
id: email-templates
title: E-mail templates
sidebar_label: E-mail templates
---

Definition of E-mail Templates and Their Purposes

### Send Mail to User, ID 1

* This template is used when an operator sends an e-mail to a visitor from chat.

### Support Request from User, ID 2

* This template is used when visitors fill an offline form and send an e-mail.

### User Mail for Himself, ID 3

* This template is used when visitors send a chat transcript from the widget to their own e-mail.

### New Chat Request, ID 4

An e-mail is sent when there is a new chat and the following conditions are met:

* The department has the `Mail messages` option checked in the `Notifications` section.
* The chat is in the `Pending` state for a specified number of seconds before notifying staff.

### Chat Was Closed, ID 5

An e-mail is sent when a chat is closed and the following conditions are met:

* The department has the `Inform when chat is closed by operator, only mail notification is sent.` OR `Inform when chat is closed automatically, only mail notification is sent.` option checked in the `Notifications` section.

### New FAQ Question, ID 6

An e-mail is sent when a new question is filled in the FAQ widget.

### New Unread Message, ID 7

An e-mail is sent to the operator when there is a new unread message from a visitor and the following conditions are met:

* The department has the `Inform about unread messages if from last unread user message has passed (seconds)` option checked in the `Notifications` section.
* More seconds have passed since the last visitor message than the notification threshold limit.

### Filled Form, ID 8

An e-mail is sent when a visitor fills a form from the forms module.

### Chat Was Accepted, ID 9

An e-mail is sent when a chat is accepted and the following conditions are met:

* The department has the `Inform when chat is accepted by one of the staff members using` option checked in the `Notifications` section.
* The `Mail messages` option is checked.

### Permission Request, ID 10

An e-mail is sent when an operator requests new permission from their account using the `Permissions` tab. The e-mail is sent to the operator chosen by the requester.

### You Have Unread Messages, ID 11

An e-mail is sent to the visitor if an operator writes a message in chat and the following conditions are met:

* The `Inform visitor about unread messages from operator, value in minutes. 0 - disabled` option is checked in the `Chat configuration` section.
* The chat has unread operator messages.
* More than the specified number of minutes have passed since the last operator message.

### Visitor Returned, ID 12

An e-mail is sent to the operator when a visitor returns to the website with a fresh session and the following conditions are met:

* The visitor's online record indicates that the operator should be informed about the visitor's return. This can be done from the `Modify chat` modal by clicking `Edit chat`.
  * The e-mail is sent to the operator who subscribed to receive notifications once the visitor returns.
  * Alternatively, the e-mail template has the recipient e-mail field filled.

### Report Prepared, ID 13

An e-mail is sent when a report from statistics is prepared.