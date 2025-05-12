---
id: javascript-arguments
title: Javascript arguments
sidebar_label: Javascript arguments
---

Here you will find all possible javascript arguments for a new widget. If you want to pass custom variables or define custom fields refer to [custom fields](custom-fields-and-prefill.md) documentation.
## Javascript options

```js
<script>
var LHC_API = LHC_API||{}; // Should be a global var. Can be replaced also with `window.LHC_API = window.LHC_API || {};`
LHC_API.args = {
    mode: 'widget',      // widget, embed, popup | Required
    cookie_enabled: true,// Is cookies enabled in for Live Helper Chat to use, | Optional | Default - true. See `Implementing GDPR scenario` section in this article
    pnode : 'lhc-node-id'// Where should we render our HTML. By default we append it to body | Optional <div id="lhc-node-id"></div>
    lhc_base_url:'//demo.livehelperchat.com/',  // Required
    react_attr: [        // Optional
        // In this case we set custom Intro operator message in HTML format
        {'k': ['chat_ui','intro_message_html'], 'v' : '<b>just dymmy html</b>'}, // 'k' : <attribute path>, 'v' : <attribute value>
        // For all possible UI related attributes please refer to React UI Attributes section 
    ],
    wheight: 450,
    wwidth: 350,
    pheight: 520,
    pwidth: 500,
    chat_id: null,       // Manually passed chat id
    chat_hash: null,     // Manually passed chat hash
    vars_encrypted:false,// If set true, all passed variables via lhc_var will be considered as encrypted even back offise indicates it's non ecrypted var. Usefull if you have many brands and want to migrated to encrypted flow.
    hide_parent: false,  // If we get event if any iframe page has already lhc embeded we just hide script in parent page. Oposite action to `hide_iframe`
    hide_iframe: false,  // If script is embeded in iframe we can hide automatically it if we detect that parent page already has Live Helper Chat script embeded
    mobile_view: null    // You can force widget to render in mobile view (full screen) or not | Optional | Default - shows full screen on mobile devices | Possible value true or false
    sright: 0,           // How many pixels append from the right to the status widget, can be negative values also | Optional
    sbottom: 0,          // How many pixels append from the bottom to the status widget, can be negative values also | Optional
    drag_enabled: false, // Enable drag and drop for status widget | Optional
    animate_nh: false,   // Enable need help widget animation to new position after status widget was dragged | Optional
    fscreen: false,      // Should widget content opened in full screen mode. Usefull in page embed 'mode:mode'. Can be activated from theme also only for embed mode.| Optional
    position: 'api',     // If you do not pass we will default to a widget mode | Optional | Default - bottom_right
    hide_status: null,   // By default if position is api we show status widget once chat is started. You can force always to have hidden status widget.
                         // If other position than api is used, status widget will be shown once chat is started
                         // In that case it makes sense to listen to unread_message_title or unread_message events for unread messages indication.
    position_placement: 'bottom_right',  // One of bottom_right, bottom_left, middle_right, middle_left, full_height_right, full_height_left  || Placement options for a widget. Used only if mode is 'widget'. | Optional
    leaveamessage: true, // Should leave a message functionality be enabled or not | Optional
    offline: null,       // true - to set widget for offline mode independently on department operators settings. It forces widget to be rendered in offline mode alays.
    offline_redirect: 'https://livehelperchat.com', // Redirect user to this page if chat is offline | Optional
                                                    // If embed mode is used and leave a message is disabled and offline_redirect is provided. Live Helper Chat will redirect customer to provided page.
    identifier : 'lhc', // Can be used for custom proactive invitation | Optional
    dep_default: 4,     // Department id which should be selected by default. Usefull in case you are passing more than one department | Optional
    department: [5,4,'alias-of-department'],  // If department has entered alias, chat can't be started with that departmnet if argumetn is not an alias
                                              // In combination with Start chat form settings `Requires pre-filled department` user won't be able to figureout existing departments in the system
                                              // Department, can be multiple or one | Optional
    product: [4,5],     // Product to choose from | Optional
    priority: 10005,    // Set priority for started chat | Optional
    theme: 1,           // Set theme | Optional. Can be either theme number or alias
                        // <theme id> or 'alias-of-theme'
                        // If theme has alias set up. Theme can be set only using alias
                        // You can pass multiple themes for chat system to choose from
                        // '1,2,'alias-of-theme'' OR [1,2,'alias-of-theme']
    domain : 'livehelperchat.com', // Domain, if you provide domain chat will work including subdomains | Optional
    subject_id : 5,      // Set subject id of the chat. Usefull for early classification of the chats. | Optional
    bot_id : 5,          // Set bot ID for this chat | Optional
    triger_id : 5,       // Set trigger ID as argument. Usefull in case of testing or some fancy scenarios :) Trigger has to have checked `Can be passed as argument`
    kcw : false,         // While chatting in the widget customer opens popup of the same chat. Should we keep chat in the widget? default - false | Optional

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

            // You can set chat_id with chat_hash to reopen. It will reopen only if reopen is configured or chat itself is in pending/active/bot status.
            // LHC_API.args.chat_hash = 'Py4WgXLFncg01qQsUiXFHMfueQxMiViurB5TDeHw';
            // LHC_API.args.chat_id = 1647603393;
        
            // If you are using manual_init = true, you can 
            LHC_API.args.manual_init = false; // if you app is started we can change to false and app will start normaly.
            LHC_API.args.manual_init = true;  // if you app has not started yet change to true and once you ready call
            window.$_LHC.init();

            // Sample on mobile devices do not show status icon
            // In that scenario dedicated HTML should call window.$_LHC.eventListener.emitEvent('showWidget');
            if (inst.isMobile) {
                LHC_API.args.position = 'api';
                LHC_API.args.hide_status = true;
            }
    },
    phash : 'phash',    // Payment ID | Optional
    profile_pic : null,    // Profile picture to use for the visitor. This 
                           // It can be direct path to the image - 'https://demo.livehelperchat.com/design/defaulttheme/images/general/logo.png',
                           // Or can be string used for avatar generation 'remdex' same as https://demo.livehelperchat.com/index.php/widgetrestapi/avatar/remdex
                           // See documentation from below how to change avatar on the fly 
    events:[{id:"birthday",val:"value"}], // Events to log for proactive chat invitation. `val` is optional | Optional
    tag: 'some_tag',        // Tag for proactive chat invitation | Optional
    conversion: 'oredered', // Conversionn | Optional
    pvhash : 'pvhash',  // Payment verify hash | Optional
    lang : 'lit/'       // Chat language | Optional
    status_delay : 0,   // Delay showing status widget. It also influence proactive invitation and need help widget | Optional
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
    // Full sample https://livehelperchat.com/lhcsamples/sample-4.html
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
    // Chat ended and it's cookies were deleted. Happen when visitor ends chat permanently and widget is closed.
    // This event does NOT happen if just operator closes a chat.
    loadcb.eventEmitter.addListener('endChat',function () {
        console.log('chat finished');
    });
    
    // Chat was closed by visitor or operator.
    // Happens if visitor or operator closes a chat.
    loadcb.eventEmitter.addListener('chatClosed',function () {
        console.log('chat was closed either by operator or visitor');
        
        // You can emit this event and it will close a widget for the vistior as soon operator closes a chat
        // window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'end_chat_visitor', 'arg' : {}}]);
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

    // Listen for status widget changes
    // Returns indication is widget status visible/invisible
    // Alias of window.$_LHC.attributes.widgetStatus.subscribe
   loadcb.attributes.widgetStatus.subscribe(function(data) {
        console.log(data); // True / False
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
    
    loadcb.eventEmitter.addListener('unread_message_title',function (data) {
        // false means there is unread message
        // true means messages were read
        if (data.status == false) {
            // blink something in ui
        } else {
            // stop blinking something in ui
        }
    });
    
    // Event is emited if there is unread message and chat widget is not opened, or not focused
    // Alias of window.$_LHC.eventListener.addListener method
    // This event is used internally. I would suggest just to use `unread_counter` attribute to track unread messages counter,
    loadcb.eventEmitter.addListener('unread_message',function (data) {
        console.log(data);
    });
    
    // Event is emited if we try to remove unread indicator.
    // This can be called multiple times even if there is no indication set presently
    // Alias of window.$_LHC.eventListener.addListener
    loadcb.eventEmitter.addListener('remove_unread_indicator',function (data) {
        console.log(data);
    });
    
    // Monitor unread messages counter variable
    // You can also access at any time unread messages counter - window.$_LHC.attributes.unread_counter.value;
    loadcb.unread_counter.subscribe(function(data) {
        if (isNaN(data) || !data || data == 0) {
            // Remove unread indicator
        } else {
            // data will hold number of unread messages
        }
    });

    // Access variable who holds unread messages counter value
    console.log(window.$_LHC.attributes.unread_counter.value);
    
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
    //window.$_LHC.eventListener.emitEvent('showWidget');

    // Dispatch event directly with it's data
    // window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_direct', 'arg' : {'type': 'profile_pic', data : "remdex"}}]);

    // This way we activate our extension
    //window.$_LHC.eventListener.emitEvent('sendChildExtEvent',[{'cmd':'cbscheduler','arg':{}}]);

    // We force react APP to start if it was lazy loading it's required.
    //window.$_LHC.eventListener.emitEvent('sendChildExtEvent',[{'boot':true}]);
    
    // We show a widget
    //window.$_LHC.eventListener.emitEvent('showWidget');

    /* 
     * You can set custom UI attributes also from load callack 
     * */
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[
        {
            'cmd' : 'attr_set', 'arg' : {
                'type':'attr_set','attr': ['chat_ui','pre_chat_html'],
                data : "Pre chat HTML"
            }
        }
    ]);

    window.$_LHC.eventListener.emitEvent('sendChildEvent',[
        {
            'cmd' : 'attr_set', 'arg' : {
                'type':'attr_set','attr': ['chat_ui','intro_message'],
                data : "[html]<b>Intro message</b>[/html]"
            }
        }
    ]);
}
```

