---
id: writing-extension
title: How to write custom module/extension?
sidebar_label: Writing extension
---

Few extensions example can be found [here](https://github.com/LiveHelperChat/livehelperchat-extensions). I suggest to analyze few extensions there and you will get an idea how all works.

 > https://github.com/LiveHelperChat/livehelperchat-extensions

If you want to activate extension you have to edit

 > settings/settings.ini.php

and change the following part to

 > 'extensions' => array ( 0 => 'customstatus' )

In this exmaple we are activating customstatus extension. Make sure you disable cache while developing.

How to attatch event listeners to extension?
Just take a look at this file

 > https://github.com/LiveHelperChat/livehelperchat-extensions/blob/master/customstatus/bootstrap/bootstrap.php

In this class you can define to what events your extension should listen.

What events does Live Helper Chat dispatches?
[List of events](hooks.md)

Here is example to what events Automated hosting extension is listening

 > https://github.com/LiveHelperChat/automated-hosting/blob/master/instancecustomer/bootstrap/bootstrap.php

## How to include custom JS only for specific URL

You can just define `additional_footer_js` variable in `$Result` array

```php
// ...
$Result['content'] = $tpl->fetch();
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.incoming.webhooks.js').'"></script>';
```

## How to include custom CSS only for specific URL

You can just define `additional_header_css` variable in `$Result` array

```php
// ...
$Result['content'] = $tpl->fetch();
$Result['additional_header_css'] = '<link rel="stylesheet" type="text/css" href="'.erLhcoreClassDesign::designCSS('css/jquery-ui-1.10.4.custom.css').'" />';
```

## Translating extension

There is command to generate extension default translations.

> php cron.php -s site_admin -c cron/util/generate_translation_file_ext -p extension/cbscheduler

If running this command you can an error. Create a file in extension E.g

> extension/cbscheduler/doc/default.ts

with following content and try to run again command.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="lt">
</TS>
```

Let say now you want to add Lithuanian translations. We have to create a folder/file location at this location.

> extension/cbscheduler/translations/lt_LT/translation.ts

Content we can copy from `extension/cbscheduler/doc/default.ts` or just write manually translations. E.g

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

You can copy from `extension/cbscheduler/doc/default.ts` only required translations as some of the strings will be system context `system/buttons` which is already translated.
:::