---
id: writing-extension
title: Writing Custom Modules/Extensions
sidebar_label: Writing extension
---

You can find several example extensions [here](https://github.com/LiveHelperChat/livehelperchat-extensions). I suggest analyzing these extensions to understand how everything works.

> https://github.com/LiveHelperChat/livehelperchat-extensions

To activate an extension, edit the following file:

> settings/settings.ini.php

Modify the `'extensions'` array to include the extension's name. For example, to activate the `customstatus` extension, change the array to:

> 'extensions' => array ( 0 => 'customstatus' )

Ensure you disable the cache during development.

To attach event listeners to your extension, examine this file:

> https://github.com/LiveHelperChat/livehelperchat-extensions/blob/master/customstatus/bootstrap/bootstrap.php

This class allows you to define the events your extension should listen for.

For a list of events that Live Helper Chat dispatches, see:
[List of events](hooks.md)

Here's an example of the events the Automated hosting extension listens for:

> https://github.com/LiveHelperChat/automated-hosting/blob/master/instancecustomer/bootstrap/bootstrap.php

## Including Custom JS for a Specific URL

Define the `additional_footer_js` variable in the `$Result` array:

```php
// ...
$Result['content'] = $tpl->fetch();
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.incoming.webhooks.js').'"></script>';
```

## Including Custom CSS for a Specific URL

Define the `additional_header_css` variable in the `$Result` array:

```php
// ...
$Result['content'] = $tpl->fetch();
$Result['additional_header_css'] = '<link rel="stylesheet" type="text/css" href="'.erLhcoreClassDesign::designCSS('css/jquery-ui-1.10.4.custom.css').'" />';
```

## Translating Extensions

Use the following command to generate the default translations for an extension:

> php cron.php -s site_admin -c cron/util/generate_translation_file_ext -p extension/cbscheduler

If you encounter an error while running this command, create a file named `default.ts` in the extension's `doc` directory. For example:

> extension/cbscheduler/doc/default.ts

The file should contain the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="lt">
</TS>
```

Then, rerun the command.

To add Lithuanian translations, create a `translation.ts` file in the `translations/lt_LT` directory within your extension. For example:

> extension/cbscheduler/translations/lt_LT/translation.ts

You can copy the content from `extension/cbscheduler/doc/default.ts` or manually write the translations. For example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="lt">
  <context>
    <name>module/cbscheduler</name>
    <message>
      <source>Callback scheduler</source>
      <translation>Paskambinimo užsakymas</translation>
    </message>
  </context>
</TS>
```

:::tip Tip

You can copy only the required translations from `extension/cbscheduler/doc/default.ts`, as some strings may belong to the system context (`system/buttons`), which is already translated.
:::
