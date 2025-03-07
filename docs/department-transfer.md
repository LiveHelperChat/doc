---
id: department-transfer
title: Department transfers
sidebar_label: Department transfers
---

This article explains how to set up automatic chat transfers between departments.

## Attributes definition

### Target Department for Unaccepted Chats

Specifies the department to which a chat should be transferred if it remains unaccepted for a specific period.

### Transfer Timeout (seconds)

The duration a chat can remain in a pending state before being transferred to another department (minimum 5 seconds).

### Immediate Transfer if No Online Operators?

Enable immediate transfer to this department if the current department has no online operators.

### Reset Assigned User on Transfer?

If using auto-assignment, this option resets the assigned operator if they haven't accepted the chat within the specified time. This allows another operator's auto-assignment workflow to take over.

![](/img/department/department-transfer.jpg)

### Treat as New Chat in Recipient Department?

If enabled, the system will treat the transferred chat as a new chat in the recipient department.

### Execute Unanswered Chat Logic in Recipient Department?

If enabled, the system will treat the transferred chat as an unanswered chat and execute all unanswered chat logic in the recipient department.

## Setting Up Automatic Chat Transfer

This feature enables the implementation of various chat transfer workflows.

### Prerequisites

*   "Default" is the main department with online operators.
*   "Default" is the initial department with online operators.
*   The "Default" department has a defined transfer target if a chat is unaccepted.

### Workflow Example

*   A user requests a chat. If no operator in the "Default" department accepts the chat within 30 seconds (as configured in the "Default" department settings), the chat is transferred to the "Failover" department. A transfer message is also recorded.

### Handling User Chat Closure

*   If the user closes the chat, the workflow stops. To continue the workflow, a cron job must be set up.
*   `php cron.php -s site_admin -c cron/transfer_workflow` ([more information](development/cronjob.md#default-cronjob-setup))
*   The `http://demo.livehelperchat.com/index.php/site_admin/chat/editchatconfig/run_departments_workflow` variable must be configured. Setting it to 1 allows the cron job to continue the default workflow.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vA-Jik_vJPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
