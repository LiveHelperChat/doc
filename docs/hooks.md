---
id: hooks
title: Hooks
---

You can listen to these events using [listener](https://github.com/LiveHelperChat/lhchatevents). See [bootstrap.php](https://github.com/LiveHelperChat/lhchatevents/blob/master/lhchatevents/bootstrap/bootstrap.php#L18) file 

## Chat start event

These are all different variations of chat started event.

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhwidgetrestapi/submitonline.php | chat.chat_started | array('chat' => & $chat, 'msg' => $messageInitial)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.chat_started | array('chat' => & $chat)); |  |
| ./modules/lhchat/startchat.php | chat.chat_started | array('chat' => & $chat, 'msg' => $messageInitial)); |  |
| ./modules/lhchat/chatwidget.php | chat.chat_started | array('chat' => & $chat, 'msg' => $messageInitial)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.chat_started | array('chat' => & $chat, 'msg' => $messageInitial)); |  |
| ./modules/lhrestapi/startchat.php | chat.chat_started | array('chat' => & $chat, 'msg' => $messageInitial)); |  |
| ./modules/lhchat/startchat.php | chat.startchat_data_fields | array('data_fields' => & $startDataFields, 'params' => $Params)); |  |
| ./modules/lhchat/startchat.php | chat.before_chat_started | array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true))); |  |
| ./modules/lhchat/startchat.php | chat.chat_offline_request_presend | array( |  |
| ./modules/lhchat/startchat.php | chat.chat_offline_request | array( |  |
| ./modules/lhchat/startchat.php | chat.startchat | array('result' => & $Result,'tpl' => & $tpl, 'params' => & $Params, 'inputData' => & $inputData)); |  |

## General purpose chat events
| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhchat/addmsguser.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhchat/syncuser.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhchat/transfertohuman.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhchat/usertyping.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhgenericbot/buttonclicked.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhgenericbot/updatebuttonclicked.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhrestapi/addmsguser.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhwidgetrestapi/fetchmessages.php | chat.validstatus_chat | array('chat' => & $chat, 'valid_statuses' => & $validStatuses)); |  |
| ./modules/lhchat/list.php | chat.list_path | array('result' => & $Result)); |  |
| ./modules/lhchat/chat.php | chat.chat | array('result' => & $Result, 'tpl' => & $tpl, 'params' => & $Params, 'chat' => & $chat)); |  |
| ./modules/lhchat/blockedusers.php | chat.blockedusers | array()); |  |
| ./modules/lhchat/blockedusers.php | chat.blockedusres_path | array('result' => & $Result)); |  |

## Chat transfer related events
| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhchat/accepttransfer.php | chat.chat_transfer_accepted | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatcommand.php | chat.chat_transfered_force | array('chat' => & $params['chat'])); |  |
| ./modules/lhchat/transferuser.php | chat.before_chat_transfered | array('chat' => & $Chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/transferuser.php | chat.chat_transfered | array('chat' => & $Chat, 'transfer' => $Transfer)); |  |
| ./modules/lhxml/accepttransfer.php | chat.chat_transfer_accepted | array('chat' => & $chat)); |  |
| ./modules/lhxml/accepttransferbychat.php | chat.chat_transfer_accepted | array('chat' => & $chat)); |  |
| ./modules/lhxml/transferuser.php | chat.chat_transfered | array('chat' => & $Chat)); |  |

## Chat close event

Happens when operator or system closes a chat.

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchat.php | chat.close | array('chat' => & $chat, 'user_data' => $operator)); |  |

## Chat modify event

Chat was modified by system or operator.

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchatvalidator.php | chat.modified | array('chat' => & $chat, 'params' => array())); |  |
| ./modules/lhchat/modifychat.php | chat.modified | array('chat' => & $chat, 'params' => $Params)); |  |
| ./modules/lhchat/adminchat.php | chat.data_changed | array('chat' => & $chat,'user' => $currentUser)); |  |
| ./modules/lhchat/changestatus.php | chat.data_changed | array('chat' => & $chat, 'user' => $currentUser)); |  |
| ./modules/lhchat/addmsgadmin.php | chat.data_changed | array('chat' => & $Chat, 'user' => $currentUser)); |  |
| ./modules/lhxml/chatdata.php | chat.data_changed | array('chat' => & $chat,'user' => $currentUser)); |  |
| ./modules/lhrestapi/setchatstatus.php | chat.data_changed | array('chat' => & $chat, 'user_data' => $userData)); |  |
| ./modules/lhrestapi/addmsgadmin.php | chat.data_changed | array('chat' => & $Chat, 'user_data' => $userData)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | chat.data_changed_chat | array('chat_id' => $item->chat_id)); | Happens only when visitor activity changes. From offline to online |
| ./modules/lhwidgetrestapi/chatcheckstatus.php | chat.data_changed_chat | array('chat_id' => $chatId)); | Happens only when visitor activity changes. From offline to online |

## Online user related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | onlineuser.before_proactive_triggered | array('ou' => & $item, 'errors' => & $errors)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | onlineuser.before_store_chat |  |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | onlineuser.created | array('tpl' => (isset($paramsHandle['tpl']) ? $paramsHandle['tpl'] : false), 'ou' => & $item)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | onlineuser.pageview_logged | array('tpl' => (isset($paramsHandle['tpl']) ? $paramsHandle['tpl'] : false), 'ou' => & $item)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php | onlineuser.handle_request | array('new_visitor' => $newVisitor, 'returning_visitor' => $returningVisitor, 'online_user' => $item, 'params' => $paramsHandle)); |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | onlineuser.proactive_triggered | array('message' => & $message, 'ou' => & $item)); |  |
| ./modules/lhchat/sendnotice.php | onlineuser.proactive_send_invitation | array('ou' => & $visitor)); |  |
| ./modules/lhchat/onlineusers.php | chat.onlineusers_path | array('result' => & $Result)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuserfootprint.php | onlinefootprint.created | array('item' => & $item)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatonlineuserfootprint.php | online.assign_chat_to_pageviews | array('online_user' => & $onlineUser)); |  |

## Proactive invitation related event
| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | feature.can_use_proactive | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatevent.php | feature.can_use_proactive | array( |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatvariables.php | feature.can_use_proactive | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatcampaign.php | feature.can_use_proactive | array( |  |
| ./modules/lhchat/chatcheckoperatormessage.php | chat.chatcheckoperatormessage | array('proactive_active' => & $proactiveInviteActive)); |  |
| ./modules/lhrestapi/chatcheckoperatormessage.php | chat.chatcheckoperatormessage | array('proactive_active' => & $proactiveInviteActive)); |  |
| ./modules/lhwidgetrestapi/checkinvitation.php | chat.chatcheckoperatormessage | array('proactive_active' => & $proactiveInviteActive)); |  |
| ./modules/lhwidgetrestapi/settings.php | chat.chatcheckoperatormessage | array('proactive_active' => & $proactiveInviteActive)); |  |
| ./modules/lhchat/sendnotice.php | chat.sendnotice | array('errors' => & $Errors)); | Operator sends message to online visitor |

