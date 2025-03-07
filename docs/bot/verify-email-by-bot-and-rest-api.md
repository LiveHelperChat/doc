---
id: verify-email-by-bot-and-rest-api
title: Validating visitor e-mail using Rest API
sidebar_label: Validate e-mail by bot and Rest API
---

## Introduction

This is a small sample demonstrating how you can verify a visitor's email address using a combination of the Rest API and a bot.

## Download

You can download and import the bot configuration:
[Download](/img/bot/bot-email.json) (Right-click and "Save link as").

## Chat Workflow

**Chat Started**

![](/img/bot/chat-workflow-started.png)

**Validate Email Clicked**

![](/img/bot/validate-e-mail-clicked.png)

**Invalid Email Format**

![](/img/bot/invalid-format-email.png)

**Format Valid, but Not Validated by Rest API**

![](/img/bot/format-valid-but-not-rest-api.png)

**Validated by Rest API Call**

![](/img/bot/valid-rest-api.png)

If an email address has already been verified, the visitor will not be prompted to enter it again.

![](/img/bot/already-verified-email.png)

## Third-Party API Sample

This sample API verifies that the visitor has entered the expected email address.

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

### Rest API Configuration

The main configuration looks like this:

![](/img/bot/validate-email-rest-api.png)

The output parsing is configured as follows:

![](/img/bot/validate-email-output-parsing.png)

### Bot Setup

The bot's triggers are configured as shown below:

![](/img/bot/validate-email-triggers.png)

#### Starting

This is where everything begins when a visitor starts a chat. The bot suggests that the visitor validate their email address.

![](/img/bot/starting-validate-email.png)

#### Validate Email

When the visitor clicks the "Validate Email" button (or the `Starting` trigger is activated), this trigger is executed.

Here's what happens:

*   The bot verifies whether the email address has already been collected. This step is optional.
*   The bot executes the `Collect custom attribute` action. If the format is valid, the `Validate Rest API` trigger is executed.

![](/img/bot/validate-email-starting-format.png)

#### Verified by API

This trigger doesn't perform any actions, as the visitor's email address is already stored in the `lhc.email` attribute. It simply sends a confirmation message.

#### Email Unverified

If the Rest API check fails, this trigger is executed. It performs the following actions:

*   Informs the visitor that the verification process failed.
*   Resets the email address that was previously set by the `Validate Email` trigger.
*   Re-sends the `Starting` trigger.

![](/img/bot/email-unverified.png)

#### Validate Rest API

This trigger executes the defined Rest API call. Based on the API's output, either the `Verified by API` or the `Email Unverified` trigger is executed.

![](/img/bot/validate-email-rest-api-call.png)
