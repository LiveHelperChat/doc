---
id: execute-js
title: Execute javascript
---

This event is usefull if you want to execute custom javascript. You do not need to write `<script>` tag in this field content.

To execute javascript in widget iframe scope

```js
console.log('Custom javascript');
```

To execute javascript in page scrope. Let's say parent has function defined you can call this function by executing.

```js
window.parent.parentFunction();
```

### How to request visitor location?

You can setup [bot command](commands.md) with the following content just.

```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var locationUrl = `https://www.google.com/maps?q=${latitude},${longitude};`

        // Prefill message if chat is not started
        // window.parent.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'ignore_bot' : true, 'Question' :  "Here is my location: " +locationUrl}}}]);
    
        // Send message as a visitor
        var chatParams = window.parent.$_LHC.attributes['userSession'].getSessionAttributes();
        window.parent.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_event', 'arg' : {
            func:'addMessage',
            attr: {
                'id' : ['chatData','id'],
                'hash' : ['chatData','hash'],
                'mn' : ['chat_ui','mn'],
                'theme' : ['theme'],
                'lmgsid' : ['chatLiveData','lmsgid'],
            },
            attr_params : { msg: "Here is my location: " +locationUrl}
        }}]);
    }, function(error) {
        alert("Unable to retrieve location: " + error.message);
    });
} else {
    alert("Geolocation is not supported by your browser.");
}
```