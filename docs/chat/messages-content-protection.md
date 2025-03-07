---
id: messages-content-protection
title: Messages content protection
sidebar_label: Messages content protection
---

## Introduction

These settings can be found under `Settings > Live Help Configuration > Messages content protection`.

The purpose of these rules is to prevent sensitive information from being displayed to operators who do not have the necessary permissions.

The visitor will see a defined warning message if their message contains sensitive information and the agent does not have permission to view it.

Here are some example rules: Credit card in valid format (16 numbers) and email.

```phpregexp
__credit_card__|||*
(\b(?:\d[ -]*?){16}\b)|||*
__email__|||$|||*
```

These rules can also be used in [Rest API](bot/rest-api.md) calls.

## Permissions

To view unmasked information, the operator must have the following permission:

> 'lhchat','see_sensitive_information'


