---
id: helpline-and-crisis-solution
title: Helpline and Crisis Solution
sidebar_label: Helpline and Crisis Solution
---

Live Helper Chat can also be used as a helpline and crisis support solution. In this article, I'll share a few tips on how to provide support anonymously.

Using Live Helper Chat as a crisis/helpline solution requires fulfilling these requirements:

*   Agents should see as little information as possible about a visitor – preferably none.
*   Chats should be deleted after a specific period of time, or their data should be anonymized.
*   Agents should not see what the visitor is typing.

To fulfill these requirements, I recommend the following:

*   `Chat configuration -> Data protection` - Check `Do not track visitors IP.` This will prevent logging the full IP address of the visitor; only the country will be shown.
*   `Chat configuration -> Data protection` - Enter a value for `After how many days encrypt messages.` This will encrypt visitor messages after the specified period. You can also choose to encrypt operator messages.
*   `Chat configuration -> Data protection` - Check `Do not store what visitor is typing.` This will prevent storing what the visitor is typing.

Live Helper Chat, by default, tracks visitor pageviews and their previous chats. This can be avoided by turning off online visitor tracking:

*   `Chat configuration -> Online tracking` - Uncheck `Enable online site visitors tracking.`

To simplify the user interface for operators, you can also remove unnecessary permissions.
