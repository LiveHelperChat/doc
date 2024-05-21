---
id: commands
title: Commands
---

Command's allows using any client web, desktop or XMPP if you have configured it to execute specific actions against user.

At the moment these commands are implemented

*   !name `<user name>`
    *   Sets user name
*   !email `<email>`
    *   Sets user e-mail
*   !transferforce `<operator username||operator email>`
    *   Transfer chat directly to another operator by operator username or e-mail
*   !phone `<user phone>`
    *   Sets user phone
*   !goto `<url>`
    *   Redirects user to specified url
*   !translate
    *   Starts translation process. P.s Works only in web client.
*   !screenshot
    *   Takes user screen screenshot. Then screenshot will be ready link to file will be written by system assistant.
*   !contactform
    *   Redirect user to contact form
*   !block
    *   Blocks user
*   !close
    *   Closes a chat
*   !closed
    *   Closes chat dialog, but leaves chat status as it was. Only web interface supported.
*   !delete
    *   Deletes chat
*   !pending
    *   Changes chat status to pending
*   !active
    *   Changes chat status to active
*   !remark `<your comments about a chat>`
    *   Add remarks to chat
*   !info
    *   Returns all available information about use. Usefull in XMPP client to know more about visitor.
*   !help
    *   Returns all possible commands list
*   !note `<your comment>`
    *   Stores operator comment for future reference
*   !hold
    *   Set chat status to hold status, so auto responder will be stopped.
*   !gotobot
    *   Transfer chat to bot. Chat status will be changed to bot chat.
* !files
    * Enables files upload for a particular chat if general files upload is disabled. Default message text looks like
      `I have enabled files upload for you. [fupload]Upload a file[/fupload].`
    * If you want multilanguage support you can just create a canned message with content like
      `!files I have enabled files upload for you. [fupload]Upload a file[/fupload].`
    * It's possible to enable files upload without any message by sending command like
      `!files no`
* !stopfiles
    * Disables files upload if it was enabled before by `!files` command. Default message looks like
      `Files upload was disabled!`
    * You can have custom message by sending
      `!stopfiles files upload was disabled`
    * To disable files upload without any message for the visitor
      `!stopfiles no`
* !modal `<form_id>` `<explain>`
    * Will show a form module form with passed id and will write a passed explain. Explain is optional.
* !modal `https://example.com`
    * You can pass external URL also. More documentation [here](modules/forms.md)

## Sub-commands

While defining commands you can put in subfield these values

* `--silent` - we will not store a system message which command was executed
* `--update_status` - we will update chat interface right column. E.g if your trigger sets as subjects.

## Bot commands

You can define custom command

* based on `bot` `trigger`.
* Or define shortcut for existing commands

> System configuration -> Live help configuration -> Bot -> Commands

* Each command then will be available in admin chat interface.
* Custom commands can be implemented in extensions also.

> !arguments first --arg second --arg third

If a text message is defined as

```
1. - {args.arg_1} {arg_1}
2. - {args.arg_2} {arg_2}
2. - {args.arg_3} {arg_3}
```

Output will be

```
1. - first first [first argument]
2. - second second [second argument]
2. - third third [third argument]
```

### How to dispatch custom event and listen in lhc extension

Just use `Update current chat > Dispatch Event` command.

In `bootstrap.php` listen for this event

```php
$dispatcher->listen('chat.genericbot_chat_command_dispatch_event', array($this,'listenDispatchEvent');
```

```php
public function listenDispatchEvent($params) {
    if ($params['action']['content']['payload'] == 'my_command.custom_command') {
        // Your code in the extension
    }
}
```

### How to listen for args in REST API Calls

In Rest API call you can access argument like

```
// json_encode output
{{args.arg_1}} 
{{args.arg_2}}

// Raw output
raw_{{args.arg_1}}
raw_{{args.arg_2}}
```

### UI to call command directly from chat

Since 4.37v it's possible to call command directly from a chat window.

![](/img/bot/bot-command.png)

Required permissions

> 'lhchatcommand', 'use'