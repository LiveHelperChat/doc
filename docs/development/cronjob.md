---
id: cronjob
title: How to setup Live Helper Chat cronjob?
---

## Default cronjob setup

LHC uses cronjob for background chats assignment and maintenence tasks.

```shell script
php cron.php -s site_admin -c cron/workflow
```

This cronjob does the following things

 * Automatic chat's transfer worflow
 * Executes unanswered chats workflow
 * Executes automatic chat's purging/closing
 * Executes roun robin workflow
 
 ## How to add cronjob in extension?
 
 Yes, extensions supports cronjobs. What you have to do is:
 
 ```shell script
php cron.php -s site_admin -e customstatus -c cron/customcron
```
  
Example file in github which will [executed](https://github.com/remdex/livehelperchat/blob/master/lhc_web/extension/customstatus/modules/lhcron/customcron.php).