---
id: image-file-verification-flow
title: Image file verification flow
---

The purpose of this flow is to display a custom cover for images that contain sensitive information, such as passports, credit cards, or other confidential documents.

## Chat Flow Overview

* Image is uploaded
* We check if the verification flow is enabled in the `File configuration` section under `Image file by operator can be downloaded if`
* We check if the picture resolution meets the minimum criteria
* If the picture minimum dimension is met during upload, we dispatch `file.verify_img_file`
* Operator opens a chat. During chat rendering we check:
  * Was the image verified and its sensitivity determined? We apply 4 retries with 4 seconds delay. Each time in this call we dispatch the `file.verify` event.
  * If the image is sensitive, we show a cover with a `Click to reveal` button
* Once the operator clicks `Click to reveal`, we dispatch the `file.download_verified` event indicating that the sensitive file was downloaded.
* Audit log can be configured so reveal actions be logged `Chat file reveal`. Search for those events with `Sensitive chat file reveal` action.
* While configuring Rest API it makes sense to check `Skip request body. Only response will be logged.` so log messages will be smaller.

## Sample flow using Moondream

In this sample we will set up an image verification process based on https://moondream.ai/

Our goal is to:

 * Display that image is being verified while we process visitor uploaded image. We will listen to the `file.verify_img_file` event.
 * Set up a bot to do verification and call Rest API
 * We will not set up the `file.download_verified` event to dispatch notification about verified file being downloaded at this time.

Image `meta_msg` structure variations 
```
{
  "verified": {
    "success": true,                                                    # [Required] Indicates whether our verification was successful. E.g API is working normally. If you encounter any API error, set `success` to `false`. Only operators with `lhfile,download_unverified` permission will be able to see an image.
    "msg" : "Error message",                                            # [Optional] If verification process failed you can write error messages which will be shown to the operator.
    "sensitive": true,                                                  # [Optional] If verification process succeeded set this to true or you can omit this var completely if file is not sensitive. Just do not set it to save space :)
    "protection_image" : "images/general/sensitive-information.jpg",    # [Optional] If verification process succeeded and you have custom image you can set it as "images/general/sensitive-information.jpg" or do not set it at all and default image will be used.
    "protection_html" : "Your own custom html",                         # [Optional] Set your own custom HTML for verification result output. E.g you can set single string and listen to `file.verify` event and based on your string there. Just replace with proper HTML to save space.
    "btn_title" : "Sensitive Information"                               # [Optional] Set custom sensitive information tile
  }
}
```

### Files configuration

* In `System configuration > Live help configuration -> Files -> Files configuration` choose `Verified and has permission to download protected images OR has permission to download unprotected files` under `Image file by operator can be downloaded if`
* You can also set minimum resolution for image to be required for verification

### Rest API

* Import [Rest API](/img/bot/moondream/rest-api.json) and change `YOUR_API_KEY` in `Headers` section with your own API key.

After you have finished setup you can uncheck `Log all requests and their responses as system messages.` to avoid saving request details.

### Bot setup

* Import [Bot](/img/bot/moondream/lhc-bot.json). Choose in bot import window just imported Rest API

### Webhook setup

We will listen to `file.verify_img_file` event as it's dispatched once image needs verification.

![](/img/bot/moondream/webhook.jpg)

## Sample flow using OpenAI

### Rest API

* Import [Rest API](/img/bot/open-ai-image-verification/rest-api.json) and change `YOUR_API_KEY` in `Authorization` section with your own API key.

### Bot setup

* Import [Bot](/img/bot/open-ai-image-verification/bot.json). Choose in bot import window just imported Rest API

### Webhook setup

We will listen to `file.verify_img_file` event as it's dispatched once image needs verification.

# Permissions

Operator MUST have `lhfile,verify_file` permission to check verification of file access.

### Scenario A

 * Has permission to `lhfile,download_unverified`
 * Does not have permission to `lhfile,download_verified`. This does not influence anything in that scenario because he has permission to `lhfile,download_unverified`
 * He will see instantly unverified file content even if file was not verified for sensitivity yet. In that case `file.verify` won't be fired.
 * If file was verified `file.verify` will be fired.
 * If image resolution is smaller than required for verification `file.verify` won't be fired.

### Scenario B

* Does not have permission to `lhfile,download_unverified`.
* Does have permission to `lhfile,download_verified`
* If file was verified `file.verify` will be fired.
* If image resolution is smaller than required for verification `file.verify` won't be fired.
* He won't see file content until its content is verified.

### Scenario C

* Does not have permission to `lhfile,download_unverified`.
* Does not have permission to `lhfile,download_verified`.
* He won't see file content if image is not verified or its content is sensitive.

### Debugging

* Request from Rest API for chat calls will be logged under chat ID. Use `Object ID` field and enter chat ID.
* If you have multiple servers running, you have to clear cache on all instances or just click clear cache multiple times.

## Mail Images verification flow

* Mail with inline OR image as attachment is received
* Operator opens a mail message.
* We check if the verification flow is enabled in the `File configuration` section under `Image file by operator can be downloaded if` in mail settings block.
* Inline images verification starts automatically `mailconv.file.verify_start` is fired. If image is not verified within 60 seconds verification event is fired again. `mailconv.file.verify` is fired always.
* Once the operator clicks `Click to reveal`, we dispatch the `mailconv.file.download_verified` event indicating that the sensitive file was downloaded.
* While configuring Rest API it makes sense to check `Skip request body. Only response will be logged.` so log messages will be smaller.

### Bot setup

Identical to chat flow.

### Webhook setup

We will listen to `mailconv.file.verify_start` event as it's dispatched once image needs verification. Webhook event listener is identical as chat.

## Permissions

They are identical to chat permissions so same flow applies

> `lhmailconv,download_unverified` - Allow operators to download unverified files

> `lhmailconv,download_verified` - Allow operators to download verified, but sensitive files

> `lhmailconv,can_download` - this permission should be removed from operators as it allows to download raw eml content which includes images themself.

> `lhmailconv,download_restricted` - this permission allows to download file if file extension is one of the restricted ones. `Mail conversations options => File download restrictions`

### Debugging

* Request from Rest API for chat calls will be logged under message ID. Use `Object ID` field and enter Message ID. Message ID you can find by expanding message details and you will see `Message ID: <number>` field.
* If you have multiple servers running, you have to clear cache on all instances or just click clear cache multiple times.