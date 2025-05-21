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

It will avoid Live Helper Chat in some circumstances generate URL pointing to third party website.

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

## How to limit/protect back office access

Few things

* Remove `index.php` from [URL](development/remove-index-php.md)
* Limit what URL's are exposed to the [public, nginx example](nginx-configuration-tips.md)
* Disable mobile app access. In `mobile/settings` do not enable `Enable mobile application and mobile notifications`
* Disable https://github.com/LiveHelperChat/livehelperchat/blob/419cfbd9634339d9bb360b7942fba8a336a06e2b/lhc_web/settings/settings.ini.default.php#L21 It will disable mobile app also.
* Limit Rest API and `site_admin` via apache E.g

```apacheconf
<Location "/site_admin/">
    SetEnvIf X-Forwarded-For "192.168.1.2" Remi
    <RequireAny>
        Require env Remi
        Require ip 192.168.1.2/32
    </RequireAny>  
</Location>
#Allow sso for crm
<Location ~ "/site_admin/ssoprovider/.*">
    SetEnvIf X-Forwarded-For "192.168.1.2" Remi
    <RequireAny>
        Require env Remi
        Require ip 192.168.1.2/32
    </RequireAny>   
</Location>
#Allow Rest API
<Location ~ "/restapi/.*">
    SetEnvIf X-Forwarded-For "192.168.1.2" Remi
    <RequireAny>
        Require env Remi
        Require ip 192.168.1.2/32
    </RequireAny>  
</Location>
```
* Change default back office url `site_admin` to something else. This step has to be done after an installation. Before doing any changes please [disable cache](debug.md#disabling-cache)
  * Change `site_admin` to something else in https://github.com/LiveHelperChat/livehelperchat/blob/419cfbd9634339d9bb360b7942fba8a336a06e2b/lhc_web/settings/settings.ini.default.php#L30 
  * Change `site_admin` to something else in https://github.com/LiveHelperChat/livehelperchat/blob/419cfbd9634339d9bb360b7942fba8a336a06e2b/lhc_web/settings/settings.ini.default.php#L77
  * Change `site_admin` to something else in https://github.com/LiveHelperChat/livehelperchat/blob/419cfbd9634339d9bb360b7942fba8a336a06e2b/lhc_web/settings/settings.ini.default.php#L715
* [Clear cache](system/clearing-cache.md#clear-cache) after those steps

## Export hash

As with `secrethash`, the same situation applies to the `Export hash`.

The Export hash can be changed in:

> System configuration > Live Help configuration > Chat configuration > Misc > Chats export secret hash

Set it to a length of at least 50 characters.
