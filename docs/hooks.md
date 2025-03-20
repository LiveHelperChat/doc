---
id: hooks
title: Hooks
---

You can listen to these events using [listener](https://github.com/LiveHelperChat/lhchatevents). See [bootstrap.php](https://github.com/LiveHelperChat/lhchatevents/blob/master/lhchatevents/bootstrap/bootstrap.php#L18) file 

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


## Form Module

### form.file.download
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhform/download.php  
**Line:** 17  
**Purpose:** Triggered when a file is downloaded from a form.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.file.download', array('filename' => $file->content_array[$attr_name]['filename']));
```

### form.embedcode
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhform/embedcode.php  
**Line:** 3  
**Purpose:** Triggered when form embed code is generated.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.embedcode', array());
```

### form.file.download
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhform/downloaditem.php  
**Line:** 91  
**Purpose:** Triggered when a file is downloaded from a form item.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.file.download', array('filename' => $content['filename']));
```

### form.index
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhform/index.php  
**Line:** 3  
**Purpose:** Triggered when form index page is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.index', array());
```

## Questionary Module

### questionaire.before_option_chosen
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/votingwidget.php  
**Line:** 124  
**Purpose:** Triggered before a question option is chosen.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionaire.before_option_chosen', array('voting' => & $votingAnswer, 'errors' => & $Errors));
```

### questionaire.option_chosen
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/votingwidget.php  
**Line:** 129  
**Purpose:** Triggered after a question option is chosen.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionaire.option_chosen', array('voting' => & $votingAnswer));
```

### questionaire.before_feedback_left
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/votingwidget.php  
**Line:** 177  
**Purpose:** Triggered before feedback is left.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionaire.before_feedback_left', array('feedback' => & $answer, 'errors' => & $Errors));
```

### questionaire.feedback_left
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/votingwidget.php  
**Line:** 182  
**Purpose:** Triggered after feedback is left.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionaire.feedback_left', array('feedback' => & $answer));
```

### questionary.list
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/list.php  
**Line:** 5  
**Purpose:** Triggered when questionary list is rendered.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionary.list', array('tpl' => & $tpl));
```

### questionary.edit
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/edit.php  
**Line:** 5  
**Purpose:** Triggered when questionary edit page is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionary.edit', array('questionary' => $Question));
```

### questionary.new
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhquestionary/newquestion.php  
**Line:** 5  
**Purpose:** Triggered when a new questionary is created.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('questionary.new', array('questionary' => $Data));
```

## File Module

### file.storescreenshot.before_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 41  
**Purpose:** Triggered before a screenshot is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.storescreenshot.before_store', array('errors' => & $errors, 'chat' => & $chat, 'data' => $_POST['data']));
```

### chat.sync_back_office
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 49  
**Purpose:** Triggered to sync back office after screenshot.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.sync_back_office');
```

### file.storescreenshot.screenshot_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 71  
**Purpose:** Triggered to determine screenshot path.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.storescreenshot.screenshot_path', array('path' => & $path, 'storage_id' => $storageID));
```

### file.storescreenshot.store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 114  
**Purpose:** Triggered when a screenshot is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.storescreenshot.store', array('chat_file' => & $fileUpload));
```

### chat.messages_added_passive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 138  
**Purpose:** Triggered after screenshot is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.messages_added_passive', array(
```

### chat.screenshot_ready
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/storescreenshot.php  
**Line:** 144  
**Purpose:** Triggered when a screenshot is ready.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.screenshot_ready', array(
```

### file.before_file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/new.php  
**Line:** 14  
**Purpose:** Triggered before a new file is stored (admin).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.before_file_new_admin.file_store', array('errors' => & $errors));
```

### file.new.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/new.php  
**Line:** 23  
**Purpose:** Triggered to determine new file path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.new.file_path', array('path' => & $path));
```

### file.file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/new.php  
**Line:** 28  
**Purpose:** Triggered when a new file is stored (admin).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.file_new_admin.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### file.new_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/new.php  
**Line:** 56  
**Purpose:** Triggered to determine new file path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.new_path', array('result' => & $Result));
```

### file.uploadfileadmin.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileadminonlineuser.php  
**Line:** 14  
**Purpose:** Triggered to determine file path for admin uploaded file (online user).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfileadmin.file_path',array('path' => & $path, 'storage_id' => $onlineUser->id));
```

### file.uploadfileadmin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileadminonlineuser.php  
**Line:** 28  
**Purpose:** Triggered when an admin uploads a file (online user).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfileadmin.file_store', array('chat_file' => $ upload_handler->uploadedFile));
```

### file.download
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/downloadfile.php  
**Line:** 79  
**Purpose:** Triggered when a file is downloaded.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.download', array('chat_file' => $file));
```

### file.uploadfile.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileonline.php  
**Line:** 11  
**Purpose:** Triggered to determine file path for online user uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_path', array(
```

### file.uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileonline.php  
**Line:** 45  
**Purpose:** Triggered when an online user uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_store', array(
```

### file.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/list.php  
**Line:** 45  
**Purpose:** Triggered to determine file list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.list_path', array('result' => & $Result));
```

### file.edit_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/edit.php  
**Line:** 44  
**Purpose:** Triggered to determine file edit path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.edit_path', array('result' => & $Result));
```

### file.before_user_uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfile.php  
**Line:** 49  
**Purpose:** Triggered before a user uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.before_user_uploadfile.file_store', array('errors' => & $errors));
```

### file.uploadfile.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfile.php  
**Line:** 56  
**Purpose:** Triggered to determine file path for user uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_path', array('path' => & $path, 'storage_id' => $chat->id));
```

### file.uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfile.php  
**Line:** 86  
**Purpose:** Triggered when a user uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_store', array('chat'=> $chat, 'chat_file' => $upload_handler->uploadedFile));
```

### file.uploadfile.after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfile.php  
**Line:** 122  
**Purpose:** Triggered after a user uploaded file is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.after_save', array('chat'=> $chat, 'chat_file' => $upload_handler->uploadedFile));
```

### file.configuration_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/configuration.php  
**Line:** 217  
**Purpose:** Triggered to determine file configuration path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.configuration_path', array('result' => & $Result));
```

### file.before_admin_uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileadmin.php  
**Line:** 8  
**Purpose:** Triggered before an admin uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.before_admin_uploadfile.file_store', array('errors' => & $errors));
```

### file.uploadfileadmin.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileadmin.php  
**Line:** 18  
**Purpose:** Triggered to determine file path for admin uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfileadmin.file_path', array('path' => & $path, 'storage_id' => $chat->id));
```

### file.uploadfileadmin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfile/uploadfileadmin.php  
**Line:** 33  
**Purpose:** Triggered when an admin uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfileadmin.file_store', array('chat'=> $chat, 'chat_file' => $upload_handler->uploadedFile));
```

## Mailing Module

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailing/import.php  
**Line:** 39  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath', array('dir' => & $dir));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailing/importcampaign.php  
**Line:** 36  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath', array('dir' => & $dir));
```

## Browse Offer Module

### browseoffer.index
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhbrowseoffer/index.php  
**Line:** 3  
**Purpose:** Triggered when browse offer index page is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('browseoffer.index', array());
```

### browseoffer.htmlcode
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhbrowseoffer/htmlcode.php  
**Line:** 3  
**Purpose:** Triggered when browse offer HTML code is generated.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('browseoffer.htmlcode', array());
```

## Department Module

### department.edit_department_group
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhdepartment/editgroup.php  
**Line:** 58  
**Purpose:** Triggered when a department group is edited.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('department.edit_department_group',array('department_group' => & $Departament_group));
```

### department.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhdepartment/new.php  
**Line:** 37  
**Purpose:** Triggered when a department is modified (new).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('department.modified',array('department' => $Departament));
```

### department.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhdepartment/edit.php  
**Line:** 111  
**Purpose:** Triggered when a department is modified (edit).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('department.modified',array('department' => $Departament));
```

## Group Chat Module

### group_chat.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/list.php  
**Line:** 38  
**Purpose:** Triggered to determine group chat list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.list_path',array('result' => & $Result));
```

### group_chat.remove_group_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/leave.php  
**Line:** 27  
**Purpose:** Triggered when a group chat is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.remove_group_chat', array('chat' => & $item));
```

### group_chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/addmessage.php  
**Line:** 74  
**Purpose:** Triggered when a web message is added by admin in a group chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.web_add_msg_admin', array('msg' => & $msg,'chat' => & $groupChat));
```

### group_chat.new_group_chat_room
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/startchatwithoperator.php  
**Line:** 67  
**Purpose:** Triggered when a new group chat room is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.new_group_chat_room', array('chat' => & $groupChat));
```

### group_chat.new_group_chat_member
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/startchatwithoperator.php  
**Line:** 77  
**Purpose:** Triggered when a new group chat member is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.new_group_chat_member', array('member' => & $newMember));
```

### group_chat.new_group_chat_member
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/startchatwithoperator.php  
**Line:** 86  
**Purpose:** Triggered when a new group chat member is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.new_group_chat_member', array('member' => & $newMember));
```

### group_chat.new_group_chat_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgroupchat/startchatwithoperator.php  
**Line:** 95  
**Purpose:** Triggered when a new group chat message is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.new_group_chat_message', array('member' => & $newMember));
```

## Mail Conversation Module

### mailconv.new_mail_from_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/sendemail.php  
**Line:** 31  
**Purpose:** Triggered when a new mail is sent from chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.new_mail_from_chat', array(
```

### mailconv.new_mail_from_vars
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/sendemail.php  
**Line:** 40  
**Purpose:** Triggered when a new mail is sent from variables.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.new_mail_from_vars', array(
```

### mailconv.before_send
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/sendemail.php  
**Line:** 65  
**Purpose:** Triggered before mail is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.before_send', array(
```

### mailconv.editor_options
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/loadmainconv.php  
**Line:** 224  
**Purpose:** Triggered to modify mail conversation editor options.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.editor_options',array('options' => & $editorOptions));
```

### mail.subject_add
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/apilabelmessage.php  
**Line:** 35  
**Purpose:** Triggered when a subject is added to a mail.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.subject_add',array('user_id' => $currentUser->getUserID(), 'message' => & $message, 'init' => 'op', 'subject_id' => $Params['user_parameters_unordered']['subject']));
```

### mail.subject_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/apilabelmessage.php  
**Line:** 46  
**Purpose:** Triggered when a subject is removed from a mail.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.subject_remove',array('user_id' => $currentUser->getUserID(), 'message' => & $message, 'init' => 'op', 'subject_id' => $Params['user_parameters_unordered']['subject']));
```

### file.new.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/uploadfile.php  
**Line:** 14  
**Purpose:** Triggered to determine new file path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.new.file_path', array('path' => & $path));
```

### file.file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/uploadfile.php  
**Line:** 19  
**Purpose:** Triggered when a new file is stored (admin).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.file_new_admin.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### mailconv.list_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/conversations.php  
**Line:** 82  
**Purpose:** Triggered to filter mail conversation list.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.list_filter',array('filter' => & $filterParams, 'uparams' => $Params['user_parameters_unordered']));
```

### mailconv.replace_variables
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/searchtemplate.php  
**Line:** 73  
**Purpose:** Triggered to replace mail conversation variables.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailconv.replace_variables', array(
```

### file.new.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/uploadimage.php  
**Line:** 14  
**Purpose:** Triggered to determine new file path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.new.file_path', array('path' => & $path));
```

### file.file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/uploadimage.php  
**Line:** 19  
**Purpose:** Triggered when a new file is stored (admin).

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.file_new_admin.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### chat.related_actions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/relatedtickets.php  
**Line:** 25  
**Purpose:** Triggered to perform related actions for mail conversation.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.related_actions', array('chat' => $chat, 'filter' => & $filter));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/importtemplate.php  
**Line:** 17  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath', array('dir' => & $dir));
```

### chat.before_save_remarks
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailconv/saveremarks.php  
**Line:** 22  
**Purpose:** Triggered before mail conversation remarks are saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_save_remarks', array('chat' => & $Chat, 'errors' => & $errors));
```

## Chat Module

### chat.online_users_get_list
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/onlineusers.php  
**Line:** 219  
**Purpose:** Triggered to get online users list.

```php
$statusDispatch = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.online_users_get_list', array('filter' => $filter, 'attr_filter' => $filterAttributeEvent));
```

### chat.onlineusers_attr
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/onlineusers.php  
**Line:** 256  
**Purpose:** Triggered to modify online users attributes.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.onlineusers_attr',array('attr' => & $attributes,'attr_remove' => & $attributes_remove));
```

### chat.onlineusers_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/onlineusers.php  
**Line:** 285  
**Purpose:** Triggered to determine online users path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.onlineusers_path',array('result' => & $Result));
```

### chat.chatcheckoperatormessage
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatcheckoperatormessage.php  
**Line:** 32  
**Purpose:** Triggered to check operator message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatcheckoperatormessage', array('proactive_active' => & $proactiveInviteActive));
```

### chat.extendcookie
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/extendcookie.php  
**Line:** 13  
**Purpose:** Triggered when chat cookie is extended.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.extendcookie', array('vid' => (string)$Params['user_parameters']['vid']));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/changestatus.php  
**Line:** 40  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $chat, 'user' => $currentUser));
```

### chat.searchprovider
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/searchprovider.php  
**Line:** 173  
**Purpose:** Triggered to search for a chat provider.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.searchprovider', array('offset' => $offset, 'search' => $search, 'scope' => $Params['user_parameters']['scope']));
```

### chat.syncadmininterface.pendingchats
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncadmininterface.php  
**Line:** 668  
**Purpose:** Triggered to sync admin interface pending chats.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncadmininterface.pendingchats',array('additional_filter' => & $additionalFilter));
```

### chat.syncadmininterface
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncadmininterface.php  
**Line:** 1066  
**Purpose:** Triggered to sync admin interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncadmininterface',array('main_attr' => & $mainSyncAttributes, 'lists' => & $ReturnMessages, 'v' => & $version));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/refreshcustomfields.php  
**Line:** 48  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat', array(
```

### chat.auto_preload
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/loadmaindata.php  
**Line:** 69  
**Purpose:** Triggered during chat auto preload.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_preload',array('chat' => $chat, 'load_previous' => & $loadPrevious));
```

### chat.loadmainchatdata
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/loadmaindata.php  
**Line:** 146  
**Purpose:** Triggered when main chat data is loaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.loadmainchatdata',array(
```

### chat.msg_removed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/deletemsg.php  
**Line:** 30  
**Purpose:** Triggered after a message is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.msg_removed', array('msg' => $removeMessage, 'chat' => $chat));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsguser.php  
**Line:** 29  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsguser.php  
**Line:** 52  
**Purpose:** Triggered before a user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved',array('msg' => & $msg,'chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsguser.php  
**Line:** 94  
**Purpose:** Triggered when a chat is unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### chat.addmsguser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsguser.php  
**Line:** 100  
**Purpose:** Triggered when a user adds a message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.addmsguser',array('chat' => & $chat, 'msg' => & $msg));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsguser.php  
**Line:** 126  
**Purpose:** Triggered when auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered',array('chat' => & $chat));
```

### chat.dashboardwidgets
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/dashboardwidgets.php  
**Line:** 68  
**Purpose:** Triggered to populate dashboard widgets.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.dashboardwidgets',array('supported_widgets' => & $supportedWidgets));
```

### chat.abstract_click
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/abstractclick.php  
**Line:** 22  
**Purpose:** Triggered on abstract click.

```php
$workflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.abstract_click', array('payload' => $Params['user_parameters']['payload'], 'msg' => & $msg, 'chat' => & $chat));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendmassmessage.php  
**Line:** 10  
**Purpose:** Triggered to get theme temporary path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### chat.sendnotice
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendmassmessage.php  
**Line:** 142  
**Purpose:** Triggered when a notice is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.sendnotice', array('errors' => & $Errors));
```

### onlineuser.proactive_send_invitation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendmassmessage.php  
**Line:** 265  
**Purpose:** Triggered when proactive invitation is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.proactive_send_invitation', array('ou' => & $visitor));
```

### file.before_screenshot_addoperacion
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addoperation.php  
**Line:** 24  
**Purpose:** Triggered before screenshot add operation.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.before_screenshot_addoperacion',array('chat' => & $Chat, 'errors' => & $errors));
```

### cobrowse.before_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addoperation.php  
**Line:** 27  
**Purpose:** Triggered before cobrowse is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('cobrowse.before_started',array('chat' => & $Chat, 'errors' => & $errors));
```

### chat.added_operation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addoperation.php  
**Line:** 44  
**Purpose:** Triggered when operation is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.added_operation',array('chat' => & $Chat));
```

### chat.getstatus_old
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/getstatus.php  
**Line:** 90  
**Purpose:** Triggered to get chat status old.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.getstatus_old',array(
```

### chat.getstatus
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/getstatus.php  
**Line:** 132  
**Purpose:** Triggered to get chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.getstatus',array('tpl' => & $tpl, 'theme' => $theme, 'validUnits' => $validUnits));
```

### chat.added_operation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addonlineoperation.php  
**Line:** 47  
**Purpose:** Triggered when online operation is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.added_operation',array('chat' => & $chat));
```

### chat.before_msg_user_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatemsguser.php  
**Line:** 34  
**Purpose:** Triggered before user message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_update',array('msg' => & $msg,'chat' => & $chat));
```

### chat.newcannedmsg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/newcannedmsg.php  
**Line:** 3  
**Purpose:** Triggered when new canned message is created.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.newcannedmsg', array());
```

### chat.before_newcannedmsg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/newcannedmsg.php  
**Line:** 27  
**Purpose:** Triggered before new canned message is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_newcannedmsg', array('departments' => $userDepartments, 'scope' => 'global', 'errors' => & $Errors, 'msg' => & $CannedMessage));
```

### chat.newcannedmsg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/newcannedmsg.php  
**Line:** 42  
**Purpose:** Triggered when new canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.newcannedmsg_saved', array('msg' => & $CannedMessage));
```

### chat.newcannedmsg_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/newcannedmsg.php  
**Line:** 64  
**Purpose:** Triggered to get new canned message path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.newcannedmsg_path',array('result' => & $Result));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/accepttransfer.php  
**Line:** 78  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/accepttransfer.php  
**Line:** 107  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.chat_transfer_accepted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/accepttransfer.php  
**Line:** 173  
**Purpose:** Triggered when chat transfer is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfer_accepted',array('chat' => & $chat));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/delete.php  
**Line:** 13  
**Purpose:** Triggered when chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete', array('chat' => & $chat, 'user' => $currentUser));
```

### chat.subject_add
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/subject.php  
**Line:** 30  
**Purpose:** Triggered when subject is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.subject_add',array('user_id' => $currentUser->getUserID(), 'chat' => & $chat, 'init' => 'op', 'subject_id' => $Params['user_parameters_unordered']['subject']));
```

### chat.canned_msg_before_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsgedit.php  
**Line:** 45  
**Purpose:** Triggered before a canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_before_save',array('departments' => $userDepartments, 'errors' => & $Errors, 'msg' => & $Msg, 'scope' => 'global'));
```

### chat.canned_msg_after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsgedit.php  
**Line:** 51  
**Purpose:** Triggered after a canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_after_save',array('msg' => & $Msg));
```

### chat.cannedmsgedit_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsgedit.php  
**Line:** 87  
**Purpose:** Triggered to determine canned message edit path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsgedit_path',array('result' => & $Result));
```

### chat.blockedusers
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/blockedusers.php  
**Line:** 3  
**Purpose:** Triggered when blocked users page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.blockedusers', array());
```

### chat.blockedusres_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/blockedusers.php  
**Line:** 169  
**Purpose:** Triggered to determine blocked users path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.blockedusres_path',array('result' => & $Result));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/list.php  
**Line:** 25  
**Purpose:** Triggered when a chat is deleted from list.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete', array('chat' => & $chatToDelete, 'user' => $currentUser));
```

### chat.list_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/list.php  
**Line:** 92  
**Purpose:** Triggered to filter chat list.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_filter',array('filter' => & $filterParams, 'uparams' => $Params['user_parameters_unordered']));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/list.php  
**Line:** 166  
**Purpose:** Triggered when a chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete', array('chat' => & $item, 'user' => $currentUser));
```

### chat.list_items
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/list.php  
**Line:** 243  
**Purpose:** Triggered to modify chat list items.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_items',array('filter' => & $items, 'uparams' => $Params['user_parameters_unordered']));
```

### chat.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/list.php  
**Line:** 283  
**Purpose:** Triggered to determine chat list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_path',array('result' => & $Result));
```

### chat.chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chat.php  
**Line:** 87  
**Purpose:** Triggered when chat page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat',array('result' => & $Result, 'tpl' => & $tpl, 'params' => & $Params, 'chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/userclosechat.php  
**Line:** 78  
**Purpose:** Triggered when chat is unread by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### chat.explicitly_closed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/userclosechat.php  
**Line:** 87  
**Purpose:** Triggered when chat is explicitly closed by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.explicitly_closed',array('chat' => & $chat));
```

### chat.geoconfiguration
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/geoconfiguration.php  
**Line:** 3  
**Purpose:** Triggered when geo configuration page is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.geoconfiguration', array());
```

### chat.startchat_data_fields
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 158  
**Purpose:** Triggered to modify start chat form data fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.startchat_data_fields',array('data_fields' => & $startDataFields, 'params' => $Params));
```

### chat.before_chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 321  
**Purpose:** Triggered before chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_started',array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true)));
```

### chat.chat_offline_request_presend
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 346  
**Purpose:** Triggered before offline request is send.

```php
$attributePresend = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_presend',array(
```

### chat.chat_offline_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 359  
**Purpose:** Triggered when chat offline request is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request',array(
```

### chat.chat_offline_request_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 375  
**Purpose:** Triggered after chat offline request is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_saved', array(
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 468  
**Purpose:** Triggered before auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered', array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.before_auto_responder_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 480  
**Purpose:** Triggered before auto responder message is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_message', array('chat' => & $chat, 'responder' => & $responder));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 510  
**Purpose:** Triggered when auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 540  
**Purpose:** Triggered when chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started',array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.startchat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchat.php  
**Line:** 716  
**Purpose:** Triggered to modify start chat form.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.startchat',array('result' => & $Result,'tpl' => & $tpl, 'params' => & $Params, 'inputData' => & $inputData));
```

### chat.update_chat_vars
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatejsvars.php  
**Line:** 53  
**Purpose:** Triggered to update chat variables.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.update_chat_vars', array(
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatejsvars.php  
**Line:** 67  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat', array(
```

### chat.before_msg_admin_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatemsg.php  
**Line:** 61  
**Purpose:** Triggered before admin message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_update',array('msg' => & $msg,'chat' => & $Chat));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatemsg.php  
**Line:** 100  
**Purpose:** Triggered after a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msg, 'chat' => & $Chat));
```

### chat.message_updated_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updatemsg.php  
**Line:** 103  
**Purpose:** Triggered after a message is updated by admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated_admin', array('user' => $currentUser->getUserData(true),'msg' => & $msg, 'chat' => & $Chat));
```

### chat.before_edit_previous_admin_returned
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/editprevious.php  
**Line:** 41  
**Purpose:** Triggered before edit previous admin returned.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_edit_previous_admin_returned', array('response' => & $array));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/updateattribute.php  
**Line:** 48  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat', array(
```

### chat.online_users_get_list
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/jsononlineusers.php  
**Line:** 44  
**Purpose:** Triggered to get online users list.

```php
$statusDispatch = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.online_users_get_list', array('filter' => $filter));
```

### chat.before_quote_admin_returned
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/quotemessage.php  
**Line:** 64  
**Purpose:** Triggered before quote admin returned.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_quote_admin_returned',array('response' => & $array));
```

### chat.before_downloadtxt
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/downloadtxt.php  
**Line:** 13  
**Purpose:** Triggered before chat transcript is downloaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_downloadtxt',array('chat' => & $chat, 'errors' => & $errors));
```

### chat.syncadmin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncadmin.php  
**Line:** 114  
**Purpose:** Triggered to sync admin interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncadmin',array('response' => & $response, 'messages' => $Messages, 'chat' => $Chat));
```

### chat.listchatconfig_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/listchatconfig.php  
**Line:** 52  
**Purpose:** Triggered to determine chat config list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.listchatconfig_path',array('result' => & $Result));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncuser.php  
**Line:** 48  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.syncuser.operator_typing
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncuser.php  
**Line:** 109  
**Purpose:** Triggered when operator is typing.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncuser.operator_typing',array('chat' => & $chat));
```

### chat.before_chat_closed_tpl
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncuser.php  
**Line:** 150  
**Purpose:** Triggered before chat closed template is rendered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_closed_tpl',array('chat' => & $chat, 'tpl' => & $tpl));
```

### chat.syncuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncuser.php  
**Line:** 218  
**Purpose:** Triggered to sync user interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncuser',array('chat' => & $chat, 'response' => & $responseArray));
```

### chat.before_chat_closed_tpl
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/syncuser.php  
**Line:** 253  
**Purpose:** Triggered before chat closed template is rendered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_closed_tpl',array('chat' => & $chat, 'tpl' => & $tpl));
```

### chat.before_print
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/printchat.php  
**Line:** 13  
**Purpose:** Triggered before chat is printed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_print',array('chat' => & $chat, 'errors' => & $errors));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transfertohuman.php  
**Line:** 13  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.genericbot_chat_command_transfer
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transfertohuman.php  
**Line:** 40  
**Purpose:** Triggered to handle generic bot chat command transfer.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_transfer', array(
```

### chat.before_save_reaction
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/reaction.php  
**Line:** 30  
**Purpose:** Triggered before reaction is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_save_reaction',array('chat' => & $chat, 'errors' => & $errors));
```

### chat.before_print
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readchatmail.php  
**Line:** 15  
**Purpose:** Triggered before chat e-mail is printed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_print',array('chat' => & $chat, 'errors' => & $errors));
```

### chat.before_send
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendchat.php  
**Line:** 40  
**Purpose:** Triggered before chat is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_send',array('chat' => & $chat, 'errors' => & $Errors));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/modifychat.php  
**Line:** 33  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $currentUser->getUserID()));
```

### chat.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/modifychat.php  
**Line:** 51  
**Purpose:** Triggered when chat is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat, 'params' => $Params));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/modifychat.php  
**Line:** 85  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $currentUser->getUserID()));
```

