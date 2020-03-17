---
id: debug
title: Debuging application
---

## Enabling debug output

In order to see what templates what used in page render you have to enable debug output in settings/settings.ini.php file

```
'debug_output' => true,
```

## Disabling cache

Do not forget that to see all used template you have to disable cache also. 

```
'templatecache' => true,
'templatecompile' => true,
'modulecompile' => true,
```

## How to use debug output

After you have enabled debug output you will see in popup window something like

![](https://livehelperchat.com/var/media/images/used-templates.png)

Regarding widget debuging, you will not see debug output so easily. These instructions applies also to embed widgets and site widgets.

### Chrome

![](https://livehelperchat.com/var/media/images/debug-widget.png)

After you do that. New window will open on chrome, so just delete "view-source:" and you will see full list.

### Firefox

![](https://livehelperchat.com/var/media/images/ff.png)

## Understanding debug output

![](https://livehelperchat.com/var/media/images/css-override.png)

As in above example you see that widget styles can be overrided editing customtheme/css/widget_override.css file. Debug shows all searched files during page load. If you want to edit [invitation to chat green block](https://livehelperchat.com/need-help-tool-tip-configuration-280a.html) the easiest way to do that is just override styles using !important flag. These styles should be in your site CSS not widget_override.css file.

## During some action app returns white screen, what to do?

 * Enable debug output
 * See cache/default.log for error message.
