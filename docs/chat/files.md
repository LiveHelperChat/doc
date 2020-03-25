---
id: files
title: Working with files
sidebar_label: Files
---

## Introduction

Main files configuration section.
​![](/img/files/files-configuration.jpg)

You can allow either upload files to operators or visitors. Operators has to have permission to upload files also.

Operator can upload file few ways
 * Being in message area just `ctrl+v` it will paste content from clipboard.
 * Drop file in dedicated area.
 * Choose file manually
  
Files can be two types persistent or not. Persistent file means it won't be deleted by files maintenance workflow.

## Files maintenance

This article will explain how files maintenance works. To automate this process you have to have [files maintenance cronjob](development/cronjob.md#files-maintenance) running. This maintenance script deletes only chat related files. So if you upload files separately it won't be deleted as they are presistent. 

​![](/img/files/maintain.jpg)

[Cronjob location (github)](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/modules/lhcron/util/maintain_files.php)

### Definition of fields

 * Delete files
    * Visitors - indicates we should delete visitors files
    * Operators - indicates we should delete operators files
 * if files is (OR) - if you do not choose any - all file types will be deleted.
    * Unassigned to chat - delete files which are not related to any chat (operator/visitor). E.g you made screenshot what visitor sees in online visitors list.
    * Assigned to chat - delete files which are associated with chat (operator/visitor)
 * And operator file is older than n days - delete files older than defined days numbers
 * And visitor file is older than n days - delete files older than defined days numbers

## Permissions

To allow user to configure files upload
> 'lhfile', 'use'

To allow operators to send files to visitor
> 'lhfile', 'use_operator'

Allow operator to upload new file
> 'lhfile', 'upload_new_file'

To allow operators to list all uploaded files. He will see `List of files` link.
> 'lhfile', 'file_list'

To allow operators to delete all files
> 'lhfile', 'file_delete'

To allow operators to delete his chat files
> 'lhfile', 'file_delete_chat'


