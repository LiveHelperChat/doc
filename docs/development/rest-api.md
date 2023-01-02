---
id: rest-api
title: Rest API
sidebar_label: Rest API
---

## Where can I find available methods?

https://api.livehelperchat.com/#/

Chat Rest API modules allows to do the following things

* Check global status is anyone online
* Check status for custom users
* Check status for departments
* And many more...

## How do I authenticate?

You can use rest api using these two options.

* You can create Rest API Key

> System configuration -> Live help configuration -> Rest API

* Use your regular back office logins. You have to have this permission.

> 'lhrestapi','use_direct_logins'

Authentication requires username and password (Basic Authentication method). If you are using `Rest API` keys. Username is a username of the account under which API key is created.

If you are using direct logins username is the account username and password is your account password.

If for some reasons you can't log in make sure that your `.htaccess` file has the following lines

```apacheconf
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]
```

## How to set up Rest API for third party?

Let say you want to give third party developer access only to the chats and nothing else

* Create a role named `Rest API` under 
  * List roles URL `/site_admin/permission/roles`
  * New role URL `/site_admin/permission/newrole`
* Give permission to that role `'lhchat', 'use'`
* Create a group `Rest API`
  * Group list URL `/site_admin/user/grouplist`
  * New group URL `/site_admin/user/newgroup`
* Assign just created role `Rest API` to this group by modifying it.
* Create a user and assign him to `Rest API` group.
* Don't forget to assign to that user departments, so only those departments chats he will be able to see.
* Navigate to `/site_admin/restapi/index` and create a Rest API key under that user.
* Your username will be 
  * `e-mail` or `username`
  * Password will be the one you created in Rest API section

To explore API navigate to `https://api.livehelperchat.com/#/` and change `https://demo.livehelperchat.com/restapi/swagger` to your address

Quick reminder about chat messages types. Message type depends on `user_id`

 * `0` - Visitor message, 
 * `> 0` - Operator Message, 
 * `-1` - System message. Not visible by visitor 
 * `-2` - Bot message

Quick reminder about chat status

 * const STATUS_PENDING_CHAT = 0;
 * const STATUS_ACTIVE_CHAT = 1;
 * const STATUS_CLOSED_CHAT = 2;
 * const STATUS_CHATBOX_CHAT = 3;
 * const STATUS_OPERATORS_CHAT = 4;
 * const STATUS_BOT_CHAT = 5;

## Where this module can be used?

this module can be used for custom status widget generation. Integration LHC with other applicatios. Writing custom UI from scratch

## In what format module exports data?

Chat exports data in JSON format. Module also supports PJSON

## How to check is anyone online?

[http://demo.livehelperchat.com/index.php/restapi/isonline](http://demo.livehelperchat.com/index.php/restapi/isonline) -  for general check

[http://demo.livehelperchat.com/index.php/restapi/isonline?callback=loadCallBack](http://demo.livehelperchat.com/index.php/restapi/isonline?callback=loadCallBack) - for PJSON, callback value can be any

## How to check is user online?

[http://demo.livehelperchat.com/index.php/restapi/isonlineuser/1](http://demo.livehelperchat.com/index.php/restapi/isonlineuser/1) - last parameters is user id

[http://demo.livehelperchat.com/index.php/restapi/isonlineuser/1?callback=loadCallBack](http://demo.livehelperchat.com/index.php/restapi/isonlineuser/1?callback=loadCallBack) - last parameters is user id

## How to check is department online?

[http://demo.livehelperchat.com/index.php/restapi/isonlinedepartment/1](http://demo.livehelperchat.com/index.php/restapi/isonlinedepartment/1) - last parameters is department id. This function checks for online department explicit. That means if for user is assigned all departments department will be offline.

[http://demo.livehelperchat.com/index.php/restapi/isonlinedepartment/1?callback=loadCallback](http://demo.livehelperchat.com/index.php/restapi/isonlinedepartment/1?callback=loadCallback) - last parameters is department id

## How to log online visitor?

This can be used inside any desktop application to log visitor activity in application itself.

> $response = $LHCRestAPI->execute('chatcheckoperatormessage', array(  
>     'ip' => '88.118.220.88'  
>     'dt' => 'APPLICATIN_NAME - Some Application Specific Window',  
>     'ua' => '', // User Agent  
>  ), array(  
>     'vid' => '',                  // It's new visitor it still has not vid assigned  
>     'count_page' => 1,  // Log it as real page view, not just message check from operator  
>     'tz' => 0,                    // Time Zone offset from GMT  
>     'priority' => 0,         // Chat priority  
>     'operator' => 0,       // Operator  
>     'theme' => 0,            // Theme  
>     'survey' => 0,           // Survey (optional)  
>     'department' => 5,  // Department (optional)  
>     'uactiv' => 1              // Is user considered active or not  
> ), 'POST');

If response does not caontains any errors you can vid by

> if ($response->error == false && isset($response->result->vid)) {  
>     $response2 = $LHCRestAPI->execute('chatcheckoperatormessage', array(  
>         'ip' => '88.118.220.88',  
>         'dt' => 'APPLICATIN_NAME - About window',  
>         'ua' => '', // User Agent  
>     ), array(  
>         'vid' => $response->result->vid,  
>         'count_page' => 1,    
>         'tz' => 0,            
>         'priority' => 0,      
>         'operator' => 0,      
>         'survey' => 0,        
>         'uactiv' => 1         
>     ), 'POST',true,'');
> 
>  // If there is unread message we can read message from operator
> 
>     if ($response->error == false && $response->result->action == 'read_message') {  
>         $urlAppend = $response->result->args->url_append;  
>         echo "Reading message from operator\n";  
>           
>         // @todo add message read from operator  
>     } elseif ($response->error == false && $response->result->action == 'continue') {  
>         // Just repeat request  
>     }
> 
>     echo "Second page view\n";  
> /* } else {  
>     echo "Some error\n";      
> } */

Possible action values

*   disable_check - there should not be any more requests to "chatcheckoperatormessage"
*   continue - just continue sending these request untill user makes some actions or just trigger get's activacted
*   read_message - there is pending message from operator or proactive trigger

## How to list chats, departments, messages, get chat information?

Just refer to this example

[https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/rest_api/example.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/rest_api/example.php)

## Permissions

Required permissions to configure Rest API keys.

> 'lhrestapi','use_admin'

## Apache tricks

If for some reason you can't authenticate refer to this [article](development/remove-index-php.md).
