---
id: override-module
title: How to override modules?
sidebar_label: Overriding module
---

If you want to override modules you have to create an extension. If you see url address chat/startchat there is 99% chance that module file is located in

 > modules/lhchat/startchat.php

 if you want to override this module you have in your extension have this structure

 > extension/customstatus/modules/lhchat/module.php
 > extension/customstatus/modules/lhchat/startchat.php

module.php file content should the following

```php
<?php
$Module = array( "name" => "Start chat overide");
$ViewList = array();
   
$ViewList['startchat'] = array( 
    'script' => 'startchat.php',
    'params' => array()
);  
?>
```

startchat.php file content can be just copied from modules/lhchat/startchat.php file. I suggest just look at customstatus extension as example. There is overriden user/login file. 

 > https://github.com/LiveHelperChat/automated-hosting/blob/master/instancecustomer/bootstrap/bootstrap.php