---
id: mail-window
title: Mail window
sidebar_label: Mail window
---

Default mail window look

![](/img/mail/mail-window.png)

## Right column information

### Sender

This section displays information about the sender of the email. To prevent operators from seeing the sender's email address, they should not have the following permission:

> 'lhmailconv','mail_see_unhidden_email'

### Phone

There are two related permissions for displaying phone numbers:

*   To allow an operator to see the full phone number and be able to click it, they must have both of these permissions:

    > 'lhmailconv','phone_see_unhidden'
    > 'lhmailconv','have_phone_link'

*   To show only a portion of the phone number, with the full number exposed as a clickable link, grant only this permission:

    > 'lhmailconv','have_phone_link'


## Mail options

![](/img/mail/mail-options.png)

## Download (eml)

To allow an operator to download the email in its original `.eml` format, they must have the following permission:

> 'lhmailconv', 'can_download'

## Forward

To allow an operator to forward emails, they must have this permission:

> 'lhmailconv', 'send_as_forward'

## Change mailbox

To allow an operator to change the mailbox by clicking on it, they must have this permission:

> 'lhmailconv', 'change_mailbox'

## Change recipients

To allow an operator to change the recipients while replying, they must have this permission:

> 'lhmailconv', 'manage_reply_recipients'

The operator also needs this permission:

> 'lhmailconv','mail_see_unhidden_email'
