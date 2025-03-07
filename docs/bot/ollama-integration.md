---
id: ollama-integration
sidebar_label: Ollama Integration (Completions, Tool Calls)
title: Integrating Ollama into Live Helper Chat with Tool Calls Support
---

This sample uses the [llama3-groq-tool-use](https://ollama.com/library/llama3-groq-tool-use) model. You can use any other model as well.

The following models are ones I have tried, and in my opinion, are the best:

*   [hermes3](https://ollama.com/library/hermes3): In my opinion, the best 7b parameter model.
*   [mistral-nemo](https://ollama.com/library/mistral-nemo): My second choice. 12b parameters.
*   [llama3-groq-tool-use](https://ollama.com/library/llama3-groq-tool-use): The model used in this example.

You will need a working Ollama model and an Ollama server running.

### Installation

*   Import the [Rest API](/img/bot/ollama/rest-api.json).
*   Import the [Bot](/img/bot/ollama/bot.json) and choose the imported Rest API in the import window.

**Important:**

*   After installation, change the IP address of the running Ollama service.
*   For debugging, you can edit the Rest API in the back office and check `Log all requests and their responses as system messages`.
*   Ensure your version includes the changes from [this commit](https://github.com/LiveHelperChat/livehelperchat/commit/fc1dc721d912a79064e8cbba451e6ac40dda831b).

### How to Call a Trigger Based on a Defined Function in Ollama?

1.  Note the defined function in Gemini: `transfer_operator`.
2.  Add an [event](bot/triggers.md) to your trigger with the `Type` set to `Custom text matching`. The `Should include any of these words` value should be `transfer_operator`.

    For example:

    ![transfer_operator](/img/bot/transfer-event.png)

### Forwarding a Port on WSL to Windows

From Ubuntu on Windows WSL:

Append `OLLAMA_HOST=0.0.0.0` to the `Service` directive in `/etc/systemd/system/ollama.service`.

```
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
Environment="OLLAMA_HOST=0.0.0.0"

[Install]
WantedBy=default.target
```

Execute the following commands:

```shell
service ollama restart
systemctl daemon-reload
```

From the Windows command line, find the IP address of the WSL layer:

```
C:\Users\remdex>wsl.exe hostname -I
172.29.52.196 172.17.0.1
```

Edit the Windows hosts file (`C:\Windows\System32\drivers\etc\hosts`) and add the following line:

```
172.29.52.196 wsl
```

Forward the port from WSL to Windows:

```
netsh interface portproxy add v4tov4 listenport=11434 listenaddress=0.0.0.0 connectport=11434 connectaddress=wsl
```

Now you can access the Ollama service from Windows at `http://your-pc-ip:11434/`.
