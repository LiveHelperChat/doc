---
id: upgrading
title: Upgrading
---

Here is basic tutorial how to perform upgrades since 2.04 version. This version can update database automatically from any previous LHC version.

1.  Read new version announcement article for any possible changes in settings/settings.ini.php. If article does not mention anything you do not have to do anything.
2.  Got to "System" -> "Update information" -> and see does LHC finds any differences in database. If it does just click update database. It can be that you won't see differences if your server does not allow making request to remote URL's. In that case follow this 
    * [Updating database from local definition](system/command.md#updates-live-helper-chat-database-directly-from-console)
3.  Logout from LHC
4.  [Download most recent LHC version.](http://livehelperchat.com/article/static/5) Overwrite doc,ezcomponents,lib,modules,pos,translations,design folders.
5.  Disable [cache in settings.ini.php](debug.md#disabling-cache)
6.  Login to LHC again and go to `"System configuration" -> "Clear Cache" and click Clear Cache`
7.  Now you can enable cache again in your settings.ini.php

Also if you are updating from any older version you can foolow this pattern, you can do this also for new versions.

1.  [Download most recent LHC version.](http://livehelperchat.com/article/static/5) Overwrite doc,ezcomponents,lib,modules,pos,translations,design folders.
2.  Copy from doc/shell/upgrade.php file to root folder of LHC
3.  In your browser type chatfolder/upgrade.php, it will update database to the most recent version and clear cache automatically
4.  Delete upgrade.php from root folder

In all cases I suggest make backup.

*   [Old update instruction](https://livehelperchat.com/old-upgrading-instructions-335a.html)
*   [How to automate live helper chat updates?](https://livehelperchat.com/how-to-automate-live-helper-chat-updates-338a.html)

## Permissions

To be able to see `Update information` operator has to have

> 'lhsystem','performupdate'