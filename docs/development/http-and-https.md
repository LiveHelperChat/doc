---
id: http-and-https
title: How to configure HTTPS and HTTP? Configuration if site has subdomains.
sidebar_label: HTTPS and HTTP
---

Few things there is important. Possible scenario bellow

## Applies to one domain/multiple domains if they internaly do not switch protocol from http to https

1.  **My site and chat is using http all the time, what should i change?**
    1.  Completely nothing
2.  **My site and chat is using https all the time, what should i change?**
    1.  Completely nothing
    2.  I recommend to check - "Use secure cookie, check this if you want to force SSL all the time"
3.  **Some parts of my site is using https and some http what should i change also subdomain changes for checkout page? (changing subdomains case)**
    1.  During embed code generation choose https mode
    2.  In chat configuration enter "Chat configuration" => "Misc" in field "Please enter explicit http mode. Either http: or https:, do not forget : at the end." enter **https:**
    3.  Enter your root domain in "Chat configuration" => "Misc" -> "Set your domain to enable user tracking across different domain subdomains." (E.g example.com)
    4.  **Un**check if checked - "Use secure cookie, check this if you want to force SSL all the time"
4.  **Chat is running on https mode and does not support http, but site is running on http what should i Change for chat to load all data using https all the time? (same domain all the time)**
    1.  During embed code generation choose https mode
    2.  In chat configuration enter "Chat configuration" => "Misc" in field "Please enter explicit http mode. Either http: or https:, do not forget : at the end." enter **https:**
    3.  **Un**check if checked - "Use secure cookie, check this if you want to force SSL all the time"
5.  ​**My site is running https but my chat is running on http and it fails to load data because it looks for https what should i change?**
    1.  Browser does not allow loading scripts in http protocol if site is running on https please make sure that script is accesable through https
6.  **My site has subdomains and chat session is lost during user navigation across subdomains, what should i do?**
    1.  **​**Follow basic tips from question (3)
    2.  Enter your domain in "Chat configuration" => "Misc" -> "Set your domain to enable user tracking across different domain subdomains."

## Applies to one domain/multiple domains if they internaly do switch between http to https

1.  **I'm using LHC for different domains and some of domains has https some don't what should I change?**
    1.  ​During embed code generation choose https mode
    2.  In chat configuration enter "Chat configuration" => "Misc" in field "Please enter explicit http mode. Either http: or https:, do not forget : at the end." enter **https:**
    3.  In chat configuration enter "Chat configuration" => "Misc" check "Disable HMTL5 storage, check it if your site is switching between http and https"

​​By default for 90% of cases you have to change nothing to get it work. These tips are usefull only for special cases