---
id: files
title: Working with files
sidebar_label: Files
---

## Introduction

This section covers the main file configuration.

![](/img/files/files-configuration.jpg?v=1)

You can allow file uploads for operators, visitors, or both. Operators also need the appropriate permissions to upload files.

Operators can upload files in a few ways:

*   By pasting content from the clipboard using `ctrl+v` in the message area.
*   By dragging and dropping a file into the designated area.
*   By manually selecting a file.

Files can be persistent or non-persistent. Persistent files are not deleted by the file maintenance workflow.

## Antivirus Setup (ClamAV)

You can test the antivirus setup by executing:

```shell
php cron.php -s site_admin -c cron/util/test_antivirus -p <path_to_file>
```

To debug, you can edit these files:

```
https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhexternal/Clamav.php
modules/lhcron/util/test_antivirus.php
```

## Files Maintenance

This article explains how file maintenance works. To automate this process, you need to have the [files maintenance cronjob](development/cronjob.md#files-maintenance) running. This maintenance script only deletes chat-related files. Therefore, if you upload files separately, they will not be deleted because they are persistent.

![](/img/files/maintain.jpg)

[Cronjob location (GitHub)](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/modules/lhcron/util/maintain_files.php)

### Definition of Fields

*   **Delete files**
    *   **Visitors** - Indicates that visitor files should be deleted.
    *   **Operators** - Indicates that operator files should be deleted.
*   **If files is (OR)** - If you do not choose any option, all file types will be deleted.
    *   **Unassigned to chat** - Delete files that are not related to any chat (operator/visitor). For example, a screenshot of what a visitor sees in the online visitors list.
    *   **Assigned to chat** - Delete files that are associated with a chat (operator/visitor).
*   **And operator file is older than n days** - Delete files older than the defined number of days.
*   **And visitor file is older than n days** - Delete files older than the defined number of days.

## Permissions

To allow a user to configure file uploads:

> 'lhfile', 'use'

To allow operators to send files to visitors:

> 'lhfile', 'use_operator'

To allow operators to upload new files:

> 'lhfile', 'upload_new_file'

To allow operators to list all uploaded files (they will see a "List of files" link):

> 'lhfile', 'file_list'

To allow operators to delete all files:

> 'lhfile', 'file_delete'

To allow operators to delete their own chat files:

> 'lhfile', 'file_delete_chat'


