---
id: files-maintenance
title: Files maintenance
sidebar_label: Files maintenance
---

### Intro

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

