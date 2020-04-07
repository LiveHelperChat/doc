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