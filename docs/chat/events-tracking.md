---
id: events-tracking
title: Events Tracking
sidebar_label: Events Tracking
---

## Introduction

Events tracking allows track events for Google Analytics, Motomo or any other service of your choice.

It allows track events only for specific departments and events of your choice.

There is few templates for different tracking services. You can also write your script if you want.

Available placeholders. You do not need to use quotes because this text is processed through `JSON.stringify` function.
 
 * {{eventCategory}} - event category.
 * {{eventAction}} - event action
 * {{eventLabel}} - event label
 * {{eventInternal}} - this holds systematic [name of an event](../javascript-arguments.md). E.g `clickAction`,`closeWidget` etc.

## Tracking events in static URL

Static url example you can find [here](javascript-arguments.md#static-url-generation)

To track events in popup you have to embed your tracking script in `Javascript for static URL. Please paste your GA or any other script here.` it has to include `<script>` tags.

## Permissions

Permission to see `Events tracking` link in `Live help configuration` section and have configuration per department. 

> 'lhchatsettings','events'

Permission to change default configuration

> 'lhsystem','ga_configuration'