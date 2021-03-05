---
id: rest-api
title: Rest API
---

## Introduction

This article explains how to use Rest API response type in bot. With this thing basically you can integrate any third party API without any coding.

In order to get all working you have to setup two things

* Rest API Call itself
* Bot trigger which will use that call
* See [example of integration](integrate-any-ai-without-coding.md)
* Also your AI can return directly [JSON for execution](trigger-body.md).

## Rest API Call

Rest API call building window is build such way that you can execute almost any request you want.

![](/img/bot/rest-api.png?v=1)

## Fields definition for Rest API

### Name

Name for your own purposes.

### Description

Description for your own purposes.

### Host

This should be not changing URL part. To this part always are appended `Sub URL` part.

### Add request

This button ads new request options to this API. You can have as many request as you want. Request name is visible in trigger method choosing dropdown.

## Request fields

### Name of the request

Visible in method choosing dropdown in trigger.

![](/img/bot/rest-api-method.png)

### Method

Just appropriate method type for the request

### Sub URL

URL to append to host. It can be one of the replaceable variables.

![](/img/bot/rest-api-trigger.png)

### Params

In `Params` section you define arguments which should be accessible as `GET` parameters.

### Authorization

If you are using authorization API. You can setup basic authorization methods there.

### Headers

These values will be added to header. They are combined like.

`<Key>: <value>`

### Body

Body can be send either as `RAW` also known as `JSON Body` or as regular `POST` parameters.

### User parameters

These parameters can be entered directly in bot trigger itself once method is chosen.

If you choose `Body Param` you can use this variable `Location/Key` as  replaceable variable in your body json content.

`{{<Location/Key>}}`

If you choose `Query` or `Body Post Param` key will be used as post/get parameter directly.

In Rest API

![](/img/bot/user-parameter-rest-api.png)

In the trigger it would look like

![](/img/bot/user-entered-parameter.png)

### Output parsing

Output parsing is dedicated to extracting usefull variables from API response.

#### Name
Name will be visible within option to execute specific trigger based on response.

![](/img/bot/expected-output-name.png)

In the trigger it will be visible here

![](/img/bot/response-found.png?v=2)

#### HTTP status code E.g 200,301,500

For this response to match you can define expected HTTP status code. It's optional. This way you can separate success response from failed one.

#### Response Location 1/2/3/4/5/6.

If you define success location it will parse response as JSON and will try to extract specified attribute.

Examples of variables extraction

`status` as location value would return `success`
```json
{
  "status": "success"
}
```

`response:location` as location value would return `Lithuania`
```json
{
  "response": {
    "location" :  "Lithuania"
  }
}
```

`items:0:name` as location value would return `Sub item name`

```json
{
  "items": [
    {
      "name" :  "Sub item name"
    }
  ]
}
```

`links:link:[type=forms]:url` as location value would return element where type is forms

```json
{
    "links": {
        "link": [
            {
                "type": "prices",
                "url": {},
                "chat_message": "We do not have that information available online.   We could follow up with you directly to discuss."
            },
            {
                "type": "forms",
                "url": "https://livehelperchat.com",
                "chat_message": "You can view and download our forms on this page"
            }
        ]
    }
}
```

##### Parsing array for the output

* `user_info:phones^implode=={n}` would output phones array combined with new line character.
* `user_info:phones^implode==[b]{item}[/b]{n}` would output phones array wrapper with bold and new line character

```json
{
    "user_info": {
        "phones": [
            "111111",
            "222222"
        ]
    }
}
```

#### Conditions checking

Sometimes it makes sense to check was something found based on response attribute. So you can define condition to check.

Here we expect that `status` value would be success.

![](/img/bot/rest-api-conditions.png)

JSON should look like this

```json
{
  "status": "success"
}
```

#### Meta msg location.

Here we can extract meta_msg if you provide Live Helper Chat compatible JSON response. Meta message will be used in chosen response trigger [**text message**] if this trigger does not have any meta message information.

```json
{
    "msg": "Standard message text from REST API",
    "meta_msg": {
        "content": {
            "quick_replies": [
                {
                    "type": "button",
                    "content": {
                        "name": "Rest API Button",
                        "payload": "rest_api_button"
                    }
                }
            ]
        }
    }
}
```

