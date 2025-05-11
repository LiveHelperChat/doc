---
id: nginx-configuration-tips
title: Nginx configuration
---

Demo install nginx configuration example

```apacheconf
    # Demo install
server {
   listen          *:80;
   server_name     demo.livehelperchat.com;
   root           /<path_to_folder>/livehelperchat_demo_com;
   access_log     /var/log/nginx/access_demo_livehelperchat.log main;

   location ~* (^(?!(?:(?!(php)).)*/(albums|bin|var|lib|cache|doc|settings|pos|modules)/).*?(index\.php|upgrade\.php)$) {
      include        /etc/nginx/fastcgi_params;
      fastcgi_pass   127.0.0.1:9000;
      fastcgi_index  index.php;
      fastcgi_param  PATH_INFO          $query_string;
      fastcgi_param  SCRIPT_FILENAME /<path_to_folder>/livehelperchat_demo_com/$fastcgi_script_name;
   }

   # Do not allow to hotlink full size images except our self and major search engines
   location ~* \.(gif|jpe?g?|png|bmp|swf|css|js|svg|otf|eot|ttf|woff|woff2|swf|mp3|map|ogg|wasm|wav|pdf|ico|txt)$ {

     if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
        #
        # Custom headers and headers various browsers *should* be OK with but aren't
        #
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
        #
        # Tell client that this pre-flight info is valid for 20 days
        #
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
     }
     
     # We don't want to allow bot to load our stuff. No point...
     # If you are using Cloudflare or any other CDN Cache make sure you have rule so it won't cache empty.
     # In general I suggest do not use this in case you have CDN because of complexity it brings.
     if ($http_user_agent ~* "(google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|Chrome-Lighthouse)" ) {
         add_header 'Access-Control-Allow-Origin' '*';
         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
         add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
         add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
         return 200;
     }
     
     if ($request_method = 'GET') {
         add_header 'Access-Control-Allow-Origin' '*';
         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
         add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
         add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
      }

       aio on;
       directio 512;

       expires max;
       root           /<path_to_folder>/livehelperchat_demo_com;
   }
   
   # This is required if you are running nodeJs extension
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

    set $track_pixel "N";

    if ($uri ~ /mailconv\/tpx/?) {
          set $track_pixel "T";
    }

    if ($http_user_agent ~* "(Google-RCS-Conversation)" ) {
          set $track_pixel "T";
    }

    if ($http_user_agent ~* "(google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|Chrome-Lighthouse)" ) {
        set $track_pixel "${track_pixel}Y";
    }

   location / {
         if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            #
            # Om nom nom cookies
            #
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
            #
            # Custom headers and headers various browsers *should* be OK with but aren't
            #
            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
            #
            # Tell client that this pre-flight info is valid for 20 days
            #
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain charset=UTF-8';
            add_header 'Content-Length' 0;
            return 204;
         }
         
          # We don't want to allow bot to load our stuff. No point...
          # If you are using Cloudflare or any other CDN Cache make sure you have rule so it won't cache empty.
          # In general I suggest do not use this in case you have CDN because of complexity it brings.
         if ($track_pixel = "NY") {
                      add_header 'Access-Control-Allow-Origin' '*';
                      add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, FETCH, PUT, DELETE';
                      add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
                      add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
                      return 200;
         }

         rewrite "^(.*)$" "/index.php?$1" last;
   }
}
```

Example for subdirectory (not tested by me)
```apacheconf
    location /lhc_directory {
        try_files $uri $uri/ /lhc_directory/index.php?q=$uri&$args;
    }
```

## fastcgi_params file

```apacheconf
    fastcgi_param  QUERY_STRING       $query_string;
    fastcgi_param  REQUEST_METHOD     $request_method;
    fastcgi_param  CONTENT_TYPE       $content_type;
    fastcgi_param  CONTENT_LENGTH     $content_length;

    fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
    fastcgi_param  REQUEST_URI        $request_uri;
    fastcgi_param  DOCUMENT_URI       $document_uri;
    fastcgi_param  DOCUMENT_ROOT      $document_root;
    fastcgi_param  SERVER_PROTOCOL    $server_protocol;
    fastcgi_param  HTTPS              $https if_not_empty;

    fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
    fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

    fastcgi_param  REMOTE_ADDR        $remote_addr;
    fastcgi_param  REMOTE_PORT        $remote_port;
    fastcgi_param  SERVER_ADDR        $server_addr;
    fastcgi_param  SERVER_PORT        $server_port;
    fastcgi_param  SERVER_NAME        $server_name;

    # PHP only, required if PHP was built with --enable-force-cgi-redirect
    fastcgi_param  REDIRECT_STATUS    200;

    fastcgi_buffers 256 16k;
    fastcgi_max_temp_file_size 0;
    fastcgi_buffer_size 64k; 
```

