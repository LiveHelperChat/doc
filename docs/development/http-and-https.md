---
id: http-and-https
title: Configuring HTTPS and HTTP for Your Site
sidebar_label: HTTPS and HTTP
---

Here are a few important points regarding HTTPS and HTTP configuration. Below are possible scenarios:

## Scenarios for Sites That Do Not Switch Between HTTP and HTTPS Internally

These scenarios apply to single or multiple domains that consistently use either HTTP or HTTPS.

1.  **My site and chat are always using HTTP. What should I change?**
    1.  No changes are required.
2.  **My site and chat are always using HTTPS. What should I change?**
    1.  No changes are required.
    2.  It is recommended to check "Use secure cookie" if you want to force SSL all the time.
3.  **Some parts of my site use HTTPS, and some use HTTP. What should I change if subdomain changes occur, such as for a checkout page (changing subdomains case)?**
    1.  During embed code generation, choose HTTPS mode.
    2.  In the chat configuration, navigate to "Chat configuration" => "Misc." In the field "Please enter explicit http mode. Either http: or https:, do not forget : at the end," enter **https:**.
    3.  Enter your root domain in "Chat configuration" => "Misc" -> "Set your domain to enable user tracking across different domain subdomains" (e.g., example.com).
    4.  **Uncheck** "Use secure cookie" if it is currently checked.
4.  **The chat is running in HTTPS mode and does not support HTTP, but the site is running in HTTP. What should I change to load all chat data using HTTPS? (Same domain all the time)**
    1.  During embed code generation, choose HTTPS mode.
    2.  In the chat configuration, navigate to "Chat configuration" => "Misc." In the field "Please enter explicit http mode. Either http: or https:, do not forget : at the end," enter **https:**.
    3.  **Uncheck** "Use secure cookie" if it is currently checked.
5.  **My site is running HTTPS, but my chat is running on HTTP, and it fails to load data because it's looking for HTTPS. What should I change?**
    1.  Browsers do not allow loading scripts via HTTP if the site is running on HTTPS. Ensure that the script is accessible via HTTPS.
6.  **My site has subdomains, and the chat session is lost during user navigation across subdomains. What should I do?**
    1.  Follow the basic tips from question (3).
    2.  Enter your domain in "Chat configuration" => "Misc" -> "Set your domain to enable user tracking across different domain subdomains."

## Scenarios for Sites That Switch Between HTTP and HTTPS Internally

These scenarios apply to single or multiple domains that switch between HTTP and HTTPS.

1.  **I'm using LHC for different domains, and some of the domains use HTTPS while others don't. What should I change?**
    1.  During embed code generation, choose HTTPS mode.
    2.  In the chat configuration, navigate to "Chat configuration" => "Misc." In the field "Please enter explicit http mode. Either http: or https:, do not forget : at the end," enter **https:**.
    3.  In the chat configuration, navigate to "Chat configuration" => "Misc." Check "Disable HMTL5 storage" if your site switches between HTTP and HTTPS.

In 90% of cases, no changes are required by default. These tips are useful only for special cases.
