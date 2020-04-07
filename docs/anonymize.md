---
id: anonymize
title: How to anonymize Live Helper Chat visitors Data?
sidebar_label: Anonymization
---

You can configure Live Helper Chat to hide vistior IP or anonymize visitors or operators messages after certain amount of time.

To anonymize IP you can go to 
> "System configuration" -> "Live help Configuration" -> "Chat configuration" .> "Data protection" 

Check `Do not track visitors IP` user location detection still will work, but visitor IP won't be logged. Just first two numbers will be logged.

You can anonymize visitors messages after certain amount of time. Enter after how many days messages should be anonymized. For it to work you have to setup cronjob to be run every day.

```shell script
php cron.php -s site_admin -c cron/encrypt
```