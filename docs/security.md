---
id: security
title: Security
sidebar_label: Security
---

## Secret hash

Since 3.97v it was to weak for nowadays purposes. If you have present installation I suggest it to change to at-least 50 characters string. 80 recommended and include special characters.

```
https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L12
```

## Trusted hosts and Site address

In 3.97v there is few new settings. If you are missing them you can add them in your `settings/settings.ini.php` file under `site` section.

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

As with `secrethash` same situation with `Export hash`

Export hash can be changed in.

> System configuration > Live Help configuration > Chat configuration > Misc > Chats export secret hash

Set it to at-least 50 characters length.