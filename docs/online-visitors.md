---
id: online-visitors
title: Online visitors tutorial
sidebar_label: Online visitors
---

## My operators can not see online visitors, what I'm missing?

By default if user does not have assigned "All departments" in user departments assigment management window he won't see anything. Here is basic flow what you should do

*   If user should see all departments online visitors (with department and without) to him should be assigned "All departments". 
*   If operator should see only some departments users, just select these departments.
*   Also you can assign to user "lhchat" => "sees_all_online_visitors" so it will ignore assigned departments and will show all online visitors.

## My users loose chat session then they navigate through the site, duplicate online users records

There is just few things which can be incorrectly configured

 * Your site is switching between http and https mode, but you have enable HTML5 storage. HTML5 storage is different for each http and https site
 * You have entered site domain in back office, but embeded code in site with different domain.
 * Checked that Live Helper Chat should use ssl but site in which you have embeded widget does not use https
 ​![](https://livehelperchat.com/var/media/images/cookiessl.png)
 * In embed code generation window you have entered domain where Live Helper Chat is installed, but not the site it is embeded. It has to be site domain where Live Helper Chat is embeded.

So basically that's the things which can go wrong. The more flexibility I give, the more errors users does. So change these values if you know what you are doing!

## How to send a manual message to online visitor?

* Generate code with checked option "Check for messages from operator"
* Enable online users tracking on online users section
* Then you see online user just click send message to user.