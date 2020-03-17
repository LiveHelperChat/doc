---
id: remove-index-php
title: How to remove index.php from URL?
sidebar_label: Remove index.php
---

In settings/settings.ini.php file change
```php
'force_virtual_host' => false,
```
to
```php
'force_virtual_host' =>true,
```

After that clear cache in back office.

Also make sure that you

* Have installed atleast 1.69v
* Have installed app in root folder of domain/subdomain.
* Have copied .htaccess file from doc/http_conf_examples
* There are few samples. Running apache .htaccess.example should be just file so just copy it to root folder and rename it to .htaccess