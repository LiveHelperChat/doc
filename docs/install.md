---
id: install
title: Install Guide
sidebar_label: Install Guide
---

## Alternative Ways

* Use [Docker](https://github.com/LiveHelperChat/docker-standalone)
* Use [Softaculous](https://softaculous.com/apps/customersupport/live_helper_chat)

## Requirements

If you are running a WordPress site, there is a very high likelihood that Live Helper Chat will work seamlessly.

* Download [zip](https://github.com/LiveHelperChat/livehelperchat/archive/refs/heads/master.zip) or [tgz](https://github.com/LiveHelperChat/livehelperchat/tarball/master).
* You can download a version with dependencies included from https://github.com/LiveHelperChat/livehelperchat/releases. Look for the newest file named `*.**v-with-dependencies.tgz`.
* Minimum PHP version 8.2 is required. If you need support for an older PHP version, you will have to install composer dependencies yourself.
* MySQL 5.7 or MariaDB 10.2.3 or higher with `json_` functions support.
* Apache or Nginx.
* For the Laravel version, please visit https://github.com/LiveHelperChat/livehelperchat_laravel.

```
# Optional but Recommended
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

## Composer Dependencies

It's not required if you have downloaded a version with dependencies included.

If you are using a new version with mail support or any newer version from 3.30v, you have to run from the `lhc_web` folder.

```
composer.phar install
```

If you encounter an issue like an incompatible PHP version, try removing the `composer.lock` file and then install again.

```
rm composer.lock
composer.phar install
```

You can download `composer.phar` from https://getcomposer.org/download/.

## Folder Permissions

* After granting permission to write to the cache folder, you should see the following window. If you encounter an unexpected error instead of the installation page, please ensure that:
    * Your browser is pointing to the correct URL: `index.php/site_admin/install/install`.
    * You have given recursive write permission to the cache folder.

Try changing the owner to the Apache user or the user under which your HTTP server operates.

```shell script
chown apache:apache -R cache/
chown apache:apache -R var/
chown apache:apache settings/
chmod -R 755 cache/
```

After that, you should see something like this:

​![](/img/install/install-step-1.png)

Now, just grant permission to write to the required folders/files.

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

After that, all items should be green.

## Database Settings

On the next screen, you should see a similar window. The database must be pre-created.

​![](/img/install/database-settings.png)

## Application Initial Settings

You can fill in these settings according to your needs.

​![](/img/install/initial-app-settings.png)

## Installation Completed

​![](/img/install/install-completed.png)

## Installing Composer Dependencies for Third-Party Extensions and AWS Translations

From the `lhc_web` folder, run:

> `composer install`

Uncomment these two lines by removing the dashes in `lhc_web/index.php` and `lhc_web/cron.php`.

* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/index.php#L31
* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/cron.php#L25

## Logging into the Application

After clicking `Login here`, you should be presented with a login window.

​![](/img/install/login-window.png)

The install URL is always `index.php/site_admin/user/login`.

## Dashboard Page

This is the main application window.  

​![](/img/install/dashboard-installed.png)

## Generating Embed Code

Now, click on the settings icon ​![](/img/install/settings.png) on the top menu. You should see this window. 

​![](/img/install/settings-page.png)

Navigate to

> Embed code -> Widget embed code (new)

You should see a window like this.

​![](/img/install/html-code.png)

To enable proactive chat, check the option `Check for operator invitation messages`.

The embed code should look like this. If you copy this code, change `install.livehelperchat.com/index.php` to your installation path. 

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

For more information and troubleshooting, please see the [integration article](integrating.md).

## Proactive Invitation Setup

Navigate to:

> System configuration -> Live help configuration -> Proactive chat invitations

Here is a demo configuration that we have on demo.livehelperchat.com. It includes the following settings:

* A message is sent to the user after they spend 20 seconds on the page or have more than 2 pageviews.
* A random profile from online operators is shown.
* There are also delayed messages available. Delayed messages can be configured in the autoresponder section.
* Additionally, there is a long auto-delayed message set for 40 seconds. If no one accepts the chat during that period, a message is displayed indicating that all operators are busy.

You can see the proactive invitation setup on our demo installation.

​![](/img/install/proactive-invitation.png)

And here is the instant auto-response message.  
​![](/img/install/autoresponder.png)

Here is the automatic auto-response message.  

​![](/img/install/autoresponder-busy.png)

## Desktop Client

The desktop application can be found at https://github.com/LiveHelperChat/electron. It is based on the Electron framework, acts as a standalone browser, and is much faster than Chrome.

## Further Reading

* [How to remove index.php from URL?](development/remove-index-php.md)
* [Wondering how to set up automatic online/work hours?](online-hours.md)
* [Need to automatically change operator status to offline/online?](offline-online-automation.md)
* [Want to rebrand it according to your site's style?](theme/theme.md)
* [Don't know how to use screen sharing?](co-browsing.md)
* Try the [Windows app](https://livehelperchat.com/demo-12c.html) or the [Chrome extension](https://livehelperchat.com/how-to-use-chrome-extension-245a.html)
* [My users lose chat sessions when they navigate through the site, resulting in duplicate online user records](online-visitors.md#my-users-loose-chat-session-then-they-navigate-through-the-site-duplicate-online-users-records)

## On Windows IIS I Get 404 Error?

Please refer to this comment. It might occur due to too many URL segments.

https://github.com/orgs/LiveHelperChat/discussions/1900#discussioncomment-9767891

## Chat Does Not Start?

If you are running behind CloudFlare or any other proxy that affects the IP seen by Live Helper Chat, please enable it in the settings file.

> https://github.com/LiveHelperChat/livehelperchat/blob/a60a3b485ed08650b9e081ed827998e050717e37/lhc_web/settings/settings.ini.default.php#L18

## Widget Content Looks Very Small on My Website?

Make sure your website has a `viewport` tag.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## My Widget Does Not Load?

Try adding this to your `.htaccess` file in the root folder `lhc_web`. If this folder does not exist, place the `.htaccess` file in the same folder where the `index.php` file exists. It must be placed in the Live Helper Chat folder, not the website.

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|map|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

If, for some reason, the above solution does not work, try this without the `always` keyword.

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|map|wav|pdf|ico|txt)$">
  Header Set Access-Control-Allow-Origin "*"
  Header Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

Other possible causes:

* You have changed `Chat configuration -> Misc -> Domains where script can be embedded. E.g example.com, google.com`, but the embedded script is not listed in the domain.
* You have enabled `System configuration -> GEO Adjustment`, but you have provided invalid data.
* You have blocked yourself via `System configuration -> Live help configuration -> Blocking -> Blocked users`.

## What If You Have to Limit the Widget to a Few Domains and Subdomains?

Embedded on multiple domains.
[More information](docs/integrating.md#what-if-you-have-to-limitate-the-widget-to-few-domain-and-subdomain).

## Chat Was Closed by an Operator/Visitor, but When the Visitor Starts a New Chat, an Old Chat Opens?

Most likely, you have enabled `Chat configuration -> Misc -> Reopen chat functionality enabled`.

[More information](chat/configuration.md#reopen-chat-functionality-enabled).

## Install from the Command Line

It is also possible to install from the command line.

Copy the `install-cli.php` script to the root folder (`lhc_web` if you pulled from GitHub).

```shell script
cp cli/install-cli.php install-cli.php
```

Copy the default `example.settings.ini` to `settings.ini`. Don't forget to modify them.

```shell script
cp cli/example.settings.ini cli/settings.ini
```

Install Live Helper Chat.

```shell script
php install-cli.php cli/settings.ini
```

## Installation Under a Subfolder

If you are running a WordPress site and have nice URLs, you might need to allow access to the Live Helper Chat subfolder. Your `.htaccess` file could look like this:

```apacheconfig
RewriteEngine On
# Previous rules
RewriteRule ^lhc_web/.*$ - [L]
# Afterward rules
```

If you experience logouts after being inactive for some time, it might be because your main website uses the same PHP session cookie name. You can change it in the settings file. Change `php_session_cookie_name` in the main settings [file](https://github.com/LiveHelperChat/livehelperchat/blob/da2815e5e5715594ef819a21da211d086061b58a/lhc_web/settings/settings.ini.default.php#L23) to something like `lhc_session_id`.

## How to Log In?

To log in, point your browser to the directory where the application is installed. The URL address should look like: http://<your_domain>/index.php/site_admin/

If for some reason, you forgot your password and the password reminder does not work for you, you can execute this query. It will set the password for `admin` (user_id 1) to `demo`.

```sql
UPDATE `lh_users` SET password = '$2y$10$IwnZfDcPm7nqvp/BLNmJietHT/TSHCRPXWHKFqheQfojwk4c4znVG' WHERE `id` = 1;
```

If you modified roles/groups/functions and you can't access the application, you can execute this query. It will set `admin` (user_id 1) to have all functions.

Error you might be getting is:

```
You do not have permission to access the module "front" and use "use" function.
```

Execute these queries. They will restore the admin group/role and permissions for the very first user in the users list.

```sql
DELETE FROM `lh_group` WHERE `id` = 1;
DELETE FROM `lh_role` WHERE `id` = 1;
DELETE FROM `lh_grouprole` WHERE `id` = 1;
DELETE FROM `lh_groupuser` WHERE `id` = 1;

INSERT INTO `lh_group` (`id`, `name`, `disabled`, `required`) VALUES (1,'Admin',0,0);
INSERT INTO `lh_role` (`id`, `name`) VALUES (1,'Admin');
INSERT INTO `lh_grouprole` (`id`, `group_id`, `role_id`) VALUES (1,1,1);
INSERT INTO `lh_groupuser` (`id`, `group_id`, `user_id`) (SELECT 1,1,`lh_users`.`id` FROM `lh_users` ORDER BY `lh_users`.`id` ASC LIMIT 1);
```
