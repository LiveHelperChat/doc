---
id: upgrading
title: Upgrading
---

This guide explains how to upgrade Live Helper Chat (LHC) from version 2.04 onwards. LHC can automatically update the database from any previous version. Since version 3.30, installing from source requires [Composer](https://getcomposer.org/) dependencies.

### Prerequisites

*   **Composer:** Required for source installations (version 3.30+). If you don't have it, download `composer.phar` from [https://getcomposer.org/download/](https://getcomposer.org/download/).
*   **PHP 8.2 (Recommended):** For the latest version with dependencies, download the `*.v-with-dependencies.tgz` file from [https://github.com/LiveHelperChat/livehelperchat/releases](https://github.com/LiveHelperChat/livehelperchat/releases). This includes the `lib/vendor` folder, so you don't need to install Composer separately. Extract the contents to `lib/vendor`.

### Upgrade Steps

1.  **Check Announcement:** Review the announcement for the new version to identify any required changes in `settings/settings.ini.php`.
2.  **Update Database:**
    *   Go to "System" -> "Update information" to check for database differences. If any are found, click "Update database."
    *   If the web interface is inaccessible, run the following commands from the root folder:
        *   `php cron.php -s site_admin -c cron/util/update_database` (Updates from the remote URL.)
        *   If the above command fails, use: `php cron.php -s site_admin -c cron/util/update_database -p local` (Run after replacing files).
    *   **Manual Database Update (If Files Were Overwritten):**
        1.  [Update the database from the local definition](system/command.md#updates-live-helper-chat-database-directly-from-console).
        2.  Alternatively, copy `doc/shell/upgrade.php` to the root folder and access it through your browser (e.g., `https://example.com/upgrade.php`).
3.  **Logout:** Log out of LHC.
4.  **Replace Files:**
    *   [Download the latest LHC version](http://livehelperchat.com/article/static/5).
    *   Overwrite the following folders: `doc`, `ezcomponents`, `lib`, `modules`, `pos`, `translations`, and `design`.
    *   Also, overwrite `index.php` and `cron.php`.
    *   **Downloads:**
        1.  [https://github.com/remdex/livehelperchat/archive/master.zip](https://github.com/remdex/livehelperchat/archive/master.zip) (Latest master branch without Composer dependencies.)
        2.  [https://github.com/LiveHelperChat/livehelperchat/releases](https://github.com/LiveHelperChat/livehelperchat/releases) (Latest release with Composer dependencies.)
5.  **Update Composer Dependencies (If Applicable):**
    *   Overwrite `composer.json` and `composer.lock`.
    *   Run `composer install` or `composer update`.
6.  **Disable Cache:** Disable the cache in `settings.ini.php` (refer to [debug.md#disabling-cache](debug.md#disabling-cache)).
7.  **Clear Cache:**
    *   Log back in and go to "System configuration" -> "Clear Cache," then click "Clear Cache."
    *   Alternatively, run `php cron.php -s site_admin -c cron/util/clear_cache` from the command line.
8.  **Re-enable Cache:** Re-enable the cache in `settings.ini.php`.
9.  **Troubleshooting:** If errors persist, [enable debug output](debug.md).

### Upgrading from Older Versions

For older versions, follow these steps:

1.  **Replace Files:** As described in step 4 above.
2.  **Install Composer Dependencies:** As described in step 5 above, or download the `*.v-with-dependencies.tgz` file and copy `lhc_web/lib/vendor` to your installation.
3.  **Run Upgrade Script:** Copy `doc/shell/upgrade.php` to the LHC root folder.
4.  **Access Script:** Open `chatfolder/upgrade.php` in your browser to update the database and clear the cache.
5.  **Delete Script:** Remove `upgrade.php` from the root folder.

### Important Considerations

*   **Backup:** Always create a backup before upgrading.
*   **Further Reading:**
    *   [Old update instructions](https://livehelperchat.com/old-upgrading-instructions-335a.html)
    *   [Automating updates](https://livehelperchat.com/how-to-automate-live-helper-chat-updates-338a.html)

### PHP 8.1 Compatibility (Losing Facebook Messenger)

1.  **Edit `composer.json`:**
    *   Change `"php": ">=8.2"` to `"php": ">=8.1"`.
    *   Remove the following lines:

    ```json
        "tgallice/fb-messenger-sdk": "dev-master#47498e9926df01f2633835ff3ffb310f88ac444f",
        "symfony/event-dispatcher": "^7.1",
    ```
2.  **Update Composer:** Run `composer update`.

### Permissions

The operator requires the `'lhsystem', 'performupdate'` permission to view "Update information."

### Troubleshooting

If you encounter any issues:

1.  **Verify Files:** Ensure all files have been uploaded correctly.
2.  **Check Logs:** Review server error logs for specific messages.
3.  **PHP Version:** Confirm that your PHP version meets the requirements.
4.  **Revert:** Restore from your backup if the upgrade fails.
5.  **Seek Help:** Consult community forums or support channels.

