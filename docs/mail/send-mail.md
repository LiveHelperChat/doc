---
id: send-mail
title: Send an e-mail
sidebar_label: Send an e-mail
---

The **Send an e-mail** window creates a new outgoing e-mail. Access requires:

> 'lhmailconv','send_mail'

## Compose an e-mail

* **Mailbox**: Select an active mailbox. Use the signature button next to it to append the mailbox signature to the message.
* **Subject**: Enter the subject.
* **Recipient E-mail** and **Recipient Name**: Enter the recipient's address and, optionally, name.
* **Reply to e-mail** and **Reply to name**: Optionally set where replies should be sent. If the e-mail is left empty, the mailbox address and name are used. Without `'lhmailconv','reply_to_all'`, a custom reply-to address must belong to a configured mailbox.
* **Body**: Write the message in the editor.

The mailbox, subject and recipient address are required. If message content protection is enabled and the body matches a sensitive-information rule, the e-mail is not sent and the matching rules or warning are displayed.

### Sending from a chat

When opened from a chat, the recipient is prefilled from the visitor's e-mail and name. An active mailbox matching the chat department's e-mail is selected when available. The operator must have read and write access to the chat. Without `'lhchat','chat_see_unhidden_email'`, the chat visitor's address is masked and cannot be changed in the form.

## Custom Cc and Bcc recipients

Use **Add CC** and **Add BCC** next to the recipient address to add extra recipients. Each row has a delete button; its section disappears when the last row is removed. Empty rows are ignored and non-empty addresses are validated.

Adding custom recipients requires:

> 'lhmailconv','send_mail_bcc_cc'

Without this permission, the buttons are disabled, the recipient sections are not shown, and custom recipients are not restored when copying content. Posted Cc/Bcc values are discarded before sending; invalid submitted addresses can still produce validation errors.

Recipients are added as Cc/Bcc headers, with Bcc recipients hidden from other recipients. When the mailbox has **Create a copy** enabled, the sent-folder copy contains the same Cc/Bcc headers.

This permission does not control replies to existing e-mails; reply recipients are controlled by `'lhmailconv','manage_reply_recipients'`.

## Send and reuse content

Choose **Send as closed** or **Send as Active**. The active choice marks the outgoing message for an active ticket when it is imported. A sent-folder copy requires **Create a copy** and a configured sent folder on the mailbox. The window reports copy errors separately from the send result and, when a copy is created, displays ticket import progress.

After sending, **Send a new e-mail** opens a fresh form. **Send a new e-mail, copy content** restores the subject, recipient name, reply-to fields, body and mailbox, along with permitted Cc/Bcc recipients. The recipient address is restored unless the message was sent from a chat and the operator lacks `'lhchat','chat_see_unhidden_email'`.
