---
id: opencart
title: Integration with OpenCart
---

Edit this file

> upload/catalog/view/theme/default/template/common/footer.twig

Append Live Helper Chat generated code just above

```html
</body></html>
```

to look like. Change with your embed code

```html
<script>var LHC_API = LHC_API||{};
LHC_API.args = {mode:'widget',lhc_base_url:'//demo.livehelperchat.com/',wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,check_messages:false};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>

</body></html>
```

Clear cache

https://www.templatemonster.com/help/opencart-how-to-clear-cache.html
