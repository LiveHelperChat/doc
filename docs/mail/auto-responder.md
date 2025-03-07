---
id: mail-auto-responder
title: Mail auto responder
sidebar_label: Mail auto responder
---

This setup allows you to send an automatic email upon the arrival of a new email.

Here are the steps to set it up:

## Set up a bot to send the email

Create a bot and a trigger named `New conversation Help/Support` with the following settings:

*   **Subject:** `Re: {args.chat.subject}`
*   **From name:** `{args.conversation.mailbox.name}` (This will use the mailbox name.)
*   **From email:** `{args.conversation.mailbox.mail}` (This will use the mailbox email.)
*   **Reply to:** `{args.conversation.mailbox.mail}` (This will use the mailbox email.)
*   **Recipient:** `{args.conversation.from_address}` (The recipient will be the person who emailed us.)
*   **Create a copy in a send folder:** If your mail server does not automatically create an email copy, check this option.

Here's a sample email body. Note the `{brand}` variable, which is replaced based on the department and configured in the [Replaceable variables](replaceable-variables.md) section.

```
Hi {args.conversation.from_name},

Thank you for contacting {brand}.
We have received your email and will assign it to one of our support representatives.

Due to the high volume of emails we receive, replies may take up to 24 business hours.

Your case number is {args.chat.conversation_id} for future reference.

Sincerely,

{brand}
Email: {args.conversation.mailbox.mail}
```

Sample configuration screenshot:

![](/img/mail/trigger-auto-reply.png)

## Set up a webhook event for new email conversations

1.  Create a new `Webhook` that listens for the `mail.conversation_started` event.
2.  If you don't want any conditions, leave them blank.
3.  Choose the bot and trigger that will send the email.

Sample configuration:

In this configuration, we also:

*   Check that the mailbox name starts with `help*`, `support*`, or `vip*`.
*   Ensure the mail department is not `355`.

You can remove these conditions if desired.

![](/img/mail/auto-responder.png)

## How to configure different auto-responders for different departments

Here are a few methods:

*   In the webhook conditions (as shown in the sample), use `{args.chat.dep_id} = 1` as a condition and create a different trigger for each department.
*   Use [Replaceable variables](replaceable-variables.md) in your trigger body. (This is the preferred method.)
*   In the bot trigger, use `Check for conditions to proceed` and set the condition to `{args.chat.dep_id} = 1`, then create a different trigger for each department.

