---
id: custom-fields-and-prefill
title: Pre-filling form fields and adding custom fields
sidebar_label: Custom fields
---

### Defining fields which visitor can fill
Easiest way to do that is to define them in back office. It can be done in

 > "Settings" > "Live help configuration" > "Start chat form settings" > "Default settings" > "Custom fields"

See video https://youtu.be/huUlx55velk?t=88

### New way passing custom variables

System Configuration -> Additional chat variables

If you want to pass nick you have to define it first in variables.

[![](https://livehelperchat.com/var/media/images/customvars.png)](https://livehelperchat.com/var/media/images/customvars.png)

Javascript part would look like

```js
if (typeof lhc_var === 'undefined'){  
    var lhc_var = {};  
};  
lhc_var.usernamepassing = 'giovanninew2';
```

This variable can be chagned on the fly and it will be updated automatically.

[![](https://livehelperchat.com/var/media/images/gender.png)](https://livehelperchat.com/var/media/images/gender.png)And if you want to pass any other additional variable. Just define it as above :)

```js
if (typeof lhc_var === 'undefined'){
    var lhc_var = {}; 
};
lhc_var.gender = 'Gender';
```

### Old way passing custom variables

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

This future is usefull then user is logged and you want to pass let say logged user id etc. Some additional attributes and their value. Currently additional attributes can be two types

*   text - is visible to user
*   hidden - hidden is passed as invisible field from user point of view
*   req - field is required
*   show - (on - show this field only for online form, off - show this field only for offline form), if skipped for online and offline form field will be shown.

Pay attention that **LHCChatOptions** and **LHCChatOptionsPage** is different variables.

You can also prefill form directly by URL. E.g  
http://demo.livehelperchat.com/chat/startchat/(leaveamessage)/true?prefill%5Bemail%5D=remdex%40gmail.com&prefill%5Bphone%5D=370454654&prefill%5Busername%5D=Username%20here&value_items_admin[0]=back_office_field

### How prefill just message field using js call?

```html
<input type="button" value="Test workflow" onclick='lh_inst.setDefaultMessage(<?php echo json_encode('Product #fdfdf')?>);lh_inst.lh_openchatWindow()'></input>
```


### How securely pass attributes?

Since 2.42v you can securely pass attributes. So user won't be able to see their values. Usefull for passing user ID etc...

1.  First navigate to start chat form settings (Additional form settings) - E.g [https://demo.livehelperchat.com/site_admin/chat/startchatformsettings#/panel3](https://demo.livehelperchat.com/site_admin/chat/startchatformsettings#/panel3)
2.  Enter encryptiuon key and additional encryption key. It has to be strings not shorter than 40 characters. Live helper part is done. Now the fun part.

To encrypt on your site part you will need [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/doc/autologin/lhsecurity.php)

At the top there is class commented out and at the bottom there is example how to encrypt data.

The most important part is this. It encrypts data using these two above keys.

```php
<?php echo base64_encode(lhSecurity::encrypt('<data_to_encrypt>,'<secret_key>','<secret_data_key>'))?>
```


### How to update attributes while user already is having a chat?

There is two ways to update them

1.  Either update attributes by changing prefilled attribute values. Only hidden fields values are updated. After you have updated any of these
    1.  LHCChatOptions.attr_prefill.push || LHCChatOptions.attr_prefill_admin || LHCChatOptions.attr
    2.  Just call lh_inst.refreshCustomFields();
2.  ​Another way is just call function with arguments. In this example we pass order_id as regular field and Transaction ID as encrypted key
    1.  lh_inst.updateAttribute({"order_id":{"val":454},"Transaction ID":{"val":"<?php echo base64_encode(lhSecurity::encrypt('data_to_encrypt','_<secret_key>_','_<secret_data_key>'_'))?>","enc":true}});_

After these actions operator back office chat window will update an chat data will be shown on right column in main cha tinformation tab.