### chat.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/modifychat.php  
**Line:** 138  
**Purpose:** Triggered when chat is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat, 'params' => $Params));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/deletechatadmin.php  
**Line:** 18  
**Purpose:** Triggered when chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete',array('chat' => & $chat, 'user' => $currentUser));
```

### chat.checkchatstatus
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/checkchatstatus.php  
**Line:** 168  
**Purpose:** Triggered to check chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.checkchatstatus',array('chat' => & $chat, 'response' => & $responseArray));
```

### chat.geoadjustment
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/geoadjustment.php  
**Line:** 3  
**Purpose:** Triggered when geo adjustment page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.geoadjustment', array());
```

### chat.geoadjustment_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/geoadjustment.php  
**Line:** 104  
**Purpose:** Triggered to determine geo adjustment path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.geoadjustment_path',array('result' => & $Result));
```

### chat.before_startchatwithoperator
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchatwithoperator.php  
**Line:** 56  
**Purpose:** Triggered before chat is started with operator.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_startchatwithoperator',array('errors' => & $Errors));
```

### chat.startchatwithoperator_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/startchatwithoperator.php  
**Line:** 99  
**Purpose:** Triggered when chat is started with operator.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.startchatwithoperator_started',array('chat' => & $chat, 'transfer' => & $transfer));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/usertyping.php  
**Line:** 34  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat', array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### vote.action
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/voteaction.php  
**Line:** 29  
**Purpose:** Triggered on vote action.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('vote.action', array('chat' => & $chat));
```

### chat.getstatusembed_old
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/getstatusembed.php  
**Line:** 74  
**Purpose:** Triggered to get chat status embed old.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.getstatusembed_old',array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsgadmin.php  
**Line:** 52  
**Purpose:** Triggered when a web message is added by admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsgadmin.php  
**Line:** 125  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg,'chat' => & $Chat));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsgadmin.php  
**Line:** 277  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $Chat, 'user' => $currentUser));
```

### chat.accept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsgadmin.php  
**Line:** 279  
**Purpose:** Triggered when chat is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.accept',array('chat' => & $Chat, 'user' => $currentUser));
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/addmsgadmin.php  
**Line:** 319  
**Purpose:** Triggered when a web message is added by admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('msg' => & $msg,'chat' => & $Chat, 'ou' => (isset($onlineuser) ? $onlineuser : null)));
```

### chat.chathistory
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chathistory.php  
**Line:** 11  
**Purpose:** Triggered when chat history is accessed.

```php
$commandResponse = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chathistory', array('chat' => $chat));
```

### chat.chatwidget_data_field
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 183  
**Purpose:** Triggered to modify chat widget form data fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatwidget_data_field',array('data_fields' => & $startDataFields, 'params' => $Params));
```

### chat.before_chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 347  
**Purpose:** Triggered before chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_started', array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true)));
```

### chat.chat_offline_request_presend
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 364  
**Purpose:** Triggered before offline request is send.

```php
$attributePresend = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_presend',array(
```

### chat.chat_offline_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 377  
**Purpose:** Triggered when chat offline request is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request',array(
```

### chat.chat_offline_request_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 393  
**Purpose:** Triggered after chat offline request is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_saved', array(
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 502  
**Purpose:** Triggered before auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered',array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.before_auto_responder_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 514  
**Purpose:** Triggered before auto responder message is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_message',array('chat' => & $chat, 'responder' => & $responder));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 546  
**Purpose:** Triggered when auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 578  
**Purpose:** Triggered when chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started',array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.chatwidget
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidget.php  
**Line:** 783  
**Purpose:** Triggered to modify start chat form.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatwidget',array('result' => & $Result, 'tpl' => & $tpl, 'params' => & $Params, 'inputData' => & $inputData));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetclosed.php  
**Line:** 177  
**Purpose:** Triggered when chat is unread by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat', array('chat' => & $chat));
```

### chat.explicitly_closed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetclosed.php  
**Line:** 186  
**Purpose:** Triggered when chat is explicitly closed by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.explicitly_closed', array('chat' => & $chat, 'msg' => (isset($msg) ? $msg : null)));
```

### chat.visitor_regular_closed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetclosed.php  
**Line:** 188  
**Purpose:** Triggered when chat is closed by visitor.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.visitor_regular_closed', array('chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetclosed.php  
**Line:** 225  
**Purpose:** Triggered when chat is unread by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat', array('chat' => & $chat));
```

### chat.explicitly_closed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetclosed.php  
**Line:** 232  
**Purpose:** Triggered when chat is explicitly closed by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.explicitly_closed', array('chat' => & $chat, 'msg' => (isset($msg) ? $msg : null)));
```

### chat.before_chat_transfered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 19  
**Purpose:** Triggered before chat is transfered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_transfered', array('chat' => & $Chat, 'errors' => & $errors, 'scope' => $transferScope));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 43  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $currentUser->getUserID()));
```

