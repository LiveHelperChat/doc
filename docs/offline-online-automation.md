---
id: offline-online-automation
title: How to automate operator status changes automatically?
sidebar_label: Operator status
---

There is atleast few ways to do it. Recommended way if you are using web browsers just configure in user account notification section and activate operator activity tracking. So operator will go offline/online automatically.

![](/img/operator-status.jpg)

You can also force this tracking by navigating to 

> System configuration -> Live help configuration -> Chat configuration -> Misc

and activating `Track all logged operators activity and ignore their individual settings.`

You can change there also default activity timeout value.

`How long operator should go offline automatically because of inactivity. Value in minutes`

Operator chosen option overrides default timeout value.

* Install chrome extension, it has support for detecting computer iddle/active states.
* Use desktop application