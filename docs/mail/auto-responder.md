---
id: mail-auto-responder
title: Mail auto responder
sidebar_label: Mail auto responder
---

This setup allows to send an e-mail on new mail arrival.

Here are the steps to setup it

## Setup bot which will send an e-mail

Create a bot and a trigger named `New conversation Help/Support`

 * Subject - `Re: {args.chat.subject}`
 * From name - `{args.conversation.mailbox.name}` just use mailbox name.
 * From e-mail - `{args.conversation.mailbox.mail}` we want to use mailbox e-mail.
 * Reply to - `{args.conversation.mailbox.mail}` we want to use mailbox e-mail.
 * Recipient - `{args.conversation.from_address}` recipient will be the one who e-mail us.
 * `Create a copy in a send folder` - if you mail server does not create an e-mail copy automatically check this option.

Mail body sample. Pay attention we have here `{brand}` variable which is variable replaced based on department and is setup in [Replaceable variables](replaceable-variables.md) section.

```
Hi {args.conversation.from_name},

Thank you for reaching out to {brand}.
We have received your email and will be assigning it to one of our support representatives.

Due to the high volume of incoming email traffic to our site, replies can take up to 24 business hours.

Your case number is {args.chat.conversation_id} for future reference.

Sincerely,

{brand}
Email: {args.conversation.mailbox.mail}
```

Sample configuration screenshot

![](/img/mail/trigger-auto-reply.png)

## Setup webhook event for new e-mail conversation

1. Create a new `Webhook` with event listening to `mail.conversation_started`
2. Do not enter any conditions if you do not want.
3. Choose bot and trigger which will send an e-mail.

Sample configuration. In this configuration we additionally

* Check that mailbox name would start with `help*, support*, vip*` one of those prefixes
* Mail department is not `355`.

You can remove those conditions.

![](/img/mail/auto-responder.png)

## How to have different auto-responder for different departments

Few ways

 * In webhook conditions as per sample have `{args.chat.dep_id} = 1` as your condition and have different trigger for each of them.
 * Use [Replaceable variables](replaceable-variables.md) in your trigger body. Preferred way
 * In bot trigger have `Check for conditions to proceed` and have there condition `{args.chat.dep_id} = 1` and have different trigger for each of them.

