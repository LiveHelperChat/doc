---
id: performance
title: Performance tweaks for high load environment
sidebar_label: Performance tweaks
---

This article represents use case where monthly chats number is around 200K and messaegs number about 3M. I'll describe what changes were done to configuration and provider servers specs details. Single web server ir handling about 100Q/S. Peaks reaching 150 Q/S

### Servers specs

*   1 Web servers (nginx, php-fpm, redis)
    *   4 X Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
    *   5GB of memory
*   1 DB Server (MariaDB) (No slow queries in slow query log!)
    *   8 X Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
    *   8GB of memory, I wish I had more :D
*   1 ElasticSearch server

### General statistic

*   There is constantly around 16 operators online
*   Per month there is around 200K of chats
*   Around 3M messages per month

### Used extensions

*   php-resque for background jobs. 
    *   Indexing chats in background process
    *   Client related business logic works
*   Facebook messenger
*   Telegram
*   Antivirus scan for uploaded files
*   Elastic Search
    *   Because Mysql is slow for generating statitic we use elastic search in this part.

### Used features of Live Helper Chat

*   Automatic chat assignment to operators and load balancing between operators
*   Automatic chat archive
*   All elastic search features

### Configuration tweaks done to Live Helper Chat

*   Disabled for operators listing closed and unread chats
    *   With a lot of chat's naturally that fetch all closed chat's and sort them takes a lot of resources we these two lists were disabled. In chat configuration "List unread chats" and "List closed chats" is unchecked
*   Automatic auto assignment from visitors widgets were disabled. 
    *   In chat configuration "Disable live auto assign" was checked
*   Synchronization and sound settings
    *   How many seconds for a user to be considered as being online - 290
    *   Sync for new chats, interval in seconds - 1.1 I suggest to keep it bigger. But client wanted more live experience
    *   Check for messages from the operators, interval in seconds - 290
*   "Chat configuration" -> "Visitor activity" -> "Interval between chat status checks in seconds, 0 disabled." I suggest to keep original one values only.
*   Disabled online visitors listing for operator 
*   "Chat configuration" -> "Misc" -> "Home page tabs order" only dashboard is there
*   "Chat configuration" -> "Online tracking" -> "Cleanup should be done only using cronjob." - checked
*   Automatic chat archive is setup
    *   Automatic archiving - checked
    *   Archive older chat's than defined days - 90
    *   Create new archive If chat's number in last archive reaches defined number - 500000
*   Files maintenence and removement from file upload configuration window

### Running cronjobs

```
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 5;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 10;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 15;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 20;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 25;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 30;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 35;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 40;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 45;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 50;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * sleep 55;cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow > /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e elasticsearch -c cron/cron_1m > log_1m.txt /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/departament-availability > log_dep_availability.txt /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e elasticsearch -c cron/check_health > es_health.txt /dev/null 2>&1  
 */5 * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e elasticsearch -c cron/cron > log_5m.txt /dev/null 2>&1  
 * * * * * cd /home/lhc_web/extension/lhcphpresque/doc/resque.sh && ./resque.sh >> /dev/null 2>&1  
 8 */8 * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/archive > /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/notifications > /dev/null 2>&1  
 8 8 * * 0 cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/util/maintain_database > /dev/null 2>&1  
 40 7 * * * /bin/touch /home/lhc_web/runresque.lock > /dev/null 2>&1  
 10 */8 * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e elasticsearch -c cron/index_precreate >> precreate.txt /dev/null 2>&1  
 #### Notifications messages  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e fbmessenger -c cron/schedule_compaign > /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e fbmessenger -c cron/collect_recipients > /dev/null 2>&1  
 * * * * * cd /home/lhc_web && /usr/bin/php cron.php -s site_admin -e fbmessenger -c cron/send_notification > /dev/null 2>&1
```

### Challanges we had

*   Because of concurency we had some probelms with MySQL transactions and table lockins.
    *   Lesson learned - locking has to be done always by primary key to avoid problems in the future.
*   Auto assign misbehaved and operators were receiving more chat's than they should. 
    *   Lesson learned - auto assign has to work only from cronjob which works mutch better
*   If MySQL does not have enough memory you will hang all app, developer won't be able to help for that. Slow log is a must...
*   nginx + php-fpm servers mutch better. Migrated from apache. Apache was there then I come to project...
*   Because of lacking chat locking there was scenario then operators opens a chat and it shows another operator as owner...
    *   Lesson learned - use transactions and row lockings by primary keys.
*   There was so many small issues because of concurency it's hard to remember what was changed, but app is now stable with sutch load...

### Future

*   There is still some core tables missing archiving
*   Proper NodeJS integration to reduce server load
*   And many more things :)