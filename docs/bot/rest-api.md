---
id: rest-api
title: Rest API
---

## Introduction

This article explains how to use Rest API response type in bot. With this thing basically you can integrate any third party API without any coding.

In order to get all working you have to setup two things

* Rest API Call itself
* Bot trigger which will use that call

## Rest API Call

Rest API call building window is build such way that you can execute almost any request you want.

![](/img/bot/rest-api.png)

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

![](/img/bot/response-found.png)

#### HTTP status code E.g 200,301,500

For this response to match you can to define expected HTTP status code. It's optional. This way you can separate success response from failed one.

#### Response Location 1/2/3/4.

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

#### Conditions checking

Sometimes it makes sense to check was something found based on response attribute. So you can define condition to check.

Here we expect that `status` value would be success.

![](/img/bot/rest-api-conditions.png)

#### Meta msg location.

Here we can extract meta_msg if you provide Live Helper Chat compatible JSON response. Meta message will be used in chosen response trigger [**text message**] if this trigger does not have ant meta message information.

```php
echo json_encode(array(
    'meta_msg' => json_decode('{"content":{"quick_replies":[{"type":"button","content":{"name":"Rest API Button","payload":"rest_api_button"}}]}}',true)
));
```

## Replaceable variables

Rest API in value fields you can use these replaceable variables

* `{{msg}}` - user message
* `{{chat_id}}` - chat ID
* `{{lhc.nick}}` - visitor nick
* `{{lhc.email}}` - e-mail
* `{{lhc.department}}` - department name
* `{{lhc.dep_id}}` - department ID
* `{{ip}}` - visitor ip. If you are running background worker this value will be localhost.
* `{{lhc.add.<additional variable key/identifier>}}` - these values you are passing additionaly
* `{{lhc.var.<chat variable key>}}` - these values can be set using extensions etc.

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
* `{http_code}`

## Video usage example

<iframe width="560" height="315" src="https://www.youtube.com/embed/oFWQBLZmzOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>