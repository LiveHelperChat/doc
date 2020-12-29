---
id: javascript-arguments
title: Javascript arguments
sidebar_label: Javascript arguments
---

Here you will find all possible javascript arguments for a new widget. If you want to pass custom variables or define custom fields refer to [custom fields](custom-fields-and-prefill.md) documentation.
## Javascript options

```js
<script>
var LHC_API = LHC_API||{};
LHC_API.args = {
    mode: 'widget',      // widget, embed | Required
    cookie_enabled: true, // Is cookies enabled in for Live Helper Chat to use, | Optional | Default - true. See `Implementing GDPR scenario` section in this article
    pnode : 'lhc-node-id'// Where should we render our HTML. By default we append it to body | Optional <div id="lhc-node-id"></div>
    lhc_base_url:'//demo.livehelperchat.com/',  // Required
    wheight: 450,
    wwidth: 350,
    pheight: 520,
    pwidth: 500,
    sright: 0,           // How many pixels append from the right to the status widget, can be negative values also | Optional
    sbottom: 0,          // How many pixels append from the bottom to the status widget, can be negative values also | Optional
    fscreen: false,      // Should widget content opened in full screen mode. Usefull in page embed 'mode:mode'. Can be activated from theme also only for embed mode.| Optional
    position: 'api',     //If you do not pass we will default to a widget mode | Optional | Default - bottom_right
    position_placement: 'bottom_right',  // One of bottom_right, bottom_left, middle_right, middle_left, full_height_right, full_height_left  || Placement options for a widget. Used only if mode is 'widget'. | Optional
    leaveamessage: true, // Should leave a message functionality be enabled or not | Optional
    offline_redirect: 'https://livehelperchat.com', // Redirect user to this page if chat is offline | Optional
                                                    // If embed mode is used and leave a message is disabled and offline_redirect is provided. Live Helper Chat will redirect customer to provided page.
    identifier : 'lhc', // Can be used for custom proactive invitation | Optional
    department: [4],    // Department, can be multiple or one | Optional
    product: [4,5],     // Product to choose from | Optional
    priority: 10005,     // Set priority for started chat | Optional
    theme: 1,           // Set theme | Optional
    domain : 'livehelperchat.com', // Domain, if you provide domain chat will work including subdomains | Optional
    bot_id : 5          // Set bot ID for this chat | Optional

    // Read next section about callback function
    loadcb : widgetV2Callbacks, // Chat was loaded callback | Optional
    manual_init: false,         // If you want manually to let app start pass false. After that you can init app by running | Optional
                                // window.$_LHC.init();
                                // Usefull in case you want to run widget, set UUID only after your app started or page loaded.
                                // Also can be usefull if you want to show widget only to logged visiors.
                                // If you vistor logins you can set
                                // LHC_API.args.UUID = 'md5(user_id + some hash)';
                                // window.$_LHC.init();
    before_init: function(inst) { // Called before Live Helper Chat starts it's workflow |  Optional
            // If you are using manual_init = true, you can 
            LHC_API.args.manual_init = false; // if you app is started we can change to false and app will start normaly.
            LHC_API.args.manual_init = true;  // if you app has not started yet change to true and once you ready call
            window.$_LHC.init();
    },
    phash : 'phash',    // Payment ID | Optional
    events:[{id:"birthday",val:"value"}], // Events to log for proactive chat invitation. `val` is optional | Optional
    tag: 'some_tag',     // Tag for proactive chat invitation | Optional
    pvhash : 'pvhash',  // Payment verify hash | Optional
    lang : 'lit/'       // Chat language | Optional
    fresh : true,       // Do not save started chat. Eeach refresh will result in a new chat | Optional
    proactive : false,      // Disable proactive invitations. | Optional
    check_messages : false, // By default proactive invitation is checked on page load and we determine is there any invitation pending based on present user state.
                            // But limitation of this is that if operator sends a message visitor seems this message only after page view.
                            // By having this enabled you increase server load but visitor won't need to reload page to see operator invitation message.
    survey : 1,         // Survey Id. Department Survey id overrides this value. | Optional
    operator : 1,       // To what opeartor chat should be assigned once it's started automaticaly. It's User ID | Optional
    scope_storage: false,    // Should we store Live Helper Chat related data within passed scope or use global one. `lhc` | Optional
    lhc_var: {},             // If you are passing variables you can modify this object and attribute would be updated automatically. E.g LHC_API.args.lhc_var.gender = 'some gender' | Optional
    UUID: null,              // While tracking online visitors we generate unique hash for each visitor. If you want to track back always same logged visitor. You can pass UUID as unique identifier for your logged vistior.
                             // This way previous chat history will show chats only by this UUID
    cookie_per_page : false  // (false | true | false | "/cookiepath"). Default value - false
                             // false - cookie will be set per domain. Same chat will be available across all pages where script is embeded.
                             // true - cookie will be set per page path. Cookie path argument is not set. Usefull if you want to have different instances of chat per page.
                             // "/cookiepath" - you are responsible for setting cookie path. Usefull if you want to have same cookie under specific path main part.
};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?v2'+(""+date.getFullYear() + date.getMonth() + date.getDate());
    // po.setAttribute('scope','LHC2'); You can set scope of script. Please go to section How to embed multiple widgets on same page
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```

