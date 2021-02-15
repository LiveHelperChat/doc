---
id: helpline-and-crisis-solution
title: Helpline and crisis solution
sidebar_label: Helpline and crisis solution
---

Live Helper Chat also can be used and helpline and crisis support solution. In this article I'll share few tips how you can give support anonymously 

Using Live Helper chat as crisis/helpline solution need to fulfill these requirements.

* Agents should see as little as possible information about a visitor - preferable none.
* Chats should be deleted after specific period of time. Or their data should be anonymized.

To fulfill this requirement I recommend.

* `Chat configuration -> Data protection` - check `Do not track visitors IP.` we will not log full IP of the visitor. Only country will be shown.
* `Chat configuration -> Data protection` - enter `After how many days encrypt messaes.` we will encrypt visitor messages after specified period of data. You can also check to encrypt operator messages.

Live Helper Chat by default tracks visitor pageviews and his previous chat. This can be avoided by turning off online visitors tracking.

* `Chat configuration -> Online tracking` - uncheck `Enable online site visitors tracking`

To reduce UI for the operator you can remove unwanted permissions also.