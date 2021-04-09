---
id: unbrand
title: How to make unbranded version of Live Helper Chat?
sidebar_label: Unbranding
---

There is two options to unbrand

*   Use themes and restyle basic things from [back office](../theme/theme.md)
*   Use unbranding extension and modify all required files by hand

For majority of users I suggest just use theming features [for restyling](../theme/theme.md).

In order to unbrand esility Live Helper Chat we have a module for that. So unbranding takes just few steps.

Download "unbrand" extension from [https://github.com/remdex/livehelperchat-extensions](https://github.com/remdex/livehelperchat-extensions) and put it in extension folder.

Before making any changes please make sure that you have [disabled a cache.](debug.md#disabling-cache) Also it's would be nice if you read about [debug output.](debug.md#enabling-debug-output)

## Activate unbrand extension in settings/settings.ini.php

```php
 'extensions' =>  
           array (  
             0 => 'unbrand',  
       ),
```
 
## Modify "extension/unbrand/design/unbrandtheme/tpl/pagelayouts/parts" templates

It's just enough write your own company copyright tag and replace images in "extension/unbrand/design/unbrandtheme/images". I have put all brand related images, favicon.ico, notificaiton icon and logo for back office and front office.

Don't forget to change some settings in back office.

Also [enable cache](debug.md#disabling-cache) after you finished all changes.

## How to change default application sounds?

Here is workflow how to change desktop and web application default sounds.

In order to change default application sounds copy sounds from

`design/defaulttheme/sound/*`

to, create folder if it does'nt exists.

`design/customtheme/sound/*`

That way you will override default sounds without modifying default sounds.

For desktop application just change sounds in "sounds" folder.

## How to change header link and footer content?
I highly recommend the following way for changing header and footer. Default header and footer is located at

> design/defaulttheme/tpl/pagelayouts/parts/page_head_logo.tpl.php
> design/defaulttheme/tpl/pagelayouts/parts/page_footer_user.tpl.php

In order to change header or logo just copy templates from defaulttheme to customtheme

 > design/customtheme/tpl/pagelayouts/parts/page_head_logo.tpl.php
 > design/customtheme/tpl/pagelayouts/parts/page_footer_user.tpl.php​

That way you will override default header and footer content without changing default designs.

## How to change logo?

If you want just change logo for visitors you can just use themes.

I highly recommend the following way for changing default app logo. Default logo is located at:

 > design/defaulttheme/images/general/logo.png

In order to change logo just create your logo in

 > design/customtheme/images/general/logo.png

That way you will override default logo without changing kernel. If after change logo is displayed the same, clean the cache.

## How to change/override style CSS?

See sample extension at https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridecss

To include custom CSS read [how to override templates](extending/overriding-templates.md)

Main css files to override in your extension

### Back office related

* `css/override.css` - put your back office style overrides in this file in your own extension

### A new widget related

New widget popup related
* `css/widgetv2/widget_popup_override.css` - override look of the popup window of a new widget
* `css/widgetv2/widget_mobile_popup_override.css` - if device is mobile in popup chat window we will include this CSS

Widget related
* `css/widgetv2/widget_override.css` - put your custom CSS for a new widget look. (LTR)
* `css/widgetv2/widget_override_rtl.css` - put your custom CSS for a new widget look. (RTL)
* `css/widgetv2/widget_mobile_override.css` - if device is mobile we will include this additional CSS

Status widget related
* `css/widgetv2/status_override.css` - override status widget look

Page embed mode override
* `css/widgetv2/embed_override.css` - override page embed mode for a new widget

## How to change/override JS?

Just add custom JS for your extension logic. Read [here](extending/overriding-templates.md) where to include your own JS

## My styles are not applied

If you are modifying CSS files directly most likely static cache are used. Static cache is not used if [debug output](../debug/#enabling-debug-output) is enabled. I always recommend to override CSS files properly either with extensions or custom themes. You can avoid this problem by [generating static cache.](cronjob.md#static-cache)

If you have a merge conflicts in `design/defaulttheme/css/css_static` or `design/defaulttheme/js/js_static` there is no need to solve these manually. Just [regenerate a static cache](development/quick-guide.md).

## Boosting performance for static files

Once you active an extension or add custom theme CSS/JS files are generated on the fly. By default LHC if no extensions or custom themes are used uses once per lifetime compiled CSS/JS files.

### How do I generate static cache?

[generating static cache.](cronjob.md#static-cache)


