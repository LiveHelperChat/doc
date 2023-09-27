---
id: upgrading
title: Upgrading
---

Here is basic tutorial how to perform upgrades since 2.04 version. This version can update database automatically from any previous LHC version.

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
6. Disable [cache in settings.ini.php](debug.md#disabling-cache)
7. Log in to LHC again and go to `"System configuration" -> "Clear Cache" and click Clear Cache`
   1. You can also clear the cache by executing this command from the command line: `php cron.php -s site_admin -c cron/util/clear_cache`
8. Now you can re-enable the cache in your `settings.ini.php`
9. If you still encounter errors, then [Enable debug output](debug.md)

If you are updating from any older version, you can follow this pattern, which can also be applied to new versions:

1. [Download the most recent LHC version](http://livehelperchat.com/article/static/5) Overwrite the following folders `doc`,`ezcomponents`,`lib`,`modules`,`pos`,`translations`,`design` folders. Also, overwrite `index.php` and `cron.php` files with the new version.
2. Copy from doc/shell/upgrade.php file to the root folder of LHC.
3. In your browser, type chatfolder/upgrade.php. It will update the database to the most recent version and clear the cache automatically.
4. Delete upgrade.php from the root folder.

In all cases, I suggest making a backup.

*   [Old update instructions](https://livehelperchat.com/old-upgrading-instructions-335a.html)
*   [How to automate live helper chat updates?](https://livehelperchat.com/how-to-automate-live-helper-chat-updates-338a.html)

## Permissions

To be able to see `Update information` operator has to have

> 'lhsystem','performupdate'
