---
id: auto-login
title: How to use auto login module?
sidebar_label: Auto login
---

First take a look at github [autologin.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/autologin.php)

Autologin module in LHC itself can be found at "Configuration" => "System" => "Auto login settings"

1.  In this window you have to change two variables after install.
    1.  You have to enable it
    2.  Also you have to change a secret hash, just enter any random text. Min 10 characters length

It's all changes which had to be done in LHC itself. Now we can proceed to autologin link generation. First in autologin.php file there is few parameters which you can pass

```php
<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1,/* 'l' => 'admin', */ 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>
```

 * r - stands for URL, it has to be module url without site_admin prefix. It can be also as chat/single/5993  
 * u - stands for User ID under which user should be logged in. User ID you can find in users lists.  
 * l - is user login/username. It's optional. You have to pass either **u **or **l **but **NOT** both at the same time  
 * t - stands how long auto login link should be valid. It's unix timestamp value in the future. In the above example link is valid for 60 seconds after it's genration. Also you can ommit this argument, that means link never expires. I suggest always pass some timestamp for this.  
 * secret_hash - is a secret hash from LHC back office. It's a random string you have entered previously.  

So that's all. This function in autologin.php file will return link except location where lhc is installed. So for example if you have installed chat in subdir it should look like. We login user based on user ID here. Link is valid for 60 seconds  
​
```html
<a target="_blank" href="**http://example.com/chat/**<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'u' => 1, 't' => time() + 60,  'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>_
```

If chat is installed as subdomain link generation code could look like. We login user based on username. Link is valid for 60 seconds

```html
_<a target="_blank" href="**http://support.example.com/**<?php echo generateAutoLoginLink(array('r' => 'chat/chattabs', 'l' => 'admin', 't' => time() + 60, 'secret_hash' => '12456456456456fghfghfghfgh'))?>">Login me</a>_
```