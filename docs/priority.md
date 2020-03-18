---
id: priority
title: How to use chat priority
sidebar_label: Priority
---


Chat priority can be set two ways.

1.  Via embed code
2.  Heritage from department priority

While heritage from department does not require any additional actions from admin except set desirable priorities. Embed code requires additional attribute. Here is example of embed code with priority set to 5. It overrides department priority.

## New widget

In this case priority is set to 1

```js
<script>var LHC_API = LHC_API||{};
LHC_API.args = {
mode:'widget',
lhc_base_url:'//demo.livehelperchat.com/',
wheight:450,
wwidth:350,
pheight:520,
pwidth:500,
leaveamessage:true, 
priority:1
};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```


## Old widget

In this case priority is set to 5

```js
<script type="text/javascript"> (function() { 
var po = document.createElement('script'); 
po.type = 'text/javascript'; 
po.async = true; 
var refferer = (document.referrer) ? encodeURIComponent(document.referrer) : ''; 
po.src = 'http://demo.livehelperchat.com/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(priority)/5?r='+refferer;
var s = document.getElementsByTagName('script')[0]; 
s.parentNode.insertBefore(po, s); })(); 
</script>
```
