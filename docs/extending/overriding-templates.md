---
id: override-template
title: How to override templates?
sidebar_label: Overriding templates
---

By default all templates are location in 

 > design/defaulttheme

folder. I have prepared custom theme where you can override default templates by creating identical template path in customtheme folder.

 > design/customtheme

Example.

If template is located in

 > defaulttheme/tpl/lhchat/getstatus/container.tpl.php - it's user status template used to show user status is he online or not.

If you want to override this template you have to create template in

 > customtheme/tpl/lhchat/getstatus/container.tpl.php

Like in settings/settings.ini.php themes order is in the following order

```php
0 => 'customtheme',
1 => 'defaulttheme',
```

Customtheme has priority against defaulttheme, so that way you can override any template you want without changing default templates. You can also override same way images/css/js and so on. Don't forget to disable cache while developing. Also after you enable cache again, clear it from back office by clicking clear cache.

## Main templates to override

To include custom CSS

* `design/defaulttheme/tpl/pagelayouts/parts/page_head_css_extension_multiinclude.tpl.php` - for back office pages
* `design/defaulttheme/tpl/pagelayouts/parts/page_head_css_user_extension_multiinclude.tpl.php` - for front end pages

Sample code

```html
<link rel="stylesheet" type="text/css" href="<?php echo erLhcoreClassDesign::designCSS('css/myextension.css');?>" />
```

To include custom JS

* `design/defaulttheme/tpl/pagelayouts/parts/page_head_js_extension_multiinclude.tpl.php` - for back office pages
* `design/defaulttheme/tpl/pagelayouts/parts/page_head_js_user_extension_multiinclude.tpl.php` - for front end pages

Sample code

```html
<script type="text/javascript" src="<?php echo erLhcoreClassDesign::designJS('js/extension.lhc.js');?>"></script>
```

`multiinclude` keyword at the end indicates that each time template is found (let say in another extension) it's included.

Read [here](development/unbrand.md) how to override only CSS/JS files

## How do I know in what module template is executed. Usefull in case you want to execute your JS in specific modules only without overriding module itself.

To check is it specific module.

```php

// To get siteaccess site_admin/eng/fre etc.
erLhcoreClassSystem::instance()->SiteAccess;

// To get module
if (erLhcoreClassModule::getModuleName() == 'chat') {
    // do your thing
};

// To get function
if (erLhcoreClassModule::getCurrentView() == 'start') {
    // do your thing
};

// To check is it dashboard
if (erLhcoreClassModule::getModuleName() == 'front' && erLhcoreClassModule::getCurrentView() == 'default') {
    // do your thing
};
```

## Old widget

For native placement template you have to override `defaulttheme/tpl/lhchat/getstatus/native_placement.tpl.php`"` the most easiest way to override widget interface you which is rendered on site is just override it using css with !important flag.
