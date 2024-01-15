---
id: slack-notification
title: Slack notification
---

## What does it do?

This scenario will send a notification if a visitor sends a message with a specific keyword. Same way can be used to have notification about new chat etc...

## How does it works?

* We setup `Home > System configuration > Webhooks` for `chat.addmsguser` 
* We have a bot where we defined keyword we want to listen.
* Bot executes our Rest API call and sends slack notification.

### Rest API

For that you will need to setup APP for slack and get `Webhook URL` and `xoxb-xxx` token. Save below content as json and import. 

```json
{"name":"SlackNotification","description":"","configuration":"{\"host\":\"https:\/\/hooks.slack.com\",\"ecache\":false,\"parameters\":[{\"method\":\"POST\",\"authorization\":\"bearer\",\"api_key_location\":\"header\",\"query\":[],\"header\":[],\"conditions\":[],\"postparams\":[],\"userparams\":[],\"output\":[{\"key\":\"\",\"value\":\"\",\"id\":\"temp1705310616950\",\"success_name\":\"Failure\",\"success_header\":\"400\"}],\"id\":\"temp1705065304030\",\"suburl\":\"\/services\/XXXXX\/XXXXXXXXXX\/XXXXXXXXXXXXXXXX\",\"name\":\"NotifySlack\",\"auth_bearer\":\"xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXX\",\"body_request_type\":\"raw\",\"body_request_type_content\":\"json\",\"body_raw\":\"{\\n\\t\\\"blocks\\\": [\\n\\t\\t{\\n\\t\\t\\t\\\"type\\\": \\\"rich_text\\\",\\n\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\\"type\\\": \\\"rich_text_section\\\",\\n\\t\\t\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"PID: \\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"style\\\": {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\\"bold\\\": true\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"raw_{{args.chat.chat_variables_array.pid}} \\\"\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t]\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\t\\\"type\\\": \\\"rich_text\\\",\\n\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\\"type\\\": \\\"rich_text_section\\\",\\n\\t\\t\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"Chat ID: \\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"style\\\": {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\\"bold\\\": true\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"raw_{{args.chat.id}} \\\"\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t]\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t},\\n                {\\n\\t\\t\\t\\\"type\\\": \\\"rich_text\\\",\\n\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\\"type\\\": \\\"rich_text_section\\\",\\n\\t\\t\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"Keyword: \\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"style\\\": {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\\"bold\\\": true\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"text\\\",\\n\\t\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"raw_{{msg}} \\\"\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t]\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\t\\\"type\\\": \\\"actions\\\",\\n\\t\\t\\t\\\"elements\\\": [\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\\"type\\\": \\\"button\\\",\\n\\t\\t\\t\\t\\t\\\"style\\\": \\\"primary\\\",\\n\\t\\t\\t\\t\\t\\\"text\\\": {\\n\\t\\t\\t\\t\\t\\t\\\"type\\\": \\\"plain_text\\\",\\n\\t\\t\\t\\t\\t\\t\\\"text\\\": \\\"Review\\\",\\n\\t\\t\\t\\t\\t\\t\\\"emoji\\\": true\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t\\\"url\\\": \\\"https:\/\/stage-chat.stackq.com\/site_admin\/front\/default\/(cid)\/{{args.chat.id}}\\\"\\n\\t\\t\\t\\t}\\n\\t\\t\\t]\\n\\t\\t}\\n\\t]\\n}\"}]}"}
```

* After import you will need to adjust `Sub URL` after import it's value will be `/services/XXXXX/XXXXXXXXXX/XXXXXXXXXXXXXXXX`
* `Authorization` set proper value for Bearer token `xoxb-XXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXX`
* You might want to edit `Body` section

### Bot setup

This is how looks trigger content for webhooks event. `chat.addmsguser` trigger

![](/img/integration/slack-trigger.png)

`Notify` trigger content

![](/img/integration/slack-notify.png)

`Debug` trigger content

```
{http_code}
{http_error}
{content_raw}
{http_data}
```

![](/img/integration/slack-debug.png)

### Webhook setup

![](/img/integration/slack-webhook.png)

## Outcome

![](/img/integration/slack-notification.png)