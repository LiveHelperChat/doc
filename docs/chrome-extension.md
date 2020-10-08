---
id: chrome-extension
title: How to use chrome extension?
sidebar_label: Chrome extension
---

## I can't login?

Chrome recently changed that iframe cookies are not allowed by default. You can bypass that in a few ways

### Option A

Modify `lhc_web/index.php` file and uncomment these lines https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/index.php#L26-L27

```php
// @ini_set('session.cookie_samesite', 'None');
// @ini_set('session.cookie_secure', true);
```

Change to

```php
@ini_set('session.cookie_samesite', 'None');
@ini_set('session.cookie_secure', true);
```

You might need to restart a browser

### Option B

Another way is (not recommended as it will lower your browser security)

* Enter in chrome url address `chrome://flags/`
* In `Search flags` enter `samesite`
* Change found items values from `Default` to `Disabled`
* You might need to restart a browser

## Tutorial

1.  Two install ways
    1.  A (recommended way)
        1.  Navigate to and just install extension [https://chrome.google.com/webstore/detail/live-helper-chat/knooimelchgpbpblfhlgkdifnabcolin](https://chrome.google.com/webstore/detail/live-helper-chat/knooimelchgpbpblfhlgkdifnabcolin)
    2.  B (advanced method)
        1.  Download extension from [https://github.com/remdex/livehelperchat-extensions/raw/master/browsers-extensions/chrome/lhc/lhc_packed/lhc.crx](https://github.com/remdex/livehelperchat-extensions/raw/master/browsers-extensions/chrome/lhc/lhc_packed/lhc.crx)
        2.  After download open in chrome [chrome://extensions/](chrome://extensions/)
        3.  Drop downloaded file there
        4.  Agree to install a extension
2.  After install should appear blue Live Helper Chat icon.
3.  Click right mouse button on icon and choose options
4.  Enter url address where live helper chat is installed without trailing slash. E.g (make sure you use your address)
    1.  If LHC is installed in subdirectory path should look like http://example.com/lhc_web
    2.  if LHC is installed as subdomain just enter http://livehelp.example.com
5.  Click save
6.  After clicking save icon should change to P, now just click an icon and login. If you do not wish to login each time you run computer. Just check a checkbox remember me.
7.  Also to see chrome notifications you can in your application grant permision to show notifications example url in [http://demo.livehelperchat.com/site_admin/chat/listchatconfig](http://demo.livehelperchat.com/site_admin/chat/listchatconfig)

## Icons meanings

1.  F - extensions is not configure, click right mouse button and choose options
2.  P - extension is not logged to Live Helper chat, click popup and login
3.  no text - extension is logged and there are no pending chats
4.  number - shows number of pending chats

## I want to modify chrome extension where can i find source code?

[https://github.com/remdex/livehelperchat-extensions](https://github.com/remdex/livehelperchat-extensions) 

## Few screenshots

Let me know if I missed anything. Few screenshots for teaser

![](https://livehelperchat.com/var/media/files/chrome-extension.png)

View for popup

![](https://livehelperchat.com/var/media/images/chrome-lhc-popup.png)

Video tutorial

<iframe height="315" src="//www.youtube.com/embed/8X2RsE8kMt0" width="560"></iframe>

## FAQ

### I can't login from the Chrome v80

```
A cookie associated with a cross-site resource at https:/xxxxxxxxx / was set without the `SameSite` attribute. It has been blocked, as Chrome now only delivers cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```

Add this to the .htaccess file

```
Header always edit Set-Cookie (.*) "$1; SameSite=None; Secure"
```

## Permissions

Required permissions

> 'chat','chattabschrome'