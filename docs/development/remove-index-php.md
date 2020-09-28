---
id: remove-index-php
title: How to remove index.php from URL?
sidebar_label: Remove index.php
---

In `settings/settings.ini.php` file change
```php
'force_virtual_host' => false,
```
to
```php
'force_virtual_host' => true,
```

After that clear cache in back office.

Also make sure that you

* Have installed atleast 1.69v
* Have installed app in root folder of domain/subdomain.
* Have copied `.htaccess` file from `doc/http_conf`_examples
* There are few samples. Running apache `.htaccess.example` should be just file so just copy it to root folder and rename it to `.htaccess`

.htaccess file example

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>

RewriteEngine On

# If for some reason you can't authentificate for Rest API try to uncomment following lines
# https://stackoverflow.com/questions/26475885/authorization-header-missing-in-php-post-request

# RewriteCond %{HTTP:Authorization} ^(.*)
# RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]

# Adds support for URL without index.php in URL
RewriteRule ^/var/[^/]+/cache/(stylesheets|images|javascripts?)/.* - [L]
RewriteRule ^upgrade.php - [L]
RewriteRule !\.(gif|jpe?g|png|bmp|css|js|xml|html|json|ico|mp3|wasm|ogg|wav|ogv|swf|flv|otf|woff2|woff|eot|ttf)|var(.+)storage.pdf(.+)\.pdf$ index.php

DirectoryIndex index.php
```

For nginx refer [nginx configuration tips](..//nginx-configuration-tips.md)