---
id: upgrading
title: Upgrading
---

Here is basic tutorial how to perform upgrades since 2.04 version. This version can update database automatically from any previous LHC version. Since 3.30v we require `composer` dependencies to be installed if you are installing from source code.

If you are upgrading from older version to any version 3.30v and higher you have to install composer dependencies.
```
cd lhc_web
composer.phar install
```

If you don't have `composer.phar` you can download it from https://getcomposer.org/download/

* You can download version with dependencies included https://github.com/LiveHelperChat/livehelperchat/releases look for newest file name `*.**v-with-dependencies.tgz` **8.2 PHP** version is required.

It has a folder `lib/vendor` in it so you don't need to install composer thing yourself. Copy it to `lib/vendor`

1. Read the new version announcement article for any possible changes in settings/settings.ini.php. If the article does not mention anything, you do not have to do anything.
2. Go to "System" -> "Update information" and check if LHC finds any differences in the database. If it does, click on "Update database." You may not see differences if your server does not allow making requests to remote URLs. 
      * You need to run these commands from the root folder (where index.php is located)
      * `php cron.php -s site_admin -c cron/util/update_database` tries to update the database from a remote URL. If this does not work, run:
      * `php cron.php -s site_admin -c cron/util/update_database -p local` after replacing all files.
3. If you accidentally override files before updating the database, you can:
   1. [Update the database from the local definition](system/command.md#updates-live-helper-chat-database-directly-from-console)
   2. Copy `doc/shell/upgrade.php`  to the root folder, the same folder where `index.php` exists.
      1. In your browser, enter `https://example.com/upgrade.php` to update the database directly. 
4. Log out from LHC.
5. [Download the most recent LHC version](http://livehelperchat.com/article/static/5) Overwrite `doc`,`ezcomponents`,`lib`,`modules`,`pos`,`translations`,`design` folders. Also, overwrite `index.php` and `cron.php` files with the new version.
   1. https://github.com/remdex/livehelperchat/archive/master.zip - latest master branch zip without composer denpendencies
   2. https://github.com/LiveHelperChat/livehelperchat/releases - latest release with composer dependencies.
6. Overwrite `composer.json` and `composer.lock` files and run `composer.phar install` or `composer.phar update` command.
7. Disable [cache in settings.ini.php](debug.md#disabling-cache)
8. Log in to LHC again and go to `"System configuration" -> "Clear Cache" and click Clear Cache`
   1. You can also clear the cache by executing this command from the command line: `php cron.php -s site_admin -c cron/util/clear_cache`
9. Now you can re-enable the cache in your `settings.ini.php`
10. If you still encounter errors, then [Enable debug output](debug.md)

If you are updating from any older version, you can follow this pattern, which can also be applied to new versions:

1. [Download the most recent LHC version](http://livehelperchat.com/article/static/5) Overwrite the following folders `doc`,`ezcomponents`,`lib`,`modules`,`pos`,`translations`,`design` folders. Also, overwrite `index.php` and `cron.php` files with the new version.
2. Install composer dependencies as described above. You can just download most recent https://github.com/LiveHelperChat/livehelperchat/releases `*.**v-with-dependencies.tgz` file and copy `lhc_web/lib/vendor` to your existing installation. This folder should be non existing if you are upgrading from older version than 4.29v
3. Copy from doc/shell/upgrade.php file to the root folder of LHC.
4. In your browser, type chatfolder/upgrade.php. It will update the database to the most recent version and clear the cache automatically.
5. Delete upgrade.php from the root folder.

In all cases, I suggest making a backup.

*   [Old update instructions](https://livehelperchat.com/old-upgrading-instructions-335a.html)
*   [How to automate live helper chat updates?](https://livehelperchat.com/how-to-automate-live-helper-chat-updates-338a.html)

## How to make PHP 8.1 version compatible?

You will loose facebook messenger compatibility.

* Modify `lhc_web/composer.json` file and 
  * Change `"php": ">=8.2"` to `"php": ">=8.1"
  * Remove 

```
    "tgallice/fb-messenger-sdk": "dev-master#47498e9926df01f2633835ff3ffb310f88ac444f",
    "symfony/event-dispatcher": "^7.1",
```

* Execute `composer.phar update`

## Permissions

To be able to see `Update information` operator has to have

> 'lhsystem','performupdate'