### chat.chat_owner_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 60  
**Purpose:** Triggered when chat owner is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_owner_changed', array('chat' => & $Chat, 'user' => $currentUser->getUserData()));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 86  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $user->id));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 91  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $currentUser->getUserID()));
```

### chat.chat_owner_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 124  
**Purpose:** Triggered when chat owner is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_owner_changed', array('chat' => & $Chat, 'user' => $user));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 198  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $currentUser->getUserID()));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 212  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $userTo->id));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 218  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $currentUser->getUserID()));
```

### chat.chat_transfered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/transferuser.php  
**Line:** 268  
**Purpose:** Triggered when chat is transfered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfered', array('scope' => $transferScope, 'chat' => & $Chat, 'transfer' => $Transfer));
```

### chat.cannedmsg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsg.php  
**Line:** 3  
**Purpose:** Triggered when canned message page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsg', array());
```

### chat.cannedmsg_before_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsg.php  
**Line:** 123  
**Purpose:** Triggered before canned message is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsg_before_remove',array('msg' => & $Msg));
```

### chat.cannedmsg_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/cannedmsg.php  
**Line:** 352  
**Purpose:** Triggered to determine canned message path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsg_path',array('result' => & $Result));
```

### chat.blockuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/blockuser.php  
**Line:** 3  
**Purpose:** Triggered when block user page is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.blockuser', array());
```

### chat.operator_inactivemode_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/loadinitialdata.php  
**Line:** 100  
**Purpose:** Triggered when operator inactive mode is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_inactivemode_changed', array('user' => & $userData, 'reason' => 'page_reload'));
```

### chat.loadinitialdata
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/loadinitialdata.php  
**Line:** 279  
**Purpose:** Triggered when initial data is loaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.loadinitialdata',array('lists' => & $response));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatcheckstatus.php  
**Line:** 68  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat',array('chat_id' => $chatId));
```

### chat.chat_transfer_accepted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/adminchat.php  
**Line:** 68  
**Purpose:** Triggered when chat transfer is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfer_accepted',array('chat' => & $chat));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/adminchat.php  
**Line:** 75  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/adminchat.php  
**Line:** 109  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/adminchat.php  
**Line:** 152  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $chat,'user' => $currentUser));
```

### chat.accept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/adminchat.php  
**Line:** 156  
**Purpose:** Triggered when chat is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.accept',array('chat' => & $chat,'user' => $currentUser));
```

### chat.set_sub_status
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/setsubstatus.php  
**Line:** 16  
**Purpose:** Triggered when chat sub status is set.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.set_sub_status',array('chat' => & $chat));
```

### chat.before_edit_previous_user_returned
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/editprevioususer.php  
**Line:** 18  
**Purpose:** Triggered before edit previous user returned.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_edit_previous_user_returned',array('response' => & $array));
```

### chat.nickchanged
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetchat.php  
**Line:** 125  
**Purpose:** Triggered when chat nick is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.nickchanged', array('chat' => & $chat));
```

### chat.chatwidgetchat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/chatwidgetchat.php  
**Line:** 149  
**Purpose:** Triggered when chat widget chat page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatwidgetchat',array('result' => & $Result , 'tpl' => & $tpl, 'params' => & $Params, 'chat' => & $chat));
```

### chat.related_actions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/relatedactions.php  
**Line:** 22  
**Purpose:** Triggered to perform related actions for chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.related_actions', array('chat' => $chat, 'filter' => & $filter));
```

### chat.readoperatormessage_data_field
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 111  
**Purpose:** Triggered to modify read operator message form data fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.readoperatormessage_data_field',array('data_fields' => & $startDataFields, 'params' => $Params));
```

### chat.validate_department
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 440  
**Purpose:** Triggered to validate department.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_department', array('input_form' => $inputData));
```

### chat.validate_read_operator_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 455  
**Purpose:** Triggered to validate read operator message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_read_operator_message',array('errors' => & $Errors, 'input_form' => & $inputData, 'chat' => & $chat));
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 568  
**Purpose:** Triggered before auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered', array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 593  
**Purpose:** Triggered when auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 618  
**Purpose:** Triggered before auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered', array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 644  
**Purpose:** Triggered when auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 689  
**Purpose:** Triggered when chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started',array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.readoperatormessage
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/readoperatormessage.php  
**Line:** 885  
**Purpose:** Triggered when read operator message page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.readoperatormessage',array('tpl' => $tpl, 'params' => & $Params));
```

### chat.nick_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/editnick.php  
**Line:** 49  
**Purpose:** Triggered when chat nick is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.nick_changed',array('chat' => & $chat));
```

### chat.before_save_remarks
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/saveremarks.php  
**Line:** 24  
**Purpose:** Triggered before chat remarks are saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_save_remarks',array('chat' => & $Chat, 'errors' => & $errors));
```

### chat.user_reopened
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/reopen.php  
**Line:** 79  
**Purpose:** Triggered when chat is reopened by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.user_reopened',array('chat' => & $chat));
```

### chat.maintenance_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/maintenance.php  
**Line:** 37  
**Purpose:** Triggered to determine maintenance path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.maintenance_path',array('result' => & $Result));
```

### chat.sendnotice
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendnotice.php  
**Line:** 103  
**Purpose:** Triggered when a notice is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.sendnotice', array('errors' => & $Errors));
```

### onlineuser.proactive_send_invitation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/sendnotice.php  
**Line:** 236  
**Purpose:** Triggered when proactive invitation is send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.proactive_send_invitation', array('ou' => & $visitor));
```

### chat.holdaction_defaultmsg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/holdaction.php  
**Line:** 97  
**Purpose:** Triggered to get hold action default message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.holdaction_defaultmsg',array('msg' => & $msgText, 'chat' => & $chat));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/holdaction.php  
**Line:** 116  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat));
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchat/holdaction.php  
**Line:** 157  
**Purpose:** Triggered when a web message is added by admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('msg' => & $msg, 'chat' => & $chat, 'ou' => null));
```

## User Module

### user.grouplist_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/grouplist.php  
**Line:** 27  
**Purpose:** Triggered to determine group list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.grouplist_path', array('result' => & $Result));
```

### chat.operator_visibility_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/setinvisible.php  
**Line:** 19  
**Purpose:** Triggered when operator visibility is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_visibility_changed',array('user' => & $userData, 'reason' => 'user_action'));
```

### user.editgroup_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/editgroup.php  
**Line:** 199  
**Purpose:** Triggered to determine edit group path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.editgroup_path',array('result' => & $Result));
```

### user.user_created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/new.php  
**Line:** 98  
**Purpose:** Triggered when user is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.user_created',array('userData' => & $UserData, 'password' => $UserData->password_front));
```

### user.new_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/new.php  
**Line:** 141  
**Purpose:** Triggered to determine new user path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.new_path', array('result' => & $Result));
```

### chat.operator_inactivemode_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/setinactive.php  
**Line:** 53  
**Purpose:** Triggered when operator inactive mode is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_inactivemode_changed',array('user' => & $userData, 'reason' => 'user_action'));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/setoffline.php  
**Line:** 31  
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $userData, 'reason' => 'user_action'));
```

### user.autologinconfig_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/autologinconfig.php  
**Line:** 100  
**Purpose:** Triggered to determine autologin config path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.autologinconfig_path', array('result' => & $Result));
```

### user.deleted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/delete.php  
**Line:** 73  
**Purpose:** Triggered when user is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.deleted',array('userData' => $departament));
```

### user.logout
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/logout.php  
**Line:** 17  
**Purpose:** Triggered when user logs out.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.logout',array('user' => & $lhUser));
```

### user.after_logout
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/logout.php  
**Line:** 21  
**Purpose:** Triggered after user logs out.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.after_logout',array('user' => & $lhUser));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 193  
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $UserData, 'reason' => 'user_action'));
```

### user.after_user_departments_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 268  
**Purpose:** Triggered after user departments are updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.after_user_departments_update', array('user' => & $UserData));
```

### chat.canned_msg_before_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 318  
**Purpose:** Triggered before canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_before_save',array('errors' => & $Errors, 'msg' => & $cannedMessage, 'scope' => 'user'));
```

### chat.canned_msg_after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 350  
**Purpose:** Triggered after canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_after_save',array('msg' => & $cannedMessage));
```

### user.account
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 458  
**Purpose:** Triggered when user account page is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.account', array('userData' => & $UserData, 'tpl' => & $tpl, 'params' => $Params));
```

### user.account_result
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/account.php  
**Line:** 466  
**Purpose:** Triggered to modify user account result.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.account_result', array('result' => & $Result));
```

### chat.operator_always_online_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/setalwaysonline.php  
**Line:** 26  
**Purpose:** Triggered when operator always online status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_always_online_status_changed',array('user' => & $userData, 'reason' => 'user_action'));
```

### user.autologinconfig_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/passwordrequirements.php  
**Line:** 144  
**Purpose:** Triggered to determine autologin config path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.autologinconfig_path', array('result' => & $Result));
```

### user.user_modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/edit.php  
**Line:** 102  
**Purpose:** Triggered when user is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.user_modified',array('userData' => & $UserData, 'password' => $UserData->password_front));
```

### user.edit_user_window
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/edit.php  
**Line:** 273  
**Purpose:** Triggered to modify user edit window.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit_user_window',array('userData' => & $UserData, 'tpl' => & $tpl, 'params' => $Params));
```

### user.edit_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/edit.php  
**Line:** 284  
**Purpose:** Triggered to determine edit user path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit_path',array('result' => & $Result));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/import.php  
**Line:** 29  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### user.2fa_intercept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/updatepassword.php  
**Line:** 61  
**Purpose:** Triggered to intercept 2FA.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.2fa_intercept', array('current_user' => erLhcoreClassUser::instance()));
```

### user.updatepassword
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/updatepassword.php  
**Line:** 86  
**Purpose:** Triggered after user password is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.updatepassword', array('result' => & $Result));
```

### user.userlist_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/userlist.php  
**Line:** 123  
**Purpose:** Triggered to determine user list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.userlist_path',array('result' => & $Result));
```

### user.login_site_access
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/login.php  
**Line:** 123  
**Purpose:** Triggered to modify login site access.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.login_site_access', array('loginSiteAccess' => & $possibleLoginSiteAccess));
```

### user.login_before_authenticate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/login.php  
**Line:** 83  
**Purpose:** Triggered before user is authenticated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.login_before_authenticate', array('errors' => & $beforeLoginAuthenticateErrors, 'tpl' => & $tpl));
```

### user.third_party_login
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/login.php  
**Line:** 150  
**Purpose:** Triggered during third party login.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.third_party_login', array(
```

### user.login_after_success_authenticate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/login.php  
**Line:** 192  
**Purpose:** Triggered after user is successfully authenticated.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.login_after_success_authenticate', array('current_user' => & $currentUser, 'tpl' => & $tpl));
```

### user.2fa_intercept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/login.php  
**Line:** 216  
**Purpose:** Triggered to intercept 2FA during login.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.2fa_intercept', array('remember' => (isset($_POST['rememberMe']) && $_POST['rememberMe'] == 1),'is_external' => $isExternalRequest, 'current_user' => $currentUser));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/setopstatus.php  
**Line:** 40  
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $user, 'reason' => 'user_action'));
```

### user.newgroup_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/newgroup.php  
**Line:** 92  
**Purpose:** Triggered to determine new group path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.newgroup_path', array('result' => & $Result));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhuser/loginasuser.php  
**Line:** 25  
**Purpose:** Triggered when operator status is changed during login as user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed', array('user' => & $user, 'reason' => 'user_action'));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/deletechat.php  
**Line:** 12  
**Purpose:** Triggered when chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete',array('chat' => & $chat,'user' => $currentUser));
```

### chat.desktop_client_deleted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/deletechat.php  
**Line:** 13  
**Purpose:** Triggered when chat is deleted from desktop client.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.desktop_client_deleted',array('chat' => & $chat,'user' => $currentUser));
```

### chat.chat_transfer_accepted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/accepttransfer.php  
**Line:** 44  
**Purpose:** Triggered when chat transfer is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfer_accepted',array('chat' => & $chat));
```

### chat.chat_transfer_accepted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/accepttransferbychat.php  
**Line:** 24  
**Purpose:** Triggered when chat transfer is accepted by chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfer_accepted',array('chat' => & $chat));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/chatdata.php  
**Line:** 71  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $chat,'user' => $currentUser));
```

### chat.accept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/chatdata.php  
**Line:** 75  
**Purpose:** Triggered when chat is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.accept',array('chat' => & $chat,'user' => $currentUser));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/setonlinestatus.php  
**Line:** 26  
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $UserData, 'reason' => 'user_action'));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/addmsgadmin.php  
**Line:** 47  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg, 'chat' => & $Chat));
```

### chat.desktop_client_admin_msg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/addmsgadmin.php  
**Line:** 57  
**Purpose:** Triggered when admin message is send from desktop client.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.desktop_client_admin_msg',array('msg' => & $msg,'chat' => & $Chat));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/transferuser.php  
**Line:** 33  
**Purpose:** Triggered before admin message is saved during transfer.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $userTo->id));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/transferuser.php  
**Line:** 40  
**Purpose:** Triggered before admin message is saved during transfer.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $Chat, 'user_id' => $currentUser->getUserID()));
```

### chat.chat_transfered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/transferuser.php  
**Line:** 52  
**Purpose:** Triggered when chat is transfered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfered', array('chat' => & $Chat, 'transfer' => $Transfer, 'msg' => $msg));
```

### xml.lists
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxml/lists.php  
**Line:** 202  
**Purpose:** Triggered to modify XML lists.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xml.lists', array('list' => & $response));
```

### chat.genericbot_arguments
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/argumenttemplates.php  
**Line:** 7  
**Purpose:** Triggered to modify generic bot arguments.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_arguments', array(
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/botimportgroup.php  
**Line:** 17  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### chat.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/listexceptions.php  
**Line:** 40  
**Purpose:** Triggered to determine chat list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_path',array('result' => & $Result));
```

### chat.genericbot_exceptions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/newtrgroup.php  
**Line:** 13  
**Purpose:** Triggered to modify generic bot exceptions.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_exceptions', array('exceptions' => & $exceptions));
```

### bot.list_commands
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/commands.php  
**Line:** 40  
**Purpose:** Triggered to list bot commands.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('bot.list_commands',array('result' => & $Result));
```

### bot.list_conditions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/conditions.php  
**Line:** 40  
**Purpose:** Triggered to list bot conditions.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('bot.list_conditions',array('result' => & $Result));
```

### chat.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/list.php  
**Line:** 40  
**Purpose:** Triggered to determine chat list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_path',array('result' => & $Result));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/listrestapi.php  
**Line:** 34  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### chat.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/listrestapi.php  
**Line:** 81  
**Purpose:** Triggered to determine chat list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_path',array('result' => & $Result));
```

### chat.genericbot_exceptions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/editexception.php  
**Line:** 26  
**Purpose:** Triggered to modify generic bot exceptions.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_exceptions', array('exceptions' => & $exceptions));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/import.php  
**Line:** 15  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/buttonclicked.php  
**Line:** 21  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.reaction_visitor
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/buttonclicked.php  
**Line:** 95  
**Purpose:** Triggered when visitor reacts to button.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.reaction_visitor', array('chat' => & $chat, 'msg' => & $msg));
```

## GenericBot Module

### chat.reaction_visitor
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/buttonclicked.php  
**Line:** 172  
**Purpose:** Triggered when a visitor reacts to a button click.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.reaction_visitor', array(
```

### chat.genericbot_exceptions
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/newexception.php  
**Line:** 13  
**Purpose:** Triggered when generic bot encounters exceptions.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_exceptions', array('exceptions' => & $exceptions));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhgenericbot/updatebuttonclicked.php  
**Line:** 19  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

## Permission Module

### permission.newrole_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpermission/newrole.php  
**Line:** 66  
**Purpose:** Triggered to determine new role path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('permission.newrole_path', array('result' => & $Result));
```

### lhpermission.getmodulename
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpermission/request.php  
**Line:** 46  
**Purpose:** Triggered to get module name.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('lhpermission.getmodulename',array('module' => $module, 'name' => & $moduleName));
```

