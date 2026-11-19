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

## Actions and their permissions

To open the mail window at all an operator needs the `'lhmailconv','use_admin'` permission.

Most actions are additionally limited by **write access** to the ticket - the operator is the ticket owner or a member of the ticket's department. Permissions below are required *in addition* to that.

| Action | Permission |
| --- | --- |
| Close ticket | Write access only |
| Change status (`New` / `Active` / `Closed`) | Write access only |
| Interactions history | Read access. `Debug` tab requires `'lhchat','chatdebug'`, operator actions tab requires `'lhaudit','see_op_actions'` |
| Transfer ticket → `Transfer to a user` / `Transfer to a department` | `'lhmailconv','allowtransfer'` |
| Transfer ticket → `Change owner` | `'lhmailconv','changeowner'` |
| Transfer ticket → `Change department` | `'lhmailconv','changedepartment'` |
| Merge | Write access to the destination and all source tickets. `'lhmailconv','merge_cross_departments'` when they belong to different departments |
| Print | No dedicated permission. Without `'lhmailconv','mail_see_unhidden_email'` e-mail addresses are masked in the printout |
| Delete ticket | `'lhmailconv','delete_conversation'` |
| Block sender | `'lhmailconv','block_sender'` |
| Change mailbox | `'lhmailconv','change_mailbox'` |
| Reply, `Send as Closed`, `Send as Active` | Write access only |
| `Send as New` | `'lhmailconv','send_as_new'` |
| Change recipients | `'lhmailconv','manage_reply_recipients'` (and `'lhmailconv','mail_see_unhidden_email'`) |
| Forward | `'lhmailconv','send_as_forward'` |
| Download (eml) | `'lhmailconv','can_download'` |
| Attach files | `'lhmailconv','allow_attach_files'` |
| Download attachments | `'lhmailconv','download_unverified'`, `'lhmailconv','download_verified'`, `'lhmailconv','download_restricted'` |
| Include images from the original e-mail | `'lhmailconv','include_images'` |
| View unmasked sensitive information in messages | `'lhmailconv','see_sensitive_information'` when guardrails are enabled |
| Add/Remove label | Write access only |
| No reply required | Write access only |
| Customer/Conversation remarks | Write access only |
| Un-merge a merged message | `'lhmailconv','use_admin'` only |

:::note
Replying does **not** require `'lhmailconv','send_mail'`. That permission gates the separate [new mail form](send-mail.md), where adding custom `Cc` / `Bcc` recipients additionally requires `'lhmailconv','send_mail_bcc_cc'`.
:::

### Sensitive information

When guardrails are enabled, operators need this permission to see sensitive information without masking in mail subjects and message bodies:

> 'lhmailconv','see_sensitive_information'

Without it, applicable message content protection rules mask matching content in the mail window and message bodies in printouts. The rules depend on the message type and department; if no applicable rule is configured, no masking is applied. This permission is separate from `'lhmailconv','mail_see_unhidden_email'`, which controls the display of email addresses in sender and recipient fields.

Although the permission description mentions sending, it does not bypass outgoing message content checks. When guardrails are enabled, replies and new emails matching an applicable outgoing email protection rule can be rejected even if the operator has this permission.

### Close and status change

The `Close` button and the status selector are shown only if the operator has write access to the ticket (and the ticket is not archived). Changing status is validated on the server as well - without write access the request is rejected.

Closing tickets the operator does **not** own is possible only from the mail list bulk action and requires:

> 'lhmailconv','close_all_conversation'

### Transfer ticket

The transfer modal has three tabs and each tab has its own permission:

* `Transfer to a user` and `Transfer to a department` require `'lhmailconv','allowtransfer'`.
* `Change owner` requires `'lhmailconv','changeowner'`.
* `Change department` requires `'lhmailconv','changedepartment'`.

If an operator has only one of these permissions, only the matching tab is displayed. The transfer itself is re-validated on the server.

### Merge

Merge requires read **and** write access to the destination ticket and to every source ticket. If the merged tickets belong to different departments, the operator also needs:

> 'lhmailconv','merge_cross_departments'

### Delete ticket

The delete icon is displayed only when the operator has write access to the ticket and:

> 'lhmailconv','delete_conversation'

The same permission protects the delete API endpoint, so hiding the button is not the only protection.

### Block sender

Blocking the sender of a ticket is controlled by its own mail permission - the chat blocking permission `'lhchat','allowblockusers'` is **not** used here:

> 'lhmailconv','block_sender'

Without this permission an operator cannot block the sender, even if they are the ticket owner.

The block link next to the sender e-mail is displayed when the operator has the permission above, **or** when the sender is already blocked - in that case the operator sees `Sender is blocked!` and can review who blocked the sender. Operators without the permission do not see the expiry/block form in the modal; the block action is re-validated on the server as well.

### Print and interactions history

Both the print link and the interactions history are available to every operator who can read the ticket; they have no dedicated permission. What an operator sees is limited instead:

* Print - sender/recipient addresses are masked unless the operator has `'lhmailconv','mail_see_unhidden_email'`. Message bodies may also be masked by guardrails without `'lhmailconv','see_sensitive_information'`.
* Interactions history - the `Debug` tab requires `'lhchat','chatdebug'` and the operator actions tab requires `'lhaudit','see_op_actions'`.

## Opening pending tickets

Opening a pending ticket that belongs to another operator or has no owner is limited by:

> 'lhmailconv','open_all'

> 'lhmailconv','open_unassigned_mail'

Without `'lhmailconv','open_all'` an operator cannot open pending tickets assigned to someone else, and without `'lhmailconv','open_unassigned_mail'` they cannot open unassigned ones.