## Chat delete event

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchatcommand.php | chat.delete | array('chat' => & $params['chat'], 'user' => $params['user']) |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.delete |  array('chat' => & $chat) |  |
| ./modules/lhchat/delete.php | chat.delete | array('chat' => & $chat, 'user' => $currentUser)); |  |
| ./modules/lhchat/deletechatadmin.php | chat.delete | array('chat' => & $chat, 'user' => $currentUser)); |  |
| ./modules/lhxml/deletechat.php | chat.delete | array('chat' => & $chat, 'user' => $currentUser)); |  |

## Canned messages related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchatadminvalidatorhelper.php | chat.validate_canned_msg_user_departments | array('canned_msg' => & $cannedMessage, 'errors' => & $Errors)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.presend_canned_msg | array( |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.canned_message_replace | array('items' => & $items, 'user' => $chat->user, 'chat' => $chat, 'replace_array' => & $replaceArray)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.canned_message_before_save | array('msg' => & $msg, 'chat' => & $chat)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelcannedmsg.php | chat.workflow.canned_message_filter | array( |  |
| ./lib/models/lhchat/erlhcoreclassmodelcannedmsg.php | chat.workflow.canned_message_replace | array( |  |
| ./lib/models/lhchat/erlhcoreclassmodelcannedmsgtaglink.php | chat.workflow.canned_message_replace | array( |  |
| ./modules/lhchat/newcannedmsg.php | chat.newcannedmsg | array()); |  |
| ./modules/lhchat/newcannedmsg.php | chat.before_newcannedmsg | array('departments' => $userDepartments, 'scope' => 'global', 'errors' => & $Errors, 'msg' => & $CannedMessage)); |  |
| ./modules/lhchat/newcannedmsg.php | chat.newcannedmsg_saved | array('msg' => & $CannedMessage)); |  |
| ./modules/lhchat/newcannedmsg.php | chat.newcannedmsg_path | array('result' => & $Result)); |  |
| ./modules/lhchat/cannedmsgedit.php | chat.canned_msg_before_save | array('departments' => $userDepartments, 'errors' => & $Errors, 'msg' => & $Msg, 'scope' => 'global')); |  |
| ./modules/lhchat/cannedmsgedit.php | chat.canned_msg_after_save | array('msg' => & $Msg)); |  |
| ./modules/lhchat/cannedmsgedit.php | chat.cannedmsgedit_path | array('result' => & $Result)); |  |
| ./modules/lhchat/cannedmsg.php | chat.cannedmsg | array()); |  |
| ./modules/lhchat/cannedmsg.php | chat.cannedmsg_before_remove | array('msg' => & $Msg)); |  |
| ./modules/lhchat/cannedmsg.php | chat.cannedmsg_path | array('result' => & $Result); |  |
| ./modules/lhuser/account.php | chat.canned_msg_before_save | array('errors' => & $Errors, 'msg' => & $cannedMessage, 'scope' => 'user')); |  |
| ./modules/lhuser/account.php | chat.canned_msg_after_save | array('msg' => & $cannedMessage)); |  |
| ./modules/lhspeech/editlanguage.php | chat.cannedmsgedit_path | array('result' => & $Result)); |  |
| ./modules/lhspeech/editdialect.php | chat.cannedmsgedit_path | array('result' => & $Result)); |  |
| ./modules/lhcannedmsg/filter.php | cannedmsg.filter | array('q' => $q, 'cannedmessages' => & $cannedMessagesFormated, 'chat' => & $chat); |  |

## Messaging events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhcore/lhfileupload.php | chat.web_add_msg_admin | array('msg' => & $msg, 'chat' => & $chat)); |  |
| ./modules/lhchat/addmsgadmin.php | chat.web_add_msg_admin | array('msg' => & $msg,'chat' => & $Chat, 'ou' => (isset($onlineuser) ? $onlineuser : null))); |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.before_msg_user_saved | array('msg' => & $msg, 'chat' => & $chat)); |  |
| ./modules/lhchat/addmsgadmin.php | chat.before_msg_admin_saved | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./modules/lhrestapi/addmsgadmin.php | chat.before_msg_admin_saved | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./lib/core/lhcore/lhfileupload.php | chat.before_msg_admin_saved | array('msg' => & $msg, 'chat' => & $chat)); |  |
| ./modules/lhrestapi/addmsgadmin.php | chat.web_add_msg_admin | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./modules/lhchatbox/addmsguser.php | chatbox.before_msg_user_saved | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./modules/lhchat/addmsguser.php | chat.before_msg_user_saved | array('msg' => & $msg,'chat' => & $chat)); |  |
| ./modules/lhchat/addmsguser.php | chat.addmsguser | array('chat' => & $chat, 'msg' => & $msg)); |  |
| ./modules/lhrestapi/addmsguser.php | chat.addmsguser | array('chat' => & $chat, 'msg' => & $msg, 'init' => 'restapi')); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.before_msg_user_saved | array('msg' => & $msg,'chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.addmsguser | array('chat' => & $chat, 'msg' => & $msg)); |  |
| ./modules/lhchat/syncadmininterface.php | chat.syncadmininterface.pendingchats | array('additional_filter' => & $additionalFilter)); |  |
| ./modules/lhchat/syncadmininterface.php | chat.syncadmininterface | array('lists' => & $ReturnMessages, 'v' => & $version)); | Listen to this event if you want to modify what's returned for back office sync call |
| ./modules/lhchat/syncuser.php | chat.syncuser | array('chat' => & $chat, 'response' => & $responseArray)); |  |
| ./modules/lhwidgetrestapi/fetchmessages.php | chat.syncuser | array('chat' => & $chat, 'response' => & $responseArray)); |  |
| ./modules/lhchat/syncadmin.php | chat.syncadmin | array('response' => & $response, 'messages' => $Messages, 'chat' => $Chat)); | Right place to inject something for new messages check for admin |
| ./modules/lhchat/updatemsguser.php | chat.before_msg_user_update | array('msg' => & $msg,'chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhchat/addmsguser.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhchat/userclosechat.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidgetclosed.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidgetclosed.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhsurvey/backtochat.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/addmsguser.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/closechatasvisitor.php | chat.unread_chat | array('chat' => & $chat)); |  |
| ./lib/models/lhabstract/erlhabstractmodelautoresponderchat.php | chat.before_auto_responder_msg_saved | array('msg' => & $msg, 'chat' => & $this->chat)); | Auto responder message is send |

