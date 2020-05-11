---
id: rest-api-to-fetch-customer-info
sidebar_label: User information from Rest API
title: Using Rest API response trigger to fetch customer info
---

This is simple use case to demonstrate how you can use Rest API response type to fetch customer info directly from third party service as soon chat started. For optimal performance I would recommend to use `Send Rest API Call in the background.`

Purpose of our bot is

* Check was username provided
* If username is provided call Rest API trigger to fetch customer information using Rest API trigger.
* Always after fetching information set chat as pending. 

For the customer it will be transparent process.

## Rest API Server

Here we return JSON and prepend provided nick just to make sure all works as expected.

```php
echo json_encode(
    array(
        'user_info' => array('name_surname' => 'Remigijus Kiminas' . $_GET['nick'])
    )
);
```

## Rest API Definition

Now we can define Rest API Call itself.

### Main settings

![](/img/bot/information-fetcher/init-call-params.png)

### Output parsing

![](/img/bot/information-fetcher/output-parsing.png)

## Trigger

For all that we need only three triggers

![](/img/bot/information-fetcher/triggers.png)

### Default

This trigger will be executed as soon chat starts. It also executes rest api call only if username is not Visitor. Means it was changed. If you are planning to make checking based on passed attribute, not visible by customer you can do that also.

![](/img/bot/information-fetcher/default.png)

### Fetch information

Here we just call Rest API to fetch customer information.

![](/img/bot/information-fetcher/fetch-information.png)

### Set user information

Here after we detected output we just set fetched information as chat attribute.

![](/img/bot/information-fetcher/set-user-information.png)

## Output

If you have done everything right you should see in chat additional data.

![](/img/bot/information-fetcher/chat-window.png)