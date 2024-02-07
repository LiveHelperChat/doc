---
id: intro
title: Mail module introduction
sidebar_label: Introduction
---

Mail version fo Live Helper Chat can be found at this branch https://github.com/LiveHelperChat/livehelperchat/tree/mail-merge-ms-svelte This branch also features Svelte as dashboard engine.

Module is used by clients who have in one installation over 300 mailbox and thousands of mails imported per day.

Don't forget to setup cronjobs just.

## How to upgrade to mail version

* Make sure you have 8.x PHP version. Composer lock file is dedicated to php 8.1.1v version.

Execute following commands

```shell
git fetch origin
git checkout mail-merge-ms-svelte
composer install
php cron.php -s site_admin -c cron/util/update_database -p local
php cron.php -s site_admin -c cron/util/clear_cache
```

## Do I have to user mail module in order to use chat module?

No