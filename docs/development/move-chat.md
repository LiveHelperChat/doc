---
id: move-chat
title: How to move chat from one location to another?
sidebar_label: Moving chat
---

## Steps
Small tutorial how to move from one location to another location LHC instance.

* Dump/Export database. For example form phpmyadmin or any other database tool.
* Transfer chat folder from old location to new location.
* Import database to new server
* Disable cache 
```php
'templatecache' => false,
'templatecompile' => false,
'modulecompile' => false
```
* Update database settings in settings/settings.ini.php file
```php
'db' =>
    array (
      'host' => '<host>',
      'user' => '<username>',
      'password' => '<password>,
      'database' => '<database>'
```
 * Make sure cache folder is writable
 * Clear cache in back offce
 * Enable caching by setting previous values to true

# Should I export table lh_chat_online_user footprint as well?

No it's not necessarily. It will fill up again just you won't have users browsing path.