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

Principle should be similar how [chrome extension](chrome-extension.md) works.

* If you are getting CORS errors while integrating back office you will have to change [SAMEORIGIN](https://github.com/LiveHelperChat/livehelperchat/blob/bd5dea63d0744031ab17d5391b7ad44ea06b903a/lhc_web/lib/core/lhcore/lhmodule.php) header values in the code
* Same for [login module](https://github.com/LiveHelperChat/livehelperchat/blob/3f0fd1c38469ef1862133962366d77c5e6dc7263/lhc_web/modules/lhuser/login.php#L3)
