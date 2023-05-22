---
id: auto-login
title: Auto login
---

## Introduction

Auto login section allows you configure auto login functionality. Using this functionality you can login to LHC using just plain link. For that reason secret hash has to be generated. Use cases involves quick access to LHC back office from other web systems.

> "System configuration" => "Auto login settings"

### Auto login settings

General settings for auto login.

![](/img/user/auto-login.jpg)

In this window you have to change two variables after install.

* You have to enable it
* Also you have to change a secret hash, just enter any random text. Min 10 characters length

It's all changes which had to be done in LHC itself. Now we can proceed to autologin link generation.

```php
<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1,/* 'l' => 'admin', */ 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>
```

 * r - stands for URL, it has to be module url without site_admin prefix. It can be also as chat/single/5993
 * u - stands for User ID under which user should be logged in. User ID you can find in users lists.
 * l - is user login/username. It's optional. You have to pass either u or l but NOT both at the same time
 * t - stands how long auto login link should be valid. It's unix timestamp value in the future. In the above example link is valid for 60 seconds after it's genration. Also you can ommit this argument, that means link never expires. I suggest always pass some timestamp for this.
 * secret_hash - is a secret hash from LHC back office. It's a random string you have entered previously.

So that's all. This function in will return link except location where lhc is installed. So for example if you have installed chat in subdir it should look like. We login user based on user ID here. Link is valid for 60 seconds


```php
<a target="_blank" href="http://example.com/chat/<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1, 't' => time() + 60,  'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

If chat is installed as subdomain link generation code could look like. We login user based on username. Link is valid for 60 seconds

```php
<a target="_blank" href="http://support.example.com/<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'l' => 'admin', 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>
```

Full example
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

### Custom auto logins

This section allows to generate persistent auto login link. It's way less secure way than first one. But can be used if you are working in a local network without internet access.

![](/img/user/custom-auto-login.jpg)

## Rest API way

You can generate auto login link using [Rest API](development/rest-api.md) also.

> https://api.livehelperchat.com/#/user/post_restapi_generateautologin

## Permissions

Required permissions

> 'lhchat','userautologin'