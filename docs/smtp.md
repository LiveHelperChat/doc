---
id: smtp
title: Mail settings
sidebar_label: Mail settings
---

## Introduction

Main mail settings. I suggest after installation set them to your settings. These settings can be found at

> System configuration -> Mail settings

![](/img/system/mail-settings-main.jpg) 

## E-mail templates

E-mail templates can be changed in 

> System configuration -> E-mail templates

## FAQ

### How to use Google or any other SMTP server?

You can use google SMTP settings. There is demo configuration screenshot. Also I have provided some additional info below this image.

![](/img/system/mail-settings-smtp.jpg) 

In general:

* host: tls://smtp.google.com
* port: 587
* Username: Your google email address
* Password: Your google password

If during configuraiton you get error like Authentification error, you may need to create an application password. It's security policy used by google to avoid third party applications accesing your account. 

[https://support.google.com/accounts/answer/185833?hl=en](https://support.google.com/accounts/answer/185833?hl=en)  
https://security.google.com/settings/security/apppasswords?pli=1 - application password can be created there  
[https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854](https://www.lifewire.com/what-are-the-gmail-smtp-settings-1170854) - a little bit more information

### Some of the e-mails comes from root@localhost, where can I change that?

You have to edit mail templates. E.g
http://demo.livehelperchat.com/site_admin/abstract/list/EmailTemplate

Edit "From e-mail" and set proper sender e-mail.

## Permissions

Required permissions to configure SMTP/Mail settings
> 'lhsystem','configuresmtp'

Required permissions to change e-mail templates

 >'lhsystem','changetemplates'