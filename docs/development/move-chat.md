---
id: move-chat
title: How to Move a Chat from One Location to Another
sidebar_label: Moving Chat
---

## Steps

This tutorial explains how to move a Live Helper Chat (LHC) instance from one location to another.

1.  **Dump/Export the database:** Use a database tool such as phpMyAdmin to export the database.
2.  **Transfer the chat folder:** Move the chat folder from the old location to the new location.
3.  **Import the database:** Import the database into the new server.
4.  **Disable the cache:** Modify the `settings/settings.ini.php` file to disable caching.
```php
'templatecache' => false,
'templatecompile' => false,
'modulecompile' => false
```
5.  **Update database settings:** Update the database settings in the `settings/settings.ini.php` file.
```php
'db' =>
    array (
      'host' => '<host>',
      'user' => '<username>',
      'password' => '<password>',
      'database' => '<database>'
```
6.  **Ensure the cache folder is writable.**
7.  **Clear the cache:** Clear the cache in the back office.
8.  **Enable caching:** Re-enable caching by setting the values in step 4 back to `true`.

## Should I export the `lh_chat_online_user` footprint table as well?

No, it is not necessary. The table will be populated again. You will only lose the users' browsing paths.
