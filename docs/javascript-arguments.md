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

    loadcb.eventEmitter.addListener('nhClicked',function () {
        // Need help widget was clicked.
        console.log('nhClicked');
    });

    loadcb.eventEmitter.addListener('nhClosed',function () {
        // Need help widget was closed by visitor.
        // If need help widget is closed by other reason. E.g visitor clicked chat icon directly
        // Proactive invitation was shown. This event would not be called.
        console.log('nhClosed');
    });

    // These events will be executed as soon the widget APP starts
    // In this case we set default `Question` and disable bot.
    // we also change auto start to true and show widget.
    //window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'ignore_bot' : true,'Question' : 'Custom question here'}}}]);
    //window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['chat_ui','auto_start'], data : true}}]);
    //window.$_LHC.eventListener.emitEvent('showWidget');

    // This way we activate our extension
    //window.$_LHC.eventListener.emitEvent('sendChildExtEvent',[{'cmd':'cbscheduler','arg':{}}]);

    // We force react APP to start if it was lazy loading it's required.
    //window.$_LHC.eventListener.emitEvent('sendChildExtEvent',[{'boot':true}]);
    
    // We show a widget
    //window.$_LHC.eventListener.emitEvent('showWidget');
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
    offline_redirect: 'https://livehelperchat.com', // Redirect user to this page if chat is offline | Optional
                                                    // If embed mode is used and leave a message is disabled and offline_redirect is provided. Live Helper Chat will redirect customer to provided page.
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
    proactive : false,      // Disable proactive invitations. | Optional
    check_messages : false, // By default proactive invitation is checked on page load and we determine is there any invitation pending based on present user state.
                            // But limitation of this is that if operator sends a message visitor seems this message only after page view.
                            // By having this enabled you increase server load but visitor won't need to reload page to see operator invitation message.
    survey : 1,         // Survey Id. Department Survey id overrides this value. | Optional
    operator : 1,       // To what opeartor chat should be assigned once it's started automaticaly. It's User ID | Optional
    cookie_per_page : false  // (false | true | false | "/cookiepath"). Default value - false
                             // false - cookie will be set per domain. Same chat will be available across all pages where script is embeded.
                             // true - cookie will be set per page path. Cookie path argument is not set. Usefull if you want to have different instances of chat per page.
                             // "/cookiepath" - you are responsible for setting cookie path. Usefull if you want to have same cookie under specific path main part.
};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?v2'+(""+date.getFullYear() + date.getMonth() + date.getDate());
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```

## Static URL generation

You can use url like

> https://example.com/chat/start `<arguments>`

Possible arguments. All arguments are optional. Most of the cases you can just open popup window to see what url system has generated and just reuse it.

```
/(id)/<chat id> - chat id to use
/(hash)/<chat hash> - chat hash
/(department)/<department 1/department 2> -> department to use E.g /(department)/1/2
(theme)/<theme_id> -> theme to use 
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

E.g 
> https://example.com/chat/start/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005

## Public methods

Once you include live helper chat script you gain access to global variable `window.$_LHC`.

Let say you include widget with position api. Widget status will be invisible, but you can show widget by executing.
```js
window.$_LHC.eventListener.emitEvent('showWidget');
```

To close widget.
```js
window.$_LHC.eventListener.emitEvent('closeWidget');
```

Toggle user sound setting
```js
window.$_LHC.eventListener.emitEvent('toggleSound');
```

To end the chat
```js
window.$_LHC.eventListener.emitEvent('endChat');
```

To add tag
```js
window.$_LHC.eventListener.emitEvent('addTag',['some_tag']);
```

To open popup
```js
window.$_LHC.eventListener.emitEvent('openPopup');
```

To redirect user to custom URL
```js
window.$_LHC.eventListener.emitEvent('location',['http://livehelperchat.com']);
```


