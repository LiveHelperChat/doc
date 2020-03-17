---
id: google-analytics
title: Integration with Google Analytics event tracking
sidebar_label: Google Analytics
---

To integrate google analytics event tracking you just have to define callback for start chat action. Here is possible callbacks for widget embed code

```js
 LHCChatOptions.callback = {  
 online_chat_started_cb : function(inst) {  
 // chat was started  
 },  
 chat_started_by_invitation_cb : function(inst) {  
 // chat was started by invitation  
 },  
 offline_request_cb:function(inst) {  
 // user has send offline request  
 },  
 show_widget_cb:function(inst){  
 // Show widget function was called, if you are using API embed you can generate custom html there.  
 console.log('is-online+'+inst.isOnline); // Can be used to render custom html etc or do some other stuff  
 },  
 start_chat_cb:function(type){ // User clicked widget  
     _gaq.push(['_trackEvent', 'LiveHelperChat', 'StartChat', type]);  
 }};
```


So our final embed code can look like

```js
 <script type="text/javascript">  
 var LHCChatOptions = {};  
 LHCChatOptions.opt = {widget_width:320};  
 LHCChatOptions.callback = {start_chat_cb:function(type){  
     _gaq.push(['_trackEvent', 'LiveHelperChat', 'StartChat', type]);
 }}  
 **Other script....**  
 </script>
```

Here is callbacks for page embed code

```js
 LHCChatOptionsPage.callback = {  
 online_chat_started_cb : function(inst) {  
     // Online chat started  
 },      
 offline_request_cb:function(inst) {  
     // Offline request was send  
 }};
```

Type variable can have the following values

*   external - was opened popup window. Get's executed when clicking on status widget opens popup. Operators status is online.
*   external_offline - was opened popup window. Get's executed when clicking on status widget opens popup. Operators status is offline.
*   internal_invitation - was opened invitation widget
*   internal - user clicked on status widget and widget was shown. Operators status is online.
*   internal_offline - opened widget then operators status was offline
*   internal_reopen - user was having chat and just navigated to another page and widget loaded.

For more information you can see [https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking)