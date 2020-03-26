---
id: users-login-options
title: Re-captcha
---

## Introduction

You can force more security by enabling Re-captcha. For Re-captcha to work you have to be using V3

https://www.google.com/recaptcha/admin#v3signup

![](/img/user/re-captcha.jpg)

If you want you can force to have [stickier password requirements](password-requirements.md) for operators.

## After enabling google re-captcha I can't login anymore?
If this happens you have to login to your database manager and execute this query

```sql
UPDATE `lh_chat_config` SET `value` = 'a:4:{i:0;b:0;s:8:"site_key";s:0:"";s:10:"secret_key";s:0:"";s:7:"enabled";i:0;}' WHERE `identifier` = 'recaptcha_data'
```

If you still cannot login [disable cache](debug.md#disabling-cache)

## Permissions

Required permission to configure Re-captcha

> 'lhsystem','configurerecaptcha'