### permission.roles_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpermission/roles.php  
**Line:** 12  
**Purpose:** Triggered to determine roles path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('permission.roles_path', array('result' => & $Result));
```

### permission.editrole_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpermission/editrole.php  
**Line:** 228  
**Purpose:** Triggered to determine edit role path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('permission.editrole_path', array('result' => & $Result));
```

### permission.editrole_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpermission/editfunction.php  
**Line:** 53  
**Purpose:** Triggered to determine edit role path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('permission.editrole_path', array('result' => & $Result));
```

## Notifications Module

### notifications.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhnotifications/list.php  
**Line:** 41  
**Purpose:** Triggered to determine notifications list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('notifications.list_path',array('result' => & $Result));
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhnotifications/subscribe.php  
**Line:** 63  
**Purpose:** Triggered before a user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved',array('msg' => & $msg, 'chat' => & $chat));
```

## Speech Module

### chat.cannedmsgedit_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhspeech/editdialect.php  
**Line:** 45  
**Purpose:** Triggered to determine canned message edit path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsgedit_path',array('result' => & $Result));
```

### chat.speech_defaultlanguage_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhspeech/defaultlanguage.php  
**Line:** 55  
**Purpose:** Triggered to determine speech default language path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.speech_defaultlanguage_path',array('result' => & $Result));
```

### chat.cannedmsgedit_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhspeech/editlanguage.php  
**Line:** 45  
**Purpose:** Triggered to determine canned message edit path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsgedit_path',array('result' => & $Result));
```

### speech.before_getchatdialect
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhspeech/getchatdialect.php  
**Line:** 8  
**Purpose:** Triggered before getting chat dialect.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('speech.before_getchatdialect',array('chat' => & $chat, 'errors' => & $errors));
```

### speech.getchatdialect
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhspeech/getchatdialect.php  
**Line:** 15  
**Purpose:** Triggered to get chat dialect.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('speech.getchatdialect',array('chat' => & $chat));
```

## Chatbox Module

### chatbox.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatbox/addmsguser.php  
**Line:** 34  
**Purpose:** Triggered before a user message is saved in chatbox.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.before_msg_user_saved',array('msg' => & $msg,'chat' => & $Chat));
```

### chatbox.new
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatbox/new.php  
**Line:** 5  
**Purpose:** Triggered when a new chatbox is created.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.new', array('chatbox' => $chatbox));
```

### chatbox.list
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatbox/list.php  
**Line:** 3  
**Purpose:** Triggered when chatbox list is rendered.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.list', array());
```

### chatbox.configuration
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatbox/configuration.php  
**Line:** 5  
**Purpose:** Triggered when chatbox configuration is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.configuration', array('tpl' => & $tpl));
```

### chatbox.before_created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatbox/chatwidget.php  
**Line:** 32  
**Purpose:** Triggered before chatbox is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.before_created', array('errors' => & $errors));
```

## Canned Message Module

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcannedmsg/import.php  
**Line:** 23  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath', array('dir' => & $dir));
```

### cannedmsg.filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcannedmsg/filter.php  
**Line:** 68  
**Purpose:** Triggered to filter canned messages.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('cannedmsg.filter',array('q' => $q, 'cannedmessages' => & $cannedMessagesFormated, 'chat' => & $chat));
```

## FAQ Module

### faq.new
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/new.php  
**Line:** 5  
**Purpose:** Triggered when a new FAQ is created.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.new', array('faq' => $faq));
```

### faq.before_created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/new.php  
**Line:** 18  
**Purpose:** Triggered before a FAQ is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.before_created', array('faq' => & $faq, 'errors' => & $Errors));
```

### faq.created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/new.php  
**Line:** 23  
**Purpose:** Triggered after a FAQ is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.created', array('faq' => & $faq));
```

### faq.view
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/view.php  
**Line:** 5  
**Purpose:** Triggered when a FAQ is viewed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.view', array('faq' => $faq));
```

### faq.before_filled_by_user
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/faqwidget.php  
**Line:** 250  
**Purpose:** Triggered before a FAQ is filled by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.before_filled_by_user', array('faq' => & $item_new, 'errors' => & $Errors));
```

### faq.filled_by_user
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/faqwidget.php  
**Line:** 259  
**Purpose:** Triggered after a FAQ is filled by user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.filled_by_user', array('faq' => & $item_new));
```

### faq.list
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfaq/list.php  
**Line:** 5  
**Purpose:** Triggered when FAQ list is rendered.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('faq.list', array('tpl' => & $tpl));
```

## Voice & Video Module

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhvoicevideo/join.php  
**Line:** 14  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhvoicevideo/call.php  
**Line:** 13  
**Purpose:** Triggered to validate chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhvoicevideo/joinop.php  
**Line:** 66  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg, 'chat' => & $chat));
```

## Theme Module

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhtheme/import.php  
**Line:** 15  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhtheme/import.php  
**Line:** 98  
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

## Chat Archive Module

### chat.archive_deleted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatarchive/deletearchivechat.php  
**Line:** 14  
**Purpose:** Triggered when chat archive is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.archive_deleted',array('chat' => & $chat));
```

### chatarchive.archive_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatarchive/archive.php  
**Line:** 11  
**Purpose:** Triggered to determine chat archive path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatarchive.archive_path',array('result' => & $Result));
```

### chatarchive.archive_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatarchive/configuration.php  
**Line:** 75  
**Purpose:** Triggered to determine chat archive path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatarchive.archive_path',array('result' => & $Result));
```

## Mail Archive Module

### mailarchive.archive_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailarchive/archive.php`
**Line:** 11
**Purpose:** Triggered to determine mail archive path.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailarchive.archive_path',array('result' => & $Result));
```

### mailarchive.archive_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhmailarchive/configuration.php`
**Line:** 75
**Purpose:** Triggered to determine mail archive path.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mailarchive.archive_path',array('result' => & $Result));
```

## Survey Module

### chat.set_sub_status
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/choosesurvey.php`
**Line:** 13
**Purpose:** Triggered when chat sub status is set.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.set_sub_status',array('chat' => & $chat));
```

### survey.filled
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/fillinline.php`
**Line:** 40
**Purpose:** Triggered after survey is filled.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('survey.filled', array('chat' => & $chat, 'survey' => $survey, 'survey_item' => & $surveyItem));
```

### survey.filled
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/fill.php`
**Line:** 58
**Purpose:** Triggered after survey is filled.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('survey.filled', array('chat' => & $chat, 'survey' => $survey, 'survey_item' => & $surveyItem));
```

### survey.filled
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/fillwidget.php`
**Line:** 69
**Purpose:** Triggered after survey is filled.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('survey.filled', array('chat' => & $chat, 'survey' => $survey, 'survey_item' => & $surveyItem));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/backtochat.php`
**Line:** 58
**Purpose:** Triggered when chat is unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### survey.back_to_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsurvey/backtochat.php`
**Line:** 75
**Purpose:** Triggered when visitor goes back to chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('survey.back_to_chat',array('chat' => & $chat, 'msg' => & $msg));
```

## System Module

### chat.notice_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsystem/notice.php`
**Line:** 49
**Purpose:** Triggered when chat notice is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.notice_update',array());
```

### user.update_stats
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsystem/usersactions.php`
**Line:** 19
**Purpose:** Triggered when user stats are updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.update_stats',array('user' => $user));
```

### user.userlist_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhsystem/usersactions.php`
**Line:** 48
**Purpose:** Triggered to determine user list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.userlist_path',array('result' => & $Result));
```

## XMP Module

### xmp.configuration
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhxmp/configuration.php`
**Line:** 3
**Purpose:** Triggered when XMP configuration is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xmp.configuration', array());
```

## Co-browse Module

### cobrowse.before_store_node_map
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcobrowse/storenodemap.php`
**Line:** 42
**Purpose:** Triggered before node map is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('cobrowse.before_store_node_map', array('data' => json_decode($_POST['data']), 'errors' => & $errors));
```

### chat.sync_back_office
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcobrowse/storenodemap.php`
**Line:** 61
**Purpose:** Triggered to sync back office.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.sync_back_office');
```

## Statistic Module

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 45
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed', array('user' => & $user, 'reason' => 'user_action'));
```

### chat.statistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 68
**Purpose:** Triggered to perform statistic.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.statistic', array());
```

### statistic.uparams_append
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 71
**Purpose:** Triggered to append user parameters.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.uparams_append',array('uparams' => & $Params['user_parameters_unordered']));
```

### statistic.valid_tabs
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 117
**Purpose:** Triggered to validate statistic tabs.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.valid_tabs', array(
```

### statistic.active_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 223
**Purpose:** Triggered to perform active filter.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.active_filter',array('filter' => & $filterParams, 'uparams' => $Params['user_parameters_unordered']));
```

### statistic.process_active_tab
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 274
**Purpose:** Triggered to process active tab.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.process_active_tab', array(
```

### statistic.chatsstatistic_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 457
**Purpose:** Triggered to perform chats statistic filter.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.chatsstatistic_filter',array('filter' => & $filterParams, 'uparams' => $Params['user_parameters_unordered']));
```

### statistic.process_tab
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 851
**Purpose:** Triggered to process statistic tab.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.process_tab', array(
```

### chat.statistic_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhstatistic/statistic.php`
**Line:** 863
**Purpose:** Triggered to determine chat statistic path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.statistic_path',array('result' => & $Result));
```

## Views Module

### views.editview
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhviews/edit.php`
**Line:** 24
**Purpose:** Triggered when view is edited.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('views.editview', array(
```

### views.export
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhviews/exportview.php`
**Line:** 31
**Purpose:** Triggered when view is exported.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('views.export', array(
```

### views.loadview
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhviews/loadview.php`
**Line:** 131
**Purpose:** Triggered when view is loaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('views.loadview', array(
```

## Front Module

### chat.setting.new_dashboard
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhfront/default.php`
**Line:** 10
**Purpose:** Triggered when new dashboard settings are applied.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.setting.new_dashboard',array('new_dashboard' => & $new_dashboard));
```

## Webhooks Module

### webhooks.event
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwebhooks/dispatch.php`
**Line:** 81
**Purpose:** Triggered when webhook event is dispatched.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch($callParams['event_name'], $args);
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwebhooks/incomingwebhooks.php`
**Line:** 34
**Purpose:** Triggered to determine temporary theme path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### webhooks.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwebhooks/incomingwebhooks.php`
**Line:** 85
**Purpose:** Triggered to determine webhooks list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('webhooks.list_path',array('result' => & $Result));
```

### chat.webhook_incoming
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwebhooks/incoming.php`
**Line:** 48
**Purpose:** Triggered when webhook incoming is processed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.webhook_incoming', array(
```

### webhooks.list_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwebhooks/configuration.php`
**Line:** 40
**Purpose:** Triggered to determine webhooks list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('webhooks.list_path',array('result' => & $Result));
```

## Abstract Module

### abstract.new_identifier_general
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/new.php`
**Line:** 3
**Purpose:** Triggered when new abstract record is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.new_'.strtolower($Params['user_parameters']['identifier']).'_general', array());
```

### abstract.before_created_objectclass
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/new.php`
**Line:** 36
**Purpose:** Triggered before abstract record is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.before_created.'.strtolower($objectClass),array('object' => & $objectData, 'errors' => & $Errors));
```

### abstract.created_objectclass
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/new.php`
**Line:** 51
**Purpose:** Triggered after abstract record is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.created.'.strtolower($objectClass),array('object' => & $objectData));
```

### abstract.new_identifier_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/new.php`
**Line:** 119
**Purpose:** Triggered to determine new abstract record path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.new_'.strtolower($Params['user_parameters']['identifier']).'_path', array('result' => & $Result));
```

### abstract.delete_identifier_general
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/delete.php`
**Line:** 3
**Purpose:** Triggered when abstract record is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.delete_'.strtolower($Params['user_parameters']['identifier']).'_general', array());
```

### abstract.list_identifier_general
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/list.php`
**Line:** 3
**Purpose:** Triggered when abstract record list is rendered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.list_'.strtolower($Params['user_parameters']['identifier']).'_general', array());
```

### abstract.list_identifier_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/list.php`
**Line:** 146
**Purpose:** Triggered to determine abstract record list path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.list_'.strtolower($Params['user_parameters']['identifier']).'_path', array('result' => & $Result));
```

### abstract.edit_identifier_general
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/edit.php`
**Line:** 3
**Purpose:** Triggered when abstract record is edited.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.edit_'.strtolower($Params['user_parameters']['identifier']).'_general', array());
```

## Abstract Module

### abstract.edit_\*_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhabstract/edit.php  
**Line:** 128  
**Purpose:** Triggered when an abstract record is edited. The \* is replaced with the identifier of the abstract record.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.edit_'.strtolower($Params['user_parameters']['identifier']).'_path', array('result' => & $Result));
```

## Paid Chat Module

### paidchat.expired_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpaidchat/invalidhash.php  
**Line:** 11  
**Purpose:** Triggered when a paid chat has expired.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('paidchat.expired_path',array('result' => & $Result));
```

### paidchat.settings_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpaidchat/settings.php  
**Line:** 61  
**Purpose:** Triggered when paid chat settings are accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('paidchat.settings_path',array('result' => & $Result));
```

### paidchat.removedpaidchat_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhpaidchat/removedpaidchat.php  
**Line:** 11  
**Purpose:** Triggered when a paid chat is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('paidchat.removedpaidchat_path',array('result' => & $Result));
```

## Cron Module

### chat.workflow.started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcron/workflow.php  
**Line:** 10  
**Purpose:** Triggered when the chat workflow process is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.started',array());
```

### chat.pending_process_workflow
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcron/workflow.php  
**Line:** 33, 67  
**Purpose:** Triggered when a pending chat is processed by the workflow.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.pending_process_workflow',array('chat' => & $chat));
```

### chat.workflow
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcron/workflow.php  
**Line:** 155  
**Purpose:** Triggered during the chat workflow process.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow',array());
```

### chat.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcron/encrypt.php  
**Line:** 41  
**Purpose:** Triggered when a chat is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat));
```

### chat.check_archive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhcron/util/check_archives.php  
**Line:** 15  
**Purpose:** Triggered when checking chat archives.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.check_archive', array('archive' => $archiveRange));
```

## Translation Module

### translate.before_messagetranslated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhtranslation/starttranslation.php  
**Line:** 13  
**Purpose:** Triggered before a message is translated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.before_messagetranslated', array('chat' => & $chat, 'errors' => & $errors));
```

## Rest API Module

### chat.trans_lhcbo
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/trans/lhcbo.php  
**Line:** 190  
**Purpose:** Triggered during chat translation in the back office.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.trans_lhcbo', array(
```

### chat.chatcheckoperatormessage
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/chatcheckoperatormessage.php  
**Line:** 50  
**Purpose:** Triggered when checking operator messages in a chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatcheckoperatormessage', array('proactive_active' => & $proactiveInviteActive));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsguser.php  
**Line:** 30  
**Purpose:** Triggered when validating the chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsguser.php  
**Line:** 50  
**Purpose:** Triggered before a user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved',array('msg' => & $msg,'chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsguser.php  
**Line:** 86  
**Purpose:** Triggered when a chat is marked as unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### chat.addmsguser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsguser.php  
**Line:** 92  
**Purpose:** Triggered when a user message is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.addmsguser',array('chat' => & $chat, 'msg' => & $msg, 'init' => 'restapi'));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/setchatstatus.php  
**Line:** 43  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $chat, 'user_data' => $userData));
```

### user.user_created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/user.php  
**Line:** 98  
**Purpose:** Triggered when a user is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.user_created', array('userData' => & $user, 'password' => $user->password_front));
```

### department.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/department.php  
**Line:** 104  
**Purpose:** Triggered when a department is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('department.modified',array('department' => $dep, 'payload_data' => $requestBody));
```

### file.before_admin_uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/file.php  
**Line:** 13  
**Purpose:** Triggered before an admin uploads a file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.before_admin_uploadfile.file_store', array('errors' => & $errors));
```

### file.new.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/file.php  
**Line:** 22  
**Purpose:** Triggered when a new file path is generated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.new.file_path', array('path' => & $path));
```

### file.file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/file.php  
**Line:** 27  
**Purpose:** Triggered when a new admin file is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.file_new_admin.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### file.download
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/file.php  
**Line:** 82  
**Purpose:** Triggered when a file is downloaded.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.download', array('chat_file' => $file));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/setoperatorstatus.php  
**Line:** 47  
**Purpose:** Triggered when an operator's status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $userData, 'reason' => 'rest_api'));
```

### api.fetchchat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/chat.php  
**Line:** 97  
**Purpose:** Triggered when fetching a chat via API.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('api.fetchchat', array('chat' => & $chat));
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/startchat.php  
**Line:** 176  
**Purpose:** Triggered before an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered', array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.before_auto_responder_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/startchat.php  
**Line:** 188  
**Purpose:** Triggered before an auto-responder message is sent.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_message', array('chat' => & $chat, 'responder' => & $responder));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/startchat.php  
**Line:** 205  
**Purpose:** Triggered when an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/startchat.php  
**Line:** 227  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started',array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.syncuser.operator_typing
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/fetchchatmessages.php  
**Line:** 80  
**Purpose:** Triggered when an operator is typing.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncuser.operator_typing',array('chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/closechatasvisitor.php  
**Line:** 66  
**Purpose:** Triggered when chat is unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### chat.operator_status_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/setonlinestatus.php  
**Line:** 32  
**Purpose:** Triggered when operator status is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $user, 'reason' => 'restapi_action'));
```

### restapi.swagger
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/swagger.php  
**Line:** 29  
**Purpose:** Triggered when swagger is generated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('restapi.swagger', array(
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsgadmin.php  
**Line:** 164  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg,'chat' => & $Chat));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsgadmin.php  
**Line:** 242  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed',array('chat' => & $Chat, 'user_data' => $userData));
```

