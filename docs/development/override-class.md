---
id: override-class
title: How to override a class?
sidebar_label: Override class
---

Live Helper Chat allows you to override default system classes. To override a class, the workflow should be as follows:

 * Create an extension. See the extension example [here](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/customstatus).
 * Copy the desired class from the kernel to the extension's class folder.
 * Define the class path in `var/autoloads/lhextension_autoload.php`.
 * `'class_name' => 'extension/..../myclass.php'`
 
Now you are ready to go.
