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

When you click on translation group you will be presented with `Translations items`. Window should look like this once you click on translation group title.

![](/img/bot/translations-groups.png)

Now we just create a new translated message.

![](/img/bot/translation-item.png)

## Translating automatically items from Translation items

This feature allows to translate automatically translation items if we don't find user language translation in translation item. It's like fine grain control where to use automatic translations.

To translate specific messages within `Translation items` you have to check.

> If translation is not found use translation service

![](/img/bot/translation-auto.png)

For it to work you have to define what language is the default language in the `Bot individualization` group

> For automatic translations we have to know what is the main bot language. From this language we will translate bot messages.

![](/img/bot/bot-translation-group.png)

Automatic translation service has to be configured.

## Translating automatically all trigger

Most common triggers used to send information to user have `Automatic translations` option. Only triggers with selected option will be automatically translated.

![](/img/bot/translate-trigger.png)

For it to work you have to have configured automatic translations service.

* **If you are translating all trigger response you should not use translation identifiers**
* To speed up performance I suggest enable cache in `Automatic Translations` configuration window.

## Required permissions

The only required permission to work with bot translations are 

> 'lhbot','use'

