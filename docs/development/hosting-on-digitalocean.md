---
id: hosting-on-digitalocean
title: Hosting Live Helper Chat on DigitalOcean
sidebar_label: Hosting on DigitalOcean
---

## Introduction

[DititalOcean](https://m.do.co/c/09c74421e3c2) let's you easily start preconfigured Live Helper Chat. 

You can now easily host Live Helper Chat directly on DigitalOcean by using their marketplace https://marketplace.digitalocean.com/apps/live-helper-chat

## Requirements

Live Helper Chat runs perfectly fine on the smallest available droplet. 5$/Month. It's cheaper to run on [DititalOcean](https://m.do.co/c/09c74421e3c2) than on my own hosting :smile:. With my hosting you get automated updates and support project directly.

## Configured extensions

In the package I have included/configured following extensions:

* [NodeJS-Helper](https://github.com/LiveHelperChat/NodeJS-Helper) this will make chatting feel like real time without any delay for messages sync.
* [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque) this will run background workers which can be used for external tasks. It enables to run background [Rest API](../bot/rest-api.md) calls.

Snapshot has following parts configured also

* [cronjobs](cronjob.md) configured.
* Co-Browsing nodejs server setup.

## Core software stack

* Centos 7.6
* MariaDB 10.4.12-MariaDB
* NodeJS v10.20.1
* PHP 7.4.5
* PHP-FPM 7.4.5 (fpm-fcgi)
* Nginx 1.16.1

## How to disable installed extensions

If for some reasons you want to disable installed extensions you can do the following

### Disabling [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque)

Remove file so it won't start again

```shell script
sudo rm -f /opt/livehelperchat/resque/.enable-cron
```

Kill the service

```shell script
sudo kill -9 $(ps aux | grep "[0-9] resque-1.2: *" | awk '{print $2}')
```

Update `/var/www/html/settings/settings.ini.php`

From
```php
...
'extensions' => 
      array (
        0 => 'nodejshelper',
        1 => 'lhcphpresque',
),
...
```

To
```php
...
'extensions' => 
      array (
        0 => 'nodejshelper',
),
...
```

[Clear cache](../system/clearing-cache.md) from back office.

### Disabling Co-Browsing node server 

If you are not planning to use screen sharing functionality makes sense to disable this service and save few megabytes of memory.

```shell script
sudo systemctl stop nodejscobrowser
sudo systemctl disable nodejscobrowser
```

### Disabling [NodeJS-Helper](https://github.com/LiveHelperChat/NodeJS-Helper) extension

If for some reason you want to go even further you can disable and this extension

```shell script
sudo systemctl stop nodejshelper
sudo systemctl disable nodejshelper
```

Update `/var/www/html/settings/settings.ini.php`

From
```php
...
'extensions' => 
      array (
        0 => 'nodejshelper',
        1 => 'lhcphpresque',
),
...
```

To
```php
...
'extensions' => 
      array (
        0 => 'lhcphpresque',
),
...
```

[Clear cache](../system/clearing-cache.md) from back office.

## Database logins

Database root logins can be found in this file

> /root/.digitalocean_password

## How to update Live Helper Chat

For that purposes I have prepared shell script. Just run this command once logged to the server. This command has to be run once you have installed Live Helper Chat itself.

```shell script
sudo /opt/livehelperchat/lhc_upgrade.sh
```

## Todo's after install

* [Generate embed code](integrating.md) and put it on your website.
* Go to your account and configure your Username and Lastname also set your default nick as a support agent.
* Configure your DNS records (SPF) so server can send legit e-mails.
* If you are planning in using Rest API response type for bot. You should edit `/var/www/html/extension/lhcphpresque/settings/settings.ini.php` and set `site_address` to `http://<server_ip>` or `http(s)://exmaple.org`

## SWAP

DigitalOcean does not recommend adding SWAP, but if you really want it you can follow this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7).

