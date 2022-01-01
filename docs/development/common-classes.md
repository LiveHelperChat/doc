---
id: common-classes
title: Most common classes used in Live Helper Chat
sidebar_label: Common classes
---

## Introduction

Purpose of this article quickly introduce the most common Live Helper Chat classes

## Work user user

```php
// Get logged user instance
\erLhcoreClassUser::instance();

// Get logged user model
\erLhcoreClassUser::instance()->getUserData();

// Check is user logged
\erLhcoreClassUser::instance()->isLogged();

// Check does user have permission to specific module, function
\erLhcoreClassUser::instance()->hasAccessTo('lhfront','default');
```

## Working with URL

```php
// Generate link
\erLhcoreClassDesign::baseurl('system/configuration'),
 
// Redirect to specified URL
\erLhcoreClassModule::redirect('user/account');
exit;
```

## Working with static files, images etc

```php
// Will return web path to specified folder/file
\erLhcoreClassDesign::design('js/widgetv2');

// Will compress and return URL to compressed CSS
\erLhcoreClassDesign::designCSS('css/widgetv2/embed.css;css/widgetv2/embed_override.css');

// Will compress and return URL to compressed JS
\erLhcoreClassDesign::designJS('js/admintheme.form.angular.js')
```