---
id: system-commands
title: Useful console commands
sidebar_label: Commands
---

Here is all console commands you can execute besides [cronjobs](development/cronjob.md).

### Clear cache

```
php cron.php -s site_admin -c cron/util/clear_cache
```

### Updates Live Helper Chat database directly from console

You might not see differences compared to a new Live Helper if your server can't make request to remote URL. In that case you can update database by executing this shell command from `lhc_web` folder. In that case makes sense update files first just. If Live Helper Chat won't be able to download schema from github it will try local definition.

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
