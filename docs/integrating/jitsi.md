---
id: jitsi
title: Jitsi Integration
---

## What is Jitsi?

Jitsi is a free, open-source application for voice, video, and screen sharing. You can find more information at https://jitsi.org/.

You can add voice and video call capabilities to Live Helper Chat using either:

*   **Native Jitsi Integration (Recommended)** — built-in call invitations, operator/visitor join flow, in-widget or popup calls, and optional JWT authentication.
*   **Legacy Bot Command (`!jitsi`)** — simple link generation using bot triggers (for older setups).

---

## Native Jitsi Integration

### 1. Permissions

Make sure the relevant user roles have permissions for the `lhjitsi` module:

*   **`lhjitsi` -> `configuration`**: Required for administrators to configure Jitsi settings.
*   **`lhjitsi` -> `use`**: Required for operators to invite visitors and join Jitsi calls.

On fresh installations, `lhjitsi -> use` is granted to operators by default. If you upgraded an existing installation, verify these permissions under **System Configuration -> Users -> Roles**.

### 2. Configuring Jitsi in Live Helper Chat

Navigate to **System Configuration -> Chat -> Jitsi Calls -> Configuration** (or `/jitsi/configuration`).

#### General

*   **Enable Jitsi calling**: Enables the native Jitsi integration across Live Helper Chat.
*   **Jitsi server domain**: Enter the hostname without `https://` (for example `meet.jit.si`, `jitsi.yourdomain.com`, or `8x8.vc` for 8x8 JaaS). An optional `:port` is supported.
*   **Room name prefix**: Prefix prepended to randomly generated room names (default `lhc_`; alphanumeric, `_`, and `-` only).
*   **Ask operator for confirmation before sending call invitation**: Prompts the operator to confirm before sending a call invite to the visitor.
*   **Automatically open Jitsi call window for operator when sending invitation**: Immediately opens the operator's call window when an invitation is sent.

#### Call Features & Defaults

*   **Default call mode**: Choose between `Video call` and `Voice call (audio only)`.
*   **Allow video calls**: When disabled, all calls are audio-only.
*   **Allow screen sharing in Jitsi toolbar**: Enables or disables the screen-share button.
*   **Keep mobile users in browser (disable Jitsi native app prompt)**: Passes `disableDeepLinking` so mobile visitors stay in the browser instead of being prompted to install the Jitsi app.
*   **Visitor call display mode**:
    *   **Popup window / new tab**: Opens the call in a separate window (recommended for multi-page websites so navigating between pages does not drop the call).
    *   **In-widget for voice calls, popup for video calls**: Embeds voice calls inside the chat widget and opens video calls in a popup.
    *   **In-widget for both voice and video calls**: Embeds both voice and video calls inside the chat widget (includes a **Pop out** button).
*   **In-widget UI options** (shown when an in-widget mode is selected):
    *   **Use minimalistic in-card UI for in-widget voice calls**: Hides the Jitsi UI for voice calls and displays live call status, timer, Mute, and End controls directly inside the chat invitation card.
    *   **Docked voice panel height (px)**: Height of the docked top voice call panel when minimalistic in-card UI is disabled (`160`–`420`, default `220`).
    *   **Video call desktop widget width / height (px)**: Auto-expand dimensions for the desktop widget during video calls (`0` keeps default dimensions).

> **Note for in-widget calls:** Navigating to another page on a multi-page website reloads the chat widget. Also, host websites with strict `Permissions-Policy` HTTP headers may block embedded microphone/camera access.

#### Jitsi UI & Permissions per Participant

You can independently configure **Operator Join Options (Moderator)** and **Visitor Join Options (Guest)**:

