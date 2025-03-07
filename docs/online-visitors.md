---
id: online-visitors
title: Online visitors tutorial
sidebar_label: Online visitors
---

## My operators can't see online visitors. What am I missing?

By default, if a user does not have "All departments" assigned in the user departments assignment management window, they won't see any online visitors. Here's a basic guide to what you should do:

*   If a user should see online visitors from all departments (with and without a department assigned), they should be assigned "All departments."
*   If an operator should only see users from specific departments, select those departments for the operator.
*   Alternatively, you can assign the "lhchat" => "sees_all_online_visitors" permission to a user. This will override the assigned departments and show all online visitors.

## My users lose their chat session when navigating the site, and duplicate online user records appear.

There are a few common misconfigurations that can cause this:

*   Your site is switching between HTTP and HTTPS mode, but you have enabled HTML5 storage. HTML5 storage is separate for HTTP and HTTPS sites.
*   You have entered the site domain in the back office, but the embedded code on your site uses a different domain.
*   You have enabled "Live Helper Chat should use SSL," but the site where you have embedded the widget does not use HTTPS.
    ![](https://livehelperchat.com/var/media/images/cookiessl.png)
*   In the embed code generation window, you have entered the domain where Live Helper Chat is installed, but not the domain of the site where it is embedded. The domain must be the site domain where Live Helper Chat is embedded.

These are the most common issues. The more flexibility I provide, the more potential errors users can make. Change these values carefully if you understand the implications!

## How do I send a manual message to an online visitor?

*   Generate the embed code with the "Check for messages from operator" option enabled.
*   Enable online users tracking in the online users section. This is likely already enabled. :smile:
*   When you see an online user, click "Send message" to send a message to the user.

## Sending messages to online visitors

Sending a message to an online visitor involves two scenarios:

*   Sending an invitation – the chat won't be started until the visitor responds.
*   Sending an invitation and starting a chat – the chat starts immediately.

![](/img/visitor/send-message.png)

### Sending an invitation without starting a chat

This is the preferred way to invite a visitor to chat, as it avoids creating unnecessary chats if the visitor doesn't reply.

*   `Assign the chat to me if the visitor replies` means the chat will be assigned to the operator who sent the invitation if the visitor replies or after the bot workflow chat becomes pending.
    *   This will happen even if the operator goes offline after sending the invitation.
    *   If auto-assignment is enabled and the operator doesn't accept the chat, the chat will be forwarded to the next available operator.
    *   If the operator has the `Automatically accept assigned chats` option enabled in their account and is logged into the back office, the chat will be assigned to them first.

*   `Skip bot` – the chat will skip the bot and go directly into a pending state. If `Assign the chat to me if the visitor replies` is checked, the chat will be assigned to the operator who sent the invitation.
    *   This will happen even if the operator goes offline after sending the invitation.

In summary, the chat will always be assigned first to the operator who sent the invitation, regardless of their online/offline status or visibility settings.

### Sending an invitation and starting a chat

This will start the chat automatically as soon as the operator sends a message to the visitor.

*   The chat will be automatically assigned to the operator who sent the invitation, regardless of their online/offline status or visibility settings.
