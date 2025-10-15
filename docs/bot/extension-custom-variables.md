---
id: custom-variables-extension
title: Custom variables defined in extensions
---

See sample of extension

https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/lhccustomvariables

After that you can just use `Debug chat attribute` from `Audit log` window.

In this sample we define two variables

 * `{args.msg.msg_dynamic_array.number_of_words}`
 * `{args.chat.chat_dynamic_array.player_class}`

You can define 

`bootstrap.php` extension file sketch

```php
...
public function run()

    $dispatcher = erLhcoreClassChatEventDispatcher::getInstance();
    
    // Custom variable for the chat
    $dispatcher->listen('chat.dynamic_array', array(
        $this,
        'dynamicArray'
    ));
    
    // Custom variable for the msg object
    $dispatcher->listen('chat.dynamic_array_msg', array(
        $this,
        'dynamicArrayMsg'
    ));
}
...

public function dynamicArrayMsg($params){
    // $params['msg'] present msg objects
    $params['dynamic_array']['number_of_words'] = count(explode(' ', $params['msg']->msg)); // {args.msg.msg_dynamic_array.number_of_words}
}

// Listener in the same class
public function dynamicArray($params)
{
    // $params['chat'] present chat objects 
    $params['dynamic_array']['player_class'] = 'dummy'; // {args.chat.chat_dynamic_array.player_class}
}
```