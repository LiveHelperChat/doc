---
id: intro
title: Mail module introduction
sidebar_label: Introduction
---

This module is designed for clients managing over 300 mailboxes and importing thousands of emails daily within a single installation.

Remember to set up cron jobs.

## How to Upgrade the Mail Module

As this module is a standard Live Helper Chat module, use the default [upgrade workflow](upgrading.md).

## Is the Mail Module Required to Use the Chat Module?

No.

## What is the General Workflow for Mail Tickets?

See the [setup sample](mail/sample-mailbox.md).

*   When a new email arrives, its status is set to "New."
*   When an open reply ticket is created, the status becomes "Closed."
*   If a new email arrives, the ticket is reopened. Whether a new ticket is created or an old one is reopened is determined by the "Timeout in days after last response before we create a new issue" setting in the mailbox "Options" section.
*   In the dashboard, you can select which widgets to display. The new widgets include:
    *   My active and new emails
    *   Active emails
    *   New emails
    *   Mail queue alarm
