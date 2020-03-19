---
id: javascript-arguments
title: Javascript arguments
sidebar_label: Javascript arguments
---

Here you will find all possible javascript arguments for a new widget. If you want to pass custom variables or define custom fields refer to [custom fields](custom-fields-and-prefill.md) documentation.


## Javascript options

```js
<script>

function widgetV2Callbacks(loadcb) {

    loadcb.eventEmitter.addListener('closeWidget',function () {
        console.log('widget close');
    });

    loadcb.eventEmitter.addListener('showWidget',function () {
        console.log('widget shown');
    });

    loadcb.eventEmitter.addListener('endChat',function () {
        console.log('chat finished');
    });

    // Chat started
    loadcb.eventEmitter.addListener('chatStarted',function (data, mode) {
        console.log(data);
    });

    loadcb.eventEmitter.addListener('showInvitation',function (data) {
        // Invitation data
        console.log(data);
    });

    loadcb.eventEmitter.addListener('hideInvitation',function (data) {
        // Invitation data
        console.log('Invitation hidden');
        console.log(data);
    });

    loadcb.eventEmitter.addListener('openPopup',function () {
        console.log('Popup opened');
    });

    loadcb.eventEmitter.addListener('offlineMessage',function () {
        console.log('Offline Message');
    });
}

var LHC_API = LHC_API||{};

LHC_API.args = {
    mode:'widget',      // widget, embed | Required
    lhc_base_url:'//demo.livehelperchat.com/',  // Required
    wheight:450,
    wwidth:350,
    pheight:520,
    pwidth:500,
    leaveamessage:true, // Should leave a message functionality be enabled or not | Optional
    identifier : 'lhc', // Can be used for custom proactive invitation | Optional
    department: [4],    // Department, can be multiple or one | Optional
    product: [4,5],     // Product to choose from | Optional
    priority:10005,     // Set priority for started chat | Optional
    theme: 1,           // Set theme | Optional
    domain : 'livehelperchat.com', // Domain, if you provide domain chat will work including subdomains | Optional
    bot_id : 5          // Set bot ID for this chat | Optional
    loadcb : widgetV2Callbacks, // Chat was loaded callback | Option
    phash : 'phash',    // Payment ID | Optional
    pvhash : 'pvhash',  // Payment verify hash | Optional
    lang : 'lit/'       // Chat language | Optional
    fresh : true,       // Do not save started chat. Eeach refresh will result in a new chat | Optional
    proactive : false   // Disable proactive invitations. | Optional
};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?v2'+(""+date.getFullYear() + date.getMonth() + date.getDate()+date.getTime());
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```
