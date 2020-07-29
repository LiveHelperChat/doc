---
id: install-cli
title: How to install using CLI?
sidebar_label: Install using CLI
---

It's possible to install Live Helper Chat using CLI interface.

* Move `lhc_web/cli/install-cli.php` to `lhc_web`
* Move `lhc_web/cli/example.settings.ini` to `lhc_web/settings.ini`
* Make changes to `settings.ini`
* Execute `php install-cli.php settings.ini`

```ini
; settings.ini

[db]
host = localhost
user = user
password = xxxxxxx
database = livehelperchat
port = 3306

[admin]
AdminUsername = username
AdminPassword = xxxxxxxx
AdminEmail = example@domain.com
AdminName = Name
AdminSurname = Surname
Domain = domain.com
DefaultDepartament = Departament
ForceVirtualHost = 0
Extensions =
ApacheUserGroupName = apache
ApacheUserName = apache
TimeZone = UTC
DefaultConfigs = []
; You can override any default value from lh_chat_config table this way.
; DefaultConfigs['sharing_nodejs_path'] = 'somepath'
```