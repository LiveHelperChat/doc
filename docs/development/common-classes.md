---
id: common-classes
title: Most common classes used in Live Helper Chat
sidebar_label: Common classes
---

## Introduction

This article provides a quick introduction to the most common classes used in Live Helper Chat.

## Working with Users

```php
// Get the logged-in user instance
\erLhcoreClassUser::instance();

// Get the logged-in user model
\erLhcoreClassUser::instance()->getUserData();

// Check if a user is logged in
\erLhcoreClassUser::instance()->isLogged();

// Check if a user has permission to access a specific module and function
\erLhcoreClassUser::instance()->hasAccessTo('lhfront','default');
```

## Working with URLs

```php
// Generate a link
\erLhcoreClassDesign::baseurl('system/configuration');
 
// Redirect to a specified URL
\erLhcoreClassModule::redirect('user/account');
exit;
```

## Working with Static Files (images, etc.)

```php
// Returns the web path to the specified folder/file
\erLhcoreClassDesign::design('js/widgetv2');

// Compresses and returns the URL to the compressed CSS
\erLhcoreClassDesign::designCSS('css/widgetv2/embed.css;css/widgetv2/embed_override.css');

// Compresses and returns the URL to the compressed JS
\erLhcoreClassDesign::designJS('js/admintheme.form.angular.js')
```

## Working with Templates and View Output

```php
// Uses the provided template.
// Templates are searched through `extensions`, `customtheme`, and `defaulttheme`
$tpl = \erLhcoreClassTemplate::getInstance( 'lhfront/default_new.tpl.php');
$tpl->set('new_dashboard',true);

$Result['content'] = $tpl->fetch();
```

## Result variable options

```php
// You can include custom JS in the footer
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.online.min.js;vendor/jqueryui/core.min.js;vendor/jqueryui/mouse.min.js;vendor/jqueryui/widget.min.js;vendor/jqueryui/sortable.min.js;js/lhc.dashboard.min.js').'"></script>';

// You can include custom JS in the header
$Result['additional_header_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.online.min.js;vendor/jqueryui/core.min.js;vendor/jqueryui/mouse.min.js;vendor/jqueryui/widget.min.js;vendor/jqueryui/sortable.min.js;js/lhc.dashboard.min.js').'"></script>';

// You can include custom CSS in the header
$Result['additional_header_css'] = '<link rel="stylesheet" type="text/css" href="'.erLhcoreClassDesign::designCSS('css/jquery-ui-1.10.4.custom.css').'" />';

// Append a custom class to the pagelayout <body> element
$Result['body_class'] = 'h-100 dashboard-height'; // Makes full height layout

// An anonymous user is viewing.  We will not use a session in that case.
$Result['anonymous'] = true;

// Do not render the right column
$Result['hide_right_column'] = true;

// Path of the module
$Result['path'] = array (
    array(
        'url' => erLhcoreClassDesign::baseurl('system/configuration'),
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('system/configuration','System configuration')
    )
)
```

