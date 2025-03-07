---
id: override-template
title: How to override templates?
sidebar_label: Overriding templates
---

By default, all templates are located in the

> design/defaulttheme

folder. You can override the default templates by creating an identical template path in the `design/customtheme` folder.

For example, if a template is located in

> defaulttheme/tpl/lhchat/getstatus/container.tpl.php - this is the user status template used to show whether a user is online or not.

To override this template, create a template in

> customtheme/tpl/lhchat/getstatus/container.tpl.php

As in `settings/settings.ini.php`, themes are ordered as follows:

```php
0 => 'customtheme',
1 => 'defaulttheme',
```

`customtheme` has priority over `defaulttheme`, so you can override any template without changing the default templates. You can also override images/css/js files in the same way. Remember to disable the cache while developing. After you enable the cache again, clear it from the back office by clicking "Clear cache."

## Main templates to override

To include custom CSS:

*   `design/defaulttheme/tpl/pagelayouts/parts/page_head_css_extension_multiinclude.tpl.php` - for back-office pages
*   `design/defaulttheme/tpl/pagelayouts/parts/page_head_css_user_extension_multiinclude.tpl.php` - for front-end pages

Sample code:

```html
<link rel="stylesheet" type="text/css" href="<?php echo erLhcoreClassDesign::designCSS('css/myextension.css');?>" />
```

To include custom JS:

*   `design/defaulttheme/tpl/pagelayouts/parts/page_head_js_extension_multiinclude.tpl.php` - for back-office pages
*   `design/defaulttheme/tpl/pagelayouts/parts/page_head_js_user_extension_multiinclude.tpl.php` - for front-end pages

Sample code:

```html
<script type="text/javascript" src="<?php echo erLhcoreClassDesign::designJS('js/extension.lhc.js');?>"></script>
```

The `multiinclude` keyword at the end indicates that the template is included each time it is found (e.g., in another extension).

Read [here](development/unbrand.md) how to override only CSS/JS files.

## How to determine the module in which a template is executed (useful for executing JS in specific modules without overriding the module itself)

To check if it is a specific module:

```php
// To get the site access (site_admin/eng/fre, etc.)
erLhcoreClassSystem::instance()->SiteAccess;

// To get the module
if (erLhcoreClassModule::getModuleName() == 'chat') {
    // Do your thing
};

// To get the function/view
if (erLhcoreClassModule::getCurrentView() == 'start') {
    // Do your thing
};

// To check if it is the dashboard
if (erLhcoreClassModule::getModuleName() == 'front' && erLhcoreClassModule::getCurrentView() == 'default') {
    // Do your thing
};
```

## Overriding the old widget

To override the native placement template, you have to override `defaulttheme/tpl/lhchat/getstatus/native_placement.tpl.php`. The easiest way to override the widget interface rendered on the site is to override it using CSS with the `!important` flag.
