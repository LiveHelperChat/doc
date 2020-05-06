---
id: bot-video
title: Video
---

This article explains `Send Video` response type

![](/img/bot/video.png)

It supports also any iframe video provider like Youtube. You just have to paste embed code in video URL.

There you can generate iframe parameters for youtube video. You can also generate embed code from youtube video itself.
https://developers.google.com/youtube/youtube_player_demo

You can paste direct url to your video file.

Direct video 
![](/img/bot/direct-video.png)

Youtube video
![](/img/bot/youtube-video.png)

Iframe JSON
```json
[
    {
        "_id": "obeyceguT",
        "type": "video",
        "content": {
            "text": "",
            "payload": "<iframe id=\"ytplayer\" type=\"text/html\" width=\"720\" height=\"405\" src=\"https://www.youtube.com/embed/-ssvsk7KY5w?autoplay=1\" frameborder=\"0\" allowfullscreen>",
            "video_options": {
                "autoplay": true,
                "controls": false
            }
        }
    }
]
```

Direct video JSON
```json
[
    {
        "_id": "obeyceguT",
        "type": "video",
        "content": {
            "text": "",
            "payload": "https://example.org/video.mp4",
            "video_options": {
                "autoplay": true,
                "controls": false
            }
        }
    }
]
```