---
id: audit
title: Audit
---
## Introduction

Here you can see all events logged. If you are developing and log records they will be visible here.

> "System configuration" => "Audit log"

![](/img/audit/audit.jpg)

## Audit configuration

From audit configuration you can choose what basic objects changes should be logged

![](/img/audit/audit-configuration.jpg)

:::tip
For older records deletion you have to be running [workflow cronjob](../development/cronjob.md#default-cronjob-setup) 
:::

## How to log custom events from extensions?

If you are developing extension you can log something there like this

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

Required permissions to see log

> 'lhsystem','auditlog'

Required permissions to configure audit log

> 'lhaudit','use'