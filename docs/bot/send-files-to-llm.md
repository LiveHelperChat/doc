---
id: send-files-to-llm
title: How to send files to LLM?
---

Most documentation focuses on handling text-based chat messages. However, visitors may want to report issues or ask questions by uploading files such as screenshots. This guide explains how to configure your bot to process file uploads and send them to a Large Language Model (LLM) for analysis.

## Prerequisites

Before implementing file-to-LLM functionality, ensure your bot and LLM service support:
- File upload handling
- Multi-modal content processing (text + images)
- JSON message formatting

## Step 1: Configure the Default Trigger

Set up a trigger to handle file uploads when no specific message pattern is matched.

### Configuration Requirements:
1. **Trigger Type**: Set as `Default for unknown message`
2. **Activation**: This trigger should activate when visitors upload files without specific text commands

![](/img/bot/bots/send-file.jpg)

## Step 2: Configure Message Content Settings

When setting up the response message, configure these essential options:

### Required Settings:
- ✅ **Save content as JSON**: This formats the message content as structured JSON data
- ✅ **Save as a system message**: This ensures the message is processed as a system-level instruction

### Message Content Structure:

Use the following JSON format to send both text and file content to your LLM:

```json
{
    "role": "user",
    "content": [
        { 
            "type": "input_text", 
            "text": "I need help with" 
        },
        {
            "type": "input_image",
            "image_url": "{args.msg.file.file_body}"
        }
    ]
}
```

### Content Explanation:
- **`role`**: Defines the message sender (user, assistant, or system)
- **`content`**: Array containing multiple content types
  - **`input_text`**: Static text that provides context to the LLM
  - **`input_image`**: File content using the `{args.msg.file.file_body}` variable

## Supported File Types

The `{args.msg.file.file_body}` variable can handle various file types. Common use cases include:
- Screenshots for troubleshooting
- Documents for analysis
- Images for visual questions

## Customization Options

You can modify the JSON structure based on your needs:
- Change the `input_text` content to provide different context
- Add additional text fields for more detailed instructions
- Adjust the role based on your LLM's requirements