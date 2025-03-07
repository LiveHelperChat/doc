---
id: install-cli
title: How to install using CLI?
sidebar_label: Install using CLI
---

It is possible to install Live Helper Chat using a command-line interface (CLI).

* Move `lhc_web/cli/install-cli.php` to the `lhc_web` directory.
* Move `lhc_web/cli/example.settings.ini` to `lhc_web/settings.ini`.
* Make the necessary changes to `settings.ini`.
* Execute `php install-cli.php settings.ini`.

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
; You can override any default value from the lh_chat_config table this way.
; DefaultConfigs['sharing_nodejs_path'] = 'somepath'
```
