---
id: chrome-extension
title: Chrome Extension Guide
sidebar_label: Chrome Extension
---

## Troubleshooting Login Issues

Chrome has recently changed its policy regarding iframe cookies, which are now disabled by default. Here are a couple of ways to bypass this:

### Option A: Modifying `lhc_web/index.php` (Recommended)

1.  Edit the `lhc_web/index.php` file.
2.  Uncomment the following lines (lines 26-27 in the original file):

    ```php
    @ini_set('session.cookie_samesite', 'None');
    @ini_set('session.cookie_secure', true);
    ```

    to:

    ```php
    ini_set('session.cookie_samesite', 'None');
    ini_set('session.cookie_secure', true);
    ```
3.  Restart your browser.

### Option B: Disabling SameSite Flags in Chrome (Not Recommended)

This method is **not recommended** as it reduces your browser's security.

1.  Enter `chrome://flags/` in the Chrome address bar.
2.  Search for `samesite`.
3.  Change the values of the found items from `Default` to `Disabled`.
4.  Restart your browser.

## Installation Tutorial

1.  **Two Installation Methods:**

    1.  **A (Recommended):**
        1.  Install the extension directly from the Chrome Web Store: [https://chrome.google.com/webstore/detail/live-helper-chat/knooimelchgpbpblfhlgkdifnabcolin](https://chrome.google.com/webstore/detail/live-helper-chat/knooimelchgpbpblfhlgkdifnabcolin)
    2.  **B (Advanced):**
        1.  Download the extension from: [https://github.com/remdex/livehelperchat-extensions/raw/master/browsers-extensions/chrome/lhc/lhc_packed/lhc.crx](https://github.com/remdex/livehelperchat-extensions/raw/master/browsers-extensions/chrome/lhc/lhc_packed/lhc.crx)
        2.  Open `chrome://extensions/` in Chrome.
        3.  Drag and drop the downloaded `.crx` file onto the page.
        4.  Confirm the installation.
2.  After installation, a blue Live Helper Chat icon should appear.
3.  Right-click the icon and select "Options".
4.  Enter the URL where Live Helper Chat is installed, **without a trailing slash**. For example:
    1.  If LHC is installed in a subdirectory: `http://example.com/lhc_web`
    2.  If LHC is installed as a subdomain: `http://livehelp.example.com`
5.  Click "Save".
6.  After saving, the icon should change to "P". Click the icon and log in. To avoid logging in each time you start your computer, check the "Remember me" checkbox.
7.  To enable Chrome notifications, grant the necessary permissions in your application settings. You can find the settings URL at: [http://demo.livehelperchat.com/site_admin/chat/listchatconfig](http://demo.livehelperchat.com/site_admin/chat/listchatconfig)

## Icon Meanings

1.  **F:** The extension is not configured. Right-click the icon and select "Options".
2.  **P:** The extension is not logged in to Live Helper Chat. Click the popup and log in.
3.  **(No text):** The extension is logged in, and there are no pending chats.
4.  **(Number):** Indicates the number of pending chats.

## Source Code

To modify the Chrome extension, you can find the source code here:

[https://github.com/remdex/livehelperchat-extensions](https://github.com/remdex/livehelperchat-extensions)

## Screenshots

Here are a few screenshots:

Chrome Extension:

![](https://livehelperchat.com/var/media/files/chrome-extension.png)

Popup View:

![](https://livehelperchat.com/var/media/images/chrome-lhc-popup.png)

## Video Tutorial

<iframe height="315" src="//www.youtube.com/embed/8X2RsE8kMt0" width="560"></iframe>

## FAQ

### Login Issues with Chrome v80

If you encounter the following error in Chrome v80:

```
A cookie associated with a cross-site resource at https:/xxxxxxxxx / was set without the `SameSite` attribute. It has been blocked, as Chrome now only delivers cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```

Add the following to your `.htaccess` file:

```
Header always edit Set-Cookie (.*) "$1; SameSite=None; Secure"
```

## Permissions

The extension requires the following permissions:

> 'chat','chattabschrome'