## Load callback function

This allows to make various tweaks to based on received callback.

```html
<div id="online-status"></div>
```

```js
function widgetV2Callbacks(loadcb) {

    // Show offline/online status manually in specific webplace 
    loadcb.onlineStatus.subscribe(function(data) {
        if (data === true) {
            document.getElementById('online-status').innerHTML =
                '<button style="cursor: pointer" onclick="window.$_LHC.eventListener.emitEvent(\'openPopup\');">We are online [Popup]</button>' +
                '<button style="cursor: pointer" onclick="window.$_LHC.eventListener.emitEvent(\'showWidget\');">We are online [Widget]</button>';
        } else {
            document.getElementById('online-status').innerHTML = '<span>We are offline</span>';
        }
    });

    // Circle icon was clicked
    loadcb.eventEmitter.addListener('clickAction',function () {
        console.log('Circle was clicked');
    });

    loadcb.eventEmitter.addListener('closeWidget',function () {
        console.log('widget close');
    });

    loadcb.eventEmitter.addListener('showWidget',function () {
        console.log('widget shown');
    });

    loadcb.eventEmitter.addListener('openPopup',function () {
        console.log('Popup opened');
    });

    loadcb.eventEmitter.addListener('offlineMessage',function () {
        console.log('Offline Message');
    });

    /**
    * Chat related events
    */
    // Chat ended
    loadcb.eventEmitter.addListener('endChat',function () {
        console.log('chat finished');
    });

    // Chat started
    loadcb.eventEmitter.addListener('chatStarted',function (data, mode) {
        console.log(data);
    });

    /**
    * Proactive invitation related events
    */
    loadcb.eventEmitter.addListener('showInvitation',function (data) {
        // Invitation data
        // data.name - will hold invitation name
        console.log('showInvitation');
        console.log(data);
    });

    // Invitation was hidden
    // It happens during migration to full widget mode
    loadcb.eventEmitter.addListener('hideInvitation',function (data) {
        // Invitation data
        console.log('hideInvitation');
        console.log(data);
    });

    // Invitation was read. Means visitor opened widget with an invitation either by clicking invitation tooltip or status icon.
    loadcb.eventEmitter.addListener('readInvitation',function (data) {
        // Invitation data
        // data.name - will hold invitation name
        console.log('readInvitation');
        console.log(data);
    });

    // Invitation clicked. Visitor clicked invitation tooltip. It is not triggered if it just clicks status icon while invitation tooltip is shown.
    loadcb.eventEmitter.addListener('fullInvitation',function (data) {
        // Invitation data
        // data.name - will hold invitation name
        console.log('fullInvitation');
        console.log(data);
    });

    // Called if invitation was in full widget and widget was minimised
    // Or visitor clicked close icon in invitation tooltip
    loadcb.eventEmitter.addListener('cancelInvitation',function (data) {
        // Invitation data
        // data.name - will hold invitation name
        console.log('cancelInvitation');
        console.log(data);
    });


    /**
    * Need Help widget related events
    */
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

    loadcb.eventEmitter.addListener('nhShow',function () {
        // Need help widget was shown
        console.log('nhShow');
    });

    loadcb.eventEmitter.addListener('nhHide',function () {
        // Need help widget was hidden
        console.log('nhHide');
    });

    /**
    * Bot related events
    */
    loadcb.eventEmitter.addListener('botTrigger',function (data) {
        // Need help widget was hidden
        // data.trigger will hold an array of executed triggers from last user action
        console.log('botTrigger');
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
```

## What variables are available in `window.$_LHC` object?

There is two main attributes you might find usefull

* `window.$_LHC.eventListener` you should be familiar with this variable from above.
* `window.$_LHC.attributes` holds main chat attributes and live workflow state. For more information see https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/widget/wrapper/src/index.js#L69

## How to change department or any other attribute on the fly?

You can change any react application attribute before chat is started. 

For all possible attributes see here https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/widget/react-app/src/reducers/chatWidgetReducer.js#L5

### Operator scenario

Imagine a scenario.

* You have embedded Live Helper Chat embed code with `Widget position` `api`
* You have few buttons and each button should open widget with different operator.
* How do you do that?

You have to do the following things

