---
id: multiple-languages
title: Multiple languages
---

## Introduction

You can have one bot for many langauges as you can translation all the messages presented in bot building interface. You just have to follow few guidelines.

## Translating bot messages

To start translating bot messages first you have to write messages to user a specific way. See [text messages](text.md#text-message)

E.g `{welcome_message__Welcome message}` our message identifier would be  `welcome_message`

## Translations groups

Next thing you have to do is to create a translation group. Navigate to
> System configuration -> Translations groups

Just create a translation group.

:::tip
Besides creating a translation group itself you can also have custom photo and bot nick per language.
:::

## Setting translation group

To set translation group you have to edit `Department` and in `Bot configuration` tab just choose that group.

## Set translation for our message

When you click on translation group you will be presented with `Translations items`. Window should look like once you click on translation group title.

![](/img/bot/translations-groups.png)

Now we just create a new translated message.

![](/img/bot/translation-item.png)

## Required permissions

The only requierd permission to work with bot trasnlations are 

> 'lhbot','use'