## Department related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhdepartment/new.php | department.modified | array('department' => $Departament)); |  |
| ./modules/lhdepartment/edit.php | department.modified | array('department' => $Departament)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.validate_department | array('input_form' => $inputForm)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.validate_department | array('input_form' => $inputForm)); |  |

## Survey related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhsurvey/fill.php | survey.filled | array('chat' => & $chat, 'survey' => $survey, 'survey_item' => & $surveyItem)); |  |
| ./modules/lhsurvey/fillwidget.php | survey.filled | array('chat' => & $chat, 'survey' => $survey, 'survey_item' => & $surveyItem)); |  |
| ./lib/core/lhsurvey/lhsurveyvalidator.php | survey.validate | array('survey' => & $survey, 'survey_item' => & $surveyItem, 'errors' => & $Errors)); |  |
| ./modules/lhsurvey/backtochat.php | survey.back_to_chat | array('chat' => & $chat, 'msg' => & $msg)); |  |

## Abstract events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhabstract/new.php | abstract.new_.strtolower($Params['user_parameters']['identifier']).'_general' | , array()); |  |
| ./modules/lhabstract/new.php | abstract.before_created..strtolower($objectClass) | ,array('object' => & $objectData, 'errors' => & $Errors)); |  |
| ./modules/lhabstract/new.php | abstract.created..strtolower($objectClass) | ,array('object' => & $objectData)); |  |
| ./modules/lhabstract/new.php | abstract.new_.strtolower($Params['user_parameters']['identifier']).'_path' | , array('result' => & $Result)); |  |
| ./modules/lhabstract/delete.php | abstract.delete_.strtolower($Params['user_parameters']['identifier']).'_general' | , array()); |  |
| ./modules/lhabstract/list.php | abstract.list_.strtolower($Params['user_parameters']['identifier']).'_general' | , array()); |  |
| ./modules/lhabstract/list.php | abstract.list_.strtolower($Params['user_parameters']['identifier']).'_path' | , array('result' => & $Result)); |  |
| ./modules/lhabstract/edit.php | abstract.edit_.strtolower($Params['user_parameters']['identifier']).'_general' | , array()); |  |
| ./modules/lhabstract/edit.php | abstract.edit_.strtolower($Params['user_parameters']['identifier']).'_path' | , array('result' => & $Result)); |  |

## Themes related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | theme.download_image. | .$attr, array('theme' => $this, 'attr' => $attr)); |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | theme.edit. | .$attr.'_path',array('dir' => & $dir, 'storage_id' => $this->id)); |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | theme.edit.store_ | .$attr,array( |  |
| ./lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php | theme.edit.remove_ | .$attr,array( |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | theme.download_image. | .$attr, array('theme' => $this, 'attr' => $attr)); |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | theme.edit. | .$attr.'_path',array('dir' => & $dir, 'storage_id' => $this->id)); |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | theme.edit.store_ | .$attr,array( |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | theme.edit.remove_ | .$attr,array( |  |
| ./modules/lhgenericbot/botimportgroup.php | theme.temppath | array('dir' => & $dir)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | theme.temppath | array('dir' => & $dir)); |  |
| ./modules/lhuser/import.php | theme.temppath | array('dir' => & $dir)); |  |
| ./modules/lhgenericbot/import.php | theme.temppath | array('dir' => & $dir)); |  |
| ./modules/lhtheme/import.php | theme.temppath | array('dir' => & $dir)); |  |
| ./lib/core/lhtheme/lhthemevalidator.php | admintheme.filedir | array('dir' => & $dir, 'storage_id' => $clickform->id)); |  |

## User related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhuser/lhuser.php | user.after_generate_access_array | array('accessArray' => & $accessArray)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.edit.photo_path | array('dir' => & $dir,'storage_id' => $userData->id)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.edit.photo_store | array('file_post_variable' => 'UserPhoto', 'dir' => & $dir, 'storage_id' => $userData->id)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.edit.photo_resize_150 | array('mime_type' => $file["data"]['mime_type'],'user' => $userData)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.new_user | array('userData' => & $userData, 'errors' => & $Errors)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.edit_user | array('userData' => & $userData, 'errors' => & $Errors)); |  |
| ./lib/core/lhuser/lhuservalidator.php | user.account.update | array('userData' => & $userData, 'errors' => & $Errors)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | user.edit.photo_path | array('dir' => & $dir, 'storage_id' => $userData->id)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | user.edit.photo_resize_150 | array('mime_type' => $extensionMimetype[$mimetype], 'user' => $userData)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | user.edit.photo_path | array('dir' => & $dir, 'storage_id' => $userData->id)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | user.edit.photo_store | array('file_post_variable' => 'UserPhoto', 'dir' => & $dir, 'storage_id' => $userData->id)); |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | user.edit.photo_resize_150 | array('mime_type' => $file["data"]['mime_type'],'user' => $userData)); |  |
| ./lib/models/lhuser/erlhcoreclassmodeluser.php | user.remove_photo | array('user' => & $this)); |  |
| ./lib/models/lhgenericbot/erlhcoreclassmodelgenericbotbot.php | user.remove_photo | array('user' => & $this)); |  |
| ./lib/models/lhgenericbot/erlhcoreclassmodelgenericbottrgroup.php | user.remove_photo | array('user' => & $this)); |  |
| ./modules/lhuser/delete.php | user.deleted | array('userData' => $departament)); |  |
| ./modules/lhuser/logout.php | user.logout | array('user' => & $lhUser)); |  |
| ./modules/lhuser/logout.php | user.after_logout | array('user' => & $lhUser)); |  |
| ./modules/lhuser/new.php | user.user_created | array('userData' => & $UserData, 'password' => $UserData->password_front)); |  |
| ./modules/lhuser/new.php | user.new_path | array('result' => & $Result)); |  |
| ./modules/lhfile/storescreenshot.php | file.storescreenshot.before_store | array('errors' => & $errors, 'chat' => & $chat, 'data' => $_POST['data'])); |  |
| ./modules/lhuser/account.php | user.after_user_departments_update | array('user' => & $UserData)); |  |
| ./modules/lhuser/account.php | user.account | array('userData' => & $UserData, 'tpl' => & $tpl, 'params' => $Params)); |  |
| ./modules/lhuser/account.php | user.account_result | array('result' => & $Result)); |  |

