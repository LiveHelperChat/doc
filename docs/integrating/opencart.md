---
id: opencart
title: Integration with OpenCart
---

To integrate Live Helper Chat with OpenCart, you will need to edit the following file:

> `upload/catalog/view/theme/default/template/common/footer.twig`

Append the Live Helper Chat generated code just above the closing `</body></html>` tag:

```html
<script>
var LHC_API = LHC_API||{};
LHC_API.args = {mode:'widget',lhc_base_url:'//demo.livehelperchat.com/',wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,check_messages:false};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
</body></html>
```

**Note:** Replace the example embed code with your actual Live Helper Chat embed code.

Clear cache:

[https://www.templatemonster.com/help/opencart-how-to-clear-cache.html](https://www.templatemonster.com/help/opencart-how-to-clear-cache.html)