## Sound messages support

Also if you are enabling voice messages make sure your nginx sends proper header for wasm file type.  
`/etc/nginx/mime.types`

You might need to add this  
`application/wasm wasm;`

## http section example

```apacheconf
http {
    log_format  main  '$remote_addr $http_host - [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    types_hash_max_size 2048;

    server_tokens   off;

    gzip            on;
    gzip_static     on;
    gzip_comp_level 1;
    gzip_min_length 0;
    gzip_types text/css image/x-icon image/bmp application/x-javascript application/javascript text/javascript application/json;
    gzip_proxied        any;
    gzip_http_version   1.1;
    gzip_disable        "MSIE [1-6]\.";
    gzip_vary           on;

    keepalive_timeout  10 10;

    client_max_body_size 128m;
    client_body_buffer_size    128k;

    client_header_buffer_size       128k;
    large_client_header_buffers   4 64k;
    server_names_hash_max_size 4112;
    server_names_hash_bucket_size 128;

# Rest of default config
```


## Running apache under nginx proxy

If your SSL connection is terminated under nginx, php app has to know that it was served through https. Here is an example how nginx configuration section might look like

```apacheconf
location / {
        proxy_hide_header Access-Control-Allow-Origin;
        add_header 'Access-Control-Allow-Origin' 'domain.example.com';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Headers' 'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
        add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT,DELETE,PATCH';
        proxy_pass              http://lhc/;
        proxy_set_header        X-Real-IP       $remote_addr;
        proxy_set_header        X-Forwarded-For $remote_addr;
        proxy_set_header        Host            $host;
        proxy_set_header        X-Forwarded-Proto $scheme;
}
```


## Using Nginx as a proxy server to LHC installation with limiting exposed URL's

Please adjust to your needs.

 * Only chat module is exposed without mobile app support.
 * NodeJS Extension and websockets taken into account.

