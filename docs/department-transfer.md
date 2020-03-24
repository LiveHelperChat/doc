---
id: department-transfer
title: Department transfers
sidebar_label: Department transfers
---

This article defines how to use automatic chat transfer between departments.

## Attributes definition

### To what department chat should be transferred if it is not accepted

Defines to what department chat should be transfered if chat is not accepted for specific amount of time.

### Timeout in seconds before chat is transferred to another department. Minimum 5 seconds.

How long chat can be in pending state before it's transfered to to another department.

### Transfer immediately to this department if current department has no online operators?

You can transfer to this chat immediately after chat started if current department does not have online operators.

### Reset assigned user on chat transfer?

If you are using auto assignment workflow and let say chat is assigned to operator, but operator did not accepted chat in time it makes sense to reset this operator. If other operator has it's own auto assignment workflow.

![](/img/department/department-transfer.jpg)

### Execute new chat logic again for recipient department?

System will see this chat as new chat.

### Execute unanswered chat logic again for recipient department?

System will see this chat as unanswered chat and execute all unanswered chat logic.

## How to setup automatic chat transfer workflow? 

This feature allows us to implement these types of workflows.

### Precondition

*   "Default" is our main department | There is online operator
*   "Default" is our initial department | There is online operator
*   "Default" department has configured to what department chat has to be transfered if it was not accepted.

### Workflow

*   User request chat, but operator from department "Default" does not accepts chat for 30 second. This variable was configured in department "Default". So since that time no one accepted chat, chat is transfered to "Failover" department. Message for transfer is also being recorded.

### What happens then user closes the chat?

*   Since user closes the chat workflow stops. To continue workflow cronjob have to be setup.
*   "php cron.php -s site_admin -c cron/workflow"
*   [http://demo.livehelperchat.com/index.php/site_admin/chat/editchatconfig/run_departments_workflow](http://demo.livehelperchat.com/index.php/site_admin/chat/editchatconfig/run_departments_workflow) - variable have to be configured. 1 - it will allow cronjob to continue default workflow.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vA-Jik_vJPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
