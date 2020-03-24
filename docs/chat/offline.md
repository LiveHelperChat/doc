---
id: offline
title: Offline messaging
sidebar_label: Offline messaging
---

## Default behaviour

By default leave a message functionality is enabled in generated embed code. If you in embed code generation window un-check

> Show a ‘leave a message form’ when there are no online operators

when chat is offline it will be hidden. If you in "[Start chat form settings](start-chat-form-settings.md)" page enable.
 
> Enable leave a message functionality automatically if there are no online operators

Offline widget will be shown again. So you can genarate embed code without enable leave a message functionality and later enable in start chat form settings page just.

## Defining recipient
 
And after that user will see request form. You can also edit template in e-mail templates section.

*   Recipient decision order
    *   If department has assigned e-mail this email receives the requests
    *   If department does not have assigned e-mail, check perhaps e-mail template has recipient field filled
    *   If none of the above conditions are met, mail is send to first from users list. In most cases it's the admin.


## Redirecting user manually from chat to contact form

![Redirect to contact](/img/files/redirect-contact.jpg)

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

### New widget

Please refer to [javascript arguments](javascript-arguments.md) page.

### Old widget

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

## Offline settings

You can also choose few options regarding offline message storage under

> System configuration > Live Helper Configuration > Offline settings


![Offline settings](/img/chat/offline-settings.jpg)

