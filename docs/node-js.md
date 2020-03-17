---
id: node-js
title: NodeJS Support
---

Requirements:

*   Node.js on server [Required]
*   Redis [Optional]
*   Browser with WebSockets support. Actually it works with IE8 >=, FF and Chrome [Optional]

Read more to find out how to install it

Location to download:

### [https://github.com/LiveHelperChat/NodeJS-Helper](https://github.com/LiveHelperChat/NodeJS-Helper)

### Install:

1.  Put nodejshelper folder on your server extensions folder. Live helper chat extensions folder. It should look like "extension/nodejshelp/..."
2.  Installing NodeJs
    1.  Ubuntu [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
    2.  Centos [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server)
        1.  Easiest is just install from EPEL repository. See tutorial
3.  For publish notifications to work you have to install [Redis](http://redis.io/)
    1.  On Centos it's easy as yum install redis
    2.  Make redis startup then os starts
        1.  systemctl enable redis.service
    3.  Start redis service
        1.  systemctl start redis.service
4.  Now just navigation to extension server folder (extension/nodejshelper/server)
    1.  We now should install dependency packages by issueing these commands
        1.  npm install socket.io
        2.  npm install redis
5.  Adjust settings in:
    1.  extension/nodejshelper/server/settings.js file
    2.  extension/nodejshelper/design/nodejshelpertheme/tpl/pagelayouts/parts/nodejshelper_config.tpl.php set your node.js server address and port.
6.  Enable extension in settings.ini.php file.
    1.  'extensions' =>   
              array (  
                0 => 'nodejshelper',  
              ),
7.  Clean cache from back office.
8.  Now ir order to make sure that everything works you can navigation to extension/nodejshelper/server and execute
    1.  node server.js
9.  Start some chat, you should see some messages in console.
10.  Making running NodeJs as service on Centos
    1.  For this we need one more packaged so while being in server folder execute 
        1.  npm install forever
    2.  You may want to symlink forver to /usr/bin/forever
11.  Next we have to write nodejs service file. It's content can be the following (vim /usr/lib/systemd/system/nodejshelper.service). Adjust bolded variables based on your enviroment. Uou may want to add nodejs as user also (adduser nodejs)

``` 
    > [Unit]
    > Description=Live helper chat NodeJS Daemon
    > 
    > [Service]
    > User=**nodejs**
    > ExecStart=**/usr/bin/forever /var/www/client/lhc_web/extension/nodejshelper/server/server.js**
    > LimitNOFILE=100000
    > 
    > [Install]
    > WantedBy=multi-user.target</pre>

    Now you can run service by executing
```

12.  systemctl start nodejshelper.service

13.  To enable it on startup just execute systemctl enable nodejshelper.service

Have fun. This extension is very usefull especialy for chatbox. Completely eliminates synchonization calls.

### How to run nodejs under nginx as proxy?

In this example node.js proxy listens on 444 port.

```
> server {  
>     listen         *:80;  
>     server_name     node.livehelperchat.com;  
>       
>     location / {  
>           proxy_set_header X-Real-IP $remote_addr;  
>           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
>           proxy_set_header Host $http_host;  
>           proxy_set_header X-NginX-Proxy true;  
>       
>           proxy_pass http://127.0.0.1:444/;  
>           proxy_redirect off;  
>           proxy_http_version 1.1;  
>           proxy_set_header Upgrade $http_upgrade;  
>           proxy_set_header Connection "upgrade";  
>     }  
> }
```

And here is how nodejshelper_config.tpl.php settings part should look like

```
> $nodeJsHelperSettings = array (  
>         'prefix' => 'http://',  
>         'host' => 'node.livehelperchat.com',  
>         'port' => '80',  
>         'secure' => false,  
>         'use_cdn' => true, // Use google provided socket.io.js path  
>         'use_publish_notifications' => true, // Redis has to be installed and working  
>         'redis' => array (  
>                    'scheme' => 'tcp',
>                     'host'   => '127.0.0.1',
>                     'port'   => 6379,
>         ),
>         'instance_id' => 0// If you are using automated hosting extension use erLhcoreClassInstance::getInstance()->id   as value
> 
> );
```

### Tip

If you are provinding separate instalations for each client manually you can just set unique number for instance_id and each installation will have it's own space and will be able to use NodeJS. That means that this extension can be used for unlimited number of chats instances on the same server. You just have to be sure that instance_id is unique, it can be either number or text.

### How to run node.js as background service?

Need to notice one thing that you may have to uncrease ulimit in sytem to accept more connections than 1024\. I saw some flaws then nodejs stopped accepting connections because of this.

### How does it works and what ajax calls it eliminates?

1.  Then user sends a message using ajax and receives a html for message list append. This already formated html is send directly to Node.js and is distrubuted in real time to all connected users (Chatbox case). They do not have to execute sync. Actually there is no sync going in the background anymore with this extension. Also then user sends a message, admin is informted that there is some information and only then operator executes sync call.
2.  Then operator sends a message to chat. User is informed that there is pending message and ajax call is executed. So there is no running ajax calls in the background anymore. Ajax is executed only then there is some information.
3.  If you use publish notifications, administration interface sync calls are also eliminated.

### Why there are still ajax calls involved?

1.  To remake completely all parts would take a lot of time which would involve permission checking/connecting to database and in general just duplicating php modules actions and so on. With this extension we basically just distribute load across connected users and do not have to pay attention to permissions because standard ajax calls takes cares of this. This extension does not override even a single core file or template. This extensions is like hybrid solution between full WebSockets application and ajax based. I just take what's the best from both worlds.

### I do not receive a messages, what to do?

*   Enable debug output in NodeJS extension. Just edit settings.js file and enable debug output.
*   Then you accept or start new chat as a client, you should see some actions in the console. Also check in chrome debug that there is no errors and it connects to your server.

### Does it also reduces back office operators sync calls?

Yes it does. We are waiting users actions and only then there is some information we execute ajax sync call.

### Does this extensions supports automated hosting plugin?

Yes it does!

### What for publish notifications are used?

Then enabled they eliminates administration sync calls. (Right column chats list). Also publish notifications are using then desktop client writes a mesage. Like desktop client does not connect to NodeJs. Workflow is the following

Desktop client -> Web server -> Redis -> NodeJs pulls notification -> Emits signal to listening socket -> Web browser issues ajax request to update it's messages list.

### Is there any fail over if my NodeJs dies or client cannot connect?

Yes. Ajax calls is eliminated only if client succesfully connects to NodeJs. If during chat session customer or operator looses connection to NodeJs, let say node dies. LHC automatically falls back to standard ajax queries.

### Does NodeJs extension is compatible with Desktop client?

**Yes**, but you will have to use Redis and enable notifications in settings.ini.js file

### What features of node.js you are using?

Written Node.js server uses [socket.io](https://github.com/LearnBoost/socket.io) and [Rooms](https://github.com/LearnBoost/socket.io/wiki/Rooms)