---
id: verify-email-by-bot-and-rest-api
title: Validating visitor e-mail using Rest API
sidebar_label: Validate e-mail by bot and Rest API
---

## Introduction

This is small sampel how combining Rest API and Bot you can verify visitior e-mail using third party Rest API

## Download

You can download and import bot.
[download](/img/bot/bot-email.json). Just right click and "save link as"

## Chat workflow

Chat started

![](/img/bot/chat-workflow-started.png)

Validate e-mail clicked

![](/img/bot/validate-e-mail-clicked.png)

Invalid e-mail format

![](/img/bot/invalid-format-email)

Format valid but not Rest API validation

![](/img/bot/format-valid-but-not-rest-api.png)

Validated by Rest API call

![](/img/bot/valid-rest-api.png)

If e-mail was an already verified visitor won't be asked for it again.

![](/img/bot/already-verified-email.png)

## Third party API sample

It just verified that visitor has entered expected e-mail.

```php
<?php
header('Content-type: application/json; charset=utf-8');
if (isset($_POST['email']) && $_POST['email'] == 'remdex@gmail.com') {
   echo json_encode(['valid' => true]);
} else {
    echo json_encode(['error' => 'E-mail could not be found!']);
    http_response_code(400);
}

exit;
```

### Rest API configuration

Main configuration looks like

![](/img/bot/validate-email-rest-api.png)

Our output parsing looks like

![](/img/bot/validate-email-output-parsing.png)

### Bot setup

Our triggers

![](/img/bot/validate-email-triggers.png)

#### Starting

Everything starts here once a visitor starts a chat. We just suggest a vistior to validate his e-mail.

![](/img/bot/starting-validate-email.png)

#### Validate e-mail

Once visitor clicks `Validate e-mail` e-mail button or in our system trigger named `Starting` we execute this trigger.

Here we do few things

* We verify that we have not already collected his e-mail. This step is optional.
* We execute `Collect custom attribute` and if format is valid we execute then `Validate Rest API`

![](/img/bot/validate-email-starting-format.png)

#### Verified by API

This trigger does nothing as we already have visitor e-mail in `lhc.email` attribute. It just sends a message.

#### E-mail unverified

If Rest API check fails we execute this trigger and we

* We inform visitor that verification process failed.
* Reset e-mail which was set previously by `Validate e-mail` trigger.
* Send again `Starting` trigger.

![](/img/bot/email-unverified.png)

#### Validate Rest API

This trigger executes our defined Rest API call and based on output executes either `Verified by API` or `E-mail unferified` trigger.

![](/img/bot/validate-email-rest-api-call.png)