* Embed code with all possible departments OR do not choose department at all.
* Choose `api` as `Widget position` 
* On button click have something like this. Where you just pass operator ID
```javascript
function openWidget(department){
    // If you are using lazy load it makes sense to change operator also in the args themself
    LHC_API.args.operator = 1;
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['operator'], data : 1}}]); // 1 is operator id
    window.$_LHC.eventListener.emitEvent('showWidget');
}
```

### Department scenario

Imagine a scenario.

* You have embedded Live Helper Chat embed code with `Widget position` `api`
* You have few buttons and each button should open widget with different department.
* How do you do that?

You have to do the following things

* Embed code with all possible departments OR do not choose department at all.
* Choose `api` as `Widget position` 
* On button click have something like this. Where you just pass department ID
```javascript
function openWidget(department){
    window.$_LHC.attributes.department = [department];
    window.$_LHC.eventListener.emitEvent('showWidget');
}
```

## How to embed multiple widgets on the same page?

E.g you have a page embed code and you want to have a widget always on bottom left corner.

Related settings to this approach is `scope_storage`,`LHC_API.args.lhc_var`

For a widget embed we use standard code and change nothing. Now in order to embed page widget without conflicting previous code. Embed code has to look something like this.

Things you have to do.

 * `po.setAttribute('scope','PAGE2');` always has to be uppercase
 * Change id to lowercase prefix `page2` `<div id="page2_status_container_page" ></div>`
 * Change `LHC_API` to `PAGE2_API`
 * `LHCChatOptions` will become `PAGE2ChatOptions`
 * `window.$_LHC` will become `window.$_PAGE2`
 * `LHC_API.args.lhc_var` will become `PAGE2_API.args.lhc_var`

Pay attention to `page2`/`PAGE2` keyword in embed code

```html
<!-- Place this tag where you want the Live Helper Status to render. -->
<div id="page2_status_container_page" ></div>

<!-- Place this tag after the Live Helper status tag. -->
<script>var PAGE2_API = PAGE2_API||{};
PAGE2_API.args = {mode:'embed', scope_storage: true,lhc_base_url:'//demo.livehelperchat.com/',department: [1],theme:2,wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,check_messages:false};
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
    var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
    po.setAttribute('scope','PAGE2');
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```

Same way you can embed unlimited number of page embeds in a single page. See live samples

 * Sample of two page embeds in a single place https://livehelperchat.com/lhcsamples/sample-1.html
 * Sample of page embed and two widget embeds, one of them has custom fields passed in javascript https://livehelperchat.com/lhcsamples/sample-2.html

## Static URL generation

You can use url like

> https://example.com/chat/start `<arguments>`
> https://example.com/chat/begin `<arguments>`
> https://example.com/chat/modal `<arguments>`

Second URL has default logo and footer and can be usefull depending on your usage scenario and start chat form combination.

Possible arguments. All arguments are optional. Most of the cases you can just open popup window to see what url system has generated and just reuse it.

```
/(id)/<chat id> - chat id to use
/(hash)/<chat hash> - chat hash
/(department)/<department 1/department 2> -> department to use E.g /(department)/1/2
/(theme)/<theme_id> -> theme to use 
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
> https://example.com/chat/begin/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005
> https://example.com/chat/modal/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005

You can also [track events](chat/events-tracking.md) in static url.

### How do I set default URL for Live Helper Chat?

Now if you enter `https://example.com/` you see default URL content. You can change what `module/view` should be rendered by default in `settings.ini.php` file. 

https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L68-L72

```php
...
'default_url' =>
    array (
        'module' => 'chat',
        'view' => 'start', // Change value to begin or startchat.
    ),
...
```

If you do not want to allow to start chat directly at all you can change settings to.

```php
...
'default_url' =>
    array (
        'module' => 'user',
        'view' => 'login',
    ),
...
```

## Public methods

Once you include live helper chat script you gain access to global variable `window.$_LHC`.

### Show a widget
Let say you include widget with position api. Widget status will be invisible, but you can show widget by executing.
```js
window.$_LHC.eventListener.emitEvent('showWidget');
```

### Reload widget
Usefull in case you want to change passed attribute to completely different ones.
```js
window.$_LHC.eventListener.emitEvent('reloadWidget');
```

On click event can look something like this
```javascript
function onClick()
{
    /* You can change like this */
    // window.LHCChatOptions = {};
    // LHCChatOptions.attr_prefill = new Array();
    // LHCChatOptions.attr_prefill.push({'name':'question','value':'Default user message live'});

    
    // Reload a widget
    window.$_LHC.eventListener.emitEvent('reloadWidget');

    // If you use reoad you have to set passet attribute like this.
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'Question' : 'Custom question here'}}}]);
    
    // Show widget only if it was opened
    // As above you have exension executing you can ommit this
    if (window.$_LHC.attributes.widgetStatus.valueInternal === true) {
        window.$_LHC.eventListener.emitEvent('showWidget');
    }
}
```

