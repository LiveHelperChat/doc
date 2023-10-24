---
id: reducing-request-number
title: How to reduce number of request to server?
sidebar_label: Reducing number of request
---

First of all user [NodeJS integration](https://github.com/LiveHelperChat/NodeJS-Helper) to reduce server load if possible.

Here is all related parts which control frequency of http requests lhc sends to servers and related url's.

* `Synchronisation and sound settings > Check for messages from the operators, interval in seconds` defines how often widget should check for proactive invitations from operator. If you are not using this feature you can set it to large number or in embed code set `check_messages: false`. Which will forbid checking messages completely
  * `https://demo.livehelperchat.com/eng/widgetrestapi/checkinvitation...`
* `Synchronisation and sound settings > Sync for new chats, interval in seconds` this defines how often lhc back office will check for new chats in lhc back office.
  * `https://demo.livehelperchat.com/site_admin/chat/syncadmininterface/...`
* `Sync for a new user message, interval in seconds` during conversation this one defines how often widget should check for a new messages.
  * `https://demo.livehelperchat.com/site_admin/chat/syncadmin/...`
  * `https://demo.livehelperchat.com/eng/widgetrestapi/fetchmessages/...`
  * `https://demo.livehelperchat.com/eng/widgetrestapi/checkchatstatus/...`
* `Chat configuration > Visitor activity > Interval between chat status checks in seconds, 0 disabled.` during widget lifetime of no operators becomes available widget status will automatically change from offline to online and opposite. If it's not relevant (E.g you are using bot) you can disable that.
  * `https://demo.livehelperchat.com/eng/widgetrestapi/chatcheckstatus/...`

For more performance related tips see [performance tweaks for high load](../performance.md)