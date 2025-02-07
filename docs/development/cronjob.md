---
id: cronjob
title: How to setup Live Helper Chat cronjob?
sidebar_label: Cronjobs
---

:::tip
 * Make sure all cronjobs are executing from `lhc_web` folder. E.g
   * `cd /var/www/lhc_web && php cron.php -s site_admin -c cron/workflow`
 * Make sure cronjobs are executed under the same user as web server. E.g `www-data`
   * Also you can set proper user for cronjobs in `settings.ini.php` file at https://github.com/LiveHelperChat/livehelperchat/blob/4.52v/lhc_web/settings/settings.ini.default.php#L31-L32 E.g put `www-data` on both places.
:::

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
 * Auto Responder for third party services. WhatsApp, Facebook, MessageBird
 * Please note that the auto-responder functionality is designed to work for a maximum of 500 active/pending/bot chats. If there are more than 500 in total of active/bot/pending chats, it will only operate for the first 500.   

Should be run every minute or even more frequent if you want live chat auto assignment workflow to feel like live. See [performance tweaks](performance.md)

Shell script example to run workflow every 5 seconds

Cronjob example
```
* * * * * cd /home/lhc/cronjobs && ./workflow.sh >> /dev/null 2>&1
```

Shell script. Set your paths.

```shell script
#!/bin/bash
fileCron='/home/lhc/cronjobs/running-workflow'

for i in {1..12}
do
    if [ ! -f $fileCron ];
    then
      touch $fileCron;
      cd /home/lhc/lhc-official/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow >> workflow.log
      # You can comment out line below if you are not using transfer between departments workflow
      cd /home/lhc/lhc-official/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/transfer_workflow >> transfer_workflow.log
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

## Statistic reporting cronjob

This cronjob sends saved reports. Should be run every minute

```
* * * * * cd web_root_folder/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/report > /dev/null 2>&1
```

## Chat archive cronjob setup


```shell script
php cron.php -s site_admin -c cron/archive
```

This cronjob does automatic chat's archiving. 

If you accidentally archived to much files you can restore them by executing these queries. In this example we restore archive with number 1.

You must 

* Stop archiving cronjob before executing these queries.
* Delete related archive id from `lh_chat_archive_range` table. E.g `DELETE FROM lh_chat_archive_range WHERE id = 1;` 
* Modify archive policy so it does not archive restored chats.

```sql
INSERT INTO lh_group_chat SELECT * FROM lh_group_chat_1;
INSERT INTO lh_group_chat_member SELECT * FROM lh_group_chat_member_1;
INSERT INTO lh_chat_participant SELECT * FROM lh_chat_participant_1;
INSERT INTO lh_chat_action SELECT * FROM lh_chat_action_1;
INSERT INTO lh_abstract_subject_chat SELECT * FROM lh_abstract_subject_chat_1;
INSERT INTO lh_chat SELECT * FROM lh_chat_archive_1;
INSERT INTO lh_msg SELECT * FROM lh_chat_archive_msg_1;

