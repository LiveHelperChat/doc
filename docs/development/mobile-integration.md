---
id: mobile-integration
title: How to integrate Live Helper Chat into third party application, E.g mobile?
sidebar_label: Mobile integration
---

The simplest way to integrate into a third-party application is just to have WebKit embed in your mobile app with the following embed code

* Sample just without `UUID` attribute https://livehelperchat.com/lhcsamples/sample-5.html
* Here we just set `fscreen` and `UUID` attributes additionally
* [How to pass logged user id or any other account related information](custom-fields-and-prefill.md#how-securely-pass-attributes)
* [Show custom columns in chat list/window](custom-fields-and-prefill.md#showing-custom-column-in-chat-list)
* If you want to strictly reopen the same chat for a visitor each time they return, you can use `chat_id` and `chat_hash` attributes [Javasript arguments reference](javascript-arguments.md). In this scenario, you should first create the chat yourself using the [Rest API](https://api.livehelperchat.com/#/chat/post_restapi_chat) and then store these values for future sessions.
* Using widget theme options, you can enable [display of previous chat messages](theme/theme.md#show-previous-chat-messages-in-chat-widget).

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sample of full screen width</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body,html{
            margin:0;
            padding: 0;
        }
    </style>
</head>

<body>

<!-- Place this tag where you want the Live Helper Status to render. -->
<div id="lhc_status_container_page" ></div>

<!-- Place this tag after the Live Helper status tag. -->
<script>var LHC_API = LHC_API||{};
LHC_API.args = {
    mode:'embed',
    lhc_base_url:'//demo.livehelperchat.com/', 
    fscreen: true,  // Make full screen
    theme:[2],      // Change to your theme
    department:[1], // Set your own department
    UUID : '<?php md5(user_id + "some random string"); ?>', // This will ensure that previous chats will be always assigned to the same online visitor profile even from different devices.
    wheight:450,
    wwidth:350,
    pheight:520,
    pwidth:500,
    leaveamessage:true,
    check_messages:false
};
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
    var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>

</body>

</html>
```
