---
id: auto-login
title: Auto login
---

## Introduction

The auto-login feature allows you to configure automatic login functionality. With this feature, you can log in to LHC using a simple link. For this reason, a secret hash needs to be generated. Use cases include quick access to the LHC back office from other web systems.

> "System configuration" => "Auto login settings"

### Auto-Login Settings

General settings for auto-login.

![](/img/user/auto-login.jpg)

In this window, you need to configure two settings after installation:

*   Enable the auto-login feature.
*   Change the secret hash. Enter any random text with a minimum length of 10 characters.

These are all the changes that need to be done within LHC itself. Now, we can proceed to generate the auto-login link.

```php
<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1,/* 'l' => 'admin', */ 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>
```

*   `r` - Represents the URL. It should be the module URL without the `site_admin` prefix. It can also be in the format `chat/single/5993`.
*   `u` - Represents the User ID under which the user should be logged in. You can find the User ID in the users list.
*   `l` - Represents the user login/username. It's optional. You have to pass either `u` or `l`, but NOT both at the same time.
*   `t` - Represents how long the auto-login link should be valid. It's a Unix timestamp value in the future. In the example above, the link is valid for 60 seconds after its generation. You can also omit this argument, which means the link never expires. I suggest always passing a timestamp for security reasons.
*   `secret_hash` - This is the secret hash from the LHC back office. It's a random string you entered previously.

That's all. This function will return the link, excluding the location where LHC is installed. For example, if you have installed the chat in a subdirectory, the link should look like this. We log in the user based on the User ID here. The link is valid for 60 seconds.

```php
<a target="_blank" href="http://example.com/chat/<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1, 't' => time() + 60,  'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

If the chat is installed as a subdomain, the link generation code could look like this. We log in the user based on the username. The link is valid for 60 seconds.

```php
<a target="_blank" href="http://support.example.com/<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'l' => 'admin', 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

Full example:

```php
<?php

function generateAutoLoginLink($params){

    $dataRequest = array();
    $dataRequestAppend = array();

    // Destination ID
    if (isset($params['r'])){
        $dataRequest['r'] = $params['r'];
        $dataRequestAppend[] = '/(r)/'.rawurlencode(base64_encode($params['r']));
    }

    // User ID
    if (isset($params['u']) && is_numeric($params['u'])){
        $dataRequest['u'] = $params['u'];
        $dataRequestAppend[] = '/(u)/'.rawurlencode($params['u']);
    }

    // Username
    if (isset($params['l'])){
        $dataRequest['l'] = $params['l'];
        $dataRequestAppend[] = '/(l)/'.rawurlencode($params['l']);
    }

    if (!isset($params['l']) && !isset($params['u'])) {
        throw new Exception('Username or User ID has to be provided');
    }

    // Expire time for link
    if (isset($params['t'])){
        $dataRequest['t'] = $params['t'];
        $dataRequestAppend[] = '/(t)/'.rawurlencode($params['t']);
    }

    $hashValidation = sha1($params['secret_hash'].sha1($params['secret_hash'].implode(',', $dataRequest)));

    return "index.php/user/autologin/{$hashValidation}".implode('', $dataRequestAppend);
}

?>

<a target="_blank" href="http://dev.livehelperchat.com/<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1,/* 'l' => 'admin', *//* 't' => time() + 50000 */ 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

### Custom Auto Logins

This section allows you to generate a persistent auto-login link. It's a less secure method than the first one but can be used if you are working on a local network without internet access.

![](/img/user/custom-auto-login.jpg)

## REST API

You can also generate an auto-login link using the [REST API](development/rest-api.md).

> https://api.livehelperchat.com/#/user/post_restapi_generateautologin

## Permissions

Required permissions:

> 'lhchat','userautologin'