```apacheconf
server {
    server_name chat.example.com; # Change to your domain

    # Logging configuration
    access_log /var/log/nginx/lhc_proxy_access.log;
    error_log /var/log/nginx/lhc_proxy_error.log;

    # Default deny all locations
    location / {
        return 403;
    }

    # Remove or keep. Based on our backend server address.
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    # LiveHelperChat backend server
    set $backend_server "http://127.0.0.1:88"; # Change to your actual backend

    # SSL settings for backend connections - ignore certificate errors
    proxy_ssl_verify off;
    proxy_ssl_server_name on;
    proxy_ssl_session_reuse on;

    # Critical proxy header settings - ensure these are applied to all locations
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Connection timeouts
    proxy_connect_timeout 300;
    proxy_send_timeout 300;
    proxy_read_timeout 300;
    
    # Buffer settings
    proxy_buffer_size 16k;
    proxy_buffers 4 16k;
    proxy_busy_buffers_size 16k;
    client_max_body_size 10m;
    
    # Allow only specific URLs
    location /socketcluster/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass $backend_server;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
      }

    ##############
    # NodeJS module.

    location ~ "^/([a-z]{2,3}/)?nodejshelper/tokenvisitor(/.*)?$" {
        proxy_pass $backend_server;
    }

    ##############
    # Webhooks module. Required for third party chats to work.

    location ~ "^/([a-z]{2,3}/)?webhooks/incoming(/.*)?$" {
        proxy_pass $backend_server;
    }

    ##############
    # CHAT Module

    # Widget REST API module - all allowed paths. Main widget calls.
    location ~ "^/([a-z]{2,3}/)?widgetrestapi/(.*)$" {
        proxy_pass $backend_server;
    }

    # Captcha module
    location ~ "^/([a-z]{2,3}/)?captcha/captchastring(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Chat module - all allowed paths
    location ~ "^/([a-z]{2,3}/)?chat/(verifytoken|updateattribute|updatejsvars|logevent|setnewvid|refreshcustomfields|addmsguser|editprevioususer|updatemsguser|getmessage|voteaction|syncuser|transfertohuman|editnick|usertyping|checkchatstatus|getstatus|htmlsnippet|chatcheckstatus|getstatusembed|startchat|start|begin|modal|chatwidget|reopen|readoperatormessage|chatcheckoperatormessage|extendcookie|logpageview|chatwidgetclosed|chat|printchat|downloadtxt|readchatmail|chatpreview|bbcodeinsert|chatwidgetchat|userclosechat|accept|confirmleave|reacttomessagemodal|sendchat)(/.*)?$" {
        proxy_pass $backend_server;
    }

    # File module
    location ~ "^/([a-z]{2,3}/)?file/(uploadfile|fileoptions|uploadfileonline|downloadfile|storescreenshot)(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Generic Bot module
    location ~ "^/([a-z]{2,3}/)?genericbot/(buttonclicked|updatebuttonclicked)(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Form module. Used if forms are embede in the wdiget.
    location ~ "^/([a-z]{2,3}/)?form/formwidget(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Survey module
    location ~ "^/([a-z]{2,3}/)?survey/(fillwidget|fill|fillinline|backtochat|isfilled)(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Theme module
    location ~ "^/([a-z]{2,3}/)?theme/(admincss|gethash)(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Notifications module. Allows visitor to subscribe to chat notifications. Optional.
    # location ~ "^/([a-z]{2,3}/)?notifications/(subscribe|read)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Paid Chat module
    # location ~ "^/([a-z]{2,3}/)?paidchat/(expiredchat|removedpaidchat|invalidhash)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Product module. Uncomment if you are using products feature in the chat.
    # location ~ "^/([a-z]{2,3}/)?product/getproducts(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Voice Video module. Uncomment if you are using voice calls feature.
    # location ~ "^/([a-z]{2,3}/)?voicevideo/(call|join)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    ###############

    # MAIL Conversion module

    # Tracking pixel
    location ~ "^/([a-z]{2,3}/)?mailconv/tpx(/.*)?$" {
        proxy_pass $backend_server;
    }

    # Mail Conversation Authentication module
    location ~ "^/([a-z]{2,3}/)?mailconvoauth/msoauth(/.*)?$" {
        proxy_pass $backend_server;
    }

    # CoBrowse module. Uncomment if you are using co browsing
    # location ~ "^/([a-z]{2,3}/)?cobrowse/(storenodemap|finishsession)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Other optional public endpoints

    # Audit module. Just test url for debuging purposes.
    # location ~ "^/([a-z]{2,3}/)?audit/test(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # ChatBox module
    # location ~ "^/([a-z]{2,3}/)?chatbox/(syncuser|addmsguser|chatwidget|chatwidgetclosed|configuration)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Export module
    # location ~ "^/([a-z]{2,3}/)?export/(getchat|getcount)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # FAQ module
    # location ~ "^/([a-z]{2,3}/)?faq/faqwidget(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Group Chat module. Can be used as API endpoint also.
    # location ~ "^/([a-z]{2,3}/)?groupchat/(addmessage|sync)(/.*)?$" {
    #     proxy_pass $backend_server;
    # }

    # Install module
    # location ~ "^/([a-z]{2,3}/)?install/install(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # REST API module - all allowed paths
    # location ~ "^/([a-z]{2,3}/)?restapi/(.*)$" {
    #    proxy_pass $backend_server;
    # }

    # System module. Responsible for confirm dialog content.
    # location ~ "^/([a-z]{2,3}/)?system/(autodbupdate|confirmdialog)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # User module - all allowed paths
    # location ~ "^/([a-z]{2,3}/)?user/(login|autologin|autologinuser|logout|loginasuser|forgotpassword|remindpassword|setsetting|setsettingajax|setsettingajaxraw)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # XML module - all allowed paths. Mobile application endpoints
    # location ~ "^/([a-z]{2,3}/)?xml/(checklogin|closedchats|lists|getuseronlinestatus|setonlinestatus|deletechat|chatdata|cannedresponses|chatssynchro|closechat|addmsgadmin|transferchat|transferuser|accepttransfer|accepttransferbychat|sendnotice)(/.*)?$" {
    #    proxy_pass $backend_server;
    # }

    # Disable access to doc folder
    location ~ "^/doc(.*)?$" {
        return 403;
    }

    # Static file handling - only if needed
    location ~* \.(eot|woff|ttf|svg|gif|jpe?g?|png|bmp|swf|css|js|swf|mp3|ogg|map|wav|pdf|ico|txt|wasm|woff2)$ {
        proxy_pass $backend_server;
        expires 30d;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/chat.example.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/chat.example.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = chat.example.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name chat.example.com;
    return 404; # managed by Certbot
}
```

