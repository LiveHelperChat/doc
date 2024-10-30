---
id: synchronization-sound
title: Synchronization and sound settings
sidebar_label: Sync && Sound
---

## Introduction

This section is dedicated for advanced users who want's to play around with synchronization and sound settings.

![](/img/chat/sync-and-sound.jpg)

## Attributes

### How many seconds for a user to be considered as being online

It tells how long operator should be considered online after last his activity in back office. E.g if operator just turn's off a computer without logging out. We will wait 5 minutes before considering him being offline. Should not be set lower than 60 seconds.

### Sync for new chats, interval in seconds

It tells how ofter we should check for new chats as operator. This value can be set as low as 3 seconds.

### Check for messages from the operators, interval in seconds

This tells how ofter we should check for proactive invitation messages from operator in website.

### Preload previous chat messages on chat open

If visitor had previously chatted we can preload his previous chat messages.

### Sync for a new user message, interval in seconds

It tells how often check for messages from visitor/operator during chat session.

### Show browser notification for new messages

You can also if you want enable browser notifications for new messages. By default notifications are shown only for new chats, but not messages.

### Long polling (experimental)

This will be removed in next release. So do not touch it :)

### Play a new pending chat sound on a new chat request

This is default setting for the operator who just logged first time.

### Play a sound on a new message for a back office user

This is default setting for the operator who just logged first time.

### Play a sound on a new message for a front end user

This is default setting for website visitor who just started a chat.

### Show alert message on a new chat request

By default we show browser notification for transferred chats to operator. If you want interrupt more operator you can enable this section.

## Permissions

Permission required to configure these settings.

> 'chat','administratesyncsound'

## My operators go offline/online every few seconds?

This is a common mistake by setting to low `How many seconds for a user to be considered as being online`. Please keep it minimum 60 seconds.