---
id: trigger-body
title: Trigger body
---

This article explains how to use `Execute trigger body` response type. This response type is usefull with integration of Rest API responses. In trigger body you can paste direct content from `Show Code` section.

![](/img/bot/trigger-body.png)

Sample response structure in JSON format. `_id` is **not** required
```json
{
  "trigger_body": "[\n    {\n        \"_id\": \"QC_snqpzy\",\n        \"type\": \"text\",\n        \"content\": {\n        \"text\": \"Simple message\"\n        }\n    },\n    {\n        \"_id\": \"-zr2nPxfI\",\n        \"type\": \"typing\",\n        \"content\": {\n        \"text\": \"\",\n            \"duration\": \"3\"\n        }\n    },\n    {\n        \"_id\": \"YY8KnOEZr\",\n        \"type\": \"text\",\n        \"content\": {\n        \"text\": \"After typing\"\n        }\n    }\n]"
}
```

Sample response structure if generated with PHP.

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

Rest API definition

![](/img/bot/output-parsing-trigger-body.png)

