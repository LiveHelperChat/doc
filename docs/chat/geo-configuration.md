---
id: geo-configuration
title: How to configure geo detection
sidebar_label: Geo configuration
---

## Introduction

In geo configuration you can configure how LHC is detecting user location. By default we use [maxmind](https://www.maxmind.com/en/home) for that purpose and you do not have to do any configuration.

![](/img/chat/geo-configuration.jpg)

To show online visitors icons in the map you will have

* To get REST API key from google.
* In maxmind configuration you have to use `City` based detection. Make sure that you have downloaded `var/external/geoip/GeoLite2-City.mmdb` this file from [MaxMind](https://www.maxmind.com/en/home).

To show started chat visitor location on the map you have to enable 

* To get REST API key from google.
* Enable Maps Static API

## Permissions

For an operator to be able configure this section he has to have this permission

> 'lhchat','administrategeoconfig'