*   **Toolbar buttons**: Choose which Jitsi toolbar buttons are visible (e.g., `microphone`, `camera`, `desktop`, `hangup`, `fullscreen`, `tileview`, `settings`, `raisehand`, `chat`, `participants-pane`, `select-background`, `recording`).
*   **Settings dialog tabs**: Choose which tabs appear in Jitsi's settings dialog (`devices`, `language`, `profile`, `moderator`, `sounds`, `more`).
*   **Behavior & restrictions**: Toggle options such as skipping the pre-join lobby screen, starting with mic/camera muted, disabling keyboard shortcuts, locking display name / disabling profile editing, disabling remote mute/kick, disabling reactions/polls, hiding the conference subject/timer, hiding the Jitsi hangup button (to use LHC's top bar **End call** button), hiding the Jitsi logo/watermark, and hiding profile pictures (disables Gravatar).
*   **Custom configOverwrite JSON (optional)**: Provide a valid JSON object to merge additional options directly into Jitsi's `configOverwrite`.

#### Authentication (JWT)

Choose one of the following modes:

*   **None (public or open Jitsi server)**: No JWT is generated. Suitable for open self-hosted Jitsi servers or `meet.jit.si` (note that public `meet.jit.si` may require a moderator login depending on their current policies).
*   **Self-hosted Jitsi JWT (HS256)**:
    *   **Token TTL (seconds)**: Token lifetime (`60`–`86400`, default `3600`).
    *   **JWT App ID**: Must match `app_id` configured in your Jitsi Prosody server.
    *   **JWT App Secret**: Must match `app_secret` configured in your Jitsi Prosody server.
*   **8x8 JaaS (RS256)**:
    *   **Jitsi server domain**: Automatically defaults to `8x8.vc`.
    *   **Token TTL (seconds)**: Token lifetime.
    *   **JaaS App ID (Tenant)**: Your 8x8 JaaS tenant ID (e.g., `vpaas-magic-cookie-...`).
    *   **JaaS API Key ID (kid)**: Your JaaS API Key ID (e.g., `vpaas-magic-cookie-.../key-id`).
    *   **JaaS RSA Private Key (PEM)**: Your RSA private key in PEM format.

### 3. Starting a Call

Once enabled, operators will see a **Jitsi Call** section in the chat's right-hand information panel with **Invite to Video Call** and **Invite to Voice Call** actions. Visitors cannot join the Jitsi room until the operator joins first.

---

## Configuring Your Jitsi Server (Self-Hosted)

If you host your own Jitsi Meet instance, adjust the following settings on your Jitsi server so it works seamlessly with Live Helper Chat.

### 1. Enable JWT Authentication (Recommended)

When using **Self-hosted Jitsi JWT (HS256)** in Live Helper Chat, LHC generates HS256 tokens with:

*   `aud` and `iss`: set to your **JWT App ID**
*   `sub`: set to your **Jitsi server domain**
*   `room`: the generated room name
*   `moderator`: `true` for operators, `false` for visitors

#### Debian / Ubuntu (Prosody)

In `/etc/prosody/conf.avail/<your-jitsi-domain>.cfg.lua`, configure token authentication on your main `VirtualHost`:

```lua
VirtualHost "jitsi.yourdomain.com"
    authentication = "token"
    app_id = "your_jwt_app_id"
    app_secret = "your_jwt_app_secret"
    allow_empty_token = false

    modules_enabled = {
        "bosh";
        "pubsub";
        "ping";
        "speakerstats";
        "external_services";
        "conference_duration";
        "muc_lobby_rooms";
        "muc_breakout_rooms";
        "av_moderation";
        "token_verification";
    }
```

Ensure the `jitsi-meet-tokens` package is installed and restart Prosody and Jicofo after editing:

```bash
sudo systemctl restart prosody jicofo
```

#### Docker (`docker-jitsi-meet`)

In your `.env` file, set:

```env
ENABLE_AUTH=1
AUTH_TYPE=jwt
JWT_APP_ID=your_jwt_app_id
JWT_APP_SECRET=your_jwt_app_secret
JWT_ALLOW_EMPTY=0
```

Then recreate your containers (`docker compose up -d`).

> If you set **JWT Authentication Mode** to **None** in LHC, ensure your self-hosted Jitsi server allows anonymous/guest room creation (`authentication = "anonymous"` in Prosody, or `ENABLE_AUTH=0` in Docker), otherwise visitors and operators will be prompted to log in.

### 2. Iframe Embedding & Security Headers

Live Helper Chat loads Jitsi via `https://<domain>/external_api.js` inside an iframe. Your Jitsi web server (Nginx/Apache) must allow framing from your Live Helper Chat domain (and your website domain if using in-widget mode):

*   **Do not** send `X-Frame-Options: DENY` or `X-Frame-Options: SAMEORIGIN` from your Jitsi server.
*   If you use `Content-Security-Policy`, allow your LHC origin in `frame-ancestors`:
    ```nginx
    add_header Content-Security-Policy "frame-ancestors 'self' https://your-lhc-domain.com https://your-website-domain.com;" always;
    ```
*   Ensure `Permissions-Policy` allows microphone, camera, and screen sharing for the embedded iframe (on Jitsi, LHC, and the host website when using in-widget mode):
    ```nginx
    add_header Permissions-Policy "camera=*, microphone=*, display-capture=*" always;
    ```

### 3. Watermark & UI Overrides (`interface_config.js` / `config.js`)

Live Helper Chat passes most UI and behavior flags dynamically via `configOverwrite` and `interfaceConfigOverwrite`. However, on some self-hosted Jitsi versions, hiding the Jitsi watermark also requires setting the following in `/etc/jitsi/meet/<your-jitsi-domain>-interface_config.js`:

```javascript
SHOW_JITSI_WATERMARK: false,
SHOW_WATERMARK_FOR_GUESTS: false,
```

---

## Legacy Method: Bot Command (`!jitsi`)

If you prefer simple link generation without the native Jitsi module, you can integrate Jitsi link generation using:

*   Bot commands: `!jitsi`
*   Core Live Helper Chat functions (4.16v+ required)

No extension is needed.

More information about what parameters can be passed to Jitsi URLs is available at:

*   https://shawnchin.github.io/jitsi-url-generator/ - you can play around and adjust links afterwards

Thanks to [comment author](https://github.com/LiveHelperChat/livehelperchat/discussions/1838#discussioncomment-4325256) who inspired to prepare and improve Live Helper Chat to support Jitsi :)

### Bot setup

First, create a bot with a single trigger content.

Create a new trigger and click `Show code` under trigger. Paste the following content and click `Load`. There are two format options in this sample trigger:

*   Send join a call as a standard link.
*   Send it as a button.

Edit the trigger response after loading and keep the format you prefer.

```json
[
  {
    "_id": "PPoWR0hsA",
    "type": "command",
    "content": {
      "text": "",
      "command": "chatvariable",
      "update_if_empty": true,
      "payload": "{\"jitsi\":\"{random_20}\"}"
    }
  },
  {
    "_id": "eCyS5SV8s",
    "type": "text_conditional",
    "content": {
      "text": "",
      "intro_us": "[url=https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=\"{args.chat.nick__url}\"&userInfo.email=\"{args.chat.email__url}\"&config.prejoinPageEnabled=false&config.requireDisplayName=true]Join as {args.chat.nick}[/url]\\n[html]\\n<a class=\\"btn btn-success btn-sm\\" target=\\"_blank\\" href=\\"https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=&quot;{args.chat.nick__url}&quot;&userInfo.email=&quot;{args.chat.email__url}&quot;&config.prejoinPageEnabled=false&config.requireDisplayName=true\\">Join as {args.chat.nick__escape}</a>\\n[/html]\\n",
      "full_op": "",
      "intro_op": "[url=https://meet.jit.si/{args.chat.chat_variables_array.jitsi}#userInfo.displayName=\"{args.chat.plain_user_name__url}\"&config.prejoinPageEnabled=false&config.requireDisplayName=true]Join call as {args.chat.plain_user_name}[/url]"
    }
  }
]
```

After that, it should look like this:

![](/img/integration/jitsi.png)

### Bot Command Setup

Now, set up the bot command that operators will use to generate the link.

![](/img/integration/jitsi-command.png)

After that, you can type `!jitsi` in the chat message area. The generated link will have the same hash for both the operator and the visitor.
