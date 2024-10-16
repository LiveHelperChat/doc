---
id: performance
title: Performance tweaks for high load environment
sidebar_label: Performance tweaks
---

This article represents use case where monthly chats number is around 200K and messaegs number about 3M. I'll describe what changes were done to configuration and provider servers specs details. Single web server ir handling about 100Q/S. Peaks reaching 150 Q/S

### Servers specs

*   1 Web servers (nginx, php-fpm, redis, NodeJS, Cronjobs, PHP-Resque)
    *   (4 threads) X Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
    *   5GB of memory
*   1 DB Server (MariaDB) (No slow queries in slow query log!)
    *   (8 threads) X Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
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
    *   With a lot of chat's naturally that fetch all closed chat's and sort them takes a lot of resources we these two lists were disabled. In chat configuration `List unread chats` and `List closed chats` is unchecked
*   Automatic auto assignment from visitors widgets were disabled. [workflow cronjob](development/cronjob.md#default-cronjob-setup)
    *   In chat configuration "Disable live auto assign" was checked
*   Synchronization and sound settings
    *   How many seconds for a user to be considered as being online - 290
    *   Sync for new chats, interval in seconds - 1.1 I suggest to keep it bigger. But client wanted more live experience
    *   Check for messages from the operators, interval in seconds - 290
*   "Chat configuration" -> "Visitor activity" -> "Interval between chat status checks in seconds, 0 disabled." I suggest to keep original one values only.
*   Disabled online visitors listing for operator.
  * We just disable online visitors widget for the operators by removing this permission. `'lhchat', 'use_onlineusers'`
*   "Chat configuration" -> "Misc" -> "Home page tabs order" only dashboard is there
*   "Chat configuration" -> "Online tracking" -> "Cleanup should be done only using cronjob." - checked. [workflow cronjob](development/cronjob.md#default-cronjob-setup)
*   Automatic chat archive is setup. [Archive cronjob](development/cronjob.md#chat-archive-cronjob-setup)
    *   Automatic archiving - checked
    *   Archive older chat's than defined days - 90
    *   Create new archive If chat's number in last archive reaches defined number - 500000
* Files maintenance and removement from file upload configuration window.
* Enable [lazy loading](chat/start-chat-form-settings.md#lazy-load-widget-content-widget-content-will-be-loaded-only-if-visitor-clicks-a-status-icon) for start chat form

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

### Challenges we had

*   Because of concurency we had some probelms with MySQL transactions and table lockins.
    *   Lesson learned - locking has to be done always by primary key to avoid problems in the future.
*   Auto assign misbehaved and operators were receiving more chat's than they should. 
    *   Lesson learned - auto assign has to work only from cronjob which works mutch better
*   If MySQL does not have enough memory you will hang all app, developer won't be able to help for that. Slow log is a must...
*   nginx + php-fpm servers mutch better. Migrated from apache. Apache was there then I come to project...
*   Because of lacking chat locking there was scenario then operators opens a chat and it shows another operator as owner...
    *   Lesson learned - use transactions and row lockings by primary keys.
*   There was so many small issues because of concurency it's hard to remember what was changed, but app is now stable with sutch load...

### Mysql/MariaDB configuration

These settings are for 24GB, 8 threads server.

```ini
[mysqld]
query_cache_limit=8M
query_cache_size=128M
query_cache_type=1
max_heap_table_size=64M
tmp_table_size=64M
interactive_timeout=20
wait_timeout=900
connect_timeout=60
thread_cache_size=128
key_buffer=128M
max_allowed_packet=16M
table_cache=8024
sort_buffer_size=4M
read_buffer_size=4M
max_connect_errors=10000
max_connections=10000

innodb_log_file_size = 256M
innodb_buffer_pool_size = 16GB
innodb_log_buffer_size=4M
innodb_thread_concurrency=8
innodb_flush_method=O_DIRECT
innodb_file_per_table=1
```

### Nginx configuration sample for main settings

```apacheconfig
sendfile            on;
tcp_nopush          on;
tcp_nodelay         on;
types_hash_max_size 2048;

server_tokens   off;

gzip            on;
gzip_static     on;
gzip_comp_level 1;
gzip_min_length 0;
gzip_types text/css image/x-icon image/bmp application/x-javascript application/javascript text/javascript application/json;
gzip_proxied        any;
gzip_http_version   1.1;
gzip_disable        "MSIE [1-6]\.";
gzip_vary           on;

keepalive_timeout  10 10;

client_max_body_size 128m;
client_body_buffer_size    128k;

client_header_buffer_size       128k;
large_client_header_buffers   4 64k;
server_names_hash_max_size 4112;
server_names_hash_bucket_size 128;

include             /etc/nginx/mime.types;
default_type        application/octet-stream;

map $http_user_agent $isbot_ua {
        default 0;
        ~*(GoogleBot|bingbot|YandexBot|mj12bot) 1;
}
map $isbot_ua $limit_bot {
        0       "";
        1       $binary_remote_addr;
}
limit_req_zone $limit_bot zone=bots:10m rate=1r/m;
limit_req zone=bots burst=2 nodelay;
```

### Future

*   There is still some core tables missing archiving
*   [NodeJS integration](https://github.com/LiveHelperChat/NodeJS-Helper) to reduce server load
*   And many more things :)