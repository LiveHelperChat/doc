---
id: offline
title: Offline messaging
sidebar_label: Offline messaging
---

## Default Behavior

By default, the "leave a message" functionality is enabled in the generated embed code. In the embed code generation window, if you uncheck:

> Show a ‘leave a message form’ when there are no online operators

the widget will be hidden when the chat is offline. If you enable the following option in the "[Start chat form settings](start-chat-form-settings.md)" page:

> Enable leave a message functionality automatically if there are no online operators

the offline widget will be shown again. Therefore, you can generate the embed code without enabling the "leave a message" functionality initially and enable it later in the start chat form settings page. The offline widget looks like this:

![Offline widget](/img/chat/offline-widget.png)

## Disable the offline message for a widget

*   Generate embed code without selecting `Show a ‘leave a message form’ when there are no online operators`.
*   Ensure that `Enable leave a message functionality automatically if there are no online operators` is **not** selected in the "[Start chat form settings](start-chat-form-settings.md)".
*   The widget should now be hidden if there are no online operators.

## How to show a custom message if there is no online operators?

This scenario is useful if you want to display a status widget and show a custom message when the widget is opened and no operators are online.

*   Ensure that `Enable leave a message functionality automatically if there are no online operators` **is** selected in the "[Start chat form settings](start-chat-form-settings.md)".
*   In the "Disable conditions" section, check `Disable conditions`.
*   Click `Add conditions` and add a condition like `{args.is_online} = 0`.
*   Enter your custom message in the `Show this message to the visitors who opens a chat widget` field.

## Disable the offline message for a static url

You will see a message saying `Chat is currently unavailable. Please try again later.` in those scenarios

*   If you specify a single department, such as:

    > https://example.com/chat/start/(department)/1

    and that department is offline, and you do **not** include `/(leaveamessage)/true` in the URL or have `Enable leave a message functionality automatically if there are no online operators` selected, you should see the following:

    ![Offline single](/img/chat/offline-single.png)

*   If you specify more than one department, or do not specify any department:

    The offline message form will **always** be shown, even if you do not specify a department.

:::caution
This behavior is subject to change in future releases to respect offline request settings per department.
:::

## Widget behaviour

If there is at least one online operator, the widget will be shown as online. In the department dropdown, offline departments will be marked as offline.

![Offlime multiple departments](/img/chat/offline-multi.png)

*   If you select an offline department, you will immediately see the offline form.
*   If you only specify one department, the department option will be hidden.

## Defining recipient
 
You can also edit the email template in the "E-mail templates" section.

*   Recipient decision order:
    *   If the department has an assigned email address, this email address will receive the requests.
    *   If the department does not have an assigned email address, the system checks if the email template has a recipient field filled.
    *   If none of the above conditions are met, the email is sent to the first user in the users list, which is typically the administrator.

## Redirecting user manually from chat to contact form

![Redirect to contact](/img/files/redirect-contact.jpg)

Required permission for operators to use this feature:

> 'lhchat','redirectcontact'

## How to Redirect a User to the Contact Form if a Chat is Not Accepted Within a Certain Time

Simply edit the department and set the number of seconds after which the user should be redirected to the "leave a message" form.

