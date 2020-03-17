---
id: priority
title: How to use chat priority
sidebar_label: Priority
---

Chat priority can be set two ways.

1.  Via embed code
2.  Heritaged from department priority

While heritage from department deos not require any additional actions from admin except set desirable priorities. Embed code requires additional attribute. Here is example of embed code with priority set to 5. It overrides department priority.

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
