---
id: jitsi
title: Jitsi Integration
---

## What is Jitsi?

Jitsi is a free, open-source application for voice, video, and screen sharing. You can find more information at https://jitsi.org/.

You can add call capabilities to Live Helper Chat without any cost.

## Integration Flow

We integrate Jitsi link generation using:

*   Bot commands. `!jitsi`
*   Using core Live Helper Chat functions. 4.16v is required

No extension is needed.

More information what url can be passed to Jitsi please see this link

*   https://shawnchin.github.io/jitsi-url-generator/ - you can play around and adjust links afterwards

Thanks to [comment author](https://github.com/LiveHelperChat/livehelperchat/discussions/1838#discussioncomment-4325256) who inspired to prepare and improve Live Helper Chat to support Jitsi :)

## Bot setup

First we create a bot with single trigger content.

Create a new trigger and click `Show code` under trigger. Paste following content and click `Load`. There are two format options in this sample trigger

*   Either send join a call as a standard link.
*   Either send it as a button

Please edit a trigger response after you do that and keep the one you like more.

```json
[
  {
    "_id": "PPoWR0hsA",
    "type": "command",
    "content": {
      "text": "",
      "command": "chatvariable",
      "update_if_empty": true,
      "payload": "{\"jitsi\":\"{random_20}\"}"
    }
  },
  {
    "_id": "eCyS5SV8s",
    "type": "text_conditional",
    "content": {
      "text": "",
      "intro_us": "[url=https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=\"{args.chat.nick__url}\"&userInfo.email=\"{args.chat.email__url}\"&config.prejoinPageEnabled=false&config.requireDisplayName=true]Join as {args.chat.nick}[/url]\\n[html]\\n<a class=\\"btn btn-success btn-sm\\" target=\\"_blank\\" href=\\"https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=&quot;{args.chat.nick__url}&quot;&userInfo.email=&quot;{args.chat.email__url}&quot;&config.prejoinPageEnabled=false&config.requireDisplayName=true\\">Join as {args.chat.nick__escape}</a>\\n[/html]\\n",
      "full_op": "",
      "intro_op": "[url=https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=\"{args.chat.plain_user_name__url}\"&config.prejoinPageEnabled=false&config.requireDisplayName=true]Join call as {args.chat.plain_user_name}[/url]"
    }
  }
]
```

After that, it should look like this:

![](/img/integration/jitsi.png)

## Bot Command Setup

Now, set up the bot command that operators will use to generate the link.

![](/img/integration/jitsi-command.png)

After that, you can type `!jitsi` in the chat message area. The generated link will have the same hash for both the operator and the visitor.
