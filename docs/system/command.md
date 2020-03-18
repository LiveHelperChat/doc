---
id: system-commands
title: Usefull console commands
sidebar_label: Commands
---

Here is all console commands you can execute besides [cronjobs](development/cronjob.md).

### Clear cache

```
php cron.php -s site_admin -c cron/util/clear_cache
```

### Updates Live Helper Chat database directly from console

```
php cron.php -s site_admin -c cron/util/update_database
```

### Test antivirus installation

```
php cron.php -s site_admin -c cron/util/test_antivirus -p <path_to_file>
```

### Generate translation file

This command I run every time I make some development.

```
php cron.php -s site_admin -c cron/util/generate_translation_file
```