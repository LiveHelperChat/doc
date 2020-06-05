---
id: execute-js
title: Execute javascript
---

This event is usefull if you want to execute custom javascript. You do not need to write `<script>` tag in this field content.

To execute javascript in widget iframe scope

```js
console.log('Custom javascript');
```

To execute javascript in page scrope. Let's say parent has function defined you can call this function by executing.

```js
window.parent.parentFunction();
```