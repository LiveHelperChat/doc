---
id: events-tracking
title: Events Tracking
sidebar_label: Events Tracking
---

## Introduction

Events tracking allows you to track events using Google Analytics, Matomo, or any other service of your choice.

It allows you to track events for specific departments and events.

There are a few templates available for different tracking services. You can also write your own script if you prefer.

Available placeholders (no quotes needed, as this text is processed using the `JSON.stringify` function):

*   `{{eventCategory}}` - event category
*   `{{eventAction}}` - event action
*   `{{eventLabel}}` - event label
*   `{{eventInternal}}` - this holds the systematic [name of an event](../javascript-arguments.md). E.g., `clickAction`, `closeWidget`, etc.

## Tracking Events in a Static URL

You can find a static URL example [here](javascript-arguments.md#static-url-generation).

To track events in a popup, embed your tracking script in `Javascript for static URL. Please paste your GA or any other script here.`. Ensure it includes `<script>` tags.

## Permissions

The following permission is required to see the `Events tracking` link in the `Live help configuration` section and to have configuration options per department:

> `lhchatsettings`,`events`

The following permission is required to change the default configuration:

> `lhsystem`,`ga_configuration`
