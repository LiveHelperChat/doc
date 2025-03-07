---
id: offline-online-automation
title: How to automate operator status changes automatically?
sidebar_label: Operator status
---

There are at least a few ways to automate operator status changes. If you are using web browsers, the recommended approach is to configure the user account notification section and activate operator activity tracking. This will automatically set the operator status to offline or online based on their activity.

![](/img/operator-status.jpg)

You can also enforce this tracking by navigating to:

> System configuration -> Live help configuration -> Chat configuration -> Misc

and activating the option `Track all logged operators activity and ignore their individual settings`.

You can also change the default activity timeout value there.

`How long an operator should be inactive before automatically going offline (value in minutes)`

The operator's chosen option overrides the default timeout value.

*   Install the Chrome extension, which supports detecting computer idle/active states.
*   Use the desktop application.
