---
id: unbrand
title: How to make unbranded version of Live Helper Chat?
sidebar_label: Unbranding
---

There is two options to unbrand

*   Use themes and restyle basic things from [back office](/how-to-use-themes-330a.html)
*   Use unbranding extension and modify all required files by hand

For majority of users I suggest just use theming features [for restyling](/how-to-use-themes-330a.html).

In order to unbrand esility Live Helper Chat we have a module for that. So unbranding takes just few steps.

Download "unbrand" extension from [https://github.com/remdex/livehelperchat-extensions](https://github.com/remdex/livehelperchat-extensions) and put it in extension folder.

Before making any changes please make sure that you have [disabled a cache.](/article/view/40) Also it's would be nice if you read about [debug output.](/how-to-use-debug-output-291a.html)

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

Also [enable cache](/article/view/40) after you finished all changes.

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

