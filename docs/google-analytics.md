---
id: google-analytics
title: Google Analytics Integration
sidebar_label: Google Analytics
---

## New Widget (version 3.42v and later)

In version 3.42v, a new option was added under `System configuration -> Live Help configuration -> Events Tracking`. This allows you to configure Google Analytics integration. For more information, refer to [Events Tracking](chat/events-tracking.md).

If you prefer to manually configure the integration, you can use the available callbacks described in the [Javascript Arguments](javascript-arguments.md) article.

## Older Widgets (prior to version 3.42v)

To integrate Google Analytics event tracking, you need to define a callback for the start chat action. The following callbacks are available for the widget embed code:

```js
LHCChatOptions.callback = {
    online_chat_started_cb: function(inst) {
        // Chat was started
    },
    chat_started_by_invitation_cb: function(inst) {
        // Chat was started by invitation
    },
    offline_request_cb: function(inst) {
        // User has sent an offline request
    },
    show_widget_cb: function(inst) {
        // Show widget function was called. If you are using API embed, you can generate custom HTML here.
        console.log('is-online+' + inst.isOnline); // Can be used to render custom HTML etc. or do some other stuff
    },
    start_chat_cb: function(type) { // User clicked widget
        _gaq.push(['_trackEvent', 'LiveHelperChat', 'StartChat', type]);
    }
};
```

Your final embed code might look like this:

```js
<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptions.opt = {
    widget_width: 320
};
LHCChatOptions.callback = {
    start_chat_cb: function(type) {
        _gaq.push(['_trackEvent', 'LiveHelperChat', 'StartChat', type]);
    }
}
**Other script....**
</script>
```

Here are the callbacks for page embed code:

```js
LHCChatOptionsPage.callback = {
    online_chat_started_cb: function(inst) {
        // Online chat started
    },
    offline_request_cb: function(inst) {
        // Offline request was sent
    }
};
```

The `type` variable can have the following values:

*   `external`: The popup window was opened when the status widget was clicked and the operator status is online.
*   `external_offline`: The popup window was opened when the status widget was clicked and the operator status is offline.
*   `internal_invitation`: The invitation widget was opened.
*   `internal`: The user clicked on the status widget and the widget was shown. The operator status is online.
*   `internal_offline`: The widget was opened and the operator status was offline.
*   `internal_reopen`: The user was having a chat, navigated to another page, and the widget loaded.

For more information, see [https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking).
