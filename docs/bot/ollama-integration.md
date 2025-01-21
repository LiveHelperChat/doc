---
id: ollama-integration
sidebar_label: Ollama integration (Completions, Tool calls)
title: Integrating Ollama into Live Helper Chat with tool calls support
---

The Present sample is using [llama3-groq-tool-use](https://ollama.com/library/llama3-groq-tool-use) model. You can use any other model as well.

Models I have tried and the best ones I found are in my subjective opinion:

* https://ollama.com/library/hermes3 the best one I found so far in that size. 7b parameters model.
* https://ollama.com/library/mistral-nemo takes second place. 12b parameters.
* https://ollama.com/library/llama3-groq-tool-use the one I used in this example.

* You will need working ollama model and ollama server running.

Installation

* Import [Rest API](/img/bot/ollama/rest-api.json)
* Import [Bot](/img/bot/ollama/bot.json) and choose just imported Rest API in import window.

Important

* After installation changes IP of running ollama service.
* For debug you can just edit Rest API in back office and check `Log all request and their responses as system messages.`
* Make sure your version has https://github.com/LiveHelperChat/livehelperchat/commit/fc1dc721d912a79064e8cbba451e6ac40dda831b those changes.

### Forwarding port on WSL to Windows

```shell
From ubuntu on windows WSL layer.

```shell
vim /etc/systemd/system/ollama.service
```

Append `OLLAMA_HOST=0.0.0.0` to the `Service` directive.

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

Execute now

```shell
service ollama restart
systemctl daemon-reload
```

From windows command line find out the ip address of the WSL layer.

```
C:\Users\remdex>wsl.exe hostname -I
172.29.52.196 172.17.0.1
```

Edit windows windows hosts file `C:\Windows\System32\drivers\etc\hosts` and add the following line.

```
172.29.52.196 wsl
```

Forward this port to windows from WSL layer.

```
netsh interface portproxy set v4tov4 listenport=11434 listenaddress=* connectport=11434 connectaddress=wsl
```

Now you can access the ollama service from windows at `http://your-pc-ip:11434/`.