---
id: smtp
title: Mail settings
sidebar_label: Mail settings
---

## Introduction

These are the main mail settings. It is recommended to configure them after installation. You can find these settings at:

> System configuration -> Mail settings

![](/img/system/mail-settings-main.jpg) 

## E-mail Templates

You can modify e-mail templates in:

> System configuration -> E-mail templates

## FAQ

### How do I use Google or another SMTP server?

You can use Google's SMTP settings or those of another provider. A configuration example is shown in the screenshot. Additional information is provided below the image.

![](/img/system/mail-settings-smtp.jpg)

In general:

*   Host: `tls://smtp.gmail.com`
*   Port: 587
*   Username: Your Google email address
*   Password: Your Google password

If you encounter an "Authentication error" during configuration, you may need to create an application password. This is a security measure used by Google to prevent third-party applications from accessing your account.

*   [https://support.google.com/accounts/answer/185833?hl=en](https://support.google.com/accounts/answer/185833?hl=en)
*   [https://security.google.com/settings/security/apppasswords?pli=1](https://security.google.com/settings/security/apppasswords?pli=1) - Application passwords can be created here.
*   [https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854](https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854) - More information.

### Some e-mails are being sent from root@localhost. How can I change that?

You need to edit the mail templates. For example:

[http://demo.livehelperchat.com/site\_admin/abstract/list/EmailTemplate](http://demo.livehelperchat.com/site_admin/abstract/list/EmailTemplate)

Edit the "From e-mail" field and set the correct sender e-mail address.

## Permissions

The following permissions are required to configure SMTP/Mail settings:

`'lhsystem','configuresmtp'`

The following permissions are required to change e-mail templates:

`'lhsystem','changetemplates'`