In order for rest API to receive these clicks you should also check in trigger [Default for unknown button click](triggers.md#trigger)

:::tip
Each trigger at the bottom has `Show code` button. This code is supported **only** by [`Execute trigger body`](trigger-body.md) response type. If you just want to build trigger and get code for response and reuse it, it's the response type you should use instead.
:::

### Conditions

Only if these conditions are met we will send Rest API request. Usefull in webhook cases.

Let say you want to send request only if chat happened with a bot?

Condition for that chat could look like

![](/img/bot/bot-closed-chat.png)

## Replaceable variables

Rest API in value fields you can use these replaceable variables

All chat messages. These combinations are usefull in case you are implementing sentimetn analysis and want for example determine the sentiment of operator/visitor or both messages:

* `{{msg_clean}}` - user message without `[file=616_6f13fafc726e119f5a0a3f49221b45f7]` in it's body if it's the only content in message.
* `{{msg_all_content}}` - all messages without `[<date>] [<nick>]` prefix within each message. System messages are not printed.
* `{{msg_all_since_transfer_content}}` - Messages since chat was transferred to operator. All messages without `[<date>] [<nick>]` prefix within each message. System messages are not printed.
* `{{msg_all_op_msg_content}}` - All operator messages in the chat. All messages without `[<date>] [<nick>]` prefix within each message.
* `{{msg_all_vis_msg_content}}` - All visitor messages in the chat. All messages without `[<date>] [<nick>]` prefix within each message.
* `{{msg_all_vis_since_transfer_content}}` - All visitor messages in the chat since operator took over the chat. All messages without `[<date>] [<nick>]` prefix within each message.
* `{{msg_all}}` - all chat messages.
* `{{msg_items}}` - all chat messages objects encoded in JSON. Just do `json_decode` on passed variable
* `{{msg_all_html}}` - all chat messages rendered as HTML. You might need to style classes.

Other:

* `{{msg}}` - user message
* `{{msg_url}}` - user message will contain links instead of bbcode tags.
* `{{chat_id}}` - chat ID
* `{{lhc.nick}}` - visitor nick
* `{{lhc.email}}` - e-mail
* `{{lhc.department}}` - department name
* `{{lhc.dep_id}}` - department ID
* `{{footprint}}` - last 25 viewed pages url's
* `{{ip}}` - visitor ip. If you are running background worker this value will be localhost.
* `{{lhc.add.<additional variable key/identifier>}}` - these values you are passing additionaly. It's either `Field identifier` from `Start a chat form settings > Custom fields` or if you are passing manually it's `name` attribute.
* `{{lhc.<any chat attribute>}}` - all possible attributes you can find [https://api.livehelperchat.com](https://api.livehelperchat.com) at the bottom under `Models > Chat` also you can access any dynamic attribute like [{{lhc.department_name}}](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/models/lhchat/erlhcoreclassmodelchat.php#L430).
* `{{args.<any argument attribute>.<any subargument attribute>}}` - if you are implementing [webhooks](../development/webhooks.md) most likely you will be using this as placeholder.
* `{{args.chat.department.identifier}}` - This way you can access any chat and child object attributes. In this example department identifier. 
* `{{args.chat.department}}` - you can pass even all department object.


Example:
> If you put `Field identifier` value as `gender` in `Start a chat form settings > Custom fields`. In Rest API Call you can access this field like `{{lhc.add.gender}}`

* `{{lhc.var.<chat variable key>}}` - these values can be set using extensions etc. It's data is taken by `json_decode` function from `chat_variables` column value. This column stores JSON as `{<key> : <value>,..}`. Usually in this column extensions stores their own data.
* `{{media}}` - Will hold JSON encoded related files to send message.
```json
[
  {
    "id": 636,
    "size": 10007,
    "upload_name": "image.png",
    "type": "image/png",
    "extension": "png",
    "hash": "4bcda854ef4f27e8b4003b42c84f1cb6",
    "url": "https://devmysql.livehelperchat.com/file/downloadfile/636/4bcda854ef4f27e8b4003b42c84f1cb6"
  }
]
```

So your JSON body in rest API can look like
```
{
    "msg":{{msg}}, // OR {{msg_clean}}
    "query":{{query}},
    "media":{{media}} 
}
```

Replaceable variables works only in
 * Params
 * Body
 * Headers

## Trigger workflow

In trigger once everything is setup it will look like this.

![](/img/bot/rest-api-bot-trigger.png)

Fields description

* `Rest API` - it's our main Rest API `Name` we are working with
* `Method` - it's our `Name of the request` from Rest API building window.
* `User entered parameter` - it's just defined parameter which is coming from Rest API builder window `User parameters` tab.
* `Execute trigger for [UUID Set]` - It's defined output parsing option which we defined in Rest API `Output parsing` tab.
* `Default trigger to execute` - if we did not found any matching output combination this trigger will be executed.
* `Send Rest API Call in the background.` - by default `Rest API` calls are send as soon visitor sends a message, they are happening on same request. This can lead to a problems if Rest API is slow. We can send Rest API calls in the background, but for that you have to be running [lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extension. You won't need to code anything just setup extension itself.

## Output variables in triggers

Use can use these variables in your text triggers response text.

* `{content_1}`
* `{content_2}`
* `{content_3}`
* `{content_4}`
* `{content_5}`
* `{content_6}`
* `{http_code}` - https status code returned from request
* `{http_error}` - additional error explanation from `curl_error($ch);`
* `{content_raw}` - raw response returned from Rest API call without any parsing
* `{http_data}` - Request parameters used for rest api call.

## How to find out problems with Rest API

 * Setup output combination for success call.
 * In default response have two text messages as response

In rest api define trigger for `Unknown` unmatched output combination

![](/img/bot/default-trigger.png)

In response have something like this. Pay attention second text message is send as system message.

![](/img/bot/rest-api-debug.png)

## Video usage example

<iframe width="560" height="315" src="https://www.youtube.com/embed/oFWQBLZmzOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
