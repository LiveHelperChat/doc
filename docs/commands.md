---
id: commands
title: Commands
---

Commands allows using any client web, desktop or XMPP if you have configured it to execute specific actions against user.

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
* !files 
    * Enables files upload for a particular chat if general files upload is disabled. Default message text looks like
    `I have enabled files upload for you. [fupload]Upload a file[/fupload].`
    If you want multilanguage support you can just create a canned message with content like
    `!files I have enabled files upload for you. [fupload]Upload a file[/fupload].`
* !stopfiles
    * Disables files upload if it was enabled before by `!files` command

Custom commands can be implemented in extensions also.