---
id: synchronization-sound
title: Synchronization and sound settings
sidebar_label: Sync & Sound
---

## Introduction

This section is for advanced users who want to configure synchronization and sound settings.

![](/img/chat/sync-and-sound.jpg)

## Attributes

### Online Presence Timeout

This setting determines how long an operator is considered online after their last activity in the back office. For example, if an operator turns off their computer without logging out, the system will wait 5 minutes before marking them as offline. The value should not be set lower than 60 seconds.

### New Chat Synchronization Interval

This setting determines how often the system checks for new chats for an operator. The value can be set as low as 3 seconds.

### Proactive Chat Invitation Check Interval

This setting determines how often the system checks for proactive chat invitation messages from operators on the website.

### Preload Previous Chat Messages

If a visitor has chatted previously, this setting enables preloading their previous chat messages.

### New Message Synchronization Interval

This setting determines how often the system checks for new messages from visitors or operators during a chat session.

### Browser Notifications for New Messages

This setting enables browser notifications for new messages. By default, notifications are shown only for new chats, but not for individual messages.

### Long Polling (Experimental)

This feature will be removed in a future release. It is not recommended to modify this setting.

### New Pending Chat Sound

This is the default sound setting for operators the first time they log in. It plays a sound when a new chat request is pending.

### New Back Office Message Sound

This is the default sound setting for operators the first time they log in. It plays a sound when a new message is received in the back office.

### New Front End Message Sound

This is the default sound setting for website visitors when they start a chat. It plays a sound when a new message is received in the chat window.

### Alert Message on New Chat Request

By default, the system shows a browser notification for transferred chats to operators. Enabling this setting will display an alert message to further notify the operator.

## Permissions

The following permission is required to configure these settings:

> `chat`,`administratesyncsound`

## Operators Frequently Switching Online/Offline

This issue commonly occurs when the "Online Presence Timeout" is set too low. Ensure that the value is set to a minimum of 60 seconds.