### chat.accept
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsgadmin.php  
**Line:** 244  
**Purpose:** Triggered when chat is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.accept',array('chat' => & $Chat, 'user_data' => $userData));
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/addmsgadmin.php  
**Line:** 279  
**Purpose:** Triggered when web admin message is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('msg' => & $msg,'chat' => & $Chat));
```

### chat.operator_visibility_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/setinvisibilitystatus.php  
**Line:** 45  
**Purpose:** Triggered when operator visibility is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_visibility_changed',array('user' => & $userData, 'reason' => 'rest_api'));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhrestapi/updatechatattributes.php  
**Line:** 32  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat', array(
```

## Widget Rest API Module

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/addmsguser.php  
**Line:** 64  
**Purpose:** Triggered when chat status is valid.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/addmsguser.php  
**Line:** 86  
**Purpose:** Triggered before user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved',array('msg' => & $msg,'chat' => & $chat));
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/addmsguser.php  
**Line:** 153  
**Purpose:** Triggered when chat is unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat',array('chat' => & $chat));
```

### chat.addmsguser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/addmsguser.php  
**Line:** 179  
**Purpose:** Triggered when user message is added.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.addmsguser',array('chat' => & $chat, 'msg' => & $msg));
```

### widgetrestapi.getinvitation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/getinvitation.php  
**Line:** 296  
**Purpose:** Triggered when widget invitation is retrieved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.getinvitation',array('output' => & $outputResponse, 'ou' => $onlineUser, 'theme' => (isset($theme) ? $theme : null)));
```

### chat.before_chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitoffline.php  
**Line:** 89  
**Purpose:** Triggered before chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_chat_started', array('chat' => & $chat, 'errors' => & $Errors, 'offline' => (isset($additionalParams['offline']) && $additionalParams['offline'] == true)));
```

### chat.chat_offline_request_presend
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitoffline.php  
**Line:** 116  
**Purpose:** Triggered before offline request is send.

```php
$attributePresend = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_presend', array(
```

### chat.chat_offline_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitoffline.php  
**Line:** 139  
**Purpose:** Triggered when offline request is made.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request', array(
```

### chat.chat_offline_request_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitoffline.php  
**Line:** 172  
**Purpose:** Triggered when offline request is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_offline_request_saved', array(
```

### chat.process_invitation
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 253  
**Purpose:** Triggered when invitation is processed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.process_invitation',array(
```

## Widget REST API Module

### chat.process_invitation_ou
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 262  
**Purpose:** Triggered when processing an invitation.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.process_invitation_ou',array(
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 471  
**Purpose:** Triggered before an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered',array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.before_auto_responder_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 483  
**Purpose:** Triggered before an auto-responder message is sent.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_message',array('chat' => & $chat, 'responder' => & $responder));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 526  
**Purpose:** Triggered when an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 600  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started', array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/submitonline.php  
**Line:** 606  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started', array('chat' => & $chat, 'msg' => $messageInitial));
```

### chat.chatcheckoperatormessage
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/checkinvitation.php  
**Line:** 43  
**Purpose:** Triggered when checking operator message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatcheckoperatormessage', array('proactive_active' => & $proactiveInviteActive));
```

### widgetrestapi.uisettings
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/uisettings.php  
**Line:** 47  
**Purpose:** Triggered during widget UI settings retrieval.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.uisettings', array('output' => & $outputResponse, 'chat' => $chat));
```

### widgetrestapi.screensharesettings
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/screensharesettings.php  
**Line:** 22  
**Purpose:** Triggered during screenshare settings retrieval.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.screensharesettings', array('output' => & $settings));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/fetchmessages.php  
**Line:** 67  
**Purpose:** Triggered when validating chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

### chat.syncuser.operator_typing
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/fetchmessages.php  
**Line:** 140  
**Purpose:** Triggered when operator is typing.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncuser.operator_typing',array('chat' => & $chat));
```

### chat.messages_read
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/fetchmessages.php  
**Line:** 200  
**Purpose:** Triggered when messages are read.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.messages_read',array('chat' => & $chat));
```

### chat.messages_delivered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/fetchmessages.php  
**Line:** 215  
**Purpose:** Triggered when messages are delivered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.messages_delivered',array('chat' => & $chat));
```

### chat.syncuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/fetchmessages.php  
**Line:** 254  
**Purpose:** Triggered during user synchronization.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.syncuser',array('chat' => & $chat, 'response' => & $responseArray));
```

### widgetrestapi.onlinesettings
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/onlinesettings.php  
**Line:** 1145  
**Purpose:** Triggered during online settings retrieval.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.onlinesettings', array('ou_vid' => $Params['user_parameters_unordered']['vid'], 'output' => & $outputResponse));
```

### chat.chatwidgetchat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/initchat.php  
**Line:** 78  
**Purpose:** Triggered during chat widget initialization.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatwidgetchat',array('params' => & $Params, 'chat' => & $chat));
```

### widgetrestapi.initchat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/initchat.php  
**Line:** 376  
**Purpose:** Triggered during init chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.initchat', array('output' => & $outputResponse, 'chat' => $chat));
```

### chat.checkchatstatus
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/checkchatstatus.php  
**Line:** 185  
**Purpose:** Triggered when checking chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.checkchatstatus',array('chat' => & $chat, 'response' => & $responseArray));
```

### chat.before_send
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/sendmailsettings.php  
**Line:** 18  
**Purpose:** Triggered before sending mail.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_send', array('chat' => & $chat, 'errors' => & $Errors));
```

### widgetrestapi.settings_department_verify
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/settings.php  
**Line:** 50  
**Purpose:** Triggered during department settings verification.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.settings_department_verify', array('department' => & $departmentUpdated));
```

### widgetrestapi.settings_department_after_verify
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/settings.php  
**Line:** 62  
**Purpose:** Triggered after department settings verification.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.settings_department_after_verify', array('department' => & $department, 'output' => & $outputResponse));
```

### chat.chatcheckoperatormessage
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/settings.php  
**Line:** 113  
**Purpose:** Triggered when checking operator message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chatcheckoperatormessage', array('proactive_active' => & $proactiveInviteActive));
```

### widgetrestapi.analytics_events
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/settings.php  
**Line:** 586  
**Purpose:** Triggered during analytics events retrieval.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.analytics_events', array('events' => & $optionEvents));
```

### widgetrestapi.settings
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/settings.php  
**Line:** 653  
**Purpose:** Triggered during widget settings retrieval.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.settings', array('output' => & $outputResponse));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/chatcheckstatus.php  
**Line:** 62  
**Purpose:** Triggered when chat data has changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat',array('chat_id' => $chatId));
```

### chat.validstatus_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhwidgetrestapi/setsiteaccess.php  
**Line:** 15  
**Purpose:** Triggered when validating chat status.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validstatus_chat',array('chat' => & $chat, 'valid_statuses' => & $validStatuses));
```

## Audit Module

### chat.reload_backoffice
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhaudit/configuration.php  
**Line:** 21  
**Purpose:** Triggered when back office is reloaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.reload_backoffice',array());
```

### audit.login_history
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhaudit/loginhistory.php  
**Line:** 46  
**Purpose:** Triggered during login history audit.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('audit.login_history',array('result' => & $Result));
```

## Chat settings Module

### chat.startchatformsettings_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/modules/lhchatsettings/startchatformsettings.php  
**Line:** 55  
**Purpose:** Triggered during start chat form settings path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.startchatformsettings_path',array('result' => & $Result));
```

## Abstract Module

### lhabstract.erlhabstractmodelwidgettheme.posdefinition
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/pos/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 26  
**Purpose:** Triggered during widget theme position definition.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('lhabstract.erlhabstractmodelwidgettheme.posdefinition',array('def' => & $def));
```

## Form Module

### form.on_form_render
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 58  
**Purpose:** Triggered when a form is rendered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.on_form_render',array('form' => & $form, 'errors_internal' => self::$errorsInternal, 'errors' => & self::$errors));
```

### file.uploadfile.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 810  
**Purpose:** Triggered when determining the file path for an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_path', array('path' => & $path, 'storage_id' => $chat->id));
```

### file.uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 841  
**Purpose:** Triggered when storing an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### form.fill.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 911  
**Purpose:** Triggered when determining the file path for a filled form.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.fill.file_path',array('path' => & $dir, 'storage_id' => $formCollected->id));
```

### form.fill.store_file
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 920  
**Purpose:** Triggered when storing a file for a filled form.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.fill.store_file',array('file_params' => & $params));
```

### form.filled
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhform/lhformrenderer.php  
**Line:** 928  
**Purpose:** Triggered when a form is filled.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.filled',array('form' => & $formCollected));
```

## Core tpl Module

### tpl.new
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtpl/tpl.php  
**Line:** 104  
**Purpose:** Triggered when a new template object is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('tpl.new', array('tpl' => & $this));
```

## Mail conversation statistic Module

### mail.statistic.messagesperinterval
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 7  
**Purpose:** Triggered when calculating messages per interval statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.messagesperinterval',array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.messagesperuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 114  
**Purpose:** Triggered when calculating messages per user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.messagesperuser',array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.messagesperdep
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 140  
**Purpose:** Triggered when calculating messages per department statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.messagesperdep',array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.avginteractionperdep
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 166  
**Purpose:** Triggered when calculating average interaction time per department statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.avginteractionperdep',array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.avginteractionperuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 195  
**Purpose:** Triggered when calculating average interaction time per user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.avginteractionperuser',array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.messagesperhour
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 224  
**Purpose:** Triggered when calculating messages per hour statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.messagesperhour', array('params_execution' => $params_execution, 'filter' => $filter));
```

### mail.statistic.attrbyperinterval
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 345  
**Purpose:** Triggered when calculating attribute by per interval statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.statistic.attrbyperinterval', array('params_execution' => $filterParams, 'filter' => $filter));
```

### mail_statistic.export_csv
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvstatistic.php  
**Line:** 587  
**Purpose:** Triggered during mail statistic CSV export.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail_statistic.export_csv',array('fp' => $fp, 'type' => $type, 'data' => $statistic));
```

## Mail conversation parser Module

### mail.conversation_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvparser.php  
**Line:** 799  
**Purpose:** Triggered when a mail conversation is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation_started',array(
```

### mail.conversation_started_passive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvparser.php  
**Line:** 804  
**Purpose:** Triggered when a mail conversation is started passively.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation_started_passive',array(
```

### mail.conversation_reply
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvparser.php  
**Line:** 944  
**Purpose:** Triggered when a mail conversation is replied to.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation_reply',array(
```

### mail.conversation_reply_passive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvparser.php  
**Line:** 949  
**Purpose:** Triggered when a mail conversation is replied to passively.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation_reply_passive',array(
```

### mail.conversation_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhmailconv/lhmailconvparser.php  
**Line:** 1051  
**Purpose:** Triggered when a mail conversation is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation_started',array(
```

## Chat command Module

### chat.customcommand
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 171  
**Purpose:** Triggered when a custom command is executed.

```php
$commandResponse = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.customcommand', array('command' => $commandData['command'], 'argument' => $commandData['argument'], 'params' => $params));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 248  
**Purpose:** Triggered before a message from admin is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $params['chat']));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 283  
**Purpose:** Triggered before a message from admin is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg, 'chat' => & $params['chat']));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 330  
**Purpose:** Triggered before a message from admin is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved',array('msg' => & $msg, 'chat' => & $params['chat']));
```

### chat.chat_transfered_force
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 455  
**Purpose:** Triggered when a chat is transferred forcefully.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfered_force', array('chat' => & $params['chat']));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatcommand.php  
**Line:** 699  
**Purpose:** Triggered before chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete', array(
```

## Chat Mail

### chatmail.setup_smtp
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatmail.php  
**Line:** 8  
**Purpose:** Triggered when setting up SMTP for chat mail.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatmail.setup_smtp', array(
```

## Chat Helper

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchathelper.php  
**Line:** 185  
**Purpose:** Triggered before an admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $params['chat'], 'user_id' => $user_id));
```

### chat.before_msg_admin_saved (2)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchathelper.php  
**Line:** 270  
**Purpose:** Triggered before an admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.before_msg_admin_saved (3)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchathelper.php  
**Line:** 293  
**Purpose:** Triggered before an admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

### chat.before_msg_admin_saved (4)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchathelper.php  
**Line:** 327  
**Purpose:** Triggered before an admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));
```

## Chat View Resque

### views.update_vew
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatviewresque.php  
**Line:** 97  
**Purpose:** Triggered when updating a view.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('views.update_vew', array(
```

## Chat Webhook Continous

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookcontinous.php  
**Line:** 275  
**Purpose:** Triggered when a web message is added by an admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

## Chat Statistic

### statistic.gettoptodaysoperators
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 10  
**Purpose:** Triggered when getting top today's operators statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.gettoptodaysoperators',array('limit' => $limit, 'offset' => $offset, 'filter' => $filter));
```

### statistic.getnumberofchatspermonth
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 118  
**Purpose:** Triggered when getting the number of chats per month statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatspermonth',array('params_execution' => $paramsExecution, 'filter' => $filter));
```

### statistic.getnumberofchatsperweekday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 256  
**Purpose:** Triggered when getting the number of chats per weekday statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatsperweekday',array('params_execution' => $paramsExecution, 'filter' => $filter));
```

### statistic.getnumberofchatsperweek
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 366  
**Purpose:** Triggered when getting the number of chats per week statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatsperweek',array('params_execution' => $paramsExecution, 'filter' => $filter));
```

### statistic.getnumberofchatswaittimeperweekday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 512  
**Purpose:** Triggered when getting the number of chats wait time per weekday statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatswaittimeperweekday', array('filter' => $filter));
```

### statistic.getnumberofchatswaittimeperweek
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 539  
**Purpose:** Triggered when getting the number of chats wait time per week statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatswaittimeperweek', array('filter' => $filter));
```

