---
id: multiple-languages
title: Multiple Languages
---

## Introduction

You can create a single bot that supports multiple languages by translating the messages presented in the bot building interface. Just follow these guidelines.

## Translating Bot Messages

To start translating bot messages, you first have to write messages to the user in a specific way. See [text messages](text.md#text-message).

For example: `{welcome_message__Welcome message}`. In this case, our message identifier would be `welcome_message`.

## Translation Groups

Next, you have to create a translation group. Navigate to:

> System configuration -> Translations groups

Then, create a translation group.

:::tip
Besides creating a translation group, you can also have a custom photo and bot nickname for each language.
:::

## Setting a Translation Group

To set a translation group, you have to edit a `Department`. In the `Bot configuration` tab, choose the desired group.

## Setting Translations for Messages

When you click on a translation group, you will be presented with `Translations items`. The window should look like this after you click on a translation group title.

![](/img/bot/translations-groups.png)

Now, we just create a new translated message.

![](/img/bot/translation-item.png)

In this scenario, we show one content if a replaceable variable is filled and if not default message.

```
{is_empty__args.replace_array.{account_recover_edge_case}}You account was recovered{/is_empty}
{not_empty__args.replace_array.{account_recover_edge_case}}{account_recover_edge_case}{/not_empty}
```

* [Replaceable variables](replaceable-variables.md) are supported in `Translation items`.
* You can also use replaceable variables in the translation definition.
* `Translation items` can be nested within other `Translation items`.

## Translating Automatically Items from Translation Items

This feature allows to translate automatically translation items if we don't find user language translation in translation item. It's like fine grain control where to use automatic translations.

To translate specific messages within `Translation items` you have to check.

> If translation is not found use translation service

![](/img/bot/translation-auto.png)

For it to work you have to define what language is the default language in the `Bot individualization` group

> For automatic translations we have to know what is the main bot language. From this language we will translate bot messages.

![](/img/bot/bot-translation-group.png)

Automatic translation service has to be configured.

## Translating Automatically All Triggers

Most common triggers used to send information to user have `Automatic translations` option. Only triggers with selected option will be automatically translated.

![](/img/bot/translate-trigger.png)

For it to work you have to have configured automatic translations service.

*   **If you are translating all trigger response you should not use translation identifiers**
*   To speed up performance I suggest enable cache in `Automatic Translations` configuration window.

## Required permissions

The only required permission to work with bot translations are

> 'lhbot','use'

