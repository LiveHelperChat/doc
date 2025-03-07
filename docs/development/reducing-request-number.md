---
id: reducing-request-number
title: Reducing the Number of Requests to the Server
sidebar_label: Reducing Number of Requests
---

First, consider using [NodeJS integration](https://github.com/LiveHelperChat/NodeJS-Helper) to reduce server load, if possible.

Here are the key settings that control the frequency of HTTP requests Live Helper Chat sends to the server, along with their related URLs:

*   **`Synchronisation and sound settings > Check for messages from the operators, interval in seconds`**: This setting determines how often the widget checks for proactive invitations from operators. If you are not using this feature, set it to a large number or disable it completely by setting `check_messages: false` in the embed code.
    *   `https://demo.livehelperchat.com/eng/widgetrestapi/checkinvitation...`
*   **`Synchronisation and sound settings > Sync for new chats, interval in seconds`**: This setting determines how often the Live Helper Chat back office checks for new chats.
    *   `https://demo.livehelperchat.com/site_admin/chat/syncadmininterface/...`
*   **`Sync for a new user message, interval in seconds`**: During a conversation, this setting defines how often the widget checks for new messages.
    *   `https://demo.livehelperchat.com/site_admin/chat/syncadmin/...`
    *   `https://demo.livehelperchat.com/eng/widgetrestapi/fetchmessages/...`
    *   `https://demo.livehelperchat.com/eng/widgetrestapi/checkchatstatus/...`
*   **`Chat configuration > Visitor activity > Interval between chat status checks in seconds, 0 disabled.`**: During the widget's lifetime, if no operators are available, the widget status automatically changes between offline and online. If this is not relevant (e.g., if you are using a bot), you can disable it.
    *   `https://demo.livehelperchat.com/eng/widgetrestapi/chatcheckstatus/...`

For more performance-related tips, see [Performance Tweaks for High Load](../performance.md).
