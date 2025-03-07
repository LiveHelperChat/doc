---
id: audit
title: Audit
---
## Introduction

The audit log displays all recorded events. If you are a developer and logging records, they will be visible here.

> "System configuration" => "Audit log"

![](/img/audit/audit.jpg)

## Audit Configuration

The audit configuration allows you to choose which basic object changes should be logged.

![](/img/audit/audit-configuration.jpg)

:::tip
To delete older records, you must run the [workflow cronjob](../development/cronjob.md#default-cronjob-setup).
:::

## How to Search for Specific Object Modifications/Deletions

You can search for object modifications by filtering by category:

*   `CannedMsg` - Canned message modification
*   `CannedMsgDelete` - Canned message delete event
*   `AutoResponder` - Auto Responder modify event
*   `AutoResponderDelete` - Auto Responder delete event
*   `Subject` - Subject modify event
*   `SubjectDelete` - Subject delete event

If you provide an Object ID in your search, you can see exactly which object was modified.

## How to Log Custom Events from Extensions

If you are developing an extension, you can log events like this:

```php
erLhcoreClassLog::write(print_r(array('just some data to log'),true),
    ezcLog::SUCCESS_AUDIT,
    array(
        'source' => 'Bot',
        'category' => 'invalid_username',
        'line' => __LINE__,
        'file' => __FILE__,
        'object_id' => $chat->id
    )
);
```

## Permissions

Required permissions to view the audit log:

> 'lhsystem','auditlog'

Required permissions to configure the audit log:

> 'lhaudit','use'
