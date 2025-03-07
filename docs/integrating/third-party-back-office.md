---
id: third-party-back-office
title: Integration in a third party back office
---

This document outlines a general workflow for integrating the LHC back office directly into third-party systems.

For most use cases, we recommend generating a login link to avoid modifying the source code.

# Integrating a Login Link

This is the preferred integration method. It provides the user with a simple link that automatically opens and logs them into the LHC back office.

[Auto login instructions](users/auto-login.md).

# Integrating via iFrame

### For versions 4.51 and later:

Using `https` is mandatory. Ensure you modify the `settings.ini.php` file and not the `settings.ini.default.php` file.

*   Set the main configuration `allow_iframe` to `true`. Location: [https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L34](https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L34)
*   Change `'allow_iframe_domain' => '',` to `'allow_iframe_domain' => 'https://example.com;',`.  Note the `;` after the domain.

The following actions occur when you change the `allow_iframe_domain` value:

```php
header("Content-Security-Policy: frame-ancestors 'self' ". (self::$validIframeDomains === false ? '' : self::$validIframeDomains));
```

This results in the following HTTP header:

```
Content-Security-Policy: frame-ancestors 'self' https://example.com;"
```

After changing `allow_iframe`, the cookie policy is updated to:

```
@ini_set('session.cookie_samesite', 'None');
@ini_set('session.cookie_secure', true);
```

If you are also using PHP sessions, you can change `php_session_cookie_name` to something like `lhc_session_id`.

Location: [https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L23](https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L23)

### For versions 4.51 and earlier:

The principle is similar to how the [Chrome extension](chrome-extension.md) works.

*   If you encounter CORS errors while integrating the back office, you must modify the `SAMEORIGIN` header values in the code.  See: [https://github.com/LiveHelperChat/livehelperchat/blob/bd5dea63d0744031ab17d5391b7ad44ea06b903a/lhc_web/lib/core/lhcore/lhmodule.php](https://github.com/LiveHelperChat/livehelperchat/blob/bd5dea63d0744031ab17d5391b7ad44ea06b903a/lhc_web/lib/core/lhcore/lhmodule.php)
*   The same applies to the login module. See: [https://github.com/LiveHelperChat/livehelperchat/blob/3f0fd1c38469ef1862133962366d77c5e6dc7263/lhc_web/modules/lhuser/login.php#L3](https://github.com/LiveHelperChat/livehelperchat/blob/3f0fd1c38469ef1862133962366d77c5e6dc7263/lhc_web/modules/lhuser/login.php#L3)
