---
id: install
title: Install Guide
sidebar_label: Install Guide
---

Tutorial how to setup Live Helper Chat. You can also use available snapshot on [DigitalOcean](development/hosting-on-digitalocean.md)

## Requirements

If you are running wordpress site it's 99.9% chance Live Helper Chat will work just fine.

* Download zip - https://github.com/remdex/livehelperchat/archive/master.zip
* Minimum PHP 7.2
* Mysql 5.7 >= OR MariaDB 10.2.3 >=
* Apache/Nginx
* For Laravel version please go to https://github.com/LiveHelperChat/livehelperchat_laravel

```
# Optional but recommended
php-phpiredis
php-imap
php-pecl-redis4
php-pecl-igbinary
php-geos
php-fpm
php-opcache

# Required
php-json
php-cli
php-gd
php-xml
php-common
php-pdo
php-pecl-zip
php-mysqlnd
php-mbstring
php
php-bcmath
```


## Folders permissions

* After you gave permission to write to cache folder. You should see the following window. If you see strange error instead of install make sure that
    * Your browser is pointing to index.php/site_admin/install/install URL
    * You gave recursive write permission to cache folder.

Try to change owner to apache user or the user under which you are running http server.

```shell script
chown apache:apache -R cache/
chown apache:apache -R var/
chown apache:apache settings/
chmod -R 755 cache/
```

After that you should see something like his

​![](/img/install/install-step-1.png)

Now just give permission to write to required folders/files

```shell script
chmod 755 settings/
chmod -R 755 var/storage
chmod -R 755 var/userphoto
chmod -R 755 var/storageform
chmod -R 755 var/storageadmintheme
chmod -R 755 var/botphoto
chmod -R 755 var/bottrphoto
chmod -R 755 var/storageinvitation
chmod -R 755 var/storagedocshare
chmod -R 755 var/storagetheme
chmod -R 755 var/tmpfiles
```

After that all items should be green.

## Database settings

On next screen you should see similar window. Database has to be precreated.

​![](/img/install/database-settings.png)

## Application initial settings

These settings you can fill up according to your needs.

​![](/img/install/initial-app-settings.png)

## Install completed

​![](/img/install/install-completed.png)

## Logging to application

After clicking `Login here` you should be presented with login window.

​![](/img/install/login-window.png)

Install url is always `index.php/site_admin/user/login`

## Dashboard page

This is the main application window.  

​![](/img/install/dashboard-installed.png)

## Generating embed code

Now click on Settings icon ​![](/img/install/settings.png) on top menu. You should see this window.  

​![](/img/install/settings-page.png)

Navigate to

> Embed code -> Widget embed code (new)

You should see window like this

​![](/img/install/html-code.png)

To have proactive enabled check `Check for operator invitation messages`

Embed code should be similar to this. If you copy this code change `install.livehelperchat.com/index.php` to your install path.

```js
<script>var LHC_API = LHC_API||{};
LHC_API.args = {mode:'widget',lhc_base_url:'//install.livehelperchat.com/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,proactive:true};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var date = new Date();po.src = '//install.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```

For more information and trouble shooting see [integration article](integrating.md).

## Proactive invitation setup

Navigate to

> System configuration -> Live help configuration -> Pro active chat invitations

Here is demo configuration which we have on demo.livehelperchat.com. Some things it does:

* Message to user is send after he spends 20 seconds on page or have more than 2 pageviews.
* We show random profile from online operators
* Also we have to delayed messages there. Delayed messages can be also configured in autor responder sections.
* Also we have there long auto delayed message 40 seconds. If during that period no one accepts a chat message is shown that all operators are busy.

You can see proactive invitation setup on our demo installation.

​![](/img/install/proactive-invitation.png)

And here is instant auto response message.  
​![](/img/install/autoresponder.png)

Here goes automatic auto response message.  

​![](/img/install/autoresponder-busy.png)

## Further reading

* [How to remove index.php from URL?](development/remove-index-php.md)
* [Wondering how to setup automatic online/work hours?](online-hours.md)
* [Need automatically change operator status to offline/online?](offline-online-automation.md)
* [Want to rebrand it according to your site style?](theme/theme.md)
* [Don't know how to use screen sharing?](co-browsing.md)
* Try [windows app](https://livehelperchat.com/demo-12c.html) or [chrome extension](https://livehelperchat.com/how-to-use-chrome-extension-245a.html)
* [My users loose chat session then they navigate through the site, duplicate online users records](online-visitors.md#my-users-loose-chat-session-then-they-navigate-through-the-site-duplicate-online-users-records)

## My widget does not load?

Try to add this in your `.htaccess` file in root folder `lhc_web`. If this folder does not exists just place `.htaccess` in the same folder where `index.php` file exists. It has to be placed in Live Helper Chat folder not a website.

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|map|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

## Chat was closed by an operator/visitor, but visitor starting chat again opens an old chat?

Most likely you have enabled `Chat configuration -> Misc -> Reopen chat functionality enabled`

[More information](chat/configuration.md#reopen-chat-functionality-enabled)

## Install from command line

It's also possible to install from command line.

Copy `install-cli.php` script to root folder (`lhc_web` if you pulled from github)

```shell script
cp cli/install-cli.php install-cli.php
```

Copy default `example.settings.ini` to `settings.ini`. Don't forget to modify them.
```shell script
cp cli/example.settings.ini cli/settings.ini
```

Install Live Helper Chat
```shell script
php install-cli.php cli/settings.ini
```

## Installation under sub-folder

If you are running wordpress site and have nice URL, you might need to allow access to Live Helper Chat subfolder. `.htacess` could look like.

```apacheconfig
RewriteEngine On
# Previous rules
RewriteRule ^lhc_web/.*$ - [L]
# Afterward rules
```

## How to login?
In order to login point your browser to directory where application is installed. URL address should look like http://<your_domain>/index.php/site_admin/