## What variables are available in `window.$_LHC` object?

There is two main attributes you might find usefull

* `window.$_LHC.eventListener` you should be familiar with this variable from above.
* `window.$_LHC.attributes` holds main chat attributes and live workflow state. For more information see https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/design/defaulttheme/widget/wrapper/src/index.js#L69

## How to handle user login scenario and update chat information operator can see in the widget?

1. The easiest way is just to use `lhc_var` method and update custom variables.
2. You can also call this JS function. This is usefull if username is remembered from previous sessions. But you know exact moment visitor logged in and want to refresh some additional information.
```
window.$_LHC.attributes.userSession.updateChatStatus({"action":"update_status"});
```
It will trigger php event you can listen on your end. Basically it's a good event to listen if you want to listen for various events that happens on website and modify chat data based on it.
```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.update_chat_vars', array(
    'chat' => & $chat,
    'data' => $jsonData
));
```

`data` variable will hold `$params['data]['user_vars']` your passed data and `$params['data]['lhc_vars']` will hold custom chat variables.

By default if `lhc_var` variable value changes on website this event is dispatched.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat, 'params' => array()));
```

How to listen for events please see https://github.com/LiveHelperChat/clientoverride extension.

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

### How to change default department from parent page?

This scenario is usefull only if you have widget already rendered, and you want to change `dep_default` value after widget was already rendered.

This is the case when you are passing more than one department, but clicking on different places on page should show different preselected department. So this should be called on page button click.

You can do something like this:

```js
function setDepartmentDefault(dep_id) {
     window.LHC_API.args.dep_default = dep_id;
     window.$_LHC.attributes.dep_default = dep_id;
     window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['departmentDefault'], data : dep_id}}]);
     
     // Show widget if you want
     window.$_LHC.eventListener.emitEvent('showWidget');
 }
