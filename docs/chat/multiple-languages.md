---
id: multiple-languages
title: Multiple languages support general workflow
sidebar_label: Multiple languages
---

## Introduction

Live Helper Chat support many languages sometimes it's confusing how to use Live Helper Chat in multiple language environment. I'll give basic tips how to have it properly setup.

 * So first thing if possible you should generate Embed Code and use `Choose a language` option in that window.
 * If above is not possible you can setup theme and just `Widget container section` check `Try to detect language from browser headers option`
 * If you are using static URL e.g `chat/start`, `chat/begin`, `/` etc. You can change default `siteaccess`. See below.
 * For static URL you can also just append language to url E.g `/fre`, `/fre/chat/start`

## How to change default language (`siteaccess`)?

If you are not using embed code, where you can choose a langauge, chat language is english. You can change default language by editing `settings/settings.ini.php` file and changing.

```php
'default_site_access' => 'eng', // Change to fre as example.
```

You should set to one of the available [siteaccess options](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L32) you can also add a new language [language](language.md)

You should click clear cache in back office after you have changed this value.

## How to apply multiple languages for `Canned messages`, `Auto responder`, `Pro active chat invitations`?

These objects has an option to be translated directly in their editing windows.

## How to have multi language bot?

Refer to [language](../bot/multiple-languages.md) document.

## How to add completely new language?

Refer to [language](language.md) article.

## I have translated auto responder,canned messages etc... but language is still incorrect?

 *  You should check what value got `chat_locale`. You can do that by going to chat window and clicking edit icon and view Debug tab
 
![](/img/chat/chat-locale.png) 
 
 * After that you should check what language you have checked and what locales it has assigned.
 
![](/img/chat/lang-check.png) 

* In this particular case all is good because chat is in `sv` locale and assigned langauge also has this value `sv`
* If for some reason `chat_locale` is not represented in the language, although it should. You can add missing language in `System configuration -> Speech -> Dialects`
    * There you can find already existing language and add short code if it's missing 
    * You can also add a new item completely

## Live Helper Chat does not detect correct language?

 * Check above steps that that everything is ok.
 * Live Helper Chat uses `System configuration -> Languages` to determine what `siteaccess` should be used by visitor language. Each language has assigned `Dialects`. It is important that a langauge should have a correct `Dialect` and correct `Language Code` and `Short code` values.
 * Once visitor comes to website we first try to find hist locale by browser headers.
 * If `siteacess` (`lit`,`fre`) etc... is provided it overrides `chat_locale` by `siteaccess` `content_language` attribute value. 

```php
// Detect user locale
if(isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
    $parts = explode(';',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
    $languages = explode(',',$parts[0]);
    if (isset($languages[0])) {
        $chat->chat_locale = $languages[0];
    }
}

// We set custom chat locale only if visitor is not using default siteaccss and default langauge is not english.
if (erConfigClassLhConfig::getInstance()->getSetting('site','default_site_access') != erLhcoreClassSystem::instance()->SiteAccess) {
    $siteAccessOptions = erConfigClassLhConfig::getInstance()->getSetting('site_access_options', erLhcoreClassSystem::instance()->SiteAccess);
    // Never override to en
    if (isset($siteAccessOptions['content_language']) && $siteAccessOptions['content_language'] != 'en') {
        $chat->chat_locale = $siteAccessOptions['content_language'];
    }
}
```
 