---
id: intro
title: Mail module introduction
sidebar_label: Introduction
---

Module is used by clients who have in one installation over 300 mailbox and thousands of mails imported per day.

Don't forget to setup cronjobs just.

## How to upgrade to mail version

As this module is a standard Live Helper Chat module just use default [upgrade workflow](upgrading.md)

## Do I have to user mail module in order to use chat module?

No

## What is a minimal things I have todo to have mails imported?

* In `Settings -> Mail conversations -> Mailbox` setup a new mailbox
  * Enter `Login options`
  * In `Mailbox` tab click `Get mailbox to sync` and choose what IMAP folder you want to sync.
    * `Choose what mailbox you want to sync` E.g for sync folders `{mail.livehelperchat.com:993/imap/ssl}INBOX` AND `{mail.livehelperchat.com:993/imap/ssl}Sent`
    * `Choose where deleted e-mails should be moved` E.g `{mail.livehelperchat.com:993/imap/ssl}Trash`
    * `Choose a send folder` E.g `{mail.livehelperchat.com:993/imap/ssl}Sent`
  * Define a `Matching Rule` in `Settings -> Mail conversation -> Matching rules` These rules defines to what department e-mails should go from specific mailbox.
  * If you do not see a sent e-mails in the mail ticket once you reply you have to choose in mailbox `Options` a `Create a copy in a send folder.`. Then once you send e-mail from LHC it's copy will be created in a sent folder and imported afterward.
* Setup cronjob which will fetch e-mails
  * Boilerplate sampel for all cronjobs [Boilerplate cronjobs](development/cronjob.md#boilerplate-cronjobs-if-you-have-mail-version-of-live-helper-chat-and-you-are-using-php-resque)
  * Just mail sync [cronjob](development/cronjob.md#mail-syncing-cronjobs), you can run it manually first time.
    * If your mailbox import takes long time or you have many mailbox you can decrease frequency how frequent that cronjob is run.
    * Best performance is reached if [php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extension is used.


## What is a general flow of mail tickets?

* Once new mail arrives, it arrives as New
* Open Reply ticket becomes Closed
* If new mail arrives, ticket is reopened. To create a new ticket or reopen old is controlled by `Timeout in days after last response before we create a new issue` from mailbox `Options` section.
* In dashboard, you can choose what widgets you want to see. There are these new widgets.
  * My active and new mails
  * Active mails
  * New mails
  * Mail queue alarm
