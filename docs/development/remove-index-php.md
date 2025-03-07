---
id: remove-index-php
title: How to remove index.php from URL?
sidebar_label: Remove index.php
---

In the `settings/settings.ini.php` file, change:

```php
'force_virtual_host' => false,
```

to:

```php
'force_virtual_host' => true,
```

After this change, clear the cache in the back office.

Also, ensure that you:

*   Have installed at least version 1.69.
*   Have installed the application in the root folder of your domain or subdomain.
*   Have copied the `.htaccess` file from `doc/http_conf_examples`.
*   Note that there are a few samples provided. For Apache, the `.htaccess.example` file should be copied to the root folder and renamed to `.htaccess`.

Here's an example of an `.htaccess` file:

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|map|ogg|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>

RewriteEngine On

# If, for some reason, you can't authenticate for the Rest API, try uncommenting the following lines:
# https://stackoverflow.com/questions/26475885/authorization-header-missing-in-php-post-request

# RewriteCond %{HTTP:Authorization} ^(.*)
# RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]

# Adds support for URLs without index.php
RewriteRule ^/var/[^/]+/cache/(stylesheets|images|javascripts?)/.* - [L]
RewriteRule ^upgrade.php - [L]
RewriteRule !\.(gif|jpe?g|png|bmp|css|js|xml|html|json|svg|ico|mp3|wasm|ogg|wav|ogv|swf|map|flv|otf|woff2|woff|eot|ttf)|var(.+)storage.pdf(.+)\.pdf$ index.php

DirectoryIndex index.php
```

For Nginx, refer to [Nginx configuration tips](..//nginx-configuration-tips.md).
