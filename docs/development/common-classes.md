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

## Working with templates, view output

```php

// Uses provided template.
// Template are searched through `extensions`, `customtheme`, `defaultteheme`
$tpl = \erLhcoreClassTemplate::getInstance( 'lhfront/default_new.tpl.php');
$tpl->set('new_dashboard',true);

$Result['content'] = $tpl->fetch();
```

## Result variable options

```php
// You can have custom JS to be included in the footer
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.online.min.js;vendor/jqueryui/core.min.js;vendor/jqueryui/mouse.min.js;vendor/jqueryui/widget.min.js;vendor/jqueryui/sortable.min.js;js/lhc.dashboard.min.js').'"></script>';

// You can have custom JS to be included in the header
$Result['additional_header_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.online.min.js;vendor/jqueryui/core.min.js;vendor/jqueryui/mouse.min.js;vendor/jqueryui/widget.min.js;vendor/jqueryui/sortable.min.js;js/lhc.dashboard.min.js').'"></script>';

// You can have custom CSS to be included in the header
$Result['additional_header_css'] = '<link rel="stylesheet" type="text/css" href="'.erLhcoreClassDesign::designCSS('css/jquery-ui-1.10.4.custom.css').'" />';

// Append custom class to pagelayout <body> element
$Result['body_class'] = 'h-100 dashboard-height'; // Makes full height layout

// Anonymous user is viewing. We will not use session in that case
$Result['anonymous'] = true;

// Do not render right column
$Result['hide_right_column'] = true;

// Path of the module
$Result['path'] = array (
    array(
        'url' => erLhcoreClassDesign::baseurl('system/configuration'),
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('system/configuration','System configuration')
    )
)
```

