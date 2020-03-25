---
id: anonymize
title: How to anonymize Live Helper Chat visitors Data?
sidebar_label: Anonymization
---

You can configure Live Helper Chat to hide vistior IP or anonymize visitors or operators messages after certain amount of time.

1. To anonymize IP you can go to "System -> Chat Configuration -> Data protection" and just check "Do not track visitors IP" user location detection still will work. But visitor IP won't be logged. Just first two numbers will be logged.
2. Also you can anonymize visitors messages after certain amount of time. Just enter after how many days messages should be anonymized. For to work you have to setup cronjob to be run every day.

```shell script
php cron.php -s site_admin -c cron/encrypt
```