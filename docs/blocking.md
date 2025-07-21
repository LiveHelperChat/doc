---
id: blocking
title: How to block visitors from starting a chat
sidebar_label: Blocking
---

## Block Users Directly from Chat

You can block users directly from the chat interface by clicking the block icon ![](/img/chat/block-user.jpg).

A list of all blocked IP addresses can be found in the blocked visitors list.

> System configuration -> Live help configuration -> Blocked users

### Permissions

To block users, an operator must have the following permission:

> 'lhchat','allowblockusers'

## Block Users Based on Their Location

You can block users based on their country. This feature is located at:

> "System configuration" => "Live help configuration" => "GEO adjustment"

Screenshot of the main window:

![](https://livehelperchat.com/var/media/images/geo-adjustment.png)

### Configuration

For this module to function correctly, GEO detection must be configured.

The variables are explained below:

*   **Offline status:** Chat will always appear offline to visitors from the selected countries.
*   **Hidden/disabled:** If a user tries to start a chat, they will see a message indicating that chat is not supported in their country. Proactive invitations will also be disabled, and they will be unable to initiate a chat.
*   **Apply to chat widget status indicator these rules also? performance decrease is associated with this option:** Applying these rules to the chat widget status indicator will reflect the status (offline or hidden) from the initial stage. If disabled, the check will only be applied when the user interacts with the widget. Note that enabling this option may slightly decrease performance because the script must check the visitor's location on each request.

### Permissions

To configure GEO Adjustments, an operator must have the following permission:

> 'chat', 'geoadjustment'

### Examples

#### Allow chat only from Lithuania and Great Britain, and show offline status for all other visitors

The configuration for this scenario would be:

![](https://livehelperchat.com/var/media/images/example-geo-1.png)

#### Block all chat requests from Lithuania, and show the usual status for all other countries

The configuration for this scenario would be:

![](https://livehelperchat.com/var/media/images/example-geo-2.png)

#### Show normal status for France, offline status for Germany, and hide the chat for all other countries

The configuration for this scenario would be:

![](https://livehelperchat.com/var/media/images/example-geo-3.png)

## Block Users by IP Address

To block users from starting a chat based on their IP address, navigate to:

> "Configuration" -> "Live help configuration" -> "Chat configuration" -> "Online tracking"

Edit the "Which IP should not be allowed to chat" field.

Possible values:

*   Wildcard format: `1.2.3.*`
*   CIDR format: `1.2.3/24` OR `1.2.3.4/255.255.255.0`
*   Start-End IP format: `1.2.3.0-1.2.3.255`

Separate multiple values with commas (e.g., `1.2.3.*,128.8.8.8`).

## Ignore IPs in Online Users List

To prevent users from appearing on the online users list based on their IP address, navigate to:

> "Configuration" -> "Live help configuration" -> "Chat configuration" -> "Online tracking"

Edit the "Which IP should be ignored in online users list, separate by comma" field.

Possible values:

*   Wildcard format: `1.2.3.*`
*   CIDR format: `1.2.3/24` OR `1.2.3.4/255.255.255.0`
*   Start-End IP format: `1.2.3.0-1.2.3.255`

Separate multiple values with commas (e.g., `1.2.3.*,128.8.8.8`).

## IP Detection Issues

If Live Helper Chat fails to detect IP addresses correctly, especially when running behind a load balancer or proxy server, change the `proxy_mode` setting in `settings.ini.php` to `true`.

[https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L18](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L18)
