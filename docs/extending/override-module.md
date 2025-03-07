---
id: override-module
title: How to Override Modules
sidebar_label: Overriding Module
---

To override modules, you need to create an extension. If you see a URL address like `chat/startchat`, there's a high probability (99%) that the relevant module file is located in:

> `modules/lhchat/startchat.php`

To override this module, your extension should have the following structure:

> `extension/customstatus/modules/lhchat/module.php`
> `extension/customstatus/modules/lhchat/startchat.php`

The `module.php` file should contain the following:

```php
<?php
$Module = array( "name" => "Start chat override");
$ViewList = array();

$ViewList['startchat'] = array(
    'script' => 'startchat.php',
    'params' => array()
);
?>
```

The `startchat.php` file can be copied from `modules/lhchat/startchat.php`. I suggest reviewing the `customstatus` extension as an example. It includes an overridden `user/login` file.

> [https://github.com/LiveHelperChat/automated-hosting/blob/master/instancecustomer/bootstrap/bootstrap.php](https://github.com/LiveHelperChat/automated-hosting/blob/master/instancecustomer/bootstrap/bootstrap.php)
