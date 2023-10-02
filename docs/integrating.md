---
id: integrating
title: Integrating live helper chat HTML into site
sidebar_label: Integration
---

## Integration

Integrating is fairly simple. Just go to 

> System configuration -> Embed code -> Live help embed code

You can test widget on our [demo page.](https://livehelperchat.com/demo-12c.html)

Choose `Widget embed code`

![Embed code](/img/integration/embed-code-v2.png)

## On each refresh start a new chat. Usefull in embed mode.

Let say you are auto starting new chat every time visitor opens a widget, and he sees bot messages. So widget can act like a form survey and it makes sense just start a fresh chat each time.

## Show a ‘leave a message form’ when there are no online operators

If you do not activate this option status widget will not be shown if there is no online operators. [More information](chat/offline.md)

## Widget embed/click mode

There is a three options

* `widget` - when visitor clicks status icon we will show him widget.
* `embed` - we will render chat content directly in the page.
* `popup` - when visitor clicks status icon we will open popup.

## Widget position

* `Default` - widget will be rendered in the bottom right corner.
* `api` - we will not render status widget. You can activate widget by calling [javascript api functions](javascript-arguments.md#public-methods)

## Department

For which department this code should be rendered. Choose “Any” for all departments, or choose the specific department for this code.

You can choose more than one department at a time. If you choose one department Live Helper Chat will use this department [start chat form settings](chat/start-chat-form-settings.md) or fallback to default settings if none is found.

## Choose a language

Choose a language. Depending on combobox value javascript code below, it will be rendered in that language. If you have more than one language, then choose the language and you will get the code for that language. Once this code is embedded into your website and depending on the language chosen, the User/Visitor Widget interfaces will be in that language.

:::tip
You can enable `Try to detect language automatically` try to detect visitor langauge, but you have configure siteacess to match content language. I would suggest just use [themes](theme/theme.md) and activate in `Widget container` section `Try to detect language from browser headers` option.
:::

## Operator ID

You can enter to what operator started chat should be assigned. Chat will be visible as pending with an assigned operator.

## Check for operator invitation messages

If this checkbox is checked, the User (Visitor) does not have to make a page refresh to initiate the Invitation Logic (check for messages from operator/or check for the  Proactive Chat Invitation message). Please note that checking this checkbox activates messages checking for Users (Visitors) every 15 seconds and it increases server load.

* If you have the Proactive Invitation popup when Users (Visitors) spends 20 seconds on the site, you will not have to refresh the “Online Visitors” page to check this.
* If it is enough if the Invitation Logic runs whenever Users (Visitors) makes a pageview, do not check this checkbox.

![](/img/integration/invitation.png)

## Disable pro active invitations

This disables the Proactive Invitations. This is useful if you want to disable them on your site.

## Static URL

Static url can be used directly by pasting address in browser URL address. More information can be found at [javascript argumetns](javascript-arguments.md#static-url-generation) article.

## Static image

Now you can generate static images also. These static images can be used for e-mails as example.

Code example 1:

```html
<a href="//demo.livehelperchat.com/chat/start">
    <img src="https://demo.livehelperchat.com/site_admin/restapi/onlineimage?&online=I'm%20online&offline=I'm%20offline&w=200" alt="" />
</a>
```

Live example

![](https://demo.livehelperchat.com/site_admin/restapi/onlineimage?&online=I'm%20online&offline=I'm%20offline&w=200)

By default the static image is not refreshed automatically.
You can adapt the code to refresh image every 60000 milliseconds (1 minute)
Example of the auto-refresh code for static image:

Code example 2:

```html
<a href="//demo.livehelperchat.com/chat/start">
    <img src="https://demo.livehelperchat.com/site_admin/restapi/onlineimage?&online=I'm%20online&offline=I'm%20offline&w=200" alt="" id="reloader" onload="setTimeout( () => { document.getElementById('reloader').src='https://demo.livehelperchat.com/site_admin/restapi/onlineimage?&online=I'm%20online&offline=I'm%20offline&w=200' + '?' + new Date().getMilliseconds() } ,60000)" />
</a>
```
Respect the original example 1 we add after alt="" the following code
```html
id="reloader" onload="setTimeout( () => { document.getElementById('reloader').src='test2.jpg' + '?' + new Date().getMilliseconds() } ,60000)"
```
than replaced test2.jpg with the restapi live helper chat URL.

## FAQ

### My widget does not work. I have Live Helper Chat installed on one domain but code is embeded on another domain?

Most likely it's an issue with CORS rules. There is .htaccess samples you might need to apply.

.htaccess sample if you embed just on one domain code. Don't forget to change to your domain.

```apacheconfig
<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|map|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "http://example.com"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

If code will be embedded on multiple domains.
```apacheconfig
<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|map|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>
```

For nginx read this [article](nginx-configuration-tips.md). 

### What if you have to limitate the widget to few domain and subdomain?
Embedded on multiple domains.

```apacheconfig
<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|wav|pdf|ico|txt)$">
  SetEnvIf Origin "(http(s)?://localhost:8080)|(http(s)?://www.domain1.ext)|(http(s)?://www.domain2.ext)|(http(s)?://subdomain1.domain.ext))$" AccessControlAllowOrigin=$0
  Header add Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>

# DISABLE CACHING
<IfModule mod_headers.c>
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires 0
</IfModule>

<FilesMatch "\.(css|flv|gif|htm|html|ico|jpe|jpeg|jpg|js|mp3|mp4|png|pdf|swf|txt)$">
    <IfModule mod_expires.c>
        ExpiresActive Off
    </IfModule>
    <IfModule mod_headers.c>
        FileETag None
        Header unset ETag
        Header unset Pragma
        Header unset Cache-Control
        Header unset Last-Modified
        Header set Pragma "no-cache"
        Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
        Header set Expires "Thu, 1 Jan 1970 00:00:00 GMT"
    </IfModule>
</FilesMatch>
```
For nginx on Plesk need this configuration

```nginx

location ~* ^/internal-nginx-static-location/(.+\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|wav|pdf|ico|txt))$ {
	alias /var/www/vhosts/domain.ext/httpdocs/domainfolder/domainchat/livechat$1;
	internal;
	if ($http_origin ~* "^https?://(domain1.ext|www.domain1.ext|domin2.ext|www.domain2.ext)$") {
		add_header Access-Control-Allow-Origin "$http_origin";
	}
	add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS, PUT, DELETE';
	add_header Access-Control-Allow-Headers 'Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization, X-Test';
}

proxy_connect_timeout 180s;
proxy_send_timeout 180s;
proxy_read_timeout 180s;
fastcgi_send_timeout 180s;
fastcgi_read_timeout 180s;

```

### How to make automatic status change for frontend visitors?

Usually then you go offline or online visitors has to refresh page to see new widget status. It's possible to make status changes visible without required pageview also.

You just have to go to 

 > Configuration -> Live Help configuration -> Chat configuration -> Visitor activity -> Interval between chat status checks in seconds, 0 disabled.

I suggest to set there value 300 it will be status check every 5 minits. Usually if you have not changed default configuration it's foreseen that operator status changes if his last activity was 5 minits ago.

In any case if you want to be more realtime you can reduce this time. Have in mind that every time status check is performaned there is involvment of request to server.

### I'm offline/online but my site shows that I'm online/offline?

Few possible cases

### You are offline, but page shows that you are online

* You have setup department online hours, and chat just shows status based on that.
* There is 5 minits timeout before chat status change to offline. It's time before last time operator was seen. This can be changed in chat configuraiton. I suggest do not keep it shorter than 30 seconds.
* By default to see new operator status it's required page view. If you do not want that you can enable automatic status change.

### You are online but web page shows that you are offline

* You have checked in chat configuration "Ignore users online statuses and use department online hours", but you forgot to active online hours in department.

### How it is decided to show online/offline user?

You should check those conditions if you are online, but widget shows that no operators are connected.

* Visitor can be assigned to Individual department, Department or Department Group or all departments.
* By checking is someone online we first check was department provided or not
* If department id **is or not** provided we decide to show widget or not based on this workflow
  * We check is someone online from directly assigned operators or someone with all departments assigned
  * If we did not found any, we check is department online hours provided.
  * We also check is department overloaded or not. If department is overloaded (max pending chats limit has been reached) it will go to offline mode except if bot is assigned.
  * We check that is operator online and have write access to specific department or at-least one
* Operators themself can have two statuses
  * Online/Offline - is operator online or not
  * Visible/Invisible - if operator opens pending chat being in invisbile mode. Chat is not assigned to him and chat does not change status.
