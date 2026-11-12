---
id: passkey
title: Passkeys (passwordless login)
---

## Introduction

Live Helper Chat supports **WebAuthn passkeys** for operator accounts:

* An operator can register passkeys (fingerprint, face, PIN, phone, security key, password manager) from their account page.
* A passkey can be used to log in to the back office **without a username and password**.
* Passkeys can be used as **autofill** in the username field, or through the **Login with a passkey** button.
* An account can be switched to **passwordless login (passkey only)**, which disables the username/password login completely.

Passkeys are handled by the [`web-auth/webauthn-lib`](https://github.com/web-auth/webauthn-lib) library (`^5.3` in `lhc_web/composer.json`), stored in the `lh_users_passkey` table and validated server side (challenge, origin, RP ID, signature, user verification and signature counter).

:::info
Passkey login is available **only in the web back office**. The mobile app, the chat widget for visitors and the REST API are not affected — REST authentication keeps using API keys and `lh_users_session` tokens.
:::

## Requirements

| Requirement | Details |
| --- | --- |
| PHP | 8.2+ with `openssl` (same as the rest of Live Helper Chat) |
| Composer | `web-auth/webauthn-lib` must be installed (`php composer.phar install`). Without it the feature is silently unavailable |
| Database | `lh_users_passkey` table and the `passwordless_login` / `api_key_login_only` / `disable_autologin` columns on `lh_users` |
| Transport | HTTPS. Plain HTTP is possible only for RP IDs listed in "Relying party IDs allowed over HTTP" (`localhost`, `127.0.0.1` and `::1` are always allowed) |
| Site access | Passkey **login** endpoints work only on a back office site access (`default_admin_site_access`, by default `site_admin`) |
| Browser | Chrome / Edge 108+, Firefox 119+, Safari 16+. The browser must support platform authenticators or an external security key |

## Permissions

| Permission | Purpose |
| --- | --- |
| `'lhuser','use_passkey'` | Operator can see the **Passkeys** tab in their account, register/delete their own passkeys and enable passwordless login |
| `'lhuser','selfedit'` | Required to open the account page and the `user/passkey` endpoint |
| `'lhuser','pswdsecurity'` | Administrator can open **System configuration → Users → Passkey options** and manage passkeys of all users |

Without `'lhuser','use_passkey'` the passkeys tab is hidden and `user/passkey` answers *"You do not have permission to manage passkeys"*.

## Quick start

1. Install `web-auth/webauthn-lib` (composer) and run `doc/update_db/update_366.sql` (or the system upgrade page).
2. Open **System configuration → Users → Passkey options**.
3. Enable **Enable passkeys (passwordless login)**.
4. Fill **Allowed origins** with the exact back office origin(s), e.g. `https://support.example.com`.
5. Leave **Relying party ID** empty (current host name is used) or enter the parent domain, e.g. `example.com`.
6. Grant the `'lhuser','use_passkey'` permission to the role/groups which should be able to use passkeys.
7. Log in as an operator → **Account → Passkeys** → *Add a passkey*.
8. Optionally tick **Passwordless login (passkey only)** in **Account → Account data**.

## Configuration

**System configuration → Users → Passkey options** (`user/passkeys`) stores a single `lh_chat_config` record with identifier `passkey_options`:

```
a:5:{s:7:"enabled";i:1;s:5:"rp_id";s:11:"example.com";s:7:"rp_name";s:18:"Live Helper Chat";s:13:"secured_rp_ids";s:0:"";s:15:"allowed_origins";s:25:"https://support.example.com";}
```

| Option | Description |
| --- | --- |
| Enable passkeys (passwordless login) | Master switch. When disabled: no registration, no passkey button on the login page, no passkeys tab, no passwordless checkbox. The already stored passkeys are kept |
| Relying party ID (`rp_id`) | Domain name without scheme and port (`example.com`). Empty = the current host name. **Changing it invalidates all registered passkeys** |
| Relying party name (`rp_name`) | Name shown by the browser/OS in the passkey dialogs. Empty = the RP ID |
| Relying party IDs allowed over HTTP (`secured_rp_ids`) | Comma separated RP IDs for which plain HTTP is tolerated (development). `localhost`, `127.0.0.1`, `::1` are always allowed |
| Allowed origins (`allowed_origins`) | **Mandatory.** Comma separated exact origins including the scheme and optional port, e.g. `https://example.com:8443`. Subdomains must be listed separately. `http://` origins require the RP ID to be in `secured_rp_ids` |

Validation is done when saving: an invalid origin (path, credentials, wildcard, missing scheme) is rejected with an error and nothing is stored. Passkeys can not be enabled while **Allowed origins** is empty.

:::warning
`rp_id` must be equal to, or a parent domain of, every origin host in `allowed_origins`. A passkey registered for `example.com` can not be used on `otherdomain.com`, and changing `rp_id` makes every existing passkey unusable.
:::

### Setup samples

#### 1. Single HTTPS domain (typical production)

| Option | Value |
| --- | --- |
| Enabled | ✔ |
| Relying party ID | `example.com` |
| Relying party name | `Live Helper Chat` |
| RP IDs allowed over HTTP | *(empty)* |
| Allowed origins | `https://example.com` |

Back office URL: `https://example.com/site_admin/`. Passkey scope: the whole `example.com` domain.

#### 2. Back office on a subdomain

| Option | Value |
| --- | --- |
| Relying party ID | `example.com` |
| Allowed origins | `https://example.com,https://support.example.com` |

Using the parent domain means the same passkey works on both host names and is offered as autofill on each of them.

If you prefer to isolate passkeys to the support host only:

| Option | Value |
| --- | --- |
| Relying party ID | `support.example.com` |
| Allowed origins | `https://support.example.com` |

#### 3. HTTPS on a non standard port

| Option | Value |
| --- | --- |
| Relying party ID | `example.com` |
| Allowed origins | `https://example.com:8443` |

The origin must match what the browser shows in the address bar, port included.

#### 4. Local development over HTTP

| Option | Value |
| --- | --- |
| Enabled | ✔ |
| Relying party ID | `localhost` |
| RP IDs allowed over HTTP | `localhost` *(optional, localhost is always allowed)* |
| Allowed origins | `http://localhost:8080` |

The docker-compose example (`http://localhost:8080/site_admin/`) works out of the box with these values.

#### 5. Development on a custom host name (`*.test`, `*.loc`)

| Option | Value |
| --- | --- |
| Relying party ID | `lhc.test` |
| RP IDs allowed over HTTP | `lhc.test` |
| Allowed origins | `http://lhc.test` |

#### 6. Development using an IP address

| Option | Value |
| --- | --- |
| Relying party ID | `127.0.0.1` |
| Allowed origins | `http://127.0.0.1:8080` |

#### 7. Several brands / domains

Each domain needs its own passkey registration — a passkey can not be moved between domains. Options:

* Run one installation per domain (own `rp_id` and `allowed_origins`), or
* Use a single parent `rp_id` (`example.com`) when every back office host is a subdomain of it, e.g. `allowed_origins = https://support.example.com,https://help.example.com`.

## Scenarios

### 1. Operator adds the first passkey (account with password)

1. **Account → Passkeys** tab.
2. Enter a name, e.g. `Work laptop`.
3. Enter the **Current password** and press **Add a passkey**.
4. The browser opens *"Create a passkey …"* — save it to the device, phone, password manager or security key and verify (PIN / biometric).
5. The passkey appears in the table with its type (`Google Password Manager · synced`, `Windows Hello`, `Phone or tablet`, `Security key`, …) and the *Added* date.

A wrong password returns *"Authentication failed"* and is recorded in `lh_users_login`; the usual failed login counter (`disableIfRequired`) applies.

Registered passkeys are also excluded from the next registration, so the same authenticator can not be enrolled twice (*"This passkey is already registered"*).

### 2. Operator adds another passkey

The password field can be left **empty**: the browser first asks to confirm with one of the existing passkeys, then opens the create dialog. Entering the password skips the confirmation.

Both ways are limited to one enrolment per confirmation — the re-authentication result is consumed by `register_options`.

### 3. Adding a passkey on a passwordless account

Once **Passwordless login (passkey only)** is enabled the account can no longer be logged in with a password, so a new passkey is confirmed with an **already registered passkey** instead of the password.

**What the Passkeys tab looks like**

* The **Current password** field is not displayed — the password is not accepted as a confirmation factor while password login is disabled for the account.
* The table of existing passkeys stays the same, followed by the passkey name input and the **Add a passkey** button.

**Steps**

1. Open **Account → Passkeys**.
2. Enter a name for the new passkey, e.g. `Phone`.
3. Press **Add a passkey**.
4. The browser asks to confirm the identity with one of the registered passkeys:
   * several passkeys → pick one from the list;
   * a single passkey → the authenticator prompt appears right away, e.g. *"Enter your PIN — … wants to verify that it's you"*. This is the passkey unlocking itself (PIN / biometric), **not** a password prompt.
5. After a successful confirmation the usual *"Create a passkey …"* dialog opens. Save the new passkey to another device, phone, password manager or security key and verify it.
6. The new passkey appears in the table with the *Added* date and can be used for login immediately — and to confirm the next enrolment.

Notes:

* One confirmation authorises exactly one enrolment. The confirmation is stored in the session for 5 minutes and consumed by the first *Add a passkey* request, so the loop has to be repeated for each new passkey.
* Cancelling the confirmation or the create dialog adds nothing; the message *"Passkey operation was cancelled or timed out"* is shown and the button can be used again.
* The passkey used for the confirmation does not have to belong to the current device — any registered passkey of the account will do.
* The password is never asked, even if the operator still remembers it.
* The same limit applies: at most 10 passkeys per user.
* An administrator can not add a passkey on behalf of the operator — passkeys are always registered by the operator from the account page.

:::warning
Because the password can not be used anymore, an operator with passwordless login and only one passkey is one lost device away from a lockout. Register at least two passkeys (e.g. laptop + phone, or a security key) **before** enabling passwordless login.
:::

**Recovering from a lockout**

If the account is passwordless and all its passkeys are lost, there is no way to confirm an enrolment from the account page:

1. An administrator opens **Users → Edit user** for that operator.
2. Unticks **Passwordless login (passkey only)** and saves — see [Disable passwordless login](#11-disable-passwordless-login).
3. The operator logs in with the username and password, opens **Account → Passkeys** and registers a new passkey (confirmed with the password).
4. Passwordless login can be enabled again.

### 4. Enable passwordless login (self service)

1. Make sure at least one passkey is registered.
2. Open **Account → Account data**.
3. Tick **Passwordless login (passkey only)** and save.

The checkbox is visible only when the operator has a passkey (or already uses passwordless login). Without any passkey the server refuses the change with *"Add a passkey before enabling passwordless login"*.

While enabled:

* `user/login` refuses the username/password pair with *"Login with username and password is not allowed for this account"*.
* `erLhcoreClassUser::loginUser()` returns `false` for the same reason (this also covers custom integrations using the API).
* The password itself is **not** deleted — disabling the checkbox restores password login immediately.
* The operator can still be logged in with a passkey (button or autofill).

### 5. Administrator enables passwordless login for an operator

1. **Users → Edit user**.
2. Tick **Passwordless login (passkey only)** in the *Access* block, save.

The edit page shows whether the user can log in with a password and whether autologin is allowed, plus a read-only list of the user's passkeys. Saving passwordless login without a registered passkey is refused (*"Add at least one passkey for this user before disabling password login"*) and the flag stays off.

An administrator can not add a passkey for another operator — passkeys are always registered by the operator on their own account page.

### 6. Login with the passkey button

1. Open the back office login page.
2. Press **Login with a passkey**.
3. Select the passkey (device, phone, security key, password manager) and verify.
4. The operator is logged in and redirected to the requested page (`redirect` parameter is kept).

The button is displayed only when passkeys are enabled. The browser may show *"Enter your PIN"* / *"Verify it's you"* — this is the authenticator unlocking itself, not an extra password prompt.

### 7. Login with passkey autofill

On the login page the username field is rendered with `autocomplete="username webauthn"` and the browser starts a **conditional (autofill) WebAuthn request**:

1. Click the username field.
2. Passkeys registered for this site are offered in the browser's autofill dropdown.
3. Pick one and verify → logged in.

Autofill is silent when the browser does not support conditional mediation (`PublicKeyCredential.isConditionalMediationAvailable()`); the button keeps working in every supported browser. Pressing the button cancels the pending autofill request first, so the two flows never collide.

### 8. Events, 2FA and audit

Passkey login goes through the same hooks as the password login:

* `user.login_before_authenticate` — can abort the login by adding an error.
* `user.login_after_success_authenticate` — can block the login (returning `false` logs the user out).
* `user.2fa_intercept` — 2FA extensions keep working.
* `user.login_site_access` — changes which site accesses accept a login.

A successful passkey login is written to `lh_users_login` as *"Logged in successfully. WEB. Passkey"*, `llogin` is updated and `force_logout` is reset.

:::info
Passkey login does **not** go through the password expiration redirect (`password_data['expires_in']`) because no password is involved. If you require periodic re-authentication, enforce it with a 2FA / session policy extension.
:::

### 9. Delete a passkey

**Account → Passkeys → Delete** removes the passkey immediately (with confirmation). As long as **Passwordless login** is enabled the last passkey can not be deleted:

> You can not delete your last passkey while passwordless login is enabled. Disable passwordless login first

Disable passwordless login first, then remove or replace the passkey.

### 10. Administrator deletes a passkey

**System configuration → Users → Passkey options** lists every passkey with the user, type, added and last used date. Deleting is refused with *"Passkey was not deleted, because passwordless login is enabled for this user. Disable passwordless login first"* whenever the owner is on passwordless login, because that would lock the account out.

### 11. Disable passwordless login

Untick the checkbox (account page or admin edit page) and save. The username/password login works again on the next login; existing passkeys stay registered and usable. The *Current password* field returns to the Passkeys tab for future enrolments.

### 12. Deleting an operator

Deleting a user removes all his passkeys (`erLhcoreClassModelUserPasskey::removeForUser()`), so no orphaned credentials stay in `lh_users_passkey`.

### 13. Password reset while passwordless

Resetting or changing the password does not turn off passwordless login — the login form keeps rejecting the username/password pair until the flag is disabled. Use the admin edit page to disable it if the operator lost all his devices.

## Blocked logins and edge cases

| Situation | Result |
| --- | --- |
| Account with `api_key_login_only = 1` | Password login is refused; passkey login is refused too (*"Passkey login is not allowed for this account"*). Such accounts can only use the REST API |
| Account with `disable_autologin = 1` | Autologin / login as user / login by token are refused, **passkey login still works** — a passkey is a real credential |
| Login IP restrictions (`password_data['allow_login_from_ip']`) | Applied to passkey login as well; on mismatch the login is cancelled and the login page is shown |
| Disabled (`disabled = 1`) account | The session can not be established, the login page is shown |
| Passkey enabled, login page opened on a non back office site access | `user/passkeylogin` answers *"Invalid back office URL"* |
| 2FA extension blocks the login | `user.2fa_intercept` / `user.login_after_success_authenticate` can log the user out before the session is finalized |
| Registration options older than 5 minutes (300 s) | *"Registration session has expired, please try again"* |
| Authentication options older than 5 minutes, or reused | *"Authentication session has expired, please try again"* |
| Credential not found in `lh_users_passkey` | *"Unknown passkey"* |
| More than 10 passkeys for one user | *"Maximum number of passkeys is reached. Please remove one of the existing passkeys first"* |
| Browser origin does not match `allowed_origins` / `rp_id` | The browser does not offer the passkey at all (no server request) — fix the configuration |
| Passkeys disabled after the operator registered one | Registration, login button, autofill and the passkeys tab disappear; nothing is deleted |

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| No **Passkeys** tab in the account | Passkeys disabled, `web-auth/webauthn-lib` missing, or the operator lacks `'lhuser','use_passkey'` |
| No **Login with a passkey** button | Passkeys disabled, or you are on a non back office site access |
| *"Passkeys are not available"* | Configuration disabled (`passkey_options.enabled = 0`) or the composer library is not installed |
| *"Invalid back office URL"* | Login performed on a site access which is not listed in `default_admin_site_access` |
| *"Invalid CSRF Token"* | The login page was left open too long (session expired) — reload and try again |
| *"Authentication failed"* while adding a passkey | Wrong current password, or the confirmation with an existing passkey was cancelled |
| Browser shows *"This site can't use passkeys"* / nothing happens | Origin/`rp_id` mismatch, missing `allowed_origins`, or HTTP without the RP ID in `secured_rp_ids` |
| Passkey created on the old domain no longer works | `rp_id` was changed — passkeys are bound to it; delete and register them again |
| *"Passkey login failed"* | The assertion did not validate (wrong RP ID, origin not allowed, credential removed). Check `lhc_web/var/log` — the reason is logged by `erLhcoreClassLog` |
| Operator locked out after removing the device | Disable passwordless login from **Users → Edit user**, then reset the password |

## Technical reference

### Database

`lh_users_passkey`

| Column | Description |
| --- | --- |
| `id` | Primary key |
| `user_id` | Owner (`lh_users.id`) |
| `credential_id` | base64url credential ID (`varbinary(1364)`, unique) — used to find the credential during authentication |
| `credential` | JSON serialized `Webauthn\CredentialRecord` (public key, counter, transports, AAGUID, backup flags) |
| `name` | Operator defined name |
| `aaguid` | Authenticator identifier, used to display the passkey type |
| `counter` | Signature counter, validated by the library (clone detection) |
| `created_at`, `last_used_at` | Unix timestamps |

Related flags on `lh_users`: `passwordless_login`, `api_key_login_only`, `disable_autologin`.

## Security notes

* Enrolment always requires a **re-authentication** right before it: the current password, or an assertion with an already registered passkey. The result is stored in the session for 300 seconds and consumed by the first `register_options` call.
* Failed password confirmations are written to `lh_users_login` and counted by the usual `disableIfRequired()` policy.
* Challenges are generated server side (`random_bytes(32)`), kept in the session, single use and time limited; the client can not supply them.
* `userVerification` is required, so the authenticator has to verify the user (PIN / biometric), not just be present.
* Attestation is `none` — no authenticator certificates are collected, so the type is derived from the AAGUID/transports.
* `credential_id` is unique across the table, so one authenticator credential can not be attached to two accounts.
* Signature counters are validated by the library; a counter that goes backwards invalidates the login.
* Passkey endpoints are CSRF protected and restricted to logged in users (except `user/passkeylogin/*`, which only hands out options and verifies an assertion, and is limited to a back office site access).
* The last passkey of a passwordless account can not be deleted by the operator nor by an administrator — disable passwordless login first.
