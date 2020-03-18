---
id: redirect-contact-form
title: Offline behaviour [Old widget]
sidebar_label: Contact form redirection
---

## How to redirect user to contact form if chat is not accepted for some time?

Just edit depatment and set after how many seconds user should be redirected to leave a message form.

![](https://livehelperchat.com/var/media/images/redirect.png)

As for bonus you can have the following fancy workflow

*   Have a please wait a mesage using auto responder.
*   Setup delayed responder let say after 30 seconds if chat is not accepted. Let say inform user there that he will be redirected to leave a message form.
*   And set that after 35 seconds user is redirected to offline form.

This workflow can be even futher enhanced by transfering chat to another department first and only then showing feedback form. In that case "Rejected" department have to be configured to redirect user to feedback form.

## How to redirect user to custom page then user clicks on offline widget?

Let say you want to redirect user to some page then your operators are offline.

You can do that by adjusting your embed code and appending redirect url. E.g


```js
<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptions.opt = {offline_redirect:'http://google.com'};

(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var refferer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
//po.src = '//demo.livehelperchat.com/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(hide_offline)/true/(department)/4?r='+refferer+'&l='+location;
po.src = '//demo.livehelperchat.com/chat/getstatus/(click)/internal/(position)/bottom_right/(check_operator_messages)/true/(top)/350/(units)/pixels?r='+refferer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```