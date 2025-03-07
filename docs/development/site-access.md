---
id: site-access
title: Understanding Site Access Patterns
sidebar_label: Site access
---

This is a somewhat complex feature used by Live Helper Chat. It allows for the following:

1.  Serving different languages based on site access.
2.  Applying different designs based on site access.

### How is it used?

Consider the following configuration example:

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

Pay attention to the `theme` array. This array defines the order in which the system searches for design files. If you want a completely different interface for two different domains, create another site access. For example: `examplecom`.

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

In this case, **index.php/examplecom/chat/startchat** will search for files in the following order: `examplecomtheme`, `customtheme`, and `defaulttheme`.
