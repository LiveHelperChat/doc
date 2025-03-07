---
id: system-commands
title: Useful Console Commands
sidebar_label: Commands
---

Here are console commands you can execute, in addition to [cron jobs](development/cronjob.md).

### Clear Cache

```
php cron.php -s site_admin -c cron/util/clear_cache
```

### Update Live Helper Chat Database Directly from the Console

You might not see any differences compared to a new Live Helper Chat installation if your server can't make requests to a remote URL. In that case, you can update the database by executing this shell command from the `lhc_web` folder. It makes sense to update the files first. If Live Helper Chat can't download the schema from GitHub, it will try a local definition.

```
php cron.php -s site_admin -c cron/util/update_database
```

### Test Antivirus Installation

```
php cron.php -s site_admin -c cron/util/test_antivirus -p <path_to_file>
```

### Generate Translation File

I run this command every time I make a development change.

```
php cron.php -s site_admin -c cron/util/generate_translation_file
```