```

### Department scenario from parent page

Imagine a scenario.

* You have embedded Live Helper Chat embed code with `Widget position` `api`
* You have few buttons and each button should open widget with different department.
* How do you do that?

You have to do the following things

* Embed code with all possible departments OR do not choose department at all.
* Choose `api` as `Widget position` 
* On button click have something like this. Where you just pass department ID
```javascript
function openWidget(department) {
    LHC_API.args.department = [department];
    
    window.$_LHC.attributes.department = [department];
    
    // Reload widget so new start chat form settings will be picked up
    window.$_LHC.eventListener.emitEvent('reloadWidget');
    
    // If widget is open, open it again
    if (window.$_LHC.attributes.widgetStatus.valueInternal === true) {
        window.$_LHC.eventListener.emitEvent('showWidget');
    }
}
```

### Department scenario from widget itself.

It's also possible to change department directly from a widget itself using `Pre-chat HTML` capabilities.

To have this UI you should

* Pass main department ID which will work as our main widget screen configuration holder. There we will have `Pre chat` HTML fields filled.
* In `Online form settings` disable all fields for the main department where you will put main `Pre chat` HTML
* In `Additional form settings` check `Hide start chat button.` and check `No border under a profile`
* You should have separate `Start chat forms` configuration per department.

Here is a sample HTML how to change department directly in the widget using `Pre-chat HTML` field.

```html
<button class="btn btn-sm btn-secondary" onclick="window.parent.LHC_API.args.department = [2];window.parent.$_LHC.attributes.department = [2];window.parent.$_LHC.eventListener.emitEvent('reloadWidget');">Set department A</button>
```

One of the scenario can be - you want to allow a visitor to choose explicitly with what department he wants to start a chat. So you can have a Pre chat HTML just with department buttons.

​![](/img/chat/pre-chat-widget.png)

Another scenario can be you want to deny leaving a message form, but just to show some text showing that we are offline at the moment.

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
/(trigger)/<trigger_id> - trigger to use
/(mode)/<popup/embed> - default mode if popup. If you are planning to use it as iframe source set it to embed. This is only usefull if you want to have multiple chat's in the same page.
```

