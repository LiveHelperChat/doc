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

## What is a general flow of mail tickets?

See [sample of setup](mail/sample-mailbox.md)

* Once new mail arrives, it arrives as New
* Open Reply ticket becomes Closed
* If new mail arrives, ticket is reopened. To create a new ticket or reopen old is controlled by `Timeout in days after last response before we create a new issue` from mailbox `Options` section.
* In dashboard, you can choose what widgets you want to see. There are these new widgets.
  * My active and new mails
  * Active mails
  * New mails
  * Mail queue alarm
