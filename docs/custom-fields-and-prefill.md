---
id: custom-fields-and-prefill
title: Pre-filling form fields and adding custom fields
sidebar_label: Custom fields
---

This feature is usefull if you are integrating third party system and want to prefill/pass some variables to Live Helper Chat. Later these variables can be used in Rest API calls etc...

## Defining fields which visitor can fill
Easiest way to do that is to define them in back office. It can be done in

 > "Settings" > "Live help configuration" > "Start chat form settings" > "Default settings" > "Custom fields"

* See video about custom fields defined in back office - https://youtu.be/huUlx55velk?t=88

* See video about custom fields passed programmatically - https://youtu.be/vEeQVGZgnds

## Passing custom variables

This is preferred way to pass attributes without exposing any UI for the visitor.

> System Configuration -> Additional chat variables

### Main chart variable definition

If you want to pass nick you have to define it first in variables.

[![](https://livehelperchat.com/var/media/images/customvars.png)](https://livehelperchat.com/var/media/images/customvars.png)

### Additional chart variable visible by operator

Fields while defining custom chat variable which will be visible by operator. This variable is non main chat variable.

![](/img/chat/additional-variable.png)

### Additional chat variable not visible by operator.

Fields while defining custom chat variable which will be NOT visbile by operator. This variable is non main chat variable.

![](/img/chat/chat-variable.png)

* `Department` if you do not choose department this field presence will be always checked. I suggest do not choose anything in this field.
* `Javascript/Cookie variable value` - I suggest always use `lhc_var.` prefix. Live Helper Chat monitors this variable for a changes and updates chats automatically. If you are using cookie name and variable is not passed try to change `.` to `_` in the variable name.
* `Variable name` - this field will be visible for an operator as additional variable name.
* `Variable identifier` - this is the key by which you can access this attribute from Rest API calls `{{lhc.var.<chat variable key>}}` or `{{lhc.add.<additional variable key/identifier>}}` or in bot responses `{lhc.add.<field identifier>}` or `{lhc.var.<variable key>}`
* `Log message for for variable. Variables you can use {old_val}, {new_val}` - if you enter a text operator will see a system message if variable is changed while chat is going.
* `If variable is not passed should we keep previously recorded value?` - if you want to keep previously passed value even if current page view does not have it. check it. Usefull for passing username if user logs out.
* `This variable is invisible for operator and will be stored in chat_variables attribute` - this variable will be stored in `chat_variables` attribute and later can be accessed through 
  * For bot response - `{{lhc.var.<chat variable key>}}` or in bot responses `{lhc.var.<variable key>}`
  * `chat_variable.<Variable identifier>` or `{args.chat.chat_variables_array.<Variable identifier>}` for additional chat column.
  * If you do *not* check this variable it should be accessed for additional chat columns
    * `additional_data.<Variable identifier>`
* `Variable type` - choose data type variable should be checked against.

Javascript part would look like.

```js
if (typeof lhc_var === 'undefined') { // This variable has to be defined before Live Helper Chat embed script.
    window.lhc_var = {}; // Window is required to define variable in global scope 
};  
lhc_var.usernamepassing = 'giovanninew2';
```

This variable can be chagned on the fly and it will be updated automatically.

[![](https://livehelperchat.com/var/media/images/gender.png)](https://livehelperchat.com/var/media/images/gender.png)And if you want to pass any other additional variable. Just define it as above :)

```js

if (typeof lhc_var === 'undefined') { // This variable has to be defined before Live Helper Chat embed script.
    window.lhc_var = {}; // Window is required to define variable in global scope 
};
lhc_var.gender = 'Gender';
```

For static URL you can prefill those by `?jsvar[7]=customvar` structure is as `jsvar[<additional chat variable id>]=<value>`

You can update any core attribute of chat object. Like `lhc.email`,`lhc.phone` etc. All possible attributes you can find [https://api.livehelperchat.com](https://api.livehelperchat.com) at the bottom under `Models > Chat`

## Passing monitored variable directly as argument

```javascript
LHC_API = LHC_API||{};
LHC_API.args = {lhc_var : {gender: 'Male'}, mode:'widget',lhc_base_url:'//demo.livehelperchat.com/',wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,department:[1],check_messages: true};
//... Rest of the script
```

Now you can change variable value on the fly by doing something like this

```javascript
LHC_API.args.lhc_var.gender = 'Male seller'
```

Most common mistake is just pass your variable and later modify it expecting it will be monitored.

```javascript
var myVariable = {"gender":"Male"};
LHC_API.args = {lhc_var : myVariable,// ... rest of arguments

// Somewhere in async call of your app
// myVariable.gender = "Male seller"; This will NOT work. You have to do something like this instead
LHC_API.args = {lhc_var : myVariable, loadcb : function(){ myVariable = LHC_API.args.lhc_var; },//...

// Now you can just modify anywhere you want. `myVariable` should be type of `Proxy`
myVariable.gender = "Male seller";
```

## Showing custom column in chat list

It's possible in dashboard window to show custom column. This can be done by navigating to

> System Configuration -> Additional chat columns

You can set these values as `Variable name`

 * `lhc.<variable>` - you can find possible attributes definition in [https://api.livehelperchat.com](https://api.livehelperchat.com) under Models section. E.g lhc.nick
 * `additional_data.<custom_variable_passed>` - E.g `additional_data.gender`
 * `chat_variable.<extension_variable>` - E.g `chat_variable.pid` to show data from `chat.chat_variables_array`. This would be invisible variable if you choose from `Chat Variables` options.
 * `{args.chat.<any_var>.<any_var>}` - you can go as deep as you want.
 * `{args.chat.chat_variables_array.playerClass}||{args.chat.mail_variables_array.player.playerClass}` - will pickup which one founds first. Either `{args.chat.chat_variables_array.playerClass}` or `{args.chat.mail_variables_array.player.playerClass}`


### Example how to define chat column from main chat attributes

![](/img/chat/chat-nick.jpg)

Example how it would look like

![](/img/chat/chat-column-custom.jpg)

### Example how to define chat column from additional chat variables

![](/img/chat/additional-chat-column.png)

### Example how to define custom icon within chat

![](/img/bot/sentiment-per-message/sentiment-icon-chat.png)

## Prefilling and defining custom variables

This feature allows to prefill various variables including the ones defined in back office start chat form settings. If you want to prefill `Department` refer to [Javascript arguments](javascript-arguments.md) article.

```js
<script type="text/javascript">
// This variable has to be defined before Live Helper Chat embed script.
var LHCChatOptions = {};  

// Custom variables definition directly in JS
LHCChatOptions.attr = new Array();  
LHCChatOptions.attr.push({'name':'Bet ID','value':'bet_id','type':'text','size':6,'req':true});  
LHCChatOptions.attr.push({'name':'Transaction ID','value':'','type':'text','size':6});  
LHCChatOptions.attr.push({'name':'Bet ID 2','value':'bet_id 2','type':'hidden','size':0});  
LHCChatOptions.attr.push({'name':'Transaction ID 2','value':'','type':'text','size':12,'show':'on'});  

/* 
 * You can also pass encrypted variables
 * <?php echo base64_encode(lhSecurity::encrypt('<data_to_encrypt>,'<secret_key>','<secret_data_key>'))?>
*/
LHCChatOptions.attr.push({'name':'EncryptedTwo','value':'sb29scUd/KH2O778oMAGLGqqi7Q9oNflysbpx4X6Dp8=','type':'hidden','size':0,'encrypted':true});


// For default fields being prefilled/collected they have to be enabled in start chat form settings page.

// Prefill default fields. If you prefill fields this way even if they have checked `Hide if prefilled`
// They will not be hidden.
LHCChatOptions.attr_prefill = new Array();  
LHCChatOptions.attr_prefill.push({'name':'email','value':'remdex@gmail.com','hidden':true});  
LHCChatOptions.attr_prefill.push({'name':'phone','value':'370454654'});  
LHCChatOptions.attr_prefill.push({'name':'username','value':'Username here'});  
LHCChatOptions.attr_prefill.push({'name':'question','value':'Default user message'}); 

// It's the easiest way to prefill all fields including the ones you defined in back office.
// index value can be field identifier
// 'name_surname' this time is custom admin field defined in back office.
// 'dropdopwn' this time is custom admin field defined in back office and is dropdown.
// If field has checked `Hide if prefilled` it will be hidden.
LHCChatOptions.attr_prefill_admin = new Array();
LHCChatOptions.attr_prefill_admin.push({'index':'name_surname','value':'remdex@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'question','value':'remdex@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'email','value':'remdex2@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'username','value':'remdex2@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'phone','value':'rem'});
LHCChatOptions.attr_prefill_admin.push({'index':'dropdopwn','value':'Siauliai'});

</script>
```
![](/img/chat/prefill-admin-field.png)

This future is usefull then user is logged and you want to pass let say logged user id etc. Some additional attributes and their value. Currently additional attributes can be two types

* text - is visible to user
* hidden - hidden is passed as invisible field from user point of view
* req - field is required
* show - (on - show this field only for online form, off - show this field only for offline form), if skipped for online and offline form field will be shown.

## How securely pass attributes?

You can securely pass attributes. User won't be able to see their values. Usefull for passing user ID etc...

1. First navigate to start chat form settings (Additional form settings) - E.g [https://demo.livehelperchat.com/site_admin/chat/startchatformsettings#/panel3](https://demo.livehelperchat.com/site_admin/chat/startchatformsettings#/panel3)
2. Enter encryptiuon key. It has to be strings not shorter than 40 characters.
3. To encrypt on your site part you will need [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php)
At the top there is class commented out and at the bottom there is example how to encrypt data.

The most important part is this. It encrypts data using key.

```php
<?php echo lhSecurity::encrypt('<data_to_encrypt>,'<secret_key>')?>
```

Example
```
<script>

    if (typeof window.lhc_var === 'undefined'){
        window.lhc_var = {};
    };

    /**
     * We do not want that one websites would be passing variables in secure way and others not in secure way.
     * Because we would end up in a mess just.
     */
    // Can be changed on the fly
    lhc_var.login = '<?php echo lhSecurity::encrypt("remdex_encrypted","<your_secret_key>")?>'; // this has to be encrypted
    ...
```

## How to update attributes while user already is having a chat?

### New widget
You just have to change value of javascript variable.
```js
if (typeof lhc_var === 'undefined'){
    window.lhc_var = {};  // Window is required to define variable in global scope 
};
lhc_var.gender = 'Gender Update';
```

 > :information_source: If you are passing encrypted variables and providing department. Make sure you use same encryption settings in all start chat form settings.


### Old widget
There is two ways to update them

1.  Either update attributes by changing prefilled attribute values. Only hidden fields values are updated. After you have updated any of these
    1.  LHCChatOptions.attr_prefill.push || LHCChatOptions.attr_prefill_admin || LHCChatOptions.attr
    2.  Just call lh_inst.refreshCustomFields();
2.  ​Another way is just call function with arguments. In this example we pass order_id as regular field and Transaction ID as encrypted key
    1.  lh_inst.updateAttribute({"order_id":{"val":454},"Transaction ID":{"val":"<?php echo base64_encode(lhSecurity::encrypt('data_to_encrypt','_<secret_key>_','_<secret_data_key>'_'))?>","enc":true}});_

After these actions operator back office chat window will update an chat data will be shown on right column in main cha tinformation tab.

## Prefilling variables by URL

It's also possible to prefill variables directly by URL. Usefull in case you want to open popup directly to the chat start form.

For options to generate main attribute 

E.g

`https://demo.livehelperchat.com/chat/start<arguments>`

Main attributes options

```
/(id)/<chat id> - chat id to use
/(hash)/<chat hash> - chat hash
/(department)/<department 1/department 2> -> department to use E.g /(department)/1/2
/(theme)/<theme_id> -> theme to use 
/(mobile)/<true|false> -> is it mobile device or not
/(vid)/ -> visitiro unique hash.
/(identifier)/<identifier hash>'
/(inv)/<invitation_id>' - invitation to use
/(survey)/<survey_id> - survey id to use
/(priority)/<priority> - priority to set
/(operator)/<operator_id> - operator to set for pending chat
/(bot)/<bot_id> - bot to use
/(mode)/<popup/embed> - default mode if popup. If you are planning to use it as iframe source set it to embed. This is only usefull if you want to have multiple chat's in the same page.
?jsvar[7]=customvar - prefill additional chat variable defined in `Additional chat variables` section. 7 is additional chat variable ID
```

To know how URL would look like with prefilled E-mail, Phone. You can just generate embed code prefill variables with Javascript and click popup window. So in popup URL you would see how URL should look like.

E.g

`http://demo.livehelperchat.com/chat/start?prefill%5Bemail%5D=remdex%40gmail.com&prefill%5Bphone%5D=370454654&prefill%5Busername%5D=Username%20here&value_items_admin[0]=back_office_field&jsvar[7]=customvar`

## Prefilling variables on old widget

If you want to change default form start fields you can do that at "Configuration" => "Live help configuration" => "Start chat form settings".

If standard fields is not enough and you want to have custom fields in start chat form or prefill some attributes by default.

Example of script for page embed additional attributes (form visible page itself):

```html
<!-- Place this tag where you want the Live Helper Plugin to render. -->  
<div id="lhc_status_container_page"></div>
```

```js
<script type="text/javascript">  
 var LHCChatOptionsPage = {};  
 LHCChatOptionsPage.opt = {};
 
 LHCChatOptionsPage.attr = new Array();  
 LHCChatOptionsPage.attr.push({'name':'Bet ID','value':'bet_id','type':'text','size':6,'show':'on'});  
 LHCChatOptionsPage.attr.push({'name':'Transaction ID','value':'','type':'text','size':6});  
 LHCChatOptionsPage.attr.push({'name':'Bet ID 2','value':'bet_id 2','type':'hidden','size':0});  
 LHCChatOptionsPage.attr.push({'name':'Transaction ID 2','value':'','type':'text','size':12,'show':'on'});  
 LHCChatOptionsPage.attr_prefill = new Array();  
 LHCChatOptionsPage.attr_prefill.push({'name':'email','value':'remdex@gmail.com','hidden':true});  
 LHCChatOptionsPage.attr_prefill.push({'name':'phone','value':'370454654'});  
 LHCChatOptionsPage.attr_prefill.push({'name':'username','value':'Username here'});  
   
 // Prefill fields which were generated from back office  
 LHCChatOptionsPage.attr_prefill_admin = new Array();  
 LHCChatOptionsPage.attr_prefill_admin.push({'index':'0','value':'remdex@gmail.com'});  
 LHCChatOptionsPage.attr_prefill_admin.push({'index':'1','value':'remdex@gmail.com'});
 
 (function() {  
 var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;  
 po.src = 'http://demo.livehelperchat.com/index.php/chat/getstatusembed/(leaveamessage)/true';  
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);  
 })();  
 </script>
```

Example of script for page widget script (first is shown status widget and form is opened in external page or widget):

```js
 <script type="text/javascript">  
 var LHCChatOptions = {};  
 LHCChatOptions.attr = new Array();  
 LHCChatOptions.attr.push({'name':'Bet ID','value':'bet_id','type':'text','size':6,'req':true});  
 LHCChatOptions.attr.push({'name':'Transaction ID','value':'','type':'text','size':6});  
 LHCChatOptions.attr.push({'name':'Bet ID 2','value':'bet_id 2','type':'hidden','size':0});  
 LHCChatOptions.attr.push({'name':'Transaction ID 2','value':'','type':'text','size':12,'show':'on'});  
 LHCChatOptions.attr_prefill = new Array();  
 LHCChatOptions.attr_prefill.push({'name':'email','value':'remdex@gmail.com','hidden':true});  
 LHCChatOptions.attr_prefill.push({'name':'phone','value':'370454654'});  
 LHCChatOptions.attr_prefill.push({'name':'username','value':'Username here'});  
 LHCChatOptions.attr_prefill.push({'name':'question','value':'Default user message'}); 
   
// Prefill fields which were generated from back office
 LHCChatOptions.attr_prefill_admin = new Array();
 LHCChatOptions.attr_prefill_admin.push({'index':'0','value':'remdex@gmail.com'});
 LHCChatOptions.attr_prefill_admin.push({'index':'1','value':'remdex@gmail.com'});
   
 LHCChatOptions.opt = {widget_width:320};
 
 (function() {  
 var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;  
 po.src = 'http://demo.livehelperchat.com/index.php/chat/getstatus/(click)/internal/(position)/middle_right/(leaveamessage)/true/(check_operator_messages)/true/';  
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);  
 })();  
 </script>
```

Pay attention that **LHCChatOptions** and **LHCChatOptionsPage** is different variables.

You can also prefill form directly by URL. E.g  
http://demo.livehelperchat.com/chat/startchat/(leaveamessage)/true?prefill%5Bemail%5D=remdex%40gmail.com&prefill%5Bphone%5D=370454654&prefill%5Busername%5D=Username%20here&value_items_admin[0]=back_office_field

## How prefill just message field using js call? [Old widget]

```html
<input type="button" value="Test workflow" onclick='lh_inst.setDefaultMessage(<?php echo json_encode('Product #fdfdf')?>);lh_inst.lh_openchatWindow()'></input>
```

## Permissions

Required permission to configure `Additional chat variables`

> 'lhchat','administratechatvariable'

Required permission to configure `Additional chat columns`

> 'lhchat','administratecolumn'