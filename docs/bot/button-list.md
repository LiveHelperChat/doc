---
id: bot-button-list
title: Button List
---

This article explains Button list. The element looks like

[![](https://livehelperchat.com/var/media/images/button-list.png)​](https://livehelperchat.com/var/media/images/button-list.png)

Syntax for simple buttons looks like. This can be send directly as a meta_msg body to https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin

```json
[
    {
        "_id": "Symz7fI7Q",
        "type": "buttons",
        "content": {
            "text": "",
            "buttons_options": {
                "message": "Hi there"
            },
            "buttons": [
                {
                    "_id": "HytQ7GU7X",
                    "type": "button",
                    "content": {
                        "name": "Button one",
                        "payload": ""
                    }
                },
                {
                    "_id": "BJ-VXGUQ7",
                    "type": "url",
                    "content": {
                        "name": "Button two",
                        "payload": ""
                    }
                }
            ]
        }
    }
]
```