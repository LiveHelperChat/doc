---
id: bot-text
title: Text message
---

This article explains text element. Text element looks like

[![](https://livehelperchat.com/var/media/images/text-buttons.png)​](https://livehelperchat.com/var/media/images/text-buttons.png)

Each text element can have two types of subelemetns Quick replies (buttons) or action element.

Syntax for simple buttons looks like. This can be send directly as a meta_msg body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin ](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin)
```json
[
  {
    "_id": "Hkhov7S77",
    "type": "text",
    "content": {
      "text": "Here is sample element",
      "quick_replies": [
        {
          "_id": "HJRmO7HQ7",
          "type": "button",
          "content": {
            "name": "Button",
            "payload": "about_us"
          }
        },
        {
          "_id": "S1TVdXSQm",
          "type": "url",
          "content": {
            "name": "google.com",
            "payload": "https:\/\/google.com"
          }
        }
      ]
    }
  }
]
```