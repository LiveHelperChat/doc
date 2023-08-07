---
id: automatic-translations
title: Automatic translation's workflow
sidebar_label: Automatic translation
---

Live Helper Chat supports automatic translations while conversation is going.

Youtube manuals

* https://youtu.be/B8By48wGbSg - translation setup for normal chatting
* https://youtu.be/WnIzwbz4hr8 - bot messages automatic translation

## Setup

Navigate to `System configuration -> Live help configuration -> Atomation (Automatic translations)`

There you can choose what service provider you want to use and enter it's details.

## Usage workflow

There is possible two workflows

 * Automatic messages translation
 * Manual messages translations

### Automatic messages translation

For messages being translated automatically you have to click on the right column 

![](/img/chat/automatic-translations-popoup.png)

This will show possible options for the present chat

![](/img/chat/chat-translations-options.png)

System always tries to detect a visitor and preferred operator language automatically.

If you check `Automatically translate operator and visitor messages` every message send by visitor/operator will be translated automatically.

Also while saving you can check `On save automatically translate old chat messages. If not checked only new messages will be translated.` so system will try to translate all previous visitor/operator messages.

### Manual messages translation

If you do not want to use automatic translations for whatever reason you can translate specific messages by clicking right mouse button on the message you want to translate.

![](/img/chat/translation-opt-in-message.png)

Also after you wrote a message you can click on the toolbar ![](/img/chat/toolbar-language-icon.png) and operator message will be translated in the message area.

### How to setup AWS messages translations

For AWS messages translations you have to setup composer first from `lhc_web` folder

Just do. If you get an error make sure you have the most recent version from official repository. And your `composer.json` file look like https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/composer.json
If you are updating from older version make sure you replace `index.php` and `cron.php` file

> `composer install`

Also uncomment those lines. Remove two dashes

* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/index.php#L31
* https://github.com/LiveHelperChat/livehelperchat/blob/ee3aea143c3f57751206ca4b3cfeee95f4ba51d5/lhc_web/cron.php#L25

## Permissions

Operators should have this permission in order to use translations functionality.

> 'lhtranslation','use'
