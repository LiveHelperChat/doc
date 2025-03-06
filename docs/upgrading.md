---
id: upgrading
title: Upgrading
---

This guide explains how to upgrade Live Helper Chat (LHC) from version 2.04 onwards. LHC can automatically update the database from any previous version. Since version 3.30, installing from source requires [Composer](https://getcomposer.org/) dependencies.

### Prerequisites

*   **Composer:** Required for source installations (version 3.30+).
    *   If you don't have it, download `composer.phar` from [https://getcomposer.org/download/](https://getcomposer.org/download/).
*   **PHP 8.2 (Recommended):** For the latest version with dependencies, download the `*.v-with-dependencies.tgz` file from [https://github.com/LiveHelperChat/livehelperchat/releases](https://github.com/LiveHelperChat/livehelperchat/releases). This includes the `lib/vendor` folder, so you don't need to install Composer separately. Just extract it to `lib/vendor`.

### Upgrade Steps

1.  **Check Announcement:** Review the new version's announcement for any required changes in `settings/settings.ini.php`.
2.  **Update Database:**
    *   Go to "System" -> "Update information" to check for database differences. If found, click "Update database."
    *   If the web interface doesn't work, run these commands from the root folder:
        *   `php cron.php -s site_admin -c cron/util/update_database` (updates from remote URL)
        *   If the above fails, use: `php cron.php -s site_admin -c cron/util/update_database -p local` (after replacing files).
    *   **Manual Database Update (If Overwritten Files):**
        1.  [Update the database from the local definition](system/command.md#updates-live-helper-chat-database-directly-from-console).
        2.  Alternatively, copy `doc/shell/upgrade.php` to the root folder and access it via browser (e.g., `https://example.com/upgrade.php`).
3.  **Logout:** Log out of LHC.
4.  **Replace Files:**
    *   [Download the latest LHC version](http://livehelperchat.com/article/static/5).
    *   Overwrite these folders: `doc`, `ezcomponents`, `lib`, `modules`, `pos`, `translations`, and `design`.
    *   Also, overwrite `index.php` and `cron.php`.
    *   **Downloads:**
        1.  [https://github.com/remdex/livehelperchat/archive/master.zip](https://github.com/remdex/livehelperchat/archive/master.zip) (latest master branch without Composer dependencies)
        2.  [https://github.com/LiveHelperChat/livehelperchat/releases](https://github.com/LiveHelperChat/livehelperchat/releases) (latest release with Composer dependencies)
5.  **Update Composer Dependencies (If Applicable):**
    *   Overwrite `composer.json` and `composer.lock`.
    *   Run `composer.phar install` or `composer.phar update`.
6.  **Disable Cache:** Disable the cache in `settings.ini.php` (see [debug.md#disabling-cache](debug.md#disabling-cache)).
7.  **Clear Cache:**
    *   Log back in and go to "System configuration" -> "Clear Cache" and click "Clear Cache."
    *   Alternatively, run `php cron.php -s site_admin -c cron/util/clear_cache` from the command line.
8.  **Re-enable Cache:** Re-enable the cache in `settings.ini.php`.
9.  **Troubleshooting:** If errors persist, [enable debug output](debug.md).

### Upgrading from Older Versions

For older versions, follow this process:

1.  **Replace Files:** As in step 4 above.
2.  **Install Composer Dependencies:** As in step 5 above, or download the `*.v-with-dependencies.tgz` file and copy `lhc_web/lib/vendor` to your installation.
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
    *   Remove these lines:

    ```json
        "tgallice/fb-messenger-sdk": "dev-master#47498e9926df01f2633835ff3ffb310f88ac444f",
        "symfony/event-dispatcher": "^7.1",
    ```
2.  **Update Composer:** Run `composer.phar update`.

### Permissions

The operator needs the `'lhsystem', 'performupdate'` permission to see "Update information."

### Troubleshooting

If you encounter issues:

1.  **Verify Files:** Ensure all files are uploaded correctly.
2.  **Check Logs:** Review server error logs for specific messages.
3.  **PHP Version:** Confirm your PHP version meets the requirements.
4.  **Revert:** Restore from your backup if the upgrade fails.
5.  **Seek Help:** Consult community forums or support channels.

