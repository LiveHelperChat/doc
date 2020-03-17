---
id: smtp
title: How to use custom SMTP
sidebar_label: SMTP
---

## How to use Google SMTP?

You can use google SMTP settings. There is demo configuration screenshot. Also I have provided some additional info below this image.

![](https://livehelperchat.com/var/media/images/smtp(1).png)

In general:

*   host: tls://smtp.google.com
*   port: 587
*   Username: Your google email address
*   Password: Your google password

If during configuraiton you get error like Authentification error, you may need to create an application password. It's security policy used by google to avoid third party applications accesing your account. 

[https://support.google.com/accounts/answer/185833?hl=en](https://support.google.com/accounts/answer/185833?hl=en)  
https://security.google.com/settings/security/apppasswords?pli=1 - application password can be created there  
[https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854](https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854) - a little bit more information


## Some of the e-mails comes from root@localhost, where can I change that?

You have to edit mail templates. E.g
http://demo.livehelperchat.com/site_admin/abstract/list/EmailTemplate

Edit "From e-mail" and set proper sender e-mail.