### Reload widget to switch theme

Also you can use `reloadWidget` call to change theme on the fly. It's usefull if your website has bright/dark theme and your use switches themes.

Live sample can be found here https://livehelperchat.com/lhcsamples/themes-switch.html

```javascript
function setTheme(id) {
    LHC_API.args.theme = id;
    window.$_LHC.attributes.theme = id;
    window.$_LHC.eventListener.emitEvent('reloadWidget');
    if (window.$_LHC.attributes.widgetStatus.valueInternal === true) {
        window.$_LHC.eventListener.emitEvent('showWidget');
    }
}
```

### Close widget.

```js
window.$_LHC.eventListener.emitEvent('closeWidget');
```

### Toggle user sound setting

```js
window.$_LHC.eventListener.emitEvent('toggleSound');
```

### To end the chat
```js
window.$_LHC.eventListener.emitEvent('endChat');
```

### To add tag. 

We automatically check for matching invitation once you add a event.

```js
window.$_LHC.eventListener.emitEvent('addTag',['some_tag']);
```

### Log event

Log event for proactive chat invitation. We automatically check for matching invitation once you add an event. `val` is optional

```js
window.$_LHC.eventListener.emitEvent('addEvent',[[{id:"birthday",val:"value"}]]);
```

### Check invitation manually

If for some reason you want to check for invitation manually you can do that.
```js
window.$_LHC.eventListener.emitEvent('checkMessageOperator');
```

### Open popup

```js
window.$_LHC.eventListener.emitEvent('openPopup');
```

### Redirect visitor

To redirect user to custom URL

```js
window.$_LHC.eventListener.emitEvent('location',['http://livehelperchat.com']);
```

### Visitor has accepted a cookies

To inform Live Helper Chat that visitor accepted cookies. See section about GDPR scenario
```
window.$_LHC.eventListener.emitEvent('enableCookies');
```

### Send a message as a visitor

To send a message as a visitor from website. We take care of two scenarios

* Chat has started
* Chat has not started yet

```js
function addMessage(message) {
    // Get user session
    var chatParams = window.$_LHC.attributes['userSession'].getSessionAttributes();
    
    // Chat has not started yet
    if (!chatParams['id'] && window.$_LHC.attributes['onlineStatus'].value == true) {
        // Prefill message field
        window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'ignore_bot' : true, 'Question' : message}}}]);
    
        // We change attribute to auto submit so it will try automatically submit online form first time
        window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['chat_ui','auto_start'], data : true}}]);
        
    } else if (chatParams['id']) {
        // Send as message if chat has started alerady
        window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_event', 'arg' : {
            func:'addMessage',
            attr: {
                'id' : ['chatData','id'],
                'hash' : ['chatData','hash'],
                'mn' : ['chat_ui','mn'],
                'theme' : ['theme'],
                'lmgsid' : ['chatLiveData','lmsgid'],
            },
            attr_params : { msg: message }
        }}]);
    }
    
    // We show a widget
    window.$_LHC.eventListener.emitEvent('showWidget');
}
```

Force manually visitor to fetch for a new messages

```js
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_event', 'arg' : {
    func:'fetchMessages',
    attr: {
        'id' : ['chatData','id'],
        'hash' : ['chatData','hash'],
        'theme' : ['theme'],
        'lmgsid' : ['chatLiveData','lmsgid'],
    }
}}]);
```

## Implementing GDPR scenario

Requirements
 
 1. Visitor comes to page and Live Helper Chat should not store any cookie untill visitor agrees
 2. On page refresh if visitor has accepted cookies Live Helper Chat should use cookies instantly
 3. On GDPR acceptance we should inform Live Helper Chat that cookies policy was accepted
 
Implementation

1. and 2. points can be done by passing argument.

```js
var LHC_API = LHC_API||{};
LHC_API.args = {
    cookie_enabled: (<your check was cookies enabled>), // Boolean value
...
```

3. Point can be solved by executing this script.

If you did everything correctly proactive invitation and need help tooltip will start to work.

```js
window.$_LHC.eventListener.emitEvent('enableCookies');
```

**What happens if cookies are disabled?**

 * We do not track this visitor in online vistiors list
 * We do not store any cookies. Clicking on widget will open a popup as it does not use any cookies.
 * We do not execute proactive chat invitations
 * We do not show need help tooltip

## How to execution custom action on offline status click

You have to do few things

* Pass `offline_redirect` value as `#` so visitor won't be redirected to any page.
* Listen to `offlineClickAction` action

```js
loadcb.eventEmitter.addListener('offlineClickAction',function () {
    // Here you can 
    console.log('Now nothing will happen');
});
```

