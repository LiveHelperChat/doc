---
id: cloudtalk
title: CloudTalk integration
---

Demo - https://www.youtube.com/watch?v=5Jkmo8MSAUE

Requirements

* 3.91v Live Helper Chat version
* CloudTalk account with Workflow support.
* Extension https://github.com/LiveHelperChat/cloudtalkio

## Install requirements in Live Helper Chat

* Clone extension in `lhc_web/extensions` folder. Structure should look like `extension/cloudtalkio`
* Execute `extension/cloudtalkio/doc/install.sql` to install new tables.
* Activate extension in `lhc_web/settings/settings.ini.php` file. Sample place https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L29
* Copy `extension/cloudtalkio/settings/settings.ini.default.php` to `extension/cloudtalkio/settings/settings.ini.php`
* Change 
  * `ACCESS_KEY_ID` - In CloudTalk `Account -> Settings -> API Keys` `ACCESS KEY ID` AND `ACCESS KEY SECRET`
  * `ACCESS_KEY_SECRET`- In CloudTalk `Account -> Settings -> API Keys` `ACCESS KEY ID` AND `ACCESS KEY SECRET`
  * `lhc_key` - put any random string, we will need it configuring workflows in CloudTalk
* In system configuration now clear cache.

There is two permission in the module

* `lhcloudtalkio,use_admin` - `Allow operator to configure CloudTalk`. Only admins should have it.
* `lhcloudtalkio,use_operator` - `Allow operator to use CloudTalk`. Operators should have it to use

In the left menu under `Modules` you will find `CloudTalk` menu item.

There are three items

### Call history

Here you will find a call history.

### Live Agent List

This shows what data sees Live Helper Chat directly from CloudTalk. It's usefull just for investigation purposes.

### Agents in Live Helper Chat

This list shows all existing agents which are mapped to CloudTalk agents.

To import agents you have to have running following cronjob. It should be run every hour. Or manually if you agents in CloudTalk does not change often.

```shell
php cron.php -s site_admin -e cloudtalkio -c cron/sync_agents
```

If you did everything correct you should see list of your agents.

Next you can assign Live Helper Chat agent to correct CloudTalk agent.

![](/img/integration/cloudtalk/agents.png)

After that your agent can start sending invitation for a live call during conversations. Agent will see relevant actions only of chat has phone number. So agent might need to enter it before a call.

### Contacts remove cronjob

If you do not want to keep contacts in CloudTalk after a chat has ended. You can setup this cronjob. It will remove contacts if from call has passed more than 1 hour.

```shell
php cron.php -s site_admin -e cloudtalkio -c cron/delete_contacts
```

### PHP-Resque

If you are using `lhcphpresque` extension. https://github.com/LiveHelperChat/lhc-php-resque

You will have to add to settings [file](https://github.com/LiveHelperChat/lhc-php-resque/blob/master/lhcphpresque/settings/settings.ini.default.php) new job. 

CloudTalk extension always will delegate Rest API calls to PHP-Resque to avoid blocking php-fpm workers. 

```
lhc_cloudtalk
```

## Install requirements in CloudTalk

For integration work you will need `API Keys` and setup `Workflow Automations`

### API Keys

Copy from `Account -> Settings -> API Keys` `ACCESS KEY ID` AND `ACCESS KEY SECRET`

Put them in `extension/cloudtalkio/settings/settings.ini.default.php` if you have not done that so far.

### Workflow Automations

We meed to setup 5 `Workflow Automations` for integration to work. They cover these scenarios

* Agent status changes
* Call ended event
* Call answered event
* Call Started Event
* Ringing on Agent event

I'll paste each of them configuration

Don't forget to change in each window 

* `lhc_key` value to your defined value in `extension/cloudtalkio/settings/settings.ini.php`
* Endpoint address from `https://devmysql.livehelperchat.com/cloudtalkio/callback` to your installation address. 

#### Agent status tracking

Basic window for integration

![](/img/integration/cloudtalk/agent-status-main.png)

Trigger settings

![](/img/integration/cloudtalk/agent-status-trigger.png)

API Request Settings. Don't forget to change `lhc_key` value to your random string.

![](/img/integration/cloudtalk/agent-status-api.png)

#### Call ended event

Call ended trigger

![](/img/integration/cloudtalk/call-ended-trigger.png)

API Request Settings. Don't forget to change `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-ended-api.png)

#### Call answered

Call answered trigger

![](/img/integration/cloudtalk/call-answered-trigger.png)

API Request Settings. Don't forget to change `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-answered-api.png)

#### Ringing on Agent

Call answered trigger

![](/img/integration/cloudtalk/ringing-agent-trigger.png)

API Request Settings. Don't forget to change `lhc_key` value to your random string.

![](/img/integration/cloudtalk/ringing-agent-api.png)

#### Call started

Call started trigger

![](/img/integration/cloudtalk/call-started-trigger.png)

API Request Settings. Don't forget to change `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-started-api.png)