## Files manipulation event

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./modules/lhfile/storescreenshot.php | file.storescreenshot.screenshot_path | array('path' => & $path, 'storage_id' => $storageID)); |  |
| ./modules/lhfile/storescreenshot.php | file.storescreenshot.store | array('chat_file' => & $fileUpload)); |  |
| ./lib/core/lhtheme/lhthemevalidator.php | file.file_new_admin.file_store | array( |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatfile.php | file.remove_file | array('chat_file' => & $this)); |  |
| ./lib/models/lhabstract/erlhabstractmodeladmintheme.php | file.remove_file | array('chat_file' => & $std, 'files_path_storage' => 'images_path' )); |  |
| ./modules/lhfile/new.php | file.before_file_new_admin.file_store | array('errors' => & $errors)); |  |
| ./modules/lhfile/new.php | file.new.file_path | array('path' => & $path)); |  |
| ./modules/lhfile/new.php | file.file_new_admin.file_store | array('chat_file' => $upload_handler->uploadedFile)); |  |
| ./modules/lhfile/new.php | file.new_path | array('result' => & $Result)); |  |
| ./modules/lhfile/uploadfileadminonlineuser.php | file.uploadfileadmin.file_path | array('path' => & $path, 'storage_id' => $onlineUser->id)); |  |
| ./modules/lhfile/uploadfileadminonlineuser.php | file.uploadfileadmin.file_store | array('chat_file' => $upload_handler->uploadedFile)); |  |
| ./modules/lhfile/downloadfile.php | file.download | array('chat_file' => $file)); |  |
| ./modules/lhfile/uploadfileonline.php | file.uploadfile.file_path | array( |  |
| ./modules/lhfile/uploadfileonline.php | file.uploadfile.file_store | array( |  |
| ./modules/lhfile/list.php | file.list_path | array('result' => & $Result)); |  |
| ./modules/lhfile/edit.php | file.edit_path | array('result' => & $Result)); |  |
| ./modules/lhfile/uploadfile.php | file.before_user_uploadfile.file_store | array('errors' => & $errors)); |  |
| ./modules/lhfile/uploadfile.php | file.uploadfile.file_path | array('path' => & $path, 'storage_id' => $chat->id)); |  |
| ./modules/lhfile/uploadfile.php | file.uploadfile.file_store | array('chat_file' => $upload_handler->uploadedFile)); |  |
| ./modules/lhfile/configuration.php | file.configuration_path | array('result' => & $Result)); |  |
| ./modules/lhfile/uploadfileadmin.php | file.before_admin_uploadfile.file_store | array('errors' => & $errors)); |  |
| ./modules/lhfile/uploadfileadmin.php | file.uploadfileadmin.file_path | array('path' => & $path, 'storage_id' => $chat->id)); |  |
| ./modules/lhfile/uploadfileadmin.php | file.uploadfileadmin.file_store | array('chat_file' => $upload_handler->uploadedFile)); |  |

## Auto responder events
| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchatvalidator.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.before_auto_responder_message | array('chat' => & $chat, 'responder' => & $responder)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./lib/models/lhabstract/erlhabstractmodelautoresponderchat.php | chat.before_auto_responder_triggered | array( |  |
| ./lib/models/lhabstract/erlhabstractmodelautoresponderchat.php | chat.redirected_to_survey_by_autoresponder | array('chat' => & $this->chat)); |  |
| ./modules/lhchat/addmsguser.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhchat/startchat.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhchat/startchat.php | chat.before_auto_responder_message | array('chat' => & $chat, 'responder' => & $responder)); |  |
| ./modules/lhchat/startchat.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidget.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhchat/chatwidget.php | chat.before_auto_responder_message | array('chat' => & $chat, 'responder' => & $responder)); |  |
| ./modules/lhchat/chatwidget.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/startchat.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhrestapi/startchat.php | chat.before_auto_responder_message | array('chat' => & $chat, 'responder' => & $responder)); |  |
| ./modules/lhrestapi/startchat.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/fetchchatmessages.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./modules/lhrestapi/addmsguser.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/submitonline.php | chat.before_auto_responder_triggered | array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors)); |  |
| ./modules/lhwidgetrestapi/submitonline.php | chat.before_auto_responder_message | array('chat' => & $chat, 'responder' => & $responder)); |  |
| ./modules/lhwidgetrestapi/submitonline.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/addmsguser.php | chat.auto_responder_triggered | array('chat' => & $chat)); |  |



