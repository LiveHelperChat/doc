---
id: priority
title: Chat Priority
sidebar_label: Priority
---

Priority determines the position of a chat in the pending chat list. The higher the priority, the faster the chat will be automatically assigned. Chat priority can be set in three ways:

1.  Via [embed code](javascript-arguments.md)
2.  Inheriting from [department priority](department/department.md#priority-used-for-chats-priority)
3.  Defining a priority condition in `System configuration > Live Help configuration > Chat priority`

## Via Embed Code

While inheriting priority from a department does not require any additional actions from the administrator (except setting the desired priorities), using the embed code requires an additional attribute. Here is an example of embed code with the priority set to 5, which overrides the department priority.

### New widget

In this case priority is set to 5

```js
<script>var LHC_API = LHC_API||{};
LHC_API.args = {
mode:'widget',
lhc_base_url:'//demo.livehelperchat.com/',
wheight:450,
wwidth:350,
pheight:520,
pwidth:500,
leaveamessage:true, 
priority:5
};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var date = new Date();po.src = '//demo.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
```


### Old widget

In this case priority is set to 5

```js
<script type="text/javascript"> (function() { 
var po = document.createElement('script'); 
po.type = 'text/javascript'; 
po.async = true; 
var refferer = (document.referrer) ? encodeURIComponent(document.referrer) : ''; 
po.src = 'http://demo.livehelperchat.com/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(priority)/5?r='+refferer;
var s = document.getElementsByTagName('script')[0]; 
s.parentNode.insertBefore(po, s); })(); 
</script>
```

## Heritage from department priority

Please refer to [department priority](department/department.md#priority-used-for-chats-priority) attribute

## Setting transfer to department

In this configuration chat department will be set to brand department with role `food` independently in which shop customer started a chat. We are also checking [condition](bot/conditions.md). We also check that transfer can happen only if present department role is `support`. E.g. bot has changed department to some other than `support`

![](/img/department/brand-chat-priority.png)

## Define priority condition 

This can be defined in
> System configuration > Live Help configuration > Chat priority

Example. Means all visitors with Europe/Helsinki timezone should get 101 as priority.

![Chat priroity by attribute](/img/chat/chat-priority-variable.png)

There is in total three types of variables you can try to check against

 * `lhc.<variable>` - you can find possible attributes definition in [https://api.livehelperchat.com](https://api.livehelperchat.com) under Models section.
 * `additional_data.<custom_variable_passed>` - E.g additional_data.gender
 * `chat_variable.<extension_variable>`

Important things

* Default rules apply order `dep_id DESC, sort_priority DESC, priority DESC` first we try to apply department rules only after that global ones.
* If rule is matched other rules are ignored.
* If you update one of the chat attributes, chat priority is modified but not department after chat has started.
* Chats are auto assigned in this order - `priority DESC, id ASC`. Chat with higher priority is assigned first.



## Permissions

Required permission

> 'chat','administratechatpriority'
