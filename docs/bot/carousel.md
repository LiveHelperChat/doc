---
id: bot-carousel
title: Carousel
---

This article explains carousel. The element looks like

[![](https://livehelperchat.com/var/media/images/carousel.png)​​​](https://livehelperchat.com/var/media/images/carousel.png)

Syntax for carousel looks like. This can be send directly as a meta_msg body to [https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin ](https://api.livehelperchat.com/#/api/post_restapi_addmsgadmin)

```json
[
    {
        "_id": "rJ83Raf0f",
        "type": "generic",
        "content": {
            "text": "",
            "list": [
                {
                    "_id": "ryMD10f0G",
                    "type": "url",
                    "content": {
                        "img": "https://demo.livehelperchat.com/var/userphoto/2013y/11/03/1/3096c0157282295375e01cf9f6d3efe5.png",
                        "title": "We can answer chats for you.",
                        "subtitle": "We have a team of awesome chat staff for only $1/hr",
                        "payload": "http://gopgle.com",
                        "subbuttons": []
                    },
                    "buttons": [
                        {
                            "_id": "rJjwyCGAM",
                            "type": "url",
                            "content": {
                                "name": "New button",
                                "payload": "ghjghjgjh"
                            }
                        },
                        {
                            "_id": "rkZ1KRMCM",
                            "type": "url",
                            "content": {
                                "name": "New button 2",
                                "payload": "http://google.com"
                            }
                        },
                        {
                            "_id": "ByrjFAfRG",
                            "type": "trigger",
                            "content": {
                                "name": "Click",
                                "payload": "51"
                            }
                        }
                    ]
                },
                {
                    "_id": "HyTP10fAf",
                    "type": "trigger",
                    "content": {
                        "img": "https://demo.livehelperchat.com/var/userphoto/2013y/11/03/1/3096c0157282295375e01cf9f6d3efe5.png",
                        "title": "You can answer your own chats.",
                        "subtitle": "Chat2 is easy to use and packed full of time saving features.",
                        "payload": "50",
                        "subbuttons": []
                    }
                },
                {
                    "_id": "HJQOd0GAG",
                    "type": "button",
                    "content": {
                        "img": "https://demo.livehelperchat.com/var/userphoto/2013y/11/03/1/3096c0157282295375e01cf9f6d3efe5.png",
                        "title": "A chatbot like me can answer chats",
                        "subtitle": "Great for answering FAQ\"s and providing quick info 24 hours",
                        "payload": "phone_and_email",
                        "subbuttons": []
                    }
                },
                {
                    "_id": "S1SGOkXAG",
                    "type": "none",
                    "content": {
                        "img": "https://demo.livehelperchat.com/var/userphoto/2013y/11/03/1/3096c0157282295375e01cf9f6d3efe5.png",
                        "title": "A chatbot like me can answer chats",
                        "subtitle": "Great for answering FAQ\"s and providing quick info 24 hours",
                        "payload": "",
                        "subbuttons": []
                    }
                },
                {
                    "_id": "BJNQu1Q0z",
                    "type": "none",
                    "content": {
                        "img": "https://demo.livehelperchat.com/var/userphoto/2013y/11/03/1/3096c0157282295375e01cf9f6d3efe5.png",
                        "title": "A chatbot like me can answer chats",
                        "subtitle": "Great for answering FAQ\"s and providing quick info 24 hours",
                        "payload": "",
                        "subbuttons": []
                    }
                }
            ]
        }
    }
]
```