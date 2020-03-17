---
id: department-transfer
title: Automatic transfers between departments, how it works
sidebar_label: Department transfers
---

This feature allows us to implement these types of workflows.

Precondition

*   "General" is our main department | There is online operator
*   "Commercial" is our initial department | There is online operator
*   "Commercial" department has configured to what department chat has to be transfered if it was not accepted.

Workflow

*   User request chat, but operator from department "Commercial" does not accepts chat for 30 second. This variable was configured in department "Commercial". So since that time no one accepted chat, chat is transfered to "General" department. Message for trasnfer is also being recorded.

What happens then user closes the chat?

*   Since user closes the chat workflow stops. To continue workflow cronjob have to be setup.
*   "php cron.php -s site_admin -c cron/workflow"
*   [http://demo.livehelperchat.com/index.php/site_admin/chat/editchatconfig/run_departments_workflow](http://demo.livehelperchat.com/index.php/site_admin/chat/editchatconfig/run_departments_workflow) - variable have to be configured. 1 - it will allow cronjob to continue default workflow.