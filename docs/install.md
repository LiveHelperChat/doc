---
id: install
title: Install Guide
sidebar_label: Install Guide
---

Tutorial how to setup Live Helper Chat.

## Folders permissions

* After you gave permission to write to cache folder. You should see the following window. If you see strange error instead of install make sure that
    * Your browser is pointing to index.php/site_admin/install/install URL
    * You gave recursive write permission to cache folder.

```shell script
chmod -R 777 cache/
```
After that you should see something like his

​![](/img/install/install-step-1.png)

Now just give permission to write to required folders/files

```shell script
chmod 777 settings/
chmod -R 777 var/storage
chmod -R 777 var/userphoto
chmod -R 777 var/storageform
chmod -R 777 var/storageadmintheme
chmod -R 777 var/botphoto
chmod -R 777 var/bottrphoto
chmod -R 777 var/storageinvitation
chmod -R 777 var/storagedocshare
chmod -R 777 var/storagetheme
chmod -R 777 var/tmpfiles
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

*   [Wondering how to setup automatic online/work hours?](online-hours.md)
*   [Need automatically change operator status to offline/online?](offline-online-automation.md)
*   [Want to rebrand it according to your site style?](theme/theme.md)
*   [Don't know how to use screen sharing?](co-browsing.md)
*   Try [windows app](https://livehelperchat.com/demo-12c.html) or [chrome extension](https://livehelperchat.com/how-to-use-chrome-extension-245a.html)

## My widget does not load?

Try to add this in your `.htaccess` file in root folder `lhc_web`.

```apacheconfig
AddType application/wasm .wasm

Header always Set Access-Control-Allow-Origin "*"
Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
```

## How to login?
In order to login point your browser to directory where application is installed. URL address should look like http://<your_domain>/index.php/site_admin/
