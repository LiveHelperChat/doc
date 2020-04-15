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

### Output parsing

To be continued... :smile:

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

## Output variables in triggers

Use can use these variables in your text triggers response text.

* `{content_1}`
* `{content_2}`
* `{content_3}`
* `{content_4}`
* `{http_code}`

## Video usage example

<iframe width="560" height="315" src="https://www.youtube.com/embed/oFWQBLZmzOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>