---
id: performance
title: Performance Tweaks for High-Load Environments
sidebar_label: Performance Tweaks
---

This article describes a use case involving approximately 200,000 monthly chats and 3 million messages. It details the configuration changes and server specifications used to handle this load. A single web server handles approximately 100 queries per second (Q/S), with peaks reaching 150 Q/S.

### Server Specifications

*   1 Web server (nginx, php-fpm, redis, NodeJS, Cronjobs, PHP-Resque)
    *   4 x Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz (4 threads)
    *   5GB of memory
*   1 Database server (MariaDB) (No slow queries in the slow query log!)
    *   8 x Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz (8 threads)
    *   8GB of memory (more is recommended)
*   1 Elasticsearch server

### General Statistics

*   Approximately 16 operators are online at any given time.
*   There are approximately 200,000 chats per month.
*   There are approximately 3 million messages per month.

### Used Extensions

*   php-resque for background jobs:
    *   Indexing chats in a background process
    *   Handling client-related business logic
*   Facebook Messenger
*   Telegram
*   Antivirus scan for uploaded files
*   Elasticsearch:
    *   Used for generating statistics, as MySQL is slower in this area.

### Used Features of Live Helper Chat

*   Automatic chat assignment to operators and load balancing between operators
*   Automatic chat archiving
*   All Elasticsearch features

### Configuration Tweaks for Live Helper Chat

*   Disabled listing of closed and unread chats for operators:
    *   Fetching and sorting all closed chats consumes significant resources. Therefore, these two lists were disabled. In the chat configuration, the options `List unread chats` and `List closed chats` are unchecked.
*   Automatic auto-assignment from visitor widgets was disabled. [workflow cronjob](development/cronjob.md#default-cronjob-setup)
    *   In the chat configuration, "Disable live auto assign" was checked.
*   Synchronization and sound settings:
    *   The duration, in seconds, for a user to be considered online is set to 290.
    *   The synchronization interval for new chats is 1.1 seconds (a larger value is recommended, but the client desired a more real-time experience).
    *   The interval to check for messages from operators is 290 seconds.
*   "Chat configuration" -> "Visitor activity" -> "Interval between chat status checks in seconds, 0 disabled." It is recommended to keep the original values.
*   Disabled online visitor listing for operators:
    *   The online visitors widget was disabled for operators by removing the `'lhchat', 'use_onlineusers'` permission.
*   "Chat configuration" -> "Misc" -> "Home page tabs order" - only the dashboard is enabled.
*   "Chat configuration" -> "Online tracking" -> "Cleanup should be done only using cronjob." - checked. [workflow cronjob](development/cronjob.md#default-cronjob-setup)
*   Automatic chat archiving is set up. [Archive cronjob](development/cronjob.md#chat-archive-cronjob-setup)
    *   Automatic archiving - checked
    *   Archive chats older than 90 days.
    *   Create a new archive if the number of chats in the last archive reaches 500,000.
*   Files maintenance and removal from the file upload configuration window.
*   Enabled [lazy loading](chat/start-chat-form-settings.md#lazy-load-widget-content-widget-content-will-be-loaded-only-if-visitor-clicks-a-status-icon) for the start chat form.

### Running Cronjobs

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

### Challenges We Faced

*   Due to concurrency, we encountered problems with MySQL transactions and table locking.
    *   Lesson learned: Always lock by primary key to avoid future issues.
*   Automatic assignment malfunctioned, causing operators to receive more chats than intended.
    *   Lesson learned: Auto-assignment should only run from a cronjob, which functions more reliably.
*   Insufficient memory for MySQL can halt the entire application, and developers cannot resolve this. A slow query log is essential.
*   nginx + php-fpm servers are significantly better than Apache. We migrated from Apache after I joined the project.
*   Due to a lack of chat locking, there were instances where an operator would open a chat and see another operator listed as the owner.
    *   Lesson learned: Use transactions and row locking by primary keys.
*   We encountered numerous minor issues due to concurrency. It's difficult to recall all the changes made, but the application is now stable under the specified load.

### MySQL/MariaDB Configuration

These settings are for a server with 24GB of RAM and 8 threads.

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

### Sample Nginx Configuration for Main Settings

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

### Future Improvements

*   Archiving is still missing for some core tables.
*   [NodeJS integration](https://github.com/LiveHelperChat/NodeJS-Helper) to reduce server load.
*   And many more potential enhancements.
