---
id: custom-variables-extension
title: Custom variables defined in extensions
---

You can define 

`bootstrap.php` extension file sketch

```php
...
public function run()

    $dispatcher = erLhcoreClassChatEventDispatcher::getInstance();
    
    $dispatcher->listen('chat.dynamic_array', array(
        $this,
        'dynamicArray'
    ));
}
...

// Listener in the same class
public function dynamicArray($params)
{
    // $params['chat'] present chat objects 
    $params['dynamic_array']['player_class'] = 'dummy'; // {args.chat.chat_dynamic_array.player_class}
}

```