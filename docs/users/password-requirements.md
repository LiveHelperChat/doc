---
id: password-requirements
title: Password requirements
---

## Introduction

You can force users to have password based on security requirements.

![](/img/user/password-requirements.jpg)

To have automatic workflow of `Disable user automatically if from last login passed X number of days` and `Force user logout if last login was X hours ago` please setup a login monitoring cronjob.

Should be run every hour

```shell script
php cron.php -s site_admin -c cron/login_monitoring
```

## Permissions

Required permissions

> 'lhuser','pswdsecurity'