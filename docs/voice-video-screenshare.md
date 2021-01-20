---
id: voice-video-screenshare
title: Voice & Video & ScreenShare
---

We are using [agora.io](https://www.agora.io/en/) as service provider for our implementation. In the future we might add support also for https://janus.conf.meetecho.com/demos.html

[agora.io](https://www.agora.io/en/) gives everyone 10000 minutes every month for free. It should be enough for most of the users.

You can also test video calls live on official website [demo](https://livehelperchat.com/demo-12c.html)

# Installation

## Live Helper Chat installation.

Navigate to 

> System configuration -> Live help configuration -> Voice & Video & ScreenShare (Configuration)

Adjust what features you want to enable

 * `Calls enabled` - is video calls enabled in general. This will activate call option in chat widget.
 * `Video enabled` - there will be an option to share a video cam for the visitor.
 * `ScreenShare` - screen sharing option is enabled

`Agora APP ID` and `Agora App Certificate` you will know from below.

## Agora installation

 * Create an account in their service  https://www.agora.io/en/
 * Create a new project. Click a blue button

![](/img/voice-video/create-project.png)
   
 * Enter project details. At this stage only name for your own purposes

![](/img/voice-video/project-details.png)
   
 * Once you do that click `edit`. Click an eye icon on `App ID` field. Field value will be copied to clipboard. Paste this value in Live Helper Chat `Agora APP ID` field.

![](/img/voice-video/app-id.png)
   
 * Now click on `App certificate: -> Primary certificate` field eye icon. Paste this value in Live Helper Chat `Agora App Certificate` field .

![](/img/voice-video/app-certificate.png)

Click save settings. That's it!

## Workflow

As soon operator accepts a chat he will see on the right column options about voice calls

![](/img/voice-video/voice-options-operator.png)

Phone icon appears to the visitor as soon chat is accepted by operator.

![](/img/voice-video/video-call-widget.png)

Visitor as soon clicks this icon will see. He can choose what call he want's audio/video

![](/img/voice-video/visitor-call-starting.png)

As soon visitor clicks join. He will see information that operator has to let in him.

![](/img/voice-video/voice-video-waiting-confirm.png)

Operator on his end will see a request that visitor want's to start a video call.

![](/img/voice-video/informing-operator-about-call.png)

If operator initates calls first. Visitor will see

![](/img/voice-video/operator-initiated-call.png)

Operator also on the left will see new updates about call

![](/img/voice-video/pending-status-indications.png)

Opening call window will represent operator call status

![](/img/voice-video/pending-join-operator.png)

As soon operator joins the call he will see an option to let in visitor

![](/img/voice-video/operator-joined.png)

After an operator let's in visitor operator will see call window. Yes it's me :D

![](/img/voice-video/operator-joined-call.png)

Operator additionally can

 * `Leave the call` - call status will not change. Usefull if other operator should take over a chat.
 * `End the call` - call status will be set as ended and chat will end also on visitor side.

### Icons and their meanings

![](/img/voice-video/actions.png)

 * Mute/Un-mute a mic
 * Turn off/on camera
 * Share a screen

Visitor/Operator at any moment can enable/disable mic/audio/screenshare while the call is happening. 

## Permissions

To set [agora.io](https://www.agora.io/en/) parameters

> 'lhvoicevideo','configuration'

To user it as operator

> 'lhvoicevideo','use'