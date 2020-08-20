---
id: custom-fields-and-prefill
title: Pre-filling form fields and adding custom fields
sidebar_label: Custom fields
---

## Defining fields which visitor can fill
Easiest way to do that is to define them in back office. It can be done in

 > "Settings" > "Live help configuration" > "Start chat form settings" > "Default settings" > "Custom fields"

* See video about custom fields defined in back office - https://youtu.be/huUlx55velk?t=88

* See video about custom fields passed programmatically - https://youtu.be/vEeQVGZgnds

## Passing custom variables

> System Configuration -> Additional chat variables

If you want to pass nick you have to define it first in variables.

[![](https://livehelperchat.com/var/media/images/customvars.png)](https://livehelperchat.com/var/media/images/customvars.png)

Javascript part would look like

```js
if (typeof lhc_var === 'undefined'){  
    window.lhc_var = {}; // Window is required to define variable in global scope 
};  
lhc_var.usernamepassing = 'giovanninew2';
```

This variable can be chagned on the fly and it will be updated automatically.

[![](https://livehelperchat.com/var/media/images/gender.png)](https://livehelperchat.com/var/media/images/gender.png)And if you want to pass any other additional variable. Just define it as above :)

```js
if (typeof lhc_var === 'undefined'){
    window.lhc_var = {}; // Window is required to define variable in global scope 
};
lhc_var.gender = 'Gender';
```

## Showing custom column in chat list

It's possible in dashboard window to show custom column. This can be done by navigating to

> System Configuration -> Additional chat columns

 * `lhc.<variable>` - you can find possible attributes definition in [https://api.livehelperchat.com](https://api.livehelperchat.com) under Models section. E.g lhc.nick
 * `additional_data.<custom_variable_passed>` - E.g additional_data.gender
 * `chat_variable.<extension_variable>`

Example how to define chat column

![](/img/chat/chat-nick.jpg)

Example how it would look like

![](/img/chat/chat-column-custom.jpg)

## Prefilling and defining custom variables

```js
<script type="text/javascript">
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
// If field has checked `Hide if prefilled` it will be hidden.
LHCChatOptions.attr_prefill_admin = new Array();
LHCChatOptions.attr_prefill_admin.push({'index':'name_surname','value':'remdex@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'question','value':'remdex@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'email','value':'remdex2@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'username','value':'remdex2@gmail.com'});
LHCChatOptions.attr_prefill_admin.push({'index':'phone','value':'rem'});

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
2. Enter encryptiuon key and additional encryption key. It has to be strings not shorter than 40 characters.
3. To encrypt on your site part you will need [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php)
At the top there is class commented out and at the bottom there is example how to encrypt data.

The most important part is this. It encrypts data using these two keys.

```php
<?php echo base64_encode(lhSecurity::encrypt('<data_to_encrypt>,'<secret_key>'))?>
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
```

To know how URL would look like with prefilled E-mail, Phone. You can just generate embed code prefill variables with Javascript and click popup window. So in popup URL you would see how URL should look like.

E.g

`http://demo.livehelperchat.com/chat/start?prefill%5Bemail%5D=remdex%40gmail.com&prefill%5Bphone%5D=370454654&prefill%5Busername%5D=Username%20here&value_items_admin[0]=back_office_field`


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