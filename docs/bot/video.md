---
id: bot-video
title: Video
---

This article explains the `Send Video` response type.

![](/img/bot/video.png)

It also supports any iframe video provider like YouTube. You just have to paste the embed code in the video URL.

You can generate iframe parameters for a YouTube video using the YouTube Player Demo. You can also generate the embed code from the YouTube video itself.
https://developers.google.com/youtube/youtube_player_demo

You can paste a direct URL to your video file.

**Direct video**

![](/img/bot/direct-video.png)

**YouTube video**

![](/img/bot/youtube-video.png)

**Iframe JSON**
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

**Direct video JSON**
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
