---
id: mcp-setup
title: AI MCP Server
sidebar_label: AI MCP Server
---

Live Helper Chat can expose its back office as a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server. Any MCP capable client - ChatGPT, Claude, GitHub Copilot or your own agent - can then ask questions about your Live Helper Chat installation, such as:

* *"Which user ID belongs to `support@example.com`?"*
* *"What permissions does user 5 have?"*
* *"Why can user 5 not open chat 1234?"*
* *"Would chat 1234 be auto assigned, and if not, why?"*

:::note
This page is about Live Helper Chat acting as an MCP **server** - it exposes read only tools to an AI agent that runs elsewhere. To build an AI agent inside Live Helper Chat itself, where Live Helper Chat is the harness that drives the agent, see *How to use a bot (AI agent builder)*.
:::

The tools are **read only**. They inspect configuration and evaluate the same conditions the back office applies, but never change anything.

## Requirements

* PHP 8.2 or newer with the `composer` dependencies installed:

  ```shell
  cd lhc_web
  composer require mcp/sdk symfony/finder
  composer dump-autoload -o
  ```

  `composer.json` ships with `mcp/sdk` and `symfony/finder`, so a normal `composer install` is usually enough. The classmap is authoritative, so **always run `composer dump-autoload -o` after upgrading** - otherwise the tool classes are not discovered and the endpoint answers `503`.

## Enabling the endpoint

1. Log in to the back office.
2. Open **System configuration → AI MCP Server** (`/site_admin/aimcp/key`).
   The menu entry and the page require the `lhaimcp` → `use` permission, which has to be granted in the role setup.
3. Fill in:

| Field | Description |
|---|---|
| **MCP server name** | Name reported to the client during the `initialize` handshake. Default is `Live Helper Chat`. |
| **MCP endpoint URL** | Read only. This **is** what you paste into the client - it already contains the access token as `?token=<token>`. |
| **Access token** | Shared secret carried by the URL. The endpoint is **disabled while the field is empty**. Use **Generate new token** to create a 64 character random token, then **Save**. |

Clearing the token disables the endpoint again (it answers `503 MCP endpoint is not configured`).

The page also lists every tool currently exposed by the endpoint, read directly from the tool definitions, so the list can never drift away from what the client sees.

## Connecting a client

The endpoint speaks **Streamable HTTP**. Authentication is part of the URL - the token is simply a query parameter, there is nothing else to configure in the client:

```text
https://<your-host>/aimcp/mcp?token=<token>
```

| Setting | Value |
|---|---|
| URL | `https://<your-host>/aimcp/mcp?token=<token>` (copy it from the **MCP endpoint URL** field) |
| Transport | Streamable HTTP |
| Authentication | None - the token travels in the URL |

For clients that cannot use query parameters, the same token is also accepted as an `Authorization: Bearer <token>` header. Both forms are checked, only one is needed.

### ChatGPT

**Settings → Connectors → Advanced → Developer mode → Add custom connector**, paste the **MCP endpoint URL** from the back office (it already includes the token) and leave authentication as *None*.

Whatch youtube video

https://youtu.be/PfcDh0JekIk

### Claude

**Settings → Connectors → Add custom connector**, then provide the same URL. No token field needs to be filled in.

Watch video how to setup:

https://youtu.be/PfcDh0JekIk

### Manual check

```shell
curl -X POST "https://example.com/aimcp/mcp?token=<token>" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

## Available tools

Available tools you will find in MCP configuration window.

### Example prompts

* `Find the user ID for support@example.com and list what departments it can access.`
* `Why can user 12 not open chat 555?`
* `Does /site_admin/department/edit/3 require special permissions?`
* `Nobody picks up chats in department 4. Which settings prevent auto assignment?`
* `Would chat 9876 be auto assigned, and to whom?`

## Notes on privacy

The tools return identifiers, flags and generic labels (`Department #12`) only. User names, usernames, chat nicks, visitor e-mail addresses and message bodies are not returned - the only exception is `get_user_id_by_email`, where the address is the lookup key itself.

## Troubleshooting

| Symptom | Cause |
|---|---|
| `503 MCP endpoint is not configured` | No token set in **AI MCP Server**. |
| `401 Unauthorized` | Wrong or missing token. |
| `503 The MCP server is not available` | The SDK is not installed or the autoloader is stale. Run `composer require mcp/sdk symfony/finder` and `composer dump-autoload -o`. |
| Tool missing in the client | A new tool class was added. Run `composer dump-autoload -o` and reconnect the client. |
| Client cannot reach the endpoint | Check that your web server forwards `Authorization` to PHP (some FastCGI setups strip it) and that no WAF blocks `POST` to the endpoint. |
