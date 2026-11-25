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

:::note
Blocking the sender of a **mail conversation** uses a separate permission - `'lhmailconv','block_sender'`. See [Mail window](/mail/mail-window#block-sender).
:::

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

If Live Helper Chat fails to detect visitor IP addresses correctly—especially when running behind a reverse proxy, load balancer, or CDN—configure the proxy settings under `'site'` in `settings/settings.ini.php`:

```php
'proxy_mode' => true,
'trusted_proxies' => [],
'proxy_header' => 'HTTP_X_FORWARDED_FOR',
```

[https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L22-L24](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L22-L24)

### How Proxy IP Detection Works

To prevent clients from spoofing their IP address via forged HTTP headers:

*   **`proxy_mode`** (default: `false`): When `false`, all forwarded headers are ignored and `$_SERVER['REMOTE_ADDR']` is always used.
*   **`trusted_proxies`** (default: `[]`): List of proxy IPs or subnets that Live Helper Chat is allowed to trust. Forwarded headers are only read if `$_SERVER['REMOTE_ADDR']` matches this list.
    *   Supported formats: exact IPv4/IPv6 (`127.0.0.1`, `::1`), IPv4/IPv6 CIDR (`10.0.0.0/8`, `172.64.0.0/13`, `2400:cb00::/32`), and IPv4 wildcards/ranges (`10.0.*.*`, `10.0.0.1-10.0.0.255`).
    *   If `trusted_proxies` is left empty while `proxy_mode` is `true`, only private/loopback `REMOTE_ADDR` addresses (`127.0.0.1`, `::1`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) are treated as trusted proxies. Direct requests from public IPs cannot spoof forwarded headers.
*   **`proxy_header`** (default: `'HTTP_X_FORWARDED_FOR'`): The `$_SERVER` header key used to resolve the client IP (e.g., `'HTTP_X_FORWARDED_FOR'`, `'HTTP_CF_CONNECTING_IP'`, `'HTTP_X_REAL_IP'`).
    *   When using `HTTP_X_FORWARDED_FOR`, Live Helper Chat reads the list **from right to left**, skips any IP that matches `trusted_proxies`, and returns the first valid untrusted IP. Any spoofed IP prepended by the client on the left is ignored.
    *   `HTTP_CF_CONNECTING_IP` is **not** trusted unless explicitly configured via `proxy_header`, preventing attackers from spoofing `CF-Connecting-IP` through non-Cloudflare proxies.

### Configuration Examples

#### Behind a local reverse proxy (Nginx / Docker / Load Balancer)

```php
'proxy_mode' => true,
'trusted_proxies' => [
    '127.0.0.1',
    '10.0.0.0/8',
],
'proxy_header' => 'HTTP_X_FORWARDED_FOR',
```

#### Behind Cloudflare (and/or Cloudflare → local proxy)

When traffic passes through Cloudflare and then a local proxy, `X-Forwarded-For` typically contains both the visitor IP and Cloudflare's public edge IP (for example, `78.60.231.0, 172.64.200.181`). Without Cloudflare's ranges in `trusted_proxies`, Live Helper Chat will stop at Cloudflare's edge IP (`172.64.200.181`) because it is a public IP.

Add your local proxy and [Cloudflare's published IP ranges](https://www.cloudflare.com/ips/) to `trusted_proxies`:

```php
'proxy_mode' => true,
'trusted_proxies' => [
    '127.0.0.1',
    '10.0.0.0/8',
    '173.245.48.0/20',
    '103.21.244.0/22',
    '103.22.200.0/22',
    '103.31.4.0/22',
    '141.101.64.0/18',
    '108.162.192.0/18',
    '190.93.240.0/20',
    '188.114.96.0/20',
    '197.234.240.0/22',
    '198.41.128.0/17',
    '162.158.0.0/15',
    '104.16.0.0/13',
    '104.24.0.0/14',
    '172.64.0.0/13',
    '131.0.72.0/22',
    // Plus Cloudflare IPv6 CIDRs if applicable (e.g. '2400:cb00::/32', ...)
],
'proxy_header' => 'HTTP_X_FORWARDED_FOR',
```

Alternatively, if all traffic is strictly routed through Cloudflare (origin is not directly reachable from the public internet), you can read Cloudflare's header directly:

```php
'proxy_mode' => true,
'trusted_proxies' => [
    // Your local proxy IP(s) and/or Cloudflare's IP ranges
    '127.0.0.1',
],
'proxy_header' => 'HTTP_CF_CONNECTING_IP',
```

:::warning
Only set `'proxy_header' => 'HTTP_CF_CONNECTING_IP'` if your origin server or upstream proxy blocks direct non-Cloudflare traffic; otherwise, a client bypassing Cloudflare could spoof the `CF-Connecting-IP` header.
:::
