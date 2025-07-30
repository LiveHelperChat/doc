---
id: images-bot-integration
title: Support images for your AI LLM
---

# Images/Voice message Bot Integration

* In order for visitor to write a question regarding his file upload. In `File => Files configuration` settings ` Show file preview before uploading file` has to be enabled.

* [REST API Configuration](/img/bot/voice-messages/rest-api-v2.json) - Remember to set your `OPENAI_API_KEY` in the configuration
* [Bot Configuration](/img/bot/voice-messages/bot-v2.json) - Import this after setting up the REST API

# Images Bot Integration (old version)

This document explains how to integrate image handling in bots that use the OpenAI API, following a clear workflow from image upload to API request handling.

## Updated Workflow Overview

1. User uploads an image to the chat
2. System detects the content type and routes to a specific trigger
3. Bot processes the image using the OpenAI API
4. AI generates a response based on the image content

## Implementation Example

When an image is uploaded, the JSON payload for OpenAI looks like:

In Live Helper Chat pictures are uploaded instantly and there is no possibility to write user question within image before uploading. So we hint AI that we will ask our question afterwards.

```json
{
    "role": "user",
    "content": [
        { "type": "text", "text": "I'll ask my question about uploaded picture in the next message" },
        {
            "type": "image_url",
            "image_url": {
                "url": "{args.msg.file.file_body_embed}"
            }
        }
    ]
}
```

## Sample Configuration Files

You can download the necessary files to implement this functionality:

* [REST API Configuration](/img/bot/voice-messages/rest-api.json) - Remember to set your `OPENAI_API_KEY` in the configuration
* [Bot Configuration](/img/bot/voice-messages/bot.json) - Import this after setting up the REST API

## Integration Points

The system handles images through specific triggers that activate when image content is detected.

![Image Upload Detection](/img/bot/bots/router-unknown.jpg)

![Image Upload Confirmation](/img/bot/bots/image-was-uploaded.jpg)

## Technical Notes

* Image content is embedded using the `file_body_embed` parameter
* The OpenAI API processes multimodal content through the content array
* Both text and image data can be sent in the same request