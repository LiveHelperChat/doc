---
id: leavingmessages
title: Leave a message tutorial
sidebar_label: Leaving messages
---

Since 1.33v we have leave a message functionality. It ads another type of functionality then there is no online operators. By default app allows to write messages for users then there is no online operators, it writes to user that he can leave a message. Now instead of that window you can show window leave a message window then there is no online operators. To enable this window you just have in html code generation window check

*   Show leave a message form then there is no online operators

And after that user will see request form. You can also edit template in e-mail templates section.

*   Recipient is decided in the following order
    *   If department has assigned e-mail this email receives the requests
    *   If department does not have assigned e-mail, check perhaps e-mail template has recipient field filled
    *   If none of the above conditions are met, mail is send to first from users list. In most cases it's the admin.