TRUNCATE TABLE lh_abstract_subject_chat_1;
TRUNCATE TABLE lh_chat_archive_1;
TRUNCATE TABLE lh_chat_archive_msg_1;
TRUNCATE TABLE lh_group_chat_1;
TRUNCATE TABLE lh_group_chat_member_1;
TRUNCATE TABLE lh_chat_participant_1;
TRUNCATE TABLE lh_chat_action_1;
```





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

## Transfers between departments workflow

If you are using transfer between department workflow. You can setup this cronjob. So chat would be transferred to other department even if the visitor left the chat. By default, transfer happens only if visitor in the chat.

In order for this script being executed in chat configuration this option has to be enabled

```
Should cronjob run departments transfer workflow, even if user leaves a chat
```

Cronjob script

```
php cron.php -s site_admin -c cron/transfer_workflow
```

## Login monitoring

This cronjob monitors for users matching `Disable user automatically if from last login passed X number of days` and `Force user logout if last login was X hours ago`

Should be run every hour

```shell script
php cron.php -s site_admin -c cron/login_monitoring
```

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

## Views

Either you are using chats or elasticSearch extension they can have a saved `Views`

This command should be run every minute or so. Views also supports php-resque. Make sure you are executing `lhc_views_update` job queue.

```
php cron.php -s site_admin -c cron/update_views
```

If a view takes more than 1 seconds to update. It will be logged in audit log with these parameters

* `source` - View
* `category` - slow_view

So you can find afterward them.

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

## Statistic cronjob

This cronjob calculates a statistic for two attributes of department

* `avg_chat_duration` - average chat duration. Can be used in continous webhooks. This cronjob data is used only in [continuous webhooks](development/webhooks.md#how-to-setup-a-continuous-hook-event).
* `avg_wait_time` - calculates average chat time. This value is used in setting pending text to [average wait time](theme/theme.md#how-to-show-average-wait-time-instead-of-a-number-in-the-queue).

For what period this data is calculated depends on your settings in `Live help configuration (tab) -> Chat (section) -> Statistic -> Configuration (tab)`. Frequency of cronjob should depend on your use case. You can calculate both values if you run. I would recommend just calculate the part you want.

```shell
php cron.php -s site_admin -c cron/stats/department
# Equal to
php cron.php -s site_admin -c cron/stats/department -p avg_chat_duration,avg_wait_time
```

Average chat duration. This one you can run less often.
```shell
php cron.php -s site_admin -c cron/stats/department -p avg_chat_duration
```

Let's run it every 12 hours

```
15 */12 * * * www-data cd /code && php cron.php -s site_admin -c cron/stats/department -p avg_chat_duration >> /dev/null 2>&1
```

Average wait time. This cronjob you can run more frequently. Depends on your requirements.
```shell
php cron.php -s site_admin -c cron/stats/department -p avg_wait_time
```

Let's run it every 5 minutes

```
*/5 * * * * www-data cd /code && php cron.php -s site_admin -c cron/stats/department -p avg_wait_time >> /dev/null 2>&1
```

## Continuous webhooks cronjob

This cronjob should be running every 20 seconds. For simplified version you can run it every minute. This is a required cronjob for a [continuous webhooks](development/webhooks.md#how-to-setup-a-continuous-hook-event)

```
php cron.php -s site_admin -c cron/webhook
```

Crontab command example. You should change `/scripts` and `/code` directories according to your environment.

```
* * * * * www-data cd /scripts && ./webhook.sh >> /dev/null 2>&1
```

Shell script example running every 20 seconds

```shell script
#!/bin/sh

fileCronHook='/code/running-webhook'

