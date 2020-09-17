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

## Permissions

For an operator to be able configure this section he has to have this permission

> 'lhsystem','ga_configuration'