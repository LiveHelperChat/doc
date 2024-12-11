---
id: messages-content-protection
title: Messages content protection
sidebar_label: Messages content protection
---

## Introduction

These settings can be found at `Settings > Live Help Configuration > Messages content protection`.

* The Purpose of those rules does not show sensitive information to the operator if he does not have permission to see it.
* The Visitor will see a defined warning message if his message contains sensitive information and the agent does not have permission to see sensitive information.

Example of rules. Credit card in valid format and just 16 numbers and email.

```phpregexp
__credit_card__|||*
(\b(?:\d[ -]*?){16}\b)|||*
__email__|||$|||*
```

Those rules can be also used in [Rest API](bot/rest-api.md) calls.

## Permissions

In order for the operator to see not masked information, he has to have this permission

> 'lhchat','see_sensitive_information'


