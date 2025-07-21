---
id: images-bot-integration
title: Support images for your LLM
---

This article provides a generic workflow for integrating file support in your bot. In this particular case, we are implementing image support for our AI using OpenAI responses.

## Workflow Overview

1. An image is uploaded by the user
2. The system routes to a specific trigger based on the uploaded content type

![](/img/bot/bots/router-unknown.jpg)

![](/img/bot/bots/image-was-uploaded.jpg)

Here's an example of the JSON structure used for OpenAI API requests when an image is uploaded:

```json
{
    "role": "user",
    "content": [
        { "type": "input_text", "text": "I'll ask my question about uploaded picture in the next message" },
        {
            "type": "input_image",
            "image_url": "{args.msg.file.file_body_embed}"
        }
    ]
}
```