---
id: node-js
title: NodeJS Support
---

## Requirements

*   Node.js on the server (required)
*   Redis (optional)
*   Browser with WebSocket support (works with IE8+, Firefox, and Chrome) (optional)

Read more to find out how to install it

Location to download:

### [https://github.com/LiveHelperChat/NodeJS-Helper](https://github.com/LiveHelperChat/NodeJS-Helper)

## Installation

1.  Place the `nodejshelper` folder in your server's extensions folder. The path should look like `extension/nodejshelper/...`.
2.  Install Node.js:
    1.  Ubuntu: [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
    2.  CentOS: [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server)
        *   The easiest method is to install from the EPEL repository. See the tutorial.
3.  To enable publish notifications, install [Redis](http://redis.io/).
    1.  On CentOS, use `yum install redis`.
    2.  Configure Redis to start on boot:
        *   `systemctl enable redis.service`
    3.  Start the Redis service:
        *   `systemctl start redis.service`
4.  Install Composer dependencies: `cd extension/nodejshelper && composer install`
5.  Install Node dependencies: `cd extension/nodejshelper/serversc/lhc && npm install`
6.  In the file [https://github.com/LiveHelperChat/NodeJS-Helper/blob/master/nodejshelper/serversc/lhc/server.js#L54](https://github.com/LiveHelperChat/NodeJS-Helper/blob/master/nodejshelper/serversc/lhc/server.js#L54), set the same secret hash as your [settings.ini.php](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/settings/settings.ini.default.php#L12).
7.  Copy `extension/nodejshelper/settings/settings.ini.default.php` to `extension/nodejshelper/settings/settings.ini.php`.
8.  Enable the extension in `settings.ini.php`:

    ```php
    'extensions' => array(
        0 => 'nodejshelper',
    ),
    ```
9.  Clear the cache from the back office.
10. To verify the installation, navigate to `extension/nodejshelper/serversc/lhc` and execute `node server.js`.
11. Start a chat. You should see Node.js messages in the console.
12. To run Node.js as a service on CentOS, use `npm install -g forever`.
13. Create a Node.js service file (e.g., `/usr/lib/systemd/system/nodejshelper.service`) with the following content. Adjust the variables in **bold** based on your environment. You may also want to add a `nodejs` user (e.g., `adduser nodejs`).

    ```
    [Unit]
    Description=Live Helper Chat NodeJS Daemon

    [Service]
    User=nodejs
    ExecStart=/usr/bin/forever /var/www/client/lhc_web/extension/nodejshelper/serversc/lhc/server.js
    LimitNOFILE=100000

    [Install]
    WantedBy=multi-user.target
    ```

14. Start the service: `systemctl start nodejshelper.service`
15. Enable the service on startup: `systemctl enable nodejshelper.service`

## Running Node.js behind an Nginx Proxy

In this example node.js proxy listens on 444 port.

```
 server {  
     listen         *:80;  
     server_name     node.livehelperchat.com;  
       
     location / {  
           proxy_set_header X-Real-IP $remote_addr;  
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
           proxy_set_header Host $http_host;  
           proxy_set_header X-NginX-Proxy true;  
       
           proxy_pass http://127.0.0.1:8000;  
           proxy_redirect off;  
           proxy_http_version 1.1;  
           proxy_set_header Upgrade $http_upgrade;  
           proxy_set_header Connection "upgrade";  
     }  
 }
```

If you are using sub-location. No need separation subdomain for node
```
location /socketcluster/ {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://127.0.0.1:8000;
      proxy_redirect off;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
}
```

Here is how extension/nodejshelper/settings/settings.ini.php settings part should look like

```php
return array(
    'connect_db' => 'localhost',
    'connect_db_id' => 0,
    'automated_hosting' => false,
    'public_settings' => array(
        'hostname' => (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : null),
        'path' => '/socketcluster/',
        'port' => null, //some custom port
        'secure' => null, // true || false
    )
);
```

:::tip Tip
If your website is in `HTTPS` mode please put `secure` to `true`
:::

### Tip

If you are providing separate installations for each client manually you can just set unique number for instance_id and each installation will have it's own space and will be able to use NodeJS. That means that this extension can be used for unlimited number of chats instances on the same server. You just have to be sure that instance_id is unique, it can be either number or text.

## Running Node.js as a Background Service

Need to notice one thing that you may have to increase ulimit in system to accept more connections than 1024. I saw some flaws then nodejs stopped accepting connections because of this.

## How It Works and Which AJAX Calls It Eliminates

1.  When user sends a message using ajax and receives a html for message list append. This already formated html is send directly to Node.js and is distrubuted in real time to all connected users (Chatbox case). They do not have to execute sync. Actually there is no sync going in the background anymore with this extension. Also when user sends a message, admin is informed that there is some information and only then operator executes sync call.
2.  Then operator sends a message to chat. User is informed that there is pending message and ajax call is executed. So there is no running ajax calls in the background anymore. Ajax is executed only then there is some information.
3.  If you use publish notifications, administration interface sync calls are also eliminated.

## Why AJAX Calls Are Still Involved

1.  To remake completely all parts would take a lot of time which would involve permission checking/connecting to database and in general just duplicating php modules actions and so on. With this extension we basically just distribute load across connected users and do not have to pay attention to permissions because standard ajax calls takes cares of this. This extension does not override even a single core file or template. This extensions is like hybrid solution between full WebSockets application and ajax based. I just take what's the best from both worlds.

## Troubleshooting: No Messages Received

*   Enable debug output in NodeJS extension. Just edit settings.js file and enable debug output.
*   When you accept or start new chat as a client, you should see some actions in the console. Also check in chrome debug that there is no errors and it connects to your server.

## Does It Reduce Back Office Operator Sync Calls?

Yes it does. We are waiting users actions and only when there is some information we execute ajax sync call.

## Does This Extension Support the Automated Hosting Plugin?

Yes it does!

## What Does the Publish Notifications Option Do?

When enabled they eliminate administration sync calls. (Right column chats list). Also publish notifications are used when desktop client writes a mesage. Like desktop client does not connect to NodeJs. Workflow is the following

Desktop client -> Web server -> Redis -> NodeJs pulls notification -> Emits signal to listening socket -> Web browser issues ajax request to update it's messages list.

## Is There Failover if NodeJS Dies or a Client Cannot Connect?

Yes. Ajax calls is eliminated only if client succesfully connects to NodeJs. If during chat session customer or operator looses connection to NodeJs, let say node dies. LHC automatically falls back to standard ajax queries.
