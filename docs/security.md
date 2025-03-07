---
id: security
title: Security
sidebar_label: Security
---

## Secret hash

Since version 3.97, the secret hash was too weak for modern security purposes. If you have an existing installation, I suggest changing it to a string of at least 50 characters. 80 characters is recommended, and the string should include special characters.

```
https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L12
```

## Trusted hosts and Site address

In version 3.97, there are a few new settings. If you are missing them, you can add them to your `settings/settings.ini.php` file under the `site` section.

```shell
'site_address' => 'https://demo.livehelperchat.com',
'trusted_host_patterns' => [
     '^demo\.livehelperchat\.com$', // Explicit domain
     '^.+\.livehelperchat\.com$',   // Any subdomain
],
```

Location in default configuration

```
https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L29-L31
```

## Export hash

As with `secrethash`, the same situation applies to the `Export hash`.

The Export hash can be changed in:

> System configuration > Live Help configuration > Chat configuration > Misc > Chats export secret hash

Set it to a length of at least 50 characters.