![](https://livehelperchat.com/var/media/images/redirect.png)

As a bonus, you can implement the following advanced workflow:

* Use an auto-responder to send a "please wait" message.
* Set up a delayed responder to inform the user after 30 seconds (if the chat is not accepted) that they will be redirected to the "leave a message" form.
* Configure the system to redirect the user to the offline form after 35 seconds.

This workflow can be further enhanced by transferring the chat to another department first and then showing the feedback form. In that case, the "Rejected" department must be configured to redirect the user to the feedback form.

## How do not prefill an offline message?

*   Create a widget theme in the back office.
*   Set it as the default theme.
*   In the theme edit page, under `Widget container`, select `Do not prefill offline message with chat messages`.

## How to Redirect a Visitor to the Offline Form from a Bot

If there are no online operators, you can use the following trigger:

> `Update current chat` -> `Update main chat attribute` -> and in `Chat attribute name` enter `status_sub` and value enter `2`

Internally, this sets `const STATUS_SUB_CONTACT_FORM = 2;`

You can also redirect a visitor to a survey using:

`const STATUS_SUB_SURVEY_SHOW = 5;`

## How to Redirect a Visitor to the Offline Form if No One Accepts a Chat Within a Defined Time

See the video tutorial: https://www.youtube.com/watch?v=mqXDCwGy3U8

The basic steps are:

* Set up an auto-responder (optional).
* Edit the department settings: `Delay in seconds before leave a message form is shown. 0 Means functionality is disabled`.

That's it! :)

## How to Redirect a User to a Custom Page When They Click on the Offline Widget

If you want to redirect a user to a specific page when your operators are offline, you can adjust your embed code and append a redirect URL. For example:

```
offline_redirect: 'https://livehelperchat.com', // Redirect user to this page if chat is offline | Optional
```

### New Widget

Please refer to the [javascript arguments](javascript-arguments.md) page.

### Old Widget

```js
<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptions.opt = {offline_redirect:'http://google.com'};

(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var refferer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
//po.src = '//demo.livehelperchat.com/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(hide_offline)/true/(department)/4?r='+refferer+'&l='+location;
po.src = '//demo.livehelperchat.com/chat/getstatus/(click)/internal/(position)/bottom_right/(check_operator_messages)/true/(top)/350/(units)/pixels?r='+refferer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```

## Offline Settings

You can also configure several options related to offline message storage under:

> System configuration > Live Helper Configuration > Offline settings

![Offline settings](/img/chat/offline-settings.jpg)

## Tracking Offline Messaging Statistics

If you have not selected the option `Automatically change offline chat status to closed`, the main chat status `status_sub` will likely change from 7 (offline request) to another status upon chat acceptance or closure, which will mix the statistics.

To accurately track offline chats, you can:

*   Select `Automatically change offline chat status to closed` in `Offline settings`.
*   Listen for the `chat.chat_offline_request_saved` event and add a subject to the chat.

![Offline settings](/img/chat/offline-saved-request.png)

The bot trigger adds a subject with ID 12 (replace with your own ID) to the chat.

![Offline request subject](/img/chat/offline-request-subject.png)

## What Happens if Both Departments are Set to `Visible only if online`?

The email and offline request will be assigned to the very first defined department.

## Replaceable variables in offline chat message and e-mail template

* `{args.input_data.*}` - hold direct visitor entered data.
* `{args.chat.phone}, {args.input_data.email}, {args.input_data.username}` - if you are prefilling variables via JS it will be overridden by it. So it won't hold visitor entered data. If you are not prefilling vars via JS it's safe just to use `{args.chat.*`
* `{args.chatprefil.*}` - holds original chat data
* `{args.chat.*}` - holds chat data where it's data is set from visitor entered data.

Sample of offline chat message content

```
[b]Visitor query[/b]:
{args.question}

[b]Phone[/b]: {args.chat.phone} | {args.input_data.phone}
[b]E-mail[/b]: {args.chat.email} | {args.input_data.email}
[b]Nick[/b]: {args.chat.nick} | {args.input_data.username}
[b]Additional data[/b]: {args.chat.additional_data}
```

Offline mail message

The Same logic applies as for offline chat message.

```
Hello,

===========
{args.chatprefill.chat_variables_array.is_verified__not_empty__[⛊ Verified ⛊️]} Chat details
===========
Chat ID - {args.chatprefill.id}
Name - {args.chatprefill.nick}
E-mail - {args.chatprefill.email}

===========
[Unverified details] Request details
===========
Name: {name} | {args.input_data.username}
Email: {email} | {args.input_data.email}
Phone: {phone} | {args.input_data.phone}
Department: {department}
Country: {country}
City: {city}
IP: {ip}

Message:
{message}

URL of page from which user has send request:
{url_request}

Link to chat if any:
{prefillchat}

Sincerely,
Live Support Team
```


## Permissions

Required permissions to manage offline settings:

> 'lhsystem', 'offlinesettings'
