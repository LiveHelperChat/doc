---
id: proactive
title: Proactive chat invitation
sidebar_label: Proactive
---

Proactive invitations triggers messages which are automatically send to a visitor.

*   Invitation tab
    *   "Name for personal purposes" - just enter a name. Will be used only for personal purposes
    *   "Operator name" - what name should we shown as operator.
    *   "Position" - invitation priority in other words. Invitations with lower value has higher priority. If two invitations are matched. Invitation with lower position value will be shown to visitor.
    *   "Language, leave empty for all. E.g lit, rus, ger etc..." - Live Helper Chat in which user is visiting site. siteaccess or language in other words. Usefull if for different language visitors you want to show different messages.
    *   "Time on site in seconds" - how much time user has to spend on site for invitation to be triggered.
    *   "Pageviews" - Number of pageviews user has to make for invitation to be triggered.
    *   "Referrer domain without www, E.g google keyword will match any of google domain" - self explanatory
    *   "How many times user show invitation, 0 - untill users closes it, > 0 limits." - how many times show invitation to visitor once invitation is triggered.
    *   "Show random operator profile" - if checked will show random logged operator profile.
    *   "Enter operators IDs from whom random operator should be shown, separated by comma" - if you want to show random operator profile just from specific list. You can enter these operator's id's.
    *   "Identifier, for what identifier this message should be shown, leave empty for all" - Identifier, by this identifier you can filter for what embed codes this invitation is active. During embed code generaetion you have to use same identifier. That way you can have separate messages for separate identifiers.
    *   "Tag" - show invitation only for specifically tagged online visitors. (**Tutorial pending**)
    *   "Department" - show invitation only for visitors where department is provided in embed code. Otherwise invitation won't be triggered. In embed code generation you have to choose department.
    *   "Message to user" - message to be send to visitor.
    * `Show everytime it is match` - widget content will be shown even if visitor closes a chat. Widget content will remain the widget itself, but widget won't be auto opened or invitation bubble shown.
    * `Do not show invitation after it was closed in the same session.` - this applies only if `URL to match. Multiple URL can be defined by comma. Wildcard is supported at the end of URL` is used.
    * `Show next matching invitation if URL changes and present invitation was closed` - if during navigation URL changes and we have already invitation being closed. Show the next invitation. By default, we would show only one invitation.
    * `Invitation is visible only if URL matches` - activate this option if you are entering url to match.
    * `Show widget on invitation to chat. Applies only to desktop devices.` - by default we are showing bubble with invitation message. You can show the full widget.
      * `If shown invitation was closed, next time show it minimized.` - if `Show everytime it is matched` we want next time if invitation/widget was closed show it in content instead of popup widget again.

```
[html]
<img src="{proactive_img_1}" alt="" />
[/html]
```

* This field can use replaceable variables like `{lhc.var.<variable key>}` (invisible by operator) `{lhc.add.<variable key>}` (visible by operator)
    * Sample with html syntax support.
    *   "Message to returning user" - If we detect that it's not the first time invitation is triggered for online visitor then we check is this message filled. This message field can have {nick} variable. It will be replaced with previous chat nick.
    *   "Nick which will be used if we cannot determine returning user name" - self explanatory
    *   "Wait message. Visible then users starts chat and is waiting for someone to accept a chat." - self explanatory
    *   "Wait timeout. Time in seconds before timeout message is shown." - How long should we wait before timeout message is shown. During this interval usually operator should accept a chat.
    *   "Show visitor this message then wait timeout passes." - if operator does not accept a chat for "Wait timeout" time. Show visitor this message.
    *   "How many times repeat message?" - how many times repeat wait timeout message. Message will be repeated every "Wait timeout" times.
*   Dynamic (this dynamic invitation. All above conditions also has to be met)
    *   "This is dynamic invitation" - Marks invitation as dynamic
    *   "Choose a dynamic event"
        *   "Mouse leaves a browser window" - invitation is triggered once visitor leaves a browser window.
        *   "Visitor idle N seconds on site" - how many sites we should not detect any mouse movemenet for invitation to be triggered. Value is entered in bellow field.
    *   "Show invitation if visitor is iddle for n seconds"