E.g 
> https://example.com/chat/start/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005
> https://example.com/chat/begin/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005
> https://example.com/chat/modal/(department)/4/(identifier)/lhc/(operator)/17/(survey)/1/(priority)/10005

You can also [track events](chat/events-tracking.md) in static url.

### How to have custom status widget?

Let say you do not want to show default status widget, but you want to have your own HTML for that. E.g somewhere integrated in menu etc.

This sample supports

* Online/Offline status
* Unread messages counter

https://livehelperchat.com/lhcsamples/sample-4.html

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

## How to embed widget in full-screen mode?

This is useful in case you are integrating it with a [third party application](development/mobile-integration.md).

## Public methods

Once you include live helper chat javascript you gain access to global variable `window.$_LHC`.

### Show a widget
Let say you include widget with position api. Widget status will be invisible, but you can show widget by executing.
```js
window.$_LHC.eventListener.emitEvent('showWidget');
```

If you are opening widget from some child popup you can also use `postMessage` method

```js
window.parent.postMessage('lhc::showWidget::{}','*');
```

### Start a chat

This will act as a start a chat javascript command.

```js
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'startChat'}]);
```

### Set custom content and start a chat

Set's custom message and starts a chat.

```js
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'ignore_bot' : true,'Question' : 'Custom question here'}}}]);

// Because attribute set is happens asynchronously you have to wait a bit before starting a chat
setTimeout(function(){
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'startChat'}]);
},200);
```

### Show/Hide status widget

You can explicitly control when status widget becomes visible.

These command are usefull in combination with `hide_status` argument.

```js

// Show a status widget
window.$_LHC.attributes.shidden.next(false);

// Hide a status widget
window.$_LHC.attributes.shidden.next(true);

```

### Hide need help widget

It will hide widget manually. Widget will not be shown after page refresh.

```js
window.$_LHC.eventListener.emitEvent('nhClose');
```

### Set profile picture for the visitor on the fly

* Avatar generator logic is based on https://github.com/multiavatar/multiavatar-php
* Avatar is visible only for the visitor. It's not remembered next time. So you have to pass it.
* It won't be shown if visitor opens popup. Might be improved in the future.
* It works best if you use bubble style widget and use embed or widget modes and do not have popup enabled.

```javascript
// Set for avatar logic to generate it
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_direct', 'arg' : {'type': 'profile_pic', data : "remdex"}}]);

// Set profile picture yourself
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'dispatch_direct', 'arg' : {'type': 'profile_pic', data : "https://demo.livehelperchat.com/design/defaulttheme/images/general/logo.png"}}]);
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

From javascript

```js

// More gracefull method. Visitor has closed chat message will be shown
// To visitor message confirm close modal window will be shown if it's setup
window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'end_chat_visitor', 'arg' : {}}]);

// Just terminates chat instantly and delete cookies and closes a widget
window.$_LHC.eventListener.emitEvent('endChat');

// Just to delete chat cookie, without touching a widget UI
window.$_LHC.eventListener.emitEvent('endChatCookies',[{"force":true}]);
```

From backend. PHP Example

```php
// Make sure you change example.com to your cookie domain
setcookie('lhc_per', '', time() - 300, '/', 'example.com');
```

### To add tag. 

We automatically check for matching invitation once you add a event.

```js
window.$_LHC.eventListener.emitEvent('addTag',['some_tag']);
```

With `postMessage` protocol

```js
window.parent.postMessage('lhc::addTag::["error_deposit"]','*');
```
error_deposit

### To make conversion

Make conversion if something happens in the website and visitor got previously invitation with `Event id` equal to `ordered`

```js
window.$_LHC.eventListener.emitEvent('addConversion',['ordered']);
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

### Track custom event

If you are making custom theme and want to track event in custom HTML you have written in `Widget themes -> Custom content -> Custom html before start chat form fields, widget`

P.s please remove `parent` if you want trigger event just from website

```js
window.parent.$_LHC.eventListener.emitEvent('trackingEvent',[{'ec':'Channel','el':'WhatsApp'}]);
```