### statistic.getlast24hstatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 599  
**Purpose:** Triggered when getting last 24 hours statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getlast24hstatistic',array('filter' => $filter));
```

### statistic.getnumberofchatsperday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 639  
**Purpose:** Triggered when getting the number of chats per day statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatsperday', array('params_execution' => $paramsExecution, 'filter' => $filter));
```

### statistic.getnumberofchatswaittime
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 763  
**Purpose:** Triggered when getting the number of chats wait time statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatswaittime',array('filter' => $filter));
```

### statistic.getnumberofchatswaittimeperday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 786  
**Purpose:** Triggered when getting the number of chats wait time per day statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatswaittimeperday', array('filter' => $filter));
```

### statistic.getnumberofchatspermonthunanswered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 834  
**Purpose:** Triggered when getting the number of unanswered chats per month statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatspermonthunanswered', array('filter' => $filter));
```

### statistic.getworkloadstatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 876  
**Purpose:** Triggered when getting the workload statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getworkloadstatistic',array('filter' => $filter, 'days' => $days));
```

### statistic.getaveragechatduration
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 915  
**Purpose:** Triggered when getting the average chat duration statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getaveragechatduration',array('days' => $days, 'filter' => $filter));
```

### statistic.getaveragefrt
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 936  
**Purpose:** Triggered when getting the average first response time statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getaveragefrt',array('days' => $days, 'filter' => $filter));
```

### statistic.getaveragert
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 968  
**Purpose:** Triggered when getting the average resolution time statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getaveragert',array('days' => $days, 'filter' => $filter));
```

### statistic.getmaxaveragert
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1001  
**Purpose:** Triggered when getting the maximum average resolution time statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getmaxaveragert',array('days' => $days, 'filter' => $filter));
```

### statistic.getcannedstatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1033  
**Purpose:** Triggered when getting canned message statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getcannedstatistic',array('days' => $days, 'filter' => $filter));
```

### statistic.getsubjectsstatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1122  
**Purpose:** Triggered when getting subjects statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getsubjectsstatistic',array('days' => $days, 'filter' => & $filter));
```

### statistic.gettopchatsbycountry
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1164  
**Purpose:** Triggered when getting top chats by country statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.gettopchatsbycountry',array('days' => $days, 'filter' => $filter));
```

### statistic.averageofchatsdialogsbyuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1247  
**Purpose:** Triggered when getting average of chats dialogs by user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.averageofchatsdialogsbyuser',array('days' => $days, 'filter' => $filter, 'limit' => $limit));
```

### statistic.numberofchatsdialogsbydepartment
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1288  
**Purpose:** Triggered when getting number of chats dialogs by department statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.numberofchatsdialogsbydepartment',array('days' => $days, 'filter' => $filter));
```

### statistic.numberofchatsdialogsbyuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1341  
**Purpose:** Triggered when getting number of chats dialogs by user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.numberofchatsdialogsbyuser',array('group_field' => $groupField, 'days' => $days, 'filter' => $filter));
```

### statistic.numberofchatsdialogsbyuserparticipant
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1399  
**Purpose:** Triggered when getting number of chats dialogs by user participant statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.numberofchatsdialogsbyuserparticipant',array('group_field' => $groupField, 'days' => $days, 'filter' => $filter));
```

### statistic.avgwaittimeuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1483  
**Purpose:** Triggered when getting average wait time user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.avgwaittimeuser',array('days' => $days, 'filter' => $filter));
```

### statistic.numberofmessagesbyuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1523  
**Purpose:** Triggered when getting number of messages by user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.numberofmessagesbyuser',array('days' => $days, 'filter' => $filter));
```

### statistic.getratingbyuser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1736  
**Purpose:** Triggered when getting rating by user statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getratingbyuser',array('days' => $days, 'filter' => $filter));
```

### statistic.getagentstatistic_export_columns
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1838  
**Purpose:** Triggered when getting agent statistic export columns.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getagentstatistic_export_columns',array('xls' => & $objPHPExcel));
```

### statistic.getagentstatistic_export_columns_value
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 1933  
**Purpose:** Triggered when getting agent statistic export columns value.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getagentstatistic_export_columns_value',array(
```

### statistic.getagentstatisticaveragefield
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2020  
**Purpose:** Triggered when getting agent statistic average field.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getagentstatisticaveragefield',array('attr' => & $attrToAverage, 'attr_front' => & $attrFrontAverage));
```

### statistic.getagentstatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2192  
**Purpose:** Triggered when getting agent statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getagentstatistic',$filterExtension);
```

### statistic.getperformancestatistic
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2631  
**Purpose:** Triggered when getting performance statistic.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getperformancestatistic',array('ranges' => $dateRange, 'days' => $days, 'filter' => $filter, 'filter_params' => $filterParams));
```

### statistic.nickgroupingdateweekday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2755  
**Purpose:** Triggered when nick grouping date weekday.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdateweekday',array('params_execution' => $filterParams, 'filter' => $filter));
```

### statistic.validgroupfields
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2804  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdateweek
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2829  
**Purpose:** Triggered when nick grouping date week.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdateweek',array('params_execution' => $filterParams, 'filter' => $filter));
```

### statistic.validgroupfields (2)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2899  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdatenickweekday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2943  
**Purpose:** Triggered when nick grouping date nick weekday.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdatenickweekday',array('params_execution' => $filterParams, 'filter' => $filter));
```

### statistic.validgroupfields (3)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 2992  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdatenickweek
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3069  
**Purpose:** Triggered when nick grouping date nick week.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdatenickweek',array('params_execution' => $filterParams, 'filter' => $filter));
```

### statistic.validgroupfields (4)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3139  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdateday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3233  
**Purpose:** Triggered when nick grouping date day.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdateday', array('filter' => $filter, 'params_execution' => $filterParams));
```

### statistic.validgroupfields (5)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3299  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdatenickday
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3321  
**Purpose:** Triggered when nick grouping date nick day.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdatenickday', array('filter' => $filter, 'params_execution' => $filterParams));
```

### statistic.validgroupfields (6)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3387  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3459  
**Purpose:** Triggered when nick grouping date.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdate', array('filter' => $filter, 'params_execution' => $filterParams));
```

### statistic.validgroupfields (7)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3514  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.nickgroupingdatenick
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3828  
**Purpose:** Triggered when nick grouping date nick.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.nickgroupingdatenick', array('filter' => $filter, 'params_execution' => $filterParams));
```

### statistic.validgroupfields (8)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 3893  
**Purpose:** Triggered to validate group fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.validgroupfields', array('type' => 'sql', 'fields' => & $validGroupFields));
```

### statistic.getnumberofchatsperchannel
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 4266  
**Purpose:** Triggered when getting number of chats per channel.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.getnumberofchatsperchannel',array('params_execution' => $params, 'filter' => $filter));
```

### statistic.export_csv
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatstatistic.php  
**Line:** 4758  
**Purpose:** Triggered when statistic is exported as CSV.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('statistic.export_csv',array('fp' => $fp, 'type' => $type, 'data' => $statistic));
```

### chat.validate_canned_msg_user_departments
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatadminvalidatorhelper.php  
**Line:** 434  
**Purpose:** Triggered to validate canned message user departments.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_canned_msg_user_departments',array('canned_msg' => & $cannedMessage, 'errors' => & $Errors));
```

### widgetrestapi.analytics_events
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatadminvalidatorhelper.php  
**Line:** 1678  
**Purpose:** Triggered for widget rest API analytics events.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('widgetrestapi.analytics_events', array('events' => & $optionsEvents));
```

### subject.default_filter_mail
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 215  
**Purpose:** Triggered for subject default filter mail.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('subject.default_filter_mail', array('filter' => & $filterString, 'subject_id' => & $subjectIds));
```

## Chat Module

### subject.default_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 293  
**Purpose:** Triggered when applying default filters to subjects.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('subject.default_filter', array('filter' => & $filterString, 'subject_id' => & $subjectIds));
```

### chat.close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 1725  
**Purpose:** Triggered when a chat is closed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.close',array('chat' => & $chat, 'user_data' => $operator));
```

### chat.update_active_chats
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 2199  
**Purpose:** Triggered when updating active chats.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.update_active_chats',array('user_id' => $user_id));
```

### chat.update_active_chats
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 2222  
**Purpose:** Triggered when updating active chats.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.update_active_chats',array('user_id' => $user_id));
```

### chat.extract_department
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchat.php  
**Line:** 2561  
**Purpose:** Triggered when extracting a department.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.extract_department', array('departments' => $departments));
```

### chat.messages_added_passive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookresque.php  
**Line:** 118  
**Purpose:** Triggered when messages are added passively.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.messages_added_passive', array(
```

### chat.list_export_columns
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatexport.php  
**Line:** 424  
**Purpose:** Triggered when listing export columns.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_export_columns',array('items' => & $chatArray));
```

### chat.list_export_item_data
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatexport.php  
**Line:** 641  
**Purpose:** Triggered when listing export item data.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_export_item_data',array('item' => & $itemData, 'chat' => $item));
```

### chat.validate_department
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 493  
**Purpose:** Triggered when validating a department.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_department', array('input_form' => $inputForm));
```

### chat.validate_department
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 543  
**Purpose:** Triggered when validating a department.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_department', array('input_form' => $inputForm));
```

### chat.validate_start_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 951  
**Purpose:** Triggered when validating a start chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_start_chat',array('errors' => & $Errors, 'input_form' => & $inputForm, 'start_data_fields' => & $start_data_fields, 'chat' => & $chat,'additional_params' => & $additionalParams));
```

### onlineuser.update_js_vars
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 1090  
**Purpose:** Triggered when updating online user JS variables.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.update_js_vars', array('username_changed' => ($usernamePrevious != $usernamePresent), 'data_changed' => $hashChanged, 'ou' => & $visitor));
```

### chat.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 1333  
**Purpose:** Triggered when a chat is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat, 'params' => array()));
```

### chat.modified
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 1432  
**Purpose:** Triggered when a chat is modified.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.modified', array('chat' => & $chat, 'params' => array()));
```

### file.uploadfile.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2062  
**Purpose:** Triggered when defining the file path for an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_path', array('path' => & $path, 'storage_id' => $params['chat']->id));
```

### file.uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2092  
**Purpose:** Triggered when storing an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_store', array('chat_file' => $upload_handler->uploadedFile));
```

### chat.genericbot_set_bot
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2113  
**Purpose:** Triggered when setting a generic bot for a chat.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_set_bot', array(
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2472  
**Purpose:** Triggered before an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered',array('chat' => & $chat, 'errors' => & $beforeAutoResponderErrors));
```

### chat.before_auto_responder_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2484  
**Purpose:** Triggered before an auto-responder message is sent.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_message',array('chat' => & $chat, 'responder' => & $responder));
```

### chat.auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2502  
**Purpose:** Triggered when an auto-responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_responder_triggered', array('chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatvalidator.php  
**Line:** 2520  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started',array('chat' => & $chat));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 180  
**Purpose:** Triggered when a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msgReplyToAllItem, 'chat' => & $chat));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 193  
**Purpose:** Triggered when a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msgReplyTo, 'chat' => & $chat, 'reason' => 'delivery_status_change'));
```

### chat.msg_removed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 200  
**Purpose:** Triggered when a message is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.msg_removed', array('msg' => $msgReplyTo, 'chat' => $chat));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 212  
**Purpose:** Triggered when a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msgReplyTo, 'chat' => & $chat, 'reason' => 'content_edited'));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 242  
**Purpose:** Triggered when a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msgReplyTo, 'chat' => & $chat,'reason' => 'emoji_add'));
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 277  
**Purpose:** Triggered when a message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $msgReplyTo, 'chat' => & $chat, 'reason' => 'emoji_remove'));
```

### chat.webhook_incoming_chat_continue
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1133  
**Purpose:** Triggered when continuing an incoming chat via webhook.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.webhook_incoming_chat_continue', array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1470  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1545  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### chat.unread_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1561  
**Purpose:** Triggered when a chat is marked as unread.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat', array(
```

### chat.messages_added_passive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1571  
**Purpose:** Triggered when messages are added passively.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.messages_added_passive', array(
```

### chat.nodjshelper_notify_delay
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1578  
**Purpose:** Triggered when a notification delay occurs with NodeJS helper.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.nodjshelper_notify_delay', array(
```

### chat.restart_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1586  
**Purpose:** Triggered when a chat is restarted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.restart_chat',array(
```

### chat.webhook_incoming_chat_before_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1685  
**Purpose:** Triggered before saving an incoming chat via webhook.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.webhook_incoming_chat_before_save', array(
```

### chat.webhook_incoming_chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1693  
**Purpose:** Triggered when an incoming chat is started via webhook.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.webhook_incoming_chat_started', array(
```

### chat.webhook_incoming_chat_before_update_new
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 1903  
**Purpose:** Triggered before updating a new incoming chat via webhook.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.webhook_incoming_chat_before_update_new', array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2025  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2122  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2131  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started', array(
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2242  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array(
```

### file.uploadfile.file_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2311  
**Purpose:** Triggered when defining the file path for an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_path', array('path' => & $path, 'storage_id' => $chat->id));
```

### file.uploadfile.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2350  
**Purpose:** Triggered when storing an uploaded file.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.uploadfile.file_store', array('chat_file' => $fileUpload));
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2611  
**Purpose:** Triggered when a message is added by an administrator via web interface.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('wh_worker' => $worker, 'msg' => & $msg, 'chat' => & $chat));
```

### chat.chat_started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatwebhookincomming.php  
**Line:** 2617  
**Purpose:** Triggered when a chat is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_started', array(
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 30  
**Purpose:** Triggered before an auto-responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true,'msg' => & $msg, 'chat' => & $chat));
```

### chat.data_changed_assigned_department
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 102  
**Purpose:** Triggered when the assigned department data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_assigned_department',array('chat' => & $chat, 'from_dep' => $chat->department, 'to_dep' => $departmentTransfer));
```

### chat.unread_chat_workflow
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 142  
**Purpose:** Triggered during unread chat workflow.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.unread_chat_workflow',array('chat' => & $chat));
```

### xml.before_send_xmp_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 163  
**Purpose:** Triggered before sending an XMP message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xml.before_send_xmp_message', array('chat' => & $chat, 'errors' => & $errors));
```

### chat.chat_unread_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 170  
**Purpose:** Triggered when a chat has an unread message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_unread_message',array('chat' => & $chat));
```

### xml.before_send_xmp_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 192  
**Purpose:** Triggered before sending an XMP message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xml.before_send_xmp_message', array('chat' => & $chat, 'errors' => & $errors));
```

### chat.chat_accepted
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 199  
**Purpose:** Triggered when a chat is accepted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_accepted',array('chat' => & $chat));
```

### xml.before_send_xmp_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 214  
**Purpose:** Triggered before sending an XMP message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xml.before_send_xmp_message', array('chat' => & $chat, 'errors' => & $errors));
```

### chat.new_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 221  
**Purpose:** Triggered when a new chat is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.new_chat',array('chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 284  
**Purpose:** Triggered during chat auto close process.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

## Chat Module

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 332  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 378  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 429  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 482  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 539  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.auto_close
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 641  
**Purpose:** Triggered when chat is closed automatically.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.auto_close',array('msg' => & $msg,'chat' => & $chat));
```

### chat.delete
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 672  
**Purpose:** Triggered before chat is deleted.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.delete', array(
```

### chat.workflow.autoassign_permit
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 832  
**Purpose:** Triggered to check permissions for auto assign.

```php
$statusWorkflowPermit = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.autoassign_permit', array(
```

