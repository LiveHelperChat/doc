---
id: bot-list
title: List
---

This article explains the List element. The element looks like:

[![](https://livehelperchat.com/var/media/images/list.png)​​](https://livehelperchat.com/var/media/images/list.png)

The syntax for simple lists is shown below. This can be sent directly as a `meta_msg` body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin)


```json
[
    {
        "_id": "HyBYVn0pf",
        "type": "list",
        "content": {
            "text": "",
            "list": [
                {
                    "_id": "BJ2-A6CTM",
                    "type": "trigger",
                    "content": {
                        "img": "https://livehelperchat.com/design/frontendnew/images/lhc.png",
                        "title": "How do you do",
                        "subtitle": "Subtitle goes here",
                        "payload": "50",
                        "subbuttons": [],
                        "buttons": [
                            {
                                "content": {
                                    "name": "remigiusfdf"
                                }
                            }
                        ]
                    },
                    "buttons": []
                },
                {
                    "_id": "Skgz21yRG",
                    "type": "button",
                    "content": {
                        "img": "https://livehelperchat.com/design/frontendnew/images/lhc.png",
                        "title": "Second row title",
                        "subtitle": "Subtitle row",
                        "payload": "phone_and_email",
                        "subbuttons": []
                    },
                    "buttons": [
                        {
                            "_id": "r1PmvlyCf",
                            "type": "url",
                            "content": {
                                "name": "Go to google",
                                "payload": "http://google.com"
                            }
                        },
                        {
                            "_id": "BJHNPeJRf",
                            "type": "button",
                            "content": {
                                "name": "Provide e-mail",
                                "payload": "phone_and_email"
                            }
                        },
                        {
                            "_id": "HJCfSxVAG",
                            "type": "trigger",
                            "content": {
                                "name": "List",
                                "payload": "46"
                            }
                        }
                    ]
                },
                {
                    "_id": "SJS0Bg10G",
                    "type": "trigger",
                    "content": {
                        "img": "",
                        "title": "asdf",
                        "subtitle": "asdfadfadfasd",
                        "payload": "44",
                        "subbuttons": []
                    },
                    "buttons": [
                        {
                            "_id": "HyCTcZyCf",
                            "type": "url",
                            "content": {
                                "name": "New button",
                                "payload": "asdfdf"
                            }
                        }
                    ]
                }
            ],
            "list_options": {
                "no_highlight": true
            },
            "quick_replies": [
                {
                    "_id": "S1ikB-JCM",
                    "type": "button",
                    "content": {
                        "name": "Remdex name changed",
                        "payload": "phone_and_email"
                    }
                },
                {
                    "_id": "HkbgSZJCM",
                    "type": "url",
                    "content": {
                        "name": "Another buttonfdfd",
                        "payload": "http://google.com"
                    }
                },
                {
                    "_id": "B1fIu-JRG",
                    "type": "url",
                    "content": {
                        "name": "hjkhjk",
                        "payload": "hhjkhjk"
                    }
                }
            ]
        }
    }
]
```
