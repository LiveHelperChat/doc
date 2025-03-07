---
id: unbrand
title: How to make unbranded version of Live Helper Chat?
sidebar_label: Unbranding
---

There are two options to unbrand Live Helper Chat:

*   Use themes to restyle basic elements from the [back office](../theme/theme.md).
*   Use the unbranding extension and manually modify all required files.

For most users, we suggest using the theming features for restyling, as described in the [theming documentation](../theme/theme.md).

To unbrand Live Helper Chat, you can use the unbrand extension, which simplifies the process to just a few steps.

Download the "unbrand" extension from [https://github.com/remdex/livehelperchat-extensions](https://github.com/remdex/livehelperchat-extensions) and place it in the `extension` folder.

Before making any changes, ensure that you have [disabled the cache](debug.md#disabling-cache). It's also recommended to read about [debug output](debug.md#enabling-debug-output).

## Activate the unbrand extension in `settings/settings.ini.php`

```php
 'extensions' =>  
           array (  
             0 => 'unbrand',  
       ),
```

## Modify the `"extension/unbrand/design/unbrandtheme/tpl/pagelayouts/parts"` templates

Simply add your company's copyright tag and replace the images in the `"extension/unbrand/design/unbrandtheme/images"` directory. This directory contains all brand-related images, including `favicon.ico`, the notification icon, and logos for both the back office and front office.

Don't forget to adjust the settings in the back office.

After you finish all changes, [enable the cache](debug.md#disabling-cache).

## How to change the default application sounds?

Here's how to change the default sounds for the desktop and web applications.

To change the default application sounds, copy the sounds from:

`design/defaulttheme/sound/*`

to (create the folder if it doesn't exist):

`design/customtheme/sound/*`

This will override the default sounds without modifying the original files.

For the desktop application, simply change the sounds in the `"sounds"` folder.

## How to change the header link and footer content?

We highly recommend the following method for changing the header and footer. The default header and footer are located at:

> `design/defaulttheme/tpl/pagelayouts/parts/page_head_logo.tpl.php`
> `design/defaulttheme/tpl/pagelayouts/parts/page_footer_user.tpl.php`

To change the header or logo, copy the templates from `defaulttheme` to `customtheme`:

> `design/customtheme/tpl/pagelayouts/parts/page_head_logo.tpl.php`
> `design/customtheme/tpl/pagelayouts/parts/page_footer_user.tpl.php`

This will override the default header and footer content without modifying the default designs.

## How to change the logo?

If you only want to change the logo for visitors, you can use themes.

We highly recommend the following method for changing the default app logo. The default logo is located at:

> `design/defaulttheme/images/general/logo.png`

To change the logo, create your logo in:

> `design/customtheme/images/general/logo.png`

This will override the default logo without modifying the core files. If the logo doesn't update after the change, clear the cache.

## How to change/override CSS styles?

See the sample extension at [https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridecss](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/overridecss).

To include custom CSS, read [how to override templates](extending/overriding-templates.md).

Main CSS files to override in your extension:

### Back office related

*   `css/override.css` - Place your back office style overrides in this file within your extension.

### New widget related

New widget popup related:

*   `css/widgetv2/widget_popup_override.css` - Override the look of the popup window of a new widget.
*   `css/widgetv2/widget_mobile_popup_override.css` - If the device is mobile, this CSS will be included in the popup chat window.

Widget related:

*   `css/widgetv2/widget_override.css` - Place your custom CSS for a new widget look (LTR).
*   `css/widgetv2/widget_override_rtl.css` - Place your custom CSS for a new widget look (RTL).
*   `css/widgetv2/widget_mobile_override.css` - If the device is mobile, this additional CSS will be included.

Status widget related:

*   `css/widgetv2/status_override.css` - Override the status widget look.

Page embed mode override:

*   `css/widgetv2/embed_override.css` - Override the page embed mode for a new widget.

## How to change/override JS?

Simply add custom JS for your extension logic. Read [here](extending/overriding-templates.md) about where to include your own JS.

## My styles are not applied

If you are modifying CSS files directly, it's likely that static cache is being used. Static cache is not used if [debug output](../debug/#enabling-debug-output) is enabled. We always recommend overriding CSS files properly, either with extensions or custom themes. You can avoid this problem by [generating static cache](cronjob.md#static-cache).

If you have merge conflicts in `design/defaulttheme/css/css_static` or `design/defaulttheme/js/js_static`, there's no need to resolve them manually. Just [regenerate the static cache](development/quick-guide.md).

## Boosting performance for static files

Once you activate an extension or add a custom theme, CSS/JS files are generated on the fly. By default, if no extensions or custom themes are used, LHC uses pre-compiled CSS/JS files.

### How do I generate static cache?

[Generate static cache](cronjob.md#static-cache).


