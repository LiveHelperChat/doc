---
id: automatic-translations
title: Automatic Translation Workflow
sidebar_label: Automatic translation
---

Live Helper Chat supports automatic translations during conversations.

Youtube manuals

* https://youtu.be/B8By48wGbSg - translation setup for normal chatting
* https://youtu.be/WnIzwbz4hr8 - bot messages automatic translation

## Setup

Navigate to `System configuration -> Live help configuration -> Automation (Automatic translations)`.

Here, you can choose your preferred service provider and enter its details.

## Usage Workflow

There are two possible workflows:

 * Automatic message translation
 * Manual message translation

### Automatic Message Translation

To enable automatic translation for messages, click on the icon in the right column:

![](/img/chat/automatic-translations-popoup.png)

This will display the available options for the current chat:

![](/img/chat/chat-translations-options.png)

The system automatically attempts to detect the visitor's and operator's preferred languages.

If you select `Automatically translate operator and visitor messages`, every message sent by the visitor or operator will be translated automatically.

Additionally, when saving, you can select `On save automatically translate old chat messages. If not checked only new messages will be translated.` to translate all previous visitor/operator messages.

### Manual Message Translation

If you prefer not to use automatic translations, you can translate specific messages by right-clicking on the message you want to translate.

![](/img/chat/translation-opt-in-message.png)

Alternatively, after writing a message, you can click the toolbar icon ![](/img/chat/toolbar-language-icon.png) to translate the operator message within the message area.

### How to Set Up AWS Message Translations

To use AWS for message translations, you must first set up Composer from the `lhc_web` folder.

Execute the following command. If you encounter an error, ensure you have the most recent version from the official repository and that your `composer.json` file resembles the one found at https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/composer.json. If you are updating from an older version, replace the `index.php` and `cron.php` files.

> `composer install`

Next, uncomment the following lines by removing the two leading dashes:

* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/index.php#L31
* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/cron.php#L25

## Permissions

Operators require the following permission to use the translation functionality:

> 'lhtranslation','use'
