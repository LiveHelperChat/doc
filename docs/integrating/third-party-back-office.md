---
id: third-party-back-office
title: Integration in a third party back office
---

This is a general workflow which you should follow while trying to integrate LHC back office directly to third party systems.

As in resume I would recommend just to generate login link if you don't want to mess with source code.

# Integrating login link

This is preferred method. With this method user is presented simple link, which opens LHC back office and logins visitor automatically.

[Auto login instructions](users/auto-login.md).

# Integrating iframe

### After 4.51v >

`https` is a must. Make sure you are changing `settings.ini.php` file and NOT `settings.ini.default.php`

* Change main configuration `allow_iframe` to `true` . Location - https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L34
* Change `'allow_iframe_domain' => '',` to `'allow_iframe_domain' => 'https://example.com;',`. Pay attention to `;` after domain

Under the hood these things happens from changing `allow_iframe_domain` value

```php
header("Content-Security-Policy: frame-ancestors 'self' ". (self::$validIframeDomains === false ? '' : self::$validIframeDomains));
```

We get this http header.

```
Content-Security-Policy: frame-ancestors 'self' https://example.com;"
```

After you change `allow_iframe`. Cookie policy is changed to.

```
@ini_set('session.cookie_samesite', 'None');
@ini_set('session.cookie_secure', true);
```

If you are using also php sessions you can change also `php_session_cookie_name` to something like `lhc_session_id`

Here is location https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L23

### Before 4.51v <=

Principle should be similar how [chrome extension](chrome-extension.md) works.

* If you are getting CORS errors while integrating back office you will have to change [SAMEORIGIN](https://github.com/LiveHelperChat/livehelperchat/blob/bd5dea63d0744031ab17d5391b7ad44ea06b903a/lhc_web/lib/core/lhcore/lhmodule.php) header values in the code
* Same for [login module](https://github.com/LiveHelperChat/livehelperchat/blob/3f0fd1c38469ef1862133962366d77c5e6dc7263/lhc_web/modules/lhuser/login.php#L3)
