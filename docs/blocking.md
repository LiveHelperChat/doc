---
id: blocking
title: How to block visitors from starting a chat
sidebar_label: Blocking
---

## Block users directly from chat

You can do this by clicking block icon ![](/img/chat/block-user.jpg)

You can see all blocked IP's in blocked visitors list.

> System configuration -> Live help configuration -> Blocked users

### Permissions

For operator to be able to block he has to have this permission.

> 'lhchat','allowblockusers'

## Block users based on their location

We have an option to block certain users by their country. This functionality can be found at 

 > "System configuration" => "Live help configuration" => "GEO adjustment"  

Screenshot of main window

![](https://livehelperchat.com/var/media/images/geo-adjustment.png)

### For this module to work geo detection have to be configured.

Variables explain

*   Offline status - that means for these visitors chat will be offline all the time.
*   hidden/disabled - that means if user tries to start a chat he will see message that chat is not supported in his country. For him also pro active invitations won't be shown. He also won't be able to chat.
*   "Apply to chat widget status indicator these rules also? performance decrease is associated with this option" that means that this logic will be applied to initial stage and chat status widget generating phrase and widget initially will be shown as offline or hidden. Otherwise check will be applied on widget content only if user clicks it. There is a little performance penalty involved becaue within each reques script have to check visitor location.


### Permissions

For operator to be able configuration GEO Adjustments he has to have permission to

> 'chat', 'geoadjustment'

### Few examples

#### You want to allow chat only from Lithuania and Great Britain and show offline for all other visitors? So configuration regarding this case would look like

![](https://livehelperchat.com/var/media/images/example-geo-1.png)

#### You want to to block all chat request from Lithuania and for all other countries show as usual?

![](https://livehelperchat.com/var/media/images/example-geo-2.png)

#### You want to show normal status for Frech and show offline for Germany and for all other countries just hide?

![](https://livehelperchat.com/var/media/images/example-geo-3.png)

## How to block users from starting a chat?

For that navigate to

> "Configuration" -> "Live help configuration" -> "Chat configuration" -> "Online tracking"

and just edit "Which ip should not be allowed to chat"

Possible values

*   Wildcard format:     1.2.3.*
*   CIDR format:         1.2.3/24  OR  1.2.3.4/255.255.255.0
*   Start-End IP format: 1.2.3.0-1.2.3.255

Values can be separated by comma, E.g 1.2.3.*,128.8.8.8

## How to block users from appearing on online users list?

For that navigate to 

> "Configuration" -> "Live help configuration" -> "Chat configuration" -> "Online tracking"

and just edit "Which ip should be ignored in online users list, separate by comma"

Possible values

*   Wildcard format:     1.2.3.*
*   CIDR format:         1.2.3/24  OR  1.2.3.4/255.255.255.0
*   Start-End IP format: 1.2.3.0-1.2.3.255

Values can be separated by comma, E.g 1.2.3.*,128.8.8.8

## Live Helper Chat does not detect IP?

If you are running under load balancer or any other proxy server. You have to change `settings.ini.php` `proxy_mode` to `true`.