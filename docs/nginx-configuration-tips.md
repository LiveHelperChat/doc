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
