---
id: dashboard
title: Dashboard
---

Since 2.32v live helper has new main tab called Dashboard. 

If you have upgraded but you do not see new dashboard tab Icon. You have to do the following.

Go to

1.  Configuration
2.  Live Help Configuration
3.  Chat configuration
    1.  Link on demo E.g [http://demo.livehelperchat.com/site_admin/chat/listchatconfig](http://demo.livehelperchat.com/site_admin/chat/listchatconfig)
4.  Go to "Misc"
5.  Find "Home page tabs order" and at very begining add "dashboard" in demo it looks like
    1.  Default after new install: dashboard,online_users,online_map
    2.  All possible options : dashboard, online_users, pending_chats, online_map, active_chats, unread_chats, closed_chats, online_operators
6.  That's all after save you will see new dashboard tab

### How to change dashboard widgets position?

1.  Repeat same steps untill 5 step and just look for "Home page dashboard widgets order"
2.  | - means column. You can rearange as you want.
3.  Dashboard possible widgets: online_operators, departments_stats, pending_chats, unread_chats, transfered_chats, active_chats, closed_chats

### My operators does not see a departments statistic widget?

You have to assign your operators new permission.  
`lhuser => canseedepartmentstats`

Have fun.