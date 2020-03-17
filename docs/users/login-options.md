---
id: users-login-options
title: Login options
---

## After enabling google re-captch i can't login anymore?
If this happens you have to login to your database manager and execute this query

```sql
UPDATE `lh_chat_config` SET `value` = 'a:4:{i:0;b:0;s:8:"site_key";s:0:"";s:10:"secret_key";s:0:"";s:7:"enabled";i:0;}' WHERE `identifier` = 'recaptcha_data'
```

If you still cannot login [disable cache](debug.md#disabling-cache)
