---
id: auto-login
title: How to Use the Auto Login Module
sidebar_label: Auto login
---

First, take a look at the GitHub repository for [autologin.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/autologin.php).

The Auto Login module in LHC can be found at "Configuration" => "System" => "Auto login settings".

1.  In this window, you have to configure two settings after installation:
    1.  Enable the module.
    2.  Change the secret hash. Enter any random text with a minimum length of 10 characters.

These are all the changes that need to be made within LHC itself. Now, we can proceed to generate the auto-login link. The `autologin.php` file accepts several parameters:

```php
<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1,/* 'l' => 'admin', */ 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>
```

*   `r` - Represents the URL. It should be the module URL without the `site_admin` prefix. For example: `chat/single/5993`.
*   `u` - Represents the User ID that the user should be logged in as. You can find the User ID in the users list.
*   `l` - Represents the user login/username. This is optional. You must pass either `u` or `l`, but not both at the same time.
*   `t` - Represents the validity duration of the auto-login link. It's a Unix timestamp value in the future. In the example above, the link is valid for 60 seconds after its generation. You can omit this argument, which means the link never expires. It is recommended to always include a timestamp for security.
*   `secret_hash` - This is the secret hash from the LHC back office. It's the random string you entered previously.

That's all there is to it! The `generateAutoLoginLink` function in the `autologin.php` file will return the link, excluding the base LHC installation path. For example, if you have installed the chat in a subdirectory, the link should look like this (logging in a user based on User ID, valid for 60 seconds):

```html
<a target="_blank" href="**http://example.com/chat/**<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1, 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

If the chat is installed as a subdomain, the link generation code could look like this (logging in a user based on username, valid for 60 seconds):

```html
<a target="_blank" href="**http://support.example.com/**<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'l' => 'admin', 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```
