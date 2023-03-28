---
id: mail-window
title: Mail window
sidebar_label: Mail window
---

Default mail window look

![](/img/mail/mail-window.png)

## Right column information 

### Sender

This holds information who have send an e-mail. If you want to hide sender e-mail from operators. They should not have permission

> 'lhmailconv','mail_see_unhidden_email'

### Phone

There is two related permissions

For operator to see full phone number with possible to click it he has to have those two permissions
> 'lhmailconv','phone_see_unhidden'
> 'lhmailconv','have_phone_link'


If you want to show only part of phone number with possible to click it. Phone number will be exposed as a link.

Add this permission only
> 'lhmailconv','have_phone_link'


## Mail options

![](/img/mail/mail-options.png)

## Download (eml)

For operator to be able to download in it's original format `.eml`

> 'lhmailconv', 'can_download'

## Forward

To be able to forward operator has to have this permission

> 'lhmailconv', 'send_as_forward'

## Change mailbox

To be able to change mailbox by clicking on mailbox operator has to have this permission

> 'lhmailconv', 'change_mailbox'

## Change recipients

While replying for operator be able to change recipient he has to have this permission.

> 'lhmailconv', 'manage_reply_recipients'

Operator also has to have this permission to do that

> 'lhmailconv','mail_see_unhidden_email'