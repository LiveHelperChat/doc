---
id: connection-status
title: Connection status
---

## Introduction

This widget's sole purpose is to track connection and data fetching status.

![](/img/chat/connection-status.png)

## Icons and their meanings

### Online session

An online session indicates how long ago we updated your online session and added your online time to it.

![](/img/chat/online-session-icon.png)

Internally, it's set to be updated every 20 seconds. There can be fluctuations of up to 10 seconds.

### NodeJS Connection Status

It indicates your connection status to the NodeJS server if you are using the [NodeJS-Helper extension](https://github.com/LiveHelperChat/NodeJS-Helper). It's a good indicator of whether your NodeJS server is working.

![](/img/chat/node-js-status.png)

### Chat list refresh time

This bit shows the time we updated chat widgets. It should match your local time and should not exceed 15 seconds from the present time. If this bit is not changing, there might be an issue with your connection to the server.

![](/img/chat/chat-fetch-ago.png)

### No connection

If we receive an indication from the browser that the network connection is not available, you will see a widget similar to this.

![](/img/chat/no-connection.png)