## Statistic related events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.gettoptodaysoperators | array('limit' => $limit, 'offset' => $offset, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatspermonth | array('params_execution' => $paramsExecution, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatsperweek | array('params_execution' => $paramsExecution, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatswaittimeperweek | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getlast24hstatistic | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatsperday | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatswaittime | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatswaittimeperday | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getnumberofchatspermonthunanswered | array('filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getworkloadstatistic | array('filter' => $filter, 'days' => $days)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getaveragechatduration | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getsubjectsstatistic | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.gettopchatsbycountry | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.averageofchatsdialogsbyuser | array('days' => $days, 'filter' => $filter, 'limit' => $limit)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.numberofchatsdialogsbydepartment | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.numberofchatsdialogsbyuser | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.avgwaittimeuser | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.numberofmessagesbyuser | array('days' => $days, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getagentstatistic_export_columns | array('xls' => & $objPHPExcel)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getagentstatistic_export_columns_value | array('xls' => & $objPHPExcel,'key' => & $key,'i' => & $i,'item' => & $item,) |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getagentstatisticaveragefield | array('attr' => & $attrToAverage, 'attr_front' => & $attrFrontAverage)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getagentstatistic | $filterExtension); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.getperformancestatistic | array('ranges' => $dateRange, 'days' => $days, 'filter' => $filter, 'filter_params' => $filterParams)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdateweek | array('params_execution' => $filterParams, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdatenickweek | array('params_execution' => $filterParams, 'filter' => $filter)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdateday | array('filter' => $filter, 'params_execution' => $filterParams)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdatenickday | array('filter' => $filter, 'params_execution' => $filterParams)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdate | array('filter' => $filter, 'params_execution' => $filterParams)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.nickgroupingdatenick | array('filter' => $filter, 'params_execution' => $filterParams)); |  |
| ./lib/core/lhchat/lhchatstatistic.php | statistic.validgroupfields | array('type' => 'sql', 'fields' => & $validGroupFields)); |  |
| ./modules/lhstatistic/statistic.php | chat.statistic | array()); |  |
| ./modules/lhstatistic/statistic.php | statistic.valid_tabs | array( |  |
| ./modules/lhstatistic/statistic.php | statistic.process_active_tab | array( |  |
| ./modules/lhstatistic/statistic.php | statistic.process_tab | array( |  |
| ./modules/lhstatistic/statistic.php | chat.statistic_path | array('result' => & $Result)); |  |


## General events

| File | Identifier | Arguments | Description
| --- | --- | --- | --- |
| ./lib/core/lhform/lhformrenderer.php | form.on_form_render | array('form' => & $form, 'errors' => & self::$errors)); |  |
| ./lib/core/lhform/lhformrenderer.php | form.fill.file_path | array('path' => & $dir, 'storage_id' => $formCollected->id)); |  |
| ./lib/core/lhform/lhformrenderer.php | form.fill.store_file | array('file_params' => & $params)); |  |
| ./lib/core/lhform/lhformrenderer.php | form.filled | array('form' => & $formCollected)); |  |
| ./lib/core/lhtpl/tpl.php | tpl.new | array('tpl' => & $this)); |  |
| ./lib/core/lhchat/lhchatcommand.php | chat.customcommand | array('command' => $commandData['command'], 'params' => $params)); |  |
| ./lib/core/lhchat/lhchatmail.php | chatmail.setup_smtp | array('phpmailer' => & $phpMailer) |  |
| ./lib/core/lhchat/lhchat.php | chat.setonlinestatus_directly | array('list' => & $chatLists, 'online_users_id' => $onlineUserId)); |  |
| ./lib/core/lhchat/lhchat.php | chat.setonlinestatus | array('list' => & $chatLists, 'online_users_id' => $onlineUserId)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.validate_start_chat | array('errors' => & $Errors, 'input_form' => & $inputForm, 'start_data_fields' => & $start_data_fields, 'chat' => & $chat,'additional_params' => & $additionalParams)); |  |
| ./lib/core/lhchat/lhchatvalidator.php | chat.genericbot_set_bot | array( |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.data_changed_assigned_department | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.unread_chat_workflow | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | xml.before_send_xmp_message | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.chat_unread_message | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | xml.before_send_xmp_message | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.chat_accepted | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | xml.before_send_xmp_message | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.new_chat | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.autoassign_permit | array( |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.autoassign | array( |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.data_changed_auto_assign | array('chat' => & $chat)); |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.get_chat_history | array( |  |
| ./lib/core/lhchat/lhchatworkflow.php | chat.workflow.has_previous_messages | $params); |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactionpredefined.php | chat.genericbot_chat_predefined | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactiontext.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php | chat.genericbot_chat_command_transfer | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php | chat.genericbot_chat_command_transfer | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php | chat.genericbot_chat_command_transfer | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php | chat.genericbot_chat_command_transfer | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php | chat.genericbot_chat_command_dispatch_event | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactionactions.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactionprogress.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactionevent_type.php | chat.genericbot_event_type | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbot.php | bot.validate | array('bot' => & $bot, 'configuration_array' => & $configurationArray, 'additional_params' => $additionalParams)); |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_get_message | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_event_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_event_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_get_message | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_handler | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_get_trigger_click | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_get_click | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.genericbot_get_click_async | array( |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.replace_before_message_bot | array('msg' => & $message, 'chat' => & $params['chat'])); |  |
| ./lib/core/lhgenericbot/lhgenericbotworkflow.php | chat.replace_message_bot | array('msg' => & $message, 'chat' => & $params['chat'])); |  |
| ./lib/core/lhcore/lhmodule.php | chat.core.default_url | array('url' => & $url)); |  |
| ./lib/core/lhchatbox/lhchatbox.php | chatbox.created | array('chatbox' => & $chatbox)); |  |
| ./lib/core/lhchatbox/lhchatbox.php | chatbox.created | array('chatbox' => & $chatbox)); |  |
| ./lib/core/lhxmp/lhxmp.php | xml.send_xmp_message | array('params' => & $data)); |  |
| ./lib/core/lhcobrowse/lhcobrowse.php | cobrowse.started | array('co_browse' => & $coBrowseSession)); |  |
| ./lib/core/lhbbcode/lhbbcode.php | chat.before_make_clickable | array('msg' => & $ret, 'makeLinksClickable' => & $makeLinksClickable)); |  |
| ./lib/core/lhbbcode/lhbbcode.php | chat.after_make_clickable | array('msg' => & $ret)); |  |
| ./lib/core/lhtranslate/lhgoogletranslate.php | translate.after_google_translate | array('word' => & $word, 'errors' => & $errors)); |  |
| ./lib/core/lhtranslate/lhbingtranslate.php | translate.after_bing_translate | array('word' => & $word, 'errors' => & $errors)); |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_config | array()); |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_bing_token | array( |  |
| ./lib/core/lhtranslate/lhtranslate.php | translate.messagetranslated | array( |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_config | array()); |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_config | array()); |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_bing_token | array( |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_config | array()); |  |
| ./lib/core/lhtranslate/lhtranslate.php | translation.get_bing_token | array( |  |
| ./lib/core/lhabstract/fields/erlhabstractmodelwidgettheme.php | lhabstract.erlhabstractmodelwidgettheme.fields | array('fields' => & $fields)); |  |
| ./lib/core/lhrestapi/lhrestapivalidator.php | rest_api.validate_request | array( |  |
| ./lib/core/lhrestapi/lhrestapivalidator.php | restapi.chats_filter | array('filter' => & $filter)); |  |
| ./lib/core/lhrestapi/lhrestapivalidator.php | chat.restapi_chats | array('list' => & $chats)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php | chat.archived | array('chat' => & $item, 'archive' => $this)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php | chat.set_archive_tables | array('archive' => & $this)); |  |
| ./lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php | chat.create_archive | array('archive' => & $this)); |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | lhabstract.erlhabstractmodelwidgettheme.getstate | array('state' => & $stateArray, 'object' => & $this)); |  |
| ./lib/models/lhabstract/erlhabstractmodelwidgettheme.php | feature.can_use_themes | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelautoresponder.php | feature.can_use_autoresponder | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelform.php | feature.can_use_forms | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelsubject.php | feature.can_use_subject | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelproduct.php | feature.can_use_product | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelsurvey.php | feature.can_use_survey | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelrestapikeyremote.php | feature.can_use_product | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelrestapikey.php | feature.can_use_product | array('object_meta_data' => & $metaData)); |  |
| ./lib/models/lhabstract/erlhabstractmodelformcollected.php | form.remove_file | array('filepath' => $content['filepath'], 'filename' => $content['filename'])); |  |
| ./lib/models/lhabstract/erlhabstractmodelbrowseofferinvitation.php | feature.can_use_browse_offers | array('object_meta_data' => & $metaData)); |  |
| ./modules/lhform/download.php | form.file.download | array('filename' => $file->content_array[$attr_name]['filename'])); |  |
| ./modules/lhform/embedcode.php | form.embedcode | array()); |  |
| ./modules/lhform/downloaditem.php | form.file.download | array('filename' => $content['filename'])); |  |
| ./modules/lhform/index.php | form.index | array()); |  |
| ./modules/lhquestionary/votingwidget.php | questionaire.before_option_chosen | array('voting' => & $votingAnswer, 'errors' => & $Errors)); |  |
| ./modules/lhquestionary/votingwidget.php | questionaire.option_chosen | array('voting' => & $votingAnswer)); |  |
| ./modules/lhquestionary/votingwidget.php | questionaire.before_feedback_left | array('feedback' => & $answer, 'errors' => & $Errors)); |  |
| ./modules/lhquestionary/votingwidget.php | questionaire.feedback_left | array('feedback' => & $answer)); |  |
| ./modules/lhquestionary/list.php | questionary.list | array('tpl' => & $tpl)); |  |
| ./modules/lhquestionary/edit.php | questionary.edit | array('questionary' => $Question)); |  |
| ./modules/lhquestionary/newquestion.php | questionary.new | array('questionary' => $Data)); |  |
| ./modules/lhfile/storescreenshot.php | chat.sync_back_office | ); |  |
| ./modules/lhfile/storescreenshot.php | chat.messages_added_passive | array( |  |
| ./modules/lhfile/storescreenshot.php | chat.screenshot_ready | array( |  |
| ./modules/lhbrowseoffer/index.php | browseoffer.index | array()); |  |
| ./modules/lhbrowseoffer/htmlcode.php | browseoffer.htmlcode | array()); |  |
| ./modules/lhchat/extendcookie.php | chat.extendcookie | array('vid' => (string)$Params['user_parameters']['vid'])); |  |
| ./modules/lhchat/refreshcustomfields.php | chat.data_changed_chat | array( |  |
| ./modules/lhchat/loadmaindata.php | chat.auto_preload | array('chat' => $chat, 'load_previous' => & $loadPrevious)); |  |
| ./modules/lhchat/dashboardwidgets.php | chat.dashboardwidgets | array('supported_widgets' => & $supportedWidgets)); |  |
| ./modules/lhchat/addoperation.php | file.before_screenshot_addoperacion | array('chat' => & $Chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/addoperation.php | cobrowse.before_started | array('chat' => & $Chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/addoperation.php | chat.added_operation | array('chat' => & $Chat)); |  |
| ./modules/lhchat/getstatus.php | chat.getstatus | array('tpl' => & $tpl, 'theme' => $theme, 'validUnits' => $validUnits)); |  |
| ./modules/lhchat/userclosechat.php | chat.explicitly_closed | array('chat' => & $chat)); |  |
| ./modules/lhchat/geoconfiguration.php | chat.geoconfiguration | array()); |  |
| ./modules/lhchat/logevent.php | chat.data_changed_chat | array( |  |
| ./modules/lhchat/updatejsvars.php | chat.data_changed_chat | array( |  |
| ./modules/lhchat/updatemsg.php | chat.before_msg_admin_update | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./modules/lhchat/editprevious.php | chat.before_edit_previous_admin_returned | array('response' => & $array)); |  |
| ./modules/lhchat/updateattribute.php | chat.data_changed_chat | array( |  |
| ./modules/lhchat/listchatconfig.php | chat.listchatconfig_path | array('result' => & $Result)); |  |
| ./modules/lhchat/syncuser.php | chat.syncuser.operator_typing | array('chat' => & $chat)); |  |
| ./modules/lhchat/syncuser.php | chat.before_chat_closed_tpl | array('chat' => & $chat, 'tpl' => & $tpl)); |  |
| ./modules/lhchat/syncuser.php | chat.before_chat_closed_tpl | array('chat' => & $chat, 'tpl' => & $tpl)); |  |
| ./modules/lhchat/printchat.php | chat.before_print | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/readchatmail.php | chat.before_print | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/sendchat.php | chat.before_send | array('chat' => & $chat, 'errors' => & $Errors)); |  |
| ./modules/lhchat/checkchatstatus.php | chat.checkchatstatus | array('chat' => & $chat, 'response' => & $responseArray)); |  |
| ./modules/lhchat/geoadjustment.php | chat.geoadjustment | array()); |  |
| ./modules/lhchat/geoadjustment.php | chat.geoadjustment_path | array('result' => & $Result)); |  |
| ./modules/lhchat/startchatwithoperator.php | chat.before_startchatwithoperator | array('errors' => & $Errors)); |  |
| ./modules/lhchat/startchatwithoperator.php | chat.startchatwithoperator_started | array('chat' => & $chat, 'transfer' => & $transfer)); |  |
| ./modules/lhchat/addmsgadmin.php | chat.accept | array('chat' => & $Chat, 'user' => $currentUser)); |  |
| ./modules/lhchat/chatwidget.php | chat.chatwidget_data_field | array('data_fields' => & $startDataFields, 'params' => $Params)); |  |
| ./modules/lhchat/chatwidget.php | chat.before_chat_started | array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true))); |  |
| ./modules/lhchat/chatwidget.php | chat.chat_offline_request_presend | array( |  |
| ./modules/lhchat/chatwidget.php | chat.chat_offline_request | array( |  |
| ./modules/lhchat/chatwidget.php | chat.chatwidget | array('result' => & $Result, 'tpl' => & $tpl, 'params' => & $Params, 'inputData' => & $inputData)); |  |
| ./modules/lhchat/chatwidgetclosed.php | chat.explicitly_closed | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidgetclosed.php | chat.visitor_regular_closed | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidgetclosed.php | chat.explicitly_closed | array('chat' => & $chat)); |  |
| ./modules/lhchat/transferuser.php | chat.chat_owner_changed | array('chat' => & $Chat, 'user' => $user)); |  |
| ./modules/lhchat/blockuser.php | chat.blockuser | array()); |  |
| ./modules/lhchat/loadinitialdata.php | chat.loadinitialdata | array('lists' => & $response)); |  |
| ./modules/lhchat/chatcheckstatus.php | chat.data_changed_chat | array('chat_id' => $chatId)); |  |
| ./modules/lhchat/adminchat.php | chat.accept | array('chat' => & $chat,'user' => $currentUser)); |  |
| ./modules/lhchat/setsubstatus.php | chat.set_sub_status | array('chat' => & $chat)); |  |
| ./modules/lhchat/editprevioususer.php | chat.before_edit_previous_user_returned | array('response' => & $array)); |  |
| ./modules/lhchat/chatwidgetchat.php | chat.nickchanged | array('chat' => & $chat)); |  |
| ./modules/lhchat/chatwidgetchat.php | chat.chatwidgetchat | array('result' => & $Result , 'tpl' => & $tpl, 'params' => & $Params, 'chat' => & $chat)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.readoperatormessage_data_field | array('data_fields' => & $startDataFields, 'params' => $Params)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.validate_department | array('input_form' => $inputData)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.validate_read_operator_message | array('errors' => & $Errors, 'input_form' => & $inputData, 'chat' => & $chat)); |  |
| ./modules/lhchat/readoperatormessage.php | chat.readoperatormessage | array('tpl' => $tpl, 'params' => & $Params)); |  |
| ./modules/lhchat/editnick.php | chat.nick_changed | array('chat' => & $chat)); |  |
| ./modules/lhchat/saveremarks.php | chat.before_save_remarks | array('chat' => & $Chat, 'errors' => & $errors)); |  |
| ./modules/lhchat/reopen.php | chat.user_reopened | array('chat' => & $chat)); |  |
| ./modules/lhchat/maintenance.php | chat.maintenance_path | array('result' => & $Result)); |  |
| ./modules/lhchat/holdaction.php | chat.holdaction_defaultmsg | array('msg' => & $msgText, 'chat' => & $chat)); |  |
| ./modules/lhuser/grouplist.php | user.grouplist_path | array('result' => & $Result)); |  |
| ./modules/lhuser/setinvisible.php | chat.operator_visibility_changed | array('user' => & $userData, 'reason' => 'user_action')); |  |
| ./modules/lhuser/editgroup.php | user.editgroup_path | array('result' => & $Result)); |  |
| ./modules/lhuser/setinactive.php | chat.operator_inactivemode_changed | array('user' => & $userData, 'reason' => 'user_action')); |  |
| ./modules/lhuser/setoffline.php | chat.operator_status_changed | array('user' => & $userData, 'reason' => 'user_action')); |  |
| ./modules/lhuser/autologinconfig.php | user.autologinconfig_path | array('result' => & $Result)); |  |
| ./modules/lhuser/account.php | chat.operator_status_changed | array('user' => & $UserData, 'reason' => 'user_action')); |  |
| ./modules/lhuser/passwordrequirements.php | user.autologinconfig_path | array('result' => & $Result)); |  |
| ./modules/lhuser/edit.php | user.user_modified | array('userData' => & $UserData, 'password' => $UserData->password_front)); |  |
| ./modules/lhuser/edit.php | user.after_user_departments_update | array('user' => & $UserData)); |  |
| ./modules/lhuser/edit.php | user.edit_user_window | array('userData' => & $UserData, 'tpl' => & $tpl, 'params' => $Params)); |  |
| ./modules/lhuser/edit.php | user.edit_path | array('result' => & $Result)); |  |
| ./modules/lhuser/updatepassword.php | user.2fa_intercept | array('current_user' => erLhcoreClassUser::instance())); |  |
| ./modules/lhuser/updatepassword.php | user.updatepassword | array('result' => & $Result)); |  |
| ./modules/lhuser/userlist.php | user.userlist_path | array('result' => & $Result)); |  |
| ./modules/lhuser/login.php | user.login_site_access | array('loginSiteAccess' => & $possibleLoginSiteAccess)); |  |
| ./modules/lhuser/login.php | user.login_before_authenticate | array('errors' => & $beforeLoginAuthenticateErrors, 'tpl' => & $tpl)); |  |
| ./modules/lhuser/login.php | user.login_after_success_authenticate | array('current_user' => & $currentUser, 'tpl' => & $tpl)); |  |
| ./modules/lhuser/login.php | user.2fa_intercept | array('remember' => (isset($_POST['rememberMe']) && $_POST['rememberMe'] == 1),'is_external' => $isExternalRequest, 'current_user' => $currentUser)); |  |
| ./modules/lhuser/newgroup.php | user.newgroup_path | array('result' => & $Result)); |  |
| ./modules/lhuser/loginasuser.php | chat.operator_status_changed | array('user' => & $user, 'reason' => 'user_action')); |  |
| ./modules/lhxml/deletechat.php | chat.desktop_client_deleted | array('chat' => & $chat,'user' => $currentUser)); |  |
| ./modules/lhxml/chatdata.php | chat.accept | array('chat' => & $chat,'user' => $currentUser)); |  |
| ./modules/lhxml/closechat.php | chat.desktop_client_closed | array('chat' => & $chat)); |  |
| ./modules/lhxml/addmsgadmin.php | chat.desktop_client_admin_msg | array('msg' => & $msg,'chat' => & $Chat)); |  |
| ./modules/lhgenericbot/argumenttemplates.php | chat.genericbot_arguments | array( |  |
| ./modules/lhgenericbot/listexceptions.php | chat.list_path | array('result' => & $Result)); |  |
| ./modules/lhgenericbot/newtrgroup.php | chat.genericbot_exceptions | array('exceptions' => & $exceptions)); |  |
| ./modules/lhgenericbot/list.php | chat.list_path | array('result' => & $Result)); |  |
| ./modules/lhgenericbot/editexception.php | chat.genericbot_exceptions | array('exceptions' => & $exceptions)); |  |
| ./modules/lhgenericbot/newexception.php | chat.genericbot_exceptions | array('exceptions' => & $exceptions)); |  |
| ./modules/lhpermission/newrole.php | permission.newrole_path | array('result' => & $Result)); |  |
| ./modules/lhpermission/request.php | lhpermission.getmodulename | array('module' => $module, 'name' => & $moduleName)); |  |
| ./modules/lhpermission/roles.php | permission.roles_path | array('result' => & $Result)); |  |
| ./modules/lhpermission/editrole.php | permission.editrole_path | array('result' => & $Result)); |  |
| ./modules/lhpermission/editfunction.php | permission.editrole_path | array('result' => & $Result)); |  |
| ./modules/lhnotifications/list.php | notifications.list_path | array('result' => & $Result)); |  |
| ./modules/lhnotifications/subscribe.php | chat.before_msg_user_saved | array('msg' => & $msg, 'chat' => & $chat)); |  |
| ./modules/lhspeech/defaultlanguage.php | chat.speech_defaultlanguage_path | array('result' => & $Result)); |  |
| ./modules/lhspeech/getchatdialect.php | speech.before_getchatdialect | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./modules/lhspeech/getchatdialect.php | speech.getchatdialect | array('chat' => & $chat)); |  |
| ./modules/lhchatbox/new.php | chatbox.new | array('chatbox' => $chatbox)); |  |
| ./modules/lhchatbox/list.php | chatbox.list | array()); |  |
| ./modules/lhchatbox/configuration.php | chatbox.configuration | array('tpl' => & $tpl)); |  |
| ./modules/lhchatbox/chatwidget.php | chatbox.before_created | array('errors' => & $errors)); |  |
| ./modules/lhfaq/new.php | faq.new | array('faq' => $faq)); |  |
| ./modules/lhfaq/new.php | faq.before_created | array('faq' => & $faq, 'errors' => & $Errors)); |  |
| ./modules/lhfaq/new.php | faq.created | array('faq' => & $faq)); |  |
| ./modules/lhfaq/view.php | faq.view | array('faq' => $faq)); |  |
| ./modules/lhfaq/faqwidget.php | faq.before_filled_by_user | array('faq' => & $item_new, 'errors' => & $Errors)); |  |
| ./modules/lhfaq/faqwidget.php | faq.filled_by_user | array('faq' => & $item_new)); |  |
| ./modules/lhfaq/list.php | faq.list | array('tpl' => & $tpl)); |  |
| ./modules/lhchatarchive/deletearchivechat.php | chat.archive_deleted | array('chat' => & $chat)); |  |
| ./modules/lhchatarchive/archive.php | chatarchive.archive_path | array('result' => & $Result)); |  |
| ./modules/lhchatarchive/configuration.php | chatarchive.archive_path | array('result' => & $Result)); |  |
| ./modules/lhsurvey/choosesurvey.php | chat.set_sub_status | array('chat' => & $chat)); |  |
| ./modules/lhsystem/usersactions.php | user.update_stats | array('user' => $user)); |  |
| ./modules/lhsystem/usersactions.php | user.userlist_path | array('result' => & $Result)); |  |
| ./modules/lhxmp/configuration.php | xmp.configuration | array()); |  |
| ./modules/lhcobrowse/storenodemap.php | cobrowse.before_store_node_map | array('data' => json_decode($_POST['data']), 'errors' => & $errors)); |  |
| ./modules/lhcobrowse/storenodemap.php | chat.sync_back_office | ); |  |
| ./modules/lhpaidchat/invalidhash.php | paidchat.expired_path | array('result' => & $Result)); |  |
| ./modules/lhpaidchat/expiredchat.php | paidchat.expired_path | array('result' => & $Result)); |  |
| ./modules/lhpaidchat/settings.php | paidchat.settings_path | array('result' => & $Result)); |  |
| ./modules/lhpaidchat/removedpaidchat.php | paidchat.removedpaidchat_path | array('result' => & $Result)); |  |
| ./modules/lhcron/workflow.php | chat.workflow.started | array()); |  |
| ./modules/lhcron/workflow.php | chat.pending_process_workflow | array('chat' => & $chat)); |  |
| ./modules/lhcron/workflow.php | chat.pending_process_workflow | array('chat' => & $chat)); |  |
| ./modules/lhcron/workflow.php | chat.workflow | array()); |  |
| ./modules/lhcron/util/check_archives.php | chat.check_archive | array('archive' => $archiveRange)); |  |
| ./modules/lhtranslation/starttranslation.php | translate.before_messagetranslated | array('chat' => & $chat, 'errors' => & $errors)); |  |
| ./modules/lhrestapi/addmsguser.php | chat.before_msg_user_saved | array('msg' => & $msg,'chat' => & $chat)); |  |
| ./modules/lhrestapi/department.php | department.modified | array('department' => $dep, 'payload_data' => $requestBody)); |  |
| ./modules/lhrestapi/setoperatorstatus.php | chat.operator_status_changed | array('user' => & $userData, 'reason' => 'rest_api')); |  |
| ./modules/lhrestapi/fetchchatmessages.php | chat.syncuser.operator_typing | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/fetchchat.php | api.fetchchat | array('chat' => & $chat)); |  |
| ./modules/lhrestapi/setonlinestatus.php | chat.operator_status_changed | array('user' => & $user, 'reason' => 'restapi_action')); |  |
| ./modules/lhrestapi/swagger.php | restapi.swagger | array('append_definitions' => & $append_definitions, 'append_paths' => & $append_paths, 'chats_parameters' => & $chats_parameters)); |  |
| ./modules/lhrestapi/addmsgadmin.php | chat.accept | array('chat' => & $Chat, 'user_data' => $userData)); |  |
| ./modules/lhrestapi/setinvisibilitystatus.php | chat.operator_visibility_changed | array('user' => & $userData, 'reason' => 'rest_api')); |  |
| ./modules/lhrestapi/updatechatattributes.php | chat.data_changed_chat | array( |  |
| ./modules/lhwidgetrestapi/submitoffline.php | chat.before_chat_started | array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true))); |  |
| ./modules/lhwidgetrestapi/submitoffline.php | chat.chat_offline_request_presend | array( |  |
| ./modules/lhwidgetrestapi/submitoffline.php | chat.chat_offline_request | array( |  |
| ./modules/lhwidgetrestapi/fetchmessages.php | chat.syncuser.operator_typing | array('chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/onlinesettings.php | widgetrestapi.onlinesettings | array('output' => & $outputResponse)); |  |
| ./modules/lhwidgetrestapi/initchat.php | chat.chatwidgetchat | array('params' => & $Params, 'chat' => & $chat)); |  |
| ./modules/lhwidgetrestapi/initchat.php | widgetrestapi.initchat | array('output' => & $outputResponse, 'chat' => $chat)); |  |
| ./modules/lhwidgetrestapi/checkchatstatus.php | chat.checkchatstatus | array('chat' => & $chat, 'response' => & $responseArray)); |  |
| ./modules/lhwidgetrestapi/settings.php | widgetrestapi.settings | array('output' => & $outputResponse)); |  |
| ./modules/lhchatsettings/startchatformsettings.php | chat.startchatformsettings_path | array('result' => & $Result)); |  |

## How to implement custom notification callback for started or closed chat?
Let say you want to receive a sms message then users request a chat. Or just send chat data to some external service. This is very easy archievable just using extension. For example I suggest to have a look at https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/sevabot

It uses one live helper chat provided events

 * chat.chat_started - https://github.com/LiveHelperChat/livehelperchat-extensions/blob/master/sevabot/bootstrap/bootstrap.php#L14
This event is fired then user starts a chat from chat widget, standard chat window or from read operator message.

Also chat has antoher even which you can use then chat is closed 

 * chat.close - https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhchat/lhchat.php#L1024
This even you can use then chat is closed and you want to pass some information to third party service.

## How to verify a user before starting a chat?

1. You will need LHC since 2.04 version
2. Also this extension https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/verifyuser
3. Now just download this extension and put it in extension folder, so it should look like `extension/verifyuser/...`
4. Activate this extension in settings.ini.php file `'extensions' => array('verifyuser')`
5. Now you can just edit verifyuser/bootstrap/bootstrap.php file there will be defined callback which get's all the chat data. https://github.com/LiveHelperChat/livehelperchat-extensions/blob/master/verifyuser/bootstrap/bootstrap.php#L21

Also instead of pure DB check you can use curl or whatever you want.