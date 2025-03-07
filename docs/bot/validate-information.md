---
id: validate-information
title: Validating a visitor provided information
sidebar_label: Validating information
---

## Introduction

This is a sample bot/extension that validates information provided by a customer.

## Bot

Bot can be found at https://github.com/LiveHelperChat/lhcparcel/blob/master/doc/bot.json which you can download and just import.

You can download extension from https://github.com/LiveHelperChat/lhcparcel

## How does it work?

When a chat is started, the bot asks the visitor what they want. If the visitor clicks "Where is my parcel," the "Search for parcel" trigger is executed. The extension then performs the verification process and returns the output.

## What it does?

It asks the customer for a tracking number and, depending on the third-party response, provides one of the following outputs:

*   Parcel number is invalid.
*   Parcel is not found.
*   The correct parcel status is returned.

## How can it be used?

It can be used as a boilerplate for similar extensions where you need to return information based on what the user has entered. For example:

*   Tracking information
*   Order status
*   etc.

## Workflow

Step 1

![](/img/bot/parcel-init.png)

Step 2

![](/img/bot/parcel-finish.png)

