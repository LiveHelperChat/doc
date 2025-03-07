---
id: anonymize
title: How to anonymize Live Helper Chat visitors Data?
sidebar_label: Anonymization
---

You can configure Live Helper Chat to hide visitor IPs or anonymize visitor and operator messages after a specified period.

To anonymize IP addresses, navigate to:
> "System configuration" -> "Live help Configuration" -> "Chat configuration" -> "Data protection"

Enable the `Do not track visitors IP` option. User location detection will still function, but the complete visitor IP address will not be logged. Only the first two octets of the IP address will be stored.

You can also anonymize visitor messages after a defined period. Specify the number of days after which messages should be anonymized. For this feature to work, you must set up a cron job to run daily.

```shell script
php cron.php -s site_admin -c cron/encrypt
```
