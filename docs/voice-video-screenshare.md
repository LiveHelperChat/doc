---
id: voice-video-screenshare
title: Voice, Video, and Screen Sharing
---

We use [agora.io](https://www.agora.io/en/) as our service provider for voice, video, and screen sharing. In the future, we might add support for https://janus.conf.meetecho.com/demos.html.

[agora.io](https://www.agora.io/en/) provides 10,000 free minutes every month, which should be sufficient for most users.

You can also test video calls live on our official website [demo](https://livehelperchat.com/demo-12c.html).

:::tip Tip

Voice, Video, and Screen Sharing only work with the new widget. The old widget is not supported.
:::

## Live Helper Chat Installation

Navigate to:

> System configuration -> Live help configuration -> Voice & Video & ScreenShare (Configuration)

Adjust the features you want to enable:

*   `Calls enabled` - Enables video calls in general. This activates the call option in the chat widget.
*   `Video enabled` - Provides an option for visitors to share their video camera.
*   `ScreenShare` - Enables the screen sharing option.

You will obtain the `Agora APP ID` and `Agora App Certificate` from the steps below.

## Agora Installation

*   Create an account on their service: https://www.agora.io/en/
*   Create a new project by clicking the blue button.

![](/img/voice-video/create-project.png)

*   Enter the project details. At this stage, only a name for your own reference is required.

![](/img/voice-video/project-details.png)

*   Once you have done that, click `edit`. Click the eye icon on the `App ID` field. The field value will be copied to your clipboard. Paste this value into the Live Helper Chat `Agora APP ID` field.

![](/img/voice-video/app-id.png)

*   Now, click the eye icon on the `App certificate: -> Primary certificate` field. Paste this value into the Live Helper Chat `Agora App Certificate` field.

![](/img/voice-video/app-certificate.png)

Click "Save settings." That's it!

## Workflow

When an operator accepts a chat, they will see options for voice calls in the right column.

![](/img/voice-video/voice-options-operator.png)

A phone icon appears to the visitor as soon as the chat is accepted by an operator.

![](/img/voice-video/video-call-widget.png)

When a visitor clicks this icon, they will see a prompt to choose whether they want an audio or video call.

![](/img/voice-video/visitor-call-starting.png)

Once the visitor clicks "Join," they will see a message indicating that the operator needs to grant them access.

![](/img/voice-video/voice-video-waiting-confirm.png)

The operator will see a request indicating that the visitor wants to start a video call.

![](/img/voice-video/informing-operator-about-call.png)

If the operator initiates the call first, the visitor will see:

![](/img/voice-video/operator-initiated-call.png)

The operator will also see updates about the call on the left.

![](/img/voice-video/pending-status-indications.png)

The call window will display the operator's call status.

![](/img/voice-video/pending-join-operator.png)

As soon as the operator joins the call, they will see an option to let the visitor in.

![](/img/voice-video/operator-joined.png)

After the operator lets the visitor in, the operator will see the call window.

![](/img/voice-video/operator-joined-call.png)

The operator can also:

*   `Leave the call` - The call status will not change. This is useful if another operator needs to take over the chat.
*   `End the call` - The call status will be set to "ended," and the chat will also end on the visitor's side.

### Icon Meanings

![](/img/voice-video/actions.png)

*   Mute/Unmute the microphone
*   Turn off/on the camera
*   Share the screen

The visitor/operator can enable/disable the microphone, audio, or screen sharing at any point during the call.

## Permissions

To configure [agora.io](https://www.agora.io/en/) parameters, you need:

> 'lhvoicevideo','configuration'

To use it as an operator, you need:

> 'lhvoicevideo','use'
