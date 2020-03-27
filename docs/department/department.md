---
id: department
title: Department
sidebar_label: Department
---

This article describes everything related to departments and how can it be used.

## Departments

Main departments list.

## Departments groups

Department groups are usefull to group multiple department into single unit. So statistic can be generated just by choosing single department group.

## Departments limit groups

By default you can configure each department individually how many pending chats department can have before becoming offline. In this section you can group departments into group so you can change this limit for all departments at once. Department to be online will have to satisfy the department group limit and individual limit of pending chats.

## Department configuration

This is main window of department.

![](/img/department/department.jpg)

## Attributes definition

### Name

This is visible for visitor as department option to choose.

### E-mail

Default department e-mail. Offline request will go to this e-mail by default.

### Visible only if online

If department is offline it won't be visible in list to choose from.

### Disabled

If for some reason you want to disable department. You can choose this option. E.g if departments you used as products and product is no longer available.

### Hidden

Visitors still can start chat but only if you pass explicitly this department as only department in embed code.

### Maximum pending chats, if this limit is reached department becomes offline automatically (Group limit - 5000)

Department can have it's own limit of pending chats it can have before becoming offline. Group limit also applies.

### Delay in seconds before leave a message form is shown. 0 Means functionality is disabled,

If chat is pending for defined amount in time visitor will be redirected to survey form.

### Priority, used for chats priority

When customer starts a chat this department started chats will have higher priority and appear higher in pending chats list. If you are using auto assignment workflow they will be assigned first one.

### Priority, used for departments sort

This priority is used just for dropdowns in various places where departments list are rendered.

## Automate online hours

First of all if you want ignore operator status completely read [online hours](online-hours.md) article.

Online hours can be defined
 * By day/hour.
 * By custom period.
 
![](/img/department/online-hours.jpg)

:::tip 
You should set [time zone](time-zone.md) to match your working hours.
:::

---

## Notifications

In this section you can define various notifications messaged based what happens within a chat.

![](/img/department/notifications.jpg)

## Chat transfer workflow

Please refer to [Department transfers](department-transfer.md) article.

## Auto assignment

Please refer to [Auto assignment](auto-assignment.md) article.

## Product

Please refer to [Product](department/product.md) article.

## Miscellaneous

You can disable there option for operator to send mail to visitor from chat window.

## Bot configuration

You can choose what bot should handle chats started in this department.

## Survey

To what survey visitor should be redirected

