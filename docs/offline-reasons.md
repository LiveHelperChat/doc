---
id: offline-reasons
title: Offline reasons
sidebar_label: Offline reasons
---

## Purpose

Offline reasons let an operator pick a reason when they go offline. The selected reason is stored for each offline period and can later be reviewed in the operator statistics, which is useful for reporting and for supervisors who want to understand why operators went offline.

## How it's used

When at least one offline reason is configured **and** the operator has the `offlinereasons_operator` permission, the online/offline status control in the operator's dashboard becomes a dropdown. The operator can:

*   Go online (switches the status back, no reason is stored).
*   Select one of the configured reasons and go offline.

The currently applied reason is shown next to the status icon while the operator is offline.

If no offline reasons are configured, or the operator does not have the `offlinereasons_operator` permission, the status control behaves as a simple online/offline toggle without asking for a reason.

The selected reason is:

*   Stored on the operator's current user record (`lh_users.offline_reason_id`).
*   Persisted on the matching online session record (`lh_users_online_session.offline_reason_id`), so each offline period keeps its own reason.
*   Cleared automatically when the operator goes back online.
*   Shown in the `Online hours` statistics (`Statistic -> Online hours`) in the `Offline reason` column of every offline session.

## Configuring offline reasons

Offline reasons are managed through the generic entity list:

> System configuration -> Users section -> Offline reasons

From there you can add and edit reasons. Deleting a reason is intentionally not exposed in the UI because offline sessions reference them.

### Fields

Each reason has the following fields:

| Field | Type | Description |
|---|---|---|
| `Name` | Text (required) | Display name of the reason, shown in the operator's dropdown and in the statistics. |
| `Description` | Textarea | Longer explanation. Shown as a tooltip when hovering over the reason in the dropdown. |
| `Icon` | Text | Material icon name displayed next to the reason, e.g. `flash_off`, `coffee`, `lunch_dining`. If empty, `flash_off` is used as the default. |
| `Position` | Number | Controls the order in which reasons are listed. Higher values are shown first (sorted by `pos` descending, then `name` ascending). |

### Database

Reasons are stored in the `lh_abstract_offline_reason` table:

| Column | Type | Description |
|---|---|---|
| `id` | int(11) unsigned, PK, auto increment | Reason ID |
| `name` | varchar(250) | Display name |
| `description` | text | Longer description |
| `icon` | varchar(250) | Material icon name |
| `pos` | int(11) unsigned, default 0 | Sorting position |

The reason is linked to the offline session through the `offline_reason_id` column of `lh_users_online_session` and to the current user state through `lh_users.offline_reason_id`.

## Permissions

Three permissions are involved:

> `lhuser`, `offlinereasons` — **Allow user to manage offline reasons**

Required to configure offline reasons (the `Offline reasons` link in the configuration is only visible with this permission).

> `lhuser`, `changeonlinestatus` — **Allow user to change their online status**

Required for an operator to change their online/offline status, which includes going offline with a selected reason.

> `lhuser`, `offlinereasons_operator` — **Allow user to use offline reasons**

Controls whether an operator is offered a reason when going offline, and which reasons they can pick. It does not grant the ability to change the online status itself — `changeonlinestatus` is still required for that.

## How the `offlinereasons_operator` permission influences the workflow

The permission gates the reason dropdown in both places where an operator can be put offline:

*   **Permission not granted** — The status control remains a simple online/offline toggle, even when offline reasons are configured. No reason is prompted and no reason is stored.
*   **Permission granted without a limitation** — The operator sees all configured reasons in the dropdown and can pick any of them when going offline.
*   **Permission granted with a limitation** — Only the reasons that match the limitation are shown. A limitation is defined on the role as a JSON object, for example `{"id":[2,4]}` restricts the dropdown to the reasons with IDs `2` and `4`.

The permission is always evaluated against the operator who is actually changing the status:

*   **Operator's own dashboard** — The dropdown is populated from `chat/loadinitialdata`, which filters reasons by the logged-in operator's `offlinereasons_operator` access (including any limitation).
*   **Changing another operator's status** (`user/setopstatus`, opened from the online operators widget) — The same `offlinereasons_operator` check decides whether a *Reason for offline* selector is shown in the modal and which reasons are available. This mirrors the dashboard behaviour.

Because the permission only filters what is offered, an operator without it is never blocked from going offline — they simply get the plain toggle.
