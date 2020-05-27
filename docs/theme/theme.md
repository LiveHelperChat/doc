---
id: theme
title: Theme
---

## Introduction

If you want to see how themes can look like check our [free themes category](https://livehelperchat.com/free-themes-22c.html).

As with every open source project everyone wan't to change something. We have option to style pretty much everything directly from back office. We can do following things

* Change widget style
* Change back office style
* Have personal themes

## Theming window

Widget themes has few sections. I'll try in short term describe what you can do in each of them.

![](/img/design/theme.png)

## Status widget style

Here you can change main widget attributes. Like logo etc.

:::tip
Some of these attributes are quite old and not used anymore. They will be removed in old version.
:::

## Widget container

Here you can change general outlook of widget. Like borders padding etc.

## Messages style

Here you can change how message style looks like for visitor.

## Need help widget

You can change how need help widget looks like.

:::tip
This is not yet supported in new a widget.
:::


## Chat widget

Here you can change default text in widget itself.

## Custom content

You can write custom HTML above start chat form fields.

## Custom CSS

If you want to style form directly using CSS you can use this section.

## Custom bot style

You can change default bot buttons style.

## Notification

If you are using notifications functionality you should set logo and notification details here.

## FAQ

### I have created a theme, how can I share it with community?

Community Themes will be published in github.

https://github.com/LiveHelperChat/themes


### How do I apply theme?

You can either set default theme in back office or you can choose theme in embed code generation window.

### How do I import a theme?

Navigation to 
> "System configuration" -> "Live help configuration" -> "Import new theme" 

In this window just upload a new theme.

### How do I apply imported theme, set the default one?

*   You can set default theme in 
> Configuration -> Live Chat configuration -> Default theme
*   Also you can apply themes individually to embed code by selecting combobox in widget generation window. So you can just choose which theme widget should use.

### How do I pass theme to start chat window?

Theme argument is /(theme)/<theme_id> so you can just manually write what theme should use. E.g index.php/chat/start/(theme)/2

### I have created a theme and want to share with community where should I send a theme file?

Just send it to me. remdex@gmail.com

<div class="flex-video"><iframe allowfullscreen="" frameborder="0" height="315" src="//www.youtube.com/embed/hNLuLxOq7E0" width="560"></iframe></div>

## Permissions

In order operator to be able edit themes, set default theme he has to have this permission

> 'lhtheme', 'administratethemes'