*   Events (event's condittions has to be met. Also above standard conditions has to be met). 
    *   "Event" - choose from defined events.
    *   "Min number of times" - how many times event has to be detectd in "During last N seconds"
    *   "During last N seconds" - interval during which "Min number of times"
* Design
  * New widget options
    * `Custom CSS, applies also to invitation bubble`
      * You can apply custom CSS to bubble using this section.
```css
.proactive-need-help{
    background-color: blue!important;
    padding: 0px!important;
}

#invitation-close-btn{
    color: blue;
}
```

"Events" and "Dynamic invitations" cannot be used at the same time!

## Conversion

Conversion allow to have custom conversion based on your own logic. This conversion happens not related was chat started or not.

Attributes

* `Conversion has to happen within this period of time after invitation was send/clicked.` - defines how long conversion has to happen to be considered as a success. 
* `Event id to receive from website for conversion to finish.` - defines event id we expect to receive from website. If `Event id` is defined as `ordered` we expect to 

```js
window.$_LHC.eventListener.emitEvent('addConversion',['ordered']);
```

or just receive conversion attribute in the args like

```
var LHC_API = LHC_API||{};
LHC_API.args = {
...
'conversion': 'ordered'
...
}
```

You will see conversion statistic in proactive invitation statistic modal window.

## Invitation widget

Invitation itself looks like.

![Proactive invitation](/img/chat/invitation.png)

Operator `Remigijus Kiminas` in this case, will be determined the following way

* You can set `Operator name` in proactive invitation itself. Usually it can be like site name. Because at this moment we still don't know what operator will accept a chat.
* If you do not set `Operator name` and do not use `Show random operator profile` you will see `Live Support` as a sender.
* You can also check `Show random operator profile` so random operator profile will be chosen as sender.

Message itself always comes from proactive chat invitation `Message to user` or `Message to returning user` fields.

## Invitation dimensions

 * Default invitation width is `200px` pixels. You can set invitation width in invitation `Design > Invitation message width` field.
 * Invitation height is calculated automatically. If for some reason you see a scrollbar you can use widget themes and define static height.

![Proactive height](/img/chat/proactive-height.png)

## Proactive invitations list 
![](https://livehelperchat.com/var/media/images/invitation_v2.jpg)

## Proactive chat's variables

They define what variables can be logged. Fields definition bellow

1.  "Name for personal purposes" - just a name
2.  "Identifier" - used in javascript call.
3.  "Do not store event if from last event has passed less than x seconds." - if from last logged event has not passed x seconds do not log it as new event.
4.  "Filter by value" - if checked. We will also check a value for unique event record.

## Example what can be done with "Events" show invitation if today's is user birthday

1.  First we have to define it in "Pro active chat variables"  
    ![](https://livehelperchat.com/var/media/images/birthday.jpg)
    1.  We set identifier as birthday
    2.  We set store timeout to 0 - this will avoid duplicate records. Because birthday does not have an expire time.
2.  First we have to define log event for online visitor. It's possible to do in two options.
    1.  Either call JS function - 
        New widget. `val` is optional
        ```js
        window.$_LHC.eventListener.emitEvent('addEvent',[[{id:"birthday",val:"value"}]]);
        ``` 
        Old widget
        ```js
        lh_inst.logEvent([{id:"birthday"}]);
        ```

    2.  Either define it in arguments
        New widget. `val` is optional
        ```js
        ...
        events:[{id:"birthday",val:"value"}],
        ...
        ```
        
        Old widget
        ```js
        LHCChatOptions.events = new Array();  
        LHCChatOptions.events.push({id:'birthday'});
        ```
3.  Next we have to configure proactive invitation events part like that
    1.  ![](https://livehelperchat.com/var/media/images/birthday(1).jpg)

This configuration means, that birthday has to be recorded as event atlast one time within 24 hours. 3600 (1 hour) * 24 hours in a day.

## Show invitation if login failed 5 times.

Everything is similar to above except.

![](https://livehelperchat.com/var/media/images/login_failed_variable.jpg)

This time we force to login event each time if from last login passed atleast 1 second.

And in proactive invitation itself configuration looks like

![](https://livehelperchat.com/var/media/images/login_failed_invitation.jpg)

Here we expect to show invitation if this event accoured minimum 5 times during last half hour.

## Example workflow with identifier

Let say we have two domains. example1.com and example2.com so here are the steps we have to do to have different messages for different domains

1.  Generate embed code and in identifier field put example1_com for example1.com domain
2.  Generate embed code and in identifier field put example2_com for example2.com domain
3.  Now got to proactive messages list and create new
    1.  For example1.com domain in identifier field enter example1_com as identifier. All others paratemers you can choose which you want.
    2.  For example2.com domain in identifier field enter example2_com as identifier. All others paratemers you can choose which you want.

That's all. Different domains will show different messages. Using this trick you can also show different messages not only by domain, but also by language etc.

## Triggering proactive invitation with a tag

We automatically check for matching invitation once you add a tag.

```js
window.$_LHC.eventListener.emitEvent('addTag',['some_tag']);
```

or to force show invitation always use `__reset` suffix

```js
window.$_LHC.eventListener.emitEvent('addTag',['some_tag__reset']);
```

With `postMessage` protocol

```js
window.parent.postMessage('lhc::addTag::["error_deposit"]','*');
```

### If invitation is triggered, would it be shown on another page?

* Yes, but only if those conditions are met
  * `How many times user show invitation, 0 - untill users closes it, > 0 limits.`
  * `Invitation expire time, after that period of time invitation will be hidden`

### I want the invitation content to be shown in the widget content after it was closed by visitor

Just check `Show everytime it is matched`.

You can control how long it's valid via

* `How many times user show invitation, 0 - untill users closes it, > 0 limits.` Has to be bigger than 0.
* `Invitation expire time, after that period of time invitation will be hidden` or just set expire time.

### My invitation even after closing is shown again on another page?

If you are using `Show everytime it is matched` it will be shown even if visitor minimizes a widget. So just don't check that option. `__reset` appendix will force to show invitation in any case.

Another option is to check In `Design` section `If shown invitation was closed, next time show it minimized.`

## FAQ

### How do I test my invitation rules?

Just find yourself in online visitors list and delete your row. Next time you refresh a page you will be seen as a new visitor.

### I do not get any sound on invitation?

* Sound for proactive invitation has to be enabled. See below item.
* Sound is played only once per session. Does not matter if you send a new manual invitation. You have to clear `lhc_invs` variable from your browser `Session Storage` to get a sound.

### How do I disable sound on proactive invitation?

Go to

> System configuration -> Chat configuration -> Online tracking

Uncheck `Play sound on invitation to chat.`

### I do not get any invitations?

Invitation will be shown automatically only if you 

Requirements in embed code and notices regarding manual invitations

* If you are sending messages manually to `Online Visitor` make sure your embed code was generated with chosen `Check for operator invitation messages` option. Without this option enabled invitations will be shown only after page refresh.
* If visitor has closed manual/automatic invitation, and you send a new manual invitation message it won't be delivered until next page refresh.
* If visitor has opened invitation, and you send another manual message old message will be overriden and will be shown only after page refresh.
* If to visitor is in automatic invitation mode (it was activated and visitor has not closed it), manual invitation won't be seen by visitor.
* How often check for an automatic or manual invitations are executed depends on `Synchronisation and sound settings` -> `Check for messages from the operators, interval in seconds` settings.

General requirements and most common configuration failures

* Department - if you have chosen department in embed code but did not assigned any to invitation rules. If you have not assigned any department in widget code generation make sure proactive invitation also has none
* Make sure languages matches. E.g you made invitation with language `/eng` but site is `/fre`
* Invitations are not send to visitor who is having chat at present time.
* If visitor had chat past 24 hours automatic invitation to him will not be shown. Timeout value can be changed in [chat configuration](chat/configuration.md#proactive-message-timeout-in-hours)
* If visitor has closed manual invitation automatic invitation also won't be shown for the next 24 hours.
* Best way to test invitation is one of these
    * Delete `lhc_per` cookie
    * Start new browsing session in incognito window.
* By default operator has to be online for invitation to be send. Widget has to be in online state.
* Make sure you have entered default message

### How to setup URL based invitations?

* Make sure you enter `URL to match. Multiple URL can be defined by comma. Wildcard is supported at the end of URL`
* You check those items
  * `Invitation is visible only if URL matches`
  * `Do not show invitation after it was closed in the same session.`
  * `Show next matching invitation if URL changes and present invitation was closed`

If you are combining general invitations with URL based make sure

 * Global invitation position is lower. E.g enter 10 as `Position`
 * Enter `*` as `URL to match. Multiple URL can be defined by comma. Wildcard is supported at the end of URL` So invitation will work on any URL
 * Check
   * `Invitation is visible only if URL matches`
   * `Do not show invitation after it was closed in the same session.`
   * `Show next matching invitation if URL changes and present invitation was closed`

### How proactive messages retargeting works?

Proactive messages retargeting. In returning message field you can enter {nick}, if we will find a previous chat associated with this online user, nick from previous chat will be used if not proactive invitation nick field value will be used.

* https://www.youtube.com/embed/DZ_s_6Qlyac general proactive invitation setup guide
* https://youtu.be/jUjgxy2EzzQ proactive invitation integration with a bot