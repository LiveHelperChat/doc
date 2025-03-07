---
id: trigger-body
title: Trigger Body
---

This article explains how to use the `Execute trigger body` response type. This response type is useful for integrating with REST API responses. In the trigger body, you can paste the direct content from the `Show Code` section.

![](/img/bot/trigger-body.png)

## Sample Response Structure (JSON)

The `_id` field is not required.

```json
{
  "trigger_body": "[
    {
      \"_id\": \"QC_snqpzy\",
      \"type\": \"text\",
      \"content\": {
        \"text\": \"Simple message\"
      }
    },
    {
      \"_id\": \"-zr2nPxfI\",
      \"type\": \"typing\",
      \"content\": {
        \"text\": \"\",
        \"duration\": \"3\"
      }
    },
    {
      \"_id\": \"YY8KnOEZr\",
      \"type\": \"text\",
      \"content\": {
        \"text\": \"After typing\"
      }
    }
  ]"
}
```

## Sample Response Structure (PHP)

```php
<?php

$jsonBody = '[
    {
        "_id": "QC_snqpzy",
        "type": "text",
        "content": {
        "text": "Simple message"
        }
    },
    {
        "_id": "-zr2nPxfI",
        "type": "typing",
        "content": {
        "text": "",
            "duration": "3"
        }
    },
    {
        "_id": "YY8KnOEZr",
        "type": "text",
        "content": {
        "text": "After typing"
        }
    }
]';

echo json_encode(array('trigger_body' => $jsonBody));
exit;
?>
```

## REST API Definition

![](/img/bot/output-parsing-trigger-body.png)

