---
id: validate-information
title: Validating a visitor provided information
sidebar_label: Validating information
---

## Introduction

This is sample bot/extension which validates a customer provided information. 

## Bot

Bot can be found at https://github.com/LiveHelperChat/lhcparcel/blob/master/doc/bot.json which you can download and just import.

You can download extension from https://github.com/LiveHelperChat/lhcparcel

## How does it work?

As soon chat is started it asks a visitor what does he wants. If visitor clicks `Where is my parcel` then `Search for parcel` trigger is executed and extension does all the verifying process and returns output.

## What it does?

It asks for a customer for a tracking number and depending on third party response gives the following output

* Parcel number is invalid
* Parcel is not found
* Correct parcel status is returned.

## How can it be used?

It can be as boilerplate for similar extensions. Where you need to return something based what user has entered. E.g

* Tracking information
* Order status
* Etc...

## Workflow

Step 1

![](/img/bot/parcel-init.png)

Step 2

![](/img/bot/parcel-finish.png)

