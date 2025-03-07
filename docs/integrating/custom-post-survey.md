---
id: custom-post-survey
title: Custom Post-Survey
---

This is a small example of how you can integrate a custom post-survey into Live Helper Chat.

## Extensions

The extension should listen for this event:

```php
$dispatcher->listen('widgetrestapi.initchat',array($this, 'initReactChat'));
```

The function can look like this:

```php
public function initReactChat($params) {
    $params['output']['chat_ui']['survey_id'] = 'any your internal id';
    $params['output']['chat_ui']['survey_url'] =  'https://example.com/survey.html';
}
```

## How do I inform Live Helper Chat that the survey has been completed?

You should call this JavaScript function. Once this happens, Live Helper Chat will know that the survey has been completed and will close the widget for the visitor. You can use `setTimeout` before calling this function.

```js
parent.postMessage("lhc_chat_closed_explicit","*"); // I would prefer this one
// OR use the one you like more :) There is no real difference in the core.
parent.postMessage("lhc_survey_completed","*");
```
