---
id: geo-configuration
title: How to configure geo detection
sidebar_label: Geo configuration
---

## Introduction

In the geo configuration section, you can configure how LHC detects user locations. By default, we use [MaxMind](https://www.maxmind.com/en/home) for this purpose, and no additional configuration is required.

Here are some remote geolocation services:

*   [Abstract API](https://www.abstractapi.com/ip-geolocation-api)
*   [ipstack](https://ipstack.com)
*   [IPinfoDB](https://ipinfodb.com)
*   [LocatorHQ](https://locatorhq.com)
*   [ip-api.com](http://ip-api.com)

### Local Geolocation Options

*   mod\_geoip2
*   [MaxMind GeoLite2](http://dev.maxmind.com/geoip/geoip2/geolite2/)
*   PHP-GeoIP module

![](/img/chat/geo-configuration.jpg?v=2)

To display online visitor icons on the map, you will need to:

*   Obtain a REST API key from Google.
*   Use `City` based detection in the MaxMind configuration. Ensure you have downloaded the `var/external/geoip/GeoLite2-City.mmdb` file from [MaxMind](https://www.maxmind.com/en/home).

To display the location of visitors who have started a chat on the map, you need to:

*   Obtain a REST API key from Google.
*   Enable the Maps Static API.

## Permissions

To configure this section, an operator must have the following permission:

```
'lhchat','administrategeoconfig'
```
