---
id: working-with-messages
title: Working with messages
sidebar_label: Working with messages
---

## Introduction

Purpose of this article to introduce the way you can save a message from your extension.

## Make direct ajax call to save a message as operator

This can be usefull in case you have added custom button and want to save a custom message on your button click.

```javascript
// Quck way
lhinst.addmsgadmin(chat_id,'message');

// OR Manual way
var chat_id = 1;                    // Change to your chat ID
var pdata = {msg : 'adminhere'};    // change to your message text.

$.postJSON(WWW_DIR_JAVASCRIPT + 'chat/addmsgadmin/' + chat_id, pdata , function(data) {
    
    // Call old style callback
    if (LHCCallbacks.addmsgadmin) {
        LHCCallbacks.addmsgadmin(chat_id);
    };
    
    // Call new style of callback
    ee.emitEvent('chatAddMsgAdmin', [chat_id]);

    // Prepend response if any
    if (data.r != '') {
        $('#messagesBlock-'+chat_id).append(data.r).scrollTop($("#messagesBlock-"+chat_id).prop("scrollHeight")).find('.pending-storage').remove();
    };

    // Hold action handling
    if (data.hold_removed === true) {
        $('#hold-action-'+chat_id).removeClass('btn-outline-info');
    } else if (data.hold_added === true) {
        $('#hold-action-'+chat_id).addClass('btn-outline-info');
    }

    if (data.update_status === true) {
        lhinst.updateVoteStatus(chat_id); // This will force right column to be updated with new information
    }

    lhinst.syncadmincall(); // Forces to fetch for a new messages

    return true;
});
```

## Process custom command

```php
$currentUser = erLhcoreClassUser::instance();
$chat = erLhcoreClassModelChat::fetch($chatId);
$msgText = '!hold'; // Default or your defined command
$userData = $currentUser->getUserData(); // Current logged operator

erLhcoreClassChatCommand::processCommand(array('user' => $userData, 'msg' => $msgText, 'chat' => & $chat));
```

## Save as a plain message

Send message from php

```php
// Send message
$msg = new erLhcoreClassModelmsg();
$msg->msg = 'Your cashback amount seems very high! Let me transfer you to an expert';
$msg->chat_id = $chat->id;
$msg->name_support = 'Support nick';
$msg->user_id = -2; // -2 indicates it's a bot
// In case you are sending message as operator
$msg->user_id =  erLhcoreClassUser::instance()->getUserID();

$msg->time = time();
erLhcoreClassChat::getSession()->save($msg);


$chat->last_msg_id = $msg->id; // Required so widget will know there is a new message
// $chat->status = 0; // Change status to pending. Optional
$chat->last_op_msg_time = time();
$chat->saveThis();

// Dispatch event about added message
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('msg' => & $msg, 'chat' => & $chat, 'ou' => (isset($onlineuser) ? $onlineuser : null)));

```