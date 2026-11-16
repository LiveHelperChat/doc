---
id: debug
title: Debugging Application
description: This document describes how to debug the application.
---

* Make sure you have installed [composer dependencies](install.md#composer-dependencies) first of all

## Enabling Debug Output

To see which templates are used during page rendering, enable debug output in the `settings/settings.ini.php` file:

```
'debug_output' => true,
```

## Enabling Error Logging (`log_errors`)

By default, an exception that ends with the "fatal error" page is only sent to the PHP error log and stored in `lh_audits`. To also write it to `cache/default.log`, enable `log_errors` in the `settings/settings.ini.php` file:

```php
'site' => array (
    // ...
    'debug_output' => false,
    'log_errors' => true,
),
```

The default value is `false`.

What it does:

* Applies to uncaught exceptions handled by the web entry point (`index.php`), by the module runner (`erLhcoreClassModule::runModule()`) and by the last-resort handler (`erLhcoreClassModule::defaultExceptionHandler()`).
* Writes the full exception dump (`print_r($e, true)` — message, file, line and stack trace) with `WARNING` severity through `erLhcoreClassLog::write()` into `cache/default.log`.
* The file is rotated automatically at about 200 KB, keeping up to 5 backups (`cache/default.log.1` … `cache/default.log.5`). The owner of a newly created file can be set with the `default_user` and `default_group` settings.
* It is independent from the database audit log: `lh_audits` records (including those created by `erLhcoreClassModule::logException()`) are written regardless of this option.
* `cron.php` always logs failures to `cache/default.log` — this option only controls the web request handlers.
* It does not show anything to the visitor. Use [`debug_output`](#enabling-debug-output) to see the exception in the browser.

Notes:

* `debug_output` takes precedence: when it is enabled, the exception is printed and the request exits, so nothing is written to `cache/default.log`. Disable it to collect log entries.
* PHP fatal errors that are not exceptions (memory exhaustion, `max_execution_time`, parse errors) are not handled by these handlers and will not appear in this log.
* Make sure `cache/` is writable by the web server and that `cache/default.log` is not reachable over HTTP — log entries may contain request data and stack traces. `System configuration` contains a security check for this.

## Disabling Cache

To see all used templates, you must also disable the cache.

```
'templatecache' => true,
'templatecompile' => true,
'modulecompile' => true,
```

## Modify `index.php` to enable debug output directly

This should be used only as a last option if anything else does not work.

https://github.com/LiveHelperChat/livehelperchat/blob/a74e72a0db352f8b3cb9387325bcc97620cb8899/lhc_web/index.php#L18-L19

and change to

```php
@ini_set('error_reporting', 1);
@ini_set('display_errors', E_ALL);
```

## Web Application Folder Structure

The web application has the following folder structure:

*   `cache` (Stores cached files)
*   `design` (Contains design categories)
    *   `<used_design>`
*   `doc` (Release documentation)
*   `extension` (All extensions are placed here)
*   `ezcomponents`
*   `lib` (Core of the framework)
    *   `autoloads`
        *   `lhcore_autoload.php` (Main application autoload file)
*   `core` (Folder containing application logic modules)
*   `models` (Folder containing application model classes)
*   `modules` (Application modules are placed here)
*   `pos` (Represents eZ Components POS, persistent object tables definitions)
*   `settings` (Contains application settings files)
*   `translations` (Contains application translations)

## How to Log JavaScript Errors

Go to `System configuration > Audit (Configuration)` and enable `Log javascript errors`.  After that, any JavaScript errors will be logged to `System configuration > Audit (Audit Logs)`.

You can search for JavaScript errors using these search attributes:

*   Category - `js`
*   Source - `lhc`

### Using JavaScript Logs

Most of the time, the compiled JS file has a map file. For example, if an error occurred in:

`https://demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js`

There will also be a source map file:

`https://demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js.map`

Afterwards, you can use https://jimbly.github.io/stackwalker/index.html to find the exact error.

## How to Use Debug Output

After enabling debug output, you will see a popup window similar to this:

![](https://livehelperchat.com/var/media/images/used-templates.png)

Regarding widget debugging, you will not see debug output so easily. These instructions also apply to embedded widgets and site widgets.

## Understanding Debug Output

![](https://livehelperchat.com/var/media/images/css-override.png)

As shown in the example above, widget styles can be overridden by editing the `customtheme/css/widget_override.css` file. The debug output shows all files searched during page load. If you want to edit the [invitation to chat green block](https://livehelperchat.com/need-help-tool-tip-configuration-280a.html), the easiest way to do that is to override the styles using the `!important` flag. These styles should be in your site CSS file, not the `widget_override.css` file.

## Debugging the Old Widget

### Chrome

![](https://livehelperchat.com/var/media/images/debug-widget.png)

After doing that, a new window will open in Chrome. Just delete `"view-source:"` and you will see the full list.

### Firefox

![](https://livehelperchat.com/var/media/images/ff.png)

## What to Do If the App Returns a White Screen During an Action

* [Disable cache](#disabling-cache)
* Enable [debug output](#enabling-debug-output)
* Enable [`log_errors`](#enabling-error-logging-log_errors) and check `cache/default.log` for an error message.
* Check the Chrome console for an error (`CTRL+SHIFT+J`).
* Read [My widget does not load](install.md#my-widget-does-not-load)
* See the [Audit Logs](audit/audit.md) section for an error.
* Debugging [incoming webhooks](development/incoming-webhooks.md#how-to-debug-if-something-does-not-work)