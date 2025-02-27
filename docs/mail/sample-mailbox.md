---
id: sample-mailbox
title: Mailbox sample settings
sidebar_label: Mailbox sample settings
---

This is a ready mailbox sample settings for your reference.

## What is a minimal things I have todo to have mails imported?

* In `Settings -> Mail conversations -> Mailbox` setup a new mailbox
    * Enter `Login options`
    * In `Mailbox` tab click `Get mailbox to sync` and choose what IMAP folder you want to sync.
        * `Choose what mailbox you want to sync` E.g for sync folders `{mail.livehelperchat.com:993/imap/ssl}INBOX` AND `{mail.livehelperchat.com:993/imap/ssl}Sent`
        * `Choose where deleted e-mails should be moved` E.g `{mail.livehelperchat.com:993/imap/ssl}Trash`
        * `Choose a send folder` E.g `{mail.livehelperchat.com:993/imap/ssl}Sent`
    * Define a `Matching Rule` in `Settings -> Mail conversation -> Matching rules` These rules defines to what department e-mails should go from specific mailbox.
    * If you do not see a sent e-mails in the mail ticket once you reply you have to choose in mailbox `Options` a `Create a copy in a send folder.`. Then once you send e-mail from LHC it's copy will be created in a sent folder and imported afterward.
* Setup cronjob which will fetch e-mails
    * Boilerplate sampel for all cronjobs [Boilerplate cronjobs](development/cronjob.md#boilerplate-cronjobs-if-you-have-mail-version-of-live-helper-chat-and-you-are-using-php-resque)
    * Just mail sync [cronjob](development/cronjob.md#mail-syncing-cronjobs), you can run it manually first time.
        * If your mailbox import takes long time or you have many mailbox you can decrease frequency how frequent that cronjob is run.
        * Best performance is reached if [php-resque](https://github.com/LiveHelperChat/lhc-php-resque) extension is used.


## Sample settings by screenshots

### Login settings

![](/img/mail/example-login.png)

### Options

* Here we have clicked `Import since this unix timestamp.` button `Set to now` so we will import mails only from present moment.
* Mails will checked every 3 minutes `Check for new messages interval in seconds. - 180` seconds.

### Mailbox

* You have to choose what folders you want to sync
* Imap folder where deleted mailx should be moved
* Imap folder where sent e-mails should be moved

![](/img/mail/example-mailbox.png)

### Matching rules

You have to choose at least one matching rule for the mailbox.

![](/img/mail/example-matching-rule.png)

#### Matching rule configuration sample

![](/img/mail/example-matching-rule-body.png)

## How to test debug

* You can reduce sync interval to 30 seconds and run crojob manually.
* If something does not work look at `Utilities` tab
* You can in Utilities tab click `Reset and import` or just `Reset import status` and run cronjob again.
* If nothing there read [how to see logs](debug.md#during-some-action-app-returns-white-screen-what-to-do)
* You can also try to run cronjob manually. It will always try to fetch e-mails. You can look at `Utilities` tab afterward.
* `php cron.php -s site_admin -c cron/mail/debug_mailbox -p <mailbox_id>`