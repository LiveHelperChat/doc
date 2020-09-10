---
id: cronjob
title: How to setup Live Helper Chat cronjob?
sidebar_label: Cronjobs
---

## Default cronjob setup

LHC uses cronjob for background chats assignment and maintenence tasks.

```shell script
php cron.php -s site_admin -c cron/workflow
```

This cronjob does the following things.

 * Automatic chat's transfer workflow
 * Executes unanswered chats workflow
 * Executes automatic chat's purging/closing
 * Executes round robin workflow

Should be run every minute or even more frequent if you want live chat auto assignment workflow to feel like live. See [performance tweaks](performance.md)

Shell script example to run workflow every 5 seconds

Cronjob example
```
* * * * * cd /home/lhc/cronjobs && ./workflow.sh >> /dev/null 2>&1
```

Shell script. Set your paths.

```shell script
#!/bin/sh
fileCron='/home/lhc/cronjobs/running-workflow'

for i in {1..12}
do
    if [ ! -f $fileCron ];
    then
      touch $fileCron;
      cd /home/lhc/lhc-official/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow >> workflow.log
      echo "$(tail -1000 workflow.log)" > workflow.log
      rm -f $fileCron;
    else
      if [ `stat --format=%Y $fileCron` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCron;
      fi
      echo "Already running"
    fi
    sleep 5
done
```

## Chat archive cronjob setup



```shell script
php cron.php -s site_admin -c cron/archive
```

This cronjob does automatic chat's archiving

## Department availability cronjob

This cronjob tracks department availability. It's collected data is used to generate department availability statistic data.

```
php cron.php -s site_admin -c cron/departament-availability
```

Should be run every minute.

## Chats anonymization

If you have setup chat's [anonymization](anonymize.md) you should run this cronjob.

```
php cron.php -s site_admin -c cron/encrypt
```

Should be run every 12 hours or so.

## Notifications

```
php cron.php -s site_admin -c cron/notifications
```

1. Send notification to those chat's where visitor has unread message from operator.
2. Last sync stopped 4 - 5 minutes. (It sends last unread message. Like we don't know what message was seen by visitor exactly and which not)
3. We should log within chat. Last notified message id. Also mark chat as notification was send
4. If operator sends another message. We reset flag about notification. So cronjobs sends notification only for new messages. Since we have logged it.
5. Notification should be send for all chats. Not only active one where visitor did not read. But also for closed one.

Should be run every 5 minutes or so.

## Files maintenance

It automatically deletes files based on [files maintenance](chat/files.md#files-maintenance) settings.

```
php cron.php -s site_admin -c cron/util/maintain_files
```

Should be run every few hours or so.

## Database maintenance

It makes sense time from tim run this script to optimize users departments table. As this table get's a lot of updates.

```
php cron.php -s site_admin -c cron/util/maintain_database
```

Should be run every few hours or so.

## Static cache

If you are using load balancers. E.g AWS Load Balancer it can happen that one instance is clearing a cache but browser makes request to another instance so it happens that static file CSS/JS is not found.

This will generate new static cache without removing old files. Means you won't override any of existing files so not github conflicts.
```
php cron.php -s site_admin -c cron/util/generate_css
```

This will generate new static cache and remove all files from present static cache folders. 
```shell script
php cron.php -s site_admin -c cron/util/generate_css -p 1
```

To gain even more performance you can run gulp command to compress JS files.

```
gulp js-static
```

In all cases you will have to do before publishing to your fork.

```shell script
git add .
git commit -a -m "Static cache"
git push origin master 
```



## How to add cronjob in extension?
 
Yes, extensions supports cronjobs. What you have to do is:
 
```
php cron.php -s site_admin -e customstatus -c cron/customcron
```

Example file in github which will [executed](https://github.com/remdex/livehelperchat/blob/master/lhc_web/extension/customstatus/modules/lhcron/customcron.php).