Possible arguments are

```json
{
  ec: "Event Category", 
  ea: "Event action",
  el: "Event label",
  ev: "EVent Value"
}
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

        /* If you want prefill multiple fields at once
        window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['api_data'], data : {'ignore_bot' : true,
                    'Username' : document.getElementById('chat-name').value,
                    'Email':document.getElementById('chat-email').value,
                    'Question':document.getElementById('chat-question').value,
                    'Phone' : document.getElementById('chat-phone').value}}}]);*/

        /* If you have embed code with popup option you have to prefill those vars using
        LHCChatOptions.attr_prefill = new Array();
        LHCChatOptions.attr_prefill.push({'name':'email','value': document.getElementById('chat-email').value,'hidden':true});
        LHCChatOptions.attr_prefill.push({'name':'phone','value': document.getElementById('chat-phone').value});
        LHCChatOptions.attr_prefill.push({'name':'username','value': document.getElementById('chat-name').value});
        LHCChatOptions.attr_prefill.push({'name':'question','value': document.getElementById('chat-question').value});
        */

        // We change attribute to auto submit so it will try automatically submit online form first time
        // Uncomment if you want chat to be auto started
        // window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['chat_ui','auto_start'], data : true}}]);
        
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

### How to execute any trigger manually?

In this scenario we are executing trigger with id `1306`

This trigger in his settings also has checked `Can be passed as argument`

```js
// Just to show a widget
window.$_LHC.eventListener.emitEvent('showWidget');

// This will work only if chat has started
window.$_LHC.attributes.mainWidget.cont.elmDom.contentWindow.postMessage('lhc_trigger_click:1306', '*');
```

### React UI Attributes

Sample page - https://livehelperchat.com/lhcsamples/sample-3.html

```js
LHC_API.args = {
    ...
    react_attr: [       // Optional
        // In this case we set custom Intro operator message in HTML format
        {'k': ['chat_ui', 'intro_message_html'], 'v': '<b>just dymmy html</b>'}, // 'k' : <attribute path>, 'v' : <attribute value>
        // For all possible UI related attributes please refer to React UI Attributes section 
    ]
    ...
}
```

![](/img/theme/chat-ui-all.png)

Quick list of `chat_ui` attributes

 * `['chat_ui','custom_html_widget']`
 * `['chat_ui','custom_html_header']`
 * `['chat_ui','custom_html_header_body']`
 * `['chat_ui','pre_chat_html']`
 * `['chat_ui','intro_message']`
 * `['chat_ui','intro_message_html']`
 * `['chat_ui','cmmsg_widget']` - this html is set inside messages block and is usefull if you want manually format messages layout in start chat form, otherwise `intro_message` or `intro_message_html` should be used
 * `['chat_ui','operator_profile']` - overrides default operator profile HTML

[Please refer to theme article custom attributes section](theme/theme.md#how-to-make-automatic-status-change-for-frontend-visitors)

### How do I check is widget open?

Code sample

```js
if (window.$_LHC.attributes.widgetStatus.value === false) {
    console.log('widget is closed');
} else {
    console.log('widget is opened');
}
```

### Change widget online/offline status on the fly

This is usefull if you want to set widget online/offline manually.

 * Usually it's done automatically once you setup an automatic online status tracking. [More information](integrating.md#how-to-make-automatic-status-change-for-frontend-visitors)
 * If widget is open it's content automatically won't be changed to online/offline mode. We do not want user to lose whatever he was doing in the opened widget.

Manual method will always refresh widget content.

```js
// We will set widget cotnent to online only if widget is not opened
if (window.$_LHC.attributes.widgetStatus.value === false) {
    window.$_LHC.attributes['onlineStatus'].next(true); // Will put status widget in live mode
}
```

### Change initial chat subject

Usefull if you want to change chat subject before starting a chat. So operator will know chat subject/topic.

```js
function setSubjectCustom(subjectId) {
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['subject_id'], data :subjectId}}]);
    window.$_LHC.eventListener.emitEvent('showWidget');
}
````

### Open offline form while keeping option to start a chat normally

This is usefull if you want to have a button on website which would open widget with offline form instead of a start chat form.

```js
function showOfflineForm() {
    window.$_LHC.eventListener.emitEvent('sendChildEvent',[{'cmd' : 'attr_set', 'arg' : {'type':'attr_set','attr': ['isOfflineMode'], data : true}}]);
    window.$_LHC.eventListener.emitEvent('showWidget');
}
```

## Implementing GDPR scenario

Live Helper chat uses `lhc_*` cookie variables.

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

