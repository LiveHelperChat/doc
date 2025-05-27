---
id: widget
title: Widget integration in third party applications
---

This tutorial outlines the changes and features needed to integrate the widget into third-party applications.

## Mapping started chats to the same logged visitor

To ensure that started chats are always mapped to the same logged visitor, you need to pass a `UUID` in your embed code. This way, each chat session will be consistently associated with the same online visitor.

E.g.

```js
LHC_API.args = {
    UUID : '<?php echo md5(user_id . 'some hash')?>',
    ...
}
```

## Showing previous visitor messages in the widget (optional)

This option should be activated in the widget [themes](theme/theme.md#show-previous-chat-messages-in-chat-widget).

Remember to apply the theme to your widget.

## Embedding widget in full screen mode

Take a look at https://livehelperchat.com/demo-12c.html. Specifically, this sample should be useful:

* https://livehelperchat.com/lhcsamples/sample-5.html

