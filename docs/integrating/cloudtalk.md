---
id: cloudtalk
title: CloudTalk Integration
---

Demo: https://www.youtube.com/watch?v=5Jkmo8MSAUE

**Requirements:**

*   Live Helper Chat version 3.91v or later
*   CloudTalk account with Workflow support
*   CloudTalk extension: [https://github.com/LiveHelperChat/cloudtalkio](https://github.com/LiveHelperChat/cloudtalkio)

## Install Requirements in Live Helper Chat

1.  Clone the extension into the `lhc_web/extensions` folder. The structure should look like this: `extension/cloudtalkio`.
2.  Execute `extension/cloudtalkio/doc/install.sql` to install the new tables.
3.  Activate the extension in the `lhc_web/settings/settings.ini.php` file. See this sample: [https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L29](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L29).
4.  Copy `extension/cloudtalkio/settings/settings.ini.default.php` to `extension/cloudtalkio/settings/settings.ini.php`.
5.  Modify the following settings in `extension/cloudtalkio/settings/settings.ini.php`:
    *   `ACCESS_KEY_ID`: In CloudTalk, go to `Account -> Settings -> API Keys` to find the `ACCESS KEY ID` and `ACCESS KEY SECRET`.
    *   `ACCESS_KEY_SECRET`: In CloudTalk, go to `Account -> Settings -> API Keys` to find the `ACCESS KEY ID` and `ACCESS KEY SECRET`.
    *   `lhc_key`: Enter a random string. This will be needed when configuring workflows in CloudTalk.
6.  Clear the system cache in the system configuration.

There are two permissions associated with this module:

*   `lhcloudtalkio,use_admin`: Allows an operator to configure CloudTalk. Only administrators should have this permission.
*   `lhcloudtalkio,use_operator`: Allows an operator to use CloudTalk. Operators should have this permission to use the CloudTalk integration.

In the left menu under `Modules`, you will find the `CloudTalk` menu item.

There are three sub-items:

### Call History

Here you can find a call history.

### Live Agent List

This displays the data that Live Helper Chat receives directly from CloudTalk. It is useful for investigation purposes.

### Agents in Live Helper Chat

This list displays all existing agents who are mapped to CloudTalk agents.

To import agents, you must run the following cron job. It should be run every hour, or manually if your agents in CloudTalk do not change often.

```shell
php cron.php -s site_admin -e cloudtalkio -c cron/sync_agents
```

If you have done everything correctly, you should see a list of your agents.

Next, you can assign a Live Helper Chat agent to the corresponding CloudTalk agent.

![](/img/integration/cloudtalk/agents.png)

After that, your agents can start sending invitations for live calls during conversations. Agents will only see relevant actions if the chat has a phone number. The agent might need to enter it before initiating a call.

### Bot Configuration

For the extension to work correctly, two commands must be defined. These commands are sent once an invitation or direct call is started. You can download the bot configuration [here](/img/integration/cloudtalk/bot.json).

```
!cloudtalk
```

and

```
!cloudtalkdirect
```

Configuration example:

![](/img/integration/cloudtalk/commands.png)

### Contacts Removal Cron Job

If you do not want to keep contacts in CloudTalk after a chat has ended, you can set up this cron job. It will remove contacts if more than 1 hour has passed since the call ended.

```shell
php cron.php -s site_admin -e cloudtalkio -c cron/delete_contacts
```

### PHP-Resque

If you are using the `lhcphpresque` extension ([https://github.com/LiveHelperChat/lhc-php-resque](https://github.com/LiveHelperChat/lhc-php-resque)), you will have to add a new job to the settings [file](https://github.com/LiveHelperChat/lhc-php-resque/blob/master/lhcphpresque/settings/settings.ini.default.php).

The CloudTalk extension will always delegate REST API calls to PHP-Resque to avoid blocking php-fpm workers.

```
lhc_cloudtalk
```

## Install Requirements in CloudTalk

For the integration to work, you will need `API Keys` and to set up `Workflow Automations`.

### API Keys

Copy the `ACCESS KEY ID` and `ACCESS KEY SECRET` from `Account -> Settings -> API Keys`.

Paste them into `extension/cloudtalkio/settings/settings.ini.default.php` if you have not already done so.

### Workflow Automations

You need to set up 5 `Workflow Automations` for the integration to work. These cover the following scenarios:

*   Agent status changes
*   Call ended event
*   Call answered event
*   Call Started Event
*   Ringing on Agent event

Here is the configuration for each of them.

Don't forget to change the following in each window:

*   `lhc_key` value to the value you defined in `extension/cloudtalkio/settings/settings.ini.php`.
*   Endpoint address from `https://devmysql.livehelperchat.com/cloudtalkio/callback` to your installation address.

#### Agent Status Tracking

Basic window for integration:

![](/img/integration/cloudtalk/agent-status-main.png)

Trigger settings:

![](/img/integration/cloudtalk/agent-status-trigger.png)

API Request Settings. Don't forget to change the `lhc_key` value to your random string.

![](/img/integration/cloudtalk/agent-status-api.png)

#### Call Ended Event

Call ended trigger:

![](/img/integration/cloudtalk/call-ended-trigger.png)

API Request Settings. Don't forget to change the `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-ended-api.png)

#### Call Answered

Call answered trigger:

![](/img/integration/cloudtalk/call-answered-trigger.png)

API Request Settings. Don't forget to change the `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-answered-api.png)

#### Ringing on Agent

Call answered trigger:

![](/img/integration/cloudtalk/ringing-agent-trigger.png)

API Request Settings. Don't forget to change the `lhc_key` value to your random string.

![](/img/integration/cloudtalk/ringing-agent-api.png)

#### Call Started

Call started trigger:

![](/img/integration/cloudtalk/call-started-trigger.png)

API Request Settings. Don't forget to change the `lhc_key` value to your random string.

![](/img/integration/cloudtalk/call-started-api.png)