### chat.workflow.autoassign
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 867  
**Purpose:** Triggered during auto assign process.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.autoassign', array(
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1030  
**Purpose:** Triggered before user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $chat->user_id));
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1039  
**Purpose:** Triggered before user message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $user_id));
```

### chat.data_changed_auto_assign
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1070  
**Purpose:** Triggered when chat data is changed during auto assign.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_auto_assign',array('chat' => & $chat));
```

### chat.workflow.presend_canned_msg
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1092  
**Purpose:** Triggered before canned message is send.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.presend_canned_msg', array(
```

### chat.workflow.canned_message_replace
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1138  
**Purpose:** Triggered during canned message replace.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.canned_message_replace',array('items' => & $items, 'user' => $chat->user, 'chat' => $chat, 'replace_array' => & $replaceArray));
```

### chat.workflow.canned_message_before_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1213  
**Purpose:** Triggered before canned message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.canned_message_before_save',array('msg' => & $msg, 'chat' => & $chat));
```

### chat.workflow.get_chat_history
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1264  
**Purpose:** Triggered when chat history is fetched.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.get_chat_history', array(
```

### chat.workflow.has_previous_messages
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchat/lhchatworkflow.php  
**Line:** 1301  
**Purpose:** Triggered to check if chat has previous messages.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.has_previous_messages', $params);
```

## Group Chat Module

### group_chat.new_group_chat_member
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgroupchat.php  
**Line:** 48  
**Purpose:** Triggered when new member is added to group chat.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('group_chat.new_group_chat_member', array('member' => & $newMember));
```

## User Module

### user.after_generate_access_array
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuser.php  
**Line:** 485  
**Purpose:** Triggered after user access array is generated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.after_generate_access_array',array('accessArray' => & $accessArray));
```

### user.edit.photo_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 107  
**Purpose:** Triggered to get user photo path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_path', array('dir' => & $dir, 'storage_id' => $userDepAlias->id));
```

### user.edit.photo_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 109  
**Purpose:** Triggered to store user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_store', array('file_post_variable' => 'alias_photo', 'dir' => & $dir, 'storage_id' => $userDepAlias->id));
```

### user.edit.photo_resize_150
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 130  
**Purpose:** Triggered to resize user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_resize_150', array('mime_type' => $file["data"]['mime_type'], 'user' => $userDepAlias));
```

### user.edit.photo_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 641  
**Purpose:** Triggered to get user photo path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_path',array('dir' => & $dir,'storage_id' => $userData->id));
```

### user.edit.photo_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 643  
**Purpose:** Triggered to store user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_store', array('file_post_variable' => 'UserPhoto', 'dir' => & $dir, 'storage_id' => $userData->id));
```

### user.edit.photo_resize_150
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 665  
**Purpose:** Triggered to resize user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_resize_150', array('mime_type' => $file["data"]['mime_type'],'user' => $userData));
```

### user.new_user
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 706  
**Purpose:** Triggered after new user is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.new_user', array('userData' => & $userData, 'errors' => & $Errors));
```

### user.edit_user
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 721  
**Purpose:** Triggered after user is edited.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit_user',array('userData' => & $userData, 'errors' => & $Errors));
```

### user.account.update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhuser/lhuservalidator.php  
**Line:** 1174  
**Purpose:** Triggered after user account is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.account.update', array('userData' => & $userData, 'errors' => & $Errors));
```

## Generic Bot Module

### chat.rest_api_before_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworker.php  
**Line:** 94  
**Purpose:** Triggered before REST API request.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.rest_api_before_request', array(
```

### chat.rest_api_after_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworker.php  
**Line:** 127  
**Purpose:** Triggered after REST API request.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.rest_api_after_request', array(
```

### chat.genericbot_chat_predefined
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionpredefined.php  
**Line:** 9  
**Purpose:** Triggered to handle predefined message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_predefined', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactiontext.php  
**Line:** 66  
**Purpose:** Triggered to handle generic bot.

```php
$validationResult = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_chat_command_transfer
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 50  
**Purpose:** Triggered to transfer chat by command.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_transfer', array(
```

### chat.genericbot_chat_command_transfer
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 106  
**Purpose:** Triggered to transfer chat by command.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_transfer', array(
```

### chat.genericbot_chat_command_transfer
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 151  
**Purpose:** Triggered to transfer chat by command.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_transfer', array(
```

### chat.genericbot_chat_command_transfer
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 221  
**Purpose:** Triggered to transfer chat by command.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_transfer', array(
```

### chat.message_updated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 581  
**Purpose:** Triggered after message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.message_updated', array('msg' => & $params['msg'], 'chat' => & $chat));
```

### chat.data_changed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 758  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed', array('chat' => & $chat));
```

### chat.subject_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 912  
**Purpose:** Triggered to remove subject.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.subject_remove',array( 'init' => 'bot', 'subject_id' => (int)$payloadProcessed, 'chat' => & $chat));
```

### chat.subject_add
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 926  
**Purpose:** Triggered to add subject.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.subject_add',array('init' => 'bot', 'chat' => & $chat, 'subject_id' => $subject->id));
```

### chat.genericbot_chat_command_dispatch_event
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncommand.php  
**Line:** 944  
**Purpose:** Triggered to dispatch generic bot command event.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_command_dispatch_event', array(
```

### chat.rest_api_before_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 94  
**Purpose:** Triggered before REST API request.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.rest_api_before_request', array(
```

### chat.rest_api_after_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 186  
**Purpose:** Triggered after REST API request.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.rest_api_after_request', array(
```

### chat.before_parse_send
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 422  
**Purpose:** Triggered before parse send.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_parse_send', array('msg' => & $msg_text));
```

### chat.before_parse_send_clean
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 520  
**Purpose:** Triggered before parse send clean.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_parse_send_clean', array('msg' => & $msg_text_cleaned));
```

### chat.stream_flow
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 1406  
**Purpose:** Triggered during stream flow.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.stream_flow', array(
```

### chat.stream_flow
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 1423  
**Purpose:** Triggered during stream flow.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.stream_flow', array(
```

### chat.rest_api_make_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 1486  
**Purpose:** Triggered to make REST API request.

```php
$commandResponse = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.rest_api_make_request', array(
```

### chat.genericbot_rest_api_method.[method_name]
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionrestapi.php  
**Line:** 1847  
**Purpose:** Triggered to execute specific REST API method.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_rest_api_method.' . trim($outputCombination['method_name']),
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionactions.php  
**Line:** 114  
**Purpose:** Triggered to handle generic bot.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_survey_trigger
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionsurvey.php  
**Line:** 46  
**Purpose:** Triggered to trigger survey.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_survey_trigger', array(
```

### chat.genericbot_chat_predefined
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionsurvey.php  
**Line:** 59  
**Purpose:** Triggered to handle predefined message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_predefined', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionprogress.php  
**Line:** 15  
**Purpose:** Triggered to handle generic bot.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_event_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionconditions.php  
**Line:** 107  
**Purpose:** Triggered to handle generic bot event.

```php
$result = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_event_handler', array_merge($params, array('render' => $attr, 'chat' => $chat)));
```

### chat.genericbot_actionbody
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactiontbody.php  
**Line:** 11  
**Purpose:** Triggered to handle generic bot action body.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_actionbody', array(
```

### chat.genericbot_event_type
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionevent_type.php  
**Line:** 21  
**Purpose:** Triggered to handle generic bot event type.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_event_type', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php  
**Line:** 43  
**Purpose:** Triggered to handle generic bot.

```php
$validationResult = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php  
**Line:** 72  
**Purpose:** Triggered to handle generic bot.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php  
**Line:** 91  
**Purpose:** Triggered to handle generic bot.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactioncollectable.php  
**Line:** 108  
**Purpose:** Triggered to handle generic bot.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.bot.alert_icon
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionalert_icon.php  
**Line:** 91  
**Purpose:** Triggered to handle bot alert icon.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.bot.alert_icon',array('chat' => & $chat));
```

### bot.validate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 139  
**Purpose:** Triggered to validate bot.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('bot.validate',array('bot' => & $bot, 'configuration_array' => & $configurationArray, 'additional_params' => $additionalParams));
```

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 176  
**Purpose:** Triggered to get theme temp path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### user.edit.photo_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 191  
**Purpose:** Triggered to get user photo path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_path',array('dir' => & $dir, 'storage_id' => $userData->id));
```

### user.edit.photo_resize_150
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 206  
**Purpose:** Triggered to resize user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_resize_150', array('mime_type' => $extensionMimetype[$mimetype], 'user' => $userData));
```

### user.edit.photo_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 235  
**Purpose:** Triggered to get user photo path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_path',array('dir' => & $dir, 'storage_id' => $userData->id));
```

### user.edit.photo_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 237  
**Purpose:** Triggered to store user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_store', array('file_post_variable' => 'UserPhoto', 'dir' => & $dir, 'storage_id' => $userData->id));
```

### user.edit.photo_resize_150
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbot.php  
**Line:** 259  
**Purpose:** Triggered to resize user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_resize_150', array('mime_type' => $file["data"]['mime_type'],'user' => $userData));
```

### chat.genericbot_get_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 215  
**Purpose:** Triggered to get generic bot message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_message', array(
```

### chat.genericbot_get_nick
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 270  
**Purpose:** Triggered to get generic bot nick.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_nick', array(
```

### chat.genericbot_get_default_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 310  
**Purpose:** Triggered to get generic bot default message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_default_message', array(
```

### chat.genericbot_send_always
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 333  
**Purpose:** Triggered to send generic bot message always.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_send_always', array(
```

### chat.genericbot_event_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 595  
**Purpose:** Triggered to handle generic bot event.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_event_handler', array(
```

### chat.genericbot_event_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 678  
**Purpose:** Triggered to handle generic bot event.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_event_handler', array(
```

### chat.genericbot_get_in_progress
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1018  
**Purpose:** Triggered to get generic bot in progress message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_in_progress', array(
```

### chat.genericbot_get_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1102  
**Purpose:** Triggered to get generic bot message.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_message', array(
```

## Generic Bot Module

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1154  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1236  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1285  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1328  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1389  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1446  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_handler
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 1495  
**Purpose:** Triggered when generic bot has to handle response.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_handler', array(
```

### chat.genericbot_get_trigger_click
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2012  
**Purpose:** Triggered to get trigger click.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_trigger_click', array(
```

### chat.genericbot_get_trigger_click_processed
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2128  
**Purpose:** Triggered after trigger click was processed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_trigger_click_processed', array(
```

### chat.genericbot_get_click
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2190  
**Purpose:** Triggered to get click.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_click', array(
```

### chat.genericbot_get_click_async
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2298  
**Purpose:** Triggered to get click async.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_get_click_async', array(
```

### chat.replace_before_message_bot
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2417  
**Purpose:** Triggered before message is replaced by bot.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.replace_before_message_bot', array('msg' => & $message, 'chat' => & $params['chat']));
```

### chat.replace_message_bot
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2620  
**Purpose:** Triggered when message is replaced by bot.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.replace_message_bot', array('msg' => & $message, 'chat' => & $params['chat']));
```

### chat.condition_replace
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2706  
**Purpose:** Triggered when condition is replaced.

```php
$commandResponse = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.condition_replace', array(
```

### chat.before_msg_user_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhgenericbot/lhgenericbotworkflow.php  
**Line:** 2765  
**Purpose:** Triggered before message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_user_saved',array('msg' => & $msg, 'chat' => & $chat));
```

## Core Module

### chat.addmsguser
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhcore/lhfileupload.php  
**Line:** 126  
**Purpose:** Triggered when user adds a message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.addmsguser',array('file' => $fileUpload, 'msg' => & $msg, 'chat' => & $chat));
```

### chat.core.default_url
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhcore/lhmodule.php  
**Line:** 665  
**Purpose:** Triggered to determine default URL.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.core.default_url', array('url' => & $url));
```

## Chatbox Module

### chatbox.created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchatbox/lhchatbox.php  
**Line:** 41  
**Purpose:** Triggered when chatbox is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.created', array('chatbox' => & $chatbox));
```

### chatbox.created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhchatbox/lhchatbox.php  
**Line:** 84  
**Purpose:** Triggered when chatbox is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chatbox.created', array('chatbox' => & $chatbox));
```

## Theme Module

### admintheme.filedir
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtheme/lhthemevalidator.php  
**Line:** 95  
**Purpose:** Triggered to determine file directory.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('admintheme.filedir',array('dir' => & $dir, 'storage_id' => $clickform->id));
```

### file.file_new_admin.file_store
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtheme/lhthemevalidator.php  
**Line:** 109  
**Purpose:** Triggered when a file is stored.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.file_new_admin.file_store', array(
```

## Survey Module

### survey.validate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhsurvey/lhsurveyvalidator.php  
**Line:** 96  
**Purpose:** Triggered to validate survey.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('survey.validate', array('survey' => & $survey, 'survey_item' => & $surveyItem, 'errors' => & $Errors));
```

## XMP Module

### xml.send_xmp_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhxmp/lhxmp.php  
**Line:** 178  
**Purpose:** Triggered to send XMP message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('xml.send_xmp_message',array('params' => & $data));
```

## Co-browse Module

### cobrowse.started
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhcobrowse/lhcobrowse.php  
**Line:** 110  
**Purpose:** Triggered when co-browse is started.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('cobrowse.started', array('co_browse' => & $coBrowseSession));
```

## BBCode Module

### chat.before_make_clickable
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhbbcode/lhbbcode.php  
**Line:** 1217  
**Purpose:** Triggered before making message clickable.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_make_clickable',array('msg' => & $ret, 'makeLinksClickable' => & $makeLinksClickable));
```

### chat.after_make_clickable
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhbbcode/lhbbcode.php  
**Line:** 1349  
**Purpose:** Triggered after making message clickable.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.after_make_clickable',array('msg' => & $ret));
```

### chat.make_plain_message
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhbbcode/lhbbcode_cleanup.php  
**Line:** 1061  
**Purpose:** Triggered to make plain message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.make_plain_message', array(
```

## Translate Module

### translate.after_google_translate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhgoogletranslate.php  
**Line:** 106  
**Purpose:** Triggered after google translate.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.after_google_translate', array('word' => & $word, 'errors' => & $errors));
```

### translate.after_google_translate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhgoogletranslate.php  
**Line:** 115  
**Purpose:** Triggered after google translate.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.after_google_translate', array('word' => & $word, 'errors' => & $errors));
```

### translate.after_bing_translate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhbingtranslate.php  
**Line:** 108  
**Purpose:** Triggered after bing translate.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.after_bing_translate', array('word' => & $word, 'errors' => & $errors));
```

### translation.get_config
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 106  
**Purpose:** Triggered to get translation configuration.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_config', array());
```

### translation.get_bing_token
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 118  
**Purpose:** Triggered to get bing token.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_bing_token', array(
```

### translate.messagetranslated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 230  
**Purpose:** Triggered after message is translated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.messagetranslated', array(
```

### translate.messagetranslated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 298  
**Purpose:** Triggered after message is translated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.messagetranslated', array(
```

### translate.messagetranslated
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 358  
**Purpose:** Triggered after message is translated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translate.messagetranslated', array(
```

### translation.get_config
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 425  
**Purpose:** Triggered to get translation configuration.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_config', array());
```

### translation.get_config
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 799  
**Purpose:** Triggered to get translation configuration.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_config', array());
```

### translation.get_bing_token
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 810  
**Purpose:** Triggered to get bing token.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_bing_token', array(
```

### translation.get_config
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 850  
**Purpose:** Triggered to get translation configuration.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_config', array());
```