for i in {1..3}
do
    if [ ! -f $fileCronHook ];
    then
      touch $fileCronHook;
      cd /code && php cron.php -s site_admin -c cron/webhook >> cache/webhook.log
      echo "$(tail -1000 cache/webhook.log)" > cache/webhook.log
      rm -f $fileCronHook;
    else
      if [ `stat --format=%Y $fileCronHook` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCronHook;
      fi
      echo "Already running"
    fi
    sleep 20
done
```

## Campaign mailing cronjob

This cronjob is responsible for mailing campaigns. Should be run every minute or so.

```shell
php cron.php -s site_admin -c cron/mailing
```

## Mail syncing cronjobs

This cronjob is responsible for mail fetching. Should be run every minute or so.

```shell
php cron.php -s site_admin -c cron/syncmail
```

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

## Boilerplate cronjobs if you have mail version of live helper chat and you are using php-resque

You have to check each shell script for the correct path. Also make sure you have run from `lhc_web`folder run.

> `composer install`

 * https://github.com/LiveHelperChat/lhc-php-resque make sure you enable worker as bellow in main `settings.ini.php` file
```php
'webhooks' =>
array (
'enabled' => true,
'worker' => 'resque'//'http',
),
```
 * https://doc.livehelperchat.com/docs/node-js

```cronexp
40 7 * * * /usr/bin/touch /var/www/git/cronjobs/runresque.lock > /dev/null 2>&1
* * * * * cd /var/www/git/cronjobs && ./resque.sh >> /dev/null 2>&1
* * * * * cd /var/www/git/cronjobs && ./workflow.sh >> /dev/null 2>&1
* * * * * cd /var/www/git/cronjobs && ./transfer.sh >> /dev/null 2>&1
* * * * * cd /var/www/git/cronjobs && ./webhook.sh >> /dev/null 2>&1
* 5 * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/archive >> /dev/null 2>&1
* 6 * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/encrypt >> /dev/null 2>&1
* * * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/report >> /dev/null 2>&1
* 7 * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/util/maintain_files >> /dev/null 2>&1
  15 */12 * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/stats/department >> /dev/null 2>&1
* * * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/mail/auto_close >> /dev/null 2>&1
*/15 * * * * cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/mail/monitor_mailbox >> /dev/null 2>&1
```

`/var/www/git/cronjobs/phpresque.sh`

```shell
#!/bin/sh
# live site cronjobs

echo "Running live site cronjobs"

cd /var/www/git/livehelperchat/lhc_web
REDIS_BACKEND=127.0.0.1:6379 INTERVAL=1 REDIS_BACKEND_DB=1 COUNT=4 VERBOSE=0 QUEUE='*' /usr/bin/php resque.php 2>&1
```

`/var/www/git/cronjobs/resque.sh`

```shell
#!/bin/sh

## exit immediately if uptime is lower than 120 seconds:
uptime_secs=$(cat /proc/uptime | /bin/cut -d"." -f1)
if (( ${uptime_secs} < 180 )); then
    echo "uptime lower than 180 seconds. Exit."
    exit 1
fi

fileCron='/var/www/git/cronjobs/.enable-cron'

if [ -f $fileCron ] && [ -f /var/www/git/livehelperchat/lhc_web/settings/settings.ini.php ];
then

numberProcess=$(ps aux | grep "[0-9] resque-1.2: *" | awk '{print $2}' | wc -l)

if (( $numberProcess > 4 ));
then
  echo "To many running process..."
  exit 1
fi

fileLock="/var/www/git/cronjobs/runresque.lock"

if [ -f $fileLock ];
then
    kill -9 $(ps aux | grep "[0-9] resque-1.2: *" | awk '{print $2}')
    cd /var/www/git/cronjobs && ./phpresque.sh
    rm -f $fileLock;
else
    PIDS=`ps aux | grep '[0-9] resque-1.2: *'`
    if [ -z "$PIDS" ]; then
       echo "Starting resque"
       cd /var/www/git/cronjobs && ./phpresque.sh
    fi
fi

fi
```

`/var/www/git/cronjobs/transfer.sh`

```shell
#!/bin/sh
fileCron='/tmp/running-workflow-transfer'

for i in {1..30}
do
    if [ ! -f $fileCron ];
    then
      touch $fileCron;
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/transfer_workflow >> cache/transfer.log
      echo "$(tail -1000 cache/transfer.log)" > cache/transfer.log
      rm -f $fileCron;
    else
      if [ `stat --format=%Y $fileCron` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCron;
      fi
      echo "Already running"
    fi
    sleep 2
done
```

`/var/www/git/cronjobs/webhook.sh`

```shell
#!/bin/sh

fileCronHook='/tmp/running-webhook'

for i in {1..3}
do
    if [ ! -f $fileCronHook ];
    then
      touch $fileCronHook;
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/webhook >> cache/webhook.log
      echo "$(tail -1000 cache/webhook.log)" > cache/webhook.log
      rm -f $fileCronHook;
    else
      if [ `stat --format=%Y $fileCronHook` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCronHook;
      fi
      echo "Already running"
    fi
    sleep 20
done
```

`/var/www/git/cronjobs/workflow.sh`

```shell
#!/bin/sh
fileCron='/tmp/running-workflow'

for i in {1..12}
do
    if [ ! -f $fileCron ];
    then
      touch $fileCron;
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow >> cache/workflow.log
      # Have in mind if you are not using worker resque you have to have separate cronjob for bellow command and run it every minute
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/syncmail >> cache/workflow.log
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/update_views >> cache/workflow.log
      cd /var/www/git/livehelperchat/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/mailing >> cache/workflow.log
      echo "$(tail -1000 cache/workflow.log)" > cache/workflow.log
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