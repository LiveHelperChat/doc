---
id: override-class
title: How to override a class?
sidebar_label: Override class
---

Live Helper Chat allows to override default system classes. To override the class workflow should be the following

 * Create an extension, see extension example [here](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/customstatus)
 * Copy your desirable class from kernel to extension class folder
 * Define class path in var/autoloads/lhextension_autoload.php
 * 'class_name' => 'extension/..../myclass.php'
 
And you are ready to go