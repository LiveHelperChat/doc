---
id: password-requirements
title: Password requirements
---

## Introduction

You can enforce password requirements for users to enhance security.

![](/img/user/password-requirements.jpg)

To enable the automatic workflows of "Disable user automatically if X days have passed since the last login" and "Force user logout if the last login was X hours ago," set up a login monitoring cron job.

This job should be run every hour:

```shell script
php cron.php -s site_admin -c cron/login_monitoring
```

## Permissions

The following permissions are required:

`lhuser`, `pswdsecurity`
