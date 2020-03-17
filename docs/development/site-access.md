---
id: site-access
title: Understanding site access pattern
sidebar_label: Site access
---

This is kinda tricky feature used by Live Helper Chat. It allows us to do the following tricks

1.  Have different languages by different site acces
2.  Have different design by different site access

### How it is used?

Let's take for example this fragment from configuration

```php
'lit' => array (
        'locale' => 'lt_LT',
        'content_language' => 'lt',
          'dir_language' => 'ltr',
        'title' => '',
        'description' => '',
        'theme' =>
        array (
          0 => 'customtheme',
          1 => 'defaulttheme',
        ),
        'default_url' =>
        array (
          'module' => 'chat',
          'view' => 'startchat',
        ),
      ),
```

I would like to pay attention to the theme array. This theme array describe in what order to look for design files. So if you want to have completely different interface for two difference domains it would be logical just create another site access E.g exmaplecom . Example configuration

```php
'exmaplecom' =>
      array (
        'locale' => 'lt_LT',
        'content_language' => 'lt',
          'dir_language' => 'ltr',
        'title' => '',
        'description' => '',
        'theme' =>
        array (
           0 => 'examplecomtheme',
           1 => 'customtheme',
           2 => 'defaulttheme',
        ),
        'default_url' =>
        array (
          'module' => 'chat',
          'view' => 'startchat',
        ),
      ),
```

So in this case **index.php/examplecom/chat/startchat** will look for files first in **examplecomtheme **theme.