---
id: custom-post-survey
title: Custom post survey
---

This is small example how you can integrate custom post survey into Live Helper Chat.

## Extensions

Extension should listen to this event
```php
    $dispatcher->listen('widgetrestapi.initchat',array($this, 'initReactChat'));
```

Function can look like

```php
public function initReactChat($params) {
    $params['output']['chat_ui']['survey_id'] = 'any your internal id';
    $params['output']['chat_ui']['survey_url'] =  'https://example.com/survey.html';
}
```

## How do I inform Live Helper Chat that survey has been completed?

You should call this javascript function. Once this happens Live Helper Chat will know that survey has been completed and will close widget for the visitor. You can have some kinda of `setTimeout` before calling this function.

```
window.parent.postMessage("lhc_survey_completed","*");
```