### translation.get_bing_token
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhtranslate/lhtranslate.php  
**Line:** 871  
**Purpose:** Triggered to get bing token.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('translation.get_bing_token', array(
```

## Abstract Module

### lhabstract.erlhabstractmodelwidgettheme.fields
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhabstract/fields/erlhabstractmodelwidgettheme.php  
**Line:** 2090  
**Purpose:** Triggered to get widget theme fields.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('lhabstract.erlhabstractmodelwidgettheme.fields',array('fields' => & $fields));
```

## Rest API Module

### theme.temppath
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapiuservalidator.php  
**Line:** 377  
**Purpose:** Triggered to get theme temporary path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir));
```

### user.edit.photo_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapiuservalidator.php  
**Line:** 392  
**Purpose:** Triggered to get user photo path.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_path',array('dir' => & $dir, 'storage_id' => $userData->id));
```

### user.edit.photo_resize_150
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapiuservalidator.php  
**Line:** 407  
**Purpose:** Triggered to resize user photo.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.edit.photo_resize_150', array('mime_type' => $extensionMimetype[$mimetype], 'user' => $userData));
```

### rest_api.validate_bearer_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapivalidator.php  
**Line:** 113  
**Purpose:** Triggered to validate bearer request.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('rest_api.validate_bearer_request', array(
```

### rest_api.validate_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapivalidator.php  
**Line:** 140  
**Purpose:** Triggered to validate request.

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('rest_api.validate_request', array(
```

### restapi.chats_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapivalidator.php  
**Line:** 628  
**Purpose:** Triggered to filter chats.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('restapi.chats_filter', array('filter' => & $filter));
```

### chat.restapi_chats
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/core/lhrestapi/lhrestapivalidator.php  
**Line:** 665  
**Purpose:** Triggered to list chats.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.restapi_chats',array('list' => & $chats));
```

## Brand Module

### chat.brand_dynamic_array
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/vendor_lhc/LiveHelperChat/Models/Brand/BrandMember.php  
**Line:** 43  
**Purpose:** Triggered to fill brand dynamic array.

```php
\erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.brand_dynamic_array', array('brand_member' => $this, 'dynamic_array' => & $chat_dynamic_array));
```

## Mail Archive Module

### mail.archived
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/vendor_lhc/LiveHelperChat/Models/mailConv/Archive/Range.php  
**Line:** 175  
**Purpose:** Triggered after mail is archived.

```php
\erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.archived',array('mail' => & $item, 'archive' => $this));
```

### mail.set_archive_tables
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/vendor_lhc/LiveHelperChat/Models/mailConv/Archive/Range.php  
**Line:** 206  
**Purpose:** Triggered to set archive tables.

```php
\erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.set_archive_tables', array('archive' => & $this));
```

### mail.create_archive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/vendor_lhc/LiveHelperChat/Models/mailConv/Archive/Range.php  
**Line:** 370  
**Purpose:** Triggered to create archive.

```php
\erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.create_archive', array('archive' => & $this));
```

## Reaction Helper

### chat.reaction_operator
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/vendor_lhc/LiveHelperChat/Helpers/Reaction.php  
**Line:** 115  
**Purpose:** Triggered on reaction by operator.

```php
\erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.reaction_operator', array(
```

## Mail conversation message model

### mail.message.after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvmessage.php  
**Line:** 99  
**Purpose:** Triggered after mail message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.message.after_save',array(
```

### mail.message.after_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvmessage.php  
**Line:** 106  
**Purpose:** Triggered after mail message is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.message.after_update',array(
```

### mail.message.after_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvmessage.php  
**Line:** 112  
**Purpose:** Triggered after mail message is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.message.after_remove',array(
```

## Mail conversation model

### mail.conversation.after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvconversation.php  
**Line:** 97  
**Purpose:** Triggered after mail conversation is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation.after_save',array(
```

### mail.conversation.after_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvconversation.php  
**Line:** 104  
**Purpose:** Triggered after mail conversation is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation.after_update',array(
```

### mail.conversation.after_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhmailconv/erlhcoreclassmodelmailconvconversation.php  
**Line:** 111  
**Purpose:** Triggered after mail conversation is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('mail.conversation.after_remove',array(
```

## Canned message tag link

### chat.workflow.canned_message_replace
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelcannedmsgtaglink.php  
**Line:** 180  
**Purpose:** Triggered to replace canned message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.canned_message_replace', array(
```

## Chat archive range

### chat.archived
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php  
**Line:** 185  
**Purpose:** Triggered after chat is archived.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.archived',array('chat' => & $item, 'archive' => $this));
```

### chat.set_archive_tables
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php  
**Line:** 218  
**Purpose:** Triggered to set archive tables.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.set_archive_tables', array('archive' => & $this));
```

### chat.create_archive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatarchiverange.php  
**Line:** 427  
**Purpose:** Triggered to create archive.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.create_archive', array('archive' => & $this));
```

## Chat incoming webhook

### chat.incoming_dynamic_array
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincomingwebhook.php  
**Line:** 71  
**Purpose:** Triggered to fill incoming chat dynamic array.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.incoming_dynamic_array', array('incoming_chat' => $incomingData, 'dynamic_array' => & $chat_dynamic_array));
```

## Chat blocked user

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatblockeduser.php  
**Line:** 219  
**Purpose:** Triggered before message is saved by admin.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $params['chat'], 'user_id' => $params['user']->id));
```

## Chat online user

### chat.online_user.after_save
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 87  
**Purpose:** Triggered after online user is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.online_user.after_save',array(
```

## Chat Module

### chat.online_user.after_update
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 94  
**Purpose:** Triggered after an online user is updated.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.online_user.after_update',array(
```

### chat.online_user.after_remove
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 100  
**Purpose:** Triggered after an online user is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.online_user.after_remove',array(
```

### onlineuser.before_proactive_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1114  
**Purpose:** Triggered before a proactive chat invitation is triggered for an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.before_proactive_triggered', array('ou' => & $item, 'errors' => & $errors));
```

### onlineuser.before_store_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1128  
**Purpose:** Triggered before a chat is stored for an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.before_store_chat',
```

### onlineuser.created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1137  
**Purpose:** Triggered after an online user is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.created', array('tpl' => (isset($paramsHandle['tpl']) ? $paramsHandle['tpl'] : false), 'ou' => & $item));
```

### onlineuser.pageview_logged
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1139  
**Purpose:** Triggered after a page view is logged for an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.pageview_logged', array('url_changed' => ($locationPrevious !== $item->current_page), 'tpl' => (isset($paramsHandle['tpl']) ? $paramsHandle['tpl'] : false), 'ou' => & $item));
```

### chat.data_changed_chat
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1143  
**Purpose:** Triggered when chat data is changed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.data_changed_chat', array('chat_id' => $item->chat_id));
```

### onlineuser.handle_request
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuser.php  
**Line:** 1147  
**Purpose:** Triggered when handling a request from an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.handle_request', array('new_visitor' => $newVisitor, 'returning_visitor' => $returningVisitor, 'online_user' => $item, 'params' => $paramsHandle));
```

### onlinefootprint.created
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuserfootprint.php  
**Line:** 102  
**Purpose:** Triggered after an online user footprint is created.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlinefootprint.created', array('item' => & $item));
```

### online.assign_chat_to_pageviews
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatonlineuserfootprint.php  
**Line:** 108  
**Purpose:** Triggered when assigning a chat to page views.

```php
$statusWorkflow = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('online.assign_chat_to_pageviews',array('online_user' => & $onlineUser));
```

### file.remove_file
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatfile.php  
**Line:** 49  
**Purpose:** Triggered when a chat file is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.remove_file', array('chat_file' => & $this));
```

### chat.workflow.canned_message_filter
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelcannedmsg.php  
**Line:** 290  
**Purpose:** Triggered when filtering canned messages in a chat workflow.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.canned_message_filter', array(
```

### chat.workflow.canned_message_replace
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelcannedmsg.php  
**Line:** 393  
**Purpose:** Triggered when replacing canned messages in a chat workflow.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.workflow.canned_message_replace', array(
```

### chat.dynamic_array
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php  
**Line:** 564  
**Purpose:** Triggered to populate chat dynamic array.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.dynamic_array', array('chat' => $this, 'dynamic_array' => & $chat_dynamic_array));
```

### chat.incoming_dynamic_array
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhchat/erlhcoreclassmodelchatincoming.php  
**Line:** 61  
**Purpose:** Triggered to populate incoming chat dynamic array.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.incoming_dynamic_array', array('incoming_chat' => $this, 'dynamic_array' => & $chat_dynamic_array));
```

### user.remove_photo
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhuser/erlhcoreclassmodeluser.php  
**Line:** 197  
**Purpose:** Triggered before user photo is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.remove_photo', array('user' => & $this));
```

### user.remove_photo
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhgenericbot/erlhcoreclassmodelgenericbotbot.php  
**Line:** 129  
**Purpose:** Triggered before generic bot photo is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.remove_photo', array('user' => & $this));
```

### user.remove_photo
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhgenericbot/erlhcoreclassmodelgenericbottrgroup.php  
**Line:** 88  
**Purpose:** Triggered before generic bot trigger group photo is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.remove_photo', array('user' => & $this));
```

### feature.can_use_proactive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 129  
**Purpose:** Triggered to check if proactive chat invitation can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_proactive', array('object_meta_data' => & $metaData));
```

### onlineuser.proactive_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 422  
**Purpose:** Triggered when a proactive chat invitation is triggered for an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.proactive_triggered', array('message' => & $message, 'variation' => & $messageContent, 'ou' => & $item));
```

### onlineuser.proactive_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 921  
**Purpose:** Triggered when a proactive chat invitation campaign is triggered for an online user.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('onlineuser.proactive_triggered', array('campaign' => & $campaign, 'variation' => & $messageContent, 'message' => & $message, 'ou' => & $item));
```

### theme.download_image.\* 
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 1028  
**Purpose:** Triggered when a theme image is downloaded.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.download_image.'.$attr, array('theme' => $this, 'attr' => $attr));
```

### theme.edit.\*_path 
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 1043  
**Purpose:** Triggered when a theme edit path is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.'.$attr.'_path',array('dir' => & $dir, 'storage_id' => $this->id));
```

### theme.edit.store_\* 
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 1061  
**Purpose:** Triggered when a theme edit store is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.store_'.$attr,array(
```

### theme.edit.remove_\*
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatinvitation.php  
**Line:** 1084  
**Purpose:** Triggered when a theme edit remove is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.remove_'.$attr,array(
```

### feature.can_use_proactive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatevent.php  
**Line:** 56  
**Purpose:** Triggered to check if proactive chat event can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_proactive', array(
```

### feature.can_use_proactive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatvariables.php  
**Line:** 45  
**Purpose:** Triggered to check if proactive chat variables can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_proactive', array('object_meta_data' => & $metaData));
```

### lhabstract.erlhabstractmodelwidgettheme.getstate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 110  
**Purpose:** Triggered to get widget theme state.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('lhabstract.erlhabstractmodelwidgettheme.getstate',array('state' => & $stateArray, 'object' => & $this));
```

### theme.download_image.\*
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 127  
**Purpose:** Triggered when a theme image is downloaded.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.download_image.'.$attr, array('theme' => $this, 'attr' => $attr));
```

### theme.edit.\*_path
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 142  
**Purpose:** Triggered when a theme edit path is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.'.$attr.'_path',array('dir' => & $dir, 'storage_id' => $this->id));
```

### theme.edit.store_\*
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 162  
**Purpose:** Triggered when a theme edit store is accessed.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.store_'.$attr,array(
```

### theme.edit.remove_\*
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 185  
**Purpose:** Triggered when a theme edit remove is accessed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.edit.remove_'.$attr,array(
```

### feature.can_use_themes
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelwidgettheme.php  
**Line:** 210  
**Purpose:** Triggered to check if themes can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_themes', array('object_meta_data' => & $metaData));
```

### file.remove_file (AdminTheme)
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeladmintheme.php  
**Line:** 81  
**Purpose:** Triggered before admin theme file is removed.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('file.remove_file', array('chat_file' => & $std, 'files_path_storage' => 'images_path' ));
```

### feature.can_use_autoresponder
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponder.php  
**Line:** 140  
**Purpose:** Triggered to check if auto responder can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_autoresponder', array('object_meta_data' => & $metaData));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponder.php  
**Line:** 471  
**Purpose:** Triggered before auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true, 'msg' => & $newMessage, 'chat' => & $chat));
```

### chat.validate_canned_msg_user_departments
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponder.php  
**Line:** 754  
**Purpose:** Triggered to validate canned message user departments.

```php
$response = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.validate_canned_msg_user_departments',array('canned_msg' => & $cannedMessage, 'errors' => & $Errors));
```

### feature.can_use_forms
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelform.php  
**Line:** 84  
**Purpose:** Triggered to check if forms can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_forms', array('object_meta_data' => & $metaData));
```

### feature.can_use_subject
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelsubject.php  
**Line:** 51  
**Purpose:** Triggered to check if subject can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_subject', array('object_meta_data' => & $metaData));
```

### feature.can_use_proactive
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodeleproactivechatcampaign.php  
**Line:** 54  
**Purpose:** Triggered to check if proactive chat campaign can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_proactive', array(
```

### feature.can_use_product
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelproduct.php  
**Line:** 49  
**Purpose:** Triggered to check if product can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_product', array('object_meta_data' => & $metaData));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 60  
**Purpose:** Triggered before auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('ignore_times' => true, 'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_msg_admin_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 93  
**Purpose:** Triggered before admin message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('no_auto_events' => true, 'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.web_add_msg_admin
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 95  
**Purpose:** Triggered when a web admin adds a message.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.web_add_msg_admin', array('no_auto_events' => true, 'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_auto_responder_triggered
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 111  
**Purpose:** Triggered before auto responder is triggered.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_triggered', array(
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 165  
**Purpose:** Triggered before auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true, 'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 227  
**Purpose:** Triggered before auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true,'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 259  
**Purpose:** Triggered before auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true,'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.redirected_to_survey_by_autoresponder
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 273  
**Purpose:** Triggered when chat is redirected to survey by auto responder.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.redirected_to_survey_by_autoresponder',array('chat' => & $this->chat));
```

## Chat Module

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 304  
**Purpose:** Triggered before an auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true,'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 352  
**Purpose:** Triggered before an auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true,'msg' => & $msg, 'chat' => & $this->chat));
```

### chat.before_auto_responder_msg_saved
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelautoresponderchat.php  
**Line:** 403  
**Purpose:** Triggered before an auto responder message is saved.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_auto_responder_msg_saved', array('no_auto_events' => true, 'ignore_times' => true, 'msg' => & $msg, 'chat' => & $this->chat));
```

## Feature Module

### feature.can_use_survey
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelsurvey.php  
**Line:** 169  
**Purpose:** Triggered to check if a survey can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_survey', array('object_meta_data' => & $metaData));
```

## Abstract Module

### abstract.survey_edit_validate
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelsurvey.php  
**Line:** 229  
**Purpose:** Triggered to validate survey edit.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('abstract.survey_edit_validate', $params);
```

### feature.can_use_product
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelrestapikeyremote.php  
**Line:** 45  
**Purpose:** Triggered to check if a product can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_product', array('object_meta_data' => & $metaData));
```

### feature.can_use_product
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelrestapikey.php  
**Line:** 45  
**Purpose:** Triggered to check if a product can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_product', array('object_meta_data' => & $metaData));
```

## Form Module

### form.remove_file
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelformcollected.php  
**Line:** 100  
**Purpose:** Triggered when a file is removed from a form.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('form.remove_file', array('filepath' => $content['filepath'], 'filename' => $content['filename']));
```

## Browse offer Module

### feature.can_use_browse_offers
**File:** https://github.com/LiveHelperChat/livehelperchat/tree/cf4ff02ac116cc7b99f8192bb6d7a378c3a31aec/lhc_web/lib/models/lhabstract/erlhabstractmodelbrowseofferinvitation.php  
**Line:** 206  
**Purpose:** Triggered to check if browse offers can be used.

```php
erLhcoreClassChatEventDispatcher::getInstance()->dispatch('feature.can_use_browse_offers', array('object_meta_data' => & $metaData));
```


