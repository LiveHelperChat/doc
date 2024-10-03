---
id: mobile
title: Mobile app setup
sidebar_label: Mobile
---

In order for mobile app to function properly you have to be using min 3.42v.

## Mobile apps

[![Apple store](https://livehelperchat.com/design/defaulttheme/images/apps/apple.svg)](https://apps.apple.com/us/app/id1530399116)

[![Google Play](https://livehelperchat.com/design/defaulttheme/images/apps/google-play.png)](https://play.google.com/store/apps/details?id=com.livehelperchat.chat)

The most recent build can be found here.

[![Codemagic build status](https://api.codemagic.io/apps/5f50c50be2db272d7690ae45/5f50c50be2db272d7690ae44/status_badge.svg)](https://codemagic.io/apps/5f50c50be2db272d7690ae45/5f50c50be2db272d7690ae44/latest_build)

## How to keep online status?

As we all know once app is closed background sync processe is stopped so Live Helper Chat can't know is it online or not. To retain your online status you can do following things.

 * Setup department online hours
 * Change your online status to "Always online" from "Based on activity"
 * Once you finished your work shift don't forget to go offline.

## Permissions

In order for mobile app to work correctly operator has to have permission to

> 'lhrestapi','use_direct_logins'

## Notifications

In order to enable mobile app notifications you have to enable mobile notifications there.

> Configuration -> System -> Mobile (Settings)

## Notifications categories

Mobile version 1.7v and lhc version 3.90v supports Mobile Notifications categories. They will appear as soon you will receive a one notification in the mobile app. After that you will be able to set custom notifications settings per notification category.

### Ongoing trigger alerts!

Since 3.93v you can receive in your mobile app also notifications if subject is added to the chat.

In order to receive notification once subject is added to the chat you have

* To be online.
* In ongoing trigger alerts settings to choose at least one subject.
* If it is you who added subject, notification won't be sent.
* You have to have permission to write to that department.

### Testing

The Easiest way to test is just to login to Live Helper Chat back office and go to `System configuration -> Mobile (Sessions)` and edit session record. In edit window just click `Send test notification`.

If you are not receiving notification check those things.

 * You have enabled notifications in `Configuration -> System -> Mobile (Settings)`

Most of the time if app is installed on iPhone for some reason it does not receive notifications. If this is happening to you do the following

 * Uninstall the app
 * Delete related session record `Configuration -> System -> Mobile (Sessions)`
 * Install an app
 * Now notifications should work.

### Live notifications testing

If you do not receive notification once chat is started, but you receive notification with `Send test notification` check those things.

For floating notification to be seen they have to be enabled in notifications settings Android and IOs. On android these can be enabled per notification category.

:::tip
 * Test notification should be seen only on locked phone screen.
 * IOs
   * Test notification will be visible on locked screen.
   * They are not floating notification and won't be seen on un-locked phone, only on locked phone screen.
   * Test notification does not influence is app running or not. 
   * Unread number on IOs won't appear for test notification.
 * Android
   * Red number appears on unlocked phone app icon.
   * They are not floating notification and won't be seen on unlocked phone only on locked phone screen.
   * Test notification does not influence is app running or not.
:::

:::tip
 * Scenario with live notifications
 * App is or not running and phone is locked
   * IOs
     * Notification is seen on locked phone screen
   * Android
     * Notification is seen on locked phone screen
 * Phone is unlocked and app is or running in the background. App window is not active.
   * IOs
     * Notification is seen on locked phone screen
   * Android
     * Notification is seen on locked phone screen
 * Phone app is opened
   * Floating notification is seen on the top.
:::

 * You have proper permissions as operator
 * You are online as an operator.
 * You have enabled notifications in `Configuration -> System -> Mobile (Settings)`
 * You have permission to access department where chat started.
 * App is using few notifications channels where each channel can have different settings. Make sure app notifications settings are correct.
 * If for some reason sessions status is `thumbs down`. You can delete a session and re-login from the app and try again to test notifications.

:::tip 
At the moment clicking notifications does not open chat window. It just opens an app. This will be changed in next releases.
:::

## How to login?

Login to demo of live helper chat details: 
 
 * https://demo.livehelperchat.com
 * Login: admin
 * Password: demo
 * Un check "Append index.php to address"

## I can't login?

 * Make sure you have entered domain address correctly, pay attention does your URL requires `www` or not. `https://www.example.com` and `https://example.com` are two different URL's
 * If you still can't login please apply this `.htaccess` file because sometimes `Authorization` headers are not parsed correctly by apache server.
 
Apache config file if you are running in a *root* directory. E.g `https://example.com/index.php/site_admin/user/login` or `https://example.com/site_admin/user/login`
 
```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|map|swf|mp3|ogg|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>

RewriteEngine On

# If for some reason you can't authentificate for Rest API try to uncomment following lines
# https://stackoverflow.com/questions/26475885/authorization-header-missing-in-php-post-request

RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]

# Adds support for URL without index.php in URL
RewriteRule ^/var/[^/]+/cache/(stylesheets|images|javascripts?)/.* - [L]
RewriteRule ^upgrade.php - [L]
RewriteRule !\.(gif|jpe?g|png|bmp|css|js|xml|html|json|ico|mp3|wasm|ogg|wav|ogv|map|swf|flv|otf|woff2|woff|eot|ttf)|var(.+)storage.pdf(.+)\.pdf$ index.php

DirectoryIndex index.php
```

Apache config to try if you are running in a subdirectory. E.g https://example.com/lhc_web/index.php/site_admin/user/login

```apacheconfig
AddType application/wasm .wasm

<Files ~ "\.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|ogg|wasm|wav|pdf|ico|txt)$">
  Header always Set Access-Control-Allow-Origin "*"
  Header always Set Access-Control-Allow-Methods: "GET, POST, OPTIONS, PUT, DELETE"
  Header always Set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept, API-Key, Authorization"
</Files>

RewriteEngine On

# If for some reason you can't authentificate for Rest API try to uncomment following lines
# https://stackoverflow.com/questions/26475885/authorization-header-missing-in-php-post-request

RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]
```

## What to enter if I'm running Live Helper Chat in subfolder/subdomain?

 * If subdomain host in that case would be `https://<subdomain>.example.org`
 * If sub-folder host would be `https://example.org/support`  

## How to compile?

Refer to flutter documentation. Few quick tips.

 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/1.1v/android/app/build.gradle#L18-L20
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/1.1v/android/app/build.gradle#L39-L46
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/1.1v/android/app/build.gradle#L53
 * Comment these lines - https://github.com/LiveHelperChat/lhc_messenger/blob/1.1v/android/app/build.gradle#L72

## How to send notification using tour own firebid project?

Take a look at this file. Firebase recent version require Bearer AccessToken which I generate on my on server.
https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhmobile/lhmobile.php#L437

```shell
<?php

header('Content-Type: application/json');

$presentToken = json_decode(file_get_contents('token.json'),true);

// Present token still valid
if (isset($presentToken['accessToken']) && $presentToken['exp'] >= time() + 1*60) {
    echo json_encode($presentToken);
    exit;
}

// Path to your service account file
$serviceAccountFile = 'location/to/service-account.json'; // Outside of web index.php file

// Load service account data
$serviceAccount = json_decode(file_get_contents($serviceAccountFile), true);

$clientEmail = $serviceAccount['client_email'];
$privateKey = $serviceAccount['private_key'];
$firebaseScope = 'https://www.googleapis.com/auth/firebase.messaging';
$tokenUri = 'https://oauth2.googleapis.com/token';

// Create JWT Header
$header = [
    'alg' => 'RS256',
    'typ' => 'JWT'
];

// Create JWT Claim Set
$now = time();
$exp = $now + 3600; // Token valid for 1 hour

$claims = [
    'iss' => $clientEmail,
    'scope' => $firebaseScope,
    'aud' => $tokenUri,
    'iat' => $now,
    'exp' => $exp
];

// Base64 URL Encode Function
function base64UrlEncode($data)
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

// Encode header and claim set
$encodedHeader = base64UrlEncode(json_encode($header));
$encodedClaims = base64UrlEncode(json_encode($claims));

// Sign the JWT
$signatureInput = $encodedHeader . '.' . $encodedClaims;
openssl_sign($signatureInput, $signature, $privateKey, 'SHA256');

// Encode the signature
$encodedSignature = base64UrlEncode($signature);

// Combine header, claims, and signature into the JWT
$jwt = $encodedHeader . '.' . $encodedClaims . '.' . $encodedSignature;

// Send a POST request to get the access token
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $tokenUri);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT,  10);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_USERAGENT, 'curl/7.29.0');

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion' => $jwt
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(400);
    echo json_encode(['error' =>  curl_error($ch)]);
    exit;
}

curl_close($ch);

// Decode the response to get the access token
$responseData = json_decode($response, true);

if (isset($responseData['access_token'])) {
    $accessToken = $responseData['access_token'];
    $tokenData = json_encode(['accessToken' => $accessToken, 'exp' => $exp]);
    echo $tokenData;
    file_put_contents('./token.json', $tokenData);
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Could not get access token!']);
}
```

## My visitors can't see while I'm typing

Most likely it's a problem of apache because it removes `Authorization` header. Please see this [article](development/remove-index-php.md) for a possible fix.

## Demo images

![Mobile screenshot](/img/mobile/screen-1.chat.jpg)
![Mobile screenshot](/img/mobile/screen-2.chat.jpg)
![Mobile screenshot](/img/mobile/screen-4.chat.jpg)
![Mobile screenshot](/img/mobile/screen-6.chat.jpg)
![Mobile screenshot](/img/mobile/screen-7.chat.jpg)
![Mobile screenshot](/img/mobile/screenshot-8.png)
![Mobile screenshot](/img/mobile/screenshot